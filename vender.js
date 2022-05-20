function insertarAnuncio() {
    let anuncio = {
        id: document.getElementById("id").value,
        marca: document.getElementById("marca").value,
        modelo: document.getElementById("modelo").value,
        anio: document.getElementById("anio").value,
        imagen: document.getElementById("imagen").value,
        numero: document.getElementById("numero").value,
    };

    const dataForInsert = {
        operation: "insert",
        table: "misAnuncios",
        object: anuncio
    };

    const idImplementacion = "AKfycbzem_JauGAaLleTB--U__KMVVebSNhzLi_F94KbKwlIf3A9wI9jSg1RHpRqz8Et5FVX";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarAnuncioTerminado
    );
}

function insertarAnuncioTerminado(response) {
    console.log(response);
}

insertarAnuncio();