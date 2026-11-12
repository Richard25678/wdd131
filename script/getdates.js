const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");

if (currentYearElement) {
	currentYearElement.textContent = new Date().getFullYear();
}

if (lastModifiedElement) {
	lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
}
