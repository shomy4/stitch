// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__48730__auto__,writer__48731__auto__,opt__48732__auto__){
return cljs.core._write.call(null,writer__48731__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62243 = arguments.length;
var i__49233__auto___62244 = (0);
while(true){
if((i__49233__auto___62244 < len__49232__auto___62243)){
args__49239__auto__.push((arguments[i__49233__auto___62244]));

var G__62245 = (i__49233__auto___62244 + (1));
i__49233__auto___62244 = G__62245;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq62242){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62242));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62247 = arguments.length;
var i__49233__auto___62248 = (0);
while(true){
if((i__49233__auto___62248 < len__49232__auto___62247)){
args__49239__auto__.push((arguments[i__49233__auto___62248]));

var G__62249 = (i__49233__auto___62248 + (1));
i__49233__auto___62248 = G__62249;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq62246){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62246));
});

var g_QMARK__62250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_62251 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__62250){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__62250))
,null));
var mkg_62252 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__62250,g_62251){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__62250,g_62251))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__62250,g_62251,mkg_62252){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__62250).call(null,x);
});})(g_QMARK__62250,g_62251,mkg_62252))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__62250,g_62251,mkg_62252){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_62252).call(null,gfn);
});})(g_QMARK__62250,g_62251,mkg_62252))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__62250,g_62251,mkg_62252){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_62251).call(null,generator);
});})(g_QMARK__62250,g_62251,mkg_62252))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__62214__auto___62272 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__62214__auto___62272){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62273 = arguments.length;
var i__49233__auto___62274 = (0);
while(true){
if((i__49233__auto___62274 < len__49232__auto___62273)){
args__49239__auto__.push((arguments[i__49233__auto___62274]));

var G__62275 = (i__49233__auto___62274 + (1));
i__49233__auto___62274 = G__62275;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62272))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62272){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62272),args);
});})(g__62214__auto___62272))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__62214__auto___62272){
return (function (seq62253){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62253));
});})(g__62214__auto___62272))
;


var g__62214__auto___62276 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__62214__auto___62276){
return (function cljs$spec$impl$gen$list(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62277 = arguments.length;
var i__49233__auto___62278 = (0);
while(true){
if((i__49233__auto___62278 < len__49232__auto___62277)){
args__49239__auto__.push((arguments[i__49233__auto___62278]));

var G__62279 = (i__49233__auto___62278 + (1));
i__49233__auto___62278 = G__62279;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62276))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62276){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62276),args);
});})(g__62214__auto___62276))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__62214__auto___62276){
return (function (seq62254){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62254));
});})(g__62214__auto___62276))
;


var g__62214__auto___62280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__62214__auto___62280){
return (function cljs$spec$impl$gen$map(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62281 = arguments.length;
var i__49233__auto___62282 = (0);
while(true){
if((i__49233__auto___62282 < len__49232__auto___62281)){
args__49239__auto__.push((arguments[i__49233__auto___62282]));

var G__62283 = (i__49233__auto___62282 + (1));
i__49233__auto___62282 = G__62283;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62280))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62280){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62280),args);
});})(g__62214__auto___62280))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__62214__auto___62280){
return (function (seq62255){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62255));
});})(g__62214__auto___62280))
;


var g__62214__auto___62284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__62214__auto___62284){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62285 = arguments.length;
var i__49233__auto___62286 = (0);
while(true){
if((i__49233__auto___62286 < len__49232__auto___62285)){
args__49239__auto__.push((arguments[i__49233__auto___62286]));

var G__62287 = (i__49233__auto___62286 + (1));
i__49233__auto___62286 = G__62287;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62284))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62284){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62284),args);
});})(g__62214__auto___62284))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__62214__auto___62284){
return (function (seq62256){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62256));
});})(g__62214__auto___62284))
;


var g__62214__auto___62288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__62214__auto___62288){
return (function cljs$spec$impl$gen$set(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62289 = arguments.length;
var i__49233__auto___62290 = (0);
while(true){
if((i__49233__auto___62290 < len__49232__auto___62289)){
args__49239__auto__.push((arguments[i__49233__auto___62290]));

var G__62291 = (i__49233__auto___62290 + (1));
i__49233__auto___62290 = G__62291;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62288))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62288){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62288),args);
});})(g__62214__auto___62288))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__62214__auto___62288){
return (function (seq62257){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62257));
});})(g__62214__auto___62288))
;


