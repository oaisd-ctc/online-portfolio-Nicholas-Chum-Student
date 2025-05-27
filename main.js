var id = null;
function myMove() {
    var elem = document.querySelector(".view");
    var pos = 967;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 272) {
            clearInterval(id);
            elem.style.zIndex= 1;
        } else {
            pos--;
            rot -= 0.0056;
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
        }
    }
}
function myMove2() {
    var elem = document.querySelector(".view2");
    var pos = 967;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 272) {
            clearInterval(id);
        } else {
            pos--;
            rot -= 0.0043;
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
        }
    }
}
function myMove3() {
    var elem = document.querySelector(".view3");
    var pos = 967;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 272) {
            clearInterval(id);
        } else {
            pos--;
            rot -= 0.003;
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
            elem.style.zIndex = 3;
        }
    }
}