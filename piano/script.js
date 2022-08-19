const pianoKeys = document.querySelectorAll('.key');

const playSound = (url) => {
    console.log(url)
    new Audio(url).play();
}

pianoKeys.forEach((pianoKey, i) => {

    const number = i < 9 ? '0' + (i+1) : (i+1);

    const url = `piano-keys/key${number}.mp3`;

    console.log(url)

    pianoKey.addEventListener('click', () => playSound(url))


})
