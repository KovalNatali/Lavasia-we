/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=document.querySelector(".burger"),l=document.querySelector(".nav"),u=document.querySelectorAll(".nav-link");c.hidden=!1;c.addEventListener("click",()=>{l.classList.toggle("open")});u.forEach(i=>{i.addEventListener("click",function(r){if(this.getAttribute("href").startsWith("#")){r.preventDefault();const n=this.getAttribute("href"),o=document.querySelector(n);if(o){const e=document.querySelector("header").offsetHeight,t=o.offsetTop-e;window.scrollTo({top:t,behavior:"smooth"})}}else l.classList.remove("open")})});
//# sourceMappingURL=index.js.map
