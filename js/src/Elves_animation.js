(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"img/Elves animation_atlas_.png", id:"Elves animation_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Elves animation_atlas_", frames: [[0,276,275,92],[0,120,249,154],[0,0,336,118]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Path_1_2 = function() {
	this.spriteSheet = ss["Elves animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Path_2_2 = function() {
	this.spriteSheet = ss["Elves animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Path_5 = function() {
	this.spriteSheet = ss["Elves animation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Path_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALggIATgMIg7BZQAWgjASgqg");
	this.shape.setTransform(4.7,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0,6.2,9.1);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbgUIgGgWIBDBVQgbgggigfg");
	this.shape.setTransform(3.5,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,8.8);


(lib.Path_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATgxIgBAVQgZAxgLAdQAVhFAQgeg");
	this.shape.setTransform(2.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,0,3.9,10.1);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpggIAUAHQAmAnAYATQg6gpgYgYg");
	this.shape.setTransform(4.2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.4,6.8);


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJARQg1gkgbgcQAOANAYAPQAwAdA5ANIgNAZIgygfg");
	this.shape.setTransform(7.2,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,9.8);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAeQAqgkAegzIAUAUQgTASgaATQgzAogjASQARgKAWgSg");
	this.shape.setTransform(6.6,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.3,11.6);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhKDBQADiUBIiXQAlhNAlgwQg0B9gQC0QgHBbABBDg");
	this.shape.setTransform(7.5,23.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,46.5);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhwgbQg/g6gigxQBnBWCoBFQBUAjBAASIg7A9QiNguh6h0g");
	this.shape.setTransform(21.1,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.2,27.1);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAjQAehDg4g7QATAEAPAPQAjAdgDAzQgCATgLAUQgXAngrAFQAagWANgig");
	this.shape.setTransform(4.1,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.2,18.4);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AArAAQg2gxhKAmQAJgQAUgMQAmgZAwASQARAIAQARQAeAfgIAtQgOgggcgXg");
	this.shape.setTransform(8.7,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.4,11.1);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAVg6QAEg8gLgiQAVAiADA4QABAcgCAWQADAMgvBeIgeA7QA0htAGhmg");
	this.shape.setTransform(5.7,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,0,7.8,30.8);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtgvQg4gVglAAQAngKA3AOQAcAHARAJQANABBNBJIAwAvQhZhThfglg");
	this.shape.setTransform(13.9,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.8,14.8);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdADQAlgfAcgHIAbANIgGABQgPAAgXAIQgsAPglAiQAOgQATgRg");
	this.shape.setTransform(6.3,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.7,7.3);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAbQgUgsACgdIASgWIAAAFQgDAQABAXQACAvATAuQgKgSgJgYg");
	this.shape.setTransform(2,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,4,13.9);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ajsh9IHZDrIgIAQg");
	this.shape.setTransform(23.8,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.5,25.4);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACyi+IANANIl9Fvg");
	this.shape.setTransform(19.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,38.2);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghhHIBDAjIg1Bsg");
	this.shape.setTransform(3.5,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,14.5);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhFAMIA1g1IBWBTg");
	this.shape.setTransform(7.1,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.2,8.6);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,118);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiVkLIEqAAIgCIXg");
	this.shape_1.setTransform(15,26.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,53.7);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_2_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,154);


(lib.Path_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhMidIA3AJIBiEyg");
	this.shape_1.setTransform(7.8,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.5,31.7);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AEdN8IuF73ITQb3g");
	this.shape_1.setTransform(61.7,89.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.4,178.5);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_1_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,92);


(lib.Path_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANCZIg+kyIBjEyg");
	this.shape_1.setTransform(5.1,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,30.8);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Al1oEIDtAAIH+QJg");
	this.shape_1.setTransform(37.5,51.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.9,103.5);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AidBVIE7izIkEC8g");
	this.shape_1.setTransform(15.9,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.7,19);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Am6rbID9AAIJ4W3g");
	this.shape_1.setTransform(44.4,73.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.8,146.5);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABWAqQAAhCgwgxQgugwhFAAQggAAgfAMQAxgxBEAAQBDAAAwAxQAxAwgBBCQAAA0gcAqQgcApguASQAwgvAAhFg");
	this.shape.setTransform(14.1,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.2,31.8);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABWAqQAAhCgwgxQgugwhFAAQggAAgfAMQAwgwBFgBQBDAAAwAxQAxAwAABCQAAA0gdAqQgcApguASQAwgwAAhEg");
	this.shape.setTransform(14.1,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.3,31.8);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABWAqQAAhCgwgxQgvgwhEAAQggAAgfAMQAxgxBEAAQBDAAAwAxQAxAwAABCQAAA0gdAqQgcApguASQAwgwAAhEg");
	this.shape.setTransform(14.1,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.3,31.8);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA/A3QAIgpgTgnQgQgigigSQg3gcg2AWQAZgZAhgIQAkgKAjAMQAcAJAUAUQAVAUAJAcQARAxgWAuQgVAtgtASQAbgcAHgmg");
	this.shape.setTransform(10.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,24.4);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABCAgQAAgyglgmQgjglg1AAQgYAAgYAKQAmglA0gBQAzAAAlAlQAlAmAAAyQAAAngWAgQgWAggjAOQAlglAAg0g");
	this.shape.setTransform(10.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,24.4);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABCAgQAAgyglgmQgjglg1AAQgYAAgYAKQAlglA1AAQAyAAAmAlQAlAlAAAyQAAAngWAhQgWAfgjAOQAlglAAg0g");
	this.shape.setTransform(10.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,24.4);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABCAgQAAgyglglQgkglg0AAQgaAAgWAJQAlglA1AAQAyAAAmAlQAlAlAAAyQgBAngVAhQgWAfgjAOQAlglAAg0g");
	this.shape.setTransform(10.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.6,24.4);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABCAgQAAgyglglQgjglg1AAQgYAAgYAJQAmglA0AAQAzAAAlAlQAlAlAAAyQAAAngWAhQgWAfgjAOQAlgkAAg1g");
	this.shape.setTransform(10.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,24.4);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABWAqQAAhDgwgwQgugwhFAAQgiAAgdAMQAwgxBFAAQBDAAAwAxQAwAwAABCQAAA0gcAqQgcApguASQAwgwAAhEg");
	this.shape.setTransform(14.1,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.2,31.8);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABWAqQAAhDgwgwQgvgxhEAAQggAAgfANQAxgxBEAAQBDAAAwAxQAxAwAABCQAAA0gdAqQgcApguASQAwgwAAhEg");
	this.shape.setTransform(14.1,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.3,31.8);


(lib.mc_tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.setTransform(207,212.4,1,1,0,0,0,14.1,15.9);
	this.instance.alpha = 0.051;

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(235,424.9,1,1,0,0,0,14.1,15.9);
	this.instance_1.alpha = 0.051;

	this.instance_2 = new lib.Group_2();
	this.instance_2.setTransform(169.4,126.6,1,1,0,0,0,10.8,12.2);
	this.instance_2.alpha = 0.051;

	this.instance_3 = new lib.Group_3();
	this.instance_3.setTransform(126.6,190.5,1,1,0,0,0,10.8,12.2);
	this.instance_3.alpha = 0.051;

	this.instance_4 = new lib.Group_4();
	this.instance_4.setTransform(179.8,265.1,1,1,0,0,0,10.8,12.2);
	this.instance_4.alpha = 0.051;

	this.instance_5 = new lib.Group_5();
	this.instance_5.setTransform(190.7,376.8,1,1,0,0,0,10.8,12.2);
	this.instance_5.alpha = 0.051;

	this.instance_6 = new lib.Group_6();
	this.instance_6.setTransform(124.5,441.4,1,1,0,0,0,10.8,12.2);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.Group_7();
	this.instance_7.setTransform(91.1,386.9,1,1,0,0,0,14.1,15.9);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.Group_8();
	this.instance_8.setTransform(123.2,289.2,1,1,0,0,0,14.1,15.9);
	this.instance_8.alpha = 0.051;

	this.instance_9 = new lib.Group_9();
	this.instance_9.setTransform(209.3,315.4,1,1,0,0,0,14.1,15.9);
	this.instance_9.alpha = 0.051;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9756D3").s().p("AhzB0QgxgwABhEQgBhDAxgwQAwgxBDAAQBEAAAwAxQAxAwAABDQAABEgxAwQgwAxhEAAQhDAAgwgxg");
	this.shape.setTransform(206.9,316);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9756D3").s().p("AhzB0QgxgwAAhEQAAhDAxgwQAwgxBDAAQBEAAAwAxQAxAwAABDQAABEgxAwQgwAwhEABQhDgBgwgwg");
	this.shape_1.setTransform(232.7,425.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9756D3").s().p("AhzB0QgxgwAAhEQAAhDAxgwQAwgwBDgBQBEABAwAwQAxAxAABCQAABEgxAwQgwAxhEgBQhDABgwgxg");
	this.shape_2.setTransform(204.4,213.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9756D3").s().p("Ah0B0QgvgwgBhEQABhDAvgwQAxgxBDAAQBEAAAwAxQAwAwABBDQgBBEgwAwQgwAxhEAAQhDAAgxgxg");
	this.shape_3.setTransform(120.6,290.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF70D3").s().p("AhYBZQgmglAAg0QAAgzAmglQAlgmAzAAQA0AAAmAmQAlAlAAAzQAAA0glAlQgmAmg0AAQgzAAglgmg");
	this.shape_4.setTransform(167,126.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF70D3").s().p("AhYBaQgmgmAAg0QAAgzAmglQAlgmAzAAQA0AAAlAmQAmAlAAAzQAAA0gmAmQglAlg0AAQgzAAglglg");
	this.shape_5.setTransform(125.2,190.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF70D3").s().p("AhYBZQgmglAAg0QAAgzAmglQAlgmAzAAQA0AAAlAmQAmAlAAAzQAAA0gmAlQglAmg0AAQgzAAglgmg");
	this.shape_6.setTransform(122.5,441.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF70D3").s().p("AhYBZQgmglAAg0QAAgzAmglQAlgmAzAAQA0AAAmAmQAlAlAAAzQAAA0glAlQgmAmg0AAQgzAAglgmg");
	this.shape_7.setTransform(177.7,265.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF70D3").s().p("AhYBZQgmglAAg0QAAgzAmglQAlgmAzAAQA0AAAlAmQAmAlAAAzQAAA0gmAlQglAmg0AAQgzAAglgmg");
	this.shape_8.setTransform(188.9,377.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9756D3").s().p("AhzB0QgwgwgBhEQABhDAwgxQAwgvBDgBQBEABAxAvQAvAxAABDQAABEgvAwQgxAwhEABQhCgBgxgwg");
	this.shape_9.setTransform(89.1,387.3);

	this.instance_10 = new lib.Path_4_1();
	this.instance_10.setTransform(168,404.8,1,1,0,0,0,168,59);

	this.instance_11 = new lib.Path_1_1();
	this.instance_11.setTransform(168.5,285.8,1,1,0,0,0,137.5,46);

	this.instance_12 = new lib.Path_2_1();
	this.instance_12.setTransform(168.3,136.5,1,1,0,0,0,124.5,77);

	this.instance_13 = new lib.Path_0_1();
	this.instance_13.setTransform(195.3,40.9,1,1,0,0,0,15.9,9.5);
	this.instance_13.alpha = 0.051;

	this.instance_14 = new lib.Path_1_0_1();
	this.instance_14.setTransform(173.7,15.4,1,1,0,0,0,5,15.4);
	this.instance_14.alpha = 0.051;

	this.instance_15 = new lib.Path_2_0_1();
	this.instance_15.setTransform(187.2,65.4,1,1,0,0,0,7.8,15.9);
	this.instance_15.alpha = 0.051;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5D66E").s().p("AihBfIkFi/IFDAAIBjk0IBjE0IFEAAIkGC/IBkE1IkFi+IkFC/g");
	this.shape_10.setTransform(168.7,40.6);

	this.instance_16 = new lib.Path_3_1();
	this.instance_16.setTransform(168,517.6,1,1,0,0,0,15,26.8);
	this.instance_16.alpha = 0.051;

	this.instance_17 = new lib.Path_9();
	this.instance_17.setTransform(291.6,418,1,1,0,0,0,44.4,73.2);
	this.instance_17.alpha = 0.051;

	this.instance_18 = new lib.Path_1_3();
	this.instance_18.setTransform(268,291.6,1,1,0,0,0,37.5,51.8);
	this.instance_18.alpha = 0.051;

	this.instance_19 = new lib.Path_2_3();
	this.instance_19.setTransform(230.5,150.6,1,1,0,0,0,61.7,89.3);
	this.instance_19.alpha = 0.051;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00B39F").s().p("EgaOAhqIJs20Ik7AAIH3wYIlzAAITk8HITPcHIl9AAIIBQYIlHAAIJ4W0g");
	this.shape_11.setTransform(168,275.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA9435").s().p("AiUEOIAAobIEpAAIAAIbg");
	this.shape_12.setTransform(167.8,517.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.shape_10},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,544.5);


(lib.mc_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.setTransform(94.5,68.8,1,1,0,0,0,3.5,7.2);
	this.instance.alpha = 0.051;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.setTransform(65.3,63.3,1,1,0,0,0,23.8,12.7);
	this.instance_1.alpha = 0.051;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.setTransform(26.7,104.3,1,1,0,0,0,6.3,3.6);
	this.instance_2.alpha = 0.051;

	this.instance_3 = new lib.Path_3_0();
	this.instance_3.setTransform(51.2,127.6,1,1,0,0,0,5.7,15.4);
	this.instance_3.alpha = 0.051;

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.setTransform(113.1,9.6,1,1,0,0,0,4,9.2);
	this.instance_4.alpha = 0.051;

	this.instance_5 = new lib.Path_5_0();
	this.instance_5.setTransform(92.6,39.2,1,1,0,0,0,7.5,23.2);
	this.instance_5.alpha = 0.051;

	this.instance_6 = new lib.Path_6_0();
	this.instance_6.setTransform(45.8,102.7,1,1,0,0,0,7.2,4.9);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.Path_7_0();
	this.instance_7.setTransform(34.3,64.6,1,1,0,0,0,2.6,5);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.Path_8_0();
	this.instance_8.setTransform(82.8,88.2,1,1,0,0,0,4.7,4.5);
	this.instance_8.alpha = 0.051;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAUQgIgEgDgJQgDgHAEgJQAFgIAJgDQAHgDAIAEQAIAFADAJQADAHgEAIQgEAIgJADIgHABQgEAAgFgCg");
	this.shape.setTransform(75.4,78.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF70D3").s().p("AgGANQgFgCgCgGQgCgFADgFQACgGAHgCQAEgCAFADQAGADACAGQACAEgDAGQgDAFgGACIgEABQgCAAgEgCg");
	this.shape_1.setTransform(27.4,137.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF70D3").s().p("AgGANQgFgDgCgGQgCgEADgGQACgFAHgCQAEgCAFADQAGACACAHQACAEgDAFQgDAGgGACIgEABQgCAAgEgCg");
	this.shape_2.setTransform(30.5,131.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF70D3").s().p("AgFANQgGgCgCgGQgCgFADgFQADgGAGgCQAEgCAGADQAFADACAGQACAEgDAGQgCAFgGACIgFABQgCAAgDgCg");
	this.shape_3.setTransform(33.4,125.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF70D3").s().p("AgFANQgGgDgCgGQgCgEADgGQADgFAGgCQAEgCAGADQAFACACAHQACAEgDAFQgCAGgGACIgFABQgCAAgDgCg");
	this.shape_4.setTransform(36.3,119.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF70D3").s().p("AgFANQgGgCgCgGQgCgFADgFQADgGAGgCQAEgCAGADQAFADACAGQACAEgDAGQgCAFgGACIgFABQgCAAgDgCg");
	this.shape_5.setTransform(39.4,113.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9756D3").s().p("AkHBqICPkaQAmhLBQgbQBOgaBMAmQBLAnAbBQQAaBQgmBJIiPEcg");
	this.shape_6.setTransform(28.9,130.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJAUQgIgFgDgJQgDgGAEgJQAFgIAIgDQAIgDAHAEQAJAFADAJQADAGgFAJQgDAIgKADIgGABQgDAAgGgCg");
	this.shape_7.setTransform(46.4,64.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF70D3").s().p("AgpBTQgjgRgMglQgMgjARgjQASgjAlgMQAjgMAjASQAjARAMAlQAMAjgSAjQgRAjglAMQgPAFgOAAQgUAAgVgLg");
	this.shape_8.setTransform(107.9,9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaA2QgXgMgIgYQgHgWALgWQALgXAYgHQAWgJAXAMQAWALAIAYQAIAWgLAXQgMAXgYAIQgJADgJAAQgNAAgNgHg");
	this.shape_9.setTransform(75.4,79);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaA2QgXgLgHgYQgJgWAMgXQALgXAYgIQAWgHAXALQAWAMAJAXQAHAWgLAXQgLAWgZAIQgJAEgJAAQgNAAgNgHg");
	this.shape_10.setTransform(46.4,64.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FC7457").s().p("AgrBHQglgTgNgoQgNglATglIAJgTICxBZIgJASQgTAlgnANQgRAGgPAAQgVAAgWgLg");
	this.shape_11.setTransform(54.9,85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF70D3").s().p("AkrhRIA4hvIIfESIg4Bvg");
	this.shape_12.setTransform(68.1,57.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9756D3").s().p("AkYAsQC+i8DMhWQBngqBAgEQhHB0gXDmQgLBzACBcg");
	this.shape_13.setTransform(75.2,37.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EEC99D").s().p("AhqA6IAbg3QAagxA2gTQA2gSA0AaIgbA3QgaAxg2ATQgWAHgWAAQggAAgegPg");
	this.shape_14.setTransform(88.4,89.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EEC99D").s().p("AgzAnQgSg1Aag0IAbg2QAyAbASA3QASA1gaAzIgbA3QgygbgSg3g");
	this.shape_15.setTransform(30.2,59.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EEC99D").s().p("AiPDzQhjgygihpQgjhmAyhiIBQifIHZDvIhRCdQgxBjhpAiQgrAOgnAAQg8AAg6gdg");
	this.shape_16.setTransform(59.8,77.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EEC99D").s().p("AhiARIA2hpICOBJIg2Bog");
	this.shape_17.setTransform(43.4,106.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9756D3").s().p("AidDMIAmhMQAwAZAzgWQAvgWAcg3QAbg2gMg0QgLg2gtgXQgdgQglAHIgQhUQBCgLA1AcQBMAmAXBYQAYBVgrBWQgsBWhUAhQgkAPglAAQgtAAgqgWg");
	this.shape_18.setTransform(48.5,133);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9756D3").s().p("Ai/BZQgXhXArhUQArhVBUghQBSghBNAmQA4AdAdA6IhNAlQgRghgegQQgtgWgxAWQgyAXgbA2QgcA1AMA0QAMA2AwAZIgmBMQhOgogYhYg");
	this.shape_19.setTransform(20.1,120.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.4,159.8);


(lib.mc_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(61.1,40,1,1,0,0,0,7,4.3);
	this.instance.alpha = 0.051;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(47.8,66,1,1,0,0,0,19.1,19.1);
	this.instance_1.alpha = 0.051;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(75.1,115.6,1,1,0,0,0,2,7);
	this.instance_2.alpha = 0.051;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(104.8,100,1,1,0,0,0,13.9,7.4);
	this.instance_3.alpha = 0.051;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(10.2,5.5,1,1,0,0,0,8.7,5.5);
	this.instance_4.alpha = 0.051;

	this.instance_5 = new lib.Path_5_1();
	this.instance_5.setTransform(34.4,32.4,1,1,0,0,0,21.1,13.6);
	this.instance_5.alpha = 0.051;

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(79.5,96.3,1,1,0,0,0,6.6,5.8);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.Path_7();
	this.instance_7.setTransform(39.9,96.3,1,1,0,0,0,4.2,3.4);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.Path_8();
	this.instance_8.setTransform(77.1,57.2,1,1,0,0,0,3.5,4.4);
	this.instance_8.alpha = 0.051;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAQQgHgHAAgJQAAgHAHgHQAGgHAIAAQAJAAAGAGQAHAHAAAIQAAAJgHAGQgGAHgJAAQgHAAgHgGg");
	this.shape.setTransform(66,61.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF70D3").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAFAAAGAEQAEAFAAAFQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_1.setTransform(107.1,124.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF70D3").s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgEg");
	this.shape_2.setTransform(102.2,119.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF70D3").s().p("AgKAKQgEgEAAgGQAAgEAEgFQAFgFAFAAQAFAAAGAFQAEAEAAAFQAAAGgEAEQgFAFgGAAQgEAAgGgFg");
	this.shape_3.setTransform(97.6,115.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF70D3").s().p("AgJAKQgFgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAFgEAFQgFAFgGAAQgFAAgEgFg");
	this.shape_4.setTransform(92.9,110.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF70D3").s().p("AgKALQgEgFAAgGQAAgEAEgGQAFgEAFAAQAFAAAGAEQAEAFAAAFQAAAFgEAGQgFAEgGAAQgEAAgGgEg");
	this.shape_5.setTransform(88,106);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9756D3").s().p("AjfBAQg9g7gBhTQgBhUA7g9QA7g8BUgBQBUgBA7A7IDkDdIkdEig");
	this.shape_6.setTransform(103.4,121.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAQQgHgHAAgJQAAgHAGgHQAHgHAIAAQAIAAAHAGQAHAHAAAIQAAAJgGAGQgHAHgJAAQgIAAgGgGg");
	this.shape_7.setTransform(43.3,84.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF70D3").s().p("AhABDQgcgbgBgnQAAgmAbgbQAbgcAngBQAlAAAcAbQAcAcABAmQAAAmgbAbQgbAcgnAAIgBABQglAAgbgbg");
	this.shape_8.setTransform(9.4,9.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpArQgSgRAAgaQgBgXASgSQASgSAYgBQAYAAASASQASARABAZQAAAYgSASQgRASgaABQgXAAgSgSg");
	this.shape_9.setTransform(65.9,61.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpArQgSgRAAgaQgBgXASgSQARgSAZAAQAYgBASASQASARABAZQAAAYgSASQgRASgaABQgXAAgSgSg");
	this.shape_10.setTransform(43.3,84.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FC7457").s().p("AhMBAIgPgOICKiOIAPAOQAeAdAAAqQABAngdAeQgdAegoABIgBAAQgpAAgdgdg");
	this.shape_11.setTransform(64.6,82.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF70D3").s().p("AkACvIGom0IBZBXImoG0g");
	this.shape_12.setTransform(42.9,61.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9756D3").s().p("Aj5iOQgGhGAFg7IAHgtQBZBnDUBcQBrAtBYAaIllFvQh+jwgTjbg");
	this.shape_13.setTransform(32.7,45.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EEC99D").s().p("AgTBNQgqgoAAg4QgBg6AogqIAqArQApAoABA4QABA6gpAqg");
	this.shape_14.setTransform(79.5,51.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EEC99D").s().p("AhMAWIgrgpQAogpA6gBQA5gBApApIArAoQgoAqg6ABIgBAAQg4AAgpgog");
	this.shape_15.setTransform(34,98.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EEC99D").s().p("AigDWIiAh8IFxl7IB/B8QBPBNACBsQABBvhNBOQhNBPhuABIgEABQhpAAhNhMg");
	this.shape_16.setTransform(57.8,76);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FADAAC").s().p("AhiAQIBvhyIBWBTIhvByg");
	this.shape_17.setTransform(82.4,100.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9756D3").s().p("ABlCDQAmgngGg3QgGgzgsgrQgrgrg1gFQg4gFgjAkQgYAagFAkIhUgKQAIhAAsguQA8g9BaAEQBZAEBEBDQBFBDAGBYQAGBbg9A+g");
	this.shape_18.setTransform(108,105.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9756D3").s().p("AApDZQhYgEhFhDQhFhDgGhYQgHhbA8g9QAsgtBAgKIANBUQglAHgYAYQgjAkAGA3QAHA1ArAqQAsArA0AEQA3AFAmgnIA9A8Qg6A7hVAAIgJAAg");
	this.shape_19.setTransform(88,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132.1,149.7);


(lib.mc_right_elf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mc_right();
	this.instance.setTransform(-38.4,79.9,1,1,0,0,0,58.6,79.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:58.6},24).wait(50).to({x:-42.4},25).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,0,117.4,159.8);


(lib.mc_left_elf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mc_left();
	this.instance.setTransform(136,144.8,1,1,0,0,0,66,74.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({x:142,y:150.8},0).to({x:66,y:74.8},25).wait(50).to({x:140,y:148.8},20,cjs.Ease.get(-1)).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70,70,132.1,149.7);


// stage content:



(lib.Elvesanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Chrismas tree
	this.instance = new lib.mc_tree();
	this.instance.setTransform(622.9,360.5,1,1,0,0,0,168,272.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Elves
	this.instance_1 = new lib.mc_left_elf();
	this.instance_1.setTransform(544.1,273.1,1,1,0,0,0,66,74.8);

	this.instance_2 = new lib.mc_right_elf();
	this.instance_2.setTransform(766.2,469.3,1,1,0,0,0,58.6,79.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1094.9,448.3,336,544.5);

})(lib2 = lib2||{}, images2 = images2||{}, createjs1 = createjs1||{}, ss = ss||{});
var lib2, images2, createjs1, ss;