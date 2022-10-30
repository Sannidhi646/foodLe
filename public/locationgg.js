

let x = document.getElementById("demo");
let but = document.getElementById("try");

function getLocation() {
  console.log("heh")
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
} 

function showPosition(position) {
  // console.log(x)
  // x.innerHTML = "Latitude: " + position.coords.latitude + 
  // "<br>Longitude: " + position.coords.longitude;
  console.log( position.coords.latitude );
  console.log( position.coords.longitude );


  const data = { 'latitude': position.coords.latitude, 'longitude': position.coords.longitude  };
  console.log(data);

let headers=new Headers();

fetch('/postLocation', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
 
  mode: 'cors',
   // or 'PUT'
  // body: JSON.stringify(data) ,
  body: JSON.stringify({ 'latitude': position.coords.latitude, 'longitude': position.coords.longitude  })
  // body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });




}

