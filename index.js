const bulb = document.getElementById("bulb");
const turnOnBtn = document.getElementById("turnOnBtn");
const turnOffBtn = document.getElementById("turnOffBtn");

function setBulbState(isOn) {
    if (!bulb) return;

    bulb.style.color = isOn ? "#1c11e5" : "#8f8f8f";
    bulb.style.filter = isOn ? "drop-shadow(0 0 22px rgba(65, 59, 255, 0.9))" : "none";
}

if (turnOnBtn) {
    turnOnBtn.addEventListener("click", function () {
        setBulbState(true);
    });
}

if (turnOffBtn) {
    turnOffBtn.addEventListener("click", function () {
        setBulbState(false);
    });
}

// Initial state
setBulbState(false);






















