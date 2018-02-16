define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.78,
		wave_g : 0.0,
		ib_g : 0.25,
		mv_x : 64.0,
		warpscale : 2.007,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 1.0,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.26,
		b2x : 1.0,
		warp : 0.01,
		red_blue : 0.0,
		b1x : 0.7,
		wave_mode : 1.0,
		wave_brighten : 1.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.0,
		ib_r : 0.25,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.11,
		b1ed : 0.0,
		wave_smoothing : 0.75,
		warpanimspeed : 1.459,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9999,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 4.95,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.0,
		ib_b : 0.25,
		mv_r : 0.0,
		rating : 4.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 0.75,
		b1n : 0.0,
		darken : 1.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.index2 = 0;
m.q1 = 0;
m.index3 = 0;
m.p1 = 0;
m.q2 = 0;
m.index4 = 0;
m.p2 = 0;
m.q3 = 0;
m.q4 = 0;
m.k1 = 0;
m.movex = 0;
m.movez = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.q31 = 0;
m.q21 = 0;
m.q32 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;
m.p1 = Math.floor(rand(16));
m.p2 = m.p1;
		return m;
	},
	'frame_eqs' : function(m) {
m.dec_med = pow(0.96, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.4+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),8);
m.index2 = mod((m.index2+(m.is_beat*bnot(m.index))),4);
m.index3 = mod((m.index3+((m.is_beat*bnot(m.index))*bnot(m.index2))),3);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass+m.mid)+m.treb);
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.rott = div((m.p2*3.14159265359),4);
m.q27 = (8-m.index);
m.q28 = Math.sin(div(m.time,7));
m.q29 = m.index4;
m.q1 = Math.cos(m.rott);
m.q2 = Math.sin(m.rott);
m.q3 = -m.q2;
m.q4 = m.q1;
m.mv_a = (0.5*m.q1);
m.movez = (m.movez+div((0.01*30),m.fps));
m.q29 = m.movez;
m.movex = (m.movex+(div((0.003*30),m.fps)*m.q2));
m.q30 = m.movex;
m.q31 = sqr(Math.sin(div(m.time,17)));
m.q32 = sqr(Math.cos(div(m.time,17)));
m.zoom = 1.0;
m.rot = 0.0;
m.dx = 0.0;
m.warp = 0.2;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.1,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.speed = 0;
m.v = 0;
m.ys = 0;
m.xs = 0;

			m.rkeys = ['ys','xs'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.q1 = 0;
m.speed = (m.bass_att*0.3);
m.v = ((m.sample*10000)+((m.value2*m.bass)*0.1));
m.xs = (m.xs+((Math.sin(((m.v*0.1)+(Math.sin(m.v)*0.1)))*m.speed)*Math.atan((m.v*1.51))));
m.ys = (m.ys+((Math.sin(((m.v*0.1)+(Math.cos(m.v)*0.1)))*m.speed)*Math.atan(m.v)));
m.x = (0.5+((0.5*Math.sin((m.xs*0.1)))*Math.cos(((m.time*1)+m.ys))));
m.y = (0.5+((0.5*Math.sin((m.ys*0.1)))*Math.cos(((m.time*1.1)+m.xs))));
m.r = (0.5+(0.5*Math.sin((m.q1*0.22))));
m.g = ((0.5+(0.5*Math.sin((m.q1*0.307))))+m.x);
m.xs = ifcond(above(m.xs, 1000), 0, m.xs);
m.ys = ifcond(above(m.ys, 1000), 0, m.ys);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('q1 = 0;\n' + 'speed = bass_att*0.3;\n' + 'v = sample*10000 + value2*bass*0.1;\n' + 'xs = xs + sin(v*0.1 + sin(v)*0.1)*speed*atan(v*1.51);\n' + 'ys = ys + sin(v*0.1 + cos(v)*0.1)*speed*atan(v);\n' + 'x = 0.5 + 0.5*sin(xs*0.1)*cos(time*1 + ys);\n' + 'y = 0.5 + 0.5*sin(ys*0.1)*cos(time*1.1 + xs);\n' + 'r = 0.5 + 0.5*sin(q1*0.22);\n' + 'g = 0.5 + 0.5*sin(q1*0.307) + x;\n' + 'xs = if(above(xs,1000),0 ,xs);\n' + 'ys = if(above(ys,1000),0 ,ys);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
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
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
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
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.burst = 0;
m.angle3 = 0;
m.q1 = 0;
m.ss = 0;
m.xx = 0;
m.q3 = 0;
m.burstspeed = 0;
m.yval = 0;
m.zd = 0;
m.ymax = 0;
m.yd = 0;
m.xd = 0;
m.flag = 0;
m.xdriftinc = 0;
m.state = 0;
m.xdrift = 0;
m.s = 0;
m.angle = 0;
m.yn = 0;
m.xn = 0;
m.zs = 0;
m.alphax = 0;
m.ys = 0;
m.xs = 0;
m.zx = 0;
m.angle2 = 0;
m.yx = 0;

			m.rkeys = ['burst','burstspeed','yval','ymax','xdriftinc','state','xdrift','alphax'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.flag = above(m.q3, 2);
m.state = (m.state+(m.flag*equal(m.state, 0)));
m.yval = ifcond(equal(m.state, 0), 0, m.yval);
m.yval = (m.yval+(0.00004*equal(m.state, 1)));
m.ymax = ifcond(equal(m.state, 0), (Math.floor(rand(100))*0.004), m.ymax);
m.state = ifcond(above(m.yval, (0.5+m.ymax)), 2, m.state);
m.yval = ifcond(equal(m.state, 0), 0, m.yval);
m.burst = ifcond(equal(m.state, 0), 0.001, m.burst);
m.alphax = ifcond(equal(m.state, 0), 1, m.alphax);
m.xdriftinc = ifcond(equal(m.state, 0), 0, m.xdriftinc);
m.burstspeed = ifcond(equal(m.state, 0), Math.floor(rand(10)), m.burstspeed);
m.xdrift = ifcond(equal(m.state, 0), Math.floor(rand(20)), m.xdrift);
m.xdriftinc = (((((((((((((((((((m.xdriftinc+((equal(m.xdrift, 0)*equal(m.state, 1))*0.00002))+((equal(m.xdrift, 1)*equal(m.state, 1))*0.000018))+((equal(m.xdrift, 2)*equal(m.state, 1))*0.000016))+((equal(m.xdrift, 3)*equal(m.state, 1))*0.000014))+((equal(m.xdrift, 4)*equal(m.state, 1))*0.000012))+((equal(m.xdrift, 5)*equal(m.state, 1))*0.00001))+((equal(m.xdrift, 6)*equal(m.state, 1))*0.000008))+((equal(m.xdrift, 7)*equal(m.state, 1))*0.000006))+((equal(m.xdrift, 8)*equal(m.state, 1))*0.000004))+((equal(m.xdrift, 9)*equal(m.state, 1))*0.000002))+((equal(m.xdrift, 11)*equal(m.state, 1))*-0.000002))+((equal(m.xdrift, 12)*equal(m.state, 1))*-0.000004))+((equal(m.xdrift, 13)*equal(m.state, 1))*-0.000006))+((equal(m.xdrift, 14)*equal(m.state, 1))*-0.000008))+((equal(m.xdrift, 15)*equal(m.state, 1))*-0.00001))+((equal(m.xdrift, 16)*equal(m.state, 1))*-0.000012))+((equal(m.xdrift, 17)*equal(m.state, 1))*-0.000014))+((equal(m.xdrift, 18)*equal(m.state, 1))*-0.000016))+((equal(m.xdrift, 19)*equal(m.state, 1))*-0.000018));
m.burst = ((((((((((m.burst+((equal(m.burstspeed, 0)*equal(m.state, 2))*0.000024))+((equal(m.burstspeed, 1)*equal(m.state, 2))*0.000022))+((equal(m.burstspeed, 2)*equal(m.state, 2))*0.00002))+((equal(m.burstspeed, 3)*equal(m.state, 2))*0.000018))+((equal(m.burstspeed, 4)*equal(m.state, 2))*0.000016))+((equal(m.burstspeed, 5)*equal(m.state, 2))*0.000014))+((equal(m.burstspeed, 6)*equal(m.state, 2))*0.000012))+((equal(m.burstspeed, 7)*equal(m.state, 2))*0.00001))+((equal(m.burstspeed, 8)*equal(m.state, 2))*0.000008))+((equal(m.burstspeed, 9)*equal(m.state, 2))*0.000008));
m.alphax = (m.alphax-(0.00004*equal(m.state, 2)));
m.state = ifcond(below(m.alphax, 0), 0, m.state);
m.s = ((m.sample*3.14)*100);
m.ss = ((m.sample*6.28)*1000);
m.xs = ((m.burst+(0.0001*Math.cos(m.s)))*Math.cos(m.ss));
m.ys = ((m.burst+(0.0001*Math.cos(m.s)))*Math.sin(m.ss));
m.zs = ((0.1*m.burst)*Math.sin(m.s));
m.angle = (Math.sin((-m.q1*0.035))*6.28);
m.yx = ((m.ys*Math.cos(m.angle))-(m.zs*Math.sin(m.angle)));
m.zx = ((m.ys*Math.sin(m.angle))+(m.zs*Math.cos(m.angle)));
m.xx = m.xs;
m.angle2 = (Math.sin((-m.q1*0.03))*6.28);
m.xd = ((m.xx*Math.cos(m.angle2))-(m.zx*Math.sin(m.angle2)));
m.zd = ((m.xx*Math.sin(m.angle2))+(m.zx*Math.cos(m.angle2)));
m.yd = m.yx;
m.angle3 = (Math.sin((-m.q1*0.022))*6.28);
m.xn = ((m.xd*Math.cos(m.angle3))-(m.yd*Math.sin(m.angle3)));
m.yn = ((m.xd*Math.sin(m.angle3))+(m.yd*Math.cos(m.angle3)));
m.zd = (m.zd+2);
m.x = (((m.xn*m.zd)*0.3)+0.5);
m.y = (((m.yn*m.zd)*0.3)*1.2);
m.x = (m.x+m.xdriftinc);
m.y = ((m.y+Math.sin((m.yval*1.5)))-0.18);
m.r = (0.5+(0.5*Math.sin((((m.q1*1.3)+m.x)+m.x))));
m.g = (0.5+(0.5*Math.sin((((m.q1*1.1)+m.x)+m.y))));
m.b = (0.5+(0.5*Math.sin((((m.q1*1.66)+m.y)+m.y))));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('flag = above(q3,2);\n' + 'state = state + flag*equal(state,0);\n' + 'yval = if(equal(state,0),0, yval);\n' + 'yval = yval + 0.00004*equal(state,1);\n' + 'ymax = if(equal(state,0),int(rand(100))*0.004,ymax);\n' + 'state = if(above(yval,0.5+ymax),2,state);\n' + 'yval = if(equal(state,0),0, yval);\n' + 'burst = if(equal(state,0),0.001,burst);\n' + 'alphax = if(equal(state,0),1,alphax);\n' + 'xdriftinc = if(equal(state,0),0,xdriftinc);\n' + 'burstspeed = if(equal(state,0),int(rand(10)),burstspeed);\n' + 'xdrift = if(equal(state,0),int(rand(20)),xdrift);\n' + 'xdriftinc = xdriftinc+ equal(xdrift,0)*equal(state,1)*0.00002+ equal(xdrift,1)*equal(state,1)*0.000018+ equal(xdrift,2)*equal(state,1)*0.000016+ equal(xdrift,3)*equal(state,1)*0.000014+ equal(xdrift,4)*equal(state,1)*0.000012+ equal(xdrift,5)*equal(state,1)*0.00001+ equal(xdrift,6)*equal(state,1)*0.000008+ equal(xdrift,7)*equal(state,1)*0.000006+ equal(xdrift,8)*equal(state,1)*0.000004+ equal(xdrift,9)*equal(state,1)*0.000002+ equal(xdrift,11)*equal(state,1)*-0.000002+ equal(xdrift,12)*equal(state,1)*-0.000004+ equal(xdrift,13)*equal(state,1)*-0.000006+ equal(xdrift,14)*equal(state,1)*-0.000008+ equal(xdrift,15)*equal(state,1)*-0.00001+ equal(xdrift,16)*equal(state,1)*-0.000012+ equal(xdrift,17)*equal(state,1)*-0.000014+ equal(xdrift,18)*equal(state,1)*-0.000016+ equal(xdrift,19)*equal(state,1)*-0.000018;\n' + 'burst = burst+ equal(burstspeed,0)*equal(state,2)*0.000024+ equal(burstspeed,1)*equal(state,2)*0.000022+ equal(burstspeed,2)*equal(state,2)*0.00002+ equal(burstspeed,3)*equal(state,2)*0.000018+ equal(burstspeed,4)*equal(state,2)*0.000016+ equal(burstspeed,5)*equal(state,2)*0.000014+ equal(burstspeed,6)*equal(state,2)*0.000012+ equal(burstspeed,7)*equal(state,2)*0.00001+ equal(burstspeed,8)*equal(state,2)*0.000008+ equal(burstspeed,9)*equal(state,2)*0.000008;\n' + 'alphax = alphax - 0.00004*equal(state,2);\n' + 'state = if(below(alphax,0),0,state);\n' + 's = sample*3.14*100;\n' + 'ss = sample*6.28*1000;\n' + 'xs = (burst + 0.0001*cos(s))*cos(ss);\n' + 'ys = (burst + 0.0001*cos(s))*sin(ss);\n' + 'zs = 0.1*burst*sin(s);\n' + 'angle = sin(-q1*0.035)*6.28;\n' + 'yx = ys*cos(angle) - zs*sin(angle);\n' + 'zx = ys*sin(angle) + zs*cos(angle);\n' + 'xx = xs;\n' + 'angle2 = sin(-q1*0.03)*6.28;\n' + 'xd = xx*cos(angle2) - zx*sin(angle2);\n' + 'zd = xx*sin(angle2) + zx*cos(angle2);\n' + 'yd = yx;\n' + 'angle3 = sin(-q1*0.022)*6.28;\n' + 'xn = xd*cos(angle3) - yd*sin(angle3);\n' + 'yn = xd*sin(angle3) + yd*cos(angle3);\n' + 'zd = zd + 2;\n' + 'x = xn*zd*0.3 + 0.5;\n' + 'y = yn*zd*0.3*1.2;\n' + 'x = x + xdriftinc;\n' + 'y = y + sin(yval*1.5) - 0.18;\n' + 'r = 0.5 + 0.5*sin(q1*1.3 + x + x);\n' + 'g = 0.5 + 0.5*sin(q1*1.1 + x + y);\n' + 'b = 0.5 + 0.5*sin(q1*1.66 + y + y);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 0.15,
			enabled : 0.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.45112,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.05,
			r : 1.0,
			border_g : 1.0,
			rad : 2.66718,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 0.42497,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.09959,
			x : 0.35,
			y : 0.0,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.10201,
			x : 0.5,
			y : 0.0,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
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
			r2 : 1.0,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.1,
			border_b : 1.0,
			b2 : 1.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.65,
			y : 0.0,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
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
	'warp' : ('shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 crisp_2;\n' + '   vec2 zz_3;\n' + '   mat2 tmpvar_4;\n' + '  tmpvar_4[0] = _qa.xy;\n' + '  tmpvar_4[1] = _qa.zw;\n' + '  zz_3 = (((\n' + '    (uv - vec2(0.5, 0.5))\n' + '   * texsize.xy) * 0.01) * tmpvar_4);\n' + '  zz_3 = -(zz_3.yx);\n' + '  uv_1 = (uv + ((\n' + '    (clamp ((sin(zz_3.yx) / cos(zz_3.yx)), vec2(-8.0, -8.0), vec2(8.0, 8.0)) * cos((4.0 * zz_3)))\n' + '   * texsize.zw) * 16.0));\n' + '   vec3 tmpvar_5;\n' + '  tmpvar_5 = texture2D (sampler_main, uv_1).xyz;\n' + '  crisp_2 = tmpvar_5;\n' + '   vec4 tmpvar_6;\n' + '  tmpvar_6.w = 1.0;\n' + '  tmpvar_6.xyz = ((crisp_2 * 0.99) - 0.01);\n' + '  vec4 ret4 = tmpvar_6;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec4 tmpvar_2;\n' + '  tmpvar_2 = texture2D (sampler_main, uv);\n' + '  ret_1 = tmpvar_2.xyz;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3.x = cos((13.5 * uv.y));\n' + '  tmpvar_3.y = sin((19.5 * uv.x));\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (0.06 * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_main, P_5);\n' + '   vec3 tmpvar_6;\n' + '  tmpvar_6 = max (ret_1, tmpvar_4.xyz);\n' + '  ret_1 = tmpvar_6;\n' + '   vec4 tmpvar_7;\n' + '  tmpvar_7.w = 1.0;\n' + '  tmpvar_7.xyz = tmpvar_6;\n' + '  vec4 ret4 = tmpvar_7;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('p1 = int(rand(16));\n' + 'p2 = p1;'),
	'frame_eqs_str' : ('dec_med = pow (0.96, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .4+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'index2 = (index2 + is_beat*bnot(index))%4;\n' + 'index3 = (index3 + is_beat*bnot(index)*bnot(index2))%3;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'rott = p2 * 3.14159265359/4;\n' + 'q27 = 8-index;\n' + 'q28 = sin(time/7);\n' + 'q29 = index4;\n' + 'q1 = cos(rott);\n' + 'q2 = sin(rott);\n' + 'q3 = -q2;\n' + 'q4 = q1;\n' + 'mv_a = .5 * q1;\n' + 'movez = movez + .01 * 30/fps ;\n' + 'q29 = movez;\n' + 'movex = movex + .003 * 30/fps *q2;\n' + 'q30 = movex;\n' + 'q31 = sqr(sin(time/17));\n' + 'q32 = sqr(cos(time/17));\n' + 'zoom = 1.0;\n' + 'rot = .0;\n' + 'dx = .0;\n' + 'warp = .2;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});