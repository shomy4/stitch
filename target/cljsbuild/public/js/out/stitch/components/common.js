// Compiled by ClojureScript 1.9.495 {}
goog.provide('stitch.components.common');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
stitch.components.common.modal = (function stitch$components$common$modal(header,body,footer){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),header], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),body], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bootstrap-dialog-footer","div.bootstrap-dialog-footer",1132532911),footer], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-backdrop.fade.in","div.modal-backdrop.fade.in",-1698078477)], null)], null);
});
stitch.components.common.input = (function stitch$components$common$input(type,id,placeholder,fields){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.input-lg","input.form-control.input-lg",721276087),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"value","value",305978217),id.call(null,cljs.core.deref.call(null,fields)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55326_SHARP_){
return cljs.core.swap_BANG_.call(null,fields,cljs.core.assoc,id,p1__55326_SHARP_.target.value);
})], null)], null);
});
stitch.components.common.form_input = (function stitch$components$common$form_input(type,label,id,placeholder,fields,optional_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),(cljs.core.truth_(optional_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.common.input,type,id,placeholder,fields], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.common.input,type,id,placeholder,fields], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),"*"], null)], null))], null);
});
stitch.components.common.text_input = (function stitch$components$common$text_input(var_args){
var args__49239__auto__ = [];
var len__49232__auto___55336 = arguments.length;
var i__49233__auto___55337 = (0);
while(true){
if((i__49233__auto___55337 < len__49232__auto___55336)){
args__49239__auto__.push((arguments[i__49233__auto___55337]));

var G__55338 = (i__49233__auto___55337 + (1));
i__49233__auto___55337 = G__55338;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((4) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((4)),(0),null)):null);
return stitch.components.common.text_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__49240__auto__);
});

stitch.components.common.text_input.cljs$core$IFn$_invoke$arity$variadic = (function (label,id,placeholder,fields,p__55332){
var vec__55333 = p__55332;
var optional_QMARK_ = cljs.core.nth.call(null,vec__55333,(0),null);
return stitch.components.common.form_input.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),label,id,placeholder,fields,optional_QMARK_);
});

stitch.components.common.text_input.cljs$lang$maxFixedArity = (4);

stitch.components.common.text_input.cljs$lang$applyTo = (function (seq55327){
var G__55328 = cljs.core.first.call(null,seq55327);
var seq55327__$1 = cljs.core.next.call(null,seq55327);
var G__55329 = cljs.core.first.call(null,seq55327__$1);
var seq55327__$2 = cljs.core.next.call(null,seq55327__$1);
var G__55330 = cljs.core.first.call(null,seq55327__$2);
var seq55327__$3 = cljs.core.next.call(null,seq55327__$2);
var G__55331 = cljs.core.first.call(null,seq55327__$3);
var seq55327__$4 = cljs.core.next.call(null,seq55327__$3);
return stitch.components.common.text_input.cljs$core$IFn$_invoke$arity$variadic(G__55328,G__55329,G__55330,G__55331,seq55327__$4);
});

stitch.components.common.password_input = (function stitch$components$common$password_input(var_args){
var args__49239__auto__ = [];
var len__49232__auto___55348 = arguments.length;
var i__49233__auto___55349 = (0);
while(true){
if((i__49233__auto___55349 < len__49232__auto___55348)){
args__49239__auto__.push((arguments[i__49233__auto___55349]));

var G__55350 = (i__49233__auto___55349 + (1));
i__49233__auto___55349 = G__55350;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((4) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((4)),(0),null)):null);
return stitch.components.common.password_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__49240__auto__);
});

stitch.components.common.password_input.cljs$core$IFn$_invoke$arity$variadic = (function (label,id,placeholder,fields,p__55344){
var vec__55345 = p__55344;
var optional_QMARK_ = cljs.core.nth.call(null,vec__55345,(0),null);
return stitch.components.common.form_input.call(null,new cljs.core.Keyword(null,"password","password",417022471),label,id,placeholder,fields,optional_QMARK_);
});

stitch.components.common.password_input.cljs$lang$maxFixedArity = (4);

stitch.components.common.password_input.cljs$lang$applyTo = (function (seq55339){
var G__55340 = cljs.core.first.call(null,seq55339);
var seq55339__$1 = cljs.core.next.call(null,seq55339);
var G__55341 = cljs.core.first.call(null,seq55339__$1);
var seq55339__$2 = cljs.core.next.call(null,seq55339__$1);
var G__55342 = cljs.core.first.call(null,seq55339__$2);
var seq55339__$3 = cljs.core.next.call(null,seq55339__$2);
var G__55343 = cljs.core.first.call(null,seq55339__$3);
var seq55339__$4 = cljs.core.next.call(null,seq55339__$3);
return stitch.components.common.password_input.cljs$core$IFn$_invoke$arity$variadic(G__55340,G__55341,G__55342,G__55343,seq55339__$4);
});


//# sourceMappingURL=common.js.map