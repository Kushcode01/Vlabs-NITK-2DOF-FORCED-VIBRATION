function clearMe()  {
    magFac.graphs = [];
    phaseAng.graphs = [];
}

function runPage2() {
    background(255);
    image(bg, 0, 0);

    stroke(0);
    fill(0);

    push();
    textSize(36);
    textFont("Times");
    text('TWO DEGREE OF FREEDOM SYSTEM',100, 40);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    textSize(12);
    text('w1 = ' + spring1.w1.toFixed(4) + " rad/s", 310, 520);
    text('w2 = ' + spring1.w2.toFixed(4) + " rad/s", 430, 520);
    text('w/w2 = ' + (spring1.w/spring1.w2).toFixed(4) + " rad/s", 310, 480)

    magFac.update(spring.x1/(spring1.F0/spring1.k1));
    magFac.draw();
    

    button3.draw()

    F0.draw();
    w.draw();
    k1.draw();

    m1.draw();
    k2.draw();
    m2.draw();

    clear.mousePressed(clearMe);
}
