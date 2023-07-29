function adicionarMembro() {
    const nome = document.getElementById('novo-membro').value;
    const aniversario = document.getElementById('novo-bday').value;

    if (nome && aniversario) {
        const equipeList = document.getElementById('equipeList');

        const novoMembroDiv = document.createElement('div');
        novoMembroDiv.className = 'membro';
        novoMembroDiv.innerHTML = `<span>${nome}</span>
                                    <ion-icon name="remove-circle-outline" class="remove-icon" onclick="removerMembro(this)"></ion-icon>`;

        equipeList.appendChild(novoMembroDiv);

        document.getElementById('novo-membro').value = '';
        document.getElementById('novo-bday').value = '';
    }
}

function removerMembro(element) {
    const membroDiv = element.parentNode;
    membroDiv.parentNode.removeChild(membroDiv);
}