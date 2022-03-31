function doWrite() {
  let value = document.querySelector('[type+"text"]').value;
  //document.querySelector('data-txt').innerHTML = value
  document.querySelector("data-txt").textContent = value;
}

const countries = [
  "new zealand",
  "spain",
  "canada",
  "mexico",
  "england",
  "france",
  "japan",
];
const isDay = true;

if (isDay === false) {
  document.body.style.setProperty("background-color", "#000");
} else {
  document.body.style.setProperty("background-color", "white");
}

const age = 55;

if (age > 50) {
  console.log("age is more than 50");
} else {
  console.log("age is less than 50");
}

//countries.forEach(function(country){
//const ul=document.createElement("ul")
//document.querySelector('[data-section]').appendChild(ul)
//const li=document.createElement("li")
//li.textContent = country
//ul.appendChild(li)

//}

const figure = document.querySelector("[data-images]");
for (let i = 1000; i < 1090; i++) {
  const img = document.createElement("img");
  img.src = 'https://picsum.photos/id/' + i + '/200' 
  img.width = 100
  img.setAttribute('alt', `photo ${i}`)
  figure.appendChild(img)
}
