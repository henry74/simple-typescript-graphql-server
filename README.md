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
└── types.ts # yarn generate; import for automatic type checking
```

## Change Log (Added)

- Foundational code with sample query & mutation (playground @ /graphql)
- Generate types.ts based on schema (./tools/generate-gql.sh)

## Todo

- Setup instructions
- Docker-related functionality
- Webpack or Packer
- Base-line folder structure and schema merging strategy
