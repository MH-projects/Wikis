const toast = document.getElementById('toast');
let toastTimer;
function showToast(message='Comando copiado') {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1700);
}
document.querySelectorAll('.copy').forEach(button => {
  button.addEventListener('click', async () => {
    const code = button.parentElement.querySelector('code');
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code.textContent.trim());
      showToast();
    } catch {
      showToast('No se pudo copiar automáticamente');
    }
  });
});
const search = document.getElementById('search');
search.addEventListener('input', () => {
  const term = search.value.trim().toLocaleLowerCase('es');
  document.querySelectorAll('.command-card').forEach(card => {
    const text = (card.innerText + ' ' + (card.dataset.search || '')).toLocaleLowerCase('es');
    card.style.display = text.includes(term) ? '' : 'none';
  });
  document.querySelectorAll('.section').forEach(section => {
    const cards = [...section.querySelectorAll('.command-card')];
    if (cards.length) section.style.display = cards.some(card => card.style.display !== 'none') ? '' : 'none';
  });
});
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault(); search.focus();
  }
  if (event.key === 'Escape') { search.value = ''; search.dispatchEvent(new Event('input')); search.blur(); }
});
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
menuToggle.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
  link.classList.add('active');
  sidebar.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
const sections = [...document.querySelectorAll('main section[id]')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, {rootMargin:'-20% 0px -70% 0px'});
sections.forEach(section => observer.observe(section));
