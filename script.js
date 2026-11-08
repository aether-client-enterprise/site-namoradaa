// language: JavaScript, file: script.js
(function () {
  const hearts = document.getElementById('hearts');
  const btn = document.getElementById('btnCoracoes');
  const fotosContainer = document.getElementById('fotos');

  const nomesFotos = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg', 'foto6.jpg'];

  function lancarCoracao() {
    const el = document.createElement('span');
    el.className = 'coracao';
    el.textContent = Math.random() > 0.5 ? '❤' : '♥';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.bottom = '-60px';
    el.style.animationDuration = (3 + Math.random() * 4) + 's';
    el.style.fontSize = (14 + Math.random() * 18) + 'px';
    el.style.animationDelay = (Math.random() * 0.5) + 's';
    hearts.appendChild(el);
    setTimeout(() => el.remove(), 8000);
  }

  // Corações flutuando sozinhos
  setInterval(lancarCoracao, 700);
  for (let i = 0; i < 10; i++) setTimeout(lancarCoracao, i * 300);

  // Botão: enxurrada de corações
  btn.addEventListener('click', () => {
    for (let i = 0; i < 24; i++) setTimeout(lancarCoracao, i * 80);
  });

  // Galeria com as fotos dela
  nomesFotos.forEach((nome, i) => {
    const bloco = document.createElement('div');
    bloco.className = 'foto';

    const img = document.createElement('img');
    img.src = `assets/fotos/${nome}`;
    img.alt = `nossa foto ${i + 1}`;
    img.onerror = () => {
      img.style.display = 'none';
      bloco.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#b36a8f;font-size:12px;">coloque ${nome} em assets/fotos/</div>`;
    };

    bloco.appendChild(img);
    fotosContainer.appendChild(bloco);
  });
})();
