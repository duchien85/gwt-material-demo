$wnd.gwtmaterialdemo.runAsyncCallback11("function $clinit_DateTimeFormat_0(){\n  $clinit_DateTimeFormat_0 = emptyMethod;\n  $clinit_DateTimeFormat();\n  cache_0 = new HashMap;\n}\n\nfunction DateTimeFormat_0(){\n  DateTimeFormat.call(this, 'hh:mm a');\n}\n\nfunction getFormat_0(dtfi){\n  $clinit_DateTimeFormat_0();\n  var defaultDtfi, dtf;\n  defaultDtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_2));\n  dtf = null;\n  dtfi == defaultDtfi && (dtf = dynamicCast(cache_0.get_3('hh:mm a'), 347));\n  if (!dtf) {\n    dtf = new DateTimeFormat_0;\n    dtfi == defaultDtfi && cache_0.put('hh:mm a', dtf);\n  }\n  return dtf;\n}\n\ndefineClass(347, 256, {347:1, 256:1}, DateTimeFormat_0);\nvar cache_0;\nvar Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client', 'DateTimeFormat', 347);\nfunction $addCloseHandler(this$static){\n  return $addHandler_0(this$static, new MaterialTimePicker$1(this$static), TYPE_15?TYPE_15:(TYPE_15 = new GwtEvent$Type));\n}\n\nfunction $addOpenHandler(this$static){\n  return $addHandler_0(this$static, new MaterialTimePicker$2(this$static), (!TYPE_16 && (TYPE_16 = new GwtEvent$Type) , TYPE_16));\n}\n\nfunction $addValueChangeHandler_2(this$static, handler){\n  return $addHandler_0(this$static, new MaterialTimePicker$3(this$static, handler), (!TYPE_19 && (TYPE_19 = new GwtEvent$Type) , TYPE_19));\n}\n\nfunction MaterialTimePicker$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1399, 1, $intern_48, MaterialTimePicker$1);\n_.onClose = function onClose_0(event_0){\n  $isEnabled_0(this.this$01) && $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Closed Time Picker', $intern_66, null);\n}\n;\nvar Lgwt_material_design_addins_client_timepicker_MaterialTimePicker$1_2_classLit = createForClass('gwt.material.design.addins.client.timepicker', 'MaterialTimePicker/1', 1399);\nfunction MaterialTimePicker$2(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1400, 1, $intern_80, MaterialTimePicker$2);\n_.onOpen = function onOpen(event_0){\n  $isEnabled_0(this.this$01) && $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Opened Time Picker', $intern_66, null);\n}\n;\nvar Lgwt_material_design_addins_client_timepicker_MaterialTimePicker$2_2_classLit = createForClass('gwt.material.design.addins.client.timepicker', 'MaterialTimePicker/2', 1400);\nfunction MaterialTimePicker$3(this$0, val$handler){\n  this.this$01 = this$0;\n  this.val$handler2 = val$handler;\n}\n\ndefineClass(1401, 1, $intern_45, MaterialTimePicker$3);\n_.onValueChange = function onValueChange_3(event_0){\n  $isEnabled_0(this.this$01) && $onValueChange_0(event_0);\n}\n;\nvar Lgwt_material_design_addins_client_timepicker_MaterialTimePicker$3_2_classLit = createForClass('gwt.material.design.addins.client.timepicker', 'MaterialTimePicker/3', 1401);\nfunction TimePickersPresenter(eventBus, view, proxy){\n  $clinit_TimePickersPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(683, 53, $intern_55, TimePickersPresenter);\n_.onReveal = function onReveal_19(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Time Pickers', 'A dialog picker is used to select a single time (hours:minutes) on mobile.\\n\\nThe selected time is indicated by the filled circle at the end of the clock hand.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersPresenter', 683);\nfunction TimePickersView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_5(new TimePickersView_BinderImpl$Widgets(this)));\n  $addOpenHandler(this.tpEvents);\n  $addCloseHandler(this.tpEvents);\n  $addValueChangeHandler_2(this.tpEvents, new TimePickersView$3);\n}\n\ndefineClass(913, 56, $intern_56, TimePickersView);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView', 913);\nfunction $onValueChange_0(event_0){\n  var dtf, time;\n  dtf = ($clinit_DateTimeFormat_0() , getFormat_0($getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_2))));\n  time = dynamicCast(event_0.value_0, 86);\n  fireToast('MaterialTimePicker value changed to: ' + $format(dtf, time, null));\n}\n\nfunction TimePickersView$3(){\n}\n\ndefineClass(914, 1, $intern_45, TimePickersView$3);\n_.onValueChange = function onValueChange_8(event_0){\n  $onValueChange_0(event_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView/3', 914);\nfunction TimePickersView_BinderImpl(){\n}\n\ndefineClass(1219, 1, {}, TimePickersView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl', 1219);\nfunction $build_f_MaterialPanel1_5(this$static){\n  var f_MaterialPanel1, f_MaterialTitle2, f_PrettyPre3, f_MaterialTitle4, tp, f_PrettyPre5, f_MaterialTitle6, f_timepicker$MaterialTimePicker7, f_MaterialTitle8, f_timepicker$MaterialTimePicker9, f_PrettyPre10, f_MaterialTitle11, tpEvents, f_PrettyPre12, f_MaterialTitle13, tpClear, btnClear, f_PrettyPre14, sb, sb_0, sb_1, sb_2, sb_3;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_12(f_MaterialPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Usage') , f_MaterialTitle2));\n  $add_12(f_MaterialPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML_0(f_PrettyPre3, (sb = new StringBuilder , sb.string += '\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:timepicker.MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(($clinit_DOM() , f_PrettyPre3.element), 'lang-xml', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle4.header), 'Time Picker') , $setText_9(f_MaterialTitle4.paragraph, 'Tap between the hour and minute label in the title bar to switch between the hour or minute view. Additionally, tap on the AM/PM label in the title bar to switch between AM or PM (in 12-hour clock mode).') , f_MaterialTitle4));\n  $add_12(f_MaterialPanel1, (tp = new MaterialTimePicker , $setAttribute($getElement(tp.input_0), 'placeholder', 'Snooze Time') , tp));\n  $add_12(f_MaterialPanel1, (f_PrettyPre5 = new PrettyPre , $setHTML_0(f_PrettyPre5, (sb_0 = new StringBuilder , sb_0.string += '&lt;ma:timepicker.MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre5.element, 'lang-xml', true) , setStyleName(f_PrettyPre5.element, 'z-depth-1', true) , f_PrettyPre5));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle6 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle6.header), 'Disabled Styles') , $setText_9(f_MaterialTitle6.paragraph, \"You can disable your time picker by adding enabled='false'\") , f_MaterialTitle6));\n  $add_12(f_MaterialPanel1, (f_timepicker$MaterialTimePicker7 = new MaterialTimePicker , $setEnabled_1(f_timepicker$MaterialTimePicker7.input_0, false) , $setAttribute($getElement(f_timepicker$MaterialTimePicker7.input_0), 'placeholder', 'Snooze Time') , f_timepicker$MaterialTimePicker7));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle8 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle8.header), '24 Hour format') , $setText_9(f_MaterialTitle8.paragraph, \"You can set 24 hour format of time picker by adding a parameter : hour24='true'\") , f_MaterialTitle8));\n  $add_12(f_MaterialPanel1, (f_timepicker$MaterialTimePicker9 = new MaterialTimePicker , $setAttribute($getElement(f_timepicker$MaterialTimePicker9.input_0), 'placeholder', 'Snooze Time') , f_timepicker$MaterialTimePicker9.hour24 = true , f_timepicker$MaterialTimePicker9));\n  $add_12(f_MaterialPanel1, (f_PrettyPre10 = new PrettyPre , $setHTML_0(f_PrettyPre10, (sb_1 = new StringBuilder , sb_1.string += '&lt;ma:timepicker.MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" hour24=\"true\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre10.element, 'lang-xml', true) , setStyleName(f_PrettyPre10.element, 'z-depth-1', true) , f_PrettyPre10));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle11.header), 'Events') , $setText_9(f_MaterialTitle11.paragraph, 'We provided events on time picker namely : Close, Open, ValueChange events.') , f_MaterialTitle11));\n  $add_12(f_MaterialPanel1, (tpEvents = new MaterialTimePicker , $setAttribute($getElement(tpEvents.input_0), 'placeholder', 'Alarm Time') , this$static.owner.tpEvents = tpEvents , tpEvents));\n  $add_12(f_MaterialPanel1, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb_2 = new StringBuilder , sb_2.string += '\\u2003// Open Handler<br> tpEvents.addOpenHandler(new OpenHandler&lt;String&gt;() {<br> \\u2003@Override<br> \\u2003public void onOpen(OpenEvent&lt;String&gt; event) {<br> \\u2003\\u2003MaterialToast.fireToast(\"Opened Time Picker\");<br> \\u2003}<br> });<br><br> // Close Handler<br> tpEvents.addCloseHandler(new CloseHandler&lt;String&gt;() {<br> \\u2003@Override<br> \\u2003public void onClose(CloseEvent&lt;String&gt; event) {<br> \\u2003\\u2003MaterialToast.fireToast(\"Closed Time Picker\");<br> \\u2003}<br> });<br><br> // ValueChange Handler<br> tpEvents.addValueChangeHandler(new ValueChangeHandler&lt;Date&gt;() {<br> \\u2003@Override<br> \\u2003public void onValueChange(ValueChangeEvent&lt;Date&gt; event) {<br> \\u2003\\u2003DateTimeFormat dtf = DateTimeFormat.getFormat(\"hh:mm a\");<br> \\u2003\\u2003Date time = event.getValue();<br> \\u2003\\u2003MaterialToast.fireToast(\"MaterialTimePicker value changed to: \" + dtf.format(time));<br> \\u2003}<br> });<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre12.element, 'lang-java', true) , setStyleName(f_PrettyPre12.element, 'z-depth-1', true) , f_PrettyPre12));\n  $add_12(f_MaterialPanel1, (f_MaterialTitle13 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle13.header), 'Clear()') , $setText_9(f_MaterialTitle13.paragraph, 'Clear your time picker value') , f_MaterialTitle13));\n  $add_12(f_MaterialPanel1, (tpClear = new MaterialTimePicker , $setAttribute($getElement(tpClear.input_0), 'placeholder', 'Snooze Time') , this$static.owner.tpClear = tpClear , tpClear));\n  $add_12(f_MaterialPanel1, (btnClear = new MaterialButton , btnClear.span_1.setText('Clear') , $add_12(btnClear, btnClear.span_1) , $setIconType(btnClear, ($clinit_IconType() , REFRESH)) , $addClickHandler(btnClear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , btnClear));\n  $add_12(f_MaterialPanel1, (f_PrettyPre14 = new PrettyPre , $setHTML_0(f_PrettyPre14, (sb_3 = new StringBuilder , sb_3.string += 'timepick.clear();' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre14.element, 'lang-java', true) , setStyleName(f_PrettyPre14.element, 'z-depth-1', true) , f_PrettyPre14));\n  return f_MaterialPanel1;\n}\n\nfunction TimePickersView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new TimePickersView_BinderImpl$Widgets$1(this);\n  this.owner = owner;\n}\n\ndefineClass(1220, 1, {}, TimePickersView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets', 1220);\nfunction TimePickersView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1221, 1, $intern_64, TimePickersView_BinderImpl$Widgets$1);\n_.onClick = function onClick_80(event_0){\n  $clearTimePickerValue($getElement(this.this$11.owner.tpClear.input_0));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets/1', 1221);\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$) {\n    result = new TimePickersPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$) {\n    result = new TimePickersView(new TimePickersView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$;\n}\n\ndefineClass(588, 1, $intern_95);\n_.onSuccess_0 = function onSuccess_12(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(11);\n\n//# sourceURL=gwtmaterialdemo-11.js\n")
