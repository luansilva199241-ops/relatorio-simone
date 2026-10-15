// Contagem animada dos indicadores do resumo
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
  var fmt=new Intl.NumberFormat('pt-BR');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting)return;io.unobserve(e.target);
    var el=e.target,end=+el.dataset.count,pre=el.dataset.prefix||'',t0=performance.now();
    (function step(t){var k=Math.min((t-t0)/1100,1),v=Math.round(end*(1-Math.pow(1-k,3)));
      el.textContent=pre+fmt.format(v);if(k<1)requestAnimationFrame(step);})(t0);
  });},{threshold:.4});
  document.querySelectorAll('[data-count]').forEach(function(n){io.observe(n)});
})();
