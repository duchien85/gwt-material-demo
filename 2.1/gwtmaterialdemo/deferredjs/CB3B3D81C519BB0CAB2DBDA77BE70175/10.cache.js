$wnd.gwtmaterialdemo.runAsyncCallback10("function rFd(){}\nfunction tFd(a){this.a=a}\nfunction vFd(a){this.a=a}\nfunction xFd(a){this.a=a}\nfunction zFd(a){this.a=a}\nfunction BFd(a){this.a=a}\nfunction DFd(a){this.a=a}\nfunction FFd(a){this.a=a}\nfunction HFd(a){this.a=a}\nfunction JFd(a){this.a=a}\nfunction y6b(a){this.a=a}\nfunction O5b(a){return w6b(a.a,a.b)}\nfunction T5b(){B5b();I5b.call(this)}\nfunction X5b(){B5b();I5b.call(this)}\nfunction m6b(){B5b();I5b.call(this)}\nfunction q6b(){B5b();I5b.call(this)}\nfunction hFd(a,b,c){_Jb();yKb.call(this,a,b,c,(Ktd(),Itd))}\nfunction oFd(){QKb.call(this);OKb(this,pFd(new qFd(this)))}\nfunction NFd(a){var b;if(!a.d){b=new oFd;a.d=b}return a.d}\nfunction S5b(a){i5b(a,WLe($wnd.$(ho(a.G)).cleanVal()),false)}\nfunction l6b(a){i5b(a,vMe(XLe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction p6b(a){i5b(a,GMe(YLe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction W5b(a){i5b(a,new bMe(fMe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction Q5b(){B5b();I5b.call(this);this.b=Bmf;this.a=new y6b(this);P5b(this,this.b)}\nfunction P5b(a,b){var c;a.b=b;c=eNe(eNe(eNe(b.toLowerCase(),'m','0'),'d','0'),'y','0');a.c=c}\nfunction w6b(a,b){if(v6b(a,b)){U4b(a.a);return fD((xD(),zD(b,ID((HD(),HD(),GD)))),Is(ho(a.a.G),S0e))}return null}\nfunction MFd(a){var b,c;if(!a.c){c=new hFd(mHb(gLb(a.a)),(b=NFd(a),b),LFd(a));TJb((jLb(a.a),c),hNb(jLb(a.a)));a.c=c}return a.c}\nfunction fMe(a){var b;b=WLe(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}\nfunction qFd(a){this.a=new rFd;this.c=new vFd(this);this.d=new xFd(this);this.e=new zFd(this);this.f=new BFd(this);this.g=new DFd(this);this.i=new FFd(this);this.j=new HFd(this);this.k=new JFd(this);this.b=new tFd(this);this.n=a}\nfunction x6b(a,b,c){return !(_Me(a,'31')&&(_Me(b,'4')||_Me(b,'6')||_Me(b,'9')||_Me(b,'11')||_Me(b,'04')||_Me(b,'06')||_Me(b,'09')))&&(!(_Me(b,'2')||_Me(b,'02'))||(c%4==0?!(_Me(a,'30')||_Me(a,'31')):!(_Me(a,'29')||_Me(a,'30')||_Me(a,'31'))))}\nfunction SMe(){SMe=Ovb;var a;OMe=vE(pE(zF,1),DZe,116,15,[-1,-1,30,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);PMe=rE(zF,DZe,116,37,15,1);QMe=vE(pE(zF,1),DZe,116,15,[-1,-1,63,40,32,28,25,23,21,20,19,19,18,18,17,17,16,16,16,15,15,15,15,14,14,14,14,14,14,13,13,13,13,13,13,13,13]);RMe=rE(AF,GZe,116,37,14,1);for(a=2;a<=36;a++){PMe[a]=wF($wnd.Math.pow(a,OMe[a]));RMe[a]=svb({l:O_e,m:O_e,h:524287},PMe[a])}}\nfunction v6b(a,b){var c,d,e,f,g;if(Is(ho(a.a.G),S0e)!=null&&Is(ho(a.a.G),S0e).length!=0&&a.a.c!=null&&b!=null){c=Is(ho(a.a.G),S0e);e=kNe(c,b.indexOf('M'),b.indexOf('M/')+1);d=kNe(c,b.indexOf('d'),b.indexOf('d/')+1);g=kNe(c,b.indexOf('y'),b.lastIndexOf('y')+1);f=x6b(d,e,XLe(g));f||_4b(a.a,'Not a valid date');return _4b(a.a,'Month does not match'),(new RegExp('^(^(0?[1-9]|1[012])$)$')).test(e)&&(_4b(a.a,'Day does not match'),(new RegExp('^((0?[1-9]|[12][0-9]|3[01]))$')).test(d))&&(_4b(a.a,'Year does not match'),(new RegExp('^(^\\\\d{4}$)$')).test(g))&&f}_4b(a.a,'Text input must not be empty or null');return false}\nfunction YLe(a){var b,c,d,e,f,g,h,i,j,k,l;if(a==null){throw ovb(new TMe(_Ye))}j=a;f=a.length;i=false;if(f>0){b=(gYe(0,a.length),a.charCodeAt(0));if(b==45||b==43){a=a.substr(1);--f;i=b==45}}if(f==0){throw ovb(new TMe(qkf+j+'\"'))}while(a.length>0&&(gYe(0,a.length),a.charCodeAt(0)==48)){a=a.substr(1);--f}if(f>(SMe(),QMe)[10]){throw ovb(new TMe(qkf+j+'\"'))}for(e=0;e<f;e++){if(yLe((gYe(e,a.length),a.charCodeAt(e)))==-1){throw ovb(new TMe(qkf+j+'\"'))}}l=0;g=OMe[10];k=PMe[10];h=zvb(RMe[10]);c=true;d=f%g;if(d>0){l=-parseInt(a.substr(0,d),10);a=a.substr(d);f-=d;c=false}while(f>=g){d=parseInt(a.substr(0,g),10);a=a.substr(g);f-=g;if(c){c=false}else{if(qvb(l,h)<0){throw ovb(new TMe(qkf+j+'\"'))}l=yvb(l,k)}l=Avb(l,d)}if(qvb(l,0)>0){throw ovb(new TMe(qkf+j+'\"'))}if(!i){l=zvb(l);if(qvb(l,0)<0){throw ovb(new TMe(qkf+j+'\"'))}}return l}\nfunction pFd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb;b=new mkc;EQb(b,(c=new k7b,EQb(c,(k=new zmd,Vs(ho(k.a),(fxb(),(new Vwb(gxb(Dmf))).a)),QB(k,Dmf),k)),EQb(c,(l=new pze,kXb(l.a,Qlf),mXb(l.a),(Nxb(),l.tb).style[v9e]=(vy(),E9e),nXb(l.a,'jQuery-Mask-Plugin 1.14.10'),l)),EQb(c,(m=new k7b,EQb(m,(n=new t6b,trc((!n.X&&(n.X=new vrc(n)),n.X),J7e),ho(n.G).setAttribute(c3e,'eg: 000-00-0000000'),Bpd(n.B).length==0||ro(n.B,w1e),Cpd(n.B,'Phone Number'),Ds(ho(n.G),c3e).length==0||ro(n.B,w1e),n.c=Emf,n)),EQb(m,(o=new t6b,trc((!o.X&&(o.X=new vrc(o)),o.X),J7e),ho(o.G).setAttribute(c3e,'eg: (00) 0000-0000'),Bpd(o.B).length==0||ro(o.B,w1e),Cpd(o.B,'Phone with Odd'),Ds(ho(o.G),c3e).length==0||ro(o.B,w1e),o.c='(00) 0000-0000',o)),EQb(m,(p=new t6b,trc((!p.X&&(p.X=new vrc(p)),p.X),J7e),ho(p.G).setAttribute(c3e,'eg: (000) 000-000'),Bpd(p.B).length==0||ro(p.B,w1e),Cpd(p.B,'US Phone Number'),Ds(ho(p.G),c3e).length==0||ro(p.B,w1e),p.c='(000) 000-000',p)),m)),EQb(c,(q=new k7b,EQb(q,(r=new t6b,trc((!r.X&&(r.X=new vrc(r)),r.X),J7e),ho(r.G).setAttribute(c3e,'eg: 00000-000'),Bpd(r.B).length==0||ro(r.B,w1e),Cpd(r.B,'CEP'),Ds(ho(r.G),c3e).length==0||ro(r.B,w1e),r.c='00000-000',r)),EQb(q,(s=new t6b,trc((!s.X&&(s.X=new vrc(s)),s.X),J7e),ho(s.G).setAttribute(c3e,'eg: 000.000.000-00'),Bpd(s.B).length==0||ro(s.B,w1e),Cpd(s.B,'CPF'),Ds(ho(s.G),c3e).length==0||ro(s.B,w1e),s.c='000.000.000-00',s)),EQb(q,(t=new t6b,trc((!t.X&&(t.X=new vrc(t)),t.X),J7e),ho(t.G).setAttribute(c3e,'eg: 000,000,000,000,000.00'),Bpd(t.B).length==0||ro(t.B,w1e),Cpd(t.B,'Money'),Ds(ho(t.G),c3e).length==0||ro(t.B,w1e),t.c='000,000,000,000,000.00',t)),q)),EQb(c,(u=new k7b,EQb(u,(v=new t6b,trc((!v.X&&(v.X=new vrc(v)),v.X),J7e),ho(v.G).setAttribute(c3e,Fmf),Bpd(v.B).length==0||ro(v.B,w1e),Cpd(v.B,Gmf),Ds(ho(v.G),c3e).length==0||ro(v.B,w1e),v.c=Hmf,v)),EQb(u,(w=new t6b,trc((!w.X&&(w.X=new vrc(w)),w.X),J7e),ho(w.G).setAttribute(c3e,Imf),Bpd(w.B).length==0||ro(w.B,w1e),Cpd(w.B,Jmf),Ds(ho(w.G),c3e).length==0||ro(w.B,w1e),w.c=Kmf,w)),EQb(u,(A=new t6b,trc((!A.X&&(A.X=new vrc(A)),A.X),J7e),ho(A.G).setAttribute(c3e,Lmf),Bpd(A.B).length==0||ro(A.B,w1e),Cpd(A.B,Mmf),Ds(ho(A.G),c3e).length==0||ro(A.B,w1e),A.c=Nmf,A)),u)),EQb(c,(B=new Aze,Npd(B,(C=new zNe,C.a+='\\u2003&lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone Number\" placeholder=\"eg: 000-00-0000000\" mask=\"000-00-0000000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone with Odd\" placeholder=\"eg: (00) 0000-0000\" mask=\"(00) 0000-0000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"US Phone Number\" placeholder=\"eg: (000) 000-000\" mask=\"(000) 000-000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CEP\" placeholder=\"eg: 00000-000\" mask=\"00000-000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CPF\" placeholder=\"eg: 000.000.000-00\" mask=\"000.000.000-00\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Money\" placeholder=\"eg: 000,000,000,000,000.00\" mask=\"000,000,000,000,000.00\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br>',new Pwb(C.a)).a),zo(B.tb,R8e,true),B)),zo(c.tb,e5e,true),c));EQb(b,(d=new k7b,EQb(d,(D=new zmd,Lpd(D.b,'The mask will be placed from the right to the left if reverse is true (Default : false)'),Vs(ho(D.a),(new Vwb(gxb('Reverse'))).a),QB(D,'Reverse'),D)),EQb(d,(F=new k7b,EQb(F,(G=new t6b,trc((!G.X&&(G.X=new vrc(G)),G.X),J7e),ho(G.G).setAttribute(c3e,Fmf),Bpd(G.B).length==0||ro(G.B,w1e),Cpd(G.B,Gmf),Ds(ho(G.G),c3e).length==0||ro(G.B,w1e),G.d.reverse=true,G.c=Hmf,G)),EQb(F,(H=new t6b,trc((!H.X&&(H.X=new vrc(H)),H.X),J7e),ho(H.G).setAttribute(c3e,Imf),Bpd(H.B).length==0||ro(H.B,w1e),Cpd(H.B,Jmf),Ds(ho(H.G),c3e).length==0||ro(H.B,w1e),H.d.reverse=true,H.c=Kmf,H)),EQb(F,(I=new t6b,trc((!I.X&&(I.X=new vrc(I)),I.X),J7e),ho(I.G).setAttribute(c3e,Lmf),Bpd(I.B).length==0||ro(I.B,w1e),Cpd(I.B,Mmf),Ds(ho(I.G),c3e).length==0||ro(I.B,w1e),I.d.reverse=true,I.c=Nmf,I)),F)),EQb(d,(J=new Aze,Npd(J,(K=new zNe,K.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Pwb(K.a)).a),zo(J.tb,R8e,true),J)),zo(d.tb,e5e,true),d));EQb(b,(e=new k7b,EQb(e,(L=new zmd,Lpd(L.b,'The textfield will automatically clears whenever the value is not match with the mask provided. (Default : false)'),Vs(ho(L.a),(new Vwb(gxb(Omf))).a),QB(L,Omf),L)),EQb(e,(M=new k7b,EQb(M,(N=new t6b,trc((!N.X&&(N.X=new vrc(N)),N.X),J7e),N.d.clearIfNotMatch=true,ho(N.G).setAttribute(c3e,Fmf),Bpd(N.B).length==0||ro(N.B,w1e),Cpd(N.B,Gmf),Ds(ho(N.G),c3e).length==0||ro(N.B,w1e),N.c=Hmf,N)),EQb(M,(O=new t6b,trc((!O.X&&(O.X=new vrc(O)),O.X),J7e),O.d.clearIfNotMatch=true,ho(O.G).setAttribute(c3e,Imf),Bpd(O.B).length==0||ro(O.B,w1e),Cpd(O.B,Jmf),Ds(ho(O.G),c3e).length==0||ro(O.B,w1e),O.c=Kmf,O)),EQb(M,(P=new t6b,trc((!P.X&&(P.X=new vrc(P)),P.X),J7e),P.d.clearIfNotMatch=true,ho(P.G).setAttribute(c3e,Lmf),Bpd(P.B).length==0||ro(P.B,w1e),Cpd(P.B,Mmf),Ds(ho(P.G),c3e).length==0||ro(P.B,w1e),P.c=Nmf,P)),M)),EQb(e,(Q=new Aze,Npd(Q,(R=new zNe,R.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Pwb(R.a)).a),zo(Q.tb,R8e,true),Q)),zo(e.tb,e5e,true),e));EQb(b,(f=new k7b,EQb(f,(S=new zmd,Lpd(S.b,'Set whether you want to set on focus on your mask for easy selection.'),Vs(ho(S.a),(new Vwb(gxb(Pmf))).a),QB(S,Pmf),S)),EQb(f,(T=new k7b,EQb(T,(U=new t6b,trc((!U.X&&(U.X=new vrc(U)),U.X),J7e),U.d.selectOnFocus=true,ho(U.G).setAttribute(c3e,Fmf),Bpd(U.B).length==0||ro(U.B,w1e),Cpd(U.B,Gmf),Ds(ho(U.G),c3e).length==0||ro(U.B,w1e),U.c=Hmf,U)),EQb(T,(V=new t6b,trc((!V.X&&(V.X=new vrc(V)),V.X),J7e),V.d.selectOnFocus=true,ho(V.G).setAttribute(c3e,Imf),Bpd(V.B).length==0||ro(V.B,w1e),Cpd(V.B,Jmf),Ds(ho(V.G),c3e).length==0||ro(V.B,w1e),V.c=Kmf,V)),EQb(T,(W=new t6b,trc((!W.X&&(W.X=new vrc(W)),W.X),J7e),W.d.selectOnFocus=true,ho(W.G).setAttribute(c3e,Lmf),Bpd(W.B).length==0||ro(W.B,w1e),Cpd(W.B,Mmf),Ds(ho(W.G),c3e).length==0||ro(W.B,w1e),W.c=Nmf,W)),T)),EQb(f,(X=new Aze,Npd(X,(Y=new zNe,Y.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Pwb(Y.a)).a),zo(X.tb,R8e,true),X)),zo(f.tb,e5e,true),f));EQb(b,(g=new k7b,EQb(g,(Z=new zmd,Lpd(Z.b,'We supported type safe Input Masks'),Vs(ho(Z.a),(new Vwb(gxb('Types'))).a),QB(Z,'Types'),Z)),EQb(g,($=new t6b,trc((!$.X&&($.X=new vrc($)),$.X),S8e),ho($.G).setAttribute(c3e,'eg. A0A-1A1'),Bpd($.B).length==0||ro($.B,w1e),Cpd($.B,CZe),Ds(ho($.G),c3e).length==0||ro($.B,w1e),$.c='S0S-0S0',S4b($,a.a),$)),EQb(g,(ab=new m6b,trc((!ab.X&&(ab.X=new vrc(ab)),ab.X),S8e),Cpd(ab.B,'Integer'),Ds(ho(ab.G),c3e).length==0||ro(ab.B,w1e),ab.c='000-00-000',S4b(ab,a.c),a.n.e=ab,ab)),EQb(g,(bb=new T5b,trc((!bb.X&&(bb.X=new vrc(bb)),bb.X),S8e),Cpd(bb.B,'Double'),Ds(ho(bb.G),c3e).length==0||ro(bb.B,w1e),bb.c='000-00-00000',S4b(bb,a.d),a.n.c=bb,bb)),EQb(g,(cb=new X5b,trc((!cb.X&&(cb.X=new vrc(cb)),cb.X),S8e),Cpd(cb.B,Qmf),Ds(ho(cb.G),c3e).length==0||ro(cb.B,w1e),cb.c='000-00-0000',S4b(cb,a.e),a.n.d=cb,cb)),EQb(g,(db=new q6b,trc((!db.X&&(db.X=new vrc(db)),db.X),S8e),Cpd(db.B,'Long'),Ds(ho(db.G),c3e).length==0||ro(db.B,w1e),db.c=Emf,S4b(db,a.f),a.n.f=db,db)),EQb(g,(eb=new Q5b,trc((!eb.X&&(eb.X=new vrc(eb)),eb.X),S8e),eb.b=Bmf,fb=eNe(eNe(eNe(Bmf.toLowerCase(),'m','0'),'d','0'),'y','0'),eb.c=fb,eb.ob?xRb(eb,S4b(eb,new umc(eb))):xRb(eb,Go(eb,new smc(eb),(!oB&&(oB=new Vz),oB))),Cpd(eb.B,N_e),Ds(ho(eb.G),c3e).length==0||ro(eb.B,w1e),S4b(eb,a.g),a.n.b=eb,eb)),zo(g.tb,e5e,true),g));EQb(b,(h=new k7b,EQb(h,(gb=new zmd,Lpd(gb.b,'Gets the value of the field with the mask.'),Vs(ho(gb.a),(new Vwb(gxb(e9e))).a),QB(gb,e9e),gb)),EQb(h,(hb=new k7b,EQb(hb,(ib=new t6b,trc((!ib.X&&(ib.X=new vrc(ib)),ib.X),J7e),ho(ib.G).setAttribute(c3e,Fmf),Bpd(ib.B).length==0||ro(ib.B,w1e),Cpd(ib.B,Gmf),Ds(ho(ib.G),c3e).length==0||ro(ib.B,w1e),ib.d.reverse=true,ib.c=Hmf,a.n.g=ib,ib)),EQb(hb,(jb=new Mdd,EQb(jb,(kb=new GXb,NYb(kb.k,e9e),kb.k.ob||EQb(kb,kb.k),IQb(kb,a.j),kb)),trc((!jb.X&&(jb.X=new vrc(jb)),jb.X),S8e),jb)),hb)),EQb(h,(lb=new Aze,Npd(lb,(mb=new zNe,mb.a+='inputMask.getValue();',new Pwb(mb.a)).a),zo(lb.tb,W8e,true),lb)),zo(h.tb,e5e,true),h));EQb(b,(i=new k7b,EQb(i,(nb=new zmd,Lpd(nb.b,'Gets the value of the field without the mask.'),Vs(ho(nb.a),(new Vwb(gxb(Rmf))).a),QB(nb,Rmf),nb)),EQb(i,(ob=new k7b,EQb(ob,(pb=new t6b,trc((!pb.X&&(pb.X=new vrc(pb)),pb.X),J7e),ho(pb.G).setAttribute(c3e,Fmf),Bpd(pb.B).length==0||ro(pb.B,w1e),Cpd(pb.B,Gmf),Ds(ho(pb.G),c3e).length==0||ro(pb.B,w1e),pb.d.reverse=true,pb.c=Hmf,a.n.a=pb,pb)),EQb(ob,(qb=new Mdd,EQb(qb,(rb=new GXb,NYb(rb.k,Rmf),rb.k.ob||EQb(rb,rb.k),IQb(rb,a.i),rb)),trc((!qb.X&&(qb.X=new vrc(qb)),qb.X),S8e),qb)),ob)),EQb(i,(sb=new Aze,Npd(sb,(tb=new zNe,tb.a+='inputMask.getCleanValue();',new Pwb(tb.a)).a),zo(sb.tb,W8e,true),sb)),zo(i.tb,e5e,true),i));EQb(b,(j=new k7b,EQb(j,(ub=new zmd,Lpd(ub.b,'Programmatically controls the Input Mask main methods.'),Vs(ho(ub.a),(new Vwb(gxb(Smf))).a),QB(ub,Smf),ub)),EQb(j,(vb=new k7b,EQb(vb,(wb=new t6b,trc((!wb.X&&(wb.X=new vrc(wb)),wb.X),J7e),ho(wb.G).setAttribute(c3e,Fmf),Bpd(wb.B).length==0||ro(wb.B,w1e),Cpd(wb.B,Gmf),Ds(ho(wb.G),c3e).length==0||ro(wb.B,w1e),wb.d.reverse=true,wb.c=Hmf,a.n.i=wb,wb)),EQb(vb,(xb=new Mdd,EQb(xb,(yb=new GXb,yb.tb.style[A1e]=d9e,zRb(yb,(zzc(),kzc)),NYb(yb.k,'Unmask'),yb.k.ob||EQb(yb,yb.k),aSb(yb,Zuc),IQb(yb,a.k),yb)),EQb(xb,(zb=new GXb,NYb(zb.k,'mask'),zb.k.ob||EQb(zb,zb.k),IQb(zb,a.b),zb)),trc((!xb.X&&(xb.X=new vrc(xb)),xb.X),S8e),xb)),vb)),EQb(j,(Ab=new Aze,Npd(Ab,(Bb=new zNe,Bb.a+='\\u2003inputMask.mask(\"00.00\"); <br> inputMask.unmask();',new Pwb(Bb.a)).a),zo(Ab.tb,W8e,true),Ab)),zo(j.tb,e5e,true),j));return b}\nvar Bmf='MM/dd/yyyy',Dmf='Basic Examples',Emf='000-00-0000000',Fmf='eg: 000.000.000.000',Gmf='Ip Address',Hmf='000.000.000.000',Imf='eg: 000000.00%',Jmf='Percentage',Kmf='000000.00%',Lmf='eg: 0000 0000 0000 0000',Mmf='Credit Card',Nmf='0000 0000 0000 0000',Omf='Clear If not Match',Pmf='Select on Focus',Rmf='Get Clean Value',Smf='Unmask and Mask control';Nvb(2648,323,e3e,Q5b);_.Xd=function R5b(){return w6b(this.a,this.b)};var PP=FLe(Cmf,'MaterialDateInputMask',2648);Nvb(2645,323,e3e,T5b);_.Xd=function U5b(){return WLe($wnd.$(ho(this.G)).cleanVal())};_.Yd=function V5b(a){var b;S5b((b=this,xF(a),b))};var QP=FLe(Cmf,'MaterialDoubleInputMask',2645);Nvb(2646,323,e3e,X5b);_.Xd=function Y5b(){return new bMe(fMe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function Z5b(a){var b;W5b((b=this,xF(a),b))};var RP=FLe(Cmf,'MaterialFloatInputMask',2646);Nvb(2644,323,e3e,m6b);_.Xd=function n6b(){return vMe(XLe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function o6b(a){var b;l6b((b=this,xF(a),b))};var UP=FLe(Cmf,'MaterialIntegerInputMask',2644);Nvb(2647,323,e3e,q6b);_.Xd=function r6b(){return GMe(YLe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function s6b(a){var b;p6b((b=this,xF(a),b))};var VP=FLe(Cmf,'MaterialLongInputMask',2647);Nvb(2699,1,{},y6b);var XP=FLe('gwt.material.design.addins.client.inputmask.base','DateInputParser',2699);Nvb(972,55,i1e,hFd);_.Fe=function iFd(){_ye();gKb(this,new bze(Pgf,'An inputmask helps the user with the input by ensuring a predefined format. This can be useful for dates, numerics, phone numbers etc...','addins/inputmask/InputMask',''))};var O3=FLe(Jaf,'InputMaskPresenter',972);Nvb(1365,65,j1e,oFd);var $3=FLe(Jaf,'InputMaskView',1365);Nvb(1868,1,{},qFd);var Z3=FLe(Jaf,'InputMaskView_BinderImpl/Widgets',1868);Nvb(1869,1,L0e,rFd);_.Bd=function sFd(a){Imd(lF(a.a))};var Q3=FLe(Jaf,'InputMaskView_BinderImpl/Widgets/1',1869);Nvb(1878,1,Q1e,tFd);_.od=function uFd(a){G5b(this.a.n.i,Hmf)};var P3=FLe(Jaf,'InputMaskView_BinderImpl/Widgets/10',1878);Nvb(1870,1,L0e,vFd);_.Bd=function wFd(a){Imd(vMe(XLe($wnd.$(ho(this.a.n.e.G)).cleanVal()))+'')};var R3=FLe(Jaf,'InputMaskView_BinderImpl/Widgets/2',1870);Nvb(1871,1,L0e,xFd);_.Bd=function yFd(a){Imd(''+$Le(WLe($wnd.$(ho(this.a.n.c.G)).cleanVal())))};var S3=FLe(Jaf,'InputMaskView_BinderImpl/Widgets/3',1871);Nvb(1872,1,L0e,zFd);_.Bd=function AFd(a){Imd(''+(new bMe(fMe($wnd.$(ho(this.a.n.d.G)).cleanVal()))).a)};var T3=FLe(Jaf,'InputMaskView_BinderImpl/Widgets/4',1872);Nvb(1873,1,L0e,BFd);_.Bd=function CFd(a){Imd(''+Evb(GMe(YLe($wnd.$(ho(this.a.n.f.G)).cleanVal())).a))};var U3=FLe(Jaf,'InputMaskView_BinderImpl/Widgets/5',1873);Nvb(1874,1,L0e,DFd);_.Bd=function EFd(a){Imd(bE(O5b(this.a.n.b)))};var V3=FLe(Jaf,'InputMaskView_BinderImpl/Widgets/6',1874);Nvb(1875,1,Q1e,FFd);_.od=function GFd(a){Imd($wnd.$(ho(this.a.n.a.G)).cleanVal())};var W3=FLe(Jaf,'InputMaskView_BinderImpl/Widgets/7',1875);Nvb(1876,1,Q1e,HFd);_.od=function IFd(a){Imd(lF(V4b(this.a.n.g)))};var X3=FLe(Jaf,'InputMaskView_BinderImpl/Widgets/8',1876);Nvb(1877,1,Q1e,JFd);_.od=function KFd(a){$wnd.$(ho(this.a.n.i.G)).unmask()};var Y3=FLe(Jaf,'InputMaskView_BinderImpl/Widgets/9',1877);Nvb(813,1,n9e);_.Yc=function TFd(){yOb(this.b,MFd(this.a.a))};var OMe,PMe,QMe,RMe;var AF=ILe('long','J');tYe(Kq)(10);\n//# sourceURL=gwtmaterialdemo-10.js\n")
