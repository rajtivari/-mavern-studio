(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('b').textContent = '＋';
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('b').textContent = open ? '−' : '＋';
      nav.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 620) closeMenu(); });
  }

  document.querySelectorAll('[data-plan]').forEach(link => {
    link.addEventListener('click', () => {
      const select = document.getElementById('plan');
      if (select) {
        const target = link.dataset.plan.toLowerCase();
        const option = [...select.options].find(item => item.value.toLowerCase() === target || item.text.toLowerCase() === target);
        if (option) select.value = option.value;
      }
    });
  });
  document.querySelectorAll('[data-service]').forEach(link => {
    link.addEventListener('click', () => {
      const select = document.getElementById('plan');
      if (select) {
        const option = [...select.options].find(item => item.value === link.dataset.service);
        if (option) select.value = option.value;
      }
    });
  });

  const form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const recipient = 'tivariraj424@gmail.com';
      const subject = 'Mavern Studio project enquiry — ' + (data.get('business') || data.get('name') || 'New enquiry');
      const lines = [
        'Name: ' + data.get('name'),
        'Business / brand: ' + (data.get('business') || 'Not provided'),
        'Reply email: ' + data.get('email'),
        'Budget: ' + (data.get('budget') || 'Not specified'),
        'Service: ' + (data.get('plan') || 'Not specified'),
        '',
        'Project details:',
        data.get('details') || 'Not provided'
      ];
      const status = document.getElementById('form-status');
      if (status) status.textContent = 'Opening your email app with a draft. Review it and press Send to complete your enquiry.';
      window.location.href = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
    });
  }
})();