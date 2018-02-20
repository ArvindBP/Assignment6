function CreateTableFromJSON() 
{
    var col = [];
    for (var i = 0; i < text.length; i++) {
        for (var key in text[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }


    var table = document.createElement("table");

    

    var tr = table.insertRow(-1); 

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); 
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    
    for (var i = 0; i < text.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = text[i][col[j]];
        }
    }

    var divContainer = document.getElementById("showData");
    
    divContainer.appendChild(table);
    table.setAttribute("class","table table-bordered")

} 
