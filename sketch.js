var lin, liArr = []
var colorPick,colorPen;
var selector;
var shapeSelector;
function setup() {
    createCanvas(windowWidth,windowHeight);

    colorPick = createColorPicker("fff").position(width/30,height/1.07);
    colorPen = createColorPicker().position(colorPick.x+70,height/1.07);
    selector = createSelect().position(colorPen.x+70,height/1.07);
    selector.option("1");
    selector.option("2");
    selector.option("3");
    selector.option("4");
    selector.option("5");
    selector.option("6");
    selector.option("7");
    selector.option("8");
    selector.option("9");
    selector.option("10");

    shapeSelector = createSelect().position(selector.x+70,height/1.07);
    shapeSelector.option("Line");
    shapeSelector.option("Circle");
    shapeSelector.option("Square");
    shapeSelector.option("Rectangle");
    shapeSelector.option("Triangle");
    shapeSelector.option("Star");
}

function draw() {
    background(colorPick.value());
    
    if(mouseIsPressed) {
        lin = new shape(colorPen.value(),eval(selector.value()),shapeSelector.value());
        liArr.push(lin);
    }
    for(var i in liArr) {
        liArr[i].display();
    }
}