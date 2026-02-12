const envelope = document.getElementById('envelope');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const letterContent = document.querySelector('.letter-content');

// 1. abrir la carta 
envelope.addEventListener('click', () => {
    envelope.classList.add('open');
});

// 2. Lógica del "NO" 
noBtn.addEventListener('mouseenter', moveButton);
// Por si intenta clickear rápido en mobile
noBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    moveButton();
});

function moveButton() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // posición aleatoria
    const newX = Math.random() * (width - 100) - (width / 2) + 50;
    const newY = Math.random() * (height - 100) - (height / 2) + 50;

    // sobre y nota
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = '50%';       // Referencia central
    noBtn.style.top = '50%';
    noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
    
    noBtn.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
}

// 3. Lógica del botón "YES"
yesBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    
    letterContent.innerHTML = `
        <p style="font-size: 40px; margin:0;">🧡</p>
        <p style="font-size: 14px; line-height: 1.5;">
            ¡PRESS START TO KISS ME!<br>
            <span style="font-size:10px; color:#aaa;">(Loading... hasta el sábado)</span>
        </p>
    `;
    
    yesBtn.style.display = 'none';
});
