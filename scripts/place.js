
// WDD 131 - Uganda Country Page
// Muwonge Richard

// Static weather information for Kampala, Uganda
const temperature = 22;
const windSpeed = 12;

// Footer: Display current year
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// Footer: Display last modified date
document.querySelector("#lastModified").textContent =
    document.lastModified;

// Wind Chill Calculation (Metric Formula)
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Check whether wind chill calculation is possible
const windChillElement = document.querySelector("#wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}