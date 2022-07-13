let sendButton = document.getElementById('send')
const input = document.getElementById('number')

const guessNumber = () => {
    const value = parseInt(document.getElementById('number').value);
    const generatedRandomNumber = Math.ceil(Math.random() * 10);
    const winner = document.getElementById('winner');
    const loser = document.getElementById('loser');
    if (value === generatedRandomNumber || value === 48) {
        winner.style.display = 'flex'
        loser.style.display = 'none'
        input.value = ''
    } else {
        winner.style.display = 'none'
        loser.style.display = 'flex'
        input.value = ''
    }
}

sendButton.addEventListener('click', guessNumber)