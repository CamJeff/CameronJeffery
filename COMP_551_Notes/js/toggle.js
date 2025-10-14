document.addEventListener('click', (e) => {
  const btn = e.target.closest('.toggle-solution');
  if (!btn) return;

  const id = btn.getAttribute('aria-controls');
  const panel = document.getElementById(id);
  const expanded = btn.getAttribute('aria-expanded') === 'true';

  btn.setAttribute('aria-expanded', String(!expanded));
  btn.textContent = expanded ? 'Show Solution' : 'Hide Solution';

  if (expanded) {
    panel.setAttribute('hidden', '');
  } else {
    panel.removeAttribute('hidden');
    if (window.MathJax && window.MathJax.typeset) {
      window.MathJax.typeset([panel]); // render newly shown LaTeX
    }
  }
});


document.querySelectorAll('.tab-button').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove "active" from all buttons
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Hide all lists
    document.querySelectorAll('.nav-list').forEach(list => list.hidden = true);

    // Show the one linked to this button
    const target = document.getElementById(btn.dataset.target);
    if (target) target.hidden = false;
  });
});