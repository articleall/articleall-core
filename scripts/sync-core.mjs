import { mkdir, readFile, writeFile, copyFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const coreDir = resolve(root, "core");
const routerData = `export const RULES = ${await readFile(
  resolve(coreDir, "rules.json"),
  "utf8",
).then((contents) => JSON.stringify(JSON.parse(contents), null, 2))};\n`;

await writeFile(resolve(coreDir, "router-data.js"), routerData);

for (const port of ["articleall-chrome", "articleall-firefox", "articleall-safari"]) {
  const destination = resolve(root, port, "src");
  await mkdir(destination, { recursive: true });
  await copyFile(resolve(coreDir, "router.js"), resolve(destination, "router.js"));
  await copyFile(
    resolve(coreDir, "redirect-guard.js"),
    resolve(destination, "redirect-guard.js"),
  );
  await copyFile(resolve(coreDir, "storage.js"), resolve(destination, "storage.js"));
  await copyFile(
    resolve(coreDir, "enabled-state.js"),
    resolve(destination, "enabled-state.js"),
  );
  await copyFile(resolve(coreDir, "i18n.js"), resolve(destination, "i18n.js"));
  await copyFile(resolve(coreDir, "site-settings.js"), resolve(destination, "site-settings.js"));
  await copyFile(
    resolve(coreDir, "router.test.js"),
    resolve(destination, "router.test.js"),
  );
  await copyFile(
    resolve(coreDir, "redirect-guard.test.js"),
    resolve(destination, "redirect-guard.test.js"),
  );
  await copyFile(
    resolve(coreDir, "background.test.js"),
    resolve(destination, "background.test.js"),
  );
  await copyFile(
    resolve(coreDir, "site-settings.test.js"),
    resolve(destination, "site-settings.test.js"),
  );
  await writeFile(resolve(destination, "router-data.js"), routerData);
  const popupDestination = resolve(root, port, "popup");
  await mkdir(popupDestination, { recursive: true });
  await copyFile(resolve(coreDir, "storage.js"), resolve(popupDestination, "storage.js"));
  const optionsDestination = resolve(root, port, "options");
  await mkdir(optionsDestination, { recursive: true });
  await copyFile(resolve(coreDir, "options.html"), resolve(optionsDestination, "options.html"));
  await copyFile(resolve(coreDir, "options.css"), resolve(optionsDestination, "options.css"));
  await copyFile(resolve(coreDir, "options.js"), resolve(optionsDestination, "options.js"));
}
