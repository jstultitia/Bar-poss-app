export function initQuickOrder(container) {
  const cart = [];
  const cartContainer = document.createElement('div');
  cartContainer.className = 'cart';

  const itemsDiv = document.createElement('div');
  cartContainer.appendChild(itemsDiv);

  const tableInput = document.createElement('input');
  tableInput.type = 'text';
  tableInput.placeholder = 'Masa No';
  cartContainer.appendChild(tableInput);

  const noteInput = document.createElement('textarea');
  noteInput.placeholder = 'Özel Not';
  cartContainer.appendChild(noteInput);

  const paymentSelect = document.createElement('select');
  const optCard = document.createElement('option');
  optCard.value = 'Kredi Kartı';
  optCard.textContent = 'Kredi Kartı';
  const optCash = document.createElement('option');
  optCash.value = 'Nakit';
  optCash.textContent = 'Nakit';
  paymentSelect.append(optCard, optCash);
  cartContainer.appendChild(paymentSelect);

  const finalizeBtn = document.createElement('button');
  finalizeBtn.textContent = 'Siparişi Bitir';
  cartContainer.appendChild(finalizeBtn);

  container.appendChild(cartContainer);

  container.addEventListener('add-to-cart', (e) => {
    const existing = cart.find(c => c.product === e.detail.product);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ product: e.detail.product, qty: 1 });
    }
    renderCart();
  });

  container.addEventListener('clear-cart', () => {
    cart.length = 0;
    renderCart();
  });

  finalizeBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Sepet boş');
      return;
    }
    const payment = paymentSelect.value;
    alert(`Sipariş alındı. Ödeme: ${payment}`);
    setTimeout(() => {
      alert('Ürün teslim edildi mi?');
    }, 60000);
    cart.length = 0;
    renderCart();
  });

  function renderCart() {
    itemsDiv.innerHTML = '';
    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      const span = document.createElement('span');
      span.textContent = item.product;
      const qty = document.createElement('input');
      qty.type = 'number';
      qty.min = '1';
      qty.value = item.qty;
      qty.addEventListener('change', () => {
        item.qty = parseInt(qty.value) || 1;
      });
      div.append(span, qty);
      itemsDiv.appendChild(div);
    });
  }
}
