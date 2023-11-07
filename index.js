var elentosDuvida = document.querySelectorAll('.duvida')

elentosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})