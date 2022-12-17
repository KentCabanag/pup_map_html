function showSceneryBox(imgSource, heading, description) {
    let show = document.getElementById("display");
    let show1 = document.getElementById("body");
    show1.style.overflow = "hidden";
    document.addEventListener('mousemove', displayFollowCamera);
    show.style.left = event.clientX + 10 + "px";
    show.style.top = event.clientY + -150 + "px";
    show.innerHTML = "<div id = 'wrapper'><img id='imgid' src='"+ imgSource +"'>" + "<p id='heading'>" + heading +
    "</p>" + "<p id='description'>" + description + "</p></div>";
}

function displayFollowCamera() {
    let follow = document.getElementById('display');
    follow.style.left = event.clientX + 10 + "px";
    follow.style.top = event.clientY + -150 + "px";
}

function removeSceneryBox() {
    let follow1 = document.getElementById("display");
    let box = document.getElementById("body");
    follow1.removeAttribute('style');
    box.removeAttribute('style');
    document.removeEventListener('mousemove', displayFollowCamera);
    follow1.removeChild(follow1.childNodes[0]);
}

