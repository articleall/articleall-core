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
  await copyFile(
    resolve(coreDir, "router.test.js"),
    resolve(destination, "router.test.js"),
  );
  await copyFile(
    resolve(coreDir, "redirect-guard.test.js"),
    resolve(destination, "redirect-guard.test.js"),
  );
  await writeFile(resolve(destination, "router-data.js"), routerData);
}
