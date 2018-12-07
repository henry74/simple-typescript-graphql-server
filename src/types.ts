// ====================================================
// Types
// ====================================================

export interface Query {
  books?: (Book | null)[] | null;
}

export interface Book {
  title?: string | null;

  author?: string | null;
}

export interface Mutation {
  setFakeStatus?: string | null;
}

// ====================================================
// Arguments
// ====================================================

export interface SetFakeStatusMutationArgs {
  status: string;
}
