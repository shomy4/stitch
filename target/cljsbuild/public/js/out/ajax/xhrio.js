// Compiled by ClojureScript 1.9.495 {}
goog.provide('ajax.xhrio');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri');
goog.require('goog.json');
goog.require('goog.events');
goog.require('ajax.protocols');
goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__54257,handler){
var map__54258 = p__54257;
var map__54258__$1 = ((((!((map__54258 == null)))?((((map__54258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54258):map__54258);
var uri = cljs.core.get.call(null,map__54258__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__54258__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__54258__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__54258__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__54258__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__54258__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__54258__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
var temp__4657__auto___54261 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___54261)){
var response_type_54262 = temp__4657__auto___54261;
this$__$1.setResponseType(cljs.core.name.call(null,response_type_54262));
} else {
}

var G__54260 = this$__$1;
goog.events.listen(G__54260,goog.net.EventType.COMPLETE,((function (G__54260,this$__$1,map__54258,map__54258__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__54256_SHARP_){
return handler.call(null,p1__54256_SHARP_.target);
});})(G__54260,this$__$1,map__54258,map__54258__$1,uri,method,body,headers,timeout,with_credentials,response_format))
);

G__54260.setTimeoutInterval(timeout);

G__54260.setWithCredentials(with_credentials);

G__54260.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__54260;
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponse();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__54263,handler){
var map__54264 = p__54263;
var map__54264__$1 = ((((!((map__54264 == null)))?((((map__54264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54264):map__54264);
var uri = cljs.core.get.call(null,map__54264__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__54264__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__54264__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__54264__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var id = cljs.core.get.call(null,map__54264__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__54264__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var priority = cljs.core.get.call(null,map__54264__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.call(null,map__54264__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js.call(null,headers),priority,handler,max_retries);
});

//# sourceMappingURL=xhrio.js.map