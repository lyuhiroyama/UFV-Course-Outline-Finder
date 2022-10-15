
let searchInput = document.getElementById("searchbox")

searchInput.addEventListener("keyup", filterInput)

function filterInput() {
    let searchValue = document.getElementById('searchbox').value.toUpperCase()


    let li = document.querySelectorAll('li');

    for(let i=0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(searchValue) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}




