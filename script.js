(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.querySelector('span').textContent = open ? '−' : '＋';
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('span').textContent = '＋';
      nav.classList.remove('open');
    }));
  }

  document.querySelectorAll('[data-plan]').forEach(link => {
    link.addEventListener('click', () => {
      const select = document.getElementById('plan');
      if (select) {
        const plan = link.dataset.plan;
        const option = [...select.options].find(item => item.text.toLowerCase().includes(plan.toLowerCase()));
        if (option) select.value = option.value;
      }
    });
  });

  const form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = 'Mavern Studio project enquiry — ' + (data.get('business') || data.get('name') || 'New enquiry');
      const lines = [
        'Name: ' + (data.get('name') || ''),
        'Business / brand: ' + (data.get('business') || 'Not provided'),
        'Reply email: ' + (data.get('email') || ''),
        'Service / package: ' + (data.get('plan') || 'Not specified'),
        'Budget: ' + (data.get('budget') || 'Not specified'),
        '',
        'Project details:',
        (data.get('details') || 'Not provided')
      ];
      const body = lines.join('\n');
      const status = document.getElementById('form-status');
      if (status) status.textContent = 'Opening your email app. Please review the draft and send it to complete your enquiry.';
      window.location.href = 'mailto:hello@example.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();