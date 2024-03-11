function loadUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  const ul = document.getElementById("userList");
  for (const user of data) {
    console.log(user.name);

    const li = document.createElement("li");
    li.innerText = user.email;
    ul.appendChild(li);
  }
}
