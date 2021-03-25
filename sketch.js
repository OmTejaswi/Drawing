var lin, liArr = []
var colorPick,colorPen;

function setup() {
    createCanvas(windowWidth,windowHeight);

    colorPick = createColorPicker("fff");
    colorPen = createColorPicker().position(200,100)
}

function draw() {
    background(colorPick.value());
    
    if(mouseIsPressed) {
        lin = new lines(colorPen.value());
        liArr.push(lin);
    }
    for(var i in liArr) {
        liArr[i].display();
    }
}