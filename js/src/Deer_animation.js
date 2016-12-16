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
		{src:"img/Deer_animation_atlas_.png", id:"Deer_animation_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Deer_animation_atlas_", frames: [[0,350,132,18],[0,0,203,232],[0,234,82,114]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Group_0 = function() {
	this.spriteSheet = ss["Deer_animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Path_0 = function() {
	this.spriteSheet = ss["Deer_animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Path_3_1 = function() {
	this.spriteSheet = ss["Deer_animation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mc_opened_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcAdQgNgMAAgRQAAgQANgNQAMgMAQAAQARAAAMAMQANANAAAQQAAARgNAMQgMAMgRAAQgPAAgNgMg");
	this.shape.setTransform(4.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.4,8.4);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpjxIBTAAIAAHjg");
	this.shape.setTransform(4.3,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.5,48.4);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhFASQANhKBEgcQAjgOAgACQhUAZguBXQgVArgGAng");
	this.shape.setTransform(8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,16,19.6);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_3_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,114);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Agdg1QgvgXglgEIBcACQBPANAkBJQASAlACAjQgyhZhdgsg");
	this.shape.setTransform(11.5,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,16.2);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhZhbICzAwIizCHg");
	this.shape.setTransform(9,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,18.5);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcgWIC5hwIi5ENg");
	this.shape.setTransform(9.4,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.7,27);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,232);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,18);


(lib.mc_deer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF70D3").s().p("AhkAkIAAhHIDJAAIAABHg");
	this.shape.setTransform(156.3,259.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF70D3").s().p("AhdAkIAAhHIC7AAIAABHg");
	this.shape_1.setTransform(127.5,262.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF70D3").s().p("AiuAkIAAhHIFdAAIAABHg");
	this.shape_2.setTransform(175,155.9);

	this.instance = new lib.Path_3_0();
	this.instance.setTransform(150,209.3,1,1,0,0,0,41,57);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9756D3").s().p("Ak1I6IAAi0IhkAAIAArEIFDAAQBKAAAyg1QA0g0AAhJIAAhJIE/AAIAAEsQABCehICKQhECGh5BdIAAETIiyAAIAAixQg1ASg5AKIAAC+g");
	this.shape_3.setTransform(150,209.3);

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(117.4,210.6,1,1,0,0,0,101.5,116);

	this.instance_2 = new lib.Group();
	this.instance_2.setTransform(99,335.3,1,1,0,0,0,66,9);

	this.instance_3 = new lib.Path_1();
	this.instance_3.setTransform(156.3,246.4,1,1,0,0,0,9.3,13.5);
	this.instance_3.alpha = 0.051;

	this.instance_4 = new lib.Path_2();
	this.instance_4.setTransform(70,253.3,1,1,0,0,0,9,9.2);
	this.instance_4.alpha = 0.051;

	this.instance_5 = new lib.Path_3();
	this.instance_5.setTransform(148,86.5,1,1,0,0,0,11.5,8.1);
	this.instance_5.alpha = 0.051;

	this.instance_6 = new lib.Path_4();
	this.instance_6.setTransform(8,187.5,1,1,0,0,0,8,9.8);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.Path_5();
	this.instance_7.setTransform(186.8,148.5,1,1,0,0,0,4.3,24.2);
	this.instance_7.alpha = 0.051;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbAAQAAgtAWgpQAgAmABAwQgBAyghAlQgVgrAAgsg");
	this.shape_4.setTransform(219.2,110.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6C7988").s().p("AAABWQgkgBgYgbQgYgaAAglIAAhQICoAAIAABPQAAAlgYAbQgYAcgkAAIAAAAg");
	this.shape_5.setTransform(127.5,334.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6C7988").s().p("Ag/A7QgagbAAgkIAAhRICyAAIAABRQAAAkgaAbQgaAbglAAQglAAgagbg");
	this.shape_6.setTransform(156,334.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6C7988").s().p("AhBA7QgdgbABgkIAAhRIC8AAIAABRQAAAkgcAbQgcAbgnAAQglAAgcgbg");
	this.shape_7.setTransform(70.5,334.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6C7988").s().p("Ag4BBQgggcAAgqIAAhQICyAAIAABLQgBAhgSAaQgTAcggAHQgLACgJAAQgeAAgagVg");
	this.shape_8.setTransform(42,334.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA964F").s().p("AEqSGIAAs2QgzAXg7AKIAAMVIiqgBIAAsLIk2AAQgMAAgbAFQgWAEgRgCIAAMFIi+AAIAAs2QgvgOg1geIAANiIi0AAIAAv9QhPhjgshxQgwh+AAiBITcAAQBPAAA1g2QA1g2AAhQIAAp/IH9AjQAyADAiAkQgTApAAAvQgBAtAVAqQgkAlgxAEIi9ANIAAIqIgEAAQgDCZhGCMQhDCDh0BkIAAOmg");
	this.shape_9.setTransform(117.2,210.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4B251").s().p("AAvBRQhBgBgwgvQgvguAAhCIBDAAQBBAAAwAvQAvAuAABDg");
	this.shape_10.setTransform(148,86.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4B251").s().p("AhPA8QABhAAugvQAtgvBDAAIAAAnQgBBAguAvQgtAvhDAAg");
	this.shape_11.setTransform(8,187.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6C7988").s().p("AEcHwIAAnWIlcgBIAAACQgfAAgYgbQgZgcAAgmIAAi6Ii/AAQgUAAgNgNQgPgNAAgUQAAgTAPgNQANgMAUAAIC/AAIAAhpQgBgVAKgNQAMgOASAAQAUAAALAOQAJAOABAUIAAGLIFcAAIAAiQQAAgUAOgOQAQgOATAAQAVAAAOAOQAPAOABAUIAAK0g");
	this.shape_12.setTransform(130.6,49.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6C7988").s().p("Al6jNQAAgTAMgPQANgOATABQAUgBANAOQANAPAAATIAACQIFcAAIAAmKQAAgUAMgOQANgOATAAQAUAAANAOQANAOAAAUIAABpIC2AAQAUAAANAMQAOANAAATQAAATgOANQgNANgUABIi2AAIAAC6QAAAmgfAcQgdAZgpAAIlRAAIAAHcIhaALg");
	this.shape_13.setTransform(214,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,344.3);


// stage content:
(lib.Deer_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Opened Eye
	this.instance = new lib.mc_opened_eye();
	this.instance.setTransform(694.3,295.7,1,1,0,0,0,4.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:true},1).wait(10).to({_off:false},0).wait(15));

	// Closed Eye
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAygYQAAAVgPANQgPAPgUAAQgTAAgPgPQgPgNAAgV");
	this.shape.setTransform(694.3,297.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50).to({_off:false},0).wait(9).to({_off:true},1).wait(15));

	// Deer
	this.instance_1 = new lib.mc_deer();
	this.instance_1.setTransform(640,360.5,1,1,0,0,0,126,172.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1154,548.4,251.9,344.3);

})(lib1 = lib1||{}, images1 = images1||{}, createjs1 = createjs1||{}, ss = ss||{});
var lib1, images1, createjs1, ss;