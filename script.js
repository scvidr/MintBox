const symbols = ["🍒","🍋","🔔","💎","7️⃣","🍀","⭐"];
const reel = document.getElementById('reel');
const spinBtn = document.getElementById('spinBtn');
const resultBanner = document.getElementById('resultBanner');

let isSpinning = false;
const viewport = document.getElementById('viewport');
const symbolWidth = 90; // ширина + margin
const repeatCount = 50;
let sequence = [];

// Создаем исходную последовательность случайных символов
function generateSequence(){
  sequence = [];
  for(let i=0;i<repeatCount;i++){
    sequence.push(symbols[Math.floor(Math.random()*symbols.length)]);
  }
}

function renderReel(){
  reel.innerHTML = '';
  sequence.forEach(s=>{
    const el = document.createElement('div');
    el.className = 'symbol';
    el.textContent = s;
    reel.appendChild(el);
  });
  reel.style.transform = 'translateX(0px)';
}

generateSequence();
renderReel();

function spin(){
  if(isSpinning) return;
  isSpinning = true;
  spinBtn.disabled = true;
  resultBanner.style.display = 'none';

  // Определяем выигрыш
  const jackpotChance = 0.17;
  const isJackpot = Math.random() < jackpotChance;

  // Выбираем индекс символа, который окажется в центре
  let targetIndex;
  if(isJackpot){
    targetIndex = Math.floor(sequence.length/2); // джекпот в центре
  } else {
    targetIndex = Math.floor(Math.random() * (sequence.length - 1));
  }

  // Начальная и конечная позиции
  const startX = 0;
  const extraDistance = 2000; // добавляем дополнительное вращение для анимации
  const finalX = -targetIndex * symbolWidth - extraDistance;

  const duration = 3000;
  const startTime = performance.now();

  function animate(currentTime){
    let elapsed = currentTime - startTime;
    let progress = Math.min(elapsed / duration, 1);
    let ease = 1 - Math.pow(1 - progress, 3); // плавное замедление
    reel.style.transform = `translateX(${startX + finalX * ease}px)`;

    if(progress < 1){
      requestAnimationFrame(animate);
    } else {
      // После окончания анимации: вычисляем ближайший символ к центру
      const transformValue = parseFloat(reel.style.transform.replace('translateX(','').replace('px)',''));
      const reelLeft = -transformValue;
      const viewportCenter = viewport.offsetWidth / 2;
      const nearestIndex = Math.round((reelLeft + viewportCenter - symbolWidth/2) / symbolWidth);

      // Финальное смещение, чтобы выбранный символ оказался по центру
      const finalPos = -(nearestIndex * symbolWidth - viewportCenter + symbolWidth/2);
      reel.style.transform = `translateX(${finalPos}px)`;

      // Показ результата
      showResult(isJackpot);

      // Генерируем новую последовательность для следующего спина
      generateSequence();
      renderReel();

      isSpinning = false;
      spinBtn.disabled = false;
    }
  }

  requestAnimationFrame(animate);
}

function showResult(jackpot){
  resultBanner.style.display = 'block';
  resultBanner.textContent = jackpot ? '🎉 ДЖЕКПОТ! 🎉' : 'Кейс открыт';
}

spinBtn.addEventListener('click', spin);
