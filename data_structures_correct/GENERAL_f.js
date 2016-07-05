function GENERAL_f() {

    GENERAL_f.prototype.define = function GENERAL_f() {
        var rpar = [[0],[0],[0],[0]];

        this.in1 = 1;
        this.out = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["zcross"]), new ScilabDouble([1]));
        model.nzcross = new ScilabDouble([this.in1]);
        model.in = new ScilabDouble([this.in1]);
        model.evtout = new ScilabDouble(...ones(this.out, 1));
        model.rpar = new ScilabDouble([0], [0], [0], [0]);
        model.blocktype = new ScilabString(["z"]);
        model.firing = -new ScilabDouble(...ones(this.out, 1));
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.in1)], [sci2exp(this.out)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GENERAL_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    
    GENERAL_f.prototype.details = function GENERAL_f() {
        return this.x;
    }
}
