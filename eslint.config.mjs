import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        // Add your custom ESLint rules here
        rules: {
            "@typescript-eslint/no-unused-vars": "off",
            "@next/next/no-img-element": "off",
        },
    },
];

export default eslintConfig;
