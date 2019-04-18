export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

export interface Query {
  dummy?: Maybe<string>;

  books?: Maybe<(Maybe<Book>)[]>;
}

export interface Book {
  title?: Maybe<string>;

  author?: Maybe<string>;
}

export interface Mutation {
  dummy?: Maybe<string>;

  setFakeStatus?: Maybe<string>;

  addBooks?: Maybe<string>;
}

export interface Subscription {
  dummy?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface SetFakeStatusMutationArgs {
  status: string;
}
export interface AddBooksMutationArgs {
  title: string;
}
