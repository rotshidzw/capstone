const open = document.querySelector('.header-sect');
const speakerList = document.querySelector('.speakers-lineout');
const btn = document.getElementById('button');

const speakers = [
  6,
  {
    name: 'Zinedine Zidane',
    image: 'images/speaker.png',
    summary: 'Zidane’s international career',
    summary2: ' Zidane, who went down in history as one of the winningest players the game has ever seen',
  },
  {
    name: 'Neymar Jr',
    image: 'images/speaker1.png',
    summary: 'Neymar is already one of the greatest players ',
    summary2: ' Neymar’s potential is that he already owns the richest deal in professional soccer history, inking a 222-million-pound contract when he transferred from Barcelona to Paris Saint-Germain in 2017',
  },
  {
    name: 'Ronaldo Nazario',
    image: 'images/speaker2.png',
    summary: 'the greatest Ronaldo to play the game ',
    summary2: 'Ronaldo was 21 years old, both Barcelona and Inter Milan had paid world transfer record prices to land his talents',
  },
  {
    name: 'Lionel Messi ',
    image: 'images/speaker4.png',
    summary: 'Messi  the greatest soccer player ever ',
    summary2: ' Messi had already tied the record for the most Ballon d’Or awards, led Barcelona to nine La Liga titles and four UEFA Champions League crowns, and was La Liga’s all-time leading scorer',
  },
  {
    name: ' Pelé',
    image: 'images/speaker5.png',
    summary: 'Pelé is the only player to ever win three World Cup titles, and his 0.85 goals-per-game average ',
    summary2: 'No player in the history of international soccer may ever match the success enjoyed by the great Edson Arantes do Nascimento',
  },
  {
    name: 'Cristiano Ronaldo',
    image: 'images/speaker6.png',
    summary: 'Ronaldo actually ranks among the all-time greats ',
    summary2: 'Ronaldo to be the world’s most famous athlete in each of the past three years, and he topped the Forbes list of highest-paid athletes in 2016 and 2017',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  open.addEventListener('click', () => {
    open.classList.toggle('oppenned');
  });

  for (let i = 1; i <= speakers[0]; i += 1) {
    const speakerCards = `<div id="speaker-${i}" class="only-desktop">
  <img src="${speakers[i].image}" alt="Image of speaker">
  <div>
  <h3>${speakers[i].name}</h3>
  <p class="speaker-summary">${speakers[i].summary}</p>
  <hr>
  <p>${speakers[i].summary2}</p>
  </div>
  </div>`;

    speakerList.innerHTML += speakerCards;
  }

  const eachSpeaker = document.querySelectorAll('#speaker-3, #speaker-4, #speaker-5, #speaker-6');

  if (window.innerWidth < 768) {
    eachSpeaker.forEach((el) => {
      el.style.display = 'none';
    });

    btn.addEventListener('click', () => {
      eachSpeaker.forEach((el) => {
        el.style.display = 'flex';
      });

      btn.style.display = 'none';
    });
  }
});
