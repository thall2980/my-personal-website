const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

const h3 = document.createElement("h3");
h3.textContent = "Adding smaller";

const h4 = document.createElement("h4");
h4.textContent = "and smaller content with JavaScript";

document.querySelector("body").appendChild(h2);
document.querySelector("body").appendChild(h3);
document.querySelector("body").appendChild(h4);
