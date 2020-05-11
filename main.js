
const slides = document.querySelectorAll('.slides');

console.log(slides);

const sliderImages = document.querySelectorAll("slides img");

console.log(sliderImages)

const nextButton = document.querySelector(".slider_button--right");
 
const prevButton = document.querySelector(".slider_button--left");

const auto = false;

const intervalTime = 5000;






  // const nasaApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=EpMZfnrZ9IXNOyfGX5UaaAWSOGDgxQwQizkMduPW'
  

  // let nasaApiPromise = fetch(nasaApiUrl)
  
  // 	nasaApiPromise.then(unparsedData=> {
  //   let parseDataPromise = unparsedData.json()
  //   parseDataPromise.then(parsedData=> {
  //     console.log("Parsed the data")
  //     console.log(parsedData)
  //    })
  //     console.log("Got the data!")
  //   })
  //   console.log("Sent out for data")


// fetch('https://api.nasa.gov/planetary/apod?api_key=EpMZfnrZ9IXNOyfGX5UaaAWSOGDgxQwQizkMduPW', {
//     headers: {
//         'x-api-key': 'EpMZfnrZ9IXNOyfGX5UaaAWSOGDgxQwQizkMduPW'
//     }
// })
