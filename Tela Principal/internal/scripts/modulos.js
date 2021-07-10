$(document).ready( () => {
    this.RESQUEST_URL_BASE = "https://pindorama.site/api/v1";
    this.$bodyContent = $('#aulasContent');
    
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
    /*const moduloID = getIdFromURL();
    const requestUrl = `${this.RESQUEST_URL_BASE}/conteudo/conteudos`;

    $.ajax({
        url: requestUrl,
        success: response => {
            alert(response);
        },
        error: error => {
            console.log(error);
        }
    });*/
    const a = [{"id":28,"nome":"teste","descricao":"teste","professor":1,"materia":2,"palavras":"teste","creationdate":1625702400000,"avaliacao":0.0,"status_conteudo":0,"video":"/b3320b43-283c-409c-a3b6-6af0bc52a227/video 1.mp4","mediaType":"video/mp4"},{"id":29,"nome":"teste","descricao":"teste","professor":1,"materia":2,"palavras":"teste","creationdate":1625702400000,"avaliacao":0.0,"status_conteudo":0,"video":"/b3320b43-283c-409c-a3b6-6af0bc52a227/video 1.mp4","mediaType":"video/mp4"},{"id":30,"nome":"teste","descricao":"teste","professor":1,"materia":2,"palavras":"teste","creationdate":1625702400000,"avaliacao":0.0,"status_conteudo":0,"video":"/b3320b43-283c-409c-a3b6-6af0bc52a227/video 1.mp4","mediaType":"video/mp4"},{"id":31,"nome":"teste","descricao":"teste","professor":1,"materia":2,"palavras":"teste","creationdate":1625702400000,"avaliacao":0.0,"status_conteudo":0,"video":"/b3320b43-283c-409c-a3b6-6af0bc52a227/video 1.mp4","mediaType":"video/mp4"}];
    
    a.forEach(element => {
        this.$bodyContent.append(
            `<a class="modlink1 card d-flex flex-column justify-content-between" href="aula.html?aulaID=${element.id}">
            <span class="card d-flex flex-column justify-content-between">
                <span class="body">
                    ${element.nome}
                </span>
                <span class="modulosQuimica">
                    <p>${element.descricao}</p>
                </span>
                <span class="footer1" href="/materias/1/modulos">
                    Assistir aula
                </span>
            </span>
        </a>`
        );
    });
    return a;
}