const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
  ];

  const levs={
    "Easy":5,
    "Normal":3,
    "Hard":2
  };
  let lev=document.querySelector(".levs")
  lev.onclick=function () {
    let defultlevelname = '';
    defultlevelname=this.value
  let defultLevelseconds = levs[defultlevelname];
    secondsSpan.innerHTML = defultLevelseconds;
    timeLeftSpan.innerHTML = defultLevelseconds;
    scoreTotal.innerHTML=words.length;
  }

  let startButton = document.querySelector(".start");
  let lvlNameSpan = document.querySelector(".message .lvl");
  let secondsSpan = document.querySelector(".message .seconds");
  let theWord = document.querySelector(".the-word");
  let upcomingWords = document.querySelector(".upcoming-words");
  let input = document.querySelector(".input");
  let timeLeftSpan = document.querySelector(".time span");
  let scoreGot = document.querySelector(".score .got");
  let scoreTotal = document.querySelector(".score .total");
  let finishMessage = document.querySelector(".finish");

  // lvlNameSpan.innerHTML = defultlevelname;
 
  input.onpaste=function(){
    return false;
  }
  startButton.onclick = function(){
    this.remove();
    input.focus()

    getwords();


  }
  function getwords() {
    let randomword = words[Math.floor(Math.random()*words.length)]
    let wordindx = words.indexOf(randomword)
    words.splice(wordindx,1);
    theWord.innerHTML=randomword;
    upcomingWords.innerHTML='';
    for (let i = 0; i < words.length; i++) {
      let div = document.createElement("div");
      let taxt = document.createTextNode(words[i])
      div.appendChild(taxt)
      upcomingWords.appendChild(div)
    }
    startplay();
  }

  function startplay() {
    timeLeftSpan.innerHTML = defultLevelseconds;
    let start= setInterval(() => {
      timeLeftSpan.innerHTML--
      if (timeLeftSpan.innerHTML ==="0") {
        clearInterval(start);
        if (theWord.innerHTML.toLowerCase()=== input.value.toLowerCase()) {
          input.value='';
          scoreGot.innerHTML++
          if (words.length>0) {
            getwords();
          }else{
            let span = document.createElement("span");
          span.classList='good';
          let spantext = document.createTextNode("Gratonz")
          span.appendChild(spantext);
          finishMessage.appendChild(span)
          }
        }else{
          let span = document.createElement("span");
          span.classList='bad';
          let spantext = document.createTextNode("Game Over")
          span.appendChild(spantext);
          finishMessage.appendChild(span)
        }
      }
    }, 1000);
    
  }

  