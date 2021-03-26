class shape {
    constructor(color,size,shape){
        this.cx = mouseX;
        this.cy = mouseY;

        this.px = pwinMouseX;
        this.py = pwinMouseY;

        this.color = color;
        this.size = size;

        this.shape = shape;
    }
    display(){
        stroke(this.color);
        strokeWeight(this.size);
        if(this.shape === "Line") {
            line(this.px,this.py,this.cx,this.cy);
        }
        if(this.shape === "Circle") {
            noStroke();
            ellipse(this.cx,this.cy,this.size*6)
        }
        if(this.shape === "Square") {
            noStroke();
            rectMode(CENTER);
            rect(this.cx,this.cy,this.size*6,this.size*6)
        }
        if(this.shape === "Rectangle") {
            noStroke();
            rectMode(CENTER);
            rect(this.cx,this.cy,this.size*10,this.size*4)
        }
        if(this.shape === "Triangle") {
            noStroke();
            push();
            translate(this.cx,this.cy);
            beginShape();
            for(let i =0; i < 360; i+=120) {
                    var x,y;
                    x = this.size*sin(i)*10;
                    y = this.size*cos(i)*10;

                    vertex(x,y);
            }
            endShape(CLOSE);
            pop();
        }
        if(this.shape === "Star") {
            noStroke();
            push();
            translate(this.cx,this.cy);
            beginShape();
            for(let i =0; i < 720; i+=144) {
                    var x,y;
                    x = this.size*sin(i)*10;
                    y = this.size*cos(i)*10;

                    vertex(x,y);
            }
            endShape(CLOSE);
            pop();
        }
    }
}