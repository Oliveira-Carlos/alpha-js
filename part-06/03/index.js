// DOM
const arma = document.querySelector('#armar')
const desarma = document.querySelector('#desarmar')
const min = document.querySelector('#min')
const seg = document.querySelector('#seg')
const timer = document.querySelector('#timer')
const audio = document.querySelector('#aud');

for (let i = 0; i < 60; i++) {
    min.innerHTML += `<option value="${i}">${i}</option>`
    seg.innerHTML += `<option value="${i}">${i}</option>`
}

arma.addEventListener('click', armaAlarme)

function armaAlarme() {
    let minValue = parseInt(min.value)
    let segValue = parseInt(seg.value)
    totalTime = (minValue * 60) + segValue
    pocentagemTime = (totalTime * 5) / 100

    contagem = setInterval(function () {
        segValue--;

        if (segValue <= 0) {
            if (minValue > 0) {
                minValue--
                segValue = 59
                if (totalTime < pocentagemTime) {
                    timer.style.color = '#f00'
                }

            } else {
                audio.play();
                clearInterval(contagem)
            }
        }

        timer.innerHTML = minValue + ": " + segValue
    }, 1000)

    arma.removeEventListener('click', armaAlarme)
}

desarmar.addEventListener('click', desarmaAlarme)

function desarmaAlarme() {
    audio.pause();
    clearInterval(contagem)
    arma.addEventListener('click', armaAlarme)
}
