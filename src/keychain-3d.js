(()=>{
const THREE=window.THREE,host=document.querySelector('#kc'),canvas=document.querySelector('#gl');
if(!THREE||!host||!canvas)return;
let renderer;
try{renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'});}catch{return}
renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75));
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.12;
const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(34,1,.1,80);
camera.position.set(0,.1,9);
const root=new THREE.Group();scene.add(root);
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
scene.add(new THREE.HemisphereLight(0xeaf3ff,0x4c3420,2.1));
const keyLight=new THREE.DirectionalLight(0xfff1d9,3.2);keyLight.position.set(-3,5,6);scene.add(keyLight);
const rimLight=new THREE.DirectionalLight(0x9dc8ff,2.5);rimLight.position.set(4,1,-2);scene.add(rimLight);
const fillLight=new THREE.PointLight(0xff8a51,22,9);fillLight.position.set(-3,-1,4);scene.add(fillLight);
// A small procedural studio environment gives polished metal something to reflect.
const env=document.createElement('canvas');env.width=1024;env.height=512;
const ec=env.getContext('2d');const eg=ec.createLinearGradient(0,0,0,512);
eg.addColorStop(0,'#657184');eg.addColorStop(.28,'#f4efe3');eg.addColorStop(.48,'#8391a3');eg.addColorStop(.68,'#242b35');eg.addColorStop(1,'#c7b89c');ec.fillStyle=eg;ec.fillRect(0,0,1024,512);
[['rgba(255,255,255,.96)',70,65,82,215],['rgba(255,244,215,.9)',408,35,92,190],['rgba(180,213,255,.9)',745,88,64,250],['rgba(255,255,255,.82)',930,50,42,160]].forEach(([c,x,y,w,h])=>{ec.fillStyle=c;ec.shadowColor=c;ec.shadowBlur=24;ec.fillRect(x,y,w,h);ec.shadowBlur=0});
const envMap=new THREE.CanvasTexture(env);envMap.mapping=THREE.EquirectangularReflectionMapping;envMap.colorSpace=THREE.SRGBColorSpace;scene.environment=envMap;
const steel=new THREE.MeshPhysicalMaterial({color:0xe2e8f0,metalness:.94,roughness:.18,clearcoat:1,clearcoatRoughness:.09,envMapIntensity:1.65});
const darkSteel=new THREE.MeshPhysicalMaterial({color:0x303946,metalness:.9,roughness:.25,clearcoat:.7,envMapIntensity:1.5});
const gold=new THREE.MeshPhysicalMaterial({color:0xe8a34f,metalness:.82,roughness:.2,clearcoat:.8,envMapIntensity:1.4});
const blackEnamel=new THREE.MeshPhysicalMaterial({color:0x141820,metalness:.35,roughness:.19,clearcoat:1,clearcoatRoughness:.08});
const pinkEnamel=new THREE.MeshPhysicalMaterial({color:0xe72bb4,metalness:.28,roughness:.16,clearcoat:1,clearcoatRoughness:.07});
const greenEnamel=new THREE.MeshPhysicalMaterial({color:0x11c94b,metalness:.25,roughness:.16,clearcoat:1,clearcoatRoughness:.06});
function mesh(g,m,parent=root,x=0,y=0,z=0){const o=new THREE.Mesh(g,m);o.position.set(x,y,z);parent.add(o);return o}
function roundedShape(w,h,r){const s=new THREE.Shape();s.moveTo(-w/2+r,-h/2);s.lineTo(w/2-r,-h/2);s.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);s.lineTo(w/2,h/2-r);s.quadraticCurveTo(w/2,h/2,w/2-r,h/2);s.lineTo(-w/2+r,h/2);s.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);s.lineTo(-w/2,-h/2+r);s.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);return s}
function extrude(shape,depth,bevel=.045){return new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:bevel,bevelThickness:bevel,curveSegments:28})}
function labelTexture(lines,bg,fg){const c=document.createElement('canvas');c.width=512;c.height=512;const g=c.getContext('2d');g.fillStyle=bg;g.fillRect(0,0,512,512);const lg=g.createLinearGradient(0,0,512,512);lg.addColorStop(0,'rgba(255,255,255,.24)');lg.addColorStop(.45,'rgba(255,255,255,0)');lg.addColorStop(1,'rgba(0,0,0,.2)');g.fillStyle=lg;g.fillRect(0,0,512,512);g.textAlign='center';g.textBaseline='middle';g.fillStyle=fg;g.font='700 56px Arial';g.fillText(lines[0],256,242);if(lines[1]){g.font='600 22px Arial';g.fillText(lines[1],256,296)}const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t}
function face(parent,texture,w,h,z){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:texture,transparent:true}));m.position.z=z;parent.add(m);return m}
// Split ring, a second inner wire and a warm anodized clasp.
const ringGroup=new THREE.Group();ringGroup.position.set(0,1.35,0);root.add(ringGroup);
mesh(new THREE.TorusGeometry(.79,.064,18,120),steel,ringGroup,0,0,0);
mesh(new THREE.TorusGeometry(.715,.025,12,96),darkSteel,ringGroup,.018,.015,.025);
const claspCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(-.73,.45,.05),new THREE.Vector3(-.97,.31,.06),new THREE.Vector3(-1.07,.05,.06),new THREE.Vector3(-.95,-.24,.06),new THREE.Vector3(-.77,-.42,.06),new THREE.Vector3(-.56,-.38,.06),new THREE.Vector3(-.49,-.21,.06)]);
mesh(new THREE.TubeGeometry(claspCurve,64,.072,14,false),gold,ringGroup);
// Tiny screw and clasp sleeve add machined detail.
mesh(new THREE.CylinderGeometry(.09,.09,.07,32),darkSteel,ringGroup,-.73,-.4,.08).rotation.x=Math.PI/2;
mesh(new THREE.CylinderGeometry(.055,.055,.075,32),steel,ringGroup,-.73,-.4,.13).rotation.x=Math.PI/2;
const swings=[],pickables=[];
const choices=[
 {type:'tag',x:-.68,length:1.12,color:blackEnamel},
 {type:'coin',x:-.31,length:1.48,color:pinkEnamel},
 {type:'key',x:.10,length:1.21,color:steel},
 {type:'plate',x:.50,length:1.43,color:gold},
 {type:'green',x:.80,length:1.25,color:greenEnamel}
];
const chainMat=[steel,darkSteel,steel,steel,darkSteel];
choices.forEach((d,i)=>{
 const pivot=new THREE.Group();pivot.position.set(d.x,.62,0);root.add(pivot);
 const length=d.length,links=Math.round(length/.14);
 for(let j=0;j<links;j++){const link=mesh(new THREE.TorusGeometry(.075,.025,8,18),j%2?darkSteel:steel,pivot,0,-.07-j*.14,.035);link.scale.y=1.55;if(j%2)link.rotation.z=Math.PI/2}
 const charm=new THREE.Group();charm.position.set(0,-length,0);pivot.add(charm);
 if(d.type==='tag'){
  mesh(new THREE.BoxGeometry(.62,.62,.12),darkSteel,charm,0,0,0);
  mesh(new THREE.BoxGeometry(.54,.54,.13),blackEnamel,charm,0,0,.035);
  face(charm,labelTexture(['MAVERN','STUDIO'], '#171b22','#f8f6ef'),.47,.47,.105);
 }else if(d.type==='coin'){
  const coin=mesh(new THREE.CylinderGeometry(.31,.31,.105,64),gold,charm,0,0,0);coin.rotation.x=Math.PI/2;
  const enamel=mesh(new THREE.CylinderGeometry(.275,.275,.11,64),pinkEnamel,charm,0,0,.005);enamel.rotation.x=Math.PI/2;
  mesh(new THREE.TorusGeometry(.225,.012,8,64),gold,charm,0,0,.07);
  const med=mesh(new THREE.SphereGeometry(.035,16,12),new THREE.MeshPhysicalMaterial({color:0xffffff,metalness:.3,roughness:.08,emissive:0xff9ae9,emissiveIntensity:.35}),charm,-.12,.14,.08);
  med.scale.set(2.3,.7,.25);
 }else if(d.type==='key'){
  const sh=new THREE.Shape();sh.absarc(0,.28,.27,0,Math.PI*2,false);sh.holes.push(new THREE.Path());sh.holes[0].absarc(0,.28,.105,0,Math.PI*2,true);sh.moveTo(-.09,.1);sh.lineTo(.09,.1);sh.lineTo(.09,-.48);sh.lineTo(.27,-.48);sh.lineTo(.27,-.62);sh.lineTo(.1,-.62);sh.lineTo(.1,-.79);sh.lineTo(.25,-.79);sh.lineTo(.25,-.94);sh.lineTo(-.09,-.94);sh.closePath();
  const key=mesh(extrude(sh,.1,.025),steel,charm,0,.44,0);key.rotation.x=0;
  mesh(new THREE.TorusGeometry(.115,.012,8,36),darkSteel,charm,0,.72,.115);
 }else if(d.type==='plate'){
  const shape=roundedShape(.52,.83,.12);mesh(extrude(shape,.10,.045),gold,charm,0,0,0);
  mesh(new THREE.BoxGeometry(.33,.55,.025),blackEnamel,charm,0,0,.10);
  face(charm,labelTexture(['M','WEB STUDIO'],'#201a13','#f3cf91'),.3,.5,.118);
 }else{
  const shape=roundedShape(.48,.86,.12);mesh(extrude(shape,.11,.05),greenEnamel,charm,0,0,0);
  mesh(new THREE.BoxGeometry(.32,.66,.018),new THREE.MeshPhysicalMaterial({color:0x092515,metalness:.25,roughness:.2,clearcoat:.9}),charm,0,0,.13);
  face(charm,labelTexture(['M','DESIGN · BUILD'],'#12331c','#eaffed'),.29,.60,.142);
 }
 // Realistic connector and a small jump ring above every charm.
 const eye=mesh(new THREE.TorusGeometry(.105,.025,10,40),steel,charm,0,length*.18,.04);eye.rotation.x=Math.PI/2;
 const hit=mesh(new THREE.SphereGeometry(.48,12,10),new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}),charm,0,0,.1);
 hit.userData.swing=pivot;pickables.push(hit);
 swings.push({pivot,phase:i*.82,angle:(i-2)*.045,velocity:0,dragged:false});
});
// Floating studio lights, hover parallax and pendulum spring motion.
const pointer=new THREE.Vector2(5,5),ray=new THREE.Raycaster(),clock=new THREE.Clock();
let active=null,lastX=0,lastY=0,dragX=0,dragY=0,hoverX=0,hoverY=0,visible=true;
function setPointer(e){const r=canvas.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height*2-1));}
function hover(e){setPointer(e);ray.setFromCamera(pointer,camera);const hit=ray.intersectObjects(pickables,false)[0];canvas.style.cursor=active?'grabbing':hit?'grab':'';}
canvas.addEventListener('pointermove',e=>{
 const dx=e.clientX-lastX,dy=e.clientY-lastY;lastX=e.clientX;lastY=e.clientY;setPointer(e);
 if(active){active.velocity+=dx*.0032;active.angle=THREE.MathUtils.clamp(active.angle-dx*.006,-.9,.9);active.pivot.rotation.x=THREE.MathUtils.clamp(active.pivot.rotation.x+dy*.004,-.65,.65);return}
 hoverX=THREE.MathUtils.clamp(pointer.x,-1,1);hoverY=THREE.MathUtils.clamp(pointer.y,-1,1);
 // Cursor movement gives nearby strings a little impulse, like a physical desk object.
 swings.forEach(s=>{const screenX=s.pivot.position.x/1.5,screenY=(s.pivot.position.y-.4)/2.2,dist=Math.hypot(pointer.x-screenX,pointer.y-screenY);if(dist<.7&&Math.hypot(dx,dy)>1)s.velocity+=THREE.MathUtils.clamp(dx*.00007,-.026,.026)*(1-dist/.7)});
 hover(e);
});
canvas.addEventListener('pointerdown',e=>{setPointer(e);ray.setFromCamera(pointer,camera);const hit=ray.intersectObjects(pickables,false)[0];if(!hit)return;active=hit.object.userData.swing;active.velocity=0;lastX=e.clientX;lastY=e.clientY;canvas.style.cursor='grabbing';canvas.setPointerCapture?.(e.pointerId);});
const release=()=>{if(active){active.velocity*=1.25;active=null}};
canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);canvas.addEventListener('pointerleave',e=>{if(!active){hoverX=0;hoverY=0;canvas.style.cursor=''}});
canvas.addEventListener('pointermove',e=>{if(e.pointerType==='touch'&&active)e.preventDefault()},{passive:false});
const resize=()=>{const r=host.getBoundingClientRect();if(!r.width||!r.height)return;renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.position.z=r.width<540?10:9;camera.updateProjectionMatrix()};
const ro=new ResizeObserver(resize);ro.observe(host);resize();
const io=new IntersectionObserver(es=>visible=es[0].isIntersecting);io.observe(host);
let frame=0;
function animate(){frame=requestAnimationFrame(animate);if(!visible)return;const dt=Math.min(clock.getDelta(),.035),now=clock.elapsedTime;
 root.rotation.y+=(hoverX*.16-root.rotation.y)*.045;root.rotation.x+=(-hoverY*.09-root.rotation.x)*.045;
 root.position.y=Math.sin(now*.8)*.045;
 swings.forEach(s=>{if(!s.dragged){s.velocity+=(-s.angle*3.6-Math.sin(now*.9+s.phase)*.06)*dt;s.velocity*=Math.exp(-2.8*dt);s.angle+=s.velocity;s.pivot.rotation.z=s.angle;s.pivot.rotation.x+=(Math.sin(now*.7+s.phase)*.035-hoverY*.06-s.pivot.rotation.x)*.03}});
 renderer.render(scene,camera)}
animate();
addEventListener('pagehide',()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect();renderer.dispose();envMap.dispose()},{once:true});
})();