export function renderCategories() {
  const data = {
    'İçecekler': ['Çay', 'Kahve', 'Meyve Suyu'],
    'Yiyecekler': ['Burger', 'Salata', 'Pasta']
  };

  const container = document.createElement('div');
  container.className = 'categories';

  Object.entries(data).forEach(([name, products]) => {
    const section = document.createElement('div');
    section.className = 'category';
    section.dataset.category = name;

    const title = document.createElement('h3');
    title.textContent = name;
    section.appendChild(title);

    products.forEach(prod => {
      const btn = document.createElement('button');
      btn.textContent = prod;
      btn.addEventListener('click', () => {
        container.dispatchEvent(new CustomEvent('add-to-cart', {
          detail: { product: prod },
          bubbles: true
        }));
      });
      section.appendChild(btn);
    });

    container.appendChild(section);
  });

  return container;
}
