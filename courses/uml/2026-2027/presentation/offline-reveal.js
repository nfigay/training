/* Offline two-dimensional presentation runtime. Not an upstream reveal.js distribution. */
(()=>{
'use strict';
const root=document.querySelector('.reveal');
const stage=root.querySelector('.slides');
const groups=[...stage.children].filter(x=>x.tagName==='SECTION');
const slides=groups.map(g=>{const nested=[...g.children].filter(x=>x.tagName==='SECTION');return nested.length?nested:[g]});
let h=0,v=0,overview=false;
const indices=[];slides.forEach((ss,hi)=>ss.forEach((_,vi)=>indices.push([hi,vi])));
const controls=document.createElement('div');controls.className='controls';
controls.innerHTML='<button title="Haut" aria-label="Haut" data-go="up" style="grid-area:1/2">▲</button><button title="Gauche" aria-label="Gauche" data-go="left" style="grid-area:2/1">◀</button><button title="Vue d’ensemble" aria-label="Vue d’ensemble" data-go="overview" style="grid-area:2/2">▦</button><button title="Droite" aria-label="Droite" data-go="right" style="grid-area:2/3">▶</button><button title="Bas" aria-label="Bas" data-go="down" style="grid-area:3/2">▼</button>';
const progress=document.createElement('div');progress.className='progress';progress.innerHTML='<span></span>';
const number=document.createElement('div');number.className='slide-number';
root.append(controls,progress,number);
function setScale(){root.style.setProperty('--scale',Math.min(innerWidth/1600,innerHeight/900));}
function parseHash(){const m=location.hash.match(/^#\/(\d+)(?:\/(\d+))?/);if(!m)return [0,0];return [+m[1],+(m[2]||0)];}
function render(push=true){
 h=Math.max(0,Math.min(groups.length-1,h));v=Math.max(0,Math.min(slides[h].length-1,v));
 groups.forEach((g,i)=>{g.classList.toggle('present',i===h);slides[i].forEach((s,j)=>s.classList.toggle('present',i===h&&j===v));});
 if(push){const hash='#/'+h+'/'+v;if(location.hash!==hash)history.replaceState(null,'',hash)}
 number.textContent=(h+1)+'.'+(v+1);const index=indices.findIndex(p=>p[0]===h&&p[1]===v);
 progress.firstElementChild.style.width=(100*(index+1)/indices.length)+'%';
 for(const [name,disabled] of [['left',h===0],['right',h===groups.length-1],['up',v===0],['down',v===slides[h].length-1]]) controls.querySelector('[data-go="'+name+'"]').disabled=disabled;
 setScale();
}
function nav(dir){if(overview){overview=false;root.classList.remove('overview')}
 if(dir==='left'&&h>0){h--;v=0}if(dir==='right'&&h<groups.length-1){h++;v=0}
 if(dir==='down'&&v<slides[h].length-1)v++;if(dir==='up'&&v>0)v--;render()}
function toggleOverview(){overview=!overview;root.classList.toggle('overview',overview);render(false)}
controls.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset.go;if(d==='overview')toggleOverview();else nav(d)});
window.addEventListener('keydown',e=>{
 const tags=['INPUT','TEXTAREA','SELECT'];if(tags.includes(document.activeElement.tagName)||e.altKey||e.metaKey||e.ctrlKey)return;
 const map={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down'};
 if(e.key in map){e.preventDefault();nav(map[e.key]);return}
 if(e.key==='Escape'||e.key==='o'||e.key==='O'){e.preventDefault();toggleOverview();return}
 if(e.key==='PageDown'||e.key===' '){e.preventDefault();if(v<slides[h].length-1)nav('down');else nav('right')}
 if(e.key==='PageUp'){e.preventDefault();if(v>0)nav('up');else nav('left')}
});
window.addEventListener('hashchange',()=>{[h,v]=parseHash();render(false)});
window.addEventListener('resize',setScale);
stage.addEventListener('click',e=>{if(!overview)return;const s=e.target.closest('section');if(!s)return;for(let i=0;i<slides.length;i++){let j=slides[i].indexOf(s);if(j>=0){h=i;v=j;toggleOverview();render();return}}});
[h,v]=parseHash();render(false);
window.Reveal={initialize:()=>Promise.resolve(),slide:(hi,vi=0)=>{h=hi;v=vi;render()},getIndices:()=>({h,v}),next:()=>{if(v<slides[h].length-1)nav('down');else nav('right')},prev:()=>{if(v>0)nav('up');else nav('left')},left:()=>nav('left'),right:()=>nav('right'),up:()=>nav('up'),down:()=>nav('down'),isOverview:()=>overview,toggleOverview};
})();