document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Спасибо, " + name + "! Ваше сообщение отправлено.");
            form.reset();
        } else {
            alert("Пожалуйста, заполните все поля.");
        }
    });

    // Анимация курсора
    document.addEventListener("mousemove", function (e) {
        const cursor = document.createElement("div");
        cursor.classList.add("cursor-effect");
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        document.body.appendChild(cursor);
        setTimeout(() => cursor.remove(), 500);
    });

    // Плавный скролл
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
