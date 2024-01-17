import{i as d,S as m}from"./assets/vendor-afa10da7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function y(a){return a.map(({downloads:o,likes:n,webformatURL:i,largeImageURL:e,tags:t,views:s,comments:f})=>`
        <div class="product-card main">
        <div class="main">
        <a href="${e}" >
        <img src=${i} alt="${t}" loading="lazy" />
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
         `).join("")}function p(a,o=1){const n=new URLSearchParams({key:"39036273-6668926e4f0bebacaced31faa",q:a,image_type:"photo",orientation:"horizontal",savesearch:"true",page:o,per_page:20});return fetch(`https://pixabay.com/api/?${n}`).then(e=>{if(!e.ok)throw new Error;return e.json()})}const r={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loadMore:document.querySelector(".show-load-more"),searchBtn:document.querySelector(".search-submit "),loader:document.querySelector(".loader")};let l="",c=0,u="";r.loadMore.hidden=!0;r.loader.style.display="none";r.form.addEventListener("submit",h);function h(a){a.preventDefault(),r.loadMore.hidden=!0,r.loader.style.display="block",u=a.currentTarget.searchQuery.value,c=1,p(u,c).then(o=>{if(o.total===0){c=0,r.searchBtn.disabled=!0,r.loader.style.display="none",d.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}r.loader.style.display="none",r.gallery.insertAdjacentHTML("beforeend",y(o.hits)),r.loadMore.hidden=!1,l=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDeloy:250}),l.on("show.simplelightbox",function(n){n.preventDefault()}),l.refresh=function(){a.preventDefault(),l.destroy()}}).catch(()=>{r.loadMore.hidden=!0,r.loader.style.display="none",d.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{r.form.reset(),r.searchBtn.disabled=!1}),r.gallery.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
