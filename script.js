window.addEventListener('load', () => {
    // Sayfa yüklendiğinde figürleri göster
    const gelin = document.getElementById('gelin-konteyner');
    const damat = document.getElementById('damat-konteyner');

    setTimeout(() => {
        gelin.style.opacity = '1';
        gelin.style.transform = 'translate(0, -50%)'; // Sol pozisyonuna gel, dikey ortalamayı koru
    }, 500); // Yarım saniye sonra gelin gelsin

    setTimeout(() => {
        damat.style.opacity = '1';
        damat.style.transform = 'translate(0, -50%)'; // Sağ pozisyonuna gel, dikey ortalamayı koru
    }, 1000); // Bir saniye sonra damat gelsin
});
