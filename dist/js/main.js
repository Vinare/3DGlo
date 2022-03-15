(()=>{"use strict";const e=({formID:e,someElem:t=[]})=>{const o=document.getElementById(e),a=document.querySelectorAll("input"),r=document.querySelectorAll("select"),l=document.createElement("div");l.style.color="#19b5fe";try{if(!o)throw new Error("Верните форму на место, пожааааалуйста!");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),n=new FormData(o),c={};var s;n.forEach(((e,t)=>{c[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?c[e.id]=t.textContent:"input"===e.type&&(c[e.id]=t.value)})),(s=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((n=>{l.textContent="Спасибо!Наш менеджер с вами свяжется.",e.forEach((e=>{e.value=""})),[...a,...r].forEach((e=>e.value="")),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?t.textContent="0":"input"===e.type&&(t.value="")})),setTimeout((()=>{o.removeChild(l)}),5e3)})).catch((e=>{l.textContent="Ошибка...",setTimeout((()=>{o.removeChild(l)}),5e3)})),l.textContent="Загрузка...",o.append(l)})(),console.log("Отправлено")}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-days"),o=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let l;const n=()=>{let e=(new Date("26 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}},c=()=>{let e=n();o.textContent=e.hours<10?"0"+e.hours:e.hours,a.textContent=e.minutes<10?"0"+e.minutes:e.minutes,r.textContent=e.seconds<10?"0"+e.seconds:e.seconds,t.textContent=e.days<10?"0"+e.days:e.days};c(),n().timeRemaining>0?l=setInterval(c,1e3):(o.textContent="00",a.textContent="00",r.textContent="00",t.textContent="00",clearInterval(l))})(),(()=>{const e=document.querySelector("menu");document.body.addEventListener("click",(t=>{t.target.closest(".menu")||t.target.classList.contains("close-btn")||t.target.matches("menu > ul > li > a")?(t.preventDefault(),e.classList.toggle("active-menu")):t.target.closest("menu")||e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{screen.width>=768?(e.style.display="block",e.style.opacity=0,(({timing:e,draw:t,duration:o})=>{let a=performance.now();requestAnimationFrame((function r(l){let n=(l-a)/o;n>1&&(n=1);let c=e(n);t(c),n<1&&requestAnimationFrame(r)}))})({duration:800,timing:e=>e,draw(t){e.style.opacity=t}})):e.style.display="block"}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),((e=100)=>{const t=document.querySelectorAll(".calc-block input"),o=document.querySelector(".calc-block"),a=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),c=document.getElementById("total"),s=/[^0-9]+/i;t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(s,"")}))})),o.addEventListener("input",(t=>{t.target!==a&&t.target!==r&&t.target!==l&&t.target!==n||(()=>{const t=+a.options[a.selectedIndex].value,o=r.value;let s=0,i=1,u=1;l.value>1&&(i+=+l.value/10),n.value&&n.value<5?u=2:n.value&&n.value<10&&(u=1.5),s=a.value&&r.value?e*t*o*i*u:0,c.textContent=Math.floor(s)})()}))})(100),(()=>{const e=document.getElementById("form2-message"),t=document.querySelectorAll("form input[type='text']"),o=document.querySelectorAll("form input[type='email']"),a=document.querySelectorAll("form input[type='tel']"),r=/[^а-я\-\s]+/i,l=/[^a-z\@\-\_\.\!\~\*\']+/i,n=/[^\d()\s-+]/g,c=/(\-+)/g,s=/(\s+)/g,i=/^\-|\-$/g,u=/^\s+|\s+$/g;t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(r,"")}))})),o.forEach((e=>{e.required=!0,e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(l,"")}))})),a.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(n,"")}))})),e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(r,"")})),t.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(c,"-").replace(s," ").replace(i,"").replace(u,""),e.target.value=e.target.value.toLowerCase(),e.target.value=e.target.value.replace(/^[а-я]{1}|\s{1}[а-я]{1}/gi,(e=>e.toUpperCase()))}))})),o.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(c,"-").replace(s," ").replace(i,"").replace(u,"")}))})),a.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(c,"-").replace(s," ").replace(i,"").replace(u,"")}))}))})(),[...document.querySelector("menu").querySelectorAll("ul>li>a"),document.querySelector(".service-link")].forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href").substring(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const a=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===a?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots"),a=2e3;let r,l,n=0;const c=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)},i=()=>{c(t,n,"portfolio-item-active"),c(r,n,"dot-active"),n++,n>=t.length&&(n=0),s(t,n,"portfolio-item-active"),s(r,n,"dot-active")},u=(e=1500)=>{l=setInterval(i,a)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,n,"portfolio-item-active"),c(r,n,"dot-active"),e.target.matches("#arrow-right")?n++:e.target.matches("#arrow-left")?n--:e.target.classList.contains("dot")&&r.forEach(((t,o)=>{e.target===t&&(n=o)})),n>=t.length?n=0:n<0&&(n=t.length-1),s(t,n,"portfolio-item-active"),s(r,n,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&u(a)}),!0),t.forEach(((e,t)=>{const a=document.createElement("li");0===t?a.classList.add("dot","dot-active"):a.classList.add("dot"),o.append(a)})),r=document.querySelectorAll(".dot"),u(a)})(),e({formID:"form1",someElem:[{type:"block",id:"total"}]}),e({formID:"form2",someElem:[{type:"block",id:"total"}]}),e({formID:"form3",someElem:[{type:"block",id:"total"}]})})();