import {defineConfig} from "eslint/config";
import reackmanConfig from "@reackman/eslint-config";

const eslintConfig = defineConfig([
    ...reackmanConfig,
]);

export default eslintConfig;
