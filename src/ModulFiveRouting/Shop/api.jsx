const products = [
  {
    id: '1',
    title: 'Picture 1',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt commodi alias, sapiente corporis sint aliquid rem. Voluptatem ipsum vitae eum amet, facilis eaque numquam repellendus unde aliquid porro tenetur.',
    price: 100,
  },
  {
    id: '2',
    title: 'Picture 2',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt commodi alias, sapiente corporis sint aliquid rem. Voluptatem ipsum vitae eum amet, facilis eaque numquam repellendus unde aliquid porro tenetur.',
    price: 120,
  },
  {
    id: '3',
    title: 'Book 1',
    about:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt commodi alias, sapiente corporis sint aliquid rem. Voluptatem ipsum vitae eum amet, facilis eaque numquam repellendus unde aliquid porro tenetur.',
    price: 105,
  },
  {
    id: '4',
    title: 'Book 2',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt commodi alias, sapiente corporis sint aliquid rem. Voluptatem ipsum vitae eum amet, facilis eaque numquam repellendus unde aliquid porro tenetur.',
    price: 150,
  },
  {
    id: '5',
    title: 'Pen 1',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt commodi alias, sapiente corporis sint aliquid rem. Voluptatem ipsum vitae eum amet, facilis eaque numquam repellendus unde aliquid porro tenetur.',
    price: 165,
  },
  {
    id: '6',
    title: 'Pen 2',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt commodi alias, sapiente corporis sint aliquid rem. Voluptatem ipsum vitae eum amet, facilis eaque numquam repellendus unde aliquid porro tenetur.',
    price: 200,
  },
  {
    id: '7',
    title: 'Diary 1',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt commodi alias, sapiente corporis sint aliquid rem. Voluptatem ipsum vitae eum amet, facilis eaque numquam repellendus unde aliquid porro tenetur.',
    price: 80,
  },
  {
    id: '8',
    title: 'Diary 2',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt commodi alias, sapiente corporis sint aliquid rem. Voluptatem ipsum vitae eum amet, facilis eaque numquam repellendus unde aliquid porro tenetur.',
    price: 250,
  },
];

export const getproducts = () => {
  return products;
};

export const getProductById = id => {
  return products.find(el => el.id === id);
};
