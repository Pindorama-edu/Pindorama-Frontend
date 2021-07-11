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
    const requestUrl = `/api/v1/conteudo/getConteudo/${aulaID}`;

    this.$bodyContent.append(`<video controls="" width="500px" autoplay="" name="media"><source src="${requestUrl}" type="video/mp4"></video>`);

    // $.ajax({
    //     url: requestUrl,
    //     success: response => {
    //         console.log(response);
    //         this.$bodyContent.append(
    //             `<video controls="" width="500px" autoplay="" name="media"><source src="${response}" type="video/mp4"></video>`
    //         );
    //     },
    //     error: error => {
    //         console.log(error);
    //     }
    // });
}