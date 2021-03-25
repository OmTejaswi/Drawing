class shape {
    constructor(color,select,shape){
        this.cx = mouseX;
        this.cy = mouseY;

        this.px = pwinMouseX;
        this.py = pwinMouseY;

        this.color = color;
        this.select = select;

        this.shape = shape;
    }
    display(){
        stroke(this.color);
        strokeWeight(this.select);
        if(this.shape === "Line") {
            line(this.px,this.py,this.cx,this.cy);
        }
        if(this.shape === "Circle") {
            noStroke();
            ellipse(this.cx,this.cy,this.select*6)
        }
        if(this.shape === "Square") {
            noStroke();
            rectMode(CENTER);
            rect(this.cx,this.cy,this.select*6,this.select*6)
        }
        if(this.shape === "Rectangle") {
            noStroke();
            rectMode(CENTER);
            rect(this.cx,this.cy,this.select*10,this.select*4)
        }
        if(this.shape === "Line") {
            line(this.px,this.py,this.cx,this.cy);
        }
        if(this.shape === "Line") {
            line(this.px,this.py,this.cx,this.cy);
        }
    }
}