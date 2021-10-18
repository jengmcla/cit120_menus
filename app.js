var pages = ["Home", "About", "Interact"];
function createNav() {
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);

    document.body.appendChild(nav);

    function createButton(pg) {
        var button = document.createElement("button");
        button.innerHTML = pg;
        button.addEventListener("click", function() {
            navigate(pg);
        });
        nav.appendChild(button);
    }
 }

 function createWrapper() {
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
 }

 function navigate(pg) {
    if(pg === "Home") { // CASE SENSITIVE
        homePage();
    } else if(pg === "About") {
        aboutPage();
    } else if(pg ==="Interact") {
        interactPage();
    } else if(pg === "Homework") {
        homeworkPage();
    }
 }

 function homePage() {
     var wrapper = document.body.querySelector(".wrapper"); // works bc this var is exclusive to this function
     wrapper.innerHTML = "";
     var header = document.createElement("h1");
     header.innerHTML = "Hello world!";
     wrapper.appendChild(header);
 }

function aboutPage() {
    var wrapper = document.body.querySelector(".wrapper"); // works bc this var is exclusive to this function
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    var info = document.createElement("h3");
    header.innerHTML = "About me";
    info.innerHTML = "My name is Jenna.";
    wrapper.appendChild(header);
    wrapper.appendChild(info);
}

function interactPage() {
    var wrapper = document.body.querySelector(".wrapper"); // works bc this var is exclusive to this function
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    var button = document.createElement("button");
    button.innerHTML = "Click me!";
    button.classList.add("click");
    var counter = document.createElement("p");
    var counterAdd = 0;
    button.addEventListener("click", function () {
        counterAdd += + 1;
        counter.innerHTML = counterAdd;
    });
    counter.innerHTML = counterAdd;
    header.innerHTML = "Interact";
    wrapper.appendChild(header);
    wrapper.appendChild(button);
    wrapper.appendChild(counter);
    wrapper.appendChild(counterAdd);
}

createNav();
createWrapper(); // have wrapper on bottom so it's below nav
navigate("Home"); // has home as default