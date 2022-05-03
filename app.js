window.addEventListener('load', () => {


    let horaHtml = document.getElementById('horas');
    let minutosHtml = document.getElementById('minutos');
    let segundosHtml = document.getElementById('segundos');


    const mostrarHora = () => {

        let fecha = new Date();
        let hora = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();

       
        horaHtml.textContent = String(hora).padStart(2, '0');
        minutosHtml.textContent = String(minutos).padStart(2, '0');
        segundosHtml.textContent = String(segundos).padStart(2, '0');

        setTimeout(mostrarHora, 1000);
    }

    mostrarHora();

})