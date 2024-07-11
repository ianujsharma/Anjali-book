function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach((element) => {
        const file = element.getAttribute('data-include');
        if (file) {
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    element.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading file:', error);
                    element.innerHTML = `<div>Error loading ${file}: ${error.message}</div>`;
                });
        }
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);
