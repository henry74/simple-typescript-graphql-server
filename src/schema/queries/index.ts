const modules = [require("./query")];

export const resolvers = modules.reduce((state, m) => {
  if (!m.resolvers) {
    return state;
  }

  return {
    ...state,
    ...m.resolvers
  };
}, {});

// join all query types into single string
export const typeDef = modules.map(m => m.typeDef).filter(res => !!res);
