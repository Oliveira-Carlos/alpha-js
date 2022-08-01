// capturando elementos do DOM
const image = document.querySelector('#img1');
const message = document.querySelector('#message');
const audio = document.querySelector('#aud');

image.src = './assets/bomb.jpg';

// adicionando eventos
image.addEventListener("click", clicar);

// setTimeout para explosão da bomba
const armar = setTimeout(() => {
    image.src = './assets/nuclear.png';
    message.innerHTML = 'A bomba explodiu! :('
    audio.play();
    console.log('explodiu')
    image.removeEventListener("click", clicar);
    message.style.color = '#f00'
    message.style.fontSize = '30px'
}, 10000);


// função de click para desarmar a bomba com clearTimeout
function clicar() {
    clearTimeout(armar);
    image.src = './assets/bomb-desarm.jpg';
    message.innerHTML = 'Bomba desarmada :)';
    console.log('desarmou');
    message.style.color = '#0f0'
    message.style.fontSize = '30px'
}
