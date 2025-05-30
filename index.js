document.addEventListener("DOMContentLoaded", function () {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    const container = document.getElementById("posts-container");
    const body = document.body;

    function renderPosts() {
        container.innerHTML = "";
        posts.forEach((post, index) => {
            const row = `
            <tr>
                <td>${post.title}</td>
                <td>${post.category}</td>
                <td>${post.date || new Date().toLocaleDateString()}</td>
                <td>
                    <button class="btn" onclick="editPost(${index})">Редагувати</button>
                    <button class="btn delete" onclick="deletePost(${index})">Видалити</button>
                </td>
            </tr>
            `;
            container.innerHTML += row;
        });
    }

    window.deletePost = function (index) {
        posts.splice(index, 1);
        localStorage.setItem("posts", JSON.stringify(posts));
        renderPosts();
    };

    window.editPost = function (index) {
        const newTitle = prompt("Введіть новий заголовок:", posts[index].title);
        if (newTitle) {
            posts[index].title = newTitle;
            localStorage.setItem("posts", JSON.stringify(posts));
            renderPosts();
        }
    };

    document.querySelector(".toggle-theme").onclick = function () {
        body.classList.toggle("light");
        localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
    };

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light");
    }

    renderPosts();
});

