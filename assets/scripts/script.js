////////////////////////////////////////////DATA/////////////////////////////////////////////

//Constants//
const headerBox = document.querySelector(".header");
const headerBtns = document.querySelectorAll(".headerBtns")
const conts = document.querySelectorAll(".cont")
const typeEffect = document.querySelector(".typeEffect");
const caret = document.querySelector(".caret");
const work = document.getElementById("work");
const l = document.querySelector(".l");
const r = document.querySelector(".r");
const skillsCont = document.getElementById("skills-cont");

const words = ["eat()", "sleep()", "code()"];

//Language Icons//
const langIcons = {
  JavaScript: '<i class="bi bi-filetype-js"></i>',
  HTML: '<i class="bi bi-filetype-html"></i>',
  Java: '<i class="bi bi-filetype-java"></i>',
  "C++": '<img class="ico" src="/assets/images/cpp.png">',
  null: "",
};

//Project Type Icons//
const projTypIcon = {
  website: '<i class="bi bi-globe ico"></i>',
  android: '<i class="bi bi-android2"></i>',
  windows: '<i class="bi bi-microsoft"></i>',
  console: '<i class="bi bi-terminal-fill"></i>',
  "ui-design": '<i class="bi bi-vector-pen"></i>',
  undefined: "",
};

//Udemy Certificates Images already provided from the website//
const udemyCertificates = {
  'Complete Python Programming for Beginners - 2022': "UC-fac812cb-35c4-4b11-b4b1-bb28dfec7b9a",
  'CSS, Bootstrap, JavaScript And PHP Stack Complete Course': 'UC-6e84da9c-6b75-4f42-a3e9-3694bfa281d8',
  'Linux Command Line Terminal Basic for Beginners': 'UC-2fac4520-dd43-44b4-a9b6-5f9d17a347aa',
  'Introduction to Quantum Computing': 'UC-2bce6652-0c04-4e27-b68f-d3f2b35036b4'
}

//Other certificates - Image not provided//
const certificates = {
  ProGrad: "/assets/images/ProGrad.png",
  CSS: "https://www.hackerrank.com/certificates/51e3e774a151",
  "Problem Solving": "https://www.hackerrank.com/certificates/7e26e25936c3",
  Python: "https://www.hackerrank.com/certificates/2891c0e71f9c",
  JavaScript: "https://www.hackerrank.com/certificates/dbc0de668048",
};


//Skills
const skillsArr = [
  "JavaScript",
  "HTML",
  "CSS",
  "Illustrations",
  "C",
  "C++",
  "Java",
  "Python",
  "Assembly",
  "Excel",
  "VBA",
  "C#",
  "3D modelling",
  "UI UX",
  "Firebase",
  "MongoDB",
  "NoSQL",
  "React",
  "Express",
  "NodeJS",
]





/////////////////////////////////////////////////Code////////////////////////////////////////////////////////////////

headerBtns[0].style.borderBottom = "3px solid white";
headerBtns[0].style.color = "white";
window.onscroll = () => {
  var c = window.scrollY / (window.innerHeight * 5) * 150;
  let w = Math.floor(window.scrollY / window.innerHeight + 0.5)
  for (var i = 0; i < headerBtns.length; i++){
    if (i === w) {
      headerBtns[w].style.borderBottom = "3px solid white";
      headerBtns[w].style.color = 'white';
    }
    else {
      headerBtns[i].style.borderBottom = "3px solid transparent";
      headerBtns[i].style.color = '#ffffff99';
    }
  }
  headerBox.style.backgroundColor = `rgba(${97+c}, ${22+c}, ${189-c})`;

}
  

headerBtns.forEach((element, key) => {
  element.onclick = () => {
    conts[key].scrollIntoView({behavior: "smooth"})
  }
});



//Typing Effect Animation//
function typeEffectAnim() {
  let i = 0;
  let backwords = 0;
  let w = 0;
  let limit = 0;
  let ci = setInterval(async () => {
    if (i <= 0 && backwords === 1) {
      if (w >= words.length - 1) {
        w = -1;
      }
      caret.style.animation = "none";
      w++;
      backwords = 0;
    }
    let cWord = words[w];
    if (i >= cWord.length) {
      if (limit < cWord.length) {
        caret.style.animation = "blink1 1s normal 500ms infinite forwards";
        limit++;
        backwords = 2;
      } else {
        caret.style.animation = "none";
        limit = 0;
        backwords = 1;
      }
    }
    if (backwords === 0) {
      typeEffect.innerHTML += cWord.charAt(i);
      i++;
    } else if (backwords === 1) {
      typeEffect.innerHTML = typeEffect.innerHTML.substring(
        0,
        typeEffect.innerHTML.length - 1
      );
      i--;
    }
  }, 110);

}

