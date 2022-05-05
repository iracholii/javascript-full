/// recursion

// input: obj, arr
// output: obj

export const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};

const favorites = ['id-2', 'id-4'];
const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food1',
      nodes: [],
    },
    {
      id: 'id-3',
      name: 'Food2',
      nodes: [
        {
          id: 'id-4',
          name: 'Watermellon',
          nodes: [],
        },
      ],
    },
  ],
};

const res = markFavorites(tree, favorites);
console.log(res);
