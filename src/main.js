
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const EMAIL='tivariraj424@gmail.com';
const SV=[['01','Website Design','Strategic, visually distinctive website design that gives your brand a clear identity and a professional online presence.','Includes',['Page structure and layout planning','Typography and visual direction','Responsive design concepts','User experience improvements']],
['02','Website Development','Fast, responsive websites built to work smoothly across desktop, tablet, and mobile devices.','Includes',['Frontend development','Responsive layouts','Interactive elements and animations','Contact forms and integrations where required','Deployment assistance']],
['03','Landing Pages','Focused landing pages designed around a single goal: explaining your offer and encouraging visitors to take action.','Ideal for',['New product launches','Personal brands','Marketing campaigns','Service businesses','Early-stage startups']],
['04','Custom Web Experiences','Tailored web experiences for businesses that need more than a standard website.','Potential features',['Interactive dashboards','Custom interfaces','API integrations','Authentication systems','Data-driven functionality'],'Custom functionality is scoped and priced separately.']];
$('#svc').innerHTML=SV.map((s,i)=>`<article class="sv rv" style="--i:${i%2}"><span class="n">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p><small>${s[3]}</small><ul>${s[4].map(x=>'<li>'+x+'</li>').join('')}</ul>${s[5]?'<p class="nt">'+s[5]+'</p>':''}</article>`).join('');
const PJ=[['DocSwift','A web-based document experience focused on making document-related workflows easier to access.','https://docswift.rajtivari.qd.je/','docswift'],
['DevVault','A developer-focused workspace for organizing useful notes, code snippets, and technical references.','https://devvault.rajtivari.qd.je/','devvault'],
['ApexNova','A modern web project exploring a distinctive digital interface and visual identity.','https://rajtivari.github.io/ApexNova/','apexnova'],
['Raj Tivari — Portfolio','A personal portfolio showcasing development work, technical interests, and projects.','https://rajtivari.qd.je/','portfolio']];
const IM=window.MAVERN_PROJECT_IMAGES;
$('#wk').innerHTML=PJ.map((p,i)=>`<a class="pj rv" href="${p[2]}" target="_blank" rel="noopener noreferrer" aria-label="Open ${p[0]}"><div class="frame"><div class="fb"><i></i><i></i><i></i><span>${p[2].replace(/^https?:\/\//,'').replace(/\/$/,'')}</span></div><div class="shot"><img src="${IM[p[3]]}" alt="Preview of ${p[0]}" loading="lazy"><div class="ph">Preview unavailable</div></div></div><h3>${p[0]}<span>Visit site ↗</span></h3><p>${p[1]}</p></a>`).join('');
const PL=[{n:'Launch Website',p:'₹8,000',d:'For individuals, freelancers, and small businesses that need a professional online presence.',l:['Up to 3 pages','Responsive design','Modern visual styling','Basic contact section or form','Essential on-page SEO setup','Deployment assistance'],b:'Portfolios, small business websites, and personal brands.'},
{n:'Growth Website',p:'₹18,000',pop:1,d:'For growing businesses that need a more complete website with stronger presentation and more content.',l:['Up to 6 pages','Custom visual direction','Responsive development','Interactive sections and animations','Contact form integration','Basic SEO setup','Performance optimization','Deployment assistance'],b:'Agencies, service businesses, and growing brands.'},
{n:'Custom Build',p:'₹35,000',d:'For projects that require custom functionality, advanced interfaces, or more involved development.',l:['Requirements and scope planning','Custom UI and frontend development','Advanced interactions where appropriate','Third-party integrations as agreed','Testing and deployment support','Project-specific deliverables'],b:'Startups, interactive web applications, and bespoke digital projects.'}];
$('#plans').innerHTML=PL.map((x,i)=>`<div class="plan rv${x.pop?' pop':''}" style="--i:${i}"><h3>${x.n}</h3><p class="fr" style="margin-top:12px">Starting at</p><div class="price">${x.p}</div><p>${x.d}</p><ul>${x.l.map(l=>'<li>'+l+'</li>').join('')}</ul><p class="bf"><b>Best for:</b> ${x.b}</p><a class="btn${x.pop?'':' o'}" href="#contact" data-plan="${x.n}">Choose ${x.n.split(' ')[0]}</a></div>`).join('');
const TB=[['Pages','Up to 3','Up to 6','As scoped'],['Responsive design','Yes','Yes','Yes'],['Visual direction','Modern styling','Custom visual direction','Custom UI'],['Animations and interactive sections','No','Yes','Advanced, where appropriate'],['Contact form','Basic section or form','Integrated form','Custom, as scoped'],['SEO and speed','Essential on-page SEO','Basic SEO and performance optimization','As scoped'],['Integration examples','Social links, map embed, WhatsApp button','Analytics, newsletter signup, booking tools','APIs, authentication, data-driven features, other third-party services'],['Planning','Basic','Visual direction','Requirements and scope planning'],['Launch support','Deployment assistance','Deployment assistance','Testing and deployment support'],['Typical timeline (estimate)','1 to 2 weeks','2 to 4 weeks','Longer, depends on scope']];
$('#tb').innerHTML=TB.map(r=>`<tr><th scope="row">${r[0]}</th>${r.slice(1).map(c=>`<td class="${c=='Yes'?'y':c=='No'?'no':''}">${c}</td>`).join('')}</tr>`).join('');
const ST=[['Discover','We discuss your business, audience, goals, requirements, budget, and timeline.'],['Define','We establish the project scope, sitemap, visual direction, deliverables, and pricing before development begins.'],['Design & Build','We create the agreed design and develop the website, sharing progress at defined milestones.'],['Review & Refine','You review the work and provide feedback within the agreed revision allowance.'],['Launch','We test the agreed functionality, prepare the website for launch, and provide the agreed handover and deployment support.']];
$('#steps').innerHTML=ST.map((s,i)=>`<div class="rv" style="--i:${i}"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('');
const FQ=[['How much does a website cost?','Our websites start at ₹8,000 for a small website, ₹18,000 for a growth-focused website, and ₹35,000 for a custom build. The final price depends on the pages, features, integrations, and project requirements.'],
['How long does it take to build a website?','A small website may take around 1 to 2 weeks, while a larger website may take 2 to 4 weeks or longer. Custom applications can require additional time. These are estimates, not guaranteed deadlines; the timeline depends on scope, feedback, and content readiness.'],
['Do you work with small businesses and startups?','Yes. We work with individuals, startups, freelancers, and small businesses. The right package depends on your goals and the functionality you need.'],
['Will my website work on mobile phones?','Yes. Responsive design is included in our standard website packages, with layouts adapted for mobile, tablet, and desktop screens.'],
['Can you redesign my existing website?','Yes. We can review your existing website and propose improvements to its design, structure, usability, and frontend implementation. The quote depends on the existing codebase and scope of the redesign.'],
['Will I need to purchase a domain and hosting?','You may need to purchase a domain and hosting separately. We can help you choose and configure suitable services. Third-party fees are not included unless stated in your proposal.'],
['Do you provide website maintenance?','Maintenance and ongoing updates can be discussed as a separate service. The scope, response times, frequency, and pricing should be agreed upon before work begins.'],
['Can you add features after the website launches?','Yes. Additional pages, integrations, and features can be quoted separately based on the requested changes and technical requirements.'],
['How many revisions are included?','The number of revisions will be stated in your project proposal. Additional changes or requests outside the agreed scope may require an additional fee.'],
['How do payments work?','The payment schedule will be specified in the written proposal before work starts. A possible arrangement is a 50% advance and 50% before final handover, subject to agreement.'],
['What do you need from me to get started?','We generally need your business details, project goals, preferred visual direction, required pages, available content, reference websites, and budget range.'],
['How do I start a project?','Email us at tivariraj424@gmail.com with a short description of your project, the website you need, and your approximate budget. We can then discuss the requirements and next steps.']];
$('#fq').innerHTML=FQ.map(q=>`<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('');
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});$$('.rv').forEach(el=>io.observe(el));
// nav
$('#bg').onclick=()=>{const o=$('#menu').classList.toggle('open');$('#bg').setAttribute('aria-expanded',o)};$$('#menu a').forEach(a=>a.onclick=()=>$('#menu').classList.remove('open'));
addEventListener('scroll',()=>$('#hd').classList.toggle('s',scrollY>10),{passive:true});
$$('[data-plan]').forEach(a=>a.addEventListener('click',()=>$('#plan').value=a.dataset.plan));
$('#cp').onclick=()=>{const b=$('#cp');const done=()=>{b.textContent='Copied';setTimeout(()=>b.textContent='Copy email',1800)};navigator.clipboard?navigator.clipboard.writeText(EMAIL).then(done,()=>b.textContent=EMAIL):b.textContent=EMAIL};
$('#yr').textContent=new Date().getFullYear();
// form -> opens a prefilled email to Raj
$('#form').addEventListener('submit',e=>{e.preventDefault();let ok=true;const chk=(i,er,bad,m)=>{const v=$(i).value.trim();$(er).textContent=bad(v)?m:'';if(bad(v))ok=false};
chk('#name','#e1',v=>v.length<2,'Enter your name.');chk('#email','#e2',v=>!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v),'Enter a valid email, like you@company.com.');chk('#msg','#e3',v=>v.length<10,'Describe your project in at least 10 characters.');
if(!ok)return;const body=`Name: ${$('#name').value}\nEmail: ${$('#email').value}\nPlan: ${$('#plan').value}\nBudget: ${$('#bud').value}\n\n${$('#msg').value}`;
location.href=`mailto:${EMAIL}?subject=${encodeURIComponent('Project enquiry from '+$('#name').value)}&body=${encodeURIComponent(body)}`;$('#form').style.display='none';$('#ok').style.display='block'});

