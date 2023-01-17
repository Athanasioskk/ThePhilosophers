// console.log(document.getElementById('pldate').getBoundingClientRect());
// console.log(document.getElementById('ardate').getBoundingClientRect().width);
// console.log(document.getElementById('epdate').getBoundingClientRect().width);
// console.log(document.getElementById('zedate').getBoundingClientRect().width);
// console.log(document.getElementById('madate').getBoundingClientRect().width);
// console.log(document.getElementById('todate').getBoundingClientRect().width);
// console.log(window.innerWidth);



document.addEventListener('scroll', function () {
    var point = window.pageXOffset,
        isVisible = point > Math.abs(document.getElementById('pldate').getBoundingClientRect().right);

    const plato = document.getElementById('platoid');
    const pquote = document.getElementById('pquoteid');
    const pbio = document.getElementById('pbioid');

    if (isVisible) {
        plato.style.animation = "pentry ease 1s forwards";
        plato.style.animationDelay = ".3s";
        pquote.style.animation = "pquote ease 1s forwards";
        pquote.style.animationDelay = ".6s";
        pbio.style.animation = "pbio ease 1s forwards";
        pbio.style.animationDelay = ".8s";
    }
});

document.addEventListener('scroll', function () {
    var point = window.pageXOffset,
        isVisible = point > Math.abs(document.getElementById('ardate').getBoundingClientRect().right) + window.innerWidth;

    const ari = document.getElementById('arisid');
    const aquote = document.getElementById('aquoteid');
    const abio = document.getElementById('abioid');

    if (isVisible) {
        ari.style.animation = "aentry ease 1s forwards";
        ari.style.animationDelay = ".3s";
        aquote.style.animation = "aquote ease 1s forwards";
        aquote.style.animationDelay = ".6s";
        abio.style.animation = "abio ease 1s forwards";
        abio.style.animationDelay = ".8s";
    }
});

document.addEventListener('scroll', function () {
    var point = window.pageXOffset - window.innerWidth,
        isVisible = point > Math.abs(document.getElementById('epdate').getBoundingClientRect().right + window.innerWidth);

    const epicurus = document.getElementById('epicurusid');
    const equote = document.getElementById('equoteid');
    const ebio = document.getElementById('ebioid');

    if (isVisible) {
        epicurus.style.animation = "eentry ease 1s forwards";
        epicurus.style.animationDelay = ".3s";
        equote.style.animation = "equote ease 1s forwards";
        equote.style.animationDelay = ".6s";
        ebio.style.animation = "ebio ease 1s forwards";
        ebio.style.animationDelay = ".8s";
    }
});

document.addEventListener('scroll', function () {
    var point = window.pageXOffset - window.innerWidth,
        isVisible = point > Math.abs(document.getElementById('zedate').getBoundingClientRect().right) + 1.5*window.innerWidth;

    const zeno = document.getElementById('zenoid');
    const zquote = document.getElementById('zquoteid');
    const zbio = document.getElementById('zbioid');

    if (isVisible) {
        zeno.style.animation = "zentry ease 1s forwards";
        zeno.style.animationDelay = ".3s";
        zquote.style.animation = "zquote ease 1s forwards";
        zquote.style.animationDelay = ".6s";
        zbio.style.animation = "zbio ease 1s forwards";
        zbio.style.animationDelay = ".8s";
    }
});

document.addEventListener('scroll', function () {
    var point = window.pageXOffset - window.innerWidth,
        isVisible = point > Math.abs(document.getElementById('madate').getBoundingClientRect().right) + Math.abs(document.getElementById('macontid').getBoundingClientRect().right) + Math.abs(document.getElementById('zecontid').getBoundingClientRect().right) + 1.5*window.innerWidth;

    const marc = document.getElementById('marcusid');
    const mquote = document.getElementById('mquoteid');
    const mbio = document.getElementById('mbioid');

    if (isVisible) {
        marc.style.animation = "mentry ease 1s forwards";
        marc.style.animationDelay = ".3s";
        mquote.style.animation = "mquote ease 1s forwards";
        mquote.style.animationDelay = ".6s";
        mbio.style.animation = "mbio ease 1s forwards";
        mbio.style.animationDelay = ".8s";
    }
});


document.addEventListener('scroll', function () {
    var point = window.pageXOffset - window.innerWidth,
        isVisible = point > Math.abs(document.getElementById('todate').getBoundingClientRect().right) + document.getElementById('philid').getBoundingClientRect().right + 3.5* window.innerWidth;

    const than = document.getElementById('thanid');
    const tquote = document.getElementById('tquoteid');
    const tcontact = document.getElementById('contactid');

    if (isVisible) {
        than.style.animation = "thanasis ease 1s forwards";
        than.style.animationDelay = ".3s";
        tquote.style.animation = "tquote ease 1s forwards";
        tquote.style.animationDelay = ".6s";
        tcontact.style.animation = "contact ease 1s forwards";
        tcontact.style.animationDelay = ".8s";
    }
});
