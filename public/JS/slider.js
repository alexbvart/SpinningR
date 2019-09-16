let slider = document.querySelector('#sliderPadre');
let slIndi = document.querySelectorAll('#sliderHijo');
let conta = 1;
let sizeWd = slIndi[0].clientWidth;
let sizeHg = slIndi[0].clientHeight;
let intervalo = 10000;
backSize();

window.addEventListener("resize", function() {
    sizeWd = slIndi[0].clientWidth;
    sizeHg = slIndi[0].clientHeight;
})

setInterval(function tiempo() { // serial de intervalo de tiempo para ejecutarce una funcion
    slides();

}, intervalo);

function slides() { //movimiento
    slider.style.transform = 'translate(' + (-sizeWd * conta) + 'px)';
    slider.style.transition = 'transform 5s';
    conta++;
    if (conta == slIndi.length) {
        conta = 0;
        setTimeout(function() {
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 2.5s';
        }, intervalo)
    }
}
// alert('vales o no ctv');

function backSize() {
    slider.style.background = sizeWd + 'px' + sizeHg + 'px';
}