(()=>{"use strict";const e=document.querySelector(".modalBody");e.innerHTML="";var t,n,d=document.createElement("form");d.id="todoForm",d.appendChild(i("Type","type")),d.appendChild(c("type",["Task","Note"])),d.appendChild(document.createElement("br")),d.appendChild(document.createElement("br")),d.appendChild(i("Title","title")),d.appendChild(a("text","title")),d.appendChild(document.createElement("br")),d.appendChild(document.createElement("br")),d.appendChild(i("Description","description")),d.appendChild((t="description",(n=document.createElement("textarea")).id=t,n.name=t,n.rows="4",n.cols="50",n)),d.appendChild(document.createElement("br")),d.appendChild(document.createElement("br")),d.appendChild(i("Due Date","dueDate")),d.appendChild(a("date","dueDate")),d.appendChild(document.createElement("br")),d.appendChild(document.createElement("br")),d.appendChild(i("Due Time","dueTime")),d.appendChild(a("time","dueTime")),d.appendChild(document.createElement("br")),d.appendChild(document.createElement("br")),d.appendChild(i("Priority","priority")),d.appendChild(c("priority",["Low","Medium","High"])),d.appendChild(document.createElement("br")),d.appendChild(document.createElement("br"));var l=document.createElement("input");function i(e,t){var n=document.createElement("label");return n.textContent=e+":",n.setAttribute("for",t),n}function a(e,t){var n=document.createElement("input");return n.type=e,n.id=t,n.name=t,n.required=!0,n}function c(e,t){var n=document.createElement("select");n.id=e,n.name=e,n.required=!0;for(var d=0;d<t.length;d++){var l=document.createElement("option");l.value=t[d],l.text=t[d],n.appendChild(l)}return n}l.type="submit",l.value="Create Todo",l.setAttribute("data-submit-button",""),d.appendChild(l),e.appendChild(d);const o=()=>{null!=modal&&(modal.classList.remove("active"),overlay.classList.remove("active"))};function r(e){const t=document.querySelector("main");for(;t.firstChild;)t.removeChild(t.lastChild);e.forEach((e=>{if("Task"===e.type){const n=document.createElement("div");n.classList.add("taskCard");const d=document.createElement("h3");d.innerText=e.title;const l=document.createElement("p");l.innerText=e.description;const i=document.createElement("p");i.innerText=e.dueDate;const a=document.createElement("p");a.innerText=e.dueTime;const c=document.createElement("p");c.innerText=e.priority,t.appendChild(n),n.appendChild(d),n.appendChild(l),n.appendChild(i),n.appendChild(a),n.appendChild(c)}else{const n=document.createElement("div");n.classList.add("noteCard");const d=document.createElement("h3");d.innerText=e.title;const l=document.createElement("p");l.innerText=e.description,t.appendChild(n),n.appendChild(d),n.appendChild(l)}}))}let m=[];class p{constructor(e,t,n=void 0,d=void 0,l=void 0,i=void 0){this.type=e,this.title=t,this.description=n,this.dueDate=d,this.dueTime=l,this.priority=i}pushToList(){return m.push(this),m}}let u=[],s=[];const h=document.querySelectorAll("[data-close-button]"),y=document.getElementById("overlay"),E=document.querySelectorAll('[data-type="formBtn"]'),C=document.getElementById("type"),v=document.getElementById("dueDate"),T=document.getElementById("dueTime"),b=document.getElementById("priority");y.addEventListener("click",(()=>{document.querySelectorAll(".modal.active").forEach((e=>{o()}))})),E.forEach((e=>{e.addEventListener("click",(()=>{null!=modal&&(modal.classList.add("active"),overlay.classList.add("active"))}))})),h.forEach((e=>{e.addEventListener("click",(()=>{o()}))})),C.addEventListener("change",(()=>{"Note"===document.getElementById("type").value?(v.style.display="none",T.style.display="none",b.style.display="none"):(v.style.display="inline",T.style.display="inline",b.style.display="inline")})),document.querySelector("[data-submit-button]").addEventListener("click",(e=>{e.preventDefault(),(()=>{let e=document.getElementById("type").value,t=document.getElementById("title").value,n=document.getElementById("description").value,d=document.getElementById("dueDate").value,l=document.getElementById("dueTime").value,i=document.getElementById("priority").value,a=new p(e,t,n,d,l,i);"Task"===a.type?u.push(a):"Note"===a.type&&s.push(a),a.pushToList(),r(m)})()})),(()=>{const e=document.querySelector("[data-notes]"),t=document.querySelector("[data-tasks]"),n=document.querySelector("[data-all]");e.addEventListener("click",(()=>{r(s)})),t.addEventListener("click",(()=>{r(u)})),n.addEventListener("click",(()=>{r(m)}))})(),document.querySelector(".modalBody").appendChild(document.createElement("p").innerHTML="fuck")})();