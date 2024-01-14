import{i as c,S as h}from"./assets/vendor-afa10da7.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(o){return o.map(({downloads:a,likes:i,webformatURL:n,largeImageURL:e,tags:t,views:l,comments:f})=>`
        <div class="product-card main">
        <div class="main">
        <a href="${e}" >
        <img src=${n} alt="${t}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes: ${i}</b>
          </p>
          <p class="info-item">
            <b>Views: ${l}</b>
          </p>
          <p class="info-item">
            <b>Comments: ${f}</b>
          </p>
          <p class="info-item">
            <b>Downloads: ${a}</b>
          </p>
        </div></div>
       
        </div>
         `).join("")}function m(o,a=1){const i=new URLSearchParams({key:"39036273-6668926e4f0bebacaced31faa",q:o,image_type:"photo",orientation:"horizontal",savesearch:"true",page:a,per_page:10});return fetch(`https://pixabay.com/api/?${i}`).then(e=>{if(!e.ok)throw new Error;return e.json()})}const r={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loadMore:document.querySelector(".show-load-more"),searchBtn:document.querySelector(".search-submit "),loader:document.querySelector(".loader")};let s=0,d="";r.loadMore.hidden=!0;r.loader.style.display="none";r.form.addEventListener("submit",y);function y(o){o.preventDefault(),r.loadMore.hidden=!0,r.loader.style.display="block",d=o.target.elements.searchQuery.value,s=1,m(d,s).then(a=>{if(a.total===0){s=0,r.searchBtn.disabled=!0,r.loader.style.display="none",c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}r.loader.style.display="none",r.gallery.insertAdjacentHTML("beforeend",u(a.hits)),r.loadMore.hidden=!1,new h(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDeloy:250}).on("show.simplelightbox",function(n){n.preventDefault()})}).catch(()=>{r.loadMore.hidden=!0,r.loader.style.display="none",c.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{r.form.reset(),r.searchBtn.disabled=!1}),r.gallery.innerHTML=""}r.loadMore.addEventListener("click",p);function p(){s+=1,m(d,s).then(o=>{o.totalHits<s&&(r.loadMore.hidden=!0,c.warning({message:"Sorry, the images have run out"})),r.gallery.insertAdjacentHTML("beforeend",u(o.hits))}).catch(()=>{r.loadMore.hidden=!0,c.warning({message:"Sorry, the images have run out"})}).finally(()=>{})}
//# sourceMappingURL=commonHelpers.js.map