var g__62214__auto___62292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__62214__auto___62292){
return (function cljs$spec$impl$gen$vector(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62293 = arguments.length;
var i__49233__auto___62294 = (0);
while(true){
if((i__49233__auto___62294 < len__49232__auto___62293)){
args__49239__auto__.push((arguments[i__49233__auto___62294]));

var G__62295 = (i__49233__auto___62294 + (1));
i__49233__auto___62294 = G__62295;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62292))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62292){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62292),args);
});})(g__62214__auto___62292))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__62214__auto___62292){
return (function (seq62258){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62258));
});})(g__62214__auto___62292))
;


var g__62214__auto___62296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__62214__auto___62296){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62297 = arguments.length;
var i__49233__auto___62298 = (0);
while(true){
if((i__49233__auto___62298 < len__49232__auto___62297)){
args__49239__auto__.push((arguments[i__49233__auto___62298]));

var G__62299 = (i__49233__auto___62298 + (1));
i__49233__auto___62298 = G__62299;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62296))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62296){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62296),args);
});})(g__62214__auto___62296))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__62214__auto___62296){
return (function (seq62259){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62259));
});})(g__62214__auto___62296))
;


var g__62214__auto___62300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__62214__auto___62300){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62301 = arguments.length;
var i__49233__auto___62302 = (0);
while(true){
if((i__49233__auto___62302 < len__49232__auto___62301)){
args__49239__auto__.push((arguments[i__49233__auto___62302]));

var G__62303 = (i__49233__auto___62302 + (1));
i__49233__auto___62302 = G__62303;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62300))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62300){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62300),args);
});})(g__62214__auto___62300))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__62214__auto___62300){
return (function (seq62260){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62260));
});})(g__62214__auto___62300))
;


var g__62214__auto___62304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__62214__auto___62304){
return (function cljs$spec$impl$gen$elements(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62305 = arguments.length;
var i__49233__auto___62306 = (0);
while(true){
if((i__49233__auto___62306 < len__49232__auto___62305)){
args__49239__auto__.push((arguments[i__49233__auto___62306]));

var G__62307 = (i__49233__auto___62306 + (1));
i__49233__auto___62306 = G__62307;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62304))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62304){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62304),args);
});})(g__62214__auto___62304))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__62214__auto___62304){
return (function (seq62261){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62261));
});})(g__62214__auto___62304))
;


var g__62214__auto___62308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__62214__auto___62308){
return (function cljs$spec$impl$gen$bind(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62309 = arguments.length;
var i__49233__auto___62310 = (0);
while(true){
if((i__49233__auto___62310 < len__49232__auto___62309)){
args__49239__auto__.push((arguments[i__49233__auto___62310]));

var G__62311 = (i__49233__auto___62310 + (1));
i__49233__auto___62310 = G__62311;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62308))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62308){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62308),args);
});})(g__62214__auto___62308))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__62214__auto___62308){
return (function (seq62262){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62262));
});})(g__62214__auto___62308))
;


var g__62214__auto___62312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__62214__auto___62312){
return (function cljs$spec$impl$gen$choose(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62313 = arguments.length;
var i__49233__auto___62314 = (0);
while(true){
if((i__49233__auto___62314 < len__49232__auto___62313)){
args__49239__auto__.push((arguments[i__49233__auto___62314]));

var G__62315 = (i__49233__auto___62314 + (1));
i__49233__auto___62314 = G__62315;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62312))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62312){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62312),args);
});})(g__62214__auto___62312))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__62214__auto___62312){
return (function (seq62263){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62263));
});})(g__62214__auto___62312))
;


var g__62214__auto___62316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__62214__auto___62316){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62317 = arguments.length;
var i__49233__auto___62318 = (0);
while(true){
if((i__49233__auto___62318 < len__49232__auto___62317)){
args__49239__auto__.push((arguments[i__49233__auto___62318]));

var G__62319 = (i__49233__auto___62318 + (1));
i__49233__auto___62318 = G__62319;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62316))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62316){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62316),args);
});})(g__62214__auto___62316))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__62214__auto___62316){
return (function (seq62264){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62264));
});})(g__62214__auto___62316))
;


