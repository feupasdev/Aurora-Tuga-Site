const bootLines = [
    "Establishing secure connection...",
    "Accessing Aurora Tuga Network...",
    "Authenticating protocol...",
    "Detecting client IPv4..."
];

let lineIndex = 0;
let charIndex = 0;
let speed = 30;

function typeLine() {
    if (lineIndex < bootLines.length) {
        if (charIndex < bootLines[lineIndex].length) {
            document.getElementById("boot-text").innerHTML += bootLines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, speed);
        } else {
            document.getElementById("boot-text").innerHTML += "\n";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeLine, 300);
        }
    } else {
        getIP();
    }
}

function getIP() {
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            let terminal = document.getElementById("boot-text");

            terminal.innerHTML += "\nClient IPv4 detected: " + data.ip;
            terminal.innerHTML += "\nConnection logged.";
            terminal.innerHTML += "\nThreat Level: LOW";
            terminal.innerHTML += "\nAccess Granted.\n\n";

            document.getElementById("enter-section").style.display = "block";
        })
        .catch(() => {
            document.getElementById("boot-text").innerHTML += 
                "\nIP detection failed.\nAccess Limited.\n";
            document.getElementById("enter-section").style.display = "block";
        });
}

function enterSite() {
    document.getElementById("terminal").innerHTML = `
        <h1>⚠ AURORA TUGA ⚠</h1>
        <p>Servidor Internacional de Portugal</p>
        <p>IP: [REDACTED]</p>
        <p>Status: ONLINE</p>
        <p>Servidor de SCP: Secret Laboratory</p>
    `;
}

window.onload = typeLine;
