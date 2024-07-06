const regions$$ = document.querySelector(".regions");

const entrarEnDetalle = (id) => {
  const detalle = document.querySelector(".detalle");
  detalle.innerHTML = "";
  fetch("http://localhost:3000/api/v1/regions/" + id)
    .then((res) => res.json())
    .then((region) => {
      for (const champion of region.champions) {
        detalle.innerHTML += `
            <div class="champion">
                <div>
                    <img src="${champion.img}">
                </div>
                <h3>${champion.name}</h3>
                </div>
            `;
      }
    });
};

fetch("http://localhost:3000/api/v1/regions")
  .then((res) => res.json())
  .then((regions) => {
    for (const region of regions) {
      const divRegion = document.createElement("div");
      const img = document.createElement("img");
      const nombre = document.createElement("h3");

      nombre.textContent = region.name;
      img.src = region.img;

      divRegion.addEventListener("click", () => entrarEnDetalle(region._id));

      divRegion.append(nombre, img);
      regions$$.append(divRegion);
    }
  });
