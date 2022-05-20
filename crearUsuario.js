function insertarUsuario() {
    let anuncio = {
        id_usuario: document.getElementById("id").value,
        usuario: document.getElementById("usuario").value,
        contrasenia: document.getElementById("contrasenia").value,
        
    };

    const dataForInsert = {
        operation: "insert",
        table: "usuarios",
        object: anuncio
    };

    const idImplementacion = "AKfycbzem_JauGAaLleTB--U__KMVVebSNhzLi_F94KbKwlIf3A9wI9jSg1RHpRqz8Et5FVX";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarUsuarioTerminado
    );
}

function insertarUsuarioTerminado(response) {
    console.log(response);
}

insertarUsuario();