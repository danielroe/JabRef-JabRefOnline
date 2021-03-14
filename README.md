# JabRefOnline

## Getting started
- Install [Node.js](https://nodejs.org/)
- Install [PostgreSQL](https://www.postgresql.org/)
- Checkout
- Create a `.env` file in the root containing the connection URL for the database, e.g. `DATABASE_URL="postgresql://user:password@localhost:5432/jabref?schema=public"`.
- Run `yarn install`.

## Commands

| Command | Description |
|---------|-------------|
| yarn dev | Start ExpressJS server in development with Nuxt.js in dev mode with hot reloading enabled. Listen on [http://localhost:3000](http://localhost:3000). The GraphQL API is then accessible at [http://localhost:3000/api](http://localhost:3000/api) |
| yarn build | Build the nuxt.js web application for production. |
| yarn start | Start ExpressJS server in production. |
| yarn prisma:studio | Explore data in the database using a visual editor. |


## Directories

- `api` contains the backend.
- `assets` contains uncompiled assets such as styles, images, or fonts. The content of this folder will be processed by webpack, e.g. CSS has pre-processor applied.
- `components` is where we put all our Vue.js components which are then imported into the pages.
- `layouts` contains the layouts that determine the look and feel. [Nuxt documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).
- `middleware` defines custom functions that are run before rendering either a page or a group of pages. [Nuxt documentation](https://nuxtjs.org/docs/2.x/directory-structure/middleware).
- `pages` contains the application's views and routes. Nuxt reads all the `*.vue` files inside this directory and creates the router of your application. 
- `plugins` contains Javascript plugins that are run before mounting the root Vue.js application. [Nuxt documentation](https://nuxtjs.org/guide/plugins).
- `static` is directly mapped to the server root and contains files that have to keep their names (e.g. robots.txt) or likely won't change (e.g. the favicon). Files in this folder are not processed by webpack.
- `store` contains Vuex Store files. [Nuxt documentation](https://nuxtjs.org/guide/vuex-store).

## Recommended VS Code extensions
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma): Adds syntax highlighting, formatting, jump-to-definition and linting for Prisma Schema files. 
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Format code and enforces consistent style

## Technologies used
- [Vue.js](https://vuejs.org/): UI framework [Documentation](https://vuejs.org/v2/guide/)
- [NuxtJS](https://nuxtjs.org/): Vue framework [Documentation](https://nuxtjs.org/docs/2.x/get-started/installation)
- [Prisma](https://www.prisma.io/): [Documentation](https://www.prisma.io/docs/)
- Graphql:
   - [GraphQL code generator](https://graphql-code-generator.com/): [Documentation](https://graphql-code-generator.com/docs/getting-started/index)
   - [Vue Apollo](https://apollo.vuejs.org/): Graphql integration for Vue [Documentation](https://v4.apollo.vuejs.org/guide-option/)
- [Tailwind CSS](https://tailwindcss.com/): CSS framework [Documentation](https://tailwindcss.com/docs), including [Vue Tailwind](https://www.vue-tailwind.com/docs/installation) to extract reusable components 

### GraphQL.js with GraphQL Code Generator
Considered options:
- GraphQL.js with and without GraphQL Code Generator
- TypeGraphQL
- GraphQL Nexus
   - `-` [Future of Nexus Prisma Plugin unclear](https://github.com/graphql-nexus/nexus-plugin-prisma/issues/1039)

Reference:
- [Comparison of GraphQL.js vs. TypeGraphQL vs. GraphQL Nexus](https://medium.com/swlh/graphql-js-vs-typegraphql-vs-graphql-nexus-2a8036deb851): Recommends GraphQL.js with GraphQL Code Generator
- [How Prisma and GraphQL fit together](https://www.prisma.io/graphql)

## References
- Prisma used in different contexts: https://github.com/prisma/prisma-examples
- Example application using Prisma and Apollo: https://github.com/poulainv/tottem
