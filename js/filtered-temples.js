const temples = [
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Aba_Nigeria_Temple.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Manti_Utah_Temple.jpg"
  },
  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Payson_Utah_Temple_2014-11-28.jpg"
  },
  {
    templeName: "Yigo Guam Temple",
    location: "Yigo, Guam",
    dedicated: "2022-05-22",
    area: 6861,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Yigo_Guam_Temple.jpg"
  },
  {
    templeName: "Washington D.C. Temple",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/13/Washington_D.C._Temple_At_Dusk.jpg"
  },
  {
    templeName: "Lima Peru Temple",
    location: "Lima, Peru",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/32/Lima_Peru_Temple.jpg"
  },
  {
    templeName: "Mexico City Mexico Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Mexico_City_2015_007.jpg/960px-Mexico_City_2015_007.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Salt_Lake_Temple_UT2.jpg"
  },
  {
    templeName: "Seattle Washington Temple",
    location: "Bellevue, Washington, United States",
    dedicated: "1980-11-17",
    area: 110000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Seattle_Temple.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, United States",
    dedicated: "1919-11-27",
    area: 42100,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Laie_Hawaii_Temple%2C_Oahu%2C_Hawaii%2C_USA.jpg"
  }
];

const templeGrid = document.querySelector("#temple-grid");
const filterButtons = document.querySelectorAll(".filter-button");

function formatDedicationDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function createTempleCard(temple) {
  return `
    <article class="temple-card">
      <img src="${temple.imageUrl}" alt="Exterior of the ${temple.templeName}" loading="lazy">
      <div class="temple-card-content">
        <h2>${temple.templeName}</h2>
        <p class="temple-location">${temple.location}</p>
        <dl class="temple-details">
          <dt>Dedicated</dt>
          <dd>${formatDedicationDate(temple.dedicated)}</dd>
          <dt>Area</dt>
          <dd>${temple.area.toLocaleString("en-US")} sq ft</dd>
        </dl>
      </div>
    </article>
  `;
}

function getTemplesForFilter(filter) {
  switch (filter) {
    case "old":
      return temples.filter((temple) => Number(temple.dedicated.slice(0, 4)) < 1900);
    case "new":
      return temples.filter((temple) => Number(temple.dedicated.slice(0, 4)) > 2000);
    case "large":
      return temples.filter((temple) => temple.area > 90000);
    case "small":
      return temples.filter((temple) => temple.area < 10000);
    case "home":
    default:
      return temples;
  }
}

function renderTemples(filter = "home") {
  const filteredTemples = getTemplesForFilter(filter);
  templeGrid.innerHTML = filteredTemples.length
    ? filteredTemples.map(createTempleCard).join("")
    : '<p class="empty-state">No temples match this filter.</p>';
}

function selectFilter(selectedButton) {
  filterButtons.forEach((button) => {
    const isSelected = button === selectedButton;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

document.querySelector(".filter-nav").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) {
    return;
  }

  selectFilter(button);
  renderTemples(button.dataset.filter);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

const lastModified = new Date(document.lastModified);
document.querySelector("#last-modified").dateTime = lastModified.toISOString();
document.querySelector("#last-modified").textContent = lastModified.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

renderTemples();