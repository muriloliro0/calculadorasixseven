let currentInput = '0';

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = currentInput;
}

function appendNumber(num) {
    if (currentInput === '0') currentInput = num;
    else currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    currentInput += op;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : '0';
    updateDisplay();
}

function calculate() {
    // 1. Força o resultado a ser 67
    currentInput = "67";
    updateDisplay();

    // 2. Lógica para resetar o GIF do começo
    const container = document.getElementById('joke-container');
    const gifImage = document.getElementById('scp-gif');

    // Remove a animação de fade atual
    container.classList.remove('animate-gif');
    
    // Força o GIF a recarregar do primeiro frame adicionando um timestamp no SRC
    const originalSrc = "scp-067-67.gif";
    gifImage.src = originalSrc + "?t=" + new Date().getTime();

    // Reinicia a animação de subida e fade
    void container.offsetWidth; // Trigger reflow para o navegador notar a mudança
    container.classList.add('animate-gif');
}

function toggleScientific() {
    const win = document.getElementById('calc-window');
    win.classList.toggle('scientific-active');
}