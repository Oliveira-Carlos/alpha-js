// capturando elementos do DOM
const buttonArmar = document.querySelector('#buttonArmar');
const image = document.querySelector('#img1');
const message = document.querySelector('#message');
const audio = document.querySelector('#aud');
const timer = document.querySelector('#timer')
const tic = document.querySelector('#tic');

image.src = './assets/bomb.jpg';

// adicionando eventos
image.addEventListener("click", desarmar);

let min = 1;
let seg = 1;

function relogio() {

    if ((min > 0) || (seg > 0)) {
        if (seg == 0) {
            seg = 59;
            min = min - 1
        }
        else {
            seg = seg - 1;
        }
        if (min.toString().length == 1) {
            min = "0" + min;
        }
        if (seg.toString().length == 1) {
            seg = "0" + seg;
        }
        timer.innerHTML = min + ":" + seg;
        setTimeout('relogio()', 1000);
    }
    else {
        timer.innerHTML = "00:00";
    }

}

const playTic = setInterval(() => {
    tic.play();
}, 1000)

// setInterval para explosão da bomba
relogio()

const armar = setInterval(() => {
    image.src = './assets/nuclear.png';
    message.innerHTML = 'A bomba explodiu!'
    audio.play();
    console.log('explodiu')
    image.removeEventListener("click", desarmar);
    message.style.color = '#f00'
    message.style.fontSize = '30px'
}, 60000);



// função para desarmar na imagem e desarmar a bomba
function desarmar() {
    clearInterval(armar);
    image.src = './assets/bomb-desarm.jpg';
    message.innerHTML = 'Bomba desarmada :)';
    console.log('desarmou');
    message.style.color = '#0f0'
    message.style.fontSize = '30px'
    min = 0
    seg = 0
    tic.pause()
    clearInterval(playTic)
}