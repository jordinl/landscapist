import { resolve } from "path";
import { readFileSync } from "fs";

const loadLandscape = () => {
  return JSON.parse(readFileSync(resolve("assets", "landscape.json"), "utf-8"));
};

export default loadLandscape;
