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

  // Lightweight Three.js hero artifact. Skips animation for reduced-motion users.
  const orbCanvas = document.getElementById('mavern-orb');
  if (orbCanvas && window.THREE && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    try {
      const T = window.THREE;
      const renderer = new T.WebGLRenderer({ canvas: orbCanvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.z = 4.6;
      scene.add(new T.AmbientLight(0xffffff, 1.5));
      const cyan = new T.PointLight(0x7df3ff, 3.5, 9);
      cyan.position.set(2, 2, 3); scene.add(cyan);
      const pink = new T.PointLight(0xff5c93, 2, 8);
      pink.position.set(-2, -1, 2); scene.add(pink);
      const group = new T.Group(); scene.add(group);
      const core = new T.Mesh(new T.IcosahedronGeometry(0.78, 2), new T.MeshPhysicalMaterial({
        color: 0x1e3be0, metalness: 0.55, roughness: 0.2, clearcoat: 1,
        emissive: 0x07104f, emissiveIntensity: 0.35
      }));
      group.add(core);
      const knot = new T.Mesh(new T.TorusKnotGeometry(1.05, 0.018, 120, 8, 2, 3),
        new T.MeshBasicMaterial({ color: 0x7df3ff, wireframe: true, transparent: true, opacity: 0.85 }));
      knot.rotation.set(0.6, 0.2, -0.35); group.add(knot);
      const halo = new T.Mesh(new T.TorusGeometry(1.22, 0.012, 4, 96),
        new T.MeshBasicMaterial({ color: 0xff5c93, transparent: true, opacity: 0.9 }));
      halo.rotation.x = 1.1; halo.rotation.y = -0.4; group.add(halo);
      let px = 0, py = 0;
      window.addEventListener('pointermove', event => {
        px = (event.clientX / window.innerWidth - 0.5) * 0.35;
        py = (event.clientY / window.innerHeight - 0.5) * 0.28;
      }, { passive: true });
      const resize = () => {
        const size = Math.max(90, Math.min(190, orbCanvas.parentElement.clientWidth * 0.32));
        renderer.setSize(size, size, false);
        camera.aspect = 1; camera.updateProjectionMatrix();
      };
      resize();
      window.addEventListener('resize', resize, { passive: true });
      const animate = () => {
        group.rotation.y += 0.004;
        group.rotation.x += (py - group.rotation.x) * 0.02;
        group.rotation.z += (px - group.rotation.z) * 0.02;
        knot.rotation.z += 0.003;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      animate();
    } catch (error) { orbCanvas.hidden = true; }
  }

})();