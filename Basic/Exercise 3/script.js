const resultDiv = document.getElementById("result");

const celius = Math.floor(Math.random() * (35 - -5 + 1) ) + -5;

const generateDOM = (txt, img) => {
    document.getElementById("results") = "";

    const p = document.createElement("p");
    p.innerText = txt;

    const image = document.createElement("img");
    image.setAttribute("src", img);

    resultDiv.appendChild(img);
    resultDiv.appendChild(p);
}

if(celius >= -5 && celius <= 10) {
    generateDOM("The weather is cold" , "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwccoradio.radio.com%2Farticles%2Ffeature-article%2Fa-short-blast-of-cold-and-snow-coming-this-week-in-minnesota&psig=AOvVaw19oW6HZWWvSj2-yZIkjKup&ust=1590567504608000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCBpYWM0ekCFQAAAAAdAAAAABAD")
}else if (celius >= 11 && celius <= 22) {
    generateDOM("The weather is moderate" , "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwccoradio.radio.com%2Farticles%2Ffeature-article%2Fa-short-blast-of-cold-and-snow-coming-this-week-in-minnesota&psig=AOvVaw19oW6HZWWvSj2-yZIkjKup&ust=1590567504608000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCBpYWM0ekCFQAAAAAdAAAAABAD")
}else {
    generateDOM("The weather is hot" , "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwccoradio.radio.com%2Farticles%2Ffeature-article%2Fa-short-blast-of-cold-and-snow-coming-this-week-in-minnesota&psig=AOvVaw19oW6HZWWvSj2-yZIkjKup&ust=1590567504608000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCBpYWM0ekCFQAAAAAdAAAAABAD")
}


