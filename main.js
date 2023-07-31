// Variable
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const cookie = document.querySelector(".cookie");
const btnOtherCookie = document.querySelector(".btnOtherCookie");
const openedCookie = document.querySelector(".opened-cookie");
const luckyCard = document.querySelector(".lucky-card");
const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Uma bela flor é incompleta sem as suas folhas.",
];

// Event
cookie.addEventListener("click", handleClickCookie);
btnOtherCookie.addEventListener("click", handleClickReset);

// function
function handleClickCookie(e) {
  const randomNumberPhrase = randomPhrases(phrases.length);
  luckyCard.querySelector("p").innerText = phrases[randomNumberPhrase];
  toogleScreen();
}

function handleClickReset() {
  toogleScreen();
}

function randomPhrases(max) {
  return Math.floor(Math.random() * max);
}

function toogleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
