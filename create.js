document.getElementById("post-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const text = document.getElementById("text").value.trim();
    const categoryInput = document.querySelector("input[name='category']:checked");
    if (!categoryInput) {
        alert("Будь ласка, оберіть категорію.");
        return;
    }
    const category = categoryInput.value;
    const language = document.getElementById("language").value;
    const visible = document.getElementById("visible").checked;

    const post = {
        title,
        text,
        category,
        language,
        visible,
        date: new Date().toLocaleDateString(),
    };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));

    window.location.href = "index.html";
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.getElementById("theme-toggle").checked = true;
}

document.getElementById("theme-toggle").addEventListener("change", function () {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

