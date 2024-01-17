import{i as l}from"./assets/vendor-32231325.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function m(o){return o.map(({downloads:t,likes:n,webformatURL:i,largeImageURL:e,tags:r,views:s,comments:f})=>`
        <div class="product-card main">
        <div class="main">
        <a href="${e}" >
        <img src=${i} alt="${r}" loading="lazy" />
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
         `).join("")}function d(o,t=1){const n=new URLSearchParams({key:"39036273-6668926e4f0bebacaced31faa",q:o,image_type:"photo",orientation:"horizontal",savesearch:"true",page:t,per_page:20});return fetch(`https://pixabay.com/api/?${n}`).then(e=>{if(!e.ok)throw new Error;return e.json()})}const a={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),searchBtn:document.querySelector(".search-submit "),loader:document.querySelector(".loader")};let c=0,u="";a.form.addEventListener("submit",p);function p(o){o.preventDefault(),u=o.target.elements.searchQuery.value,c=1,d(u,c).then(t=>{if(t.total===0){c=0,a.searchBtn.disabled=!0,l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}a.gallery.insertAdjacentHTML("beforeend",m(t.hits))}).catch(()=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{a.form.reset(),a.searchBtn.disabled=!1}),a.gallery.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
