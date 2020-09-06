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
function openlogin()
{
    document.getElementById("loginform").style.display = "block";
}
function opensignup()
{
    document.getElementById("signupform").style.display = "block";
}
function closeform()
{
    document.getElementById("signupform").style.display = "none";
    document.getElementById("loginform").style.display = "none";
}
window.onclick = function(event)
{
    if (event.target == sign)
    {
        sign.style.display = "none"
    }
}