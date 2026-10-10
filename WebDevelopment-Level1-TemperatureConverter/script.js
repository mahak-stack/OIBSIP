
let temperature = document.getElementById("temperature");
let unit = document.getElementById("unit");
let convertBtn = document.getElementById("convertBtn");
let result = document.getElementById("result");
let error = document.getElementById("error");

convertBtn.addEventListener("click", function () {
    let value = temperature.value.trim();
    let selectedUnit = unit.value;

    error.textContent = "";
    result.classList.remove("show-result");

    // Check empty input
    if (value === "") {
        result.textContent = "Your result will appear here.";
        error.textContent = "Please enter a temperature!";
        return;
    }

    let temp = Number(value);

    if (!Number.isFinite(temp)) {
        error.textContent = "Please enter a valid number!";
        return;
    }

    // Convert input into Celsius
    let celsius;

    if (selectedUnit === "celsius") {
        celsius = temp;
    } else if (selectedUnit === "fahrenheit") {
        celsius = (temp - 32) * 5 / 9;
    } else {
        celsius = temp - 273.15;
    }

    // Absolute zero validation
    if (celsius < -273.15) {
        error.textContent =
            "Temperature cannot be below absolute zero!";
        return;
    }

    // Calculate all units
    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    // Display results
    result.innerHTML = `
        <div>🌡️ Celsius: ${celsius.toFixed(2)} °C</div>
        <div>🔥 Fahrenheit: ${fahrenheit.toFixed(2)} °F</div>
        <div>❄️ Kelvin: ${kelvin.toFixed(2)} K</div>
    `;

    // Restart animation on every conversion
    void result.offsetWidth;
    result.classList.add("show-result");
});

// Clear error while typing
temperature.addEventListener("input", function () {
    error.textContent = "";
});

unit.addEventListener("change", function () {
    error.textContent = "";
});

// Press Enter to convert
temperature.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        convertBtn.click();
    }
});


resetBtn.addEventListener("click", function () {
    temperature.value = "";
    unit.value = "celsius";

    result.innerHTML = "Your result will appear here.";
    result.classList.remove("show-result");

    error.textContent = "";

    tempEmoji.textContent = "🌡️";
    tempMessage.textContent = "Ready to check the temperature!";
});
