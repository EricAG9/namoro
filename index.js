function yes() {
    alert("Você aceitou namorar comigo! :)");
    // redireciona para um URL após clicar no SIM
    location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
}

function no(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}