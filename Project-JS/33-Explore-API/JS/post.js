function usersPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}
function displayPost(posts) {
  const Container = document.getElementById("postContainer");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add('post')
    console.log(post);
    div.innerHTML = `
   <h4>Users-${post.userId}</h4>
   <h3>Post:${post.title}</h3>
   <p>Post Description : ${post.body}</p>`;
    Container.appendChild(div);
  }
}
usersPost();
