# Simple GraphQL Server (Apollo-based)

## Setup

## Making changes

## Folder Hierarchy

```bash
├── Dockerfile
├── LICENSE
├── README.md
├── package.json
├── src
│   ├── generatedTypes.ts # yarn generate; import for automatic type checking
│   ├── index.ts
│   ├── schema #launches server
│   │   ├── books # alternative schema can also be organized by entities
│   │   │   ├── index.ts
│   │   │   ├── mutations.ts
│   │   │   ├── queries.ts
│   │   │   └── types.ts
│   │   ├── index.ts # combine and export all typedefs and resolvers into single schema
│   │   ├── mutations # all mutations and associated resolvers
│   │   │   ├── index.ts
│   │   │   └── mutation.ts
│   │   ├── queries # match file name to query; can group queries into folders
│   │   │   ├── index.ts
│   │   │   └── query.ts
│   │   ├── subscriptions
│   │   └── types # all data and input types shared across queries, mutations, and other types
│   └── util  # utility libraries
│       └── logger.ts
├── tools
│   ├── codegen.yml # gql-gen command configuration
│   └── generate-gql.sh # launch server for generateTypes.ts; then kill process
├── tsconfig.json
└── yarn.lock
```

## Change Log (Added)

- Foundational code with sample query & mutation (playground @ /graphql)
- Add generatedTypes.ts based on schema using `yarn generate`
- Base-line folder structure and schema merging strategy
- Dockerfile with health check
- Add logger based on [winston](https://github.com/winstonjs/winston)
- GZIP compression

## Todo

- Setup instructions
- [dataloader](https://github.com/facebook/dataloader)
- Authentication
- RBAC using [graphql-shield](https://github.com/maticzav/graphql-shield)
- Links to good type design examples
- Handle environment variables
- Middleware layer using [graphql-middleware](https://github.com/prisma/graphql-middleware)
- 3rd Party REST API integration (w/ LRU caching)
- Schema stitching
