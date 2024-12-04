const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#logout").addEventListener("click", logout);
const commit = async (e) => {
  e.preventDefault();
  console.log(e.target);
  const button = e.target.querySelector("button");
  const comment = e.target.querySelector("textarea").value;
  const response = await fetch(`/posts/${button.value}/comments`, {
    method: "POST",
    body: JSON.stringify({ comment }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  }
};
document.querySelector("#commets").addEventListener("submit", commit);
