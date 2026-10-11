// Vídeo: carrega o player do YouTube só ao clicar (página abre mais rápido)
document.querySelectorAll('.video[data-yt]').forEach(function (box) {
  box.querySelector('.video-play').addEventListener('click', function () {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + box.dataset.yt + '?autoplay=1&playsinline=1&rel=0';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    iframe.title = 'Vídeo do curso Ensaios Recorrentes';
    box.innerHTML = '';
    box.appendChild(iframe);
  });
});

// Checkout: repassa UTMs / fbclid do anúncio para a Hotmart e dispara o evento do Pixel
var params = new URLSearchParams(location.search);
document.querySelectorAll('.js-checkout').forEach(function (a) {
  var url = new URL(a.href);
  params.forEach(function (v, k) { if (!url.searchParams.has(k)) url.searchParams.set(k, v); });
  a.href = url.toString();
  a.addEventListener('click', function () {
    if (window.fbq) fbq('track', 'InitiateCheckout');
  });
});
