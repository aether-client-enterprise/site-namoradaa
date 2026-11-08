// language: JavaScript, file: script.js
(function () {
  const hearts = document.getElementById('hearts');
  const btn = document.getElementById('btnCoracoes');
  const chuva = document.getElementById('chuva');
  const impacto = document.getElementById('impacto');
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
    'Esta foi a primeira vez que você me olhou assim — e já carregava minha vida inteira nos olhos.',
    'Você riu e esqueceu que está a milhares de quilômetros. Eu guardo esse riso como se fosse o meu lugar.',
    'Nesta foto você está quase me tocando. Só falta o Brasil inteiro sumir entre a gente.',
    'Eu te amo desde antes de saber que ia te amar. Esta foto prova que o começo já era nosso.',
    'Você dormiu e eu fiquei aqui, do outro lado do país, vendo você descansar como se estivesse ao meu lado.',
    'Turbulências passaram, lágrimas secaram, e você está aqui — ainda comigo, ainda minha.',
    'Sua mão quase alcança a minha. A distância rouba o toque, mas não rouba o jeito como você me olha.',
    'Conceição do Jacuípe acende, São Paulo acende, e você está no meio das luzes pensando em mim.',
    'Se eu pudesse escolher uma só coisa para levar daqui para o resto da vida, seria este seu olhar nesta foto.'
  ];

  const beijosECoracoes = ['❤', '💕', '💖', '💘', '💋', '😘', '💏', '💞', '💟'];

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

  let chuvaAtiva = false;

  function soltarPeca() {
    if (!chuvaAtiva) return;
    const el = document.createElement('span');
    el.className = 'pedaço';
    el.textContent = beijosECoracoes[Math.floor(Math.random() * beijosECoracoes.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (2 + Math.random() * 3) + 's';
    el.style.fontSize = (16 + Math.random() * 20) + 'px';
    el.style.opacity = Math.random() * 0.6 + 0.4;
    chuva.appendChild(el);
    setTimeout(() => el.remove(), 5500);
  }

  function mostrarUrsinhoCentro() {
    impacto.classList.add('visivel');
    impacto.setAttribute('aria-hidden', 'false');
  }

  function esconderUrsinhoCentro() {
    impacto.classList.remove('visivel');
    impacto.setAttribute('aria-hidden', 'true');
  }

  btn.addEventListener('click', () => {
    chuvaAtiva = true;
    chuva.innerHTML = '';
    mostrarUrsinhoCentro();

    const chuvaInterval = setInterval(soltarPeca, 120);

    setTimeout(() => {
      chuvaAtiva = false;
      clearInterval(chuvaInterval);
      esconderUrsinhoCentro();
    }, 6000);
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
})();
