function misAnuncios() {
    const dataForSelect = {
        operation: "select",
        table: "misAnuncios"
    };

    const idImplementacion = "AKfycbzem_JauGAaLleTB--U__KMVVebSNhzLi_F94KbKwlIf3A9wI9jSg1RHpRqz8Et5FVX";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        misAnunciosTerminado
    );
}

function misAnunciosTerminado(response) {

    let divAnuncios = document.createElement("div");
    divAnuncios.className = "anuncios";

    for (let i = 0; i < response.values.length; i++) {
        let divAnuncio = document.createElement("div");
        divAnuncio.className = "anuncio";
        divAnuncio.setAttribute("onclick", "clickSobreAnuncio(" + response.values[i].id_misAnuncios + ")");

        let marca_coche = document.createElement("div");
        marca_coche.innerHTML = "Marca: " + response.values[i].marca;

        divAnuncio.append(marca_coche);

        let modelo_coche = document.createElement("div");
        modelo_coche.innerHTML = "Modelo: " + response.values[i].modelo;

        divAnuncio.append(modelo_coche);

        let anio = document.createElement("div");
        anio.innerHTML = "Año de matriculación: " + response.values[i].anio;

        divAnuncio.append(anio);

        let numero = document.createElement("p");
        numero.innerHTML = "Nº de anuncio: " + response.values[i].numero;

        divAnuncio.append(numero);

        let imagen = document.createElement("img");
        imagen.setAttribute("src", "imagenes-mios/" + response.values[i].imagen);
        
        divAnuncio.append(imagen);

        divAnuncios.append(divAnuncio);

    }

    document.getElementById("resultado").append(divAnuncios);
}

misAnuncios();

