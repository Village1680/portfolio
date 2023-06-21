 var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            this.style = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.style.borderColor = "#2B7A78";
            this.style.backgroundColor = "#2B7A78";
            this.style.color = "#000";
        }
    });
}