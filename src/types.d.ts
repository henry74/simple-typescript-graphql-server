// ====================================================
// Types
// ====================================================

export interface Query {
  dummy?: string | null;

  books?: (Book | null)[] | null;
}

export interface Book {
  title?: string | null;

  author?: string | null;
}

export interface Mutation {
  dummy?: string | null;

  setFakeStatus?: string | null;
}

export interface Subscription {
  dummy?: string | null;
}

// ====================================================
// Arguments
// ====================================================

export interface SetFakeStatusMutationArgs {
  status: string;
}
