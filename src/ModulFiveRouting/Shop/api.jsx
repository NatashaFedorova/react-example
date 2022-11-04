const products = [
  {
    id: '1',
    title: 'title-1',
    about:
      'About-1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt commodi alias, sapiente corporis sint aliquid rem. Voluptatem ipsum vitae eum amet, facilis eaque numquam repellendus unde aliquid porro tenetur.',
  },
  {
    id: '2',
    title: 'title-2',
    about:
      'About-2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt commodi alias, sapiente corporis sint aliquid rem. Voluptatem ipsum vitae eum amet, facilis eaque numquam repellendus unde aliquid porro tenetur.',
  },
  {
    id: '3',
    title: 'title-3',
    about:
      'About-3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt commodi alias, sapiente corporis sint aliquid rem. Voluptatem ipsum vitae eum amet, facilis eaque numquam repellendus unde aliquid porro tenetur.',
  },
  {
    id: '4',
    title: 'title-4',
    about:
      'About-4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt commodi alias, sapiente corporis sint aliquid rem. Voluptatem ipsum vitae eum amet, facilis eaque numquam repellendus unde aliquid porro tenetur.',
  },
];

export const getproducts = () => {
  return products;
};

export const getProductById = id => {
  return products.find(el => el.id === id);
};
