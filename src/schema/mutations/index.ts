const modules = [require("./mutation")];

export const resolvers = modules.reduce((state, m) => {
  if (!m.resolver) {
    return state;
  }

  return {
    ...state,
    ...m.resolver
  };
}, {});

// join all mutation types into single string
export const typeDef = modules.map(m => m.typeDef).filter(res => !!res);
