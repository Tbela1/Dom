console.log(document.getElementById('main-heading'));
var mainHeading = document.getElementById('main-heading');
console.log(mainHeading);
mainHeading.textContent ='New DOM Layout';
document.getElementById('main-heading').classList.remove("bg-dark");
document.getElementById('main-heading').classList.add("bg-success");


document.getElementById("para1").textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

document.getElementById("para2").textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

document.getElementById("btn").onclick = function() {'click',myFunction()};

function myFunction () {
    var new_p = document.createElement("p")
    new_p.textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."
}

document.getElementById('red').classList.remove("bg-white");
document.getElementById('blue').classList.remove("bg-white");
document.getElementById('yellow').classList.remove("bg-white");
document.getElementById('green').classList.remove("bg-white");
document.getElementById('black').classList.remove("bg-white");

document.getElementById('red').classList.add("bg-danger");
document.getElementById('blue').classList.add("bg-primary");
document.getElementById('yellow').classList.add("bg-warning");
document.getElementById('green').classList.add("bg-success");
document.getElementById('black').classList.add("bg-dark");

