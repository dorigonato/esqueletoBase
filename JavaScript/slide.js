let radio = document.querySelector('.manual-btn')
let cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 6000)

function proximaImg() {
    cont++

    if(cont > 12) {
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true

}