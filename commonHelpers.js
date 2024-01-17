import{i as c,S as m}from"./assets/vendor-afa10da7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function p(a){return a.map(({downloads:o,likes:n,webformatURL:i,largeImageURL:e,tags:r,views:s,comments:f})=>`
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
            <b>Downloads: ${o}</b>
          </p>
        </div></div>
       
        </div>
         `).join("")}function y(a,o=1){const n=new URLSearchParams({key:"39036273-6668926e4f0bebacaced31faa",q:a,image_type:"photo",orientation:"horizontal",savesearch:"true",page:o,per_page:20});return fetch(`https://pixabay.com/api/?${n}`).then(e=>{if(!e.ok)throw new Error;return e.json()})}const t={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),searchBtn:document.querySelector(".search-submit "),loader:document.querySelector(".loader")};let u="",l=0,d="";t.loader.style.display="none";t.form.addEventListener("submit",h);function h(a){a.preventDefault(),t.loader.style.display="block",d=a.currentTarget.searchQuery.value,l=1,y(d,l).then(o=>{if(o.total===0){l=0,t.searchBtn.disabled=!0,t.loader.style.display="none",c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}t.loader.style.display="none",t.gallery.insertAdjacentHTML("beforeend",p(o.hits)),u=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDeloy:250}),u.on("show.simplelightbox",function(n){n.preventDefault()})}).catch(()=>{t.loader.style.display="none",c.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{t.form.reset(),t.searchBtn.disabled=!1}),t.gallery.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
