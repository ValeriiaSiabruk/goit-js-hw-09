const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.body;let l=null;function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{null===l&&(n.style.backgroundColor=o(),l=setInterval((()=>{n.style.backgroundColor=o()}),1e3))})),e.addEventListener("click",(()=>{clearInterval(l),l=null}));
//# sourceMappingURL=01-color-switcher.6d56dbe0.js.map
