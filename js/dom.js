document.getElementById("apply-bg").addEventListener("click", function () {
  //   console.log("apply-bg");
  const friends = document.getElementsByClassName("friend");
  //   console.log(friends);
  for (const friend of friends) {
    // console.log(friend);
    friend.style.backgroundColor = "lightblue";
    // friend.style.textAlign = "center";
  }
});

document.getElementById("center-third").addEventListener("click", function () {
  //   console.log("center-third");
  const thirdFriend = document.getElementById("third-friend");
  //   console.log(thirdFriend);
  thirdFriend.style.textAlign = "center";
});

document.getElementById("add-friend").addEventListener("click", function () {
  //   console.log("add-friend");
  const friendContainer = document.getElementById("friends");
  const friend = document.createElement("div");
  friend.classList.add("friend");
  friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Something new added</p>
  `;
  friendContainer.appendChild(friend);
});
