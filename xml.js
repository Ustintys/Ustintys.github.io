let xml = new XMLHttpRequest();
xml.open("GET", "https://raw.githubusercontent.com/Ustintys/Ustintys.github.io/master/XML.xml", false);
xml.send();
let datas = xml.responseXML.querySelector("information");
Array.from(document.getElementsByClassName("middle-info-name"))[0].innerHTML = xml.responseXML.querySelector("information").children[0].innerHTML;
