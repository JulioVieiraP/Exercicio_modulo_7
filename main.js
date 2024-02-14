const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numero1Input = document.getElementById('numeroA');
    const numero2Input = document.getElementById('numeroB');

    const numero1 = parseFloat(numero1Input.value);
    const numero2 = parseFloat(numero2Input.value);

    const tudoCerto = document.querySelector('.tudoCerto');
    const numInvalido = document.querySelector('.numInvalido');

    if (numero1 < numero2) {
        tudoCerto.innerHTML = `Número A: <b>${numero1}</b> é menor que Número B: <b>${numero2}</b>!`;
        tudoCerto.style.display = 'block';
        numInvalido.style.display = 'none';
        
        numero1Input.value = '';
        numero2Input.value = '';
    } else {
        numInvalido.innerHTML = 'O número A deve ser menor que o Número B!';
        tudoCerto.style.display = 'none';
        numInvalido.style.display = 'block';
        
        numero1Input.value = '';
        numero2Input.value = '';
    }
});
