define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.0,
		ib_g : 1.0,
		mv_x : 64.0,
		warpscale : 0.107,
		brighten : 0.0,
		mv_y : 48.0,
		wave_scale : 0.01,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		b3x : 1.0,
		ib_size : 0.0,
		b2x : 1.0,
		warp : 0.01743,
		red_blue : 0.0,
		b1x : 1.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 4.28632,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.0,
		ib_r : 1.0,
		mv_b : 1.0,
		echo_zoom : 1.03,
		ob_size : 0.0,
		b1ed : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 5.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.5,
		wave_a : 0.001,
		ob_g : 1.0,
		ib_a : 1.0,
		wave_b : 0.0,
		ib_b : 1.0,
		mv_r : 1.0,
		rating : 5.0,
		b3n : 0.0,
		b2n : 0.0,
		modwavealphastart : 1.0,
		b1n : 0.0,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.n1 = 0;
m.q4 = 0;
m.n2 = 0;
m.q5 = 0;
m.j1 = 0;
m.j2 = 0;
m.q9 = 0;
m.j3 = 0;
m.k = 0;
m.n = 0;
m.q10 = 0;
m.v = 0;
m.x1 = 0;
m.y1 = 0;
		return m;
	},
	'frame_eqs' : function(m) {
m.q1 = 0;
m.v = 0.4;
m.j1 = ((m.j1*0.95)+(sqr((m.bass*4))*m.v));
m.j2 = ((m.j2*0.95)+(sqr((m.mid*4))*m.v));
m.j3 = ((m.j3*0.95)+(sqr((m.treb*4))*m.v));
m.n = (m.n+(m.j1*0.0052));
m.n1 = (m.n1+(m.j2*0.0052));
m.n2 = (m.n2+(m.j3*0.0052));
m.q2 = (m.n*0.01);
m.q3 = (m.n1*0.01);
m.q4 = (m.n2*0.01);
m.k = ((m.k*0.99)+sqr((m.mid_att*2)));
m.q5 = (m.k*0.00);
m.zoom = 1.0016;
m.warp = 0;
m.rot = -0.00;
m.q9 = m.aspectx;
m.q10 = m.aspecty;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 0.99,
			enabled : 1.0,
			b : 0.0,
			g : 0.04,
			scaling : 100.0,
			samples : 495.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 1.0,
			r : 0.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 4.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.my_x = 0;
m.my_y = 0;
m.my_z = 0;
m.l = 0;
m.n = 0;
m.p = 0;
m.rd = 0;
m.zoom = 0;
m.w = 0;
m.z1 = 0;
m.y1 = 0;
m.z2 = 0;
m.pi = 0;
m.x1 = 0;
m.y2 = 0;
m.z3 = 0;
m.w1 = 0;
m.x2 = 0;
m.y3 = 0;
m.w2 = 0;
m.x3 = 0;
m.w3 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.ab = 1;
			m.rkeys = ['t7'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t8 = 0.07;
m.t7 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t7 = -m.t7;
m.pi = Math.asin(1);
m.n = 180;
m.rd = 0.075;
m.my_x = ((Math.sin((((m.sample*m.pi)*4)+((m.t7+1)*m.t8)))*0.5)+((Math.cos(((m.sample*m.pi)*m.n))*m.rd)*Math.sin((((m.sample*m.pi)*4)+((m.t7+1)*m.t8)))));
m.my_y = ((Math.cos((((m.sample*m.pi)*4)+((m.t7+1)*m.t8)))*0.5)+((Math.cos(((m.sample*m.pi)*m.n))*m.rd)*Math.cos((((m.sample*m.pi)*4)+((m.t7+1)*m.t8)))));
m.my_z = (Math.sin(((m.sample*m.pi)*m.n))*m.rd);
m.d = 1.4;
m.zoom = 0.65;
m.w1 = m.q2;
m.w2 = m.q3;
m.w3 = m.q4;
m.x1 = ((Math.cos(m.w1)*m.my_x)+(Math.sin(m.w1)*m.my_y));
m.y1 = ((-Math.sin(m.w1)*m.my_x)+(Math.cos(m.w1)*m.my_y));
m.z1 = m.my_z;
m.x2 = ((Math.cos(m.w2)*m.x1)+(Math.sin(m.w2)*m.z1));
m.z2 = ((-Math.sin(m.w2)*m.x1)+(Math.cos(m.w2)*m.z1));
m.y2 = m.y1;
m.y3 = ((Math.cos(m.w3)*m.y2)+(Math.sin(m.w3)*m.z2));
m.z3 = ((-Math.sin(m.w3)*m.y2)+(Math.cos(m.w3)*m.z2));
m.x3 = m.x2;
m.l = sqrt(((m.x3*m.x3)+(m.y3*m.y3)));
m.w = Math.atan2(m.x3, m.y3);
m.p = Math.tan((Math.asin(1)+Math.atan2((m.d+m.z3), m.l)));
m.d = sqrt((((m.x3*m.x3)+(m.y3*m.y3))+((m.z3+m.d)*(m.z3+m.d))));
m.my_x = ((m.zoom*Math.sin(m.w))*m.p);
m.my_y = ((m.zoom*Math.cos(m.w))*m.p);
m.x = (0.5+m.my_x);
m.y = (0.5+m.my_y);
m.b = (-m.z3+0.5);
m.b = (Math.min(1, Math.max(0, m.b))*0.5);
m.r = (1-(m.b*2));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't8 = .07;\n' + 't7 = 1;'),
		'point_eqs_str' : ('t7 = -t7;\n' + 'pi = asin(1);\n' + 'n = 180;\n' + 'rd = 0.075;\n' + 'my_x = sin(sample*pi*4+(t7+1)*t8)*0.5 + cos(sample*pi*n)*rd*sin(sample*pi*4+(t7+1)*t8);\n' + 'my_y = cos(sample*pi*4+(t7+1)*t8)*0.5 + cos(sample*pi*n)*rd*cos(sample*pi*4+(t7+1)*t8);\n' + 'my_z = sin(sample*pi*n)*rd;\n' + 'd = 1.4;\n' + 'zoom = 0.65;\n' + 'w1 = q2;\n' + 'w2 = q3;\n' + 'w3 = q4;\n' + 'x1 = cos(w1)*my_x + sin(w1)*my_y;\n' + 'y1 = -sin(w1)*my_x + cos(w1)*my_y;\n' + 'z1 = my_z;\n' + 'x2 = cos(w2)*x1 + sin(w2)*z1;\n' + 'z2 = -sin(w2)*x1 + cos(w2)*z1;\n' + 'y2 = y1;\n' + 'y3 = cos(w3)*y2 + sin(w3)*z2;\n' + 'z3 = -sin(w3)*y2 + cos(w3)*z2;\n' + 'x3 = x2;\n' + 'l = sqrt(x3*x3 + y3*y3);\n' + 'w = atan2(x3,y3);\n' + 'p = tan(asin(1) + atan2(d+z3,l));\n' + 'd = sqrt(x3*x3 + y3*y3 + (z3+d)*(z3+d));\n' + 'my_x = zoom*sin(w)*p;\n' + 'my_y = zoom*cos(w)*p;\n' + 'x = 0.5 + my_x;\n' + 'y = 0.5 + my_y;\n' + 'b = -z3 + 0.5;\n' + 'b = min(1,max(0,b))*0.5;\n' + 'r = 1-b*2;'),

		},
		{
		'baseVals' : {
			a : 0.99,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 100.0,
			samples : 445.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 1.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 4.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.c = 0;
m.q4 = 0;
m.t7 = 0;
m.d = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.j = 0;
m.d1 = 0;
m.c1 = 0;
m.n = 0;
m.c2 = 0;
m.c3 = 0;
m.rd = 0;
m.zoom = 0;
m.t = 0;
m.w = 0;
m.y1 = 0;
m.pi = 0;
m.x1 = 0;
m.z = 0;
m.pi3 = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.ab = 1;
			m.rkeys = ['t7'];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
m.t8 = 0.09;
m.t7 = 1;
		return m;
	},
		'point_eqs' : function(m) {
m.t7 = -m.t7;
m.pi = Math.asin(1);
m.n = 160;
m.rd = 0.075;
m.xx = ((Math.sin((((m.sample*m.pi)*4)+((m.t7+1)*m.t8)))*0.5)+((Math.cos(((m.sample*m.pi)*m.n))*m.rd)*Math.sin(((m.sample*m.pi)*4))));
m.yy = ((Math.cos((((m.sample*m.pi)*4)+((m.t7+1)*m.t8)))*0.5)+((Math.cos(((m.sample*m.pi)*m.n))*m.rd)*Math.cos(((m.sample*m.pi)*4))));
m.zz = (Math.sin(((m.sample*m.pi)*m.n))*m.rd);
m.d = sqrt((((m.xx*m.xx)+(m.yy*m.yy))+(m.zz*m.zz)));
m.d1 = 1;
m.xx = (m.xx*m.d1);
m.yy = (m.yy*m.d1);
m.zz = (m.zz*m.d1);
m.w = (-m.d*m.t5);
m.s1 = Math.sin(((m.t2*1)+m.w));
m.s2 = Math.sin(((m.t3*1)+m.w));
m.s3 = Math.sin(((m.t4*1)+m.w));
m.c1 = Math.cos(((m.t2*1)+m.w));
m.c2 = Math.cos(((m.t3*1)+m.w));
m.c3 = Math.cos(((m.t4*1)+m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.a = 0.75;
m.zoom = (0.5*Math.atan2(m.a, (m.a+m.z)));
m.x = (0.5+(m.zoom*m.x1));
m.y = (0.5+(m.zoom*m.y1));
m.pi3 = ((3.1415*2)*0.3333);
m.t = (((m.sample*m.pi)*4)-(2*m.time));
m.c = 1.6;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.j = 0.71;
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.a = (1-div((m.z+m.a),2));
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;\n' + 't8 = .09;\n' + 't7 = 1;'),
		'point_eqs_str' : ('t7 = -t7;\n' + 'pi = asin(1);\n' + 'n = 160;\n' + 'rd = 0.075;\n' + 'xx = sin(sample*pi*4+(t7+1)*t8)*0.5 + cos(sample*pi*n)*rd*sin(sample*pi*4);\n' + 'yy = cos(sample*pi*4+(t7+1)*t8)*0.5 + cos(sample*pi*n)*rd*cos(sample*pi*4);\n' + 'zz = sin(sample*pi*n)*rd;\n' + 'd = sqrt( xx*xx + yy*yy + zz*zz);\n' + 'd1 = 1;\n' + 'xx = xx*d1;\n' + 'yy = yy*d1;\n' + 'zz = zz*d1;\n' + 'w = -d*t5;\n' + 's1 = sin(t2*1+w);\n' + 's2 = sin(t3*1+w);\n' + 's3 = sin(t4*1+w);\n' + 'c1 = cos(t2*1+w);\n' + 'c2 = cos(t3*1+w);\n' + 'c3 = cos(t4*1+w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'a = 0.75;\n' + 'zoom = 0.5*atan2(a,a+z);\n' + 'x = 0.5 + zoom*x1;\n' + 'y = 0.5 + zoom*y1;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = sample*pi*4-2*time;\n' + 'c=1.6;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'j = 0.71;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = 1-(z + a)/2;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.09348,
			samples : 512.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 0.0,
			sep : 4.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.c = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.s8 = 0;
m.j = 0;
m.d1 = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.s = 0;
m.zoom = 0;
m.t = 0;
m.w = 0;
m.y1 = 0;
m.x1 = 0;
m.z = 0;
m.pi3 = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.ab = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
		return m;
	},
		'point_eqs' : function(m) {
m.s8 = (m.sample*383);
m.s = 100;
m.xx = Math.sin((m.sample*m.s));
m.zz = Math.cos((m.sample*m.s));
m.yy = (m.sample-0.5);
m.d = sqrt((((m.xx*m.xx)+(m.yy*m.yy))+(m.zz*m.zz)));
m.d1 = div(1,m.d);
m.xx = (m.xx*m.d1);
m.yy = (m.yy*m.d1);
m.zz = (m.zz*m.d1);
m.w = (1+((0*m.d)*m.t6));
m.s1 = Math.sin((m.t2*m.w));
m.s2 = Math.sin((m.t3*m.w));
m.s3 = Math.sin((m.t4*m.w));
m.c1 = Math.cos((m.t2*m.w));
m.c2 = Math.cos((m.t3*m.w));
m.c3 = Math.cos((m.t4*m.w));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.a = 2;
m.zoom = (0.3*Math.atan2((m.a-m.z), m.a));
m.x = (0.5+(m.zoom*m.x1));
m.y = (0.5+(m.zoom*m.y1));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((-m.z*13)+(m.t5*20));
m.c = 10;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.j = 0.71;
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.a = ((sigmoid(-m.z, 10)*1.0)+0.0);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;'),
		'point_eqs_str' : ('s8 = sample*383;\n' + 's = 100;\n' + 'xx = sin(sample*s);\n' + 'zz = cos(sample*s);\n' + 'yy = (sample-0.5);\n' + 'd = sqrt( xx*xx + yy*yy + zz*zz);\n' + 'd1 = 1/d;\n' + 'xx = xx*d1;\n' + 'yy = yy*d1;\n' + 'zz = zz*d1;\n' + 'w = 1+0*(d)*(t6);\n' + 's1 = sin(t2*w);\n' + 's2 = sin(t3*w);\n' + 's3 = sin(t4*w);\n' + 'c1 = cos(t2*w);\n' + 'c2 = cos(t3*w);\n' + 'c3 = cos(t4*w);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'a = 2;\n' + 'zoom = 0.3*atan2(a-z,a);\n' + 'x = 0.5 + zoom*x1;\n' + 'y = 0.5 + zoom*y1;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -z*13+t5*20;\n' + 'c = 10;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'j = 0.71;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = sigmoid(-z,10)*1.0+0.0;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			g : 1.0,
			scaling : 9.94125,
			samples : 484.0,
			additive : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 0.0,
			sep : 4.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.s3 = 0;
m.t4 = 0;
m.xx = 0;
m.yy = 0;
m.zz = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.c = 0;
m.q4 = 0;
m.d = 0;
m.q5 = 0;
m.q6 = 0;
m.s8 = 0;
m.j = 0;
m.c1 = 0;
m.c2 = 0;
m.c3 = 0;
m.s = 0;
m.zoom = 0;
m.t = 0;
m.w = 0;
m.y1 = 0;
m.x1 = 0;
m.z = 0;
m.pi3 = 0;
m.t1 = 0;
m.s1 = 0;
m.t2 = 0;
m.s2 = 0;
m.t3 = 0;
m.t2 = 0;
m.t3 = 0;
m.t4 = 0;
m.ab = 1;
			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t1 = m.q1;
m.t2 = m.q2;
m.t3 = m.q3;
m.t4 = m.q4;
m.t5 = m.q5;
m.t6 = m.q6;
		return m;
	},
		'point_eqs' : function(m) {
m.s8 = (m.sample*383);
m.s = 0.25;
m.xx = (((mod((m.sample*465),15)-8)*m.s)*2);
m.yy = ((mod((m.sample*31),31)-16)*m.s);
m.zz = 0;
m.d = sqrt((((m.xx*m.xx)+(m.yy*m.yy))+(m.zz*m.zz)));
m.w = 1;
m.s1 = Math.sin((m.t2*1));
m.s2 = Math.sin((m.t3*0));
m.s3 = Math.sin((m.t4*1));
m.c1 = Math.cos((m.t2*1));
m.c2 = Math.cos((m.t3*0));
m.c3 = Math.cos((m.t4*1));
m.z = ((((((m.c3*m.s1)*m.c2)+(m.s3*m.s2))*m.xx)-((((m.c3*m.s1)*m.s2)-(m.s3*m.c2))*m.yy))+((m.c3*m.c1)*m.zz));
m.x1 = ((((m.c1*m.c2)*m.xx)+((m.c1*m.s2)*m.yy))-(m.s1*m.zz));
m.y1 = ((((((m.s3*m.s1)*m.c2)-(m.c3*m.s2))*m.xx)+((((m.s3*m.s1)*m.s2)+(m.c3*m.c2))*m.yy))+((m.s3*m.c1)*m.zz));
m.a = 500;
m.zoom = (0.05*Math.atan2((m.a-m.z), m.a));
m.x = (0.5+(m.zoom*m.x1));
m.y = (0.5+(m.zoom*m.y1));
m.pi3 = ((3.1415*2)*0.3333);
m.t = ((-m.z*5)+m.t5);
m.c = 10;
m.r = (Math.sin(m.t)*m.c);
m.g = (Math.sin((m.t+m.pi3))*m.c);
m.b = (Math.sin((m.t-m.pi3))*m.c);
m.j = 0.71;
m.r = ifcond(above(m.r, 1), 1, m.r);
m.r = ifcond(below(m.r, 0), 0, m.r);
m.g = ifcond(above(m.g, 1), 1, m.g);
m.g = ifcond(below(m.g, 0), 0, m.g);
m.b = ifcond(above(m.b, 1), 1, m.b);
m.b = ifcond(below(m.b, 0), 0, m.b);
m.a = sigmoid(m.z, 5);
		return m;
	},
		'init_eqs_str' : ('t2 = 0;\n' + 't3 = 0;\n' + 't4 = 0;\n' + 'ab = 1;'),
		'frame_eqs_str' : ('t1 = q1;\n' + 't2 = q2;\n' + 't3 = q3;\n' + 't4 = q4;\n' + 't5 = q5;\n' + 't6 = q6;'),
		'point_eqs_str' : ('s8 = sample*383;\n' + 's = 0.25;\n' + 'xx = ((sample*(465))%15 - 8)*s*2;\n' + 'yy = ((sample*31)%31 - 16)*s;\n' + 'zz = 0;\n' + 'd = sqrt( xx*xx + yy*yy + zz*zz);\n' + 'w = 1;\n' + 's1 = sin(t2*1);\n' + 's2 = sin(t3*0);\n' + 's3 = sin(t4*1);\n' + 'c1 = cos(t2*1);\n' + 'c2 = cos(t3*0);\n' + 'c3 = cos(t4*1);\n' + 'z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;\n' + 'x1 = (c1*c2*xx + c1*s2*yy - s1*zz);\n' + 'y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);\n' + 'a = 500;\n' + 'zoom = 0.05*atan2(a-z,a);\n' + 'x = 0.5 + zoom*x1;\n' + 'y = 0.5 + zoom*y1;\n' + 'pi3 = 3.1415*2*0.3333;\n' + 't = -z*5+t5;\n' + 'c = 10;\n' + 'r = sin(t)*c;\n' + 'g = sin(t+pi3)*c;\n' + 'b = sin(t-pi3)*c;\n' + 'j = 0.71;\n' + 'r = if(above(r,1),1,r);\n' + 'r = if(below(r,0),0,r);\n' + 'g = if(above(g,1),1,g);\n' + 'g = if(below(g,0),0,g);\n' + 'b = if(above(b,1),1,b);\n' + 'b = if(below(b,0),0,b);\n' + 'a = sigmoid(z,5);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.17257,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.789,
			x : 0.5,
			y : 0.5,
			ang : 0.6283,
			sides : 100.0,
			border_r : 1.0,
			num_inst : 1.0,
			},
		'init_eqs' : function(m) {
m.an = 0;
m.vx = 0;
m.vy = 0;
			m.rkeys = ['an'];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = (0.65+(m.bass*0.1));
m.an = ((m.an*0.99)+((m.bass-m.treb)*0.1));
m.ang = ((m.an*0.1)+0.6);
		return m;
	},
		'init_eqs_str' : ('vx = 0;\n' + 'vy = 0;'),
		'frame_eqs_str' : ('rad = 0.65 + bass*0.1;\n' + 'an = an*0.99 + (bass-treb)*0.1;\n' + 'ang = an*0.1 + 0.6;'),

		},
		{
		'baseVals' : {
			r2 : 0.08,
			a : 1.0,
			enabled : 0.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 2.23888,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.40271,
			x : 0.5,
			y : 0.5,
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
			b : 1.0,
			tex_ang : 2.57611,
			thickoutline : 0.0,
			g : 1.0,
			textured : 1.0,
			g2 : 0.0,
			tex_zoom : 0.55595,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 1.21525,
			x : 0.5,
			y : 0.5,
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
			g : 1.0,
			textured : 0.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 1.0,
			r : 0.0,
			border_g : 1.0,
			rad : 0.02558,
			x : 0.99,
			y : 0.99,
			ang : 0.0,
			sides : 34.0,
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
	'warp' : ('shader_body {\n' + '   vec3 ret_1;\n' + '   vec2 tmpvar_2;\n' + '  tmpvar_2 = (texsize.zw * 4.0);\n' + '   vec4 tmpvar_3;\n' + '   vec2 P_4;\n' + '  P_4 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_3 = texture2D (sampler_blur2, P_4);\n' + '   vec4 tmpvar_5;\n' + '   vec2 P_6;\n' + '  P_6 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_5 = texture2D (sampler_blur2, P_6);\n' + '   vec4 tmpvar_7;\n' + '   vec2 P_8;\n' + '  P_8 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_7 = texture2D (sampler_blur2, P_8);\n' + '   vec4 tmpvar_9;\n' + '   vec2 P_10;\n' + '  P_10 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_9 = texture2D (sampler_blur2, P_10);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = (((tmpvar_7.xyz * scale2) + bias2) - ((tmpvar_9.xyz * scale2) + bias2)).z;\n' + '  tmpvar_11.y = -(((\n' + '    (tmpvar_3.xyz * scale2)\n' + '   + bias2) - (\n' + '    (tmpvar_5.xyz * scale2)\n' + '   + bias2)).z);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = (uv + ((tmpvar_11 * texsize.zw) * 60.0));\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_main, tmpvar_12);\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur1, uv);\n' + '   vec2 x_16;\n' + '  x_16 = (tmpvar_12 - uv);\n' + '  ret_1.z = (((tmpvar_13.z + \n' + '    (((tmpvar_14.z - (\n' + '      (tmpvar_15.xyz * scale1)\n' + '     + bias1).z) * 200.0) * sqrt(dot (x_16, x_16)))\n' + '  ) * 0.96) - 0.02);\n' + '   vec4 tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv + (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_17 = texture2D (sampler_blur1, P_18);\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (uv - (vec2(1.0, 0.0) * tmpvar_2));\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (uv + (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (uv - (vec2(0.0, 1.0) * tmpvar_2));\n' + '  tmpvar_23 = texture2D (sampler_blur1, P_24);\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25.x = (((tmpvar_17.xyz * scale1) + bias1) - ((tmpvar_19.xyz * scale1) + bias1)).y;\n' + '  tmpvar_25.y = (((tmpvar_21.xyz * scale1) + bias1) - ((tmpvar_23.xyz * scale1) + bias1)).y;\n' + '   vec2 tmpvar_26;\n' + '  tmpvar_26 = (uv_orig + ((tmpvar_25 * texsize.zw) * 6.0));\n' + '   vec4 tmpvar_27;\n' + '  tmpvar_27 = texture2D (sampler_main, tmpvar_26);\n' + '  ret_1.y = ((tmpvar_27.y + (\n' + '    (tmpvar_14.y - ((tmpvar_15.xyz * scale1) + bias1).y)\n' + '   * 0.1)) - 0.016);\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28.w = 1.0;\n' + '  tmpvar_28.xyz = ret_1;\n' + '  vec4 ret4 = tmpvar_28;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'comp' : ('shader_body {\n' + '   vec3 ret2_1;\n' + '   vec3 ret_2;\n' + '   vec2 tmpvar_3;\n' + '  tmpvar_3 = (texsize.zw * 6.0);\n' + '   vec4 tmpvar_4;\n' + '   vec2 P_5;\n' + '  P_5 = (uv + (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_4 = texture2D (sampler_blur1, P_5);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv - (vec2(1.0, 0.0) * tmpvar_3));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec4 tmpvar_10;\n' + '   vec2 P_11;\n' + '  P_11 = (uv - (vec2(0.0, 1.0) * tmpvar_3));\n' + '  tmpvar_10 = texture2D (sampler_blur1, P_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12.x = dot (((\n' + '    (tmpvar_4.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_6.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '  tmpvar_12.y = dot (((\n' + '    (tmpvar_8.xyz * scale1)\n' + '   + bias1) - (\n' + '    (tmpvar_10.xyz * scale1)\n' + '   + bias1)), vec3(0.32, 0.49, 0.29));\n' + '   vec2 tmpvar_13;\n' + '  tmpvar_13 = (uv - (0.25 * tmpvar_12));\n' + '   vec4 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_blur3, uv);\n' + '  ret_2 = (0.3 * ((tmpvar_14.xyz * scale3) + bias3));\n' + '   vec4 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_blur2, uv);\n' + '  ret_2 = (ret_2 - ((\n' + '    (tmpvar_15.xyz * scale2)\n' + '   + bias2) - 0.01));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16 = texture2D (sampler_main, uv);\n' + '   vec4 tmpvar_17;\n' + '  tmpvar_17 = texture2D (sampler_blur1, uv);\n' + '  ret_2 = (ret_2 + ((tmpvar_16.xyz + \n' + '    (((tmpvar_17.xyz * scale1) + bias1) * 0.15)\n' + '  ) - 0.01));\n' + '  ret_2 = (ret_2 + 0.75);\n' + '   float tmpvar_18;\n' + '  tmpvar_18 = dot (ret_2, vec3(0.32, 0.49, 0.29));\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19 = texture2D (sampler_blur3, tmpvar_13);\n' + '   vec4 tmpvar_20;\n' + '  tmpvar_20 = texture2D (sampler_blur1, tmpvar_13);\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = mix (vec3(tmpvar_18), (vec3(tmpvar_18) * dot (\n' + '    ((0.815 * ((tmpvar_19.xyz * scale3) + bias3)) - ((tmpvar_20.xyz * scale1) + bias1))\n' + '  , vec3(0.32, 0.49, 0.29))), pow (hue_shader, vec3(tmpvar_18)));\n' + '   vec4 tmpvar_22;\n' + '  tmpvar_22 = texture2D (sampler_blur3, tmpvar_13);\n' + '   vec4 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_blur1, tmpvar_13);\n' + '  ret2_1 = ((-0.3 * (\n' + '    (tmpvar_22.xyz * scale3)\n' + '   + bias3)) + ((tmpvar_23.xyz * scale1) + bias1));\n' + '   vec4 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, tmpvar_13);\n' + '  ret2_1 = (ret2_1 - tmpvar_24.xyz);\n' + '  ret2_1 = (ret2_1 - 0.75);\n' + '   float tmpvar_25;\n' + '  tmpvar_25 = dot (ret2_1, vec3(0.32, 0.49, 0.29));\n' + '   vec3 tmpvar_26;\n' + '  tmpvar_26 = mix (vec3(tmpvar_25), (vec3(tmpvar_25) * dot (\n' + '    ((0.815 * ((tmpvar_14.xyz * scale3) + bias3)) - ((tmpvar_17.xyz * scale1) + bias1))\n' + '  , vec3(0.32, 0.49, 0.29))), pow (hue_shader.zxy, tmpvar_21));\n' + '  ret2_1 = tmpvar_26;\n' + '   vec3 tmpvar_27;\n' + '  tmpvar_27 = abs((tmpvar_21 - (2.0 * tmpvar_26)));\n' + '  ret_2 = (tmpvar_27 - (0.175 * sqrt(tmpvar_27)));\n' + '  ret_2 = (ret_2 * ret_2);\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28.w = 1.0;\n' + '  tmpvar_28.xyz = ret_2;\n' + '  vec4 ret4 = tmpvar_28;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
	'init_eqs_str' : ('x1 = 0;\n' + 'y1 = 0;'),
	'frame_eqs_str' : ('q1 = 0;\n' + 'v = 0.4;\n' + 'j1 = j1*0.95 + sqr(bass*4)*v;\n' + 'j2 = j2*0.95 + sqr(mid*4)*v;\n' + 'j3 = j3*0.95 + sqr(treb*4)*v;\n' + 'n = n + j1*0.0052;\n' + 'n1 = n1 + j2*0.0052;\n' + 'n2 = n2 + j3*0.0052;\n' + 'q2 = n*0.01;\n' + 'q3 = n1*0.01;\n' + 'q4 = n2*0.01;\n' + 'k = k*0.99 + sqr(mid_att*2);\n' + 'q5 = k*0.00;\n' + 'zoom = 1.0016;\n' + 'warp = 0;\n' + 'rot = -0.00;\n' + 'q9 = aspectx;\n' + 'q10 = aspecty;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});