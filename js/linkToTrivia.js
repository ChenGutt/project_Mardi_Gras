play = document.querySelector('.playBtn');
play2 = document.querySelector('#toTrivia');



function playTrivia(btnElement) {

    btnElement.addEventListener('click', () => {
        if (screen.width < 768) {
            window.open("triviaGame.html", 'trivia', 'screen.width,screen.height');
        } else {
            window.open("triviaGame.html", 'trivia', 'height=600,width=350');
        }

    })

}

playTrivia(play);
playTrivia(play2);