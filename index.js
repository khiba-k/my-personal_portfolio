function tabOne() {
    let gettabOne = document.getElementById("khiba");
    if (gettabOne)
        gettabOne.style.display = "block";

    let hidetabTwo = document.getElementById("projects");
    if (hidetabTwo)
        hidetabTwo.style.display = "none";

    let hidetabThree = document.getElementById("blog");
    if (hidetabThree)
        hidetabThree.style.display = "none";

    let ColorFont = document.getElementById("khibaButton");
    if(ColorFont)
        ColorFont.style.color = "#FFC000";

    let ChangeColorFont = document.getElementById("projectsButton");
    if(ChangeColorFont)
        ChangeColorFont.style.color = "white";

    let ChangeColorFont2 = document.getElementById("blogButton");
    if(ChangeColorFont2)
        ChangeColorFont2.style.color = "white";
}

function tabTwo() {
    let gettabTwo = document.getElementById("projects");
    if (gettabTwo)
        gettabTwo.style.display = "block";

    let hidetabOne = document.getElementById("khiba");
    if (hidetabOne)
        hidetabOne.style.display = "none";

    let hidetabThree = document.getElementById("blog");
    if (hidetabThree)
        hidetabThree.style.display = "none";

    let ColorFont = document.getElementById("projectsButton");
    if(ColorFont)
        ColorFont.style.color = "#FFC000";

    let ChangeColorFont = document.getElementById("khibaButton");
    if(ChangeColorFont)
        ChangeColorFont.style.color = "white";

    let ChangeColorFont2 = document.getElementById("blogButton");
    if(ChangeColorFont2)
        ChangeColorFont2.style.color = "white";

}

function tabThree() {
    let gettabThree = document.getElementById("blog");
    if (gettabThree)
        gettabThree.style.display = "block";

    let hidetabOne = document.getElementById("khiba");
    if (hidetabOne)
        hidetabOne.style.display = "none";

    let hidetabTwo = document.getElementById("projects");
    if (hidetabTwo)
        hidetabTwo.style.display = "none";

    let ColorFont = document.getElementById("blogButton");
    if(ColorFont)
        ColorFont.style.color = "#FFC000";

    let ChangeColorFont = document.getElementById("khibaButton");
    if(ChangeColorFont)
        ChangeColorFont.style.color = "white";

    let ChangeColorFont2 = document.getElementById("projectsButton");
    if(ChangeColorFont2)
        ChangeColorFont2.style.color = "white";

}