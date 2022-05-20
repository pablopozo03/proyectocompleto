function deleteAnuncio(){
    
    let key = document.getElementById("key").value;

    const dataForSelect = {
        operation: "delete",
        table: "misAnuncios",
        key: key
    };

    document.getElementById("error").innerHTML = "Espere...";
    document.getElementById("message").innerHTML = "Espere...";

    GoogleSheetDataBaseOperation(
        "AKfycbzem_JauGAaLleTB--U__KMVVebSNhzLi_F94KbKwlIf3A9wI9jSg1RHpRqz8Et5FVX",
        dataForSelect,
        deleteAcabado
    );
}

function deleteAcabado(response) {
    document.getElementById("error").innerHTML = response.error;
    document.getElementById("message").innerHTML = response.message;
}

deleteAnuncio;


