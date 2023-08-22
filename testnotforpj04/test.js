document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner le formulaire et les champs de texte
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Vérifier si le formulaire a été trouvé
    if (form) {
        // Écouter l'événement de soumission du formulaire
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Empêcher le comportement par défaut du formulaire

            // Récupérer les valeurs des champs
            const usernameValue = usernameInput.value;
            const passwordValue = passwordInput.value;

            // Stocker les valeurs dans le local storage
            localStorage.setItem("co-mail", usernameValue);
            localStorage.setItem("co-mdp", passwordValue);

            // Rediriger vers index.html
            window.location.href = "index.html";
        });
    }
});