var g__62214__auto___62320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__62214__auto___62320){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62321 = arguments.length;
var i__49233__auto___62322 = (0);
while(true){
if((i__49233__auto___62322 < len__49232__auto___62321)){
args__49239__auto__.push((arguments[i__49233__auto___62322]));

var G__62323 = (i__49233__auto___62322 + (1));
i__49233__auto___62322 = G__62323;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62320))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62320){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62320),args);
});})(g__62214__auto___62320))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__62214__auto___62320){
return (function (seq62265){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62265));
});})(g__62214__auto___62320))
;


var g__62214__auto___62324 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__62214__auto___62324){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62325 = arguments.length;
var i__49233__auto___62326 = (0);
while(true){
if((i__49233__auto___62326 < len__49232__auto___62325)){
args__49239__auto__.push((arguments[i__49233__auto___62326]));

var G__62327 = (i__49233__auto___62326 + (1));
i__49233__auto___62326 = G__62327;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62324))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62324){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62324),args);
});})(g__62214__auto___62324))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__62214__auto___62324){
return (function (seq62266){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62266));
});})(g__62214__auto___62324))
;


var g__62214__auto___62328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__62214__auto___62328){
return (function cljs$spec$impl$gen$sample(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62329 = arguments.length;
var i__49233__auto___62330 = (0);
while(true){
if((i__49233__auto___62330 < len__49232__auto___62329)){
args__49239__auto__.push((arguments[i__49233__auto___62330]));

var G__62331 = (i__49233__auto___62330 + (1));
i__49233__auto___62330 = G__62331;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62328))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62328){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62328),args);
});})(g__62214__auto___62328))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__62214__auto___62328){
return (function (seq62267){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62267));
});})(g__62214__auto___62328))
;


var g__62214__auto___62332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__62214__auto___62332){
return (function cljs$spec$impl$gen$return(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62333 = arguments.length;
var i__49233__auto___62334 = (0);
while(true){
if((i__49233__auto___62334 < len__49232__auto___62333)){
args__49239__auto__.push((arguments[i__49233__auto___62334]));

var G__62335 = (i__49233__auto___62334 + (1));
i__49233__auto___62334 = G__62335;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62332))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62332){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62332),args);
});})(g__62214__auto___62332))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__62214__auto___62332){
return (function (seq62268){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62268));
});})(g__62214__auto___62332))
;


var g__62214__auto___62336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__62214__auto___62336){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62337 = arguments.length;
var i__49233__auto___62338 = (0);
while(true){
if((i__49233__auto___62338 < len__49232__auto___62337)){
args__49239__auto__.push((arguments[i__49233__auto___62338]));

var G__62339 = (i__49233__auto___62338 + (1));
i__49233__auto___62338 = G__62339;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62336))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62336){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62336),args);
});})(g__62214__auto___62336))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__62214__auto___62336){
return (function (seq62269){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62269));
});})(g__62214__auto___62336))
;


var g__62214__auto___62340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__62214__auto___62340){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62341 = arguments.length;
var i__49233__auto___62342 = (0);
while(true){
if((i__49233__auto___62342 < len__49232__auto___62341)){
args__49239__auto__.push((arguments[i__49233__auto___62342]));

var G__62343 = (i__49233__auto___62342 + (1));
i__49233__auto___62342 = G__62343;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62340))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62340){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62340),args);
});})(g__62214__auto___62340))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__62214__auto___62340){
return (function (seq62270){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62270));
});})(g__62214__auto___62340))
;


var g__62214__auto___62344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__62214__auto___62344){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62345 = arguments.length;
var i__49233__auto___62346 = (0);
while(true){
if((i__49233__auto___62346 < len__49232__auto___62345)){
args__49239__auto__.push((arguments[i__49233__auto___62346]));

var G__62347 = (i__49233__auto___62346 + (1));
i__49233__auto___62346 = G__62347;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62214__auto___62344))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62214__auto___62344){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__62214__auto___62344),args);
});})(g__62214__auto___62344))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__62214__auto___62344){
return (function (seq62271){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62271));
});})(g__62214__auto___62344))
;

