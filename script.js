function resolverEquacao() {
    // Pega os valores dos coeficientes a, b e c
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    // Converte eles para números
    a = Number(a);
    b = Number(b);                                                                       
    c = Number(c);

    // Verifica se "a" é diferente de zero
    if (a === 0) {
        document.getElementById("resultado").innerText = "Isso não é uma equação de segundo grau (a não pode ser zero).";
        return;
    }

    // Fórmula para descobrir o delta
    let delta = b * b - 4 * a * c;


    // Verifica as condições do delta
    if (delta < 0) {
        document.getElementById("passo").innerText = "Delta = " + delta;
        document.getElementById("resultado").innerText = "A equação não possui raízes reais (Delta < 0).";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        document.getElementById("passo").innerText = "Delta = " + delta;
        document.getElementById("resultado").innerText = "A equação possui uma raiz real: x = " + x;
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("passo").innerText = "Delta = " + delta;
        document.getElementById("resultado").innerText = "A equação possui duas raízes reais: X1 = " + x1 + ", X2 = " + x2;
    }
}

