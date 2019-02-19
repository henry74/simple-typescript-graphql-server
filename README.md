# Simple GraphQL Server (Apollo-based)

## Folder Hierarchy

```shell
src
├── index.ts # launches server
├── schema
│   ├── index.ts # combine and export all typedefs and resolvers into single schema
│   ├── mutations # all mutations and associated resolvers
│   │   └── mutation.ts # match file name to mutation; can group mutatations into folders
│   ├── queries # all queries and associated resolvers
│   │   └── query.ts # match file name to query; can group queries into folders
│   ├── subscriptions
│   └── types # all data and input types shared across queries, mutations, and other types
├── types.ts # yarn generate; import for automatic type checking
└── util # utility libraries
    └── logger.ts
```

## Change Log (Added)

- Foundational code with sample query & mutation (playground @ /graphql)
- Generate types.ts based on schema using `yarn generate`
- Base-line folder structure and schema merging strategy
- Dockerfile created
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
- 3rd Party REST API integration
- Schema stitching
