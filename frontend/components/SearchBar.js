export function renderSearch(categoriesContainer) {
  const div = document.createElement('div');
  div.className = 'search-bar';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Ara...';

  input.addEventListener('input', () => {
    const term = input.value.toLowerCase();
    categoriesContainer.querySelectorAll('button').forEach(btn => {
      const match = btn.textContent.toLowerCase().includes(term);
      btn.style.display = match ? '' : 'none';
    });
  });

  div.appendChild(input);
  return div;
}
