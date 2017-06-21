// Compiled by ClojureScript 1.9.495 {}
goog.provide('stitch.ajax');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent.session');
stitch.ajax.default_headers = (function stitch$ajax$default_headers(request){
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),(function (p1__56281_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56281_SHARP_)].join('');
})),new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__56282_SHARP_){
return cljs.core.merge.call(null,p1__56282_SHARP_,new cljs.core.PersistentArrayMap(null, 2, ["Accept","application/transit+json","x-csrf-token",csrfToken], null));
}));
});
stitch.ajax.user_action = (function stitch$ajax$user_action(request){
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"user-event","user-event",-1252850775),true);

return request;
});
stitch.ajax.load_interceptors_BANG_ = (function stitch$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.call(null,ajax.core.default_interceptors,cljs.core.conj,ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),stitch.ajax.default_headers], null)),ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"user application",new cljs.core.Keyword(null,"request","request",1772954723),stitch.ajax.user_action], null)));
});

//# sourceMappingURL=ajax.js.map