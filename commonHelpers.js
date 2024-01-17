import{i as c,S as m}from"./assets/vendor-60857eec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function d(o){return o.map(({downloads:t,likes:n,webformatURL:a,largeImageURL:e,tags:r,views:s,comments:f})=>`
        <div class="product-card main">
        <div class="main">
        <a href="${e}" >
        <img src=${a} alt="${r}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes: ${n}</b>
          </p>
          <p class="info-item">
            <b>Views: ${s}</b>
          </p>
          <p class="info-item">
            <b>Comments: ${f}</b>
          </p>
          <p class="info-item">
            <b>Downloads: ${t}</b>
          </p>
        </div></div>
       
        </div>
         `).join("")}function p(o,t=1){const n=new URLSearchParams({key:"39036273-6668926e4f0bebacaced31faa",q:o,image_type:"photo",orientation:"horizontal",savesearch:"true",page:t,per_page:20});return fetch(`https://pixabay.com/api/?${n}`).then(e=>{if(!e.ok)throw new Error;return e.json()})}const i={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),searchBtn:document.querySelector(".search-submit "),loader:document.querySelector(".loader")};let l=0,u="";i.form.addEventListener("submit",h);function h(o){o.preventDefault(),u=o.target.elements.searchQuery.value,l=1,p(u,l).then(t=>{if(t.total===0){l=0,i.searchBtn.disabled=!0,c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}i.gallery.insertAdjacentHTML("beforeend",d(t.hits)),new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDeloy:250}).on("show.simplelightbox",function(a){a.preventDefault()})}).catch(()=>{c.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{i.form.reset(),i.searchBtn.disabled=!1}),i.gallery.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
