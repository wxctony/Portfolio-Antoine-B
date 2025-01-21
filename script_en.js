document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-select');

    // Vérifier si on est sur la page d'accueil (index.html ou racine "/")
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
        if (langSelect) {
            langSelect.style.display = 'block';  // Afficher le sélecteur de langue
        }
    } else {
        if (langSelect) {
            langSelect.style.display = 'none';   // Cacher le sélecteur sur les autres pages
        }
    }

    // Fonction pour changer la langue sur toutes les pages
    function changeLanguage(lang) {
        document.querySelectorAll('[data-lang-fr], [data-lang-en]').forEach(el => {
            el.innerHTML = el.getAttribute(`data-lang-${lang}`);
        });

        // Sauvegarder la langue choisie dans le localStorage pour conserver le choix sur toutes les pages
        localStorage.setItem('selectedLang', lang);

        // Mise à jour des liens pour inclure le paramètre de langue
        document.querySelectorAll('a').forEach(link => {
            const url = new URL(link.href);
            url.searchParams.set('lang', lang);
            link.href = url.toString();
        });
    }

    // Vérifier si une langue est déjà enregistrée ou présente dans l'URL, sinon forcer le français par défaut
    const urlParams = new URLSearchParams(window.location.search);
    let selectedLang = urlParams.get('lang') || localStorage.getItem('selectedLang');

    // Si aucune langue n'est définie, forcer le français et mettre à jour l'URL
    if (!selectedLang) {
        selectedLang = 'fr';
        localStorage.setItem('selectedLang', selectedLang);

        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('lang', selectedLang);
        window.history.replaceState({}, '', newUrl);
    }

    if (langSelect) {
        // Mettre à jour le sélecteur de langue avec la langue actuelle (seulement si sur l'accueil)
        langSelect.value = selectedLang;
    }
    
    changeLanguage(selectedLang);

    // Gestion du changement de langue par l'utilisateur
    if (langSelect) {
        langSelect.addEventListener('change', (event) => {
            selectedLang = event.target.value;
            changeLanguage(selectedLang);

            // Mise à jour de l'URL sans recharger la page
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set('lang', selectedLang);
            window.history.replaceState({}, '', newUrl);
        });
    }
});