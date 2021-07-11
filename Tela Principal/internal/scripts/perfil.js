$(document).ready( () => {
    this.$perfilEmail = $('#perfilEmail');
    this.$perfilPassword = $('#perfilPassword');
    this.$perfilAniversario = $('#perfilAniversario');
    this.$updatePerfil = $('#updatePerfil');
    this.$welcomeText = $('#welcome');

    loadPerfilData();
    initializePerfilListeners();    
});

function initializePerfilListeners () {
    this.$updatePerfil.on('click', event => {
        updateUserData();
    });
}

function loadPerfilData () {
    $.ajax({
        url: 'https://pindorama.site/api/v1/usuario/froste.lima@gmail.com',
        success: response => {
            const date = new Date(response['birthDate']);
            const day = transformDate(date.getDay());
            const month = transformDate(date.getMonth());
            this.$perfilAniversario.val(`${date.getFullYear()}-${month}-${day}`);
            this.$perfilEmail.val(response['email']);
            this.$welcomeText.text(`Bem vindo, ${response['username']}`);
        },
        error: error => {
            console.log(error);
        }
    });
}

function transformDate (number) {
    if (number < 10) {
        return `0${number}`;
    }

    return number;
}

function updateUserData () {
    const data = {
        'email': this.$perfilEmail.val(),
        'senha': this.$perfilPassword.val(),
        'birthdate': this.$perfilAniversario.val()
    }

    $.ajax({
        url: 'https://pindorama.site/api/v1/usuario/update',
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        data: JSON.stringify(data),
        success: response => {
            alert('Usuario alterado com sucesso');
        },
        error: error => {
            console.log(error);
        }
    });
}