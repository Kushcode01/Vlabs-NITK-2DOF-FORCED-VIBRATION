class NumberInput {
    constructor(x, y, label, min, max, iniVal, change, ifSlider) {
        this.x = x;
        this.y = y;
        this.label = label;
        this.min = min;
        this.max = max;
        this.iniVal = iniVal;
        this.ifSlider = ifSlider;
        this.w = 160;
        this.inp = iniVal;
        this.initialised = true;
        this.input1;
        this.input2;
        this.change = change;
    }

    initialise() {
        if (this.initialised) {
            this.input1 = createInput(this.inp);
            this.input1.size(40, 20);
            this.input1.position(this.x + this.w - 30, this.y - 20);
            if (this.ifSlider) {
                this.input2 = createSlider(this.min, this.max, this.inp, this.change);
                this.input2.size(this.w, 20);
                this.input2.position(this.x, this.y);
            }
            this.initialised = false;
        }
    }

    remove() {
        this.input1.remove();
        if (this.ifSlider) {
            this.input2.remove();
        }
        this.initialised = true;
    }

    draw() {
        this.initialise();

        if (this.inp != this.input1.value()) {
            position_graph1.delete();
            position_graph2.delete();
            this.inp = this.input1.value();
            if (this.ifSlider) {
                this.input2.value(this.inp);
            }
        }

        if (this.ifSlider) {
            
            if (this.inp != this.input2.value()) {
                position_graph1.delete();
                position_graph2.delete();
                this.inp = this.input2.value();
                this.input1.value(this.inp);
            }
        }

        push();

        fill(0, 0, 0, 255);
        strokeWeight(0);
        textFont("Comic Sans MS")
        textSize(16);
        text(this.label, this.x - 10, this.y - 10);

        pop();
    }
}
