const navbar = document.querySelector(".navbar");
const navOpenBtn = document.querySelector(".header__btn");
const navCloseBtn = document.querySelector(".navbar__btn");

const DatoCMSFetcher = createDatoCMSFetcher();
const DatoCMSParser = createDatoCMSParser();

function showNavbar() {
  navbar.classList.remove("navbar--hidden");
}

function hideNavbar() {
  navbar.classList.add("navbar--hidden");
}

async function createNavList() {
  const listContainer = document.querySelector(".navbar__list.links");
  const data = await DatoCMSFetcher.listAll();
  const themeIds = await DatoCMSParser.getAllThemesIds(data);
  themeIds.forEach(async (id) => {
    let modelData = await DatoCMSFetcher.getModelData(id);
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.textContent = modelData.name;
    a.href = `/pages/list.html?${modelData.api_key}`;

    li.appendChild(a);

    listContainer.append(li);
  });
}

navOpenBtn.addEventListener("click", showNavbar);
navCloseBtn.addEventListener("click", hideNavbar);

createNavList();
