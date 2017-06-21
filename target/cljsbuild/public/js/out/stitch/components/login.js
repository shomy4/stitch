// Compiled by ClojureScript 1.9.495 {}
goog.provide('stitch.components.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('goog.crypt.base64');
goog.require('clojure.string');
goog.require('ajax.core');
goog.require('stitch.components.common');
stitch.components.login.timeout_ms = (((1000) * (60)) * (30));
stitch.components.login.session_timer = (function stitch$components$login$session_timer(){
if(cljs.core.truth_(reagent.session.get.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035)))){
if(cljs.core.truth_(reagent.session.get.call(null,new cljs.core.Keyword(null,"user-event","user-event",-1252850775)))){
reagent.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"user-event","user-event",-1252850775));

return setTimeout((function (){
return stitch.components.login.session_timer.call(null);
}),stitch.components.login.timeout_ms);
} else {
return reagent.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035));
}
} else {
return null;
}
});
stitch.components.login.encode_auth = (function stitch$components$login$encode_auth(user,pass){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Basic "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.encodeString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(user),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pass)].join('')))].join('');
});
stitch.components.login.login_BANG_ = (function stitch$components$login$login_BANG_(fields,error){
var map__55356 = cljs.core.deref.call(null,fields);
var map__55356__$1 = ((((!((map__55356 == null)))?((((map__55356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55356):map__55356);
var id = cljs.core.get.call(null,map__55356__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var pass = cljs.core.get.call(null,map__55356__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
cljs.core.reset_BANG_.call(null,error,null);

return ajax.core.POST.call(null,"login",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",stitch.components.login.encode_auth.call(null,clojure.string.trim.call(null,id),pass)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__55356,map__55356__$1,id,pass){
return (function (){
reagent.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850));

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035),id);

setTimeout(stitch.components.login.session_timer,stitch.components.login.timeout_ms);

return cljs.core.reset_BANG_.call(null,fields,null);
});})(map__55356,map__55356__$1,id,pass))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (map__55356,map__55356__$1,id,pass){
return (function (p1__55353_SHARP_){
return cljs.core.reset_BANG_.call(null,error,cljs.core.get_in.call(null,p1__55353_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"message","message",-406056002)], null)));
});})(map__55356,map__55356__$1,id,pass))
], null));
});
stitch.components.login.login_form = (function stitch$components$login$login_form(){
var fields = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var error = reagent.core.atom.call(null,null);
return ((function (fields,error){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.common.modal,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Stitch Login"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well.well-sm","div.well.well-sm",-921823204),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"* required field"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.common.text_input,"Name",new cljs.core.Keyword(null,"id","id",-1388402092),"Enter a user name",fields], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.common.password_input,"Pass",new cljs.core.Keyword(null,"pass","pass",1574159993),"Enter a password",fields], null),(function (){var temp__4657__auto__ = cljs.core.deref.call(null,error);
if(cljs.core.truth_(temp__4657__auto__)){
var error__$1 = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),error__$1], null);
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fields,error){
return (function (){
return stitch.components.login.login_BANG_.call(null,fields,error);
});})(fields,error))
], null),"Login"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger","button.btn.btn-danger",533883282),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fields,error){
return (function (){
return reagent.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850));
});})(fields,error))
], null),"Cancel"], null)], null)], null);
});
;})(fields,error))
});
stitch.components.login.login_button = (function stitch$components$login$login_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850),stitch.components.login.login_form);
})], null),"Login"], null);
});

//# sourceMappingURL=login.js.map