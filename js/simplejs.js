// Dom Elements

const textConatiner = document.querySelector("#text_section_container");
const text_section_button = document.querySelector("#text_section_button");
const text_section_other_bg = document.querySelector("#text_section_other_bg");
const text_section_other_btn = document.querySelector(
  "#text_section_other_btn"
);

const indtroduction = document.querySelector("#indtroduction");
const header = document.querySelector("#header");
const locationSection = document.querySelector("#location");
const comments_section = document.querySelector(".comments_section");
const section_location_slider = document.querySelector(
  ".section_location_slider .swiper"
);
const comments_section_slider = document.querySelector(
  ".comments_section .swiper"
);

const mini_header_container_li_a = document.querySelectorAll(
  "#mini_header_container ul li a"
);

const mini_header_container = document.querySelector("#mini_header_container");
const burger = document.querySelector("#burger");

// Actions here
text_section_button.addEventListener("click", () => {
  collapse(textConatiner, text_section_button);
});
text_section_other_btn.addEventListener("click", () => {
  collapse(text_section_other_bg, text_section_other_btn);
});

function collapse(ele1, ele2) {
  console.log("collapse");
  if (ele1.className.includes("active")) {
    ele1.classList.remove("active");

    ele2.innerHTML = ` 
    <h4>Подробнее</h4>
    <svg
      width="25"
      height="14"
      viewBox="0 0 25 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 2L13.2338 11.6984C12.8288 12.1005 12.1721 12.1005 11.7671 11.6984L2 2"
        stroke="#E97522"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
    `;
  } else {
    ele1.classList.add("active");
    ele2.innerHTML = `
    <h4>Скрыть</h4>
    <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12L11.7662 2.30164C12.1712 1.89947 12.8279 1.89945 13.2329 2.3016L23 12" stroke="#E97522" stroke-width="3" stroke-linecap="round"/>
</svg>
`;
  }
}

function init() {
  let myMap = new ymaps.Map("map", {
    center: [41.291997, 69.35621],

    zoom: 15,
  });

  myMap.controls.remove("geolocationControl"); // удаляем геолокацию
  myMap.controls.remove("searchControl"); // удаляем поиск
  myMap.controls.remove("trafficControl"); // удаляем контроль трафика
  myMap.controls.remove("typeSelector"); // удаляем тип
  myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  // myMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
  myMap.controls.remove("rulerControl"); // удаляем контрол правил
  myMap.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  let marker = new ymaps.Placemark(myMap.getCenter(), {
    balloonContentHeader: `
    <div class="map_section_placemark">
    <img src="./img/logo.svg" />
    <br />
    <a href="tel:+7 (499) 344 60 91">+7 (499) 344 60 91</a>
    <br />
    <a href="mailto:content@addmarkets.ru">content@addmarkets.ru</a>
    <h2>Режим работы: ПН-ПТ 09:00 - 18:00</h2>
  </div>`,
  });

  // Добавим метку на карту.
  myMap.geoObjects.add(marker);
  // Откроем балун на метке.
  marker.balloon.open();
}

ymaps.ready(init);

function fixedHeader() {
  if (window.pageYOffset > indtroduction.offsetTop) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

function sliderChanges({ trigger, item }) {
  if (window.pageYOffset > trigger.offsetTop - 100) {
    item.swiper.slideNext();
  } else {
    item.swiper.slidePrev();
  }
}

// Event listeners

document.addEventListener("scroll", () => {
  fixedHeader();
  sliderChanges({
    trigger: locationSection,
    item: section_location_slider,
  });
  sliderChanges({
    trigger: comments_section,
    item: comments_section_slider,
  });
});
function burgerActiveNotActive() {
  if (mini_header_container.classList.contains("active")) {
    mini_header_container.classList.remove("active");
    document.getElementsByTagName("html")[0].style.overflowY = "visible";
  } else {
    mini_header_container.classList.add("active");
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  }
}

burger.addEventListener("click", () => {
  burgerActiveNotActive();
});

mini_header_container_li_a.forEach((a) => {
  a.addEventListener("click", () => {
    burgerActiveNotActive();
  });
});
