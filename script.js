function search(){
    var srchicon,searchbox,storeitems,li,i,txtValue,match;
    srchicon = document.querySelector(".srch");
    storeitems = document.getElementById("accordion");
    li = storeitems.getElementsByTagName('li');
    if (srchicon.classList.contains("srch1")) {
      searchbox = document.getElementById("search1").value;
    }
    else{
      searchbox = document.getElementById("search0").value;
    }
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