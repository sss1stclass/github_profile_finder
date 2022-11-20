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
      displayUI(userData);

      // console.log(usdata);
      //   console.log(userData.login);
      // console.log(userData.node_id);
    };

    xhr.onloadstart = function () {
      console.log("Loading started");
    };
    xhr.onloadend = function () {
      console.log("The site is completely loaded");
    };
    xhr.onerror = function () {
      console.log("Something went wrong");
    };

    xhr.send();
    event.target.value = '';
  }
}

input.addEventListener("keyup", handleclicked);

// 2ALR09MeDf3v44ty98LMUOBGDOm4Twy83hB1EvRdzls  ----------------access key

// https://api.unsplash.com/photos/random