// headline reveal, magnetic buttons, card tilt, footer wordmark
const h1=$('#h1');h1.innerHTML=h1.textContent.split(' ').map((w,i)=>`<span class="w"><i style="--i:${i}">${w}</i></span>`).join(' ');
requestAnimationFrame(()=>requestAnimationFrame(()=>document.body.classList.add('ready')));
$$('.btn').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
$$('.pj,.plan,.sv').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-4px)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
addEventListener('pointermove',e=>{const d=document.documentElement.style;d.setProperty('--ox',(-(e.clientX/innerWidth*2-1)*.03).toFixed(3));d.setProperty('--oy',(.065+(e.clientY/innerHeight*2-1)*.015).toFixed(3))});
// ---- scroll animations ----
const RMM=matchMedia('(prefers-reduced-motion:reduce)').matches,cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),ez=t=>t*t*(3-2*t);
$$('h2').forEach(h=>{h.innerHTML=h.textContent.split(' ').map((w,i)=>`<span class="w"><i style="--i:${i}">${w}</i></span>`).join(' ');io.observe(h)});
// word-by-word text reveal + icons that fall out of the sentence into the window
const stm=$('#stmt'),fly=$('#fly'),fst=$('.fst'),win=$('#win'),phs=$$('.ico'),sks=$$('.sk'),words=[];
[...stm.childNodes].forEach(n=>{if(n.nodeType==3){const f=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(t=>{if(!t.trim()){f.append(t);return}const x=document.createElement('span');x.textContent=t;x.className='sw';words.push(x);f.append(x)});n.replaceWith(f)}});
const GL=['Aa','</>','↗','✦'],BG=['linear-gradient(135deg,#ff9ac0,#e43fe2)','linear-gradient(135deg,#4a4a4f,#050505)','linear-gradient(135deg,#9dff8a,#14b81c)','linear-gradient(135deg,#fff6b0,#f4d447)'],FG=['#fff','#f4d447','#06330a','#141414'];
const fys=phs.map((p,i)=>{const d=document.createElement('div');d.className='fy';d.textContent=GL[i];d.style.background=BG[i];d.style.color=FG[i];fst.appendChild(d);return d});
let S0=[],E0=[];
function meas(){win.style.setProperty('--wy','0%');const f=fst.getBoundingClientRect(),m=e=>{const r=e.getBoundingClientRect();return{x:r.left-f.left+r.width/2,y:r.top-f.top+r.height/2,s:r.width}};S0=phs.map(m);E0=sks.map(m);fys.forEach((y,i)=>{y.style.width=y.style.height=E0[i].s+'px';y.style.fontSize=E0[i].s*.36+'px'});render()}
function render(){if(!E0.length)return;const r=fly.getBoundingClientRect(),p=RMM?1:cl(-r.top/(r.height-innerHeight));
win.style.setProperty('--wy',(1-ez(cl((p-.1)/.4)))*105+'%');
words.forEach((w,i)=>w.style.opacity=RMM?1:cl((p/.2*(words.length+4)-i)/4,.14,1));
fys.forEach((f,i)=>{const a=S0[i],b=E0[i],t=cl((p-.22-i*.08)/.42),e=ez(t),x=a.x+(b.x-a.x)*e+Math.sin(t*9+i*2)*16*(1-t)*Math.sin(t*3.14),y=a.y+(b.y-a.y)*Math.pow(t,1.7),rot=(1-e)*(i%2?-24:20)+Math.sin(t*7+i)*7*(1-t),sc=(a.s+(b.s-a.s)*e)/b.s;f.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%) rotate(${rot}deg) scale(${sc})`})}
addEventListener('scroll',()=>{render();$('#kc').style.transform=scrollY<1000?`translateY(${scrollY*.18}px)`:''},{passive:true});addEventListener('resize',meas);addEventListener('load',meas);meas();document.fonts&&document.fonts.ready.then(meas);

// ---- keychain engine: verlet chains, shaded metal links and charms (canvas) ----
const FF='"Sansita Swashed","Trebuchet MS",system-ui,sans-serif',RIGS=[];
let gx=-999,gy=-999,gvx=0,gvy=0,pg=null;
addEventListener('pointermove',e=>{if(pg){gvx=cl(e.clientX-pg[0],-16,16);gvy=cl(e.clientY-pg[1],-16,16)}pg=[e.clientX,e.clientY];gx=e.clientX;gy=e.clientY});
addEventListener('pointerdown',()=>{gvx=(Math.random()-.5)*30;gvy=-6});
const rr=(g,x,y,w,h,r)=>{g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()};
const gd=(g,a,b,c,d,st)=>{const q=g.createLinearGradient(a,b,c,d);st.forEach(v=>q.addColorStop(v[0],v[1]));return q};
const sh=(g,b,y)=>{g.shadowColor='rgba(0,0,0,.32)';g.shadowBlur=b;g.shadowOffsetY=y},ns=g=>{g.shadowColor='transparent'};
function eyelet(g){g.beginPath();g.ellipse(0,6,7.5,9,0,0,6.283);g.lineWidth=4;g.strokeStyle='#3d434d';g.stroke();g.lineWidth=2.2;g.strokeStyle=gd(g,-7,0,7,0,[[0,'#8b93a0'],[.45,'#fff'],[1,'#7a828e']]);g.stroke()}
const CHM={
tag(g,c,bk){const w=c.w,h=c.h,x=-w/2,y=12;g.beginPath();rr(g,x,y,w,h,14);sh(g,18,12);g.fillStyle=gd(g,x,y,x+w,y+h,bk?[[0,c.c[1]],[1,c.c[1]]]:[[0,c.c[0]],[1,c.c[1]]]);g.fill();ns(g);g.lineWidth=2;g.strokeStyle='rgba(255,255,255,.35)';g.beginPath();rr(g,x+1.5,y+1.5,w-3,h-3,13);g.stroke();g.fillStyle='rgba(255,255,255,.13)';g.beginPath();rr(g,x+5,y+5,w-10,h*.4,10);g.fill();
 if(!bk){if(c.box){g.fillStyle=c.box;g.beginPath();rr(g,x+w*.17,y+h*.17,w*.66,h*.66,8);g.fill()}g.fillStyle=c.fg;g.font=`800 ${c.fs}px ${FF}`;g.textAlign='center';g.textBaseline='middle';g.save();g.translate(0,y+h/2+2);if(c.rot)g.rotate(1.5708);g.fillText(c.label,0,0);g.restore()}},
cyl(g){const w=70,h=86,x=-w/2,y=14;g.beginPath();rr(g,x,y,w,h,9);sh(g,18,12);g.fillStyle=gd(g,x,0,x+w,0,[[0,'#565e6a'],[.16,'#e6eaef'],[.38,'#fff'],[.62,'#a0a9b5'],[.86,'#dde2e8'],[1,'#454c57']]);g.fill();ns(g);g.beginPath();g.ellipse(0,y+1,w/2,8,0,0,6.283);g.fillStyle='#f5f7fa';g.fill();g.lineWidth=1.5;g.strokeStyle='rgba(0,0,0,.25)';g.stroke();g.fillStyle='rgba(0,0,0,.18)';g.fillRect(x+2,y+h*.62,w-4,2)},
key(g){g.save();g.scale(.82,.82);const f=gd(g,-34,10,34,175,[[0,'#fbfcfd'],[.45,'#9ba4b1'],[1,'#e8ecf1']]);sh(g,16,10);g.fillStyle=f;g.beginPath();g.arc(0,46,32,0,6.283);g.moveTo(10,46);g.arc(0,46,10,0,6.283,true);g.fill('evenodd');g.beginPath();g.rect(-9,76,18,96);g.rect(9,118,15,10);g.rect(9,136,15,10);g.rect(9,154,15,10);g.fill();ns(g);g.lineWidth=1.5;g.strokeStyle='rgba(60,68,80,.6)';g.stroke();g.beginPath();g.arc(0,46,32,0,6.283);g.stroke();g.strokeStyle='rgba(255,255,255,.85)';g.lineWidth=2;g.beginPath();g.arc(0,46,25,3.6,4.9);g.stroke();g.restore()},
coin(g,c,bk){const r=39,cy=52;sh(g,16,12);g.beginPath();g.arc(0,cy+5,r,0,6.283);g.fillStyle='#8a1f8f';g.fill();ns(g);g.beginPath();g.arc(0,cy,r,0,6.283);const q=g.createRadialGradient(-12,cy-14,3,0,cy,r);q.addColorStop(0,'#ffd8f7');q.addColorStop(.35,'#e744e5');q.addColorStop(1,'#7d1a84');g.fillStyle=bk?'#a02ba6':q;g.fill();g.lineWidth=3;g.strokeStyle='rgba(255,255,255,.35)';g.stroke();g.beginPath();g.arc(0,cy,r-9,0,6.283);g.lineWidth=2;g.strokeStyle='rgba(0,0,0,.18)';g.stroke()}};
function link(g,a,b,j,tw,sc){const len=Math.hypot(b.x-a.x,b.y-a.y),ph=(j%2?1.5708:0)+tw,w=Math.abs(Math.cos(ph))*5.4*sc+1.4*sc;g.save();g.translate((a.x+b.x)/2,(a.y+b.y)/2);g.rotate(Math.atan2(-(b.x-a.x),b.y-a.y));sh(g,6*sc,3*sc);g.beginPath();g.ellipse(0,0,w,len*.78,0,0,6.283);g.lineWidth=3.8*sc;g.strokeStyle='#3d434d';g.stroke();ns(g);g.lineWidth=2.1*sc;g.strokeStyle=gd(g,-w,0,w,0,[[0,'#8b93a0'],[.4,'#fff'],[.62,'#c9d0da'],[1,'#6a727e']]);g.stroke();g.restore()}
function rig(cv,o){const r={cv,g:cv.getContext('2d'),hero:!!o.hero,vis:true,drop:o.hero&&!RMM?-320:0,S:o.S.map(d=>({d,P:[],ph:(Math.random()-.5)*1.8,pv:0}))};new IntersectionObserver(e=>r.vis=e[0].isIntersecting).observe(cv);RIGS.push(r);size(r);return r}
function anc(r,s){return r.hero?{x:r.cx+s.d.off*r.sp,y:r.ringY+r.ry*Math.sqrt(Math.max(0,1-((s.d.off*r.sp)/r.rx)**2))+r.drop}:{x:r.W/2,y:0}}
function size(r){const cv=r.cv,dp=Math.min(devicePixelRatio||1,2);r.W=cv.clientWidth;r.H=cv.clientHeight;cv.width=r.W*dp;cv.height=r.H*dp;r.dp=dp;r.sc=r.hero?cl(Math.min(r.W/650,r.H/450),.78,1.35):1;r.L=(r.hero?16:13)*r.sc;r.cx=r.W/2;r.sp=92*r.sc;r.ringY=72*Math.max(.8,r.sc);r.ry=18;r.rx=Math.min(r.W*.39,170);
 r.S.forEach(s=>{const a=anc(r,s),n=Math.max(3,Math.round(s.d.len*(r.hero?r.sc:1)/r.L));s.n=n;s.P=[];for(let j=0;j<=n;j++)s.P.push({x:a.x,y:a.y+j*r.L,px:a.x,py:a.y+j*r.L})})}
function step(r){const{S,L,sc}=r,b=r.cv.getBoundingClientRect(),mx=gx-b.left,my=gy-b.top,pr=(r.hero?80:60)*sc,gr=L*.042;r.drop+=(0-r.drop)*.05;
S.forEach((s,si)=>{const P=s.P,a=anc(r,s);P[0].x=P[0].px=a.x;P[0].y=P[0].py=a.y;
for(let j=1;j<P.length;j++){const q=P[j],vx=(q.x-q.px)*.992,vy=(q.y-q.py)*.992;q.px=q.x;q.py=q.y;q.x+=vx+(RMM?0:Math.sin(performance.now()*.0009+si+j*.3)*.02*sc);q.y+=vy+gr;
 const dx=q.x-mx,dy=q.y-my,d=Math.hypot(dx,dy);if(d<pr){const f=1-d/pr;q.x+=dx/(d+.01)*f*f*4*sc+gvx*f*.5;q.y+=dy/(d+.01)*f*f*4*sc+gvy*f*.5;if(j==P.length-1)s.pv+=gvx*.004*f}}
for(let it=0;it<10;it++)for(let j=1;j<P.length;j++){const p=P[j-1],q=P[j],dx=q.x-p.x,dy=q.y-p.y,d=Math.hypot(dx,dy)||.01,df=(d-L)/d,ia=j==1?0:1,ib=j==P.length-1?.3:1,wa=ia/(ia+ib),wb=ib/(ia+ib);p.x+=dx*df*wa;p.y+=dy*df*wa;q.x-=dx*df*wb;q.y-=dy*df*wb}
const e=P[P.length-1];s.pv+=-.05*s.ph-.045*s.pv+(e.x-e.px)*.01;s.ph=cl(s.ph+s.pv,-2.6,2.6)});
if(r.hero)for(let i=0;i<S.length;i++)for(let j=i+1;j<S.length;j++){const A=S[i],B=S[j],e=A.P[A.n],f=B.P[B.n],dx=f.x-e.x,dy=f.y-e.y,d=Math.hypot(dx,dy),m=(A.d.c.cw+B.d.c.cw)*.5*sc*.5;if(d<m&&d>.01){const k=(m-d)/d*.5;e.x-=dx*k;e.y-=dy*k;f.x+=dx*k;f.y+=dy*k}}}
function draw(r){const g=r.g,{W,H,sc,dp}=r;g.setTransform(dp,0,0,dp,0,0);g.clearRect(0,0,W,H);
if(r.hero){const y=r.ringY+r.drop;g.save();g.beginPath();g.ellipse(r.cx,y,r.rx,r.ry,0,0,6.283);sh(g,14,10);g.lineWidth=13;g.strokeStyle='#4a505b';g.stroke();ns(g);g.lineWidth=9;g.strokeStyle=gd(g,r.cx-r.rx,0,r.cx+r.rx,0,[[0,'#8d95a1'],[.2,'#fff'],[.5,'#b9c0ca'],[.8,'#fff'],[1,'#7b838f']]);g.stroke();g.restore();
 g.save();g.translate(r.cx-r.rx*.98,y+r.ry+60*sc);g.rotate(-.35+Math.sin(performance.now()*.001)*.04);g.scale(sc,sc);sh(g,14,10);g.lineWidth=17;g.strokeStyle='#8a2a05';g.beginPath();rr(g,-26,-70,52,150,26);g.stroke();ns(g);g.lineWidth=13;g.strokeStyle=gd(g,-26,0,26,0,[[0,'#ff9a5a'],[.35,'#ff5a14'],[1,'#a12f05']]);g.beginPath();rr(g,-26,-70,52,150,26);g.stroke();g.lineWidth=3;g.strokeStyle='rgba(255,255,255,.55)';g.beginPath();g.moveTo(-26,-30);g.lineTo(-26,40);g.stroke();g.restore()}
[...r.S.keys()].sort((a,b)=>(a%2)-(b%2)).forEach(i=>{const s=r.S[i],P=s.P,n=s.n;for(let j=0;j<n;j++)link(g,P[j],P[j+1],j,s.ph*.5*Math.min(1,j/4),sc);
 const e=P[n],p=P[n-1],cs=Math.cos(s.ph);g.save();g.translate(e.x,e.y);g.rotate(Math.atan2(-(e.x-p.x),e.y-p.y));g.scale(sc,sc);g.scale(Math.max(.14,Math.abs(cs)),1);eyelet(g);CHM[s.d.c.t](g,s.d.c,cs<0);g.restore()})}
let lt=0;(function hl(t){requestAnimationFrame(hl);const k=cl(Math.round((t-lt)/16.7),1,3);lt=t;RIGS.forEach(r=>{if(!r.vis)return;for(let i=0;i<k;i++)step(r);draw(r)});gvx*=.9;gvy*=.9})(0);
const TG=(w,h,c,fg,label,fs,x)=>Object.assign({t:'tag',w,h,c,fg,label,fs,cw:w},x||{});

function hero3d(){
const cv=$('#gl'),box=$('#kc'),gl=cv.getContext('webgl',{antialias:true,alpha:true,premultipliedAlpha:false});if(!gl){box.style.display='none';return}
const VS=`attribute vec3 aP,aN;attribute vec2 aU;uniform mat4 uVP,uM;varying vec3 vN,vW;varying vec2 vU;void main(){vec4 w=uM*vec4(aP,1.);gl_Position=uVP*w;vN=mat3(uM)*aN;vW=w.xyz;vU=aU;}`;
const FS=`precision mediump float;varying vec3 vN,vW;varying vec2 vU;uniform vec3 uC;uniform float uK,uT,uZ;uniform sampler2D uS;
vec3 env(vec3 r){float y=r.y*.5+.5;vec3 c=vec3(.055,.06,.075);c=mix(c,vec3(.82,.85,.9),smoothstep(.70,.94,y));c=mix(c,vec3(.025,.03,.04),smoothstep(.18,.02,y));float strip=pow(max(0.,1.-abs(r.x+.32)*9.),7.);float strip2=pow(max(0.,1.-abs(r.x-.62)*13.),9.);float top=pow(max(0.,dot(r,normalize(vec3(-.35,.8,.48))),0.),32.);c+=vec3(.92,.96,1.)*(strip*.9+strip2*.72+top*.45);c+=vec3(.18,.2,.24)*pow(max(dot(r,normalize(vec3(.2,.25,.95))),0.),18.);return c;}
void main(){vec3 n=normalize(vN),v=normalize(vec3(0.,0.,uZ)-vW);
if(uT>.5){if(dot(n,v)<0.)discard;gl_FragColor=texture2D(uS,vU);return;}
vec3 r=reflect(-v,n),L=normalize(vec3(-.35,.6,.72));float f=pow(1.-max(dot(n,v),0.),3.);
vec3 pl=uC*(.48+.52*max(dot(n,L),0.))+.22*pow(max(dot(r,L),0.),24.)+.12*f;gl_FragColor=vec4(mix(pl,env(r)*uC,uK*.72),1.);}`;
const sh=(t,c)=>{const o=gl.createShader(t);gl.shaderSource(o,c);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))console.warn(gl.getShaderInfoLog(o));return o},pr=gl.createProgram();
gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS));gl.linkProgram(pr);gl.useProgram(pr);
const AL=['aP','aN','aU'].map(k=>{const l=gl.getAttribLocation(pr,k);gl.enableVertexAttribArray(l);return l}),UF={};['uVP','uM','uC','uK','uT','uZ','uS'].forEach(k=>UF[k]=gl.getUniformLocation(pr,k));
gl.enable(gl.DEPTH_TEST);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
const mk=(P,N,U,I)=>{const b=(a,t=gl.ARRAY_BUFFER,T=Float32Array)=>{const x=gl.createBuffer();gl.bindBuffer(t,x);gl.bufferData(t,new T(a),gl.STATIC_DRAW);return x};return{p:b(P),n:b(N),u:b(U),i:b(I,gl.ELEMENT_ARRAY_BUFFER,Uint16Array),c:I.length}};
const grid=(P,N,U,I,a,b)=>{for(let i=0;i<a;i++)for(let j=0;j<b;j++){const p=i*(b+1)+j;I.push(p,p+1,p+b+1,p+1,p+b+2,p+b+1)}};
function oval(a,b,r,sg=36,ts=8){const P=[],N=[],U=[],I=[];for(let i=0;i<=sg;i++){const u=i/sg*6.2832,cu=Math.cos(u),su=Math.sin(u),nx=b*cu,ny=a*su,l=Math.hypot(nx,ny);for(let j=0;j<=ts;j++){const v=j/ts*6.2832,c=Math.cos(v),s=Math.sin(v),qx=nx/l*c,qy=ny/l*c;P.push(a*cu+qx*r,b*su+qy*r,s*r);N.push(qx,qy,s);U.push(0,0)}}grid(P,N,U,I,sg,ts);return mk(P,N,U,I)}
function lathe(pr,sg=32){const P=[],N=[],U=[],I=[],n=pr.length;for(let k=0;k<n;k++){const a=pr[Math.max(0,k-1)],b=pr[Math.min(n-1,k+1)],dr=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dr,dy)||1,nr=-dy/l,ny=dr/l;for(let i=0;i<=sg;i++){const t=i/sg*6.2832;P.push(pr[k][0]*Math.cos(t),pr[k][1],pr[k][0]*Math.sin(t));N.push(nr*Math.cos(t),ny,nr*Math.sin(t));U.push(0,0)}}grid(P,N,U,I,n-1,sg);return mk(P,N,U,I)}
function rbox(w,h,d,r,n=10){const P=[],N=[],U=[],I=[],H=[w/2,h/2,d/2],ih=H.map(x=>x-r);[[0,1,2,1],[0,1,2,-1],[1,2,0,1],[1,2,0,-1],[2,0,1,1],[2,0,1,-1]].forEach(([u,v,k,sg])=>{const b=P.length/3;for(let i=0;i<=n;i++)for(let j=0;j<=n;j++){const p=[0,0,0];p[u]=(i/n*2-1)*H[u];p[v]=(j/n*2-1)*H[v];p[k]=sg*H[k];const q=p.map((c,x)=>Math.max(-ih[x],Math.min(ih[x],c)));let nn=p.map((c,x)=>c-q[x]);const l=Math.hypot(...nn)||1;nn=nn.map(c=>c/l);P.push(...q.map((c,x)=>c+nn[x]*r));N.push(...nn);U.push(0,0)}for(let i=0;i<n;i++)for(let j=0;j<n;j++){const a=b+i*(n+1)+j;I.push(a,a+1,a+n+1,a+1,a+n+2,a+n+1)}});return mk(P,N,U,I)}
const quad=(w,h)=>mk([-w/2,h/2,0,w/2,h/2,0,w/2,-h/2,0,-w/2,-h/2,0],[0,0,1,0,0,1,0,0,1,0,0,1],[0,0,1,0,1,1,0,1],[0,1,2,0,2,3]);
const I4=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
const mul=(a,b)=>{const o=new Float32Array(16);for(let i=0;i<4;i++)for(let j=0;j<4;j++){let s=0;for(let k=0;k<4;k++)s+=a[k*4+j]*b[i*4+k];o[i*4+j]=s}return o};
const Tm=(x,y,z)=>{const m=I4();m[12]=x;m[13]=y;m[14]=z;return m},Sm=k=>{const m=I4();m[0]=m[5]=m[10]=k;return m};
const Rx=a=>{const c=Math.cos(a),s=Math.sin(a),m=I4();m[5]=c;m[6]=s;m[9]=-s;m[10]=c;return m},Ry=a=>{const c=Math.cos(a),s=Math.sin(a),m=I4();m[0]=c;m[2]=-s;m[8]=s;m[10]=c;return m},Rz=a=>{const c=Math.cos(a),s=Math.sin(a),m=I4();m[0]=c;m[1]=s;m[4]=-s;m[5]=c;return m};
const TEX={},dTex=(w,h,fn)=>{const c=document.createElement('canvas');c.width=w;c.height=h;fn(c.getContext('2d'),w,h);const t=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,c);[[gl.TEXTURE_MIN_FILTER,gl.LINEAR],[gl.TEXTURE_MAG_FILTER,gl.LINEAR],[gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE],[gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE]].forEach(a=>gl.texParameteri(gl.TEXTURE_2D,a[0],a[1]));return t};
function mkTex(){TEX.M=dTex(512,320,(g,w,h)=>{g.fillStyle='#171719';g.beginPath();rr(g,0,0,w,h,48);g.fill();g.strokeStyle='rgba(255,255,255,.26)';g.lineWidth=5;g.stroke();g.fillStyle='#f5f3ef';g.font=`900 104px ${FF}`;g.textAlign='center';g.textBaseline='middle';g.fillText('MAVERN',w/2,h*.44);g.fillStyle='#b8ff9f';g.fillRect(w*.25,h*.73,w*.5,5)});
TEX.V=dTex(256,128,(g,w,h)=>{g.fillStyle='#102a13';g.fillRect(0,0,w,h);g.fillStyle='#39e65b';g.font='900 43px system-ui,sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillText('MAVERN',w/2,h/2);g.strokeStyle='rgba(255,255,255,.65)';g.lineWidth=3;g.strokeRect(5,5,w-10,h-10)});
TEX.C=dTex(256,128,(g,w,h)=>{g.fillStyle='#171719';g.fillRect(0,0,w,h);g.fillStyle='#f5f3ef';g.font=`900 52px ${FF}`;g.textAlign='center';g.textBaseline='middle';g.fillText('STUDIO',w/2,h/2);g.fillStyle='#b8ff9f';g.fillRect(w*.32,h*.82,w*.36,4)})}
mkTex();document.fonts&&document.fonts.ready.then(mkTex);
const CR=[.82,.84,.88],eyelet=()=>({g:oval(7,9,2.3,20,8),c:CR,k:.82,m:Tm(0,-6,0)}),body=(g,c,k,x,y,z=0,rx=0,rz=0)=>({g,c,k,m:mul(Tm(x,y,z),mul(Rz(rz),Rx(rx)))}),dec=(g,t,x,y,z)=>({g,c:CR,k:0,t,m:Tm(x,y,z)});
const CH={m:[eyelet(),body(rbox(96,96,26,13),[.025,.028,.032],.12,0,-62),dec(quad(78,78),'M',0,-62,13.6)],
can:[eyelet(),body(lathe([[0,44],[18,44],[30,44],[34,41],[35,36],[35,-36],[34,-41],[30,-44],[18,-44],[0,-44]]),[.66,.68,.72],.82,0,-60,0,0,.1)],
key:[eyelet(),body(lathe([[11,5],[27,5],[30,4],[31,2],[31,-2],[30,-4],[27,-5],[11,-5],[9,-3],[8.5,0],[9,3],[11,5]]),CR,1,0,-42,0,1.5708),body(rbox(15,86,9,3),CR,1,0,-112),body(rbox(13,8,9,2),CR,1,11,-136),body(rbox(13,8,9,2),CR,1,11,-122),body(rbox(13,8,9,2),CR,1,11,-108)],
coin:[eyelet(),body(lathe([[0,9],[16,9],[30,9],[36,7],[38,3],[38,-3],[36,-7],[30,-9],[16,-9],[0,-9]]),[.78,.08,.68],.24,0,-52,0,1.5708)],
plate:[eyelet(),body(rbox(44,140,18,9),[.04,.55,.08],.18,0,-82),dec(quad(36,108),'V',0,-82,9.5)],
code:[eyelet(),body(rbox(84,60,18,10),[1,.82,.2],.4,0,-44),dec(quad(62,31),'C',0,-44,9.5)]};
const LG=oval(4.8,12.6,2.35,32,10),CAR=oval(22,64,7.2,48,12),CLA=rbox(16,30,12,5);let RG;
const SP=[{off:-.82,len:205,c:{t:'m',cw:116}},{off:-.48,len:265,c:{t:'can',cw:84}},{off:-.12,len:240,c:{t:'key',cw:70}},{off:.20,len:285,c:{t:'coin',cw:88}},{off:.52,len:205,c:{t:'plate',cw:66}},{off:.82,len:245,c:{t:'code',cw:92}}],ZS=[22,-52,54,-28,68,-66];
const r={cv,hero:true,vis:true,drop:RMM?0:-320,S:SP.map(d=>({d,P:[],ph:(Math.random()-.5)*1.8,pv:0}))};let VP,camZ;
function build(){size(r);camZ=r.H/2/Math.tan(.2618);const f=1/Math.tan(.2618),a=r.W/r.H,P=new Float32Array(16);P[0]=f/a;P[5]=f;P[10]=-(4000+10)/3990;P[11]=-1;P[14]=-2*4000*10/3990;VP=mul(P,Tm(0,0,-camZ));gl.viewport(0,0,cv.width,cv.height);RG=oval(105,91,4.4,88,12)}
build();new IntersectionObserver(e=>r.vis=e[0].isIntersecting).observe(box);addEventListener('resize',build);
function render(t){gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.uniformMatrix4fv(UF.uVP,false,VP);gl.uniform1f(UF.uZ,camZ);gl.uniform1i(UF.uS,0);
const{W,H,sc}=r,wx=x=>x-W/2,wy=y=>H/2-y,dr=(g,M,c,k,tx)=>{gl.bindBuffer(gl.ARRAY_BUFFER,g.p);gl.vertexAttribPointer(AL[0],3,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,g.n);gl.vertexAttribPointer(AL[1],3,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,g.u);gl.vertexAttribPointer(AL[2],2,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,g.i);gl.uniformMatrix4fv(UF.uM,false,M);gl.uniform3fv(UF.uC,c);gl.uniform1f(UF.uK,k);gl.uniform1f(UF.uT,tx?1:0);if(tx)gl.bindTexture(gl.TEXTURE_2D,TEX[tx]);gl.drawElements(gl.TRIANGLES,g.c,gl.UNSIGNED_SHORT,0)};
const ry=r.ringY+r.drop;dr(RG,mul(Tm(wx(r.cx-26),wy(ry+10),-36),mul(Rz(-.42),Rx(-.85))),CR,1);dr(RG,mul(Tm(wx(r.cx+28),wy(ry+4),-42),mul(Rz(.35),Rx(-.75))),CR,1);
const cm=mul(Tm(wx(r.cx-r.rx*.72),wy(ry+54*sc),-55),mul(Rz(-.48+Math.sin(t*.001)*.025),Sm(sc*1.08)));dr(CAR,cm,[1,.28,.045],.5);dr(CLA,mul(cm,Tm(-10,52,0)),CR,1);
r.S.forEach((s,si)=>{const P=s.P,n=s.n,z=ZS[si];for(let j=0;j<n;j++){const a=P[j],b=P[j+1],dx=b.x-a.x,dy=-(b.y-a.y);dr(LG,mul(Tm(wx((a.x+b.x)/2),wy((a.y+b.y)/2),z),mul(Rz(Math.atan2(-dx,dy)),mul(Ry((j%2?1.5708:0)+s.ph*.5*Math.min(1,j/4)),Sm(sc)))),CR,1)}
const e=P[n],p=P[n-1],B=mul(Tm(wx(e.x),wy(e.y),z),mul(Rz(Math.atan2(e.x-p.x,e.y-p.y)),mul(Ry(s.ph),Sm(sc))));CH[s.d.c.t].forEach(q=>dr(q.g,mul(B,q.m),q.c,q.k,q.t))})}
let lt=0;(function lp(t){requestAnimationFrame(lp);if(!r.vis)return;const k=cl(Math.round((t-lt)/16.7),1,3);lt=t;for(let i=0;i<k;i++)step(r);render(t)})(0);
}
hero3d();

addEventListener('resize',()=>RIGS.forEach(r=>r.hero&&size(r)));
function mini(el,off,len,c){if(!el||RMM)return;const cv=document.createElement('canvas');cv.style.cssText=`position:absolute;top:0;right:${off}px;width:140px;height:${len+c.h+60}px;pointer-events:none;z-index:4`;el.appendChild(cv);rig(cv,{S:[{off:0,len,c}]})}
mini($('.plan.pop'),22,52,TG(88,34,['#fff3a0','#f4d447'],'#141414','Most chosen',13));
mini($('.fp'),6,52,TG(88,34,['#b8ffa6','#17b81e'],'#06330a','Questions?',13));


