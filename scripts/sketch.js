// canvas
let width = 800;
let height = 600;


// counter
let t = 0.05;
let dt = 0.01;

// system
let spring1;

// graphs
let position_graph1;
let position_graph2;
let magFac;
//let force_graph;
//let magFac;
//let phaseAng;

// inputs
//let slider_force;
//let slider_ang_freq;
let k1;
let k2;
let m1;
let m2;
let w;
let F0;

// factor
let factor = 5;

// images
let img;
let button1;
let button2;
let button3;
let button4;
let button5;
let spr;

// pages
let page1 = true;
let page2 = false;
let page3 = false;

// animation
let animation = true;
let touch = false;

// Buttons
let clear;

function preload() {
    play = loadImage("assets/icons/blueplaydull.png");
    pause = loadImage("assets/icons/bluepausedull.png");
    graph = loadImage("assets/icons/graphbutton.png");
    back = loadImage("assets/icons/bluebkdulls.png");
    bg = loadImage("assets/frame_copper_ver02.png");
    spr = loadImage("assets/spring.png");
    
}

function setup() {
    textFont("Comic Sans MS");
    
    createCanvas(width, height);
    spring1 = new System(450, 425, 90, 25);
    
    position_graph1 = new Graph(50, 200, 100, 220, "x1", "t");

    position_graph2 = new Graph(50, 300, 100, 220, "x2", "t");

    magFac1 = new DynamicGraph(50, 400, 300, 220, "X1/Xst", "w/w2",0,20,0,300, System.mag_func1);
    magFac2 = new DynamicGraph(50, 400, 300, 220, "X2/Xst", "w/w2",0,20,0,300, System.mag_func2);

    //magFac = new DynamicGraph(125, 325, 230, 290, "Magnification Factor", "n", 0, 2.5, 0, 7.5, System.mag_func);
    //phaseAng = new DynamicGraph(125, 495, 150, 290, "Phase Angle", "n", 0, 2.5, 0, 180, System.phase_func);

    F0 = new NumberInput(620, 140, "F0(N)", 500, 1000, 750, 50, true);
    w= new NumberInput(620, 190, "ω(rad/sec)", 0, 16, 5, 0.01, true);
    k1 = new NumberInput(620, 240, "K1 (N/m)", 2000, 5000, 2500, 50, true);
    m1 = new NumberInput(620, 290, "M1(kg)", 200, 500, 250, 10, true);
    k2 = new NumberInput(620, 340, "K2 (N/m)", 200, 1000, 500, 50, true);
    m2 = new NumberInput(620, 380, "M2(kg)", 10, 100, 50, 1, true);
    button1 = new Button(645, 450, pause)
    button2 = new Button(500, 150, graph)
    button3 = new Button(500,110,back)
    button4 = new Button(540, 150, graph)
    button5 = new Button(500,110,back)
    
}

function draw() {
    if (page1) {
        runPage1();
    }

    if (page2) {
        runPage2();
    }

    if (page3){
        runPage3();
    }
}

function mousePressed() {
    handleEvents();
}
