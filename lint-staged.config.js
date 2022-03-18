module.exports = {
  "*.{ts,tsx}": [() => "tsc --noEmit -p tsconfig.json", "eslint --cache --fix"],
  "**/*": "prettier --write --ignore-unknown",
};
