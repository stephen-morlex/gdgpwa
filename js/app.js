const container = document.querySelector(".container");
const speakers = [
  {
    name: "Unguec Stephen",
    company: "NCA South Sudan",
    title: "Assistant Director for Cyber Security",
    image: "images/1.webp",
  },
  {
    name: "Stephen Victor Yuggu",
    company: "Securiport LLC",
    title: "Software Developer",
    image: "images/2.webp",
  },
  {
    name: "Peter Nyuol Majok",
    company: "Ain Shams university",
    title: "Student",
    image: "images/3.webp",
  },
  {
    name: "Eva Yai",
    company: "Go-Girls ICT",
    title: "Co-Founder",
    image: "images/4.webp",
  },
];

// Iteration of the card
const showSpeakers = () => {
  let output = "";
  speakers.forEach(
    ({ name, image, company, title }) =>
      (output += `
       
                <div class="">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <h4 class="card--company" href="#">${company}</h4>
                  <p class="card--link" href="#">${title}</p>
                </div>
                `)
  );
  container.innerHTML = output;
};








document.addEventListener("DOMContentLoaded", showSpeakers);

// We need to register service worker it in our project so it can be available on offline mode.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
