// Compiled by ClojureScript 1.9.495 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__49239__auto__ = [];
var len__49232__auto___55275 = arguments.length;
var i__49233__auto___55276 = (0);
while(true){
if((i__49233__auto___55276 < len__49232__auto___55275)){
args__49239__auto__.push((arguments[i__49233__auto___55276]));

var G__55277 = (i__49233__auto___55276 + (1));
i__49233__auto___55276 = G__55277;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__55271){
var vec__55272 = p__55271;
var default$ = cljs.core.nth.call(null,vec__55272,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq55269){
var G__55270 = cljs.core.first.call(null,seq55269);
var seq55269__$1 = cljs.core.next.call(null,seq55269);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__55270,seq55269__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__49239__auto__ = [];
var len__49232__auto___55284 = arguments.length;
var i__49233__auto___55285 = (0);
while(true){
if((i__49233__auto___55285 < len__49232__auto___55284)){
args__49239__auto__.push((arguments[i__49233__auto___55285]));

var G__55286 = (i__49233__auto___55285 + (1));
i__49233__auto___55285 = G__55286;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__55280){
var vec__55281 = p__55280;
var default$ = cljs.core.nth.call(null,vec__55281,(0),null);
var or__48119__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq55278){
var G__55279 = cljs.core.first.call(null,seq55278);
var seq55278__$1 = cljs.core.next.call(null,seq55278);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__55279,seq55278__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__49239__auto__ = [];
var len__49232__auto___55289 = arguments.length;
var i__49233__auto___55290 = (0);
while(true){
if((i__49233__auto___55290 < len__49232__auto___55289)){
args__49239__auto__.push((arguments[i__49233__auto___55290]));

var G__55291 = (i__49233__auto___55290 + (1));
i__49233__auto___55290 = G__55291;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq55287){
var G__55288 = cljs.core.first.call(null,seq55287);
var seq55287__$1 = cljs.core.next.call(null,seq55287);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55288,seq55287__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__49239__auto__ = [];
var len__49232__auto___55298 = arguments.length;
var i__49233__auto___55299 = (0);
while(true){
if((i__49233__auto___55299 < len__49232__auto___55298)){
args__49239__auto__.push((arguments[i__49233__auto___55299]));

var G__55300 = (i__49233__auto___55299 + (1));
i__49233__auto___55299 = G__55300;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__55294){
var vec__55295 = p__55294;
var default$ = cljs.core.nth.call(null,vec__55295,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq55292){
var G__55293 = cljs.core.first.call(null,seq55292);
var seq55292__$1 = cljs.core.next.call(null,seq55292);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55293,seq55292__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__49239__auto__ = [];
var len__49232__auto___55307 = arguments.length;
var i__49233__auto___55308 = (0);
while(true){
if((i__49233__auto___55308 < len__49232__auto___55307)){
args__49239__auto__.push((arguments[i__49233__auto___55308]));

var G__55309 = (i__49233__auto___55308 + (1));
i__49233__auto___55308 = G__55309;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__55303){
var vec__55304 = p__55303;
var default$ = cljs.core.nth.call(null,vec__55304,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq55301){
var G__55302 = cljs.core.first.call(null,seq55301);
var seq55301__$1 = cljs.core.next.call(null,seq55301);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55302,seq55301__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__49239__auto__ = [];
var len__49232__auto___55314 = arguments.length;
var i__49233__auto___55315 = (0);
while(true){
if((i__49233__auto___55315 < len__49232__auto___55314)){
args__49239__auto__.push((arguments[i__49233__auto___55315]));

var G__55316 = (i__49233__auto___55315 + (1));
i__49233__auto___55315 = G__55316;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((2) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__49240__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__55310_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__55310_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq55311){
var G__55312 = cljs.core.first.call(null,seq55311);
var seq55311__$1 = cljs.core.next.call(null,seq55311);
var G__55313 = cljs.core.first.call(null,seq55311__$1);
var seq55311__$2 = cljs.core.next.call(null,seq55311__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55312,G__55313,seq55311__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__49239__auto__ = [];
var len__49232__auto___55321 = arguments.length;
var i__49233__auto___55322 = (0);
while(true){
if((i__49233__auto___55322 < len__49232__auto___55321)){
args__49239__auto__.push((arguments[i__49233__auto___55322]));

var G__55323 = (i__49233__auto___55322 + (1));
i__49233__auto___55322 = G__55323;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((2) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__49240__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__55317_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__55317_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq55318){
var G__55319 = cljs.core.first.call(null,seq55318);
var seq55318__$1 = cljs.core.next.call(null,seq55318);
var G__55320 = cljs.core.first.call(null,seq55318__$1);
var seq55318__$2 = cljs.core.next.call(null,seq55318__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55319,G__55320,seq55318__$2);
});


//# sourceMappingURL=session.js.map