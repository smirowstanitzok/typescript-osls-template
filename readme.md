# typescript-osls-template

Dieses Template bietet eine einfache Ausgangsbasis für die Entwicklung von serverless Applikationen mit TypeScript auf AWS. Es basiert auf dem [Open Source Serverless Framework (OSLS)](https://github.com/oss-serverless/serverless) und ist vollständig lizenzfrei nutzbar.

## 🔧 Voraussetzungen

- Node.js ≥ 20.x
- npm ≥ 9.x
- `osls` global installiert

```bash
npm install -g osls
```

## 🚀 Projekt erstellen

Um mit diesem Template ein neues Projekt zu erstellen, führe folgenden Befehl aus:

```bash
sls create --template-url https://github.com/smirowstanitzok/typescript-osls-template --name osls-test
cd osls-test
npm install
```

`osls-test` kann gegen einen eigenen Projektnamen ausgetauscht werden.

## 📁 Verzeichnisstruktur

```bash
.
├── package-lock.json
├── package.json
├── readme.md
├── renovate.json
├── serverless.yml
├── src
│   └── handler.ts
├── test
│   └── unit
│       └── handler.spec.ts
└── tsconfig.json
```
