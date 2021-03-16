  const quizBox = document.querySelector('#questionBox');
  const ul = document.querySelector('#ul');
  let opt1 = document.querySelector('#opt1');
  let opt2 = document.querySelector('#opt2');
  let opt3 = document.querySelector('#opt3');
  let nextBtn = document.querySelector('#btnNext');
  let level = document.querySelector('.level');
  let playAgain = document.querySelector('#tryAgain');





  let trivia = {
      questions: [{
              q: "Who is the mayor of New Orleans",
              options: ["Willie Mount", "LaToya Cantrell", "Ollie Tyler", "Hazel Beard"],
              answer: 2
          },
          {
              q: "Which of the following is not one of New Orleans' Mardi Gras colors?",
              options: ["yellow", "blue", "purple", "green"],
              answer: 2
          },
          {
              q: "What does the French expression 'Mardi Gras' literally translate to in English?",
              options: ["Fat Tuesday", "Fat Thursday", "Sunday Easter", "Ash Wednesday"],
              answer: 1
          },
          {
              q: "What is Mardi Gras known as in the Christian calendar?",
              options: ["Ash Tuesday", "Happy Tuesday", "Lent", "Shrove Tuesday"],
              answer: 3
          },
          {
              q: "New Orleans and Mardi Gras are often associated with this type of music:",
              options: ["Jazz", "French folk songs", "rock", "opera"],
              answer: 1
          },
          {
              q: "When did Louisiana declare Mardi Gras a state holiday",
              options: ["1985", "1915", "1875", "1785"],
              answer: 3
          },
          {
              q: "Mardi Gras beads used to be made of what material?",
              options: ["aluminium", "glass", "plastic", "none of the top answers"],
              answer: 2
          },
          {
              q: "What time does New Orleans law require masks to be removed on Mardi Gras?",
              options: ["6pm", "10pm", "it doesn't require that", "1am"],
              answer: 1
          },
          {
              q: "New Orleans cancelled Mardi Gras parades in the 1870s due to the outbreak of what disease?",
              options: ["Yellow Fever", "the Spanish Flu", "the Black Death", "Flu Pandemic"],
              answer: 1
          },
          {
              q: "Where was the first known carnival celebration?",
              options: ["New Orleans, Louisiana", "Florance, Italy", "Nice, France", "Athens, Greece"],
              answer: 3
          }

      ],
      index: 0,
      load: function () {
          if (this.index <= this.questions.length - 1) {
              this.level++;
              this.levelCard();
              quizBox.innerHTML = this.questions[this.index].q;
              opt1.innerHTML = this.questions[this.index].options[0];
              opt2.innerHTML = this.questions[this.index].options[1];
              opt3.innerHTML = this.questions[this.index].options[2];
              opt4.innerHTML = this.questions[this.index].options[3];
              if (this.index == this.questions.length - 1) {
                  nextBtn.innerHTML = "Done!"
              }
          } else {
              //Show the end screen
              quizBox.innerHTML =
                  `Quiz Completed! <br>Thank you for playing!

              `;
              level.style.dispaly = "none";
              ul.style.display = "none";
              nextBtn.style.display = "none";
              playAgain.style.display = "block";
              document.querySelector('img[alt*="Flag"]').style.display = "block"
          }
      },
      next: function () {
          this.index++;
          this.load();
      },
      check: function (option) {
          let id = option.id.split('');
          if (id[id.length - 1] == this.questions[this.index].answer) {
              this.score++;

              option.className = "correct";
              this.scoreCard();
          } else {
              option.className = "wrong";
          }
      },
      preventClick: function () {
          for (let i = 0; i < ul.children.length; i++) {
              ul.children[i].style.pointerEvents = "none";
          }
      },
      allowClick: function () {
          for (let i = 0; i < ul.children.length; i++) {
              ul.children[i].style.pointerEvents = "auto";
              ul.children[i].className = ''
          }
      },
      level: 0,
      levelCard: function () {
          level.innerHTML = `LEVEL: ${this.level}/${this.questions.length}`
      },
      score: 0,
      scoreCard: function () {
          scoreCard.innerHTML = `${this.score += 99}`;
      }

  }

  window.load = trivia.load();

  function button(option) {
      trivia.check(option);
      trivia.preventClick();
  }

  function next() {
      trivia.next();
      trivia.allowClick();
  }

  function tryAgain() {
      window.location.reload();
  }