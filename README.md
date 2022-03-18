## Web-app scaffold based on vite and MUI (Material-UI 5) in TypeScript

- react with MUI (Material-UI v5)
- TypeScript
- eslint
- prettier
- eslint for react-hooks
- pre-commit hook for linting
- basic setup of react-routder-dom (v6) with login and home page
- basic setup of localization with i18next
- basic setup of redux store with redux toolkit and rtkq with example basic auth

#### Install

Find a name for «your-project» in "Kebab case" (this-is-kebab-case)
Got to your scope/group directory you want to add scaffold for «your-project»

```
npx degit pubcore/vite-mui-ts «your-project»
cd «your-project»
cp .env-doc .env

npm i
npm run dev
```

(If `npx degit` does not work, just clone this repo and delete .git dir)
