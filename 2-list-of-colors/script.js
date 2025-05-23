function listOfColours(colours) {
  // Write your code here...
  const contentDiv = document.getElementById("content");
  const select = document.createElement("select");
  const p = document.createElement("p");
  p.textContent = "you have selected : ";
  colours.forEach((colour) => {
    const option = document.createElement("option");
    option.value = colour;
    option.textContent = colour;
    select.appendChild(option);
  });
  select.addEventListener("change", (event) => {
    const selectedColour = event.target.value;
    p.textContent = `you have selected : ${selectedColour}`;
    p.style.color = selectedColour;
  });
  contentDiv.appendChild(select);
  contentDiv.appendChild(p);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
