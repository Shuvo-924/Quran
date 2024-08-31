function search(){
    var searchbox,storeitems,li,i,txtValue,match;

    searchbox = document.getElementById("search0").value;
    storeitems = document.getElementById("accordion");
    li = storeitems.getElementsByTagName('li');

    for (var i=0; i < li.length; i++){
        match = li[i].getElementsByTagName("label")[0];
        txtValue = match.textContent || match.innerText || match.innerHTML;

           if (txtValue.indexOf(searchbox) > -1){
            li[i].style.display = "";
           }else{
            li[i].style.display = "none";
           }
        }
    }