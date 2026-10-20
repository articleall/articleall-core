import { RULES } from "./router-data.js";
import { getSetting, setSetting } from "./storage.js";

const OVERRIDES_KEY = "siteOverrides";
const DEFAULT_OVERRIDES = {};
let cachedOverrides;

function domains() {
  return [
    ...RULES.query,
    ...RULES.slashQuery,
    ...RULES.path,
  ].map((rule) => rule.domain).filter((domain, index, all) => all.indexOf(domain) === index);
}

function labelFor(domain) {
  return domain.split(".")[0].replace(/^\w/, (letter) => letter.toUpperCase());
}

chrome.storage.onChanged.addListener((changes) => {
  if (changes[OVERRIDES_KEY]) {
    cachedOverrides = undefined;
  }
});

export async function getOverrides() {
  if (cachedOverrides) {
    return cachedOverrides;
  }
  const overrides = await getSetting(OVERRIDES_KEY, DEFAULT_OVERRIDES);
  cachedOverrides = overrides && typeof overrides === "object" ? overrides : {};
  return cachedOverrides;
}

export async function getAllSites() {
  const overrides = await getOverrides();
  return domains().map((domain) => ({
    domain,
    label: labelFor(domain),
    enabled: overrides[domain] !== false,
  }));
}

function ruleDomainFor(hostname) {
  const host = hostname.toLowerCase();
  return domains().find((domain) => host === domain || host.endsWith(`.${domain}`)) ?? host;
}

export async function isSiteEnabled(hostname) {
  const overrides = await getOverrides();
  return overrides[ruleDomainFor(hostname)] !== false;
}

export async function setSiteEnabled(domain, enabled) {
  const overrides = { ...(await getOverrides()), [domain.toLowerCase()]: enabled === true };
  await setSetting(OVERRIDES_KEY, overrides);
  cachedOverrides = overrides;
}
