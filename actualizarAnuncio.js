function update() {
    let key           = document.getElementById("key").value;
    let columnName1   = document.getElementById("columnName1").value;
    let columnValue1  = document.getElementById("columnValue1").value;
    let columnName2   = document.getElementById("columnName2").value;
    let columnValue2  = document.getElementById("columnValue2").value;
    
    const newRow = {};

    if (columnName1) {
        newRow[columnName1] = columnValue1;
    }

    if (columnName2) {
        newRow[columnName2] = columnValue2;
    }


    const dataForSelect = {
        operation: "update",
        table: "misAnuncios",
        key: key,
        object: newRow
    };

    document.getElementById("error").innerHTML = "Esperando resultado...";
    document.getElementById("message").innerHTML = "Esperando resultado...";

    GoogleSheetDataBaseOperation(
        "AKfycbzem_JauGAaLleTB--U__KMVVebSNhzLi_F94KbKwlIf3A9wI9jSg1RHpRqz8Et5FVX",
        dataForSelect,
        updateFinished);
}

function updateFinished(response) {
    document.getElementById("error").innerHTML = response.error;
    document.getElementById("message").innerHTML = response.message;
}

update();
