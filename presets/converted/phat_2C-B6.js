define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.21,
		wave_g : 0.0,
		ib_g : 0.0,
		mv_x : 10.879999,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 11.52,
		wave_scale : 0.625316,
		echo_alpha : 0.5,
		additivewave : 1.0,
		sx : 0.999998,
		ob_r : 0.0,
		sy : 1.0018,
		ib_size : 0.005,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 3.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.3,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.001825,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.010284,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.005,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.7,
		mv_l : 0.999998,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.98,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.8,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 0.3,
		mv_r : 1.0,
		rating : 3.0,
		modwavealphastart : 0.88,
		darken : 0.0,
		echo_orient : 2.0,
	},
	'init_eqs' : function(m) {

m.mv_x = 64;
m.mv_y = 48;
m.nut = 0;
m.stp = 0;
m.stq = 0;
m.rtp = 0;
m.rtq = 0;
m.wvr = 0;
m.decay = 0;
m.dcsp = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.decay = 0.9999;
m.zoom = (-0.97-(((Math.sin(m.time)*0.5)+0.5)*0.03));
m.rot = 0;
m.ib_b = (Math.sin(div(m.time,6))+(0.5*0.5));
m.ib_g = ((Math.cos(div(m.time,7))*0.3)+(0.5*0.5));
m.ib_r = ((Math.sin(div(m.time,8))*0.3)+(0.5*0.5));
m.ob_b = (Math.sin((div(m.time,8)+0.9))+(0.5*0.5));
m.ob_g = Math.sin((div(m.time,7)+0.1));
m.ob_r = (Math.cos(div(m.time,6))+0.3);
m.sx = (1+(((Math.sin(m.time)*0.5)+0.5)*0.02));
m.sy = (1+(((Math.cos(m.time)*0.5)+0.5)*0.02));
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.warp = ((-1*((((Math.sin(div(m.time,2))*0.5)+0.5)*3)*m.x))+((((Math.cos(div(m.time,2))*0.5)+0.5)*3)*m.y));
m.dx = ((Math.sin((m.time*m.y))*0.01)*m.rad);
m.dy = ((Math.cos((m.time*m.x))*0.01)*m.rad);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 0.7,
			scaling : 100.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.9,
			thick : 1.0,
			sep : 256.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.x = (Math.cos(m.time)*0.1);
m.y = (Math.sin(m.time)*0.1);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('x=cos(time)*0.1;\n' + 'y=sin(time)*0.1;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 81.954445,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.wave_x = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.wave_x = 1;
		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('wave_x=1;'),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : "",
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : (''),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 5.026548,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.1,
			tex_zoom : 100.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.6,
			a2 : 0.1,
			r : 0.1,
			border_g : 1.0,
			rad : 0.566091,
			x : 0.5,
			y : 0.5,
			ang : 6.283185,
			sides : 3.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.var = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.sin(m.time)*6);
m.var = (0.12-(above(m.bass, 0.8)*0.2));
m.x = ((Math.sin(m.time)*m.var)+0.5);
m.y = ((Math.cos(m.time)*m.var)+0.5);
m.g = (Math.sin(div(m.time,10))*0.1);
m.r = (Math.cos(div(m.time,12))*0.2);
m.b = (Math.sin(div(m.time,15))*0.3);
m.g2 = (Math.cos(div(m.time,15))*0.3);
m.r2 = (Math.sin(div(m.time,20))*0.1);
m.b2 = (Math.cos(div(m.time,10))*0.2);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=sin(time)*6;\n' + 'var=0.12-(above(bass,0.8)*0.2);\n' + 'x=sin(time)*var+.5;\n' + 'y=cos(time)*var+.5;\n' + 'g=sin(time/10)*0.1;\n' + 'r=cos(time/12)*0.2;\n' + 'b=sin(time/15)*0.3;\n' + 'g2=cos(time/15)*0.3;\n' + 'r2=sin(time/20)*0.1;\n' + 'b2=cos(time/10)*0.2;'),

		},
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.628318,
			thickoutline : 1.0,
			g : 0.5,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 5.053412,
			additive : 0.0,
			border_a : 0.8,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.414899,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ang = (Math.cos(m.time)*6);
m.sides = (20-(div(((m.bass+m.mid)+m.treb),3)*15));
m.x = ((Math.cos(m.time)*0.3)+0.5);
m.y = ((Math.sin(m.time)*0.3)+0.5);
m.r = (Math.sin(m.time)*0.896);
m.g = (Math.cos(m.time)*0.784);
m.b = (Math.sin(m.time)*0.634);
m.r2 = (Math.cos(m.time)*0.896);
m.g2 = (Math.sin(m.time)*0.784);
m.b2 = (Math.cos(m.time)*0.634);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ang=cos(time)*6;\n' + 'sides=20-((bass+mid+treb)/3)*15;\n' + 'x=cos(time)*0.3+0.5;\n' + 'y=sin(time)*0.3+0.5;\n' + 'r=sin(time)*.896;\n' + 'g=cos(time)*.784;\n' + 'b=sin(time)*0.634;\n' + 'r2=cos(time)*0.896;\n' + 'g2=sin(time)*.784;\n' + 'b2=cos(time)*0.634;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.030299,
			x : 0.5,
			y : 0.5,
			ang : 1.193805,
			sides : 3.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {


			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : ('mv_x=64;\n' + 'mv_y=48;\n' + 'nut=0;\n' + 'stp=0;\n' + 'stq=0;\n' + 'rtp=0;\n' + 'rtq=0;\n' + 'wvr=0;\n' + 'decay=0;\n' + 'dcsp=0;'),
	'frame_eqs_str' : ('decay=.9999;\n' + 'zoom=-.97-((sin(time)*0.5+0.5)*0.03);\n' + 'rot=0;\n' + 'ib_b=(sin(time/6))+0.5*0.5;\n' + 'ib_g=(cos(time/7)*0.3)+0.5*0.5;\n' + 'ib_r=(sin(time/8)*0.3)+0.5*0.5;\n' + 'ob_b=(sin((time/8)+0.9)+0.5*0.5);\n' + 'ob_g=sin((time/7)+0.1);\n' + 'ob_r=(cos(time/6))+0.3;\n' + 'sx=1+((sin(time)*0.5+0.5)*0.02);\n' + 'sy=1+((cos(time)*0.5+0.5)*0.02);'),
	'pixel_eqs_str' : ('warp=-1*(((sin(time/2)*0.5+0.5)*3)*x)+(((cos(time/2)*0.5+0.5)*3)*y);\n' + 'dx=sin(time*y)*0.01*rad;\n' + 'dy=cos(time*x)*0.01*rad;'),
};

return pmap;
});