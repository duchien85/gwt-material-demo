$wnd.gwtmaterialdemo.runAsyncCallback7("function Dub(){}\nfunction wpd(){}\nfunction ypd(){}\nfunction Wtb(){Vtb()}\nfunction GVb(a,b){a.o=b}\nfunction LVb(a){this.a=a}\nfunction NVb(a){this.a=a}\nfunction PVb(a){this.a=a}\nfunction Cpd(a){this.a=a}\nfunction Epd(a){this.a=a}\nfunction ztb(a){!!ptb&&jA(ptb,a)}\nfunction Gtb(){ttb&&ztb(new Wtb)}\nfunction Vtb(){Vtb=Gqb;Utb=new qy}\nfunction DVb(a){HVb(a.k,a.o,a.i,a.f)}\nfunction EVb(a){HVb(a.k,a.o,a.i,a.f)}\nfunction upd(a){GVb(a.b,ho(a.a));FVb(a.b)}\nfunction CVb(a){a.k.style[O_e]=P_e+a.e+' '+a.g}\nfunction Ipd(a){var b;if(!a.d){b=new vpd;a.d=b}return a.d}\nfunction Bpd(a){this.a=new Cpd(this);this.b=new Epd(this);this.c=a}\nfunction npd(a,b,c){rEb();QEb.call(this,a,b,c,(Bhd(),zhd))}\nfunction xtb(a){Atb();Ctb();return vtb((Vtb(),Vtb(),Utb),a)}\nfunction Hpd(a){var b,c;if(!a.c){c=new npd(EBb(yFb(a.a)),(b=Ipd(a),b),Gpd(a));jEb((BFb(a.a),c),vHb(BFb(a.a)));a.c=c}return a.c}\nfunction IVb(a){if(a.a){a.k.style[vIe]=S_e+a.j+'ms '+a.b;a.k.style[wIe]=S_e+a.j+'ms '+a.b}else{a.k.style[vIe]='';a.k.style[wIe]=''}}\nfunction vpd(){gFb.call(this);eFb(this,Apd(new Bpd(this)));uhd(this.b);Fo(this.b,new wpd,Gz?Gz:(Gz=new qy));Fo(this.b,new ypd,(!Lz&&(Lz=new qy),Lz))}\nfunction BVb(a){$doc.documentElement.style[MGe]=a.p;(Fsb(),a.rb).style[QGe]=(Qu(),TEe);!a.W&&(a.W=new FUc(a));CUc(a.W);if(a.c){Lo(a);a.c=false}Jz(a,a)}\nfunction JVb(){wMb.call(this,$doc.createElement(KGe),HC(BC(cob,1),dHe,2,6,['material-cutout']));this.d=(bpc(),Ckc);this.i=10;this.n=0.8;this.a=true;this.b='ease';this.f=false;this.c=false;this.j=500;this.k=$doc.createElement(KGe);hs((Fsb(),this.rb),this.k);this.rb.style[MGe]=(jw(),YFe);this.rb.style[QGe]=(Qu(),TEe)}\nfunction HVb(a,b,c,d){var e,f,g,h,i;h=(Ss(b)+$wnd.pageYOffset|0)-(PKb==null&&(PKb=$wnd.$(jJe)),PKb).scrollTop();g=Qs(b);i=(b.offsetWidth||0)|0;f=(b.offsetHeight||0)|0;if(d){if(i!=f){e=i-f;if(i>f){f+=e;h-=e/2}else{e=-e;i+=e;g-=e/2}}}h-=c;g-=c;i+=c*2;f+=c*2;$wnd.$(a).css(OGe,h+cGe);$wnd.$(a).css(SFe,g+cGe);$wnd.$(a).css(QEe,i+cGe);$wnd.$(a).css(PEe,f+cGe)}\nfunction Ctb(){if(!ttb){yub(\"function __gwt_initWindowScrollHandler(scroll) {\\n  var wnd = window, oldOnScroll = wnd.onscroll;\\n  \\n  wnd.onscroll = function(evt) {\\n    try {\\n      scroll();\\n    } finally {\\n      oldOnScroll && oldOnScroll(evt);\\n    }\\n  };\\n  \\n  // Remove the reference once we've initialize the handler\\n  wnd.__gwt_initWindowScrollHandler = undefined;\\n}\\n\",new Dub);ttb=true}}\nfunction Ls(a){var b=a.offsetLeft,c=a.offsetTop;var d=a.offsetWidth,e=a.offsetHeight;if(a.parentNode!=a.offsetParent){b-=a.parentNode.offsetLeft;c-=a.parentNode.offsetTop}var f=a.parentNode;while(f&&f.nodeType==1){b<f.scrollLeft&&(f.scrollLeft=b);b+d>f.scrollLeft+f.clientWidth&&(f.scrollLeft=b+d-f.clientWidth);c<f.scrollTop&&(f.scrollTop=c);c+e>f.scrollTop+f.clientHeight&&(f.scrollTop=c+e-f.clientHeight);var g=f.offsetLeft,h=f.offsetTop;if(f.parentNode!=f.offsetParent){g-=f.parentNode.offsetLeft;h-=f.parentNode.offsetTop}b+=g-f.scrollLeft;c+=h-f.scrollTop;f=f.parentNode}}\nfunction FVb(a){var b,c,d,e,f;c=(Fsb(),a.rb).style;c[QEe]=(Sw(),'100.0%');c[PEe]='100.0%';c[LGe]=(yw(),aGe);c[OGe]=NGe;c[SFe]=NGe;c[RGe]='10000';a.k.className='material-cutout-focus';c=a.k.style;c[CKe]=\"''\";c[LGe]=_Fe;c[RGe]='-1';if(!a.o){throw gqb(new qse('The target element should be set before calling open().'))}Ls(a.o);a.g==null&&(d=new vMb($doc.createElement(KGe)),MLb(d,a.d),e=d.rb.style,e[LGe]=aGe,undefined,e[QEe]='1.0px',undefined,e[PEe]='1.0px',undefined,e[SFe]='-10.0px',undefined,e[OGe]='-10.0px',undefined,e[RGe]='-10000',undefined,f=Jfc(a.d),a.n<1&&bte(f.substr(0,4),'rgb(')&&(f=gte(gte(f,'rgb(','rgba('),')',', '+a.n+')')),a.g=f,undefined);b=$doc.documentElement.style;a.p=b[MGe];b[MGe]=YFe;a.e==null&&(a.e=(PKb==null&&(PKb=$wnd.$(jJe)),PKb).width()+300+cGe);IVb(a);if(a.a){a.k.style[O_e]='0px 0px 0px 0rem '+a.g;xr((qr(),pr),new LVb(a))}else{a.k.style[O_e]=P_e+a.e+' '+a.g}if(a.f){a.k.style[Q_e]=_Se;a.k.style[R_e]=_Se}else{a.k.style[Q_e]='';a.k.style[R_e]=''}HVb(a.k,a.o,a.i,a.f);LLb(a,wtb(new NVb(a)));LLb(a,xtb(new PVb(a)));a.rb.style[QGe]='';if(!a.qb){a.c=true;_ub((Czb(),Gzb(null)),a)}Oz(a,a)}\nfunction Apd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=new gbc;SKb(b,(c=new A_b,SKb(c,(e=new sad,xs(ho(e.a),(Zrb(),(new Nrb($rb(tPe))).a)),bA(e,tPe),e)),SKb(c,(f=new dje,Hdd(f,(g=new Bte,g.a+='\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;',new Hrb(g.a)).a),yo((Fsb(),f.rb),uPe,true),f)),yo(c.rb,PLe,true),c));SKb(b,(d=new A_b,SKb(d,(h=new sad,Fdd(h.b,'Click the icon below to show a material cutout.'),xs(ho(h.a),(new Nrb($rb(U_e))).a),bA(h,U_e),h)),SKb(d,(i=new z4c,x4c(i,(bJc(),QDc)),WKb(i,a.a),a.c.a=i,i)),SKb(d,(j=new JVb,SKb(j,(k=new sad,Fdd(k.b,'Description of your new Feature'),xs(ho(k.a),(new Nrb($rb(V_e))).a),bA(k,V_e),mMb(k,(bpc(),Ooc)),k)),SKb(j,(l=new BRb,MLb(l,Ooc),JSb(l.j,NPe),l.j.mb||SKb(l,l.j),mMb(l,Ckc),WKb(l,a.b),l)),lMb(j,(jLc(),fLc)),j.n=0.8,j.g=null,j.f=true,a.c.b=j,j)),SKb(d,(m=new dje,Hdd(m,(n=new Bte,n.a+='\\u2003&lt; -- Target Element --&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;<br>',new Hrb(n.a)).a),yo(m.rb,uPe,true),m)),SKb(d,(o=new dje,Hdd(o,(p=new Bte,p.a+='\\u2003@UiField MaterialCutOut cutout;<br><br>  &lt;-- Target Element --&gt;<br> @UiField MaterialIcon btnCutOut; <br><br>  @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.open();<br> }',new Hrb(p.a)).a),yo(o.rb,APe,true),o)),yo(d.rb,PLe,true),d));return b}\nvar O_e='boxShadow',P_e='0px 0px 0px ',Q_e='WebkitBorderRadius',R_e='borderRadius',S_e='box-shadow ',T_e='gwt.material.design.addins.client.cutout',U_e='Material Cut Out',V_e='New Feature';var ttb=false;Fqb(724,gGe,{},Wtb);_.cd=function Xtb(a){EVb(rD(a,2838).a)};_.dd=function Ytb(){return Utb};var Utb;var CI=Mre(fEe,'Window/ScrollEvent',724);Fqb(1004,1,{},Dub);_.Wc=function Eub(){$wnd.__gwt_initWindowScrollHandler(XDe(Gtb))};var GI=Mre(mHe,'WindowImplIE/3',1004);Fqb(2147,25,yIe,JVb);_.Me=function KVb(a){this.d=a;this.g=null};_.a=false;_.c=false;_.f=false;_.i=0;_.j=0;_.n=0;var YM=Mre(T_e,'MaterialCutOut',2147);Fqb(2148,1,{},LVb);_.Wc=function MVb(){CVb(this.a)};var VM=Mre(T_e,'MaterialCutOut/lambda$0$Type',2148);Fqb(2149,1,DHe,NVb);_.ud=function OVb(a){DVb(this.a)};var WM=Mre(T_e,'MaterialCutOut/lambda$1$Type',2149);Fqb(2150,1,{9:1,2838:1},PVb);var XM=Mre(T_e,'MaterialCutOut/lambda$2$Type',2150);Fqb(916,55,aIe,npd);_.ye=function opd(){Khe();yEb(this,new Mhe('CutOuts','The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.','addins/cutouts/CutOutsView',''))};var D_=Mre(OQe,'CutOutsPresenter',916);Fqb(1268,63,bIe,vpd);var J_=Mre(OQe,'CutOutsView',1268);Fqb(1269,1,JHe,wpd);_.sd=function xpd(a){xad(new Aad(HC(BC($J,1),wEe,21,0,[])),'Close Event Fired',RIe,null)};var E_=Mre(OQe,'CutOutsView/lambda$0$Type',1269);Fqb(1270,1,uMe,ypd);_.td=function zpd(a){xad(new Aad(HC(BC($J,1),wEe,21,0,[])),'Open Event Fired',RIe,null)};var F_=Mre(OQe,'CutOutsView/lambda$1$Type',1270);Fqb(1750,1,{},Bpd);var I_=Mre(OQe,'CutOutsView_BinderImpl/Widgets',1750);Fqb(1751,1,GIe,Cpd);_.jd=function Dpd(a){upd(this.a.c)};var G_=Mre(OQe,'CutOutsView_BinderImpl/Widgets/1',1751);Fqb(1752,1,GIe,Epd);_.jd=function Fpd(a){BVb(this.a.c.b)};var H_=Mre(OQe,'CutOutsView_BinderImpl/Widgets/2',1752);Fqb(760,1,QPe);_.Uc=function Opd(){MIb(this.b,Hpd(this.a.a))};XDe(Dq)(7);\n//# sourceURL=gwtmaterialdemo-7.js\n")