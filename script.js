document.getElementById('calcularBtn').addEventListener('click', function() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carneBovina = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    const frango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    const linguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2);
    const refrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    const cerveja = (homens * 0.8) + (mulheres * 0.5);

    const resultList = document.getElementById('resultList');
    resultList.innerHTML = `
        <li>${carneBovina.toFixed(1)}kg de carne bovina</li>
        <li>${frango.toFixed(1)}kg de frango</li>
        <li>${linguica.toFixed(1)}kg de linguiça</li>
        <li>${refrigerante.toFixed(1)}l de refrigerante</li>
        <li>${cerveja.toFixed(1)}l de cerveja</li>
    `;
});
