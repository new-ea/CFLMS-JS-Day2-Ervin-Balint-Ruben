const resultDiv = document.getElementById("results");

const celius = Math.floor(Math.random() * (35 - -5 + 1)) + -5;

const generateDOM = (txt, img) => {
  /*     document.getElementById("results") = "";
   */
  const p = document.createElement("p");
  p.innerText = txt;

  const image = document.createElement("img");
  image.setAttribute("src", img);

  resultDiv.appendChild(image);
  resultDiv.appendChild(p);
};

if (celius >= -5 && celius <= 10) {
  generateDOM("The weather is cold", "img/cold.jpeg");
} else if (celius >= 11 && celius <= 22) {
  generateDOM("The weather is moderate", "img/moderate.jpg");
} else {
  generateDOM("The weather is hot", "img/warm.jpg");
}
