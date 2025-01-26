import{S as h,i as g}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=document.querySelector(".loader"),p=o=>{const{webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:u}=o;return`  
  <li class="gallery-item">
    <a class="gallery-link" href="${r}">
      <img class="gallery-img" src="${s}" alt="${i}"  />
    </a>
      <div class="container">
        <div class="deck-img">
        likes
          <h2 class="value-deck-img">${e}</h2>
        </div>
        <div class="deck-img">
        views
          <h2 class="value-deck-img">${t}</h2>
        </div>
        <div class="deck-img">
        comments
          <h2 class="value-deck-img">${a}</h2>
        </div>
        <div class="deck-img">
        downloads
          <h2 class="value-deck-img">${u}</h2>
        </div>
      </div>
  </li>`},f=()=>m.style.display="block",y=()=>m.style.display="none",v=o=>{const s=new URLSearchParams({key:"48384527-ba0e7acd0c025abd4e882b58a",q:o,safesearch:!0,orientation:"horizontal",image_type:"photo"});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},c=document.querySelector(".main-form"),l=document.querySelector(".list-gallery"),n=g;let d;const L=o=>{o.preventDefault(),f();const s=o.currentTarget.elements.user_search_query.value.trim();if(l.innerHTML="",s===""){n.show({title:"❌",color:"#d1c542",position:"topRight",message:"Please enter a keyword"}),c.reset(),l.innerHTML="";return}v(s).then(r=>{if(r.total===0){n.show({title:"❌ Sorry",color:"red",position:"topRight",message:"There are no images matching your search query. Please try again!"}),c.reset(),l.innerHTML="";return}const i=r.hits.map(e=>p(e)).join("");l.innerHTML=i,d=new h(".list-gallery a",{captionsData:"alt",captionDelay:250}),d.refresh(),c.reset()}).catch(r=>{n.show({title:"❌ Sorry",color:"red",position:"topRight",message:r})}).finally(()=>{y()})};c.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
