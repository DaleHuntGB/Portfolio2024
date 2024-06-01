var Proj1 = document.getElementById("Proj1");
var Proj2 = document.getElementById("Proj2");
var Proj3 = document.getElementById("Proj3");
var Proj4 = document.getElementById("Proj4");
var Proj5 = document.getElementById("Proj5");
var Proj6 = document.getElementById("Proj6");

Proj1.addEventListener("click", lambda => ExpandDropdown("Proj1"));
Proj2.addEventListener("click", lambda => ExpandDropdown("Proj2"));
Proj3.addEventListener("click", lambda => ExpandDropdown("Proj3"));
Proj4.addEventListener("click", lambda => ExpandDropdown("Proj4"));
Proj5.addEventListener("click", lambda => ExpandDropdown("Proj5"));
Proj6.addEventListener("click", lambda => ExpandDropdown("Proj6"));

function ExpandDropdown(ID)
{
    var ParagraphContainer = document.getElementById(ID + "_Content");
    var DivContainer = document.getElementById(ID);
    
    if (ParagraphContainer.style.display == "block")
    {
        ParagraphContainer.style.display = "none";
        DivContainer.style.padding = "0em";
    }
    else
    {
        ParagraphContainer.style.display = "block";
        DivContainer.style.padding = "1em";
    }
}