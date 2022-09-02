const headerBox = document.querySelector(".header");


window.onscroll = () => {
    var c = window.scrollY/(window.innerHeight*5)*150;
    headerBox.style.backgroundColor = `rgba(${97+c}, ${22+c}, ${189-c})`;

}
  

let headerBtns = document.querySelectorAll(".headerBtns")
let conts = document.querySelectorAll(".cont")


headerBtns.forEach((element, key) => {
  element.onclick = () => {
    conts[key].scrollIntoView({behavior: "smooth"})
  }
});

let typeEffect = document.querySelector(".typeEffect")
let caret = document.querySelector(".caret")
typeEffect.focus()
let words = [
  'Websites.',
  'Android apps.',
  '3D models.',
  'React',
  'Vanilla JS',
  'Node.js',
  'HTML',
  'CSS',
  'Java',
  'Python',
  'Firebase',
  'MongoDB',
  'Express'
]
let i = 0
let backwords = 0;
let w = 0;
let limit = 0
let ci = setInterval(async () => {
  if (i <= 0 && backwords === 1) {
    if (w >= words.length-1) {
      w = -1
    }
    caret.style.animation = "none";
    w++
    backwords = 0
  }
  let cWord = words[w]
  console.log(i, cWord.length, backwords)
  if (i >= cWord.length) {
    if (limit < 15) {
      caret.style.animation = "blink1 1s normal 500ms infinite forwards";
      limit++
      backwords = 2
    } else {
      caret.style.animation = "none";
      limit = 0
      backwords = 1
    }
  }
  if (backwords === 0) {
    typeEffect.innerHTML += cWord.charAt(i)
    i++
  } else if(backwords === 1) {
    typeEffect.innerHTML = typeEffect.innerHTML.substring(0, typeEffect.innerHTML.length -1)
    i--
  }

}, 110)

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}