const galleryList = [
  {
    path: "images/gallery/IMG_0840.jpg",
    name: "IMG_0840.jpg",
    size: 654351,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0842.jpg",
    name: "IMG_0842.jpg",
    size: 975991,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0843.jpg",
    name: "IMG_0843.jpg",
    size: 629119,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0844.jpg",
    name: "IMG_0844.jpg",
    size: 815645,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0849.jpg",
    name: "IMG_0849.jpg",
    size: 871109,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0850.jpg",
    name: "IMG_0850.jpg",
    size: 560231,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0851.jpg",
    name: "IMG_0851.jpg",
    size: 554636,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0858.jpg",
    name: "IMG_0858.jpg",
    size: 584032,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0860.jpg",
    name: "IMG_0860.jpg",
    size: 628265,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0866.jpg",
    name: "IMG_0866.jpg",
    size: 559061,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0869.jpg",
    name: "IMG_0869.jpg",
    size: 619159,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0878.jpg",
    name: "IMG_0878.jpg",
    size: 781554,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0879.jpg",
    name: "IMG_0879.jpg",
    size: 765414,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0881.jpg",
    name: "IMG_0881.jpg",
    size: 646525,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0882.jpg",
    name: "IMG_0882.jpg",
    size: 548121,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0883.jpg",
    name: "IMG_0883.jpg",
    size: 872291,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0889.jpg",
    name: "IMG_0889.jpg",
    size: 632650,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0895.jpg",
    name: "IMG_0895.jpg",
    size: 682676,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0905.jpg",
    name: "IMG_0905.jpg",
    size: 601955,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0907.jpg",
    name: "IMG_0907.jpg",
    size: 640937,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0909.jpg",
    name: "IMG_0909.jpg",
    size: 759555,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0925.jpg",
    name: "IMG_0925.jpg",
    size: 932367,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0930.jpg",
    name: "IMG_0930.jpg",
    size: 700739,
    extension: ".jpg",
    type: "file",
  },
  {
    path: "images/gallery/IMG_0933.jpg",
    name: "IMG_0933.jpg",
    size: 849053,
    extension: ".jpg",
    type: "file",
  },
];

function gallery() {
  var carouselStart = `<div class="carousel-item active"><img class="d-block w-100" src="/${galleryList[0].path}" alt="${galleryList[0].name}" /></div>`;

  var carousel = "";

  var carouselEnd = `</div>`;

  for (let i = 1; i < galleryList.length; i++) {
    carousel += `<div class="carousel-item"><img class="d-block w-100" src="/${galleryList[i].path}" alt="${galleryList[i].name}" /></div>`;
  }
  return carouselStart + carousel + carouselEnd;
}

var eventsElement = document.getElementById("localMadManGalleryJS");

eventsElement.innerHTML = gallery();
