function opennav()
{
    document.getElementById("sidebar").style.width = "230px";
    document.getElementById("opensidebar").style.marginLeft = "230px";
    document.getElementById("openmenu").style.display = "none"
}
function closenav()
{
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("opensidebar").style.marginLeft = "0";
    document.getElementById("openmenu").style.display = "inline";
    
}
function opennavbar()
{
    var x = document.getElementById("mynavbar");
    if(x.className === "navbar") {
        x.className += "responsive";
    } else {
        x.className = "navbar";
    }
}