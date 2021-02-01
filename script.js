
function changeColor() {
        let table = document.getElementById('table');
        let cellCollection = table.getElementsByClassName('table-cell'); 
            for(let elem of cellCollection){
                elem.style.backgroundColor = colorChoice.value;
            }

            let selectedNumber = select.value;
            let selectedCell = cellCollection[selectedNumber - 1];
            selectedCell.style.backgroundColor = "rgb(250, 250, 250)";
}

button.addEventListener("click", changeColor);

