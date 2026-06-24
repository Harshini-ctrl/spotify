// Spotify Clone UI Interactions

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Card Hover Animation
    // ==========================

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "0.3s";
            card.style.backgroundColor = "#333";
            card.style.cursor = "pointer";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.backgroundColor = "#232323";
        });

        card.addEventListener("click", () => {

            card.style.boxShadow =
                "0px 0px 15px rgba(29,185,84,0.8)";

            setTimeout(() => {
                card.style.boxShadow = "none";
            }, 1000);

        });

    });

    // ==========================
    // Navigation Hover Effect
    // ==========================

    const navOptions =
        document.querySelectorAll(".nav-option");

    navOptions.forEach(option => {

        option.addEventListener("mouseenter", () => {
            option.style.backgroundColor = "#232323";
            option.style.borderRadius = "10px";
        });

        option.addEventListener("mouseleave", () => {
            option.style.backgroundColor = "transparent";
        });

    });

    // ==========================
    // Library Icon Animation
    // ==========================

    const icons =
        document.querySelectorAll(".icons i");

    icons.forEach(icon => {

        icon.addEventListener("click", () => {

            icon.style.transform = "rotate(360deg)";
            icon.style.transition = "0.5s";

            setTimeout(() => {
                icon.style.transform = "rotate(0deg)";
            }, 500);

        });

    });

    // ==========================
    // Sticky Navbar Shadow
    // ==========================

    const stickyNav =
        document.querySelector(".sticky-nav");

    const mainContent =
        document.querySelector(".main_content");

    if (mainContent) {

        mainContent.addEventListener("scroll", () => {

            if (mainContent.scrollTop > 20) {
                stickyNav.style.boxShadow =
                    "0px 4px 10px rgba(0,0,0,0.5)";
            } else {
                stickyNav.style.boxShadow = "none";
            }

        });

    }

    // ==========================
    // Dynamic Greeting
    // ==========================

    const greeting =
        document.createElement("h2");

    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.innerText = "Good Morning";
    }
    else if (hour < 18) {
        greeting.innerText = "Good Afternoon";
    }
    else {
        greeting.innerText = "Good Evening";
    }

    greeting.style.marginTop = "10px";

    const heading =
        document.querySelector(".main_content h2");

    if (heading) {
        heading.before(greeting);
    }

    // ==========================
    // Button Hover Effects
    // ==========================

    const buttons =
        document.querySelectorAll(".badge");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.08)";
            button.style.transition = "0.2s";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });

    });

    // ==========================
    // Footer Dynamic Text
    // ==========================

    const footer =
        document.querySelector(".footer");

    if (footer) {

        footer.innerHTML = `
            <div style="text-align:center;">
                <p>Spotify Clone UI Project</p>
                <p>© ${new Date().getFullYear()}</p>
            </div>
        `;

    }

    // ==========================
    // Double Click Like Effect
    // ==========================

    cards.forEach(card => {

        card.addEventListener("dblclick", () => {

            const like =
                document.createElement("div");

            like.innerText = "❤️";

            like.style.fontSize = "2rem";
            like.style.position = "absolute";
            like.style.zIndex = "100";

            card.appendChild(like);

            setTimeout(() => {
                like.remove();
            }, 1000);

        });

    });

    // ==========================
    // Keyboard Shortcut
    // ==========================

    document.addEventListener("keydown", (event) => {

        if (event.key === "h") {

            alert("Home Shortcut Pressed");

        }

    });

});