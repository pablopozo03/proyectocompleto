function consultarAnuncio() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const idAnuncio = urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "anuncios",
        key: idAnuncio
    };

    const idImplementacion = "AKfycbzem_JauGAaLleTB--U__KMVVebSNhzLi_F94KbKwlIf3A9wI9jSg1RHpRqz8Et5FVX";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarAnuncioTerminado
    );
}

function consultarAnuncioTerminado(response) {
    document.getElementById("vendedor").innerHTML = "Vendedor: " + response.value.nombre;
    document.getElementById("marca").innerHTML = "Marca: " + response.value.marca;
    document.getElementById("modelo").innerHTML = "Modelo: " + response.value.modelo;
    document.getElementById("color").innerHTML = "Color: " + response.value.color;
    document.getElementById("anio").innerHTML = "Año de matriculación: " + response.value.anio;
    document.getElementById("imagen").setAttribute("src", "imagenes-anuncios/" + response.value.imagen);
}

consultarAnuncio();