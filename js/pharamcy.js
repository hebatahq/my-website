function myFunction() {
    var input, filter,txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div= document.getElementById("search");
    for (i = 0; i < h3.length; i++) {
        h3 = [i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            h3[i].style.display = "";
        } else {
            h3[i].style.display = "none";
        }
    }
}