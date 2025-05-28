var id = null;
function myMove() {
    var elem = document.querySelector(".view");
    var buttons = document.querySelectorAll("button");
    var button = document.getElementById("viewbutton");
    var reversebutton = document.getElementById("reverseviewbutton");
    var pos = 967;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 272) {
            clearInterval(id);
            elem.style.zIndex= 1;
            buttons.forEach(buttons => buttons.disabled = false);
            button.disabled = true;
            reversebutton.disabled = false;
        } else {
            pos--;
            rot -= 0.0056;
            buttons.forEach(buttons => buttons.disabled = true);
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
        }
    }
}
function myMove2() {
    var elem = document.querySelector(".view2");
    var buttons = document.querySelectorAll("button");
    var button = document.getElementById("viewbutton2");
    var reversebutton = document.getElementById("reverseviewbutton2");
    var pos = 967;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 272) {
            clearInterval(id);
            elem.style.zIndex = 2;
            buttons.forEach(buttons => buttons.disabled = false);
            button.disabled = true;
            reversebutton.disabled = false;
        } else {
            pos--;
            rot -= 0.0043;
            buttons.forEach(buttons => buttons.disabled = true);
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
        }
    }
}
function myMove3() {
    var elem = document.querySelector(".view3");
    var buttons = document.querySelectorAll("button");
    var button = document.getElementById("viewbutton3");
    var reversebutton = document.getElementById("reverseviewbutton3");
    var pos = 967;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 272) {
            clearInterval(id);
            elem.style.zIndex = 3;
            buttons.forEach(buttons => buttons.disabled = false);
            button.disabled = true;
            reversebutton.disabled = false;
        } else {
            pos--;
            rot -= 0.003;
            buttons.forEach(buttons => buttons.disabled = true);
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
            elem.style.zIndex = 7;
        }
    }
}
function myMove4() {
    var elem = document.querySelector(".view4");
    var buttons = document.querySelectorAll("button");
    var button = document.getElementById("viewbutton4");
    var reversebutton = document.getElementById("reverseviewbutton4");
    var pos = 967;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 272) {
            clearInterval(id);
            buttons.forEach(buttons => buttons.disabled = false);
            button.disabled = true;
            reversebutton.disabled = false;
        } else {
            pos--;
            rot -= 0.0085;
            buttons.forEach(buttons => buttons.disabled = true);
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
            elem.style.zIndex = 4;
        }
    }
}
function myMove5() {
    var elem = document.querySelector(".view5");
    var buttons = document.querySelectorAll("button");
    var button = document.getElementById("viewbutton5");
    var reversebutton = document.getElementById("reverseviewbutton5");
    var pos = 967;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 272) {
            clearInterval(id);
            buttons.forEach(buttons => buttons.disabled = false);
            button.disabled = true;
            reversebutton.disabled = false;
        } else {
            pos--;
            rot -= 0.00575;
            buttons.forEach(buttons => buttons.disabled = true);
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
            elem.style.zIndex = 5;
        }
    }
}
function myMove6() {
    var elem = document.querySelector(".view6");
    var buttons = document.querySelectorAll("button");
    var button = document.getElementById("viewbutton6");
    var reversebutton = document.getElementById("reverseviewbutton6");
    var pos = 967;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 272) {
            clearInterval(id);
            buttons.forEach(buttons => buttons.disabled = false);
            button.disabled = true;
            reversebutton.disabled = false;
        } else {
            pos--;
            rot -= 0.003;
            buttons.forEach(buttons => buttons.disabled = true);
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
            elem.style.zIndex = 6;
        }
    }
}
function myReverseMove() {
    var elem = document.querySelector(".view");
    var buttons = document.querySelectorAll("button");
    var button = document.getElementById("viewbutton");
    var reversebutton = document.getElementById("reverseviewbutton");
    var pos = 272;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 967) {
            clearInterval(id);
            elem.style.zIndex= 1;
            buttons.forEach(buttons => buttons.disabled = false);
            button.disabled = false;
            reversebutton.disabled = true;
            elem.style.zIndex= 8;
        } else {
            pos++;
            rot += -0.0015;
            buttons.forEach(buttons => buttons.disabled = true);
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
            elem.style.zIndex= 8;
        }
    }
}
function myReverseMove2() {
    var elem = document.querySelector(".view2");
    var buttons = document.querySelectorAll("button");
    var button = document.getElementById("viewbutton2");
    var reversebutton = document.getElementById("reverseviewbutton2");
    var pos = 272;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 967) {
            clearInterval(id);
            elem.style.zIndex= 1;
            buttons.forEach(buttons => buttons.disabled = false);
            button.disabled = false;
            reversebutton.disabled = true;
            elem.style.zIndex= 7;
        } else {
            pos++;
            rot += 0.0056;
            buttons.forEach(buttons => buttons.disabled = true);
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
            elem.style.zIndex= 7;
        }
    }
}
function myReverseMove3() {
    var elem = document.querySelector(".view3");
    var buttons = document.querySelectorAll("button");
    var button = document.getElementById("viewbutton3");
    var reversebutton = document.getElementById("reverseviewbutton3");
    var pos = 272;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 967) {
            clearInterval(id);
            elem.style.zIndex= 1;
            buttons.forEach(buttons => buttons.disabled = false);
            button.disabled = false;
            reversebutton.disabled = true;
            elem.style.zIndex= 4;
        } else {
            pos++;
            rot += 0.0056;
            buttons.forEach(buttons => buttons.disabled = true);
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
            elem.style.zIndex= 4;
        }
    }
}
function myReverseMove4() {
    var elem = document.querySelector(".view4");
    var buttons = document.querySelectorAll("button");
    var button = document.getElementById("viewbutton4");
    var reversebutton = document.getElementById("reverseviewbutton4");
    var pos = 272;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 967) {
            clearInterval(id);
            buttons.forEach(buttons => buttons.disabled = false);
            button.disabled = false;
            reversebutton.disabled = true;
            elem.style.zIndex= 3;
        } else {
            pos++;
            rot += 0.0056;
            buttons.forEach(buttons => buttons.disabled = true);
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
            elem.style.zIndex= 3;
        }
    }
}
function myReverseMove5() {
    var elem = document.querySelector(".view5");
    var buttons = document.querySelectorAll("button");
    var button = document.getElementById("viewbutton5");
    var reversebutton = document.getElementById("reverseviewbutton5");
    var pos = 272;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 967) {
            clearInterval(id);
            buttons.forEach(buttons => buttons.disabled = false);
            button.disabled = false;
            reversebutton.disabled = true;
            elem.style.zIndex= 2;
        } else {
            pos++;
            rot += 0.0056;
            buttons.forEach(buttons => buttons.disabled = true);
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
        }
    }
}
function myReverseMove6() {
    var elem = document.querySelector(".view6");
    var buttons = document.querySelectorAll("button");
    var button = document.getElementById("viewbutton6");
    var reversebutton = document.getElementById("reverseviewbutton6");
    var pos = 272;
    var rot = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 967) {
            clearInterval(id);
            buttons.forEach(buttons => buttons.disabled = false);
            button.disabled = false;
            reversebutton.disabled = true;
            elem.style.zIndex= 1;
        } else {
            pos++;
            rot += 0.0056;
            buttons.forEach(buttons => buttons.disabled = true);
            elem.style.left = pos + 'px';
            elem.style.transform = 'rotate(' + rot + 'deg)';
        }
    }
}