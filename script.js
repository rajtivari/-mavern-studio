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
      if (!select) return;
      const target = link.dataset.plan.toLowerCase();
      const option = [...select.options].find(item => item.value.toLowerCase() === target || item.text.toLowerCase() === target);
      if (option) select.value = option.value;
    });
  });
  document.querySelectorAll('[data-service]').forEach(link => {
    link.addEventListener('click', () => {
      const select = document.getElementById('plan');
      const option = select && [...select.options].find(item => item.value === link.dataset.service);
      if (option) select.value = option.value;
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
        '', 'Project details:', data.get('details') || 'Not provided'
      ];
      const status = document.getElementById('form-status');
      if (status) status.textContent = 'Opening your email app with a draft. Review it and press Send to complete your enquiry.';
      window.location.href = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
    });
  }

  // Interactive Three.js art direction: metallic blue core, animated cyan orbital rings,
  // floating particles, and gentle pointer parallax. Gracefully degrades without WebGL.
  const canvas = document.getElementById('mavern-orb');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (canvas && window.THREE && !reduced) {
    try {
      const T = window.THREE;
      const renderer = new T.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
      renderer.setClearColor(0x000000, 0);
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0, 5.1);
      scene.add(new T.HemisphereLight(0xeaf5ff, 0x14265e, 1.8));
      const key = new T.PointLight(0x7df3ff, 4.2, 12); key.position.set(2.2, 2.4, 3); scene.add(key);
      const blue = new T.PointLight(0x315bff, 3.4, 10); blue.position.set(-2, -1.2, 2); scene.add(blue);
      const pink = new T.PointLight(0xff78c8, 1.7, 8); pink.position.set(0, -2.2, -1); scene.add(pink);
      const group = new T.Group(); scene.add(group);

      const coreMaterial = new T.MeshPhysicalMaterial({
        color: 0x315bff, metalness: .72, roughness: .17, clearcoat: 1,
        clearcoatRoughness: .12, emissive: 0x142d91, emissiveIntensity: .42
      });
      const core = new T.Mesh(new T.IcosahedronGeometry(.72, 5), coreMaterial);
      group.add(core);

      const ringMat = new T.MeshBasicMaterial({ color: 0x7df3ff, transparent: true, opacity: .95 });
      const ring1 = new T.Mesh(new T.TorusGeometry(1.02, .018, 8, 160), ringMat);
      ring1.rotation.set(.8, .25, -.35); group.add(ring1);
      const ring2 = new T.Mesh(new T.TorusGeometry(1.18, .012, 6, 160),
        new T.MeshBasicMaterial({ color: 0x315bff, transparent: true, opacity: .9 }));
      ring2.rotation.set(1.12, -.62, .3); group.add(ring2);
      const knot = new T.Mesh(new T.TorusKnotGeometry(.87, .018, 160, 8, 2, 3),
        new T.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .42, wireframe: true }));
      knot.rotation.set(.35, .7, 0); group.add(knot);

      const particleCount = 190;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const radius = 1.45 + Math.random() * 1.25;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      }
      const particleGeometry = new T.BufferGeometry();
      particleGeometry.setAttribute('position', new T.BufferAttribute(positions, 3));
      const particles = new T.Points(particleGeometry, new T.PointsMaterial({
        color: 0x315bff, size: .018, transparent: true, opacity: .78, sizeAttenuation: true
      }));
      group.add(particles);

      let targetX = 0, targetY = 0, frame = 0;
      window.addEventListener('pointermove', event => {
        targetY = (event.clientX / window.innerWidth - .5) * .45;
        targetX = (event.clientY / window.innerHeight - .5) * .35;
      }, { passive: true });
      const resize = () => {
        const box = canvas.parentElement.getBoundingClientRect();
        const size = Math.min(240, Math.max(100, box.width * (window.innerWidth < 620 ? .31 : .24)));
        renderer.setSize(size, size, false);
        camera.aspect = 1;
        camera.updateProjectionMatrix();
      };
      resize();
      window.addEventListener('resize', resize, { passive: true });
      const animate = () => {
        frame++;
        group.rotation.y += .0035;
        group.rotation.x += (targetX - group.rotation.x) * .025;
        group.rotation.z += (targetY - group.rotation.z) * .025;
        ring1.rotation.z += .002;
        ring2.rotation.x -= .0015;
        knot.rotation.y += .004;
        particles.rotation.y -= .001;
        core.scale.setScalar(1 + Math.sin(frame * .025) * .018);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      animate();
    } catch (error) {
      canvas.hidden = true;
      console.warn('3D hero unavailable; continuing with the static design.', error);
    }
  }
})();