window.addEventListener('load', eventWindowLoaded, false);
function eventWindowLoaded(){
    canvasApp();
}

function canvasSupport(){
    return Modernizr.canvas;
}

function canvasApp(){
    if ( !canvasSupport()){
        return;
    }else {
        var theCanvas = document.getElementById('canvas');
        var context = theCanvas.getContext("2d");
    }
    drawScreen();

    function drawScreen(){
        // test rectangle        
        context.fiilStyle = "#000000";
        context.strokeStyle = "#ff00ff";
        context.lineWidth = 2;
        context.fillRect(10,10,40,40);
        context.strokeRect(0,0,60,60);
        context.clearRect(20,20,20,20);
        // test line 
        context.strokeStyle = "black";
        context.lineWidth = 10;
        context.lineCap = 'square';
        context.beginPath();
        context.moveTo(20,0);
        context.lineTo(100,0);
        context.stroke();
        context.closePath();
        // exemple round end, bevel join, at top or left of canvas
        context.strokeStyle = "red";
        context.lineWidth = 10;
        context.lineJoin = 'bevel';
        context.lineCap = 'round';
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(25,0);
        context.lineTo(25,25);
        context.stroke();
        context.closePath()

        // exemple2: round en, bevel join not at top or left of canvas
        context.beginPath();
        context.moveTo(10, 50);
        context.lineTo(35, 50);
        context.lineTo(35,75);
        context.stroke();
        context.closePath();

        // exemple3 : flat end, round join not at top or left of canvas
        context.lineJoin  = 'round';
        context.lineCap = 'butt';
        context.beginPath();
        context.moveTo(10, 100);
        context.lineTo(35, 100);
        context.lineTo(35,125);
        context.stroke();
        context.closePath();

    }
}