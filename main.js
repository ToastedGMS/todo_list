(()=>{"use strict";const e=()=>{null!=modal&&(modal.classList.remove("active"),overlay.classList.remove("active"))};let t=[];class n{constructor(e,t,n=void 0,d=void 0,l=void 0,o=void 0){this.type=e,this.title=t,this.description=n,this.dueDate=d,this.dueTime=l,this.priority=o}pushToList(){return t.push(this),t}}const d=document.querySelectorAll("[data-close-button]"),l=document.getElementById("overlay"),o=document.querySelectorAll('[data-type="formBtn"]'),i=document.getElementById("type"),c=document.getElementById("dueDate"),a=document.getElementById("dueTime"),s=document.getElementById("priority");document.querySelector("main"),l.addEventListener("click",(()=>{document.querySelectorAll(".modal.active").forEach((t=>{e()}))})),o.forEach((e=>{e.addEventListener("click",(()=>{null!=modal&&(modal.classList.add("active"),overlay.classList.add("active"))}))})),d.forEach((t=>{t.addEventListener("click",(()=>{document.querySelector(".closeBtn"),e()}))})),i.addEventListener("change",(()=>{"Note"===document.getElementById("type").value?(c.style.display="none",a.style.display="none",s.style.display="none"):(c.style.display="inline",a.style.display="inline",s.style.display="inline")})),document.querySelector("[data-submit-button]").addEventListener("click",(e=>{e.preventDefault(),(()=>{let e=document.getElementById("type").value,d=document.getElementById("title").value,l=document.getElementById("description").value,o=document.getElementById("dueDate").value,i=document.getElementById("dueTime").value,c=document.getElementById("priority").value,a=new n(e,d,l,o,i,c);a.pushToList(),function(){document.getElementById("type"),document.getElementById("dueDate"),document.getElementById("dueTime"),document.getElementById("priority");const e=document.querySelector("main");for(;e.firstChild;)e.removeChild(e.lastChild);t.forEach((t=>{if("Task"===t.type){const n=document.createElement("div");n.classList.add("taskCard");const d=document.createElement("h3");d.innerText=t.title;const l=document.createElement("p");l.innerText=t.description;const o=document.createElement("p");o.innerText=t.dueDate;const i=document.createElement("p");i.innerText=t.dueTime;const c=document.createElement("p");c.innerText=t.priority,e.appendChild(n),n.appendChild(d),n.appendChild(l),n.appendChild(o),n.appendChild(i),n.appendChild(c)}else{const n=document.createElement("div");n.classList.add("noteCard");const d=document.createElement("h3");d.innerText=t.title;const l=document.createElement("p");l.innerText=t.description,e.appendChild(n),n.appendChild(d),n.appendChild(l)}}))}(),console.log(a),console.log(t)})()})),new n("Task","Hello World","Lorem Ipsum").pushToList()})();