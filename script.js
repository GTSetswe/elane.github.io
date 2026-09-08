function renderProducts(filter="All"){
  const box=document.getElementById("products");
  const list=PRODUCTS.filter(p=>filter==="All"||p.category===filter);
  box.innerHTML=list.map((p,i)=>{
    const isPlaceholder=p.affiliateUrl.includes("PASTE_YOUR");
    const href=isPlaceholder?p.retailerUrl:p.affiliateUrl;
    return `<article class="card">
      <div class="visual v${i%6}"><span>${p.category.toUpperCase()}</span><strong>${p.brand}</strong></div>
      <div class="body"><div class="meta">${p.retailer}</div><h3>${p.name}</h3><p>${p.description}</p>
      <div class="bottom"><strong>${p.price}</strong><a href="${href}" target="_blank" rel="noopener noreferrer" ${isPlaceholder?'title="Retailer link — add your affiliate URL in products.js"':''}>${isPlaceholder?'View retailer':'Shop now'} →</a></div>
      </div></article>`;
  }).join("");
}
document.querySelectorAll(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active"); renderProducts(btn.dataset.filter);
  });
});
renderProducts();
