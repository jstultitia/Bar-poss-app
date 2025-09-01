import { renderCategories } from './components/ProductCategories.js';
import { renderSearch } from './components/SearchBar.js';
import { renderQuickButtons } from './components/QuickAccessButtons.js';
import { initQuickOrder } from './components/QuickOrder.js';

const top = document.getElementById('top');
const app = document.getElementById('app');

const categories = renderCategories();
const search = renderSearch(categories);
const quickButtons = renderQuickButtons();

top.appendChild(search);
top.appendChild(quickButtons);
app.appendChild(categories);

initQuickOrder(app);
