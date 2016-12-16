

(function (lib1, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib1.webFontTxtFilters = {}; 

// library properties:
lib1.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"img/Giftbox_animation_atlas_.png", id:"Giftbox_animation_atlas_"}
	]
};


lib1.ssMetadata = [
		{name:"Giftbox_animation_atlas_", frames: [[0,0,138,123],[0,125,161,36]]}
];

lib1.webfontAvailable = function(family) { 
	lib1.properties.webfonts[family] = true;
	var txtFilters = lib1.webFontTxtFilters && lib1.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib1.Path_1_1 = function() {
	this.spriteSheet = ss["Giftbox_animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib1.Path_3 = function() {
	this.spriteSheet = ss["Giftbox_animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib1.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnoiBIPRAAIAAEDg");
	this.shape.setTransform(48.9,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,26);


(lib1.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAnQAChMg1gxQARAJAVARQAoAlAZAqQgPALgQAQQgVAVgIAUQAGgWACgag");
	this.shape.setTransform(5.2,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.5,17.5);


(lib1.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.Path_1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,123);


(lib1.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCg/QgVgjgTgOQAzgGAWAYQAMALAAANIAAC4QgGhsgnhFg");
	this.shape.setTransform(4.4,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.7,23);


(lib1.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.Path_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,36);


(lib1.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AofgRIQ/AAIAAAig");
	this.shape.setTransform(54.4,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.8,3.6);


(lib1.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiHdIBFu5IAAO5g");
	this.shape_1.setTransform(3.5,47.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,95.5);


(lib1.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA+j+IBpAAIlNH9g");
	this.shape_1.setTransform(16.7,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.5,51.1);


(lib1.mc_gift_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.Path_0();
	this.instance.setTransform(80.5,45.1,1,1,0,0,0,80.5,18);

	this.instance_1 = new lib1.Path_1_0();
	this.instance_1.setTransform(80.6,123.7,1,1,0,0,0,69,61.5);

	this.instance_2 = new lib1.Path();
	this.instance_2.setTransform(106,29.1,1,1,0,0,0,54.4,1.8);
	this.instance_2.alpha = 0.051;

	this.instance_3 = new lib1.Path_1();
	this.instance_3.setTransform(131.1,11.5,1,1,0,0,0,4.4,11.5);
	this.instance_3.alpha = 0.051;

	this.instance_4 = new lib1.Path_2();
	this.instance_4.setTransform(65.4,16.3,1,1,0,0,0,5.2,8.8);
	this.instance_4.alpha = 0.051;

	this.instance_5 = new lib1.Path_4();
	this.instance_5.setTransform(100.5,75.3,1,1,0,0,0,48.9,13);
	this.instance_5.alpha = 0.051;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF70D3").s().p("AnkCIQgaAAgVgNQgXgNAAgQIAAi9QAAgQAVgMQATgMAaAAQCHAABvA0QBtAyArBPQAqgUA0AAQA0AAAqATQArhPBrgxQBtg0CHAAQAZAAATAMQASAMABAQIAAC9QgBAQgTANQgTANgaAAg");
	this.shape.setTransform(79.9,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF70D3").s().p("AilCvIAAldIFLAAIAAFdg");
	this.shape_1.setTransform(80.3,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF70D3").s().p("AilJlIAAzJIFLAAIAATJg");
	this.shape_2.setTransform(80.3,123.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9756D3").s().p("AshCvIAAldIZDAAIAAFdg");
	this.shape_3.setTransform(80.3,44.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9756D3").s().p("AquJlIAAzJIVdAAIAATJg");
	this.shape_4.setTransform(80.3,123.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9900FF").s().p("AqsB4IAAjvIVZAAIAADvg");
	this.shape_5.setTransform(80.3,70.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,185.2);


(lib1.mc_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.Path_5();
	this.instance.setTransform(50.4,121,1,1,0,0,0,16.7,25.5);
	this.instance.alpha = 0.051;

	this.instance_1 = new lib1.Path_1_2();
	this.instance_1.setTransform(44.1,47.7,1,1,0,0,0,3.5,47.7);
	this.instance_1.alpha = 0.051;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#374A5E").s().p("AlOj+IKdAAIlOH9g");
	this.shape.setTransform(33.6,121.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#374A5E").s().p("AiGHdIAAu5IENAAIAAO5g");
	this.shape_1.setTransform(33.6,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#374A5E").s().p("Ai0ByIAAjjIFpAAIAADjg");
	this.shape_2.setTransform(33.7,92.9,0.739,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.2,146.9);


// stage content:
(lib1.Giftbox_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Gift box
	this.instance = new lib1.mc_gift_box();
	this.instance.setTransform(609,462.6,1,1,0,0,0,80.5,92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39));

	// Arrow
	this.instance_1 = new lib1.mc_arrow();
	this.instance_1.setTransform(608.8,239.3,1,1,0,0,0,33.5,73.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:33.6,x:608.9,y:238.8},0).wait(1).to({y:237.6},0).wait(1).to({y:235.4},0).wait(1).to({y:232.3},0).wait(1).to({y:228.2},0).wait(1).to({y:223.1},0).wait(1).to({y:217.1},0).wait(1).to({y:210.1},0).wait(1).to({y:202.4},0).wait(1).to({y:194.1},0).wait(1).to({y:185.4},0).wait(1).to({y:176.6},0).wait(1).to({y:168},0).wait(1).to({y:160.2},0).wait(1).to({y:153.3},0).wait(1).to({y:147.7},0).wait(1).to({y:143.6},0).wait(1).to({y:141.1},0).wait(1).to({regX:33.5,x:608.8,y:140.3},0).wait(1).to({regX:33.6,x:608.9,y:140.6},0).wait(1).to({y:141.6},0).wait(1).to({y:143.4},0).wait(1).to({y:146},0).wait(1).to({y:149.6},0).wait(1).to({y:154.1},0).wait(1).to({y:159.7},0).wait(1).to({y:166.4},0).wait(1).to({y:174.2},0).wait(1).to({y:182.8},0).wait(1).to({y:192.2},0).wait(1).to({y:201.8},0).wait(1).to({y:211.1},0).wait(1).to({y:219.5},0).wait(1).to({y:226.7},0).wait(1).to({y:232.3},0).wait(1).to({y:236.3},0).wait(1).to({y:238.5},0).wait(1).to({regX:33.5,x:608.8,y:239.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1168.5,525.9,161,389.4);

})(lib1 = {}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib1, images, createjs, ss;

