const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.slider_button--right');
const prev = document.querySelector('.slider_button--left');
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// // Button events
next.addEventListener('click', (e) =>{
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', (e) =>{
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}


 const nasaApiUrl = 'https://api.unsplash.com/photos/?client_id=CnMe0JQxSUcrSzMVcKdoW9cU1PvwCcRA54fN7T-Nemk'
  

 let nasaApiPromise = fetch(nasaApiUrl)
  
  	nasaApiPromise.then(unparsedData=> {
    let parseDataPromise = unparsedData.json()
    parseDataPromise.then(parsedData=> {
      // console.log("Parsed the data")
      console.log(parsedData);

	function data (index, value){
		console.log(value);

		var imageURL = value.urls.regular;
		console.log(imageURL);
	}

     });
      // console.log("Got the data!")
    });
    // console.log("Sent out for data")



























