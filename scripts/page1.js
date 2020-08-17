function runPage1() {
    background(255);
    image(bg, 0, 0)
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

    spring1.initialise(F0.inp,w.inp,k1.inp,m1.inp,k2.inp,m2.inp);
    spring1.update(t, factor);
    spring1.show(0, 1, 0);

    position_graph1.update(spring1.y1);
    position_graph1.draw(0, 0, 255)

    position_graph2.update(spring1.y2);
    position_graph2.draw(0, 0, 255)

    strokeWeight(0)

    textSize(12);
    text('w1 = ' + spring1.w1.toFixed(4) + " rad/s", 310, 520);
    text('w2 = ' + spring1.w2.toFixed(4) + " rad/s", 430, 520);
    text('w/w2 = ' + (spring1.w/spring1.w2).toFixed(4) + " rad/s", 310, 480)

    //text('η = ' + (slider_ang_freq.inp / spring1.wn).toFixed(4), 310, 535);
    //text('z = ' + z.inp.toFixed(4), 310, 550);

    textSize(20);
    text("FORCED VIBRATION SYSTEM", 95, 110);

    F0.draw();
    w.draw();
    k1.draw();
    m1.draw();
    k2.draw();
    m2.draw();

    button1.draw();
    button2.draw();

    t = t + dt;
}
