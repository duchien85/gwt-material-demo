$wnd.gwtmaterialdemo.runAsyncCallback50("function R8d(a){this.a=a}\nfunction zqe(a){this.a=a}\nfunction Bqe(a){this.a=a}\nfunction Dqe(a){this.a=a}\nfunction Fqe(a){this.a=a}\nfunction Hqe(a){this.a=a}\nfunction Iqe(a){this.a=a}\nfunction Kqe(a){this.a=a}\nfunction Q8d(a){this.a=new R8d(this);this.b=a}\nfunction Vqe(a,b,c){st.call(this,a,b);this.a=c}\nfunction H8d(a,b,c){JEb();gFb.call(this,a,b,c,(Shd(),Qhd))}\nfunction O8d(){yFb.call(this);wFb(this,P8d(new Q8d(this)))}\nfunction V8d(a){var b;if(!a.d){b=new O8d;a.d=b}return a.d}\nfunction rqe(a,b){Xgc((!a.d&&(a.d=new Ygc(a)),a.d),b)}\nfunction vqe(a){U7c(a);ric((!a.a&&(a.a=new sic(a,ENe)),a.a),true);so(a,a.b)}\nfunction uqe(a){ric((!a.a&&(a.a=new sic(a,ENe)),a.a),false);(Rsb(),a.rb).style[SHe]=BKe}\nfunction oqe(a){a.e=cMb(a,N$b(a,new Iqe(a)));a.c=cMb(a,M$b(a,new Kqe(a)))}\nfunction Xqe(){Uqe();return MC(GC(anb,1),zIe,345,0,[Sqe,Tqe,Rqe])}\nfunction sqe(){nqe();$7c.call(this);yo((Rsb(),this.rb),'inline-search',true)}\nfunction wqe(){nqe();sqe.call(this);yo((Rsb(),this.rb),'expandable-search',true)}\nfunction Uqe(){Uqe=Sqb;Sqe=new Vqe(CIe,0,'');Tqe=new Vqe('LIGHT',1,'light');Rqe=new Vqe('DARK',2,'dark')}\nfunction U8d(a){var b,c;if(!a.c){c=new H8d(WBb(QFb(a.a)),(b=V8d(a),b),T8d(a));BEb((TFb(a.a),c),OHb(TFb(a.a)));a.c=c}return a.c}\nfunction qqe(a){T7c(a);DFe((Hue(vmb),vmb.i));'This ['+Jue(a.zh)+X0e;Fjc(Bjc((wjc(),ojc),MC(GC(KR,1),xHe,225,0,[])),Tqb(Fqe.prototype.sf,Fqe,[a]),new Hqe(a))}\nfunction P8d(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;b=new xbc;jLb(b,(c=new T_b,jLb(c,(e=new Jad,zs(ho(e.a),(jsb(),(new Zrb(ksb(ubf))).a)),gA(e,ubf),e)),jLb(c,(f=new I6c,F6c(f,(g=new N6c,jLb(g,g.a),ho(g.a).textContent=L8e,(Rsb(),g.rb).style[UNe]=(Xw(),GPe),g)),F6c(f,(h=new R6c,p2b(h,new $8c((i=new sqe,iMb(i,(Nqc(),yqc)),i.rb.style[SHe]=bWe,rqe(i,(Uqe(),Tqe)),ho(i.D).setAttribute(ASe,JZe),Mdd(i.A).length==0||qo(i.A,sLe),i))),h)),f)),jLb(c,(j=new bme,Ydd(j,(k=new Cwe,k.a+='\\u2003&lt;m:MaterialNavBar&gt;<br> \\u2003&lt;m:MaterialNavBrand text=\"App Title\" paddingLeft=\"16\" /&gt;<br> \\u2003&lt;m:MaterialNavSection&gt;<br> \\u2003\\u2003&lt;incubator:search.InlineSearch ui:field=\"search\" theme=\"LIGHT\" width=\"50%\" placeholder=\"Search\" display=\"INLINE\"/&gt;<br> \\u2003&lt;/m:MaterialNavSection&gt;<br> &lt;/m:MaterialNavBar&gt;<br>',new Trb(k.a)).a),yo(j.rb,ySe,true),j)),yo(c.rb,TOe,true),c));jLb(b,(d=new T_b,jLb(d,(l=new Jad,zs(ho(l.a),(new Zrb(ksb(vbf))).a),gA(l,vbf),l)),jLb(d,(m=new I6c,F6c(m,(n=new N6c,jLb(n,n.a),ho(n.a).textContent=L8e,n.rb.style[UNe]=GPe,n)),F6c(m,(o=new R6c,p2b(o,new $8c((p=new f5c,QRb(p,(sJc(),yFc)),nLb(p,a.a),p))),p2b(o,new $8c((q=new wqe,iMb(q,yqc),q.b=bWe,rqe(q,Tqe),ho(q.D).setAttribute(ASe,JZe),Mdd(q.A).length==0||qo(q.A,sLe),a.b.a=q,q))),lMb(o,(Ov(),Nv)),o)),m)),jLb(d,(r=new bme,Ydd(r,(s=new Cwe,s.a+='\\u2003&lt;m:MaterialNavBar&gt;<br> \\u2003&lt;m:MaterialNavBrand text=\"App Title\" paddingLeft=\"16\" /&gt;<br> \\u2003&lt;m:MaterialNavSection float=\"RIGHT\"&gt;<br> \\u2003\\u2003&lt;m:MaterialLink iconType=\"SEARCH\" ui:field=\"openSearch\"/&gt;<br> \\u2003\\u2003&lt;incubator:search.ExpandableInlineSearch ui:field=\"expandableInline\" <br> theme=\"LIGHT\" width=\"50%\" placeholder=\"Search\" display=\"INLINE\"/&gt;<br> \\u2003&lt;/m:MaterialNavSection&gt;<br> &lt;/m:MaterialNavBar&gt;<br>',new Trb(s.a)).a),yo(r.rb,ySe,true),r)),jLb(d,(t=new bme,Ydd(t,(u=new Cwe,u.a+='\\u2003// Opening your expandable search<br> @UiHandler(\"openSearch\")<br> void openSearch(ClickEvent e) {<br> \\u2003expandableInline.open();<br> }',new Trb(u.a)).a),yo(t.rb,ESe,true),t)),yo(d.rb,TOe,true),d));return b}\nvar ubf='Default Behaviour',vbf='Expandable Behaviour';Rqb(986,54,eLe,H8d);_.Ae=function I8d(){kie();QEb(this,new mie(A$e,'Extending MaterialSearch component that be inlined in the navigation bar.','addins/signature/InlineSearchView',''))};var dib=Nue(iZe,'InlineSearchPresenter',986);Rqb(1526,62,fLe,O8d);var gib=Nue(iZe,'InlineSearchView',1526);Rqb(2040,1,{},Q8d);var fib=Nue(iZe,'InlineSearchView_BinderImpl/Widgets',2040);Rqb(2041,1,KLe,R8d);_.kd=function S8d(a){vqe(this.a.b.a)};var eib=Nue(iZe,'InlineSearchView_BinderImpl/Widgets/1',2041);Rqb(871,1,USe);_.Vc=function _8d(){dJb(this.b,U8d(this.a.a))};Rqb(649,423,cNe,sqe);_.Fc=function tqe(){qqe(this)};var _mb=Nue(wbf,'InlineSearch',649);Rqb(2544,649,cNe,wqe);_.Fc=function xqe(){qqe(this);DFe((Hue(vmb),vmb.i));Hue(Wmb);cMb(this,Fo(this,new b8c(new zqe(this)),Lz?Lz:(Lz=new vy)));cMb(this,M$b(this,new Bqe(this)));cMb(this,N$b(this,new Dqe(this)))};_.wc=function yqe(a){this.b=a};var Wmb=Nue(wbf,'ExpandableInlineSearch',2544);Rqb(2545,1,LKe,zqe);_.td=function Aqe(a){uqe(this.a)};var Tmb=Nue(wbf,'ExpandableInlineSearch/lambda$0$Type',2545);Rqb(2546,1,EKe,Bqe);_.hd=function Cqe(a){yo(jo(this.a),eOe,true)};var Umb=Nue(wbf,'ExpandableInlineSearch/lambda$1$Type',2546);Rqb(2547,1,P4e,Dqe);_.md=function Eqe(a){yo(jo(this.a),eOe,false)};var Vmb=Nue(wbf,'ExpandableInlineSearch/lambda$2$Type',2547);Rqb(3081,$wnd.Function,{},Fqe);_.sf=function Gqe(a){oqe(this.a)};Rqb(2550,1,{},Hqe);var Xmb=Nue(wbf,'InlineSearch/lambda$1$Type',2550);Rqb(2548,1,P4e,Iqe);_.md=function Jqe(a){yo(jo(this.a),'wide',true)};var Ymb=Nue(wbf,'InlineSearch/lambda$2$Type',2548);Rqb(2549,1,EKe,Kqe);_.hd=function Lqe(a){yo(jo(this.a),'wide',false)};var Zmb=Nue(wbf,'InlineSearch/lambda$3$Type',2549);Rqb(345,29,{53:1,345:1,4:1,44:1,29:1},Vqe);_.bd=function Wqe(){return this.a};var Rqe,Sqe,Tqe;var anb=Oue('gwt.material.design.incubator.client.search.constants','Theme',345,Xqe);YGe(Fq)(50);\n//# sourceURL=gwtmaterialdemo-50.js\n")