const regions$$ = document.querySelector(".regions");

const getChampions = (id) => {
  const champions = document.querySelector(".champions");

  champions.innerHTML = "";
  fetch("http://localhost:3000/api/v1/regions/" + id)
    .then((res) => res.json())
    .then((region) => {
      for (const champion of region.champions) {
        champions.innerHTML += `
            <div class="champion">
            <div class="littleRegionDiv">
              <img src=${region.img}>
            </div>
                <div class="imgDiv">
                    <img id="championImg" src="${champion.img}">
                    <div>
                    <h3>${champion.name}</h3>
                    <h4>#${champion.role}</h4>
                    </div>
                </div>
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
      const championName = document.createElement("h3");

      championName.textContent = region.name;
      img.src = region.img;

      divRegion.addEventListener("click", () => getChampions(region._id));

      divRegion.append(championName, img);
      regions$$.append(divRegion);
    }
  });