var g__62227__auto___62369 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__62227__auto___62369){
return (function cljs$spec$impl$gen$any(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62370 = arguments.length;
var i__49233__auto___62371 = (0);
while(true){
if((i__49233__auto___62371 < len__49232__auto___62370)){
args__49239__auto__.push((arguments[i__49233__auto___62371]));

var G__62372 = (i__49233__auto___62371 + (1));
i__49233__auto___62371 = G__62372;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62369))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62369){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62369);
});})(g__62227__auto___62369))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__62227__auto___62369){
return (function (seq62348){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62348));
});})(g__62227__auto___62369))
;


var g__62227__auto___62373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__62227__auto___62373){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62374 = arguments.length;
var i__49233__auto___62375 = (0);
while(true){
if((i__49233__auto___62375 < len__49232__auto___62374)){
args__49239__auto__.push((arguments[i__49233__auto___62375]));

var G__62376 = (i__49233__auto___62375 + (1));
i__49233__auto___62375 = G__62376;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62373))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62373){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62373);
});})(g__62227__auto___62373))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__62227__auto___62373){
return (function (seq62349){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62349));
});})(g__62227__auto___62373))
;


var g__62227__auto___62377 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__62227__auto___62377){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62378 = arguments.length;
var i__49233__auto___62379 = (0);
while(true){
if((i__49233__auto___62379 < len__49232__auto___62378)){
args__49239__auto__.push((arguments[i__49233__auto___62379]));

var G__62380 = (i__49233__auto___62379 + (1));
i__49233__auto___62379 = G__62380;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62377))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62377){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62377);
});})(g__62227__auto___62377))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__62227__auto___62377){
return (function (seq62350){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62350));
});})(g__62227__auto___62377))
;


var g__62227__auto___62381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__62227__auto___62381){
return (function cljs$spec$impl$gen$char(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62382 = arguments.length;
var i__49233__auto___62383 = (0);
while(true){
if((i__49233__auto___62383 < len__49232__auto___62382)){
args__49239__auto__.push((arguments[i__49233__auto___62383]));

var G__62384 = (i__49233__auto___62383 + (1));
i__49233__auto___62383 = G__62384;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62381))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62381){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62381);
});})(g__62227__auto___62381))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__62227__auto___62381){
return (function (seq62351){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62351));
});})(g__62227__auto___62381))
;


var g__62227__auto___62385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__62227__auto___62385){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62386 = arguments.length;
var i__49233__auto___62387 = (0);
while(true){
if((i__49233__auto___62387 < len__49232__auto___62386)){
args__49239__auto__.push((arguments[i__49233__auto___62387]));

var G__62388 = (i__49233__auto___62387 + (1));
i__49233__auto___62387 = G__62388;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62385))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62385){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62385);
});})(g__62227__auto___62385))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__62227__auto___62385){
return (function (seq62352){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62352));
});})(g__62227__auto___62385))
;


var g__62227__auto___62389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__62227__auto___62389){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62390 = arguments.length;
var i__49233__auto___62391 = (0);
while(true){
if((i__49233__auto___62391 < len__49232__auto___62390)){
args__49239__auto__.push((arguments[i__49233__auto___62391]));

var G__62392 = (i__49233__auto___62391 + (1));
i__49233__auto___62391 = G__62392;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62389))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62389){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62389);
});})(g__62227__auto___62389))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__62227__auto___62389){
return (function (seq62353){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62353));
});})(g__62227__auto___62389))
;


var g__62227__auto___62393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__62227__auto___62393){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62394 = arguments.length;
var i__49233__auto___62395 = (0);
while(true){
if((i__49233__auto___62395 < len__49232__auto___62394)){
args__49239__auto__.push((arguments[i__49233__auto___62395]));

var G__62396 = (i__49233__auto___62395 + (1));
i__49233__auto___62395 = G__62396;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62393))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62393){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62393);
});})(g__62227__auto___62393))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__62227__auto___62393){
return (function (seq62354){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62354));
});})(g__62227__auto___62393))
;


