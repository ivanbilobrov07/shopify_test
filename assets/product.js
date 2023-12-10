const elem = document.querySelector('.gallery');
const flky = new Flickity( ".gallery", {
  imagesLoaded: true,
  pageDots: false,
  });

const flkyNav = new Flickity(".gallery-nav", {
  asNavFor: '.gallery',
  contain: true,
  imagesLoaded: true,
  pageDots: false,
  prevNextButtons: false,
})

const configurationButtonsRef = document.querySelector(".tabs__nav");
const tabsItemsRef = document.querySelectorAll(".tabs__item");

const onTabsClick = e => {    
    const currentBtn = e.target.closest("button")

    if(!currentBtn || currentBtn.classList.contains("active")){
        return;
    }

    const currentTabId = currentBtn.dataset.tab;
    const activeBtn = currentBtn.parentNode.querySelector(".active");
    
    tabsItemsRef.forEach(item => {
        item.dataset.tab === currentTabId ? item.classList.add("active") : item.classList.remove("active")
    })

    activeBtn?.classList.remove("active");
    currentBtn.classList.add("active")
}

configurationButtonsRef.addEventListener("click", onTabsClick)

