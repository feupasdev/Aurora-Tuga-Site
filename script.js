const text = `
Establishing secure connection...
Accessing Aurora Tuga Network...
Authenticating...
Connection established.

`;

let i = 0;
let speed = 40;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("boot-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        document.getElementById("enter-section").style.display = "block";
    }
}

function enterSite() {
    document.getElementById("terminal").innerHTML = `
        <h1>⚠ AURORA TUGA ⚠</h1>
        <p>Servidor Internacional de Portugal</p>
        <p>IP: (coloca aqui o IP)</p>
        <p>Status: ONLINE</p>
    `;
}

window.onload = typeWriter;
