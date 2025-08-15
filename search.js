
document.addEventListener("DOMContentLoaded", () => {
    const search = document.querySelector("#search")
    search.focus();

    search.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            let query = search.value.trim();

            const urlPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (urlPattern.test(query)) {
                if (!/^https?:\/\//i.test(query)) {
                    query = "https://" + query;
                }
                window.location.href = query;
            } else {
                window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
            }
        }
    });
});