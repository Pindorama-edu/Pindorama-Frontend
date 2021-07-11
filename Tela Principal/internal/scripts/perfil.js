$(document).ready( () => {
    this.$perfilEmail = $('#perfilEmail');
    this.$perfilPassword = $('#perfilPassword');
    this.$perfilAniversario = $('#perfilAniversario');
    this.$updatePerfil = $('#updatePerfil');
    this.$welcomeText = $('#welcomeText');

    loadPerfilData();
    initializePerfilListeners();    
});

function initializePerfilListeners () {
    this.$updatePerfil.addEventListener( event => {
        updateUserData();
    });
}

function loadPerfilData () {
    $.ajax({
        url: 'https://pindorama.site/api/v1/usuario/froste.lima@gmail.com',
        success: response => {
            this.$perfilAniversario.val(new Date(response['birthDate'] * 1000));
            this.$perfilEmail.val(response['username']);
            this.$welcomeText.val(`Bem vindo, ${response['username']}`)
        },
        error: error => {
            console.log(error);
        }
    });
}

function updateUserData () {
    const data = {
        'email': this.$perfilEmail.text(),
        'senha': this.$perfilPassword.text(),
        'birthdate': this.$perfilAniversario .text()
    }

    $.ajax({
        url: 'https://pindorama.site/api/v1/usuario/update',
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        data: JSON.parse(data),
        success: response => {
            alert('Usuario alterado com sucesso');
        },
        error: error => {
            console.log(error);
        }
    });
}