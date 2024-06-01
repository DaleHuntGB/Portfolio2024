var Proj1 = document.getElementById("Proj1_Container");
var Proj2 = document.getElementById("Proj2_Container");
var Proj3 = document.getElementById("Proj3_Container");
var Proj4 = document.getElementById("Proj4_Container");
var Proj5 = document.getElementById("Proj5_Container");
var Proj6 = document.getElementById("Proj6_Container");

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
    var Arrow = document.getElementById(ID + "_Arrow");
    
    if (ParagraphContainer.style.display == "block")
    {
        ParagraphContainer.style.display = "none";
        DivContainer.style.padding = "0em";
        Arrow.style.transform = "rotate(0deg)";
    }
    else
    {
        ParagraphContainer.style.display = "block";
        DivContainer.style.padding = "1em 0em 1em 0em";
        Arrow.style.transform = "rotate(180deg)";
    }
}