typeEffectAnim();


//Fetch Repositories from github//
fetch("https://api.github.com/users/actuallyroy/starred")
  .then(response => response.json())
  .then(data => {
    //Show repositories on 'My Works' page
    data.forEach(item => {
      //Filter only My project//
      if (item.owner.login === 'actuallyroy') {
        //Determine Ptoject Type//
        let projT = undefined;
        if (item.topics.includes("website")) projT = "website";
        if (item.topics.includes("android")) projT = "android";
        if (item.topics.includes("windows")) projT = "windows";
        if (item.topics.includes("console")) projT = "console";
        if (item.topics.includes("ui-design")) projT = "ui-design";

        //Description//
        let des = "";
        if (item.description) des = item.description;
        
        
        item.topics.length = 5;               //Truncate topics array length to 5

        //Set cards
        document.getElementById("cardsCont").innerHTML += `<div class="card">
          <div class="card-front">
            <div class="card-title">${item.name}</div>
            <div class="card-tags-cont">
                ${item.topics
                  .map((topic) => {
                    return `<span class="card-tags">${topic}</span>`;
                  })
                  .join("")}
            </div>
            <div class="card-ico-cont">
              <a href="${
                item.html_url
              }" target="_blank"><i class="bi bi-github ico"></i></a>
              <a href="https://github.com/actuallyroy/${
                item.name
              }/fork" target="_blank">
                <svg class="ico" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 8.125C12.5 8.62228 12.3025 9.0992 11.9508 9.45083C11.5992 9.80246 11.1223 10 10.625 10C10.1277 10 9.65082 9.80246 9.29919 9.45083C8.94756 9.0992 8.75001 8.62228 8.75001 8.125C8.75001 7.62772 8.94756 7.15081 9.29919 6.79918C9.65082 6.44755 10.1277 6.25 10.625 6.25C11.1223 6.25 11.5992 6.44755 11.9508 6.79918C12.3025 7.15081 12.5 7.62772 12.5 8.125V8.125ZM12.5 13.43C13.751 12.9877 14.8054 12.1174 15.4768 10.9729C16.1482 9.82833 16.3934 8.48331 16.169 7.1755C15.9446 5.8677 15.2651 4.68132 14.2506 3.82606C13.2361 2.97079 11.9519 2.5017 10.625 2.5017C9.2981 2.5017 8.0139 2.97079 6.9994 3.82606C5.9849 4.68132 5.3054 5.8677 5.08102 7.1755C4.85664 8.48331 5.10181 9.82833 5.7732 10.9729C6.4446 12.1174 7.49899 12.9877 8.75001 13.43V15.625C8.75001 17.1168 9.34264 18.5476 10.3975 19.6025C11.4524 20.6574 12.8832 21.25 14.375 21.25H18.125V26.57C16.8733 27.0123 15.8182 27.883 15.1464 29.028C14.4745 30.173 14.2291 31.5187 14.4535 32.8271C14.6779 34.1356 15.3576 35.3226 16.3726 36.1784C17.3876 37.0341 18.6724 37.5035 20 37.5035C21.3276 37.5035 22.6124 37.0341 23.6274 36.1784C24.6424 35.3226 25.3222 34.1356 25.5465 32.8271C25.7709 31.5187 25.5255 30.173 24.8536 29.028C24.1818 27.883 23.1267 27.0123 21.875 26.57V21.25H25.625C27.1169 21.25 28.5476 20.6574 29.6025 19.6025C30.6574 18.5476 31.25 17.1168 31.25 15.625V13.43C32.501 12.9877 33.5554 12.1174 34.2268 10.9729C34.8982 9.82833 35.1434 8.48331 34.919 7.1755C34.6946 5.8677 34.0151 4.68132 33.0006 3.82606C31.9861 2.97079 30.7019 2.5017 29.375 2.5017C28.0481 2.5017 26.7639 2.97079 25.7494 3.82606C24.7349 4.68132 24.0554 5.8677 23.831 7.1755C23.6066 8.48331 23.8518 9.82833 24.5232 10.9729C25.1946 12.1174 26.249 12.9877 27.5 13.43V15.625C27.5 16.1223 27.3025 16.5992 26.9508 16.9508C26.5992 17.3025 26.1223 17.5 25.625 17.5H14.375C13.8777 17.5 13.4008 17.3025 13.0492 16.9508C12.6976 16.5992 12.5 16.1223 12.5 15.625V13.43ZM21.875 31.875C21.875 32.3723 21.6775 32.8492 21.3258 33.2008C20.9742 33.5525 20.4973 33.75 20 33.75C19.5027 33.75 19.0258 33.5525 18.6742 33.2008C18.3226 32.8492 18.125 32.3723 18.125 31.875C18.125 31.3777 18.3226 30.9008 18.6742 30.5492C19.0258 30.1975 19.5027 30 20 30C20.4973 30 20.9742 30.1975 21.3258 30.5492C21.6775 30.9008 21.875 31.3777 21.875 31.875ZM29.375 10C29.8723 10 30.3492 9.80246 30.7008 9.45083C31.0525 9.0992 31.25 8.62228 31.25 8.125C31.25 7.62772 31.0525 7.15081 30.7008 6.79918C30.3492 6.44755 29.8723 6.25 29.375 6.25C28.8777 6.25 28.4008 6.44755 28.0492 6.79918C27.6976 7.15081 27.5 7.62772 27.5 8.125C27.5 8.62228 27.6976 9.0992 28.0492 9.45083C28.4008 9.80246 28.8777 10 29.375 10Z" fill="black"/>
                </svg>
              </a>
              <div></div>
              <a href="${item.homepage}" target="_blank">
                ${projTypIcon[projT]}
              </a>
              ${langIcons[item.language]}
            </div>
          </div>
          <div class="card-back">
            <div>Description</div>
            <p class="card-description"><em>${des}</em></p>
            <div class="card-back in"></div>
          </div>
        </div>`;
      }
    })
    
    //Set flip animation on cards//
    const cards = document.querySelectorAll(".card")
    cards.forEach(card => {
      card.addEventListener("click", () => {
        if (card.style.animation == "800ms ease 0s 1 normal forwards running flipLeft") {
          card.style.animation = "800ms flipRight forwards";
        } else {
          card.style.animation = "800ms flipLeft forwards";
        }
      })
      card.firstElementChild.nextElementSibling.addEventListener("mouseout", () => {
        card.style.animation = "800ms flipRight forwards";
      })
    })
})

