export function renderQuickButtons() {
  const wrapper = document.createElement('div');
  wrapper.className = 'quick-buttons';

  const clearBtn = document.createElement('button');
  clearBtn.textContent = 'Sepeti Temizle';
  clearBtn.addEventListener('click', () => {
    wrapper.dispatchEvent(new CustomEvent('clear-cart', { bubbles: true }));
  });

  const topBtn = document.createElement('button');
  topBtn.textContent = 'Başa Dön';
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  wrapper.append(clearBtn, topBtn);
  return wrapper;
}
