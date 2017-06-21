// Compiled by ClojureScript 1.9.495 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__54828__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__54828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54829__i = 0, G__54829__a = new Array(arguments.length -  0);
while (G__54829__i < G__54829__a.length) {G__54829__a[G__54829__i] = arguments[G__54829__i + 0]; ++G__54829__i;}
  args = new cljs.core.IndexedSeq(G__54829__a,0);
} 
return G__54828__delegate.call(this,args);};
G__54828.cljs$lang$maxFixedArity = 0;
G__54828.cljs$lang$applyTo = (function (arglist__54830){
var args = cljs.core.seq(arglist__54830);
return G__54828__delegate(args);
});
G__54828.cljs$core$IFn$_invoke$arity$variadic = G__54828__delegate;
return G__54828;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__54831__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__54831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54832__i = 0, G__54832__a = new Array(arguments.length -  0);
while (G__54832__i < G__54832__a.length) {G__54832__a[G__54832__i] = arguments[G__54832__i + 0]; ++G__54832__i;}
  args = new cljs.core.IndexedSeq(G__54832__a,0);
} 
return G__54831__delegate.call(this,args);};
G__54831.cljs$lang$maxFixedArity = 0;
G__54831.cljs$lang$applyTo = (function (arglist__54833){
var args = cljs.core.seq(arglist__54833);
return G__54831__delegate(args);
});
G__54831.cljs$core$IFn$_invoke$arity$variadic = G__54831__delegate;
return G__54831;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map