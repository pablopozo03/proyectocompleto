function seminuevos() {
    const dataForSelect = {
        operation: "select",
        table: "anuncios"
    };

    const idImplementacion = "AKfycbzem_JauGAaLleTB--U__KMVVebSNhzLi_F94KbKwlIf3A9wI9jSg1RHpRqz8Et5FVX";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        seminuevosTerminado
    );
}

function seminuevosTerminado(response) {

    let divSeminuevos = document.createElement("div");
    divSeminuevos.className = "seminuevos";

    for (let i = 0; i < response.values.length; i++) {
        let divSeminuevo = document.createElement("div");
        divSeminuevo.className = "seminuevo";
        divSeminuevo.setAttribute("onclick", "clickSobreAnuncio(" + response.values[i].id_anuncios + ")");
    

        let enlace = document.createElement("a");
        enlace.setAttribute("href", "info-seminuevos.html?id=" + response.values[i].id_anuncios);
        enlace.innerHTML = "Más información";

        let parrafoEnlace = document.createElement("p");
        parrafoEnlace.append(enlace);
        parrafoEnlace.className = "parrafo";

        let divEnlace = document.createElement("div");
        divEnlace.append(parrafoEnlace);
        divEnlace.className = "enlace";

        let marca_coche = document.createElement("div");
        marca_coche.className = "marca";
        marca_coche.innerHTML = "Marca: " + response.values[i].marca;

        divSeminuevo.append(marca_coche);

        let imagen = document.createElement("img");
        imagen.setAttribute("src", "imagenes-anuncios/" + response.values[i].imagen);

        let divImagen = document.createElement("div");
        divImagen.className = "imagen";

        divImagen.append(imagen);

        divSeminuevo.append(divImagen);

        divSeminuevo.append(divEnlace);

        divSeminuevos.append(divSeminuevo);

    }

    document.getElementById("container").append(divSeminuevos);
}

function clickSobreAnuncio(id) {
    window.location = "info-seminuevos.html?=id" + id;
}

seminuevos();