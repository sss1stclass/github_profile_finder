const img = document.querySelector("img");
const h2 = document.querySelector("h2");
const p = document.querySelector("p");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const input = document.querySelector("input");

function displayUI(data) {
  img.src = data.avatar_url;
  h2.innerText = data.name;
  p.innerText = `Current Working Company: ${data.company}`;
  followers.innerText = `Followers :      ${data.followers}`;
  following.innerText = `Following :      ${data.following}`;
}

function handleclicked(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${event.target.value}`);

    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      console.log(userData);
      displayUI(userData);
    };

    xhr.send();
    event.target.value = '';
  }
}

input.addEventListener("keyup", handleclicked);
