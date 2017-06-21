// Compiled by ClojureScript 1.9.495 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__54056,handler){
var map__54057 = p__54056;
var map__54057__$1 = ((((!((map__54057 == null)))?((((map__54057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54057):map__54057);
var uri = cljs.core.get.call(null,map__54057__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__54057__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__54057__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__54057__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__54057__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__54057__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__54057__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__54057,map__54057__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__54055_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__54055_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__54057,map__54057__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___54069 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___54069)){
var response_type_54070 = temp__4657__auto___54069;
this$__$1.responseType = cljs.core.name.call(null,response_type_54070);
} else {
}

var seq__54059_54071 = cljs.core.seq.call(null,headers);
var chunk__54060_54072 = null;
var count__54061_54073 = (0);
var i__54062_54074 = (0);
while(true){
if((i__54062_54074 < count__54061_54073)){
var vec__54063_54075 = cljs.core._nth.call(null,chunk__54060_54072,i__54062_54074);
var k_54076 = cljs.core.nth.call(null,vec__54063_54075,(0),null);
var v_54077 = cljs.core.nth.call(null,vec__54063_54075,(1),null);
this$__$1.setRequestHeader(k_54076,v_54077);

var G__54078 = seq__54059_54071;
var G__54079 = chunk__54060_54072;
var G__54080 = count__54061_54073;
var G__54081 = (i__54062_54074 + (1));
seq__54059_54071 = G__54078;
chunk__54060_54072 = G__54079;
count__54061_54073 = G__54080;
i__54062_54074 = G__54081;
continue;
} else {
var temp__4657__auto___54082 = cljs.core.seq.call(null,seq__54059_54071);
if(temp__4657__auto___54082){
var seq__54059_54083__$1 = temp__4657__auto___54082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54059_54083__$1)){
var c__48938__auto___54084 = cljs.core.chunk_first.call(null,seq__54059_54083__$1);
var G__54085 = cljs.core.chunk_rest.call(null,seq__54059_54083__$1);
var G__54086 = c__48938__auto___54084;
var G__54087 = cljs.core.count.call(null,c__48938__auto___54084);
var G__54088 = (0);
seq__54059_54071 = G__54085;
chunk__54060_54072 = G__54086;
count__54061_54073 = G__54087;
i__54062_54074 = G__54088;
continue;
} else {
var vec__54066_54089 = cljs.core.first.call(null,seq__54059_54083__$1);
var k_54090 = cljs.core.nth.call(null,vec__54066_54089,(0),null);
var v_54091 = cljs.core.nth.call(null,vec__54066_54089,(1),null);
this$__$1.setRequestHeader(k_54090,v_54091);

var G__54092 = cljs.core.next.call(null,seq__54059_54083__$1);
var G__54093 = null;
var G__54094 = (0);
var G__54095 = (0);
seq__54059_54071 = G__54092;
chunk__54060_54072 = G__54093;
count__54061_54073 = G__54094;
i__54062_54074 = G__54095;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__48119__auto__ = body;
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map