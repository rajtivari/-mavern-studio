(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const intro = document.getElementById('intro-screen');
  const skipIntro = document.getElementById('skip-intro');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finishIntro = () => {
    if (!intro || intro.classList.contains('is-leaving')) return;
    intro.classList.add('is-leaving');
    document.body.classList.add('intro-done');
    window.setTimeout(() => { intro.remove(); }, 1100);
  };
  if (intro) {
    if (reducedMotion || sessionStorage.getItem('mavernIntroSeen') === '1') {
      intro.remove();
      document.body.classList.add('intro-done');
    } else {
      skipIntro?.addEventListener('click', finishIntro);
      window.setTimeout(() => {
        finishIntro();
        sessionStorage.setItem('mavernIntroSeen', '1');
      }, 2700);
      intro.addEventListener('click', event => {
        if (event.target === intro) finishIntro();
      });
    }
  }

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

  // Scroll reveals give each page section a subtle forward approach.
  const revealTargets = document.querySelectorAll('.manifesto-grid,.section-top,.service-row,.project,.lab-card,.approach-grid,.price-card,.contact-grid,.faq-grid details,.closing-inner');
  if (!reducedMotion && 'IntersectionObserver' in window) {
    revealTargets.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      element.style.transitionDelay = (index % 4) * 65 + 'ms';
    });
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealTargets.forEach(element => revealObserver.observe(element));
  }

  // Light pointer parallax on the layered hero, disabled for touch/reduced motion.
  const scene = document.querySelector('.approach-scene');
  if (scene && !reducedMotion && window.matchMedia('(pointer:fine)').matches) {
    scene.addEventListener('pointermove', event => {
      const rect = scene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      scene.style.setProperty('--pointer-x', (x * 12).toFixed(2) + 'px');
      scene.style.setProperty('--pointer-y', (y * 10).toFixed(2) + 'px');
    });
    scene.addEventListener('pointerleave', () => {
      scene.style.setProperty('--pointer-x', '0px');
      scene.style.setProperty('--pointer-y', '0px');
    });
  }

  // Interactive Three.js metallic-blue core, orbital rings and particles.
  const canvas = document.getElementById('mavern-orb');
  if (canvas && window.THREE && !reducedMotion) {
    try {
      const T = window.THREE;
      const renderer = new T.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setClearColor(0x000000, 0);
      const scene3d = new T.Scene();
      const camera = new T.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0, 5.1);
      scene3d.add(new T.HemisphereLight(0xeaf5ff, 0x14265e, 1.8));
      const key = new T.PointLight(0xd8ff43, 3.2, 12); key.position.set(2.2, 2.4, 3); scene3d.add(key);
      const blue = new T.PointLight(0x53bfff, 3.4, 10); blue.position.set(-2, -1.2, 2); scene3d.add(blue);
      const group = new T.Group(); scene3d.add(group);
      const core = new T.Mesh(new T.IcosahedronGeometry(.72, 4), new T.MeshPhysicalMaterial({
        color: 0x8bdcff, metalness: .82, roughness: .16, clearcoat: 1, clearcoatRoughness: .12,
        emissive: 0x143f5e, emissiveIntensity: .25
      }));
      group.add(core);
      const ring1 = new T.Mesh(new T.TorusGeometry(1.02, .018, 8, 120), new T.MeshBasicMaterial({color:0x171717,transparent:true,opacity:.9}));
      ring1.rotation.set(.8,.25,-.35); group.add(ring1);
      const ring2 = new T.Mesh(new T.TorusGeometry(1.18,.012,6,120),new T.MeshBasicMaterial({color:0xd8ff43,transparent:true,opacity:1}));
      ring2.rotation.set(1.12,-.62,.3);group.add(ring2);
      const particleCount=150, positions=new Float32Array(particleCount*3);
      for(let i=0;i<particleCount;i++){const radius=1.45+Math.random()*1.25,theta=Math.random()*Math.PI*2,phi=Math.acos(2*Math.random()-1);positions[i*3]=radius*Math.sin(phi)*Math.cos(theta);positions[i*3+1]=radius*Math.sin(phi)*Math.sin(theta);positions[i*3+2]=radius*Math.cos(phi);}
      const particleGeometry=new T.BufferGeometry();particleGeometry.setAttribute('position',new T.BufferAttribute(positions,3));
      group.add(new T.Points(particleGeometry,new T.PointsMaterial({color:0x171717,size:.016,transparent:true,opacity:.65,sizeAttenuation:true})));
      let targetX=0,targetY=0,frame=0;
      window.addEventListener('pointermove',event=>{targetY=(event.clientX/window.innerWidth-.5)*.35;targetX=(event.clientY/window.innerHeight-.5)*.28;},{passive:true});
      const resize=()=>{const box=canvas.parentElement.getBoundingClientRect();const size=Math.min(220,Math.max(90,box.width*(window.innerWidth<620?.27:.22)));renderer.setSize(size,size,false);camera.aspect=1;camera.updateProjectionMatrix();};
      resize();window.addEventListener('resize',resize,{passive:true});
      const animate=()=>{frame++;group.rotation.y+=.003;group.rotation.x+=(targetX-group.rotation.x)*.025;group.rotation.z+=(targetY-group.rotation.z)*.025;ring1.rotation.z+=.002;ring2.rotation.x-=.0015;core.scale.setScalar(1+Math.sin(frame*.025)*.018);renderer.render(scene3d,camera);requestAnimationFrame(animate);};
      animate();
    } catch(error) { canvas.hidden=true; console.warn('3D hero unavailable; continuing with static artwork.',error); }
  }
})();