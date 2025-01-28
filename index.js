import{a as k,S as P,i as S}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const p=document.querySelector(".loader"),f=r=>{const{webformatURL:e,largeImageURL:a,tags:o,likes:t,views:s,comments:l,downloads:w}=r;return`  
  <li class="gallery-item">
    <a class="gallery-link" href="${a}">
      <img class="gallery-img" src="${e}" alt="${o}"  />
    </a>
      <div class="container">
        <div class="deck-img">
        likes
          <h2 class="value-deck-img">${t}</h2>
        </div>
        <div class="deck-img">
        views
          <h2 class="value-deck-img">${s}</h2>
        </div>
        <div class="deck-img">
        comments
          <h2 class="value-deck-img">${l}</h2>
        </div>
        <div class="deck-img">
        downloads
          <h2 class="value-deck-img">${w}</h2>
        </div>
      </div>
  </li>`},v=()=>p.style.display="block",n=()=>p.style.display="none",L=(r,e)=>k("https://pixabay.com/api/",{params:{page:e,q:r,per_page:15,key:"48384527-ba0e7acd0c025abd4e882b58a",safesearch:!0,orientation:"horizontal",image_type:"photo"}}),g=document.querySelector(".main-form"),c=document.querySelector(".list-gallery"),d=document.querySelector(".js-load-more"),m=S,u={title:"❌ Sorry",color:"red",position:"topRight"},T=new P(".list-gallery a",{captionsData:"alt",captionDelay:250});let i=1,h="",y="";const M=async r=>{try{if(r.preventDefault(),v(),h=r.currentTarget.elements.user_search_query.value.trim(),c.innerHTML="",i=1,d.classList.add("is-hidden"),h===""){m.show({...u,color:"orange",message:"Please enter a keyword"}),n(),g.reset(),c.innerHTML="";return}const{data:e}=await L(h,i);if(console.log(e),e.total===0){m.show({...u,message:"There are no images matching your search query. Please try again!"}),n(),g.reset(),c.innerHTML="";return}y=Math.ceil(e.totalHits/15);const a=e.hits.map(o=>f(o)).join("");c.innerHTML=a,i<y&&d.classList.remove("is-hidden"),d.addEventListener("click",b),T.refresh(),g.reset()}catch(e){m.show({...u,message:e.message})}finally{n()}};g.addEventListener("submit",M);const b=async r=>{try{i++,v();const{data:e}=await L(h,i);console.log(e);const a=e.hits.map(o=>f(o)).join("");c.insertAdjacentHTML("beforeend",a),n(),i>=y&&(d.classList.add("is-hidden"),d.removeEventListener("click",b),m.show({...u,color:"orange",message:"We're sorry, but you've reached the end of search results."}))}catch(e){m.show({...u,message:e.message}),n()}};
//# sourceMappingURL=index.js.map
