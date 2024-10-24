function loadNavbar() {
    fetch('nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = data;
            } else {
                console.error('Navbar placeholder element not found.');
            }
        })
        .catch(error => console.error('Error loading navigation:', error));
}

document.addEventListener('DOMContentLoaded', loadNavbar);