var g__62227__auto___62397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__62227__auto___62397){
return (function cljs$spec$impl$gen$double(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62398 = arguments.length;
var i__49233__auto___62399 = (0);
while(true){
if((i__49233__auto___62399 < len__49232__auto___62398)){
args__49239__auto__.push((arguments[i__49233__auto___62399]));

var G__62400 = (i__49233__auto___62399 + (1));
i__49233__auto___62399 = G__62400;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62397))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62397){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62397);
});})(g__62227__auto___62397))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__62227__auto___62397){
return (function (seq62355){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62355));
});})(g__62227__auto___62397))
;


var g__62227__auto___62401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__62227__auto___62401){
return (function cljs$spec$impl$gen$int(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62402 = arguments.length;
var i__49233__auto___62403 = (0);
while(true){
if((i__49233__auto___62403 < len__49232__auto___62402)){
args__49239__auto__.push((arguments[i__49233__auto___62403]));

var G__62404 = (i__49233__auto___62403 + (1));
i__49233__auto___62403 = G__62404;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62401))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62401){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62401);
});})(g__62227__auto___62401))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__62227__auto___62401){
return (function (seq62356){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62356));
});})(g__62227__auto___62401))
;


var g__62227__auto___62405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__62227__auto___62405){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62406 = arguments.length;
var i__49233__auto___62407 = (0);
while(true){
if((i__49233__auto___62407 < len__49232__auto___62406)){
args__49239__auto__.push((arguments[i__49233__auto___62407]));

var G__62408 = (i__49233__auto___62407 + (1));
i__49233__auto___62407 = G__62408;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62405))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62405){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62405);
});})(g__62227__auto___62405))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__62227__auto___62405){
return (function (seq62357){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62357));
});})(g__62227__auto___62405))
;


var g__62227__auto___62409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__62227__auto___62409){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62410 = arguments.length;
var i__49233__auto___62411 = (0);
while(true){
if((i__49233__auto___62411 < len__49232__auto___62410)){
args__49239__auto__.push((arguments[i__49233__auto___62411]));

var G__62412 = (i__49233__auto___62411 + (1));
i__49233__auto___62411 = G__62412;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62409))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62409){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62409);
});})(g__62227__auto___62409))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__62227__auto___62409){
return (function (seq62358){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62358));
});})(g__62227__auto___62409))
;


var g__62227__auto___62413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__62227__auto___62413){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62414 = arguments.length;
var i__49233__auto___62415 = (0);
while(true){
if((i__49233__auto___62415 < len__49232__auto___62414)){
args__49239__auto__.push((arguments[i__49233__auto___62415]));

var G__62416 = (i__49233__auto___62415 + (1));
i__49233__auto___62415 = G__62416;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62413))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62413){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62413);
});})(g__62227__auto___62413))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__62227__auto___62413){
return (function (seq62359){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62359));
});})(g__62227__auto___62413))
;


var g__62227__auto___62417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__62227__auto___62417){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62418 = arguments.length;
var i__49233__auto___62419 = (0);
while(true){
if((i__49233__auto___62419 < len__49232__auto___62418)){
args__49239__auto__.push((arguments[i__49233__auto___62419]));

var G__62420 = (i__49233__auto___62419 + (1));
i__49233__auto___62419 = G__62420;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62417))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62417){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62417);
});})(g__62227__auto___62417))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__62227__auto___62417){
return (function (seq62360){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62360));
});})(g__62227__auto___62417))
;


var g__62227__auto___62421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__62227__auto___62421){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62422 = arguments.length;
var i__49233__auto___62423 = (0);
while(true){
if((i__49233__auto___62423 < len__49232__auto___62422)){
args__49239__auto__.push((arguments[i__49233__auto___62423]));

var G__62424 = (i__49233__auto___62423 + (1));
i__49233__auto___62423 = G__62424;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62421))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62421){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62421);
});})(g__62227__auto___62421))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__62227__auto___62421){
return (function (seq62361){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62361));
});})(g__62227__auto___62421))
;


var g__62227__auto___62425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__62227__auto___62425){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62426 = arguments.length;
var i__49233__auto___62427 = (0);
while(true){
if((i__49233__auto___62427 < len__49232__auto___62426)){
args__49239__auto__.push((arguments[i__49233__auto___62427]));

var G__62428 = (i__49233__auto___62427 + (1));
i__49233__auto___62427 = G__62428;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62425))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62425){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62425);
});})(g__62227__auto___62425))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__62227__auto___62425){
return (function (seq62362){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62362));
});})(g__62227__auto___62425))
;


