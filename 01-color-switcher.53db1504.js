const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");e.addEventListener("click",(()=>{timerId=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.setAttribute("disabled",!0),r.hasAttribute("disabled")&&r.removeAttribute("disabled")})),r.addEventListener("click",(()=>{clearInterval(timerId),e.removeAttribute("disabled"),r.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.53db1504.js.map
