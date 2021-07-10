$(document).ready( () => {
    this.RESQUEST_URL_BASE = "http://pindorama.site/api/v1";

    modulosEventListeners();
    modulosComponents();
    getModulosFromID();
});

function modulosEventListeners() {

}

function modulosComponents() {

}

function getIdFromURL() {
    const url = window.location.href;
    return new URL(url).searchParams.get('moduloID');
}

function getModulosFromID() {
    const moduloID = getIdFromURL();
    const requestUrl = `${this.RESQUEST_URL_BASE}/conteudo/getConteudo/${moduloID}`;

    $.ajax({
        url: requestUrl,
        success: response => {
            alert(response);
        },
        error: error => {
            console.log(error);
        }
    });
}