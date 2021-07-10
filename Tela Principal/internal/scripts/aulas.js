$(document).ready( () => {
    this.RESQUEST_URL_BASE = "https://pindorama.site/api/v1";
    this.$bodyContent = $('.bodyMaterias');

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
    return new URL(url).searchParams.get('aulaID');
}

function getModulosFromID() {
    const aulaID = getIdFromURL();
    const requestUrl = `${this.RESQUEST_URL_BASE}/conteudo/getConteudo/${aulaID}`;

    this.$bodyContent.append(
        `<video controls="" width="500px" autoplay="" name="media"><source src="https://pindorama.site/api/v1/conteudo/getConteudo/28" type="video/mp4"></video>`
    );
}