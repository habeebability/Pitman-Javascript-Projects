function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";

    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;

        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;

        case "Green":
            Color_Output = "Green" + Color_String;
            break;

        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;

        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;

        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;

        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }

    document.getElementById("Output").innerHTML = Color_Output;
}

// change text
function changeText() {
    var elements = document.getElementsByClassName("text");
    elements[0].innerHTML = "Text changed using getElementsByClassName()";
}

// canvas

window.onload = function() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    // Draw a filled rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 150, 100);
};