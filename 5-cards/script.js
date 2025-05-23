// ? Display the following array on the page
// ? First, watch the video in the help folder.
// todo-1: In the next step, review the HTML and CSS files.
// todo-2: Iterate over the "data" array and create a card for each array index.
// todo-3: Append the created card to the element with the class "cards".
// todo-4: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".

const wrapper = document.querySelector(".cards");
const cardSelected = document.querySelector(".cardSelected");
let h1El = document.createElement("h1");
cardSelected.append(h1El);
const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];

// !Answer:

data.forEach((e, i) => {
  let divContainer = document.createElement("div");
  divContainer.classList.add("container");

  let divImage = document.createElement("div");
  divImage.classList.add("card-image");

  let divParaIcon = document.createElement("div");
  divParaIcon.classList.add("div-image-icon");

  let divBody = document.createElement("div");
  divBody.classList.add("card-body");

  let divBodyTitle = document.createElement("div");
  divBodyTitle.classList.add("card-title");

  let divFooter = document.createElement("div");
  divFooter.classList.add("card-footer");

  let divText = document.createElement("div");
  divText.classList.add("div-text");

  let images = document.createElement("img");
  images.setAttribute("src", e.src);
  images.classList.add("first-images", `imges${i + 1}`);

  let iconHeart = document.createElement("i");
  iconHeart.classList.add("ri-heart-3-line");

  let ParaIcon = document.createElement("p");
  ParaIcon.textContent = 100;
  ParaIcon.setAttribute("id", "counter");

  let h2El = document.createElement("h2");
  h2El.textContent = e.title;

  let span = document.createElement("span");
  span.textContent = "BSC";

  let accountImage = document.createElement("img");
  accountImage.setAttribute("src", e.accountImage);
  accountImage.classList.add("account-image");

  let account = document.createElement("h4");
  account.textContent = e.account;

  let button = document.createElement("button");
  let buttonIcon = document.createElement("i");
  buttonIcon.classList.add("ri-handbag-line");
  let buttonP = document.createElement("p");
  buttonP.textContent = "Please Bid";

  divParaIcon.append(iconHeart, ParaIcon);
  divImage.append(images, divParaIcon);
  divBodyTitle.append(h2El, span);
  divBody.append(divBodyTitle);
  divText.append(accountImage, account);
  button.append(buttonIcon, buttonP);
  divFooter.append(divText, button);

  divContainer.append(divImage, divBody, divFooter);
  wrapper.append(divContainer);

  accountImage.addEventListener("mousemove", () => {
    accountImage.style.borderRadius = "5rem";
  });

  accountImage.addEventListener("mouseout", () => {
    accountImage.style.borderRadius = "";
  });

  button.addEventListener("mousemove", () => {
    button.style.background = "#5142fc";
  });

  button.addEventListener("mouseleave", () => {
    button.style.background = "";
  });

  button.addEventListener("click", (element) => {
    if (h1El.textContent === `you selected card #${e.id}`) {
      h1El.style.visibility = "hidden";
    } else {
      h1El.style.visibility = "visible";
      h1El.textContent = `you selected card #${e.id}`;
    }
  });
});
