// language: JavaScript, file: script.js
(function () {
  const hearts = document.getElementById('hearts');
  const btn = document.getElementById('btnCoracoes');
  const fotosContainer = document.getElementById('fotos');

  const nomesFotos = [
    'WhatsApp Image 2026-10-28 at 19.26.16.jpeg',
    'WhatsApp Image 2026-10-29 at 20.36.32.jpeg',
    'WhatsApp Image 2026-10-30 at 14.25.08.jpeg',
    'WhatsApp Image 2026-10-31 at 03.12.53 (2).jpeg',
    'WhatsApp Image 2026-11-03 at 23.41.22.jpeg',
    'WhatsApp Image 2026-11-07 at 10.14.40.jpeg',
    'WhatsApp Image 2026-11-08 at 00.47.40 (2).jpeg',
    'WhatsApp Image 2026-11-08 at 00.47.40.jpeg',
    'WhatsApp Image 2026-11-08 at 00.47.41.jpeg'
  ];

  const mensagens = [
    'Esta foto guarda um pedaço de você que levo comigo em cada quilômetro entre a Bahia e São Paulo.',
    'Olhar para você aqui do outro lado do Brasil só aumenta a vontade de apertar você contra mim.',
    'Você em São Paulo, eu na Bahia. A distância é chata, mas você vale cada segundo de espera.',
    'Turbulências passam, você fica. Esta foto é prova de que estamos firmes.',
    'Cada sorriso seu nesta tela é um beijo meu atravessando o país para chegar em você.',
    'No começo de tudo, já te escolho todos os dias, mesmo de longe.',
    'Guardo este momento como quem guarda um tesouro. Você é minha, meu amor.',
    'Zona norte de São Paulo, Conceição do Jacuípe na Bahia. Dois mundos, um só coração.',
    'Eu amo ti. Cada dia mais, cada foto mais, cada beijo à distância mais.'
  ];

  function urlFoto(nome) {
    return 'assets/fotos/' + encodeURIComponent(nome);
  }

  const fundos = document.querySelectorAll('.foto-fundo');
  fundos.forEach((el, i) => {
    if (nomesFotos[i]) {
      el.style.backgroundImage = "url('" + urlFoto(nomesFotos[i]) + "')";
    }
  });

  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalMsg = document.getElementById('modalMsg');
  const btnFechar = document.getElementById('btnFechar');

  function abrirModal(i) {
    modalImg.src = urlFoto(nomesFotos[i]);
    modalImg.alt = 'sua foto ' + (i + 1);
    modalMsg.textContent = mensagens[i] || mensagens[mensagens.length - 1];
    modal.classList.add('aberta');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function fecharModal() {
    modal.classList.remove('aberta');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  nomesFotos.forEach((nome, i) => {
    const bloco = document.createElement('div');
    bloco.className = 'foto';
    bloco.setAttribute('role', 'button');
    bloco.setAttribute('tabindex', '0');
    bloco.setAttribute('aria-label', 'Abrir foto ' + (i + 1));

    const img = document.createElement('img');
    img.src = urlFoto(nome);
    img.alt = 'nossa foto ' + (i + 1);
    img.onerror = () => {
      img.style.display = 'none';
      bloco.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#b36a8f;font-size:12px;">foto na pasta assets/fotos/</div>';
    };

    bloco.appendChild(img);

    const abrir = () => abrirModal(i);
    bloco.addEventListener('click', abrir);
    bloco.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') abrir();
    });

    fotosContainer.appendChild(bloco);
  });

  btnFechar.addEventListener('click', fecharModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) fecharModal();
  });

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

  setInterval(lancarCoracao, 700);
  for (let i = 0; i < 10; i++) setTimeout(lancarCoracao, i * 300);

  btn.addEventListener('click', () => {
    for (let i = 0; i < 24; i++) setTimeout(lancarCoracao, i * 80);
  });
})();