var g__62227__auto___62429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__62227__auto___62429){
return (function cljs$spec$impl$gen$string(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62430 = arguments.length;
var i__49233__auto___62431 = (0);
while(true){
if((i__49233__auto___62431 < len__49232__auto___62430)){
args__49239__auto__.push((arguments[i__49233__auto___62431]));

var G__62432 = (i__49233__auto___62431 + (1));
i__49233__auto___62431 = G__62432;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62429))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62429){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62429);
});})(g__62227__auto___62429))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__62227__auto___62429){
return (function (seq62363){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62363));
});})(g__62227__auto___62429))
;


var g__62227__auto___62433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__62227__auto___62433){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62434 = arguments.length;
var i__49233__auto___62435 = (0);
while(true){
if((i__49233__auto___62435 < len__49232__auto___62434)){
args__49239__auto__.push((arguments[i__49233__auto___62435]));

var G__62436 = (i__49233__auto___62435 + (1));
i__49233__auto___62435 = G__62436;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62433))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62433){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62433);
});})(g__62227__auto___62433))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__62227__auto___62433){
return (function (seq62364){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62364));
});})(g__62227__auto___62433))
;


var g__62227__auto___62437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__62227__auto___62437){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62438 = arguments.length;
var i__49233__auto___62439 = (0);
while(true){
if((i__49233__auto___62439 < len__49232__auto___62438)){
args__49239__auto__.push((arguments[i__49233__auto___62439]));

var G__62440 = (i__49233__auto___62439 + (1));
i__49233__auto___62439 = G__62440;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62437))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62437){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62437);
});})(g__62227__auto___62437))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__62227__auto___62437){
return (function (seq62365){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62365));
});})(g__62227__auto___62437))
;


var g__62227__auto___62441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__62227__auto___62441){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62442 = arguments.length;
var i__49233__auto___62443 = (0);
while(true){
if((i__49233__auto___62443 < len__49232__auto___62442)){
args__49239__auto__.push((arguments[i__49233__auto___62443]));

var G__62444 = (i__49233__auto___62443 + (1));
i__49233__auto___62443 = G__62444;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62441))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62441){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62441);
});})(g__62227__auto___62441))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__62227__auto___62441){
return (function (seq62366){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62366));
});})(g__62227__auto___62441))
;


var g__62227__auto___62445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__62227__auto___62445){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62446 = arguments.length;
var i__49233__auto___62447 = (0);
while(true){
if((i__49233__auto___62447 < len__49232__auto___62446)){
args__49239__auto__.push((arguments[i__49233__auto___62447]));

var G__62448 = (i__49233__auto___62447 + (1));
i__49233__auto___62447 = G__62448;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62445))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62445){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62445);
});})(g__62227__auto___62445))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__62227__auto___62445){
return (function (seq62367){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62367));
});})(g__62227__auto___62445))
;


var g__62227__auto___62449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__62227__auto___62449){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62450 = arguments.length;
var i__49233__auto___62451 = (0);
while(true){
if((i__49233__auto___62451 < len__49232__auto___62450)){
args__49239__auto__.push((arguments[i__49233__auto___62451]));

var G__62452 = (i__49233__auto___62451 + (1));
i__49233__auto___62451 = G__62452;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});})(g__62227__auto___62449))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__62227__auto___62449){
return (function (args){
return cljs.core.deref.call(null,g__62227__auto___62449);
});})(g__62227__auto___62449))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__62227__auto___62449){
return (function (seq62368){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62368));
});})(g__62227__auto___62449))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__49239__auto__ = [];
var len__49232__auto___62455 = arguments.length;
var i__49233__auto___62456 = (0);
while(true){
if((i__49233__auto___62456 < len__49232__auto___62455)){
args__49239__auto__.push((arguments[i__49233__auto___62456]));

var G__62457 = (i__49233__auto___62456 + (1));
i__49233__auto___62456 = G__62457;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__62453_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__62453_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq62454){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62454));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__62458_SHARP_){
return (new Date(p1__62458_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map