# Challenge Node Tenis Monorepo

This mono repo was built with `TurboRepov1.4` + `Vitev3` + `Reactv18` + `Typescriptv4`.

## REQUIREMENTS

1. [NVM](https://github.com/nvm-sh/nvm)
2. node 16.15
3. npm 8.11.0
4. pnpm 7.21.0

4. `pnpm i`
5. `pnpm build`
6. `pnpm run dev --filter server` (in case that you want to run server)
7. `pnpm run dev --filter client` (in case that you want to run front)
7. `pnpm run dev` (in case that you want to run both Back and Front)

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Apps and Packages

-   `client`: a [Vite-React](https://vitejs.dev/) app
-   `server`: a [Express.js](https://expressjs.com/es/) app


### Utilities


- [Node](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [Typescript](https://www.typescriptlang.org/)
- [Passport](https://www.passportjs.org/)
- [TypeORM](https://typeorm.io/)
- [Postgres](https://www.postgresql.org/)
- [React](https://es.reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Axios](https://axios-http.com/docs/intro)
- [React Query](https://react-query-v3.tanstack.com/)

## Setup

This repository is used in the `turbo@latest` command, and selected when choosing which package manager you wish to use with your monorepo (pnpm).

### Build

To build all apps and packages, run the following command:

```
cd challenge-node-tenis
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd challenge-node-tenis
pnpm run dev
```