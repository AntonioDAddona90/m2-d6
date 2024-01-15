// ES.8: Cambia il contenuto del tag h1
function changeH1Content(newContent) {
    const h1Element = document.querySelector('h1');
    if (h1Element) {
        h1Element.textContent = newContent;
    }
}

// ES.9: Cambia l'indirizzo presente nel futuro in un altro, fittizio
function changeAddress(newAddress) {
    const addressElement = document.getElementById('address');
    if (addressElement) {
        addressElement.textContent = newAddress;
    }
}

// ES.10: Aggiungi una classe CSS ad ogni link Amazon nella tabella
function addClassToAmazonLinks(className) {
    const amazonLinks = document.querySelectorAll('a[href*="amazon"]');
    amazonLinks.forEach(link => {
        link.classList.add(className);
    });
}

// ES.11: Aggiungi/togli una classe CSS a tutte le immagini della tabella per modificare la visibilità
function toggleImageVisibilityClass() {
    const images = document.querySelectorAll('table img');
    images.forEach(image => {
        image.classList.toggle('hidden');
    });
}

// ES.12: Cambia il colore del prezzo di ogni prodotto in uno differente
function changePriceColor() {
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
        const randomColor = getRandomColor();
        price.style.color = randomColor;
    });
}

// Funzione ausiliaria per ottenere un colore casuale in formato esadecimale
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
