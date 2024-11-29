// funcoes.js

// Função de autocomplete para inputs
function autocomplete(inputId, suggestions) {
    const input = document.getElementById(inputId);

    // Cria a lista de sugestões
    input.addEventListener('input', function () {
        const value = this.value.toLowerCase();
        const dataList = document.getElementById(inputId + '-list');
        if (!dataList) {
            const newList = document.createElement('ul');
            newList.id = inputId + '-list';
            newList.classList.add('autocomplete-list');
            this.parentNode.appendChild(newList);
        }

        const list = document.getElementById(inputId + '-list');
        list.innerHTML = ''; // Limpa sugestões anteriores

        suggestions.forEach(suggestion => {
            if (suggestion.toLowerCase().includes(value)) {
                const item = document.createElement('li');
                item.textContent = suggestion;
                item.classList.add('autocomplete-item');
                item.addEventListener('click', () => {
                    input.value = suggestion; // Define o valor do input
                    list.innerHTML = ''; // Limpa a lista
                });
                list.appendChild(item);
            }
        });
    });
}

// Função para carregar imagem no canvas
function loadImage(inputId, canvasId) {
    const input = document.getElementById(inputId);
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    input.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const img = new Image();
            img.onload = function () {
                // Redimensiona a imagem no canvas
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            };
            img.src = URL.createObjectURL(file);
        }
    });
}

// Exemplo de chamada:
// autocomplete('myInput', ['Apple', 'Banana', 'Cherry']);
// loadImage('fileInput', 'imageCanvas');