//Control visibility of left right button in works section//
work.onscroll = () => {
  if (work.scrollLeft > 100) {
    l.style.display = 'block'
  } else {
    l.style.display = "none";
  }
  if (work.scrollLeft > work.scrollWidth - window.innerWidth - 100) {
    r.style.display = 'none'
  } else {
    r.style.display = "block";
  }
}
//Right button
r.onclick = () => {
  work.scrollLeft += 500
}
//Left Button
l.onclick = () => {
  work.scrollLeft -= 500;
};


//Set opacity of left, right button on mouse move. Based on the distance//
window.onmousemove = (e) => {
  let rectR = r.getBoundingClientRect();
  let rectL = l.getBoundingClientRect();
  let y = rectR.top + 30;
  let x = rectR.left + 30;
  let x1 = rectL.left + 30;
  let d = Math.sqrt((x - e.x) ** 2 + (y - e.y) ** 2)
  let d1 = Math.sqrt((x1 - e.x) ** 2 + (y - e.y) ** 2);
  r.style.opacity = 0.8 - d.toPrecision(1) / 2000
  l.style.opacity = 0.8 - d1.toPrecision(1) / 2000
}


//Show other certificates in Education section//
Object.keys(certificates).forEach(certsTitle => {
   document.getElementById("cert-cont").innerHTML += `<div class="certs">
          <div><span>${truncateString(certsTitle, 35)}</span><br>
            <a href="${certificates[certsTitle]}" target="_blank">
              <img class="cert-img" alt="Udemy Certificate" src = "/assets/images/${certsTitle}.png"/>
            </a>
          </div>
        </div>`;
})


//Show Udemy Certificates in Education Section
Object.keys(udemyCertificates).forEach(certsTitle => {
  document.getElementById("cert-cont").innerHTML += `<div class="certs">
          <div><span>${truncateString(certsTitle, 35)}</span><br>
            <a href="https://ude.my/${udemyCertificates[certsTitle]}/" target="_blank">
              <img class="cert-img" alt="Udemy Certificate" src = "https://udemy-certificate.s3.amazonaws.com/image/${udemyCertificates[certsTitle]}.jpg"/>
            </a>
          </div>
        </div>`;
})




skillsArr.forEach(skill => {
  skillsCont.innerHTML += `<div class="skills-card">
            <img class="skills-card-img" src="./assets/images/skills/${skill.replace("#", "%23")}.png">
            <div class="card-pad">${skill}</div>
          </div>`;
})





//Function to truncate string
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}




//Animate Big Image only after it loads completely//
const bigImg = document.getElementById("bigImg")
bigImg.src = "./assets/images/img.png";
bigImg.onload = () => {
  bigImg.style.animation = "fadeIn1 1s 1s forwards";
  
}
