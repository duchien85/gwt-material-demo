$wnd.gwtmaterialdemo.runAsyncCallback3("var $intern_106 = {18:1, 1890:1}, $intern_107 = {18:1, 1891:1}, $intern_108 = {18:1, 1892:1};\nfunction $addDragEndHandler(this$static, handler){\n  return $addHandler_0(this$static, new MaterialDnd$6(this$static, handler), ($clinit_DragEndEvent() , TYPE_39));\n}\n\nfunction $addDragMoveHandler(this$static, handler){\n  return $addHandler_0(this$static, new MaterialDnd$5(this$static, handler), ($clinit_DragMoveEvent() , TYPE_40));\n}\n\nfunction $addDragStartHandler(this$static, handler){\n  return $addHandler_0(this$static, new MaterialDnd$4(this$static, handler), ($clinit_DragStartEvent() , TYPE_41));\n}\n\nfunction MaterialDnd$4(this$0, val$handler){\n  this.this$01 = this$0;\n  this.val$handler2 = val$handler;\n}\n\ndefineClass(1391, 1, $intern_106, MaterialDnd$4);\n_.onDragStart = function onDragStart(event_0){\n  $isEnabled_0(this.this$01) && $onDragStart(this.val$handler2);\n}\n;\nvar Lgwt_material_design_addins_client_dnd_MaterialDnd$4_2_classLit = createForClass('gwt.material.design.addins.client.dnd', 'MaterialDnd/4', 1391);\nfunction MaterialDnd$5(this$0, val$handler){\n  this.this$01 = this$0;\n  this.val$handler2 = val$handler;\n}\n\ndefineClass(1392, 1, $intern_107, MaterialDnd$5);\n_.onDragMove = function onDragMove(event_0){\n  $isEnabled_0(this.this$01) && $onDragMove(this.val$handler2);\n}\n;\nvar Lgwt_material_design_addins_client_dnd_MaterialDnd$5_2_classLit = createForClass('gwt.material.design.addins.client.dnd', 'MaterialDnd/5', 1392);\nfunction MaterialDnd$6(this$0, val$handler){\n  this.this$01 = this$0;\n  this.val$handler2 = val$handler;\n}\n\ndefineClass(1393, 1, $intern_108, MaterialDnd$6);\n_.onDragEnd = function onDragEnd(event_0){\n  $isEnabled_0(this.this$01) && $onDragEnd_0(this.val$handler2);\n}\n;\nvar Lgwt_material_design_addins_client_dnd_MaterialDnd$6_2_classLit = createForClass('gwt.material.design.addins.client.dnd', 'MaterialDnd/6', 1393);\nfunction $setRestriction_0(this$static, restriction){\n  this$static.restriction = restriction;\n}\n\nfunction DndPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(670, 53, $intern_55, DndPresenter);\n_.onReveal = function onReveal_6(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Drag and Drop', 'Provides a delightful dragging capability.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_dnd_DndPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.dnd', 'DndPresenter', 670);\nfunction DndView(){\n  var dnd, dndEndOnly, dndEvent, dndRestrict, dndSelfRestrict, dndWoInertia, restriction, restriction1, restriction2;\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_0(new DndView_BinderImpl$Widgets(this)));\n  dnd = new MaterialDnd;\n  $setTarget_0(dnd, this.panel);\n  dndWoInertia = new MaterialDnd;\n  $setTarget_0(dndWoInertia, this.woInertialPanel);\n  dndWoInertia.inertia = false;\n  dndEndOnly = new MaterialDnd;\n  $setTarget_0(dndEndOnly, this.endOnlyPanel);\n  restriction = new Restriction;\n  restriction.endOnly = false;\n  dndEndOnly.restriction = restriction;\n  dndSelfRestrict = new MaterialDnd;\n  $setTarget_0(dndSelfRestrict, this.selfRestrict);\n  restriction1 = new Restriction;\n  $setRestriction_0(restriction1, ($clinit_Restriction$Restrict() , SELF));\n  dndSelfRestrict.restriction = restriction1;\n  dndRestrict = new MaterialDnd;\n  $setTarget_0(dndRestrict, this.restrictPanel);\n  restriction2 = new Restriction;\n  restriction2.top_0 = 0.25;\n  restriction2.left_0 = 0.25;\n  restriction2.right_0 = 0.75;\n  restriction2.bottom_0 = 0.75;\n  dndRestrict.restriction = restriction2;\n  dndEvent = new MaterialDnd;\n  $setTarget_0(dndEvent, this.eventPanel);\n  $addDragStartHandler(dndEvent, new DndView$1(this, dndEvent));\n  $addDragMoveHandler(dndEvent, new DndView$2(this, dndEvent));\n  $addDragEndHandler(dndEvent, new DndView$3(this, dndEvent));\n}\n\ndefineClass(876, 56, $intern_56, DndView);\nvar Lgwt_material_design_demo_client_application_addins_dnd_DndView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.dnd', 'DndView', 876);\nfunction $onDragStart(this$static){\n  this$static.val$dndEvent2.target_0.setBackgroundColor('blue');\n  $setVisible_0(this$static.this$01.lblStarted, true);\n}\n\nfunction DndView$1(this$0, val$dndEvent){\n  this.this$01 = this$0;\n  this.val$dndEvent2 = val$dndEvent;\n}\n\ndefineClass(877, 1, $intern_106, DndView$1);\n_.onDragStart = function onDragStart_0(event_0){\n  $onDragStart(this);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_dnd_DndView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.dnd', 'DndView/1', 877);\nfunction $onDragMove(this$static){\n  this$static.val$dndEvent2.target_0.setBackgroundColor('amber');\n  $setVisible_0(this$static.this$01.lblMoved, true);\n}\n\nfunction DndView$2(this$0, val$dndEvent){\n  this.this$01 = this$0;\n  this.val$dndEvent2 = val$dndEvent;\n}\n\ndefineClass(878, 1, $intern_107, DndView$2);\n_.onDragMove = function onDragMove_0(event_0){\n  $onDragMove(this);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_dnd_DndView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.dnd', 'DndView/2', 878);\nfunction $onDragEnd_0(this$static){\n  this$static.val$dndEvent2.target_0.setBackgroundColor('green');\n  $setVisible_0(this$static.this$01.lblEnded, true);\n}\n\nfunction DndView$3(this$0, val$dndEvent){\n  this.this$01 = this$0;\n  this.val$dndEvent2 = val$dndEvent;\n}\n\ndefineClass(879, 1, $intern_108, DndView$3);\n_.onDragEnd = function onDragEnd_0(event_0){\n  $onDragEnd_0(this);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_dnd_DndView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.dnd', 'DndView/3', 879);\nfunction DndView_BinderImpl(){\n}\n\ndefineClass(1154, 1, {}, DndView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_dnd_DndView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.dnd', 'DndView_BinderImpl', 1154);\nfunction $build_f_MaterialPanel1_0(this$static){\n  var f_MaterialPanel1, f_MaterialTitle2, f_MaterialPanel3, f_MaterialTitle14, f_PrettyPre15, f_MaterialTitle16, f_PrettyPre17, f_MaterialTitle18, f_PrettyPre19, f_MaterialTitle20, f_MaterialTitle21, f_PrettyPre22, f_MaterialTitle23, f_MaterialLabel24, f_PrettyPre25, f_MaterialTitle26, f_MaterialPanel27, f_PrettyPre29, panel, f_MaterialIcon4, f_MaterialLabel5, woInertialPanel, f_MaterialIcon6, f_MaterialLabel7, endOnlyPanel, f_MaterialIcon8, f_MaterialLabel9, selfRestrict, f_MaterialIcon10, f_MaterialLabel11, restrictPanel, f_MaterialIcon12, f_MaterialLabel13, sb, sb_0, sb_1, sb_2, sb_3, eventPanel, f_MaterialIcon28, lblStarted, lblMoved, lblEnded, sb_4;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_12(f_MaterialPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Introduction') , f_MaterialTitle2));\n  $add_12(f_MaterialPanel1, (f_MaterialPanel3 = new MaterialPanel , $add_12(f_MaterialPanel3, (panel = new MaterialPanel , $add_12(panel, (f_MaterialIcon4 = new MaterialIcon , $setIconSize_1(f_MaterialIcon4, ($clinit_IconSize() , SMALL)) , $setIconType_3(f_MaterialIcon4, ($clinit_IconType() , TOUCH_APP)) , f_MaterialIcon4)) , $add_12(panel, (f_MaterialLabel5 = new MaterialLabel , $setInnerHTML(($clinit_DOM() , f_MaterialLabel5.element), 'Default') , $setFontSize_0(f_MaterialLabel5.fontSizeMixin, '1.5em') , f_MaterialLabel5)) , panel.setHeight_0('150px') , panel.element.style['paddingTop'] = ($clinit_Style$Unit() , '50.0px') , $setBackgroundColor_0((!panel.colorsMixin_0 && (panel.colorsMixin_0 = new ColorsMixin(panel)) , panel.colorsMixin_0), 'white') , $setShadow_0((!panel.shadowMixin && (panel.shadowMixin = new ShadowMixin(panel)) , panel.shadowMixin), 1) , $setWaves(panel, ($clinit_WavesType() , DEFAULT_7)) , panel.element.style['width'] = '150px' , panel.element.style['margin'] = '10.0px' , $setTextAlign(panel, ($clinit_TextAlign() , CENTER_5)) , this$static.owner.panel = panel , panel)) , $add_12(f_MaterialPanel3, (woInertialPanel = new MaterialPanel , $add_12(woInertialPanel, (f_MaterialIcon6 = new MaterialIcon , $setIconSize_1(f_MaterialIcon6, SMALL) , $setIconType_3(f_MaterialIcon6, TOUCH_APP) , f_MaterialIcon6)) , $add_12(woInertialPanel, (f_MaterialLabel7 = new MaterialLabel , $setInnerHTML(f_MaterialLabel7.element, 'With Inertia') , $setFontSize_0(f_MaterialLabel7.fontSizeMixin, '1.5em') , f_MaterialLabel7)) , woInertialPanel.setHeight_0('150px') , woInertialPanel.element.style['paddingTop'] = '40.0px' , $setBackgroundColor_0((!woInertialPanel.colorsMixin_0 && (woInertialPanel.colorsMixin_0 = new ColorsMixin(woInertialPanel)) , woInertialPanel.colorsMixin_0), 'white') , $setShadow_0((!woInertialPanel.shadowMixin && (woInertialPanel.shadowMixin = new ShadowMixin(woInertialPanel)) , woInertialPanel.shadowMixin), 1) , $setWaves(woInertialPanel, DEFAULT_7) , woInertialPanel.element.style['width'] = '150px' , woInertialPanel.element.style['margin'] = '10.0px' , $setTextAlign(woInertialPanel, CENTER_5) , this$static.owner.woInertialPanel = woInertialPanel , woInertialPanel)) , $add_12(f_MaterialPanel3, (endOnlyPanel = new MaterialPanel , $add_12(endOnlyPanel, (f_MaterialIcon8 = new MaterialIcon , $setIconSize_1(f_MaterialIcon8, SMALL) , $setIconType_3(f_MaterialIcon8, TOUCH_APP) , f_MaterialIcon8)) , $add_12(endOnlyPanel, (f_MaterialLabel9 = new MaterialLabel , $setInnerHTML(f_MaterialLabel9.element, 'End Only') , $setFontSize_0(f_MaterialLabel9.fontSizeMixin, '1.5em') , f_MaterialLabel9)) , endOnlyPanel.setHeight_0('150px') , endOnlyPanel.element.style['paddingTop'] = '40.0px' , $setBackgroundColor_0((!endOnlyPanel.colorsMixin_0 && (endOnlyPanel.colorsMixin_0 = new ColorsMixin(endOnlyPanel)) , endOnlyPanel.colorsMixin_0), 'white') , $setShadow_0((!endOnlyPanel.shadowMixin && (endOnlyPanel.shadowMixin = new ShadowMixin(endOnlyPanel)) , endOnlyPanel.shadowMixin), 1) , $setWaves(endOnlyPanel, DEFAULT_7) , endOnlyPanel.element.style['width'] = '150px' , endOnlyPanel.element.style['margin'] = '10.0px' , $setTextAlign(endOnlyPanel, CENTER_5) , this$static.owner.endOnlyPanel = endOnlyPanel , endOnlyPanel)) , $add_12(f_MaterialPanel3, (selfRestrict = new MaterialPanel , $add_12(selfRestrict, (f_MaterialIcon10 = new MaterialIcon , $setIconSize_1(f_MaterialIcon10, SMALL) , $setIconType_3(f_MaterialIcon10, TOUCH_APP) , f_MaterialIcon10)) , $add_12(selfRestrict, (f_MaterialLabel11 = new MaterialLabel , $setInnerHTML(f_MaterialLabel11.element, 'Self Restrict') , $setFontSize_0(f_MaterialLabel11.fontSizeMixin, '1.5em') , f_MaterialLabel11)) , selfRestrict.setHeight_0('150px') , selfRestrict.element.style['paddingTop'] = '40.0px' , $setBackgroundColor_0((!selfRestrict.colorsMixin_0 && (selfRestrict.colorsMixin_0 = new ColorsMixin(selfRestrict)) , selfRestrict.colorsMixin_0), 'white') , $setShadow_0((!selfRestrict.shadowMixin && (selfRestrict.shadowMixin = new ShadowMixin(selfRestrict)) , selfRestrict.shadowMixin), 1) , $setWaves(selfRestrict, DEFAULT_7) , selfRestrict.element.style['width'] = '150px' , selfRestrict.element.style['margin'] = '10.0px' , $setTextAlign(selfRestrict, CENTER_5) , this$static.owner.selfRestrict = selfRestrict , selfRestrict)) , $add_12(f_MaterialPanel3, (restrictPanel = new MaterialPanel , $add_12(restrictPanel, (f_MaterialIcon12 = new MaterialIcon , $setIconSize_1(f_MaterialIcon12, SMALL) , $setIconType_3(f_MaterialIcon12, TOUCH_APP) , f_MaterialIcon12)) , $add_12(restrictPanel, (f_MaterialLabel13 = new MaterialLabel , $setInnerHTML(f_MaterialLabel13.element, 'Rect Restrict') , $setFontSize_0(f_MaterialLabel13.fontSizeMixin, '1.5em') , f_MaterialLabel13)) , restrictPanel.setHeight_0('150px') , restrictPanel.element.style['paddingTop'] = '40.0px' , $setBackgroundColor_0((!restrictPanel.colorsMixin_0 && (restrictPanel.colorsMixin_0 = new ColorsMixin(restrictPanel)) , restrictPanel.colorsMixin_0), 'white') , $setShadow_0((!restrictPanel.shadowMixin && (restrictPanel.shadowMixin = new ShadowMixin(restrictPanel)) , restrictPanel.shadowMixin), 1) , $setWaves(restrictPanel, DEFAULT_7) , restrictPanel.element.style['width'] = '150px' , restrictPanel.element.style['margin'] = '10.0px' , $setTextAlign(restrictPanel, CENTER_5) , this$static.owner.restrictPanel = restrictPanel , restrictPanel)) , $setBackgroundColor_0((!f_MaterialPanel3.colorsMixin_0 && (f_MaterialPanel3.colorsMixin_0 = new ColorsMixin(f_MaterialPanel3)) , f_MaterialPanel3.colorsMixin_0), 'grey lighten-4') , f_MaterialPanel3.element.style['padding'] = '10.0px' , undefined , f_MaterialPanel3));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle14 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle14.header), 'Default') , f_MaterialTitle14));\n  $add_12(f_MaterialPanel1, (f_PrettyPre15 = new PrettyPre , $setHTML_0(f_PrettyPre15, (sb = new StringBuilder , sb.string += '\\u2003MaterialDnd dnd = new MaterialDnd();<br> dnd.setTarget(panel);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre15.element, 'lang-java', true) , setStyleName(f_PrettyPre15.element, 'z-depth-1', true) , f_PrettyPre15));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle16 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle16.header), 'With Inertia') , $setText_9(f_MaterialTitle16.paragraph, 'Inertia allows drag and resize actions to coninue after the user releases the pointer at a fast enough speed. The required launch speed, end speed and resistance can optionally be configured with the settings below') , f_MaterialTitle16));\n  $add_12(f_MaterialPanel1, (f_PrettyPre17 = new PrettyPre , $setHTML_0(f_PrettyPre17, (sb_0 = new StringBuilder , sb_0.string += '\\u2003MaterialDnd dndWoInertia = new MaterialDnd();<br> dndWoInertia.setTarget(woInertialPanel);<br> dndWoInertia.setInertia(false);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre17.element, 'lang-java', true) , setStyleName(f_PrettyPre17.element, 'z-depth-1', true) , f_PrettyPre17));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle18 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle18.header), 'End Only') , $setText_9(f_MaterialTitle18.paragraph, \"The endOnly option is used to restrict the widget around the corners of it's parent\") , f_MaterialTitle18));\n  $add_12(f_MaterialPanel1, (f_PrettyPre19 = new PrettyPre , $setHTML_0(f_PrettyPre19, (sb_1 = new StringBuilder , sb_1.string += '\\u2003MaterialDnd dndEndOnly = new MaterialDnd();<br> dndEndOnly.setTarget(endOnlyPanel);<br><br> Restriction restriction = new Restriction();<br> restriction.setEndOnly(false);<br> dndEndOnly.setRestriction(restriction);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre19.element, 'lang-java', true) , setStyleName(f_PrettyPre19.element, 'z-depth-1', true) , f_PrettyPre19));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle20 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle20.header), 'Restriction') , $setText_9(f_MaterialTitle20.paragraph, 'The restriction value specifies the area that the action will be confined to.') , f_MaterialTitle20));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle21 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle21.header), 'Self Restrict') , $setText_9(f_MaterialTitle21.paragraph, \"With this option , It will only restrict the target on itself. By Default without this option will restrict to it's parent.\") , f_MaterialTitle21));\n  $add_12(f_MaterialPanel1, (f_PrettyPre22 = new PrettyPre , $setHTML_0(f_PrettyPre22, (sb_2 = new StringBuilder , sb_2.string += '\\u2003MaterialDnd dndSelfRestrict = new MaterialDnd();<br> dndSelfRestrict.setTarget(selfRestrict);<br> Restriction restriction1 = new Restriction();<br> restriction1.setRestriction(Restriction.Restrict.SELF);<br> dndSelfRestrict.setRestriction(restriction1);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre22.element, 'lang-java', true) , setStyleName(f_PrettyPre22.element, 'z-depth-1', true) , f_PrettyPre22));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle23 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle23.header), 'Specific Properties') , $setText_9(f_MaterialTitle23.paragraph, 'For the left and right properties, 0 means the left edge of the element and 1 means the right edge. For top and bottom, 0 means the top edge of the element and 1 means the bottom.') , f_MaterialTitle23));\n  $add_12(f_MaterialPanel1, (f_MaterialLabel24 = new MaterialLabel , $setInnerHTML(f_MaterialLabel24.element, 'On the example above, { top: 0.25, left: 0.25, bottom: 0.75, right: 0.75 } would result in a quarter of the element being allowed to hang over the restriction edges.') , f_MaterialLabel24));\n  $add_12(f_MaterialPanel1, (f_PrettyPre25 = new PrettyPre , $setHTML_0(f_PrettyPre25, (sb_3 = new StringBuilder , sb_3.string += '\\u2003MaterialDnd dndRestrict = new MaterialDnd();<br> dndRestrict.setTarget(restrictPanel);<br> Restriction restriction2 = new Restriction();<br> restriction2.setTop(0.25);<br> restriction2.setLeft(0.25);<br> restriction2.setRight(0.75);<br> restriction2.setBottom(0.75);<br> dndRestrict.setRestriction(restriction2);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre25.element, 'lang-java', true) , setStyleName(f_PrettyPre25.element, 'z-depth-1', true) , f_PrettyPre25));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle26 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle26.header), 'Events') , f_MaterialTitle26));\n  $add_12(f_MaterialPanel1, (f_MaterialPanel27 = new MaterialPanel , $add_12(f_MaterialPanel27, (eventPanel = new MaterialPanel , $add_12(eventPanel, (f_MaterialIcon28 = new MaterialIcon , $setIconSize_1(f_MaterialIcon28, SMALL) , $setIconType_3(f_MaterialIcon28, TOUCH_APP) , f_MaterialIcon28)) , $add_12(eventPanel, (lblStarted = new MaterialLabel , $setInnerHTML(lblStarted.element, 'Drag Started') , setVisible(lblStarted.element, false) , this$static.owner.lblStarted = lblStarted , lblStarted)) , $add_12(eventPanel, (lblMoved = new MaterialLabel , $setInnerHTML(lblMoved.element, 'Drag Moved') , setVisible(lblMoved.element, false) , this$static.owner.lblMoved = lblMoved , lblMoved)) , $add_12(eventPanel, (lblEnded = new MaterialLabel , $setInnerHTML(lblEnded.element, 'Drag Ended') , setVisible(lblEnded.element, false) , this$static.owner.lblEnded = lblEnded , lblEnded)) , eventPanel.setHeight_0('150px') , eventPanel.element.style['paddingTop'] = '40.0px' , $setBackgroundColor_0((!eventPanel.colorsMixin_0 && (eventPanel.colorsMixin_0 = new ColorsMixin(eventPanel)) , eventPanel.colorsMixin_0), 'white') , $setShadow_0((!eventPanel.shadowMixin && (eventPanel.shadowMixin = new ShadowMixin(eventPanel)) , eventPanel.shadowMixin), 1) , $setWaves(eventPanel, DEFAULT_7) , eventPanel.element.style['width'] = '150px' , eventPanel.element.style['margin'] = '10.0px' , $setTextAlign(eventPanel, CENTER_5) , this$static.owner.eventPanel = eventPanel , eventPanel)) , $setBackgroundColor_0((!f_MaterialPanel27.colorsMixin_0 && (f_MaterialPanel27.colorsMixin_0 = new ColorsMixin(f_MaterialPanel27)) , f_MaterialPanel27.colorsMixin_0), 'grey lighten-4') , f_MaterialPanel27.element.style['padding'] = '10.0px' , undefined , f_MaterialPanel27));\n  $add_12(f_MaterialPanel1, (f_PrettyPre29 = new PrettyPre , $setHTML_0(f_PrettyPre29, (sb_4 = new StringBuilder , sb_4.string += '\\u2003final MaterialDnd dndEvent = new MaterialDnd();<br> dndEvent.setTarget(eventPanel);<br><br> // Add Drag Start Handler<br> dndEvent.addDragStartHandler(new DragStartEvent.DragStartHandler() {<br> \\u2003@Override<br> \\u2003public void onDragStart(DragStartEvent event) {<br> \\u2003\\u2003((MaterialWidget)dndEvent.getTarget()).setBackgroundColor(\"blue\");<br> \\u2003\\u2003lblStarted.setVisible(false);<br> \\u2003}<br> });<br><br> // Add Drag Move Handler<br> dndEvent.addDragMoveHandler(new DragMoveEvent.DragMoveHandler() {<br> \\u2003@Override<br> \\u2003public void onDragMove(DragMoveEvent event) {<br> \\u2003\\u2003((MaterialWidget)dndEvent.getTarget()).setBackgroundColor(\"amber\");<br> \\u2003\\u2003lblMoved.setVisible(false);<br> \\u2003}<br> });<br><br> // Add Drag End Handler<br> dndEvent.addDragEndHandler(new DragEndEvent.DragEndHandler() {<br> \\u2003@Override<br> \\u2003public void onDragEnd(DragEndEvent event) {<br> \\u2003\\u2003((MaterialWidget)dndEvent.getTarget()).setBackgroundColor(\"green\");<br> \\u2003\\u2003lblEnded.setVisible(false);<br> \\u2003}<br> });<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre29.element, 'lang-java', true) , setStyleName(f_PrettyPre29.element, 'z-depth-1', true) , f_PrettyPre29));\n  return f_MaterialPanel1;\n}\n\nfunction DndView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n}\n\ndefineClass(1155, 1, {}, DndView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_dnd_DndView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.dnd', 'DndView_BinderImpl/Widgets', 1155);\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndPresenter$_annotation$$none$$) {\n    result = new DndPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndView$_annotation$$none$$) {\n    result = new DndView(new DndView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndView$_annotation$$none$$;\n}\n\ndefineClass(567, 1, $intern_95);\n_.onSuccess_0 = function onSuccess_3(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$dnd$DndPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(3);\n\n//# sourceURL=gwtmaterialdemo-3.js\n")
