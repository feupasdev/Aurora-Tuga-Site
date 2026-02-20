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
            terminal.innerHTML += "\nAccess Limited.";
            terminal.innerHTML += "\n\nEnter Access Key to continue...\n";

            document.getElementById("access-section").style.display = "block";
        })
        .catch(() => {
            document.getElementById("boot-text").innerHTML += 
                "\nIP detection failed.\n";
            document.getElementById("access-section").style.display = "block";
        });
}

function checkKey() {
    let key = document.getElementById("accessKey").value.trim();

    if (key === "guest") {
        loadHomePage();
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}

function loadHomePage() {
    document.getElementById("terminal").innerHTML = `
        <h1 style="color:#00ff00;">⚠ AURORA TUGA ⚠</h1>
        <p>IP: [REDACTED]</p>
        <p>Status: ONLINE</p>

        <h2 class="discord-title">Entra no nosso Discord!</h2>

        <iframe src="https://discord.com/widget?id=1473774818330415155&theme=dark"
        width="350"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
        </iframe>
    `;
}

window.onload = typeLine;
