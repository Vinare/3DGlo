(()=>{"use strict";(t=>{const e=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),s=document.getElementById("timer-seconds");let m;const r=()=>{let t=(new Date("8 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}},d=()=>{let t=r();n.textContent=t.hours<10?"0"+t.hours:t.hours,o.textContent=t.minutes<10?"0"+t.minutes:t.minutes,s.textContent=t.seconds<10?"0"+t.seconds:t.seconds,e.textContent=t.days<10?"0"+t.days:t.days};d(),r().timeRemaining>0?m=setInterval(d,1e3):(n.textContent="00",o.textContent="00",s.textContent="00",e.textContent="00",clearInterval(m))})()})();