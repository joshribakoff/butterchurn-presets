define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.28,
		wave_g : 0.4,
		ib_g : 0.0,
		mv_x : 3.0,
		warpscale : 0.014889,
		brighten : 0.0,
		mv_y : 2.0,
		wave_scale : 0.011726,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.11,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.033004,
		red_blue : 0.0,
		wave_mode : 2.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 1.0,
		mv_dx : 0.02,
		mv_dy : -0.02,
		mv_a : 0.0,
		fshader : 0.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.300001,
		echo_zoom : 0.99663,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 0.037492,
		wave_dots : 1.0,
		mv_g : 0.48,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		nwrapmode_x : 1.0,
		cx : 0.5,
		dy : 0.0,
		nwrapmode_y : 1.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.1,
		nechowrap_x : 0.0,
		mv_l : 0.15,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		nechowrap_y : 0.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.3,
		ib_b : 0.0,
		mv_r : 0.49,
		rating : 4.0,
		modwavealphastart : 0.75,
		darken : 1.0,
		echo_orient : 1.0,
	},
	'init_eqs' : function(m) {
m.tg3 = 0;
m.q1 = 0;
m.q2 = 0;
m.mod = 0;
m.ad = 0;
m.q4 = 0;
m.q5 = 0;
m.ag = 0;
m.num = 0;
m.anga = 0;
m.dx_r = 0;
m.dy_r = 0;
m.ox = 0;
m.oy = 0;
m.an = 0;
m.a1 = 0;
m.q = 0;
m.a2 = 0;
m.rd = 0;
m.star = 0;
m.a3 = 0;
m.vol = 0;
m.zm = 0;
m.radi = 0;
m.seg = 0;
m.pi = 0;
m.mtime = 0;
m.thresh = 0;
m.tg1 = 0;
m.tg2 = 0;
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
m.decay = 0.999;
m.zm = 1.0008;
m.sx = -m.zm;
m.sy = m.zm;
m.vol = (((m.bass_att+m.mid_att)+m.treb_att)*0.25);
m.vol = (m.vol*m.vol);
m.mtime = (m.mtime+(m.vol*0.01));
m.q1 = (m.mtime*2.3);
m.warp = 0;
		m.rkeys = ['tg3','dx_r','dy_r','dx','dy','thresh'];
		return m;
	},
	'pixel_eqs' : function(m) {
m.zoom = 1;
m.cx = (0.5+m.q4);
m.cy = (0.5-m.q5);
m.rd = sqrt((sqr((((m.x-0.5)-m.q4)*2))+sqr((((m.y-0.5)+m.q5)*1.5))));
m.zm = 1;
m.ag = Math.atan(div(((m.y-0.5)+m.q5),((m.x-0.5)-m.q4)));
m.star = (Math.sin(((m.ag*6)+m.time))*(2-m.rd));
m.zm = (m.zm+div(m.star,20));
m.sx = m.zm;
m.sy = m.zm;
m.rot = div((div(above(m.rd, 0.7),(m.rd+2))*(m.bass_att*0.1)),m.rd);
m.rot = (m.rot+(0.05*Math.sin((((m.rad*13.5)+(m.q2*1.3))+(m.q*1.31)))));
m.zoom = (m.zoom+(0.05*Math.sin(((((m.ang*10.0)+(m.rad*7.5))+(m.q2*1.63))+m.q))));
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.a1 = (4.1*Math.sin(m.mid_att));
m.a2 = (4.7*Math.sin(m.treb_att));
m.a3 = (4.9*Math.sin(m.bass_att));
m.zoom = (m.zoom+Math.abs((0.1*(1.2-m.rad))));
m.rot = (m.rot+((6*m.dx_r)*m.ad));
m.dx = (m.dx+((m.dx_r*m.ad)*5));
m.dy = (m.dy+((m.dy_r*m.ad)*5));
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.tg1 = Math.abs(Math.sin(m.time));
m.tg2 = (((12*m.dx_r)*above(m.tg1, 0.5))+((12*m.dy_r)*below(m.tg1, 0.5)));
m.tg3 = ifcond(equal(m.thresh, 2), m.tg2, m.tg3);
m.zoom = (m.zoom-0.01);
m.thresh = ((above(m.bass_att, m.thresh)*2)+((1-above(m.bass_att, m.thresh))*(((m.thresh-1.3)*0.96)+1.3)));
m.dx_r = (((equal(m.thresh, 2)*0.015)*Math.sin((5*m.time)))+((1-equal(m.thresh, 2))*m.dx_r));
m.dy_r = (((equal(m.thresh, 2)*0.015)*Math.sin((6*m.time)))+((1-equal(m.thresh, 2))*m.dy_r));
m.zoom = (m.zoom+(0.0095*((Math.sin((3*m.ang))+(Math.sin(Math.sin((((m.time*2)*Math.sin(m.time))*m.rad)))*0.3))-(Math.cos(m.rad)*0.1))));
m.sx = (m.sx+(((0.01*((0.99*1)-m.rad))*Math.sin((0.733*m.time)))*below(Math.sin(m.time), 0)));
m.num = 8;
m.pi = 3.141592654;
m.radi = ((m.y-0.5)*0.75);
m.radi = (m.y-0.5);
m.radi = pow(((m.radi*m.radi)+((m.x-0.5)*(m.x-0.5))), 0.5);
m.an = ((m.ang+m.pi)+m.time);
m.an = (m.an-((m.pi*2)*Math.floor(div(m.an,(m.pi*2)))));
m.mod = 0.1;
m.seg = (m.ang+m.pi);
m.seg = (div(m.seg,(m.pi*2))*m.num);
m.seg = Math.floor(m.seg);
m.seg = (m.seg-equal(m.seg, m.num));
m.anga = ((m.ang+m.pi)-(div((m.pi*2),m.num)*m.seg));
m.anga = ifcond(equal(mod(m.seg,2), 0), (div((m.pi*2),m.num)-m.anga), m.anga);
m.anga = (m.anga+div(m.pi,4));
m.ox = (0.5-(m.radi*Math.sin(m.anga)));
m.oy = (0.5+(m.radi*Math.cos(m.anga)));
m.dx = (equal(m.seg, 3)*(m.x-m.ox));
m.dy = (equal(m.seg, 3)*(m.y-m.oy));
m.dx = (above(m.seg, 0)*(m.x-m.ox));
m.dy = (above(m.seg, 0)*(m.y-m.oy));
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.1,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.sas = 0;
m.pw = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.xsign = 0;
m.cas = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q1+m.phs);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = ((((m.flip*0.05)*m.sample)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = 0;
m.ang = ((Math.sin((m.tm*2))*0.5)+0.5);
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xp = Math.sin((m.time*3));
m.xsign = sign(m.xp);
m.xp = Math.abs(m.xp);
m.xp = pow(m.xp, m.pw);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.yq = m.yp;
m.zq = m.zp;
m.ang = (m.tm*8.3);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*1.5));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2.1))*0.75)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = ((Math.cos((m.tm*1.1))*0.5)-0.5);
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.05*sample + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xp=sin(time*3);\n' + 'xsign=sign(xp);\n' + 'xp=abs(xp);\n' + 'xp=pow(xp,pw);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8.3;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.1)*0.75 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=cos(tm*1.1)*0.5 - 0.5;\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.6,
			g : 1.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 0.2,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.sas = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.cas = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q1+m.phs);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = ((((m.flip*0.05)*m.sample)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = 0;
m.ang = ((Math.sin((m.tm*2))*0.5)+0.5);
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.yq = -m.yp;
m.zq = m.zp;
m.ang = (m.tm*8.3);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2)-0.5))*1.5));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2.1))*0.75)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = ((Math.cos((m.tm*1.1))*0.5)-0.5);
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+2);
m.xs = div(m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.05*sample + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=0;\n' + 'ang=sin(tm*2)*0.5 +0.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'yq=-yp;\n' + 'zq=zp;\n' + 'ang=tm*8.3;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2 - 0.5)*1.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2.1)*0.75 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=cos(tm*1.1)*0.5 - 0.5;\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+2;\n' + 'xs=xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.sas = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.cas = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q1+m.phs);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = ((((m.flip*0.1)*m.sample)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = 0;
m.ang = ((Math.sin((m.tm*1.9))*0.5)+0.5);
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.yq = m.yp;
m.zq = m.zp;
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2.3)-0.5))*1.5));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2))*0.75)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = ((Math.cos((m.tm*0.9))*0.5)-0.5);
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+2);
m.xs = div(-m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1*sample + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=0;\n' + 'ang=sin(tm*1.9)*0.5 +0.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'yq=yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2.3 - 0.5)*1.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2)*0.75 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=cos(tm*0.9)*0.5 - 0.5;\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+2;\n' + 'xs=-xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			g : 0.0,
			scaling : 1.0,
			samples : 512.0,
			additive : 0.0,
			bdrawback : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 0.0,
			smoothing : 0.5,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.sas = 0;
m.flip = 0;
m.n = 0;
m.sa = 0;
m.cas = 0;
m.zp = 0;
m.yp = 0;
m.zq = 0;
m.xp = 0;
m.yq = 0;
m.tm = 0;
m.xq = 0;
m.ang = 0;
m.ys = 0;
m.phs = 0;
m.xs = 0;
m.ca = 0;

			m.rkeys = ['flip'];
			return m;
		},
		'frame_eqs' : function(m) {

		return m;
	},
		'point_eqs' : function(m) {
m.n = (m.sample*6.283);
m.phs = (-m.sample*0.2);
m.tm = (m.q1+m.phs);
m.flip = (m.flip+1);
m.flip = (m.flip*below(m.flip, 2));
m.xp = 0;
m.yp = ((((m.flip*0.1)*m.sample)+(((Math.sin(m.tm)*0.5)+0.5)*0.2))+0.05);
m.zp = 0;
m.ang = ((Math.sin((m.tm*1.9))*0.5)+0.5);
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.yq = -m.yp;
m.zq = m.zp;
m.ang = (m.tm*8);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.3);
m.ang = (3.14+(Math.sin(((m.tm*2.3)-0.5))*1.5));
m.xq = m.xp;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.yq = ((m.yp*m.sa)+(m.zp*m.ca));
m.zq = ((m.yp*m.ca)-(m.zp*m.sa));
m.ang = (-1.0+Math.cos(((m.tm*3)+0.5)));
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xp = ((m.xq*m.sa)+(m.yq*m.ca));
m.yp = ((m.xq*m.ca)-(m.yq*m.sa));
m.zp = m.zq;
m.zp = (m.zp-0.35);
m.ang = ((Math.cos((m.tm*2))*0.75)-1.05);
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.xq = ((m.xp*m.sa)+(m.zp*m.ca));
m.yq = m.yp;
m.zq = ((m.xp*m.ca)-(m.zp*m.sa));
m.ang = ((Math.cos((m.tm*0.9))*0.5)-0.5);
m.xp = m.xq;
m.sa = Math.sin(m.ang);
m.ca = Math.cos(m.ang);
m.sas = sign(m.sa);
m.cas = sign(m.ca);
m.sa = pow(Math.abs(m.sa), 2);
m.ca = pow(Math.abs(m.ca), 2);
m.sa = (m.sa*m.sas);
m.ca = (m.ca*m.cas);
m.yp = ((m.yq*m.ca)-(m.zq*m.sa));
m.zp = ((m.yq*m.sa)+(m.zq*m.ca));
m.zp = (m.zp+2);
m.xs = div(-m.xp,m.zp);
m.ys = div(m.yp,m.zp);
m.x = (m.xs+0.5);
m.y = ((m.ys*1.3)+0.5);
m.a = (1-m.sample);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : (''),
		'point_eqs_str' : ('n=sample*6.283;\n' + 'phs=-sample * 0.2;\n' + 'tm=q1 + phs;\n' + 'flip=flip+1;\n' + 'flip=flip*below(flip,2);\n' + 'xp=0;\n' + 'yp=flip*0.1*sample + (sin(tm)*0.5 + 0.5)*0.2 + 0.05;\n' + 'zp=0;\n' + 'ang=sin(tm*1.9)*0.5 +0.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'yq=-yp;\n' + 'zq=zp;\n' + 'ang=tm*8;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.3;\n' + 'ang=3.14 + sin(tm*2.3 - 0.5)*1.5;\n' + 'xq=xp;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'yq=yp*sa + zp*ca;\n' + 'zq=yp*ca - zp*sa;\n' + 'ang=-1.0 + cos(tm*3 + 0.5);\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xp=xq*sa + yq*ca;\n' + 'yp=xq*ca - yq*sa;\n' + 'zp=zq;\n' + 'zp=zp-0.35;\n' + 'ang=cos(tm*2)*0.75 - 1.05;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'xq=xp*sa + zp*ca;\n' + 'yq=yp;\n' + 'zq=xp*ca - zp*sa;\n' + 'ang=cos(tm*0.9)*0.5 - 0.5;\n' + 'xp=xq;\n' + 'sa=sin(ang);\n' + 'ca=cos(ang);\n' + 'sas=sign(sa);\n' + 'cas=sign(ca);\n' + 'sa=pow(abs(sa),2);\n' + 'ca=pow(abs(ca),2);\n' + 'sa=sa*sas;\n' + 'ca=ca*cas;\n' + 'yp=yq*ca - zq*sa;\n' + 'zp=yq*sa + zq*ca;\n' + 'zp=zp+2;\n' + 'xs=-xp/zp;\n' + 'ys=yp/zp;\n' + 'x=xs+0.5;\n' + 'y=ys*1.3+0.5;\n' + 'a=(1-sample);'),

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
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 1.8,
			ang : 0.0,
			sides : 4.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.pw = 0;
m.xsign = 0;
m.ysign = 0;
m.yp = 0;
m.xp = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.pw = 2;
m.xp = Math.sin((m.time*3));
m.xsign = sign(m.xp);
m.xp = Math.abs(m.xp);
m.xp = pow(m.xp, m.pw);
m.yp = Math.cos((m.time*3));
m.ysign = sign(m.yp);
m.yp = Math.abs(m.yp);
m.yp = pow(m.yp, m.pw);
m.x = (0.5+((m.xp*m.xsign)*0.3));
m.y = (0.5+(((m.yp*m.ysign)*0.3)*1.3));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('pw=2;\n' + 'xp=sin(time*3);\n' + 'xsign=sign(xp);\n' + 'xp=abs(xp);\n' + 'xp=pow(xp,pw);\n' + 'yp=cos(time*3);\n' + 'ysign=sign(yp);\n' + 'yp=abs(yp);\n' + 'yp=pow(yp,pw);\n' + 'x=0.5 + xp*xsign*0.3;\n' + 'y=0.5 + yp*ysign*0.3*1.3;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 1.8,
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

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.0,
			textured : 1.0,
			g2 : 1.0,
			tex_zoom : 1.0,
			additive : 0.0,
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.1,
			x : 0.5,
			y : 1.8,
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
			bdrawback : 0.0,
			tex_cx : 0.5,
			border_a : 0.1,
			tex_capture : 1.0,
			tex_cy : 0.5,
			border_b : 1.0,
			b2 : 0.0,
			x_wrap_mode : 0.0,
			a2 : 0.0,
			y_wrap_mode : 0.0,
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
	'frame_eqs_str' : ('decay=0.999;\n' + 'zm=1.0008;\n' + 'sx=-zm;\n' + 'sy=zm;\n' + 'vol=(bass_att+mid_att+treb_att)*0.25;\n' + 'vol=vol*vol;\n' + 'mtime=mtime+vol*0.01;\n' + 'q1=mtime*2.3;\n' + 'warp=0;'),
	'pixel_eqs_str' : ('zoom=1;\n' + 'cx=0.5+q4;\n' + 'cy=0.5-q5;\n' + 'rd=sqrt( sqr( (x-0.5-q4)*2) + sqr( (y-0.5+q5)*1.5 ) );\n' + 'zm=1;\n' + 'ag=atan( (y-0.5+q5)/(x-0.5-q4) );\n' + 'star=sin(ag*6+time)*(2-rd);\n' + 'zm=zm+star/20;\n' + 'sx=zm;\n' + 'sy=zm;\n' + 'rot=above(rd,0.7)/(rd+2)*(bass_att*0.1)/rd;\n' + 'rot=rot+0.05*sin(rad*13.5 + q2*1.3 + q*1.31);\n' + 'zoom=zoom+0.05*sin(ang*10.0 + rad*7.5 + q2*1.63 + q);\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'a1 = 4.1*sin(mid_att);\n' + 'a2 = 4.7*sin(treb_att);\n' + 'a3 = 4.9*sin(bass_att);\n' + 'zoom = zoom + abs(0.1*(1.2-rad));\n' + 'rot = rot + 6*dx_r*(ad);\n' + 'dx = dx + dx_r*ad*5;\n' + 'dy = dy + dy_r*ad*5;\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'tg1 = abs(sin(time));\n' + 'tg2 = 12*dx_r*above(tg1,0.5) + 12*dy_r*below(tg1,0.5);\n' + 'tg3 = if(equal(thresh,2),tg2,tg3);\n' + 'zoom = zoom - 0.01;\n' + 'thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);\n' + 'dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;\n' + 'dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;\n' + 'zoom = zoom + 0.0095*(sin(3*ang) + sin(sin(time*2*sin(time)*rad))*0.3 - cos(rad)*0.1);\n' + 'sx = sx + 0.01*(0.99*1-rad)*sin(0.733*time)*below(sin(time),0);\n' + 'num = 8;\n' + 'pi = 3.141592654;\n' + 'radi = (y-.5)*.75;\n' + 'radi = (y-.5);\n' + 'radi = pow(radi*radi + (x-.5)*(x-.5),.5);\n' + 'an = ang + pi + time;\n' + 'an = an - pi*2*int(an/(pi*2));\n' + 'mod = .1;\n' + 'seg = ang + pi;\n' + 'seg = seg/(pi*2)*num;\n' + 'seg = int(seg);\n' + 'seg = seg - equal(seg,num);\n' + 'anga = (ang + pi) - (pi*2/num)*seg;\n' + 'anga = if(equal(seg%2,0),(pi*2/num) - anga,anga);\n' + 'anga = anga + pi/4;\n' + 'ox = .5 - radi*sin(anga);\n' + 'oy = .5 + radi*cos(anga);\n' + 'dx = equal(seg,3)*(x-ox);\n' + 'dy = equal(seg,3)*(y-oy);\n' + 'dx = above(seg,0)*(x-ox);\n' + 'dy = above(seg,0)*(y-oy);'),
};

return pmap;
});