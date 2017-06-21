// Compiled by ClojureScript 1.9.495 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__48119__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__48119__auto__){
return or__48119__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__48119__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__61170_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__61170_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__61175 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__61176 = null;
var count__61177 = (0);
var i__61178 = (0);
while(true){
if((i__61178 < count__61177)){
var n = cljs.core._nth.call(null,chunk__61176,i__61178);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__61179 = seq__61175;
var G__61180 = chunk__61176;
var G__61181 = count__61177;
var G__61182 = (i__61178 + (1));
seq__61175 = G__61179;
chunk__61176 = G__61180;
count__61177 = G__61181;
i__61178 = G__61182;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61175);
if(temp__4657__auto__){
var seq__61175__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61175__$1)){
var c__48938__auto__ = cljs.core.chunk_first.call(null,seq__61175__$1);
var G__61183 = cljs.core.chunk_rest.call(null,seq__61175__$1);
var G__61184 = c__48938__auto__;
var G__61185 = cljs.core.count.call(null,c__48938__auto__);
var G__61186 = (0);
seq__61175 = G__61183;
chunk__61176 = G__61184;
count__61177 = G__61185;
i__61178 = G__61186;
continue;
} else {
var n = cljs.core.first.call(null,seq__61175__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__61187 = cljs.core.next.call(null,seq__61175__$1);
var G__61188 = null;
var G__61189 = (0);
var G__61190 = (0);
seq__61175 = G__61187;
chunk__61176 = G__61188;
count__61177 = G__61189;
i__61178 = G__61190;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__61241_61252 = cljs.core.seq.call(null,deps);
var chunk__61242_61253 = null;
var count__61243_61254 = (0);
var i__61244_61255 = (0);
while(true){
if((i__61244_61255 < count__61243_61254)){
var dep_61256 = cljs.core._nth.call(null,chunk__61242_61253,i__61244_61255);
topo_sort_helper_STAR_.call(null,dep_61256,(depth + (1)),state);

var G__61257 = seq__61241_61252;
var G__61258 = chunk__61242_61253;
var G__61259 = count__61243_61254;
var G__61260 = (i__61244_61255 + (1));
seq__61241_61252 = G__61257;
chunk__61242_61253 = G__61258;
count__61243_61254 = G__61259;
i__61244_61255 = G__61260;
continue;
} else {
var temp__4657__auto___61261 = cljs.core.seq.call(null,seq__61241_61252);
if(temp__4657__auto___61261){
var seq__61241_61262__$1 = temp__4657__auto___61261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61241_61262__$1)){
var c__48938__auto___61263 = cljs.core.chunk_first.call(null,seq__61241_61262__$1);
var G__61264 = cljs.core.chunk_rest.call(null,seq__61241_61262__$1);
var G__61265 = c__48938__auto___61263;
var G__61266 = cljs.core.count.call(null,c__48938__auto___61263);
var G__61267 = (0);
seq__61241_61252 = G__61264;
chunk__61242_61253 = G__61265;
count__61243_61254 = G__61266;
i__61244_61255 = G__61267;
continue;
} else {
var dep_61268 = cljs.core.first.call(null,seq__61241_61262__$1);
topo_sort_helper_STAR_.call(null,dep_61268,(depth + (1)),state);

var G__61269 = cljs.core.next.call(null,seq__61241_61262__$1);
var G__61270 = null;
var G__61271 = (0);
var G__61272 = (0);
seq__61241_61252 = G__61269;
chunk__61242_61253 = G__61270;
count__61243_61254 = G__61271;
i__61244_61255 = G__61272;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__61245){
var vec__61249 = p__61245;
var seq__61250 = cljs.core.seq.call(null,vec__61249);
var first__61251 = cljs.core.first.call(null,seq__61250);
var seq__61250__$1 = cljs.core.next.call(null,seq__61250);
var x = first__61251;
var xs = seq__61250__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__61249,seq__61250,first__61251,seq__61250__$1,x,xs,get_deps__$1){
return (function (p1__61191_SHARP_){
return clojure.set.difference.call(null,p1__61191_SHARP_,x);
});})(vec__61249,seq__61250,first__61251,seq__61250__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__61285 = cljs.core.seq.call(null,provides);
var chunk__61286 = null;
var count__61287 = (0);
var i__61288 = (0);
while(true){
if((i__61288 < count__61287)){
var prov = cljs.core._nth.call(null,chunk__61286,i__61288);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__61289_61297 = cljs.core.seq.call(null,requires);
var chunk__61290_61298 = null;
var count__61291_61299 = (0);
var i__61292_61300 = (0);
while(true){
if((i__61292_61300 < count__61291_61299)){
var req_61301 = cljs.core._nth.call(null,chunk__61290_61298,i__61292_61300);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_61301,prov);

var G__61302 = seq__61289_61297;
var G__61303 = chunk__61290_61298;
var G__61304 = count__61291_61299;
var G__61305 = (i__61292_61300 + (1));
seq__61289_61297 = G__61302;
chunk__61290_61298 = G__61303;
count__61291_61299 = G__61304;
i__61292_61300 = G__61305;
continue;
} else {
var temp__4657__auto___61306 = cljs.core.seq.call(null,seq__61289_61297);
if(temp__4657__auto___61306){
var seq__61289_61307__$1 = temp__4657__auto___61306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61289_61307__$1)){
var c__48938__auto___61308 = cljs.core.chunk_first.call(null,seq__61289_61307__$1);
var G__61309 = cljs.core.chunk_rest.call(null,seq__61289_61307__$1);
var G__61310 = c__48938__auto___61308;
var G__61311 = cljs.core.count.call(null,c__48938__auto___61308);
var G__61312 = (0);
seq__61289_61297 = G__61309;
chunk__61290_61298 = G__61310;
count__61291_61299 = G__61311;
i__61292_61300 = G__61312;
continue;
} else {
var req_61313 = cljs.core.first.call(null,seq__61289_61307__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_61313,prov);

var G__61314 = cljs.core.next.call(null,seq__61289_61307__$1);
var G__61315 = null;
var G__61316 = (0);
var G__61317 = (0);
seq__61289_61297 = G__61314;
chunk__61290_61298 = G__61315;
count__61291_61299 = G__61316;
i__61292_61300 = G__61317;
continue;
}
} else {
}
}
break;
}

var G__61318 = seq__61285;
var G__61319 = chunk__61286;
var G__61320 = count__61287;
var G__61321 = (i__61288 + (1));
seq__61285 = G__61318;
chunk__61286 = G__61319;
count__61287 = G__61320;
i__61288 = G__61321;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61285);
if(temp__4657__auto__){
var seq__61285__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61285__$1)){
var c__48938__auto__ = cljs.core.chunk_first.call(null,seq__61285__$1);
var G__61322 = cljs.core.chunk_rest.call(null,seq__61285__$1);
var G__61323 = c__48938__auto__;
var G__61324 = cljs.core.count.call(null,c__48938__auto__);
var G__61325 = (0);
seq__61285 = G__61322;
chunk__61286 = G__61323;
count__61287 = G__61324;
i__61288 = G__61325;
continue;
} else {
var prov = cljs.core.first.call(null,seq__61285__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__61293_61326 = cljs.core.seq.call(null,requires);
var chunk__61294_61327 = null;
var count__61295_61328 = (0);
var i__61296_61329 = (0);
while(true){
if((i__61296_61329 < count__61295_61328)){
var req_61330 = cljs.core._nth.call(null,chunk__61294_61327,i__61296_61329);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_61330,prov);

var G__61331 = seq__61293_61326;
var G__61332 = chunk__61294_61327;
var G__61333 = count__61295_61328;
var G__61334 = (i__61296_61329 + (1));
seq__61293_61326 = G__61331;
chunk__61294_61327 = G__61332;
count__61295_61328 = G__61333;
i__61296_61329 = G__61334;
continue;
} else {
var temp__4657__auto___61335__$1 = cljs.core.seq.call(null,seq__61293_61326);
if(temp__4657__auto___61335__$1){
var seq__61293_61336__$1 = temp__4657__auto___61335__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61293_61336__$1)){
var c__48938__auto___61337 = cljs.core.chunk_first.call(null,seq__61293_61336__$1);
var G__61338 = cljs.core.chunk_rest.call(null,seq__61293_61336__$1);
var G__61339 = c__48938__auto___61337;
var G__61340 = cljs.core.count.call(null,c__48938__auto___61337);
var G__61341 = (0);
seq__61293_61326 = G__61338;
chunk__61294_61327 = G__61339;
count__61295_61328 = G__61340;
i__61296_61329 = G__61341;
continue;
} else {
var req_61342 = cljs.core.first.call(null,seq__61293_61336__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_61342,prov);

var G__61343 = cljs.core.next.call(null,seq__61293_61336__$1);
var G__61344 = null;
var G__61345 = (0);
var G__61346 = (0);
seq__61293_61326 = G__61343;
chunk__61294_61327 = G__61344;
count__61295_61328 = G__61345;
i__61296_61329 = G__61346;
continue;
}
} else {
}
}
break;
}

var G__61347 = cljs.core.next.call(null,seq__61285__$1);
var G__61348 = null;
var G__61349 = (0);
var G__61350 = (0);
seq__61285 = G__61347;
chunk__61286 = G__61348;
count__61287 = G__61349;
i__61288 = G__61350;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__61355_61359 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__61356_61360 = null;
var count__61357_61361 = (0);
var i__61358_61362 = (0);
while(true){
if((i__61358_61362 < count__61357_61361)){
var ns_61363 = cljs.core._nth.call(null,chunk__61356_61360,i__61358_61362);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_61363);

var G__61364 = seq__61355_61359;
var G__61365 = chunk__61356_61360;
var G__61366 = count__61357_61361;
var G__61367 = (i__61358_61362 + (1));
seq__61355_61359 = G__61364;
chunk__61356_61360 = G__61365;
count__61357_61361 = G__61366;
i__61358_61362 = G__61367;
continue;
} else {
var temp__4657__auto___61368 = cljs.core.seq.call(null,seq__61355_61359);
if(temp__4657__auto___61368){
var seq__61355_61369__$1 = temp__4657__auto___61368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61355_61369__$1)){
var c__48938__auto___61370 = cljs.core.chunk_first.call(null,seq__61355_61369__$1);
var G__61371 = cljs.core.chunk_rest.call(null,seq__61355_61369__$1);
var G__61372 = c__48938__auto___61370;
var G__61373 = cljs.core.count.call(null,c__48938__auto___61370);
var G__61374 = (0);
seq__61355_61359 = G__61371;
chunk__61356_61360 = G__61372;
count__61357_61361 = G__61373;
i__61358_61362 = G__61374;
continue;
} else {
var ns_61375 = cljs.core.first.call(null,seq__61355_61369__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_61375);

var G__61376 = cljs.core.next.call(null,seq__61355_61369__$1);
var G__61377 = null;
var G__61378 = (0);
var G__61379 = (0);
seq__61355_61359 = G__61376;
chunk__61356_61360 = G__61377;
count__61357_61361 = G__61378;
i__61358_61362 = G__61379;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__48119__auto__ = goog.require__;
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__61380__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__61380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61381__i = 0, G__61381__a = new Array(arguments.length -  0);
while (G__61381__i < G__61381__a.length) {G__61381__a[G__61381__i] = arguments[G__61381__i + 0]; ++G__61381__i;}
  args = new cljs.core.IndexedSeq(G__61381__a,0);
} 
return G__61380__delegate.call(this,args);};
G__61380.cljs$lang$maxFixedArity = 0;
G__61380.cljs$lang$applyTo = (function (arglist__61382){
var args = cljs.core.seq(arglist__61382);
return G__61380__delegate(args);
});
G__61380.cljs$core$IFn$_invoke$arity$variadic = G__61380__delegate;
return G__61380;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__61383 = cljs.core._EQ_;
var expr__61384 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__61383.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__61384))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__61383,expr__61384){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__61383,expr__61384))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__61383,expr__61384){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e61386){if((e61386 instanceof Error)){
var e = e61386;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e61386;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__61383,expr__61384))
} else {
if(cljs.core.truth_(pred__61383.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__61384))){
return ((function (pred__61383,expr__61384){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__61383,expr__61384){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__61383,expr__61384))
);

return deferred.addErrback(((function (deferred,pred__61383,expr__61384){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__61383,expr__61384))
);
});
;})(pred__61383,expr__61384))
} else {
if(cljs.core.truth_(pred__61383.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__61384))){
return ((function (pred__61383,expr__61384){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e61387){if((e61387 instanceof Error)){
var e = e61387;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e61387;

}
}})());
});
;})(pred__61383,expr__61384))
} else {
return ((function (pred__61383,expr__61384){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__61383,expr__61384))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__61388,callback){
var map__61391 = p__61388;
var map__61391__$1 = ((((!((map__61391 == null)))?((((map__61391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61391):map__61391);
var file_msg = map__61391__$1;
var request_url = cljs.core.get.call(null,map__61391__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__61391,map__61391__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__61391,map__61391__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__58146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto__){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto__){
return (function (state_61415){
var state_val_61416 = (state_61415[(1)]);
if((state_val_61416 === (7))){
var inst_61411 = (state_61415[(2)]);
var state_61415__$1 = state_61415;
var statearr_61417_61437 = state_61415__$1;
(statearr_61417_61437[(2)] = inst_61411);

(statearr_61417_61437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61416 === (1))){
var state_61415__$1 = state_61415;
var statearr_61418_61438 = state_61415__$1;
(statearr_61418_61438[(2)] = null);

(statearr_61418_61438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61416 === (4))){
var inst_61395 = (state_61415[(7)]);
var inst_61395__$1 = (state_61415[(2)]);
var state_61415__$1 = (function (){var statearr_61419 = state_61415;
(statearr_61419[(7)] = inst_61395__$1);

return statearr_61419;
})();
if(cljs.core.truth_(inst_61395__$1)){
var statearr_61420_61439 = state_61415__$1;
(statearr_61420_61439[(1)] = (5));

} else {
var statearr_61421_61440 = state_61415__$1;
(statearr_61421_61440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61416 === (6))){
var state_61415__$1 = state_61415;
var statearr_61422_61441 = state_61415__$1;
(statearr_61422_61441[(2)] = null);

(statearr_61422_61441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61416 === (3))){
var inst_61413 = (state_61415[(2)]);
var state_61415__$1 = state_61415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61415__$1,inst_61413);
} else {
if((state_val_61416 === (2))){
var state_61415__$1 = state_61415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61415__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_61416 === (11))){
var inst_61407 = (state_61415[(2)]);
var state_61415__$1 = (function (){var statearr_61423 = state_61415;
(statearr_61423[(8)] = inst_61407);

return statearr_61423;
})();
var statearr_61424_61442 = state_61415__$1;
(statearr_61424_61442[(2)] = null);

(statearr_61424_61442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61416 === (9))){
var inst_61399 = (state_61415[(9)]);
var inst_61401 = (state_61415[(10)]);
var inst_61403 = inst_61401.call(null,inst_61399);
var state_61415__$1 = state_61415;
var statearr_61425_61443 = state_61415__$1;
(statearr_61425_61443[(2)] = inst_61403);

(statearr_61425_61443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61416 === (5))){
var inst_61395 = (state_61415[(7)]);
var inst_61397 = figwheel.client.file_reloading.blocking_load.call(null,inst_61395);
var state_61415__$1 = state_61415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61415__$1,(8),inst_61397);
} else {
if((state_val_61416 === (10))){
var inst_61399 = (state_61415[(9)]);
var inst_61405 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_61399);
var state_61415__$1 = state_61415;
var statearr_61426_61444 = state_61415__$1;
(statearr_61426_61444[(2)] = inst_61405);

(statearr_61426_61444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61416 === (8))){
var inst_61395 = (state_61415[(7)]);
var inst_61401 = (state_61415[(10)]);
var inst_61399 = (state_61415[(2)]);
var inst_61400 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_61401__$1 = cljs.core.get.call(null,inst_61400,inst_61395);
var state_61415__$1 = (function (){var statearr_61427 = state_61415;
(statearr_61427[(9)] = inst_61399);

(statearr_61427[(10)] = inst_61401__$1);

return statearr_61427;
})();
if(cljs.core.truth_(inst_61401__$1)){
var statearr_61428_61445 = state_61415__$1;
(statearr_61428_61445[(1)] = (9));

} else {
var statearr_61429_61446 = state_61415__$1;
(statearr_61429_61446[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__58146__auto__))
;
return ((function (switch__58034__auto__,c__58146__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__58035__auto__ = null;
var figwheel$client$file_reloading$state_machine__58035__auto____0 = (function (){
var statearr_61433 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61433[(0)] = figwheel$client$file_reloading$state_machine__58035__auto__);

(statearr_61433[(1)] = (1));

return statearr_61433;
});
var figwheel$client$file_reloading$state_machine__58035__auto____1 = (function (state_61415){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_61415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e61434){if((e61434 instanceof Object)){
var ex__58038__auto__ = e61434;
var statearr_61435_61447 = state_61415;
(statearr_61435_61447[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61448 = state_61415;
state_61415 = G__61448;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__58035__auto__ = function(state_61415){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__58035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__58035__auto____1.call(this,state_61415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__58035__auto____0;
figwheel$client$file_reloading$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__58035__auto____1;
return figwheel$client$file_reloading$state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto__))
})();
var state__58148__auto__ = (function (){var statearr_61436 = f__58147__auto__.call(null);
(statearr_61436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto__);

return statearr_61436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto__))
);

return c__58146__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__61449,callback){
var map__61452 = p__61449;
var map__61452__$1 = ((((!((map__61452 == null)))?((((map__61452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61452):map__61452);
var file_msg = map__61452__$1;
var namespace = cljs.core.get.call(null,map__61452__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__61452,map__61452__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__61452,map__61452__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__61454){
var map__61457 = p__61454;
var map__61457__$1 = ((((!((map__61457 == null)))?((((map__61457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61457):map__61457);
var file_msg = map__61457__$1;
var namespace = cljs.core.get.call(null,map__61457__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__61459){
var map__61462 = p__61459;
var map__61462__$1 = ((((!((map__61462 == null)))?((((map__61462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61462):map__61462);
var file_msg = map__61462__$1;
var namespace = cljs.core.get.call(null,map__61462__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__48107__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__48107__auto__){
var or__48119__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
var or__48119__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__48119__auto____$1)){
return or__48119__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__48107__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__61464,callback){
var map__61467 = p__61464;
var map__61467__$1 = ((((!((map__61467 == null)))?((((map__61467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61467):map__61467);
var file_msg = map__61467__$1;
var request_url = cljs.core.get.call(null,map__61467__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__61467__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__58146__auto___61571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___61571,out){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___61571,out){
return (function (state_61553){
var state_val_61554 = (state_61553[(1)]);
if((state_val_61554 === (1))){
var inst_61527 = cljs.core.seq.call(null,files);
var inst_61528 = cljs.core.first.call(null,inst_61527);
var inst_61529 = cljs.core.next.call(null,inst_61527);
var inst_61530 = files;
var state_61553__$1 = (function (){var statearr_61555 = state_61553;
(statearr_61555[(7)] = inst_61529);

(statearr_61555[(8)] = inst_61528);

(statearr_61555[(9)] = inst_61530);

return statearr_61555;
})();
var statearr_61556_61572 = state_61553__$1;
(statearr_61556_61572[(2)] = null);

(statearr_61556_61572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61554 === (2))){
var inst_61536 = (state_61553[(10)]);
var inst_61530 = (state_61553[(9)]);
var inst_61535 = cljs.core.seq.call(null,inst_61530);
var inst_61536__$1 = cljs.core.first.call(null,inst_61535);
var inst_61537 = cljs.core.next.call(null,inst_61535);
var inst_61538 = (inst_61536__$1 == null);
var inst_61539 = cljs.core.not.call(null,inst_61538);
var state_61553__$1 = (function (){var statearr_61557 = state_61553;
(statearr_61557[(11)] = inst_61537);

(statearr_61557[(10)] = inst_61536__$1);

return statearr_61557;
})();
if(inst_61539){
var statearr_61558_61573 = state_61553__$1;
(statearr_61558_61573[(1)] = (4));

} else {
var statearr_61559_61574 = state_61553__$1;
(statearr_61559_61574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61554 === (3))){
var inst_61551 = (state_61553[(2)]);
var state_61553__$1 = state_61553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61553__$1,inst_61551);
} else {
if((state_val_61554 === (4))){
var inst_61536 = (state_61553[(10)]);
var inst_61541 = figwheel.client.file_reloading.reload_js_file.call(null,inst_61536);
var state_61553__$1 = state_61553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61553__$1,(7),inst_61541);
} else {
if((state_val_61554 === (5))){
var inst_61547 = cljs.core.async.close_BANG_.call(null,out);
var state_61553__$1 = state_61553;
var statearr_61560_61575 = state_61553__$1;
(statearr_61560_61575[(2)] = inst_61547);

(statearr_61560_61575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61554 === (6))){
var inst_61549 = (state_61553[(2)]);
var state_61553__$1 = state_61553;
var statearr_61561_61576 = state_61553__$1;
(statearr_61561_61576[(2)] = inst_61549);

(statearr_61561_61576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61554 === (7))){
var inst_61537 = (state_61553[(11)]);
var inst_61543 = (state_61553[(2)]);
var inst_61544 = cljs.core.async.put_BANG_.call(null,out,inst_61543);
var inst_61530 = inst_61537;
var state_61553__$1 = (function (){var statearr_61562 = state_61553;
(statearr_61562[(12)] = inst_61544);

(statearr_61562[(9)] = inst_61530);

return statearr_61562;
})();
var statearr_61563_61577 = state_61553__$1;
(statearr_61563_61577[(2)] = null);

(statearr_61563_61577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__58146__auto___61571,out))
;
return ((function (switch__58034__auto__,c__58146__auto___61571,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__58035__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__58035__auto____0 = (function (){
var statearr_61567 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61567[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__58035__auto__);

(statearr_61567[(1)] = (1));

return statearr_61567;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__58035__auto____1 = (function (state_61553){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_61553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e61568){if((e61568 instanceof Object)){
var ex__58038__auto__ = e61568;
var statearr_61569_61578 = state_61553;
(statearr_61569_61578[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61579 = state_61553;
state_61553 = G__61579;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__58035__auto__ = function(state_61553){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__58035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__58035__auto____1.call(this,state_61553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__58035__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__58035__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___61571,out))
})();
var state__58148__auto__ = (function (){var statearr_61570 = f__58147__auto__.call(null);
(statearr_61570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___61571);

return statearr_61570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___61571,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__61580,opts){
var map__61584 = p__61580;
var map__61584__$1 = ((((!((map__61584 == null)))?((((map__61584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61584):map__61584);
var eval_body = cljs.core.get.call(null,map__61584__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__61584__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__48107__auto__ = eval_body;
if(cljs.core.truth_(and__48107__auto__)){
return typeof eval_body === 'string';
} else {
return and__48107__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e61586){var e = e61586;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__61587_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__61587_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__61596){
var vec__61597 = p__61596;
var k = cljs.core.nth.call(null,vec__61597,(0),null);
var v = cljs.core.nth.call(null,vec__61597,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__61600){
var vec__61601 = p__61600;
var k = cljs.core.nth.call(null,vec__61601,(0),null);
var v = cljs.core.nth.call(null,vec__61601,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__61607,p__61608){
var map__61856 = p__61607;
var map__61856__$1 = ((((!((map__61856 == null)))?((((map__61856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61856):map__61856);
var opts = map__61856__$1;
var before_jsload = cljs.core.get.call(null,map__61856__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__61856__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__61856__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__61857 = p__61608;
var map__61857__$1 = ((((!((map__61857 == null)))?((((map__61857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61857):map__61857);
var msg = map__61857__$1;
var files = cljs.core.get.call(null,map__61857__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__61857__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__61857__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__58146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_62011){
var state_val_62012 = (state_62011[(1)]);
if((state_val_62012 === (7))){
var inst_61871 = (state_62011[(7)]);
var inst_61872 = (state_62011[(8)]);
var inst_61873 = (state_62011[(9)]);
var inst_61874 = (state_62011[(10)]);
var inst_61879 = cljs.core._nth.call(null,inst_61872,inst_61874);
var inst_61880 = figwheel.client.file_reloading.eval_body.call(null,inst_61879,opts);
var inst_61881 = (inst_61874 + (1));
var tmp62013 = inst_61871;
var tmp62014 = inst_61872;
var tmp62015 = inst_61873;
var inst_61871__$1 = tmp62013;
var inst_61872__$1 = tmp62014;
var inst_61873__$1 = tmp62015;
var inst_61874__$1 = inst_61881;
var state_62011__$1 = (function (){var statearr_62016 = state_62011;
(statearr_62016[(7)] = inst_61871__$1);

(statearr_62016[(8)] = inst_61872__$1);

(statearr_62016[(9)] = inst_61873__$1);

(statearr_62016[(10)] = inst_61874__$1);

(statearr_62016[(11)] = inst_61880);

return statearr_62016;
})();
var statearr_62017_62103 = state_62011__$1;
(statearr_62017_62103[(2)] = null);

(statearr_62017_62103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (20))){
var inst_61914 = (state_62011[(12)]);
var inst_61922 = figwheel.client.file_reloading.sort_files.call(null,inst_61914);
var state_62011__$1 = state_62011;
var statearr_62018_62104 = state_62011__$1;
(statearr_62018_62104[(2)] = inst_61922);

(statearr_62018_62104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (27))){
var state_62011__$1 = state_62011;
var statearr_62019_62105 = state_62011__$1;
(statearr_62019_62105[(2)] = null);

(statearr_62019_62105[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (1))){
var inst_61863 = (state_62011[(13)]);
var inst_61860 = before_jsload.call(null,files);
var inst_61861 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_61862 = (function (){return ((function (inst_61863,inst_61860,inst_61861,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__61604_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__61604_SHARP_);
});
;})(inst_61863,inst_61860,inst_61861,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61863__$1 = cljs.core.filter.call(null,inst_61862,files);
var inst_61864 = cljs.core.not_empty.call(null,inst_61863__$1);
var state_62011__$1 = (function (){var statearr_62020 = state_62011;
(statearr_62020[(13)] = inst_61863__$1);

(statearr_62020[(14)] = inst_61860);

(statearr_62020[(15)] = inst_61861);

return statearr_62020;
})();
if(cljs.core.truth_(inst_61864)){
var statearr_62021_62106 = state_62011__$1;
(statearr_62021_62106[(1)] = (2));

} else {
var statearr_62022_62107 = state_62011__$1;
(statearr_62022_62107[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (24))){
var state_62011__$1 = state_62011;
var statearr_62023_62108 = state_62011__$1;
(statearr_62023_62108[(2)] = null);

(statearr_62023_62108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (39))){
var inst_61964 = (state_62011[(16)]);
var state_62011__$1 = state_62011;
var statearr_62024_62109 = state_62011__$1;
(statearr_62024_62109[(2)] = inst_61964);

(statearr_62024_62109[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (46))){
var inst_62006 = (state_62011[(2)]);
var state_62011__$1 = state_62011;
var statearr_62025_62110 = state_62011__$1;
(statearr_62025_62110[(2)] = inst_62006);

(statearr_62025_62110[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (4))){
var inst_61908 = (state_62011[(2)]);
var inst_61909 = cljs.core.List.EMPTY;
var inst_61910 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_61909);
var inst_61911 = (function (){return ((function (inst_61908,inst_61909,inst_61910,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__61605_SHARP_){
var and__48107__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__61605_SHARP_);
if(cljs.core.truth_(and__48107__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__61605_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__61605_SHARP_)));
} else {
return and__48107__auto__;
}
});
;})(inst_61908,inst_61909,inst_61910,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61912 = cljs.core.filter.call(null,inst_61911,files);
var inst_61913 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_61914 = cljs.core.concat.call(null,inst_61912,inst_61913);
var state_62011__$1 = (function (){var statearr_62026 = state_62011;
(statearr_62026[(17)] = inst_61910);

(statearr_62026[(18)] = inst_61908);

(statearr_62026[(12)] = inst_61914);

return statearr_62026;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_62027_62111 = state_62011__$1;
(statearr_62027_62111[(1)] = (16));

} else {
var statearr_62028_62112 = state_62011__$1;
(statearr_62028_62112[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (15))){
var inst_61898 = (state_62011[(2)]);
var state_62011__$1 = state_62011;
var statearr_62029_62113 = state_62011__$1;
(statearr_62029_62113[(2)] = inst_61898);

(statearr_62029_62113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (21))){
var inst_61924 = (state_62011[(19)]);
var inst_61924__$1 = (state_62011[(2)]);
var inst_61925 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_61924__$1);
var state_62011__$1 = (function (){var statearr_62030 = state_62011;
(statearr_62030[(19)] = inst_61924__$1);

return statearr_62030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62011__$1,(22),inst_61925);
} else {
if((state_val_62012 === (31))){
var inst_62009 = (state_62011[(2)]);
var state_62011__$1 = state_62011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62011__$1,inst_62009);
} else {
if((state_val_62012 === (32))){
var inst_61964 = (state_62011[(16)]);
var inst_61969 = inst_61964.cljs$lang$protocol_mask$partition0$;
var inst_61970 = (inst_61969 & (64));
var inst_61971 = inst_61964.cljs$core$ISeq$;
var inst_61972 = (cljs.core.PROTOCOL_SENTINEL === inst_61971);
var inst_61973 = (inst_61970) || (inst_61972);
var state_62011__$1 = state_62011;
if(cljs.core.truth_(inst_61973)){
var statearr_62031_62114 = state_62011__$1;
(statearr_62031_62114[(1)] = (35));

} else {
var statearr_62032_62115 = state_62011__$1;
(statearr_62032_62115[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (40))){
var inst_61986 = (state_62011[(20)]);
var inst_61985 = (state_62011[(2)]);
var inst_61986__$1 = cljs.core.get.call(null,inst_61985,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_61987 = cljs.core.get.call(null,inst_61985,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_61988 = cljs.core.not_empty.call(null,inst_61986__$1);
var state_62011__$1 = (function (){var statearr_62033 = state_62011;
(statearr_62033[(21)] = inst_61987);

(statearr_62033[(20)] = inst_61986__$1);

return statearr_62033;
})();
if(cljs.core.truth_(inst_61988)){
var statearr_62034_62116 = state_62011__$1;
(statearr_62034_62116[(1)] = (41));

} else {
var statearr_62035_62117 = state_62011__$1;
(statearr_62035_62117[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (33))){
var state_62011__$1 = state_62011;
var statearr_62036_62118 = state_62011__$1;
(statearr_62036_62118[(2)] = false);

(statearr_62036_62118[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (13))){
var inst_61884 = (state_62011[(22)]);
var inst_61888 = cljs.core.chunk_first.call(null,inst_61884);
var inst_61889 = cljs.core.chunk_rest.call(null,inst_61884);
var inst_61890 = cljs.core.count.call(null,inst_61888);
var inst_61871 = inst_61889;
var inst_61872 = inst_61888;
var inst_61873 = inst_61890;
var inst_61874 = (0);
var state_62011__$1 = (function (){var statearr_62037 = state_62011;
(statearr_62037[(7)] = inst_61871);

(statearr_62037[(8)] = inst_61872);

(statearr_62037[(9)] = inst_61873);

(statearr_62037[(10)] = inst_61874);

return statearr_62037;
})();
var statearr_62038_62119 = state_62011__$1;
(statearr_62038_62119[(2)] = null);

(statearr_62038_62119[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (22))){
var inst_61928 = (state_62011[(23)]);
var inst_61924 = (state_62011[(19)]);
var inst_61927 = (state_62011[(24)]);
var inst_61932 = (state_62011[(25)]);
var inst_61927__$1 = (state_62011[(2)]);
var inst_61928__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_61927__$1);
var inst_61929 = (function (){var all_files = inst_61924;
var res_SINGLEQUOTE_ = inst_61927__$1;
var res = inst_61928__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_61928,inst_61924,inst_61927,inst_61932,inst_61927__$1,inst_61928__$1,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__61606_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__61606_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_61928,inst_61924,inst_61927,inst_61932,inst_61927__$1,inst_61928__$1,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61930 = cljs.core.filter.call(null,inst_61929,inst_61927__$1);
var inst_61931 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_61932__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_61931);
var inst_61933 = cljs.core.not_empty.call(null,inst_61932__$1);
var state_62011__$1 = (function (){var statearr_62039 = state_62011;
(statearr_62039[(23)] = inst_61928__$1);

(statearr_62039[(26)] = inst_61930);

(statearr_62039[(24)] = inst_61927__$1);

(statearr_62039[(25)] = inst_61932__$1);

return statearr_62039;
})();
if(cljs.core.truth_(inst_61933)){
var statearr_62040_62120 = state_62011__$1;
(statearr_62040_62120[(1)] = (23));

} else {
var statearr_62041_62121 = state_62011__$1;
(statearr_62041_62121[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (36))){
var state_62011__$1 = state_62011;
var statearr_62042_62122 = state_62011__$1;
(statearr_62042_62122[(2)] = false);

(statearr_62042_62122[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (41))){
var inst_61986 = (state_62011[(20)]);
var inst_61990 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_61991 = cljs.core.map.call(null,inst_61990,inst_61986);
var inst_61992 = cljs.core.pr_str.call(null,inst_61991);
var inst_61993 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_61992)].join('');
var inst_61994 = figwheel.client.utils.log.call(null,inst_61993);
var state_62011__$1 = state_62011;
var statearr_62043_62123 = state_62011__$1;
(statearr_62043_62123[(2)] = inst_61994);

(statearr_62043_62123[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (43))){
var inst_61987 = (state_62011[(21)]);
var inst_61997 = (state_62011[(2)]);
var inst_61998 = cljs.core.not_empty.call(null,inst_61987);
var state_62011__$1 = (function (){var statearr_62044 = state_62011;
(statearr_62044[(27)] = inst_61997);

return statearr_62044;
})();
if(cljs.core.truth_(inst_61998)){
var statearr_62045_62124 = state_62011__$1;
(statearr_62045_62124[(1)] = (44));

} else {
var statearr_62046_62125 = state_62011__$1;
(statearr_62046_62125[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (29))){
var inst_61928 = (state_62011[(23)]);
var inst_61930 = (state_62011[(26)]);
var inst_61924 = (state_62011[(19)]);
var inst_61964 = (state_62011[(16)]);
var inst_61927 = (state_62011[(24)]);
var inst_61932 = (state_62011[(25)]);
var inst_61960 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_61963 = (function (){var all_files = inst_61924;
var res_SINGLEQUOTE_ = inst_61927;
var res = inst_61928;
var files_not_loaded = inst_61930;
var dependencies_that_loaded = inst_61932;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61928,inst_61930,inst_61924,inst_61964,inst_61927,inst_61932,inst_61960,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__61962){
var map__62047 = p__61962;
var map__62047__$1 = ((((!((map__62047 == null)))?((((map__62047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62047):map__62047);
var namespace = cljs.core.get.call(null,map__62047__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61928,inst_61930,inst_61924,inst_61964,inst_61927,inst_61932,inst_61960,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61964__$1 = cljs.core.group_by.call(null,inst_61963,inst_61930);
var inst_61966 = (inst_61964__$1 == null);
var inst_61967 = cljs.core.not.call(null,inst_61966);
var state_62011__$1 = (function (){var statearr_62049 = state_62011;
(statearr_62049[(28)] = inst_61960);

(statearr_62049[(16)] = inst_61964__$1);

return statearr_62049;
})();
if(inst_61967){
var statearr_62050_62126 = state_62011__$1;
(statearr_62050_62126[(1)] = (32));

} else {
var statearr_62051_62127 = state_62011__$1;
(statearr_62051_62127[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (44))){
var inst_61987 = (state_62011[(21)]);
var inst_62000 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_61987);
var inst_62001 = cljs.core.pr_str.call(null,inst_62000);
var inst_62002 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_62001)].join('');
var inst_62003 = figwheel.client.utils.log.call(null,inst_62002);
var state_62011__$1 = state_62011;
var statearr_62052_62128 = state_62011__$1;
(statearr_62052_62128[(2)] = inst_62003);

(statearr_62052_62128[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (6))){
var inst_61905 = (state_62011[(2)]);
var state_62011__$1 = state_62011;
var statearr_62053_62129 = state_62011__$1;
(statearr_62053_62129[(2)] = inst_61905);

(statearr_62053_62129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (28))){
var inst_61930 = (state_62011[(26)]);
var inst_61957 = (state_62011[(2)]);
var inst_61958 = cljs.core.not_empty.call(null,inst_61930);
var state_62011__$1 = (function (){var statearr_62054 = state_62011;
(statearr_62054[(29)] = inst_61957);

return statearr_62054;
})();
if(cljs.core.truth_(inst_61958)){
var statearr_62055_62130 = state_62011__$1;
(statearr_62055_62130[(1)] = (29));

} else {
var statearr_62056_62131 = state_62011__$1;
(statearr_62056_62131[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (25))){
var inst_61928 = (state_62011[(23)]);
var inst_61944 = (state_62011[(2)]);
var inst_61945 = cljs.core.not_empty.call(null,inst_61928);
var state_62011__$1 = (function (){var statearr_62057 = state_62011;
(statearr_62057[(30)] = inst_61944);

return statearr_62057;
})();
if(cljs.core.truth_(inst_61945)){
var statearr_62058_62132 = state_62011__$1;
(statearr_62058_62132[(1)] = (26));

} else {
var statearr_62059_62133 = state_62011__$1;
(statearr_62059_62133[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (34))){
var inst_61980 = (state_62011[(2)]);
var state_62011__$1 = state_62011;
if(cljs.core.truth_(inst_61980)){
var statearr_62060_62134 = state_62011__$1;
(statearr_62060_62134[(1)] = (38));

} else {
var statearr_62061_62135 = state_62011__$1;
(statearr_62061_62135[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (17))){
var state_62011__$1 = state_62011;
var statearr_62062_62136 = state_62011__$1;
(statearr_62062_62136[(2)] = recompile_dependents);

(statearr_62062_62136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (3))){
var state_62011__$1 = state_62011;
var statearr_62063_62137 = state_62011__$1;
(statearr_62063_62137[(2)] = null);

(statearr_62063_62137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (12))){
var inst_61901 = (state_62011[(2)]);
var state_62011__$1 = state_62011;
var statearr_62064_62138 = state_62011__$1;
(statearr_62064_62138[(2)] = inst_61901);

(statearr_62064_62138[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (2))){
var inst_61863 = (state_62011[(13)]);
var inst_61870 = cljs.core.seq.call(null,inst_61863);
var inst_61871 = inst_61870;
var inst_61872 = null;
var inst_61873 = (0);
var inst_61874 = (0);
var state_62011__$1 = (function (){var statearr_62065 = state_62011;
(statearr_62065[(7)] = inst_61871);

(statearr_62065[(8)] = inst_61872);

(statearr_62065[(9)] = inst_61873);

(statearr_62065[(10)] = inst_61874);

return statearr_62065;
})();
var statearr_62066_62139 = state_62011__$1;
(statearr_62066_62139[(2)] = null);

(statearr_62066_62139[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (23))){
var inst_61928 = (state_62011[(23)]);
var inst_61930 = (state_62011[(26)]);
var inst_61924 = (state_62011[(19)]);
var inst_61927 = (state_62011[(24)]);
var inst_61932 = (state_62011[(25)]);
var inst_61935 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_61937 = (function (){var all_files = inst_61924;
var res_SINGLEQUOTE_ = inst_61927;
var res = inst_61928;
var files_not_loaded = inst_61930;
var dependencies_that_loaded = inst_61932;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61928,inst_61930,inst_61924,inst_61927,inst_61932,inst_61935,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__61936){
var map__62067 = p__61936;
var map__62067__$1 = ((((!((map__62067 == null)))?((((map__62067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62067):map__62067);
var request_url = cljs.core.get.call(null,map__62067__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61928,inst_61930,inst_61924,inst_61927,inst_61932,inst_61935,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61938 = cljs.core.reverse.call(null,inst_61932);
var inst_61939 = cljs.core.map.call(null,inst_61937,inst_61938);
var inst_61940 = cljs.core.pr_str.call(null,inst_61939);
var inst_61941 = figwheel.client.utils.log.call(null,inst_61940);
var state_62011__$1 = (function (){var statearr_62069 = state_62011;
(statearr_62069[(31)] = inst_61935);

return statearr_62069;
})();
var statearr_62070_62140 = state_62011__$1;
(statearr_62070_62140[(2)] = inst_61941);

(statearr_62070_62140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (35))){
var state_62011__$1 = state_62011;
var statearr_62071_62141 = state_62011__$1;
(statearr_62071_62141[(2)] = true);

(statearr_62071_62141[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (19))){
var inst_61914 = (state_62011[(12)]);
var inst_61920 = figwheel.client.file_reloading.expand_files.call(null,inst_61914);
var state_62011__$1 = state_62011;
var statearr_62072_62142 = state_62011__$1;
(statearr_62072_62142[(2)] = inst_61920);

(statearr_62072_62142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (11))){
var state_62011__$1 = state_62011;
var statearr_62073_62143 = state_62011__$1;
(statearr_62073_62143[(2)] = null);

(statearr_62073_62143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (9))){
var inst_61903 = (state_62011[(2)]);
var state_62011__$1 = state_62011;
var statearr_62074_62144 = state_62011__$1;
(statearr_62074_62144[(2)] = inst_61903);

(statearr_62074_62144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (5))){
var inst_61873 = (state_62011[(9)]);
var inst_61874 = (state_62011[(10)]);
var inst_61876 = (inst_61874 < inst_61873);
var inst_61877 = inst_61876;
var state_62011__$1 = state_62011;
if(cljs.core.truth_(inst_61877)){
var statearr_62075_62145 = state_62011__$1;
(statearr_62075_62145[(1)] = (7));

} else {
var statearr_62076_62146 = state_62011__$1;
(statearr_62076_62146[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (14))){
var inst_61884 = (state_62011[(22)]);
var inst_61893 = cljs.core.first.call(null,inst_61884);
var inst_61894 = figwheel.client.file_reloading.eval_body.call(null,inst_61893,opts);
var inst_61895 = cljs.core.next.call(null,inst_61884);
var inst_61871 = inst_61895;
var inst_61872 = null;
var inst_61873 = (0);
var inst_61874 = (0);
var state_62011__$1 = (function (){var statearr_62077 = state_62011;
(statearr_62077[(7)] = inst_61871);

(statearr_62077[(8)] = inst_61872);

(statearr_62077[(9)] = inst_61873);

(statearr_62077[(10)] = inst_61874);

(statearr_62077[(32)] = inst_61894);

return statearr_62077;
})();
var statearr_62078_62147 = state_62011__$1;
(statearr_62078_62147[(2)] = null);

(statearr_62078_62147[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (45))){
var state_62011__$1 = state_62011;
var statearr_62079_62148 = state_62011__$1;
(statearr_62079_62148[(2)] = null);

(statearr_62079_62148[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (26))){
var inst_61928 = (state_62011[(23)]);
var inst_61930 = (state_62011[(26)]);
var inst_61924 = (state_62011[(19)]);
var inst_61927 = (state_62011[(24)]);
var inst_61932 = (state_62011[(25)]);
var inst_61947 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_61949 = (function (){var all_files = inst_61924;
var res_SINGLEQUOTE_ = inst_61927;
var res = inst_61928;
var files_not_loaded = inst_61930;
var dependencies_that_loaded = inst_61932;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61928,inst_61930,inst_61924,inst_61927,inst_61932,inst_61947,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__61948){
var map__62080 = p__61948;
var map__62080__$1 = ((((!((map__62080 == null)))?((((map__62080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62080):map__62080);
var namespace = cljs.core.get.call(null,map__62080__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__62080__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61928,inst_61930,inst_61924,inst_61927,inst_61932,inst_61947,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61950 = cljs.core.map.call(null,inst_61949,inst_61928);
var inst_61951 = cljs.core.pr_str.call(null,inst_61950);
var inst_61952 = figwheel.client.utils.log.call(null,inst_61951);
var inst_61953 = (function (){var all_files = inst_61924;
var res_SINGLEQUOTE_ = inst_61927;
var res = inst_61928;
var files_not_loaded = inst_61930;
var dependencies_that_loaded = inst_61932;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61928,inst_61930,inst_61924,inst_61927,inst_61932,inst_61947,inst_61949,inst_61950,inst_61951,inst_61952,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61928,inst_61930,inst_61924,inst_61927,inst_61932,inst_61947,inst_61949,inst_61950,inst_61951,inst_61952,state_val_62012,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61954 = setTimeout(inst_61953,(10));
var state_62011__$1 = (function (){var statearr_62082 = state_62011;
(statearr_62082[(33)] = inst_61952);

(statearr_62082[(34)] = inst_61947);

return statearr_62082;
})();
var statearr_62083_62149 = state_62011__$1;
(statearr_62083_62149[(2)] = inst_61954);

(statearr_62083_62149[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (16))){
var state_62011__$1 = state_62011;
var statearr_62084_62150 = state_62011__$1;
(statearr_62084_62150[(2)] = reload_dependents);

(statearr_62084_62150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (38))){
var inst_61964 = (state_62011[(16)]);
var inst_61982 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61964);
var state_62011__$1 = state_62011;
var statearr_62085_62151 = state_62011__$1;
(statearr_62085_62151[(2)] = inst_61982);

(statearr_62085_62151[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (30))){
var state_62011__$1 = state_62011;
var statearr_62086_62152 = state_62011__$1;
(statearr_62086_62152[(2)] = null);

(statearr_62086_62152[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (10))){
var inst_61884 = (state_62011[(22)]);
var inst_61886 = cljs.core.chunked_seq_QMARK_.call(null,inst_61884);
var state_62011__$1 = state_62011;
if(inst_61886){
var statearr_62087_62153 = state_62011__$1;
(statearr_62087_62153[(1)] = (13));

} else {
var statearr_62088_62154 = state_62011__$1;
(statearr_62088_62154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (18))){
var inst_61918 = (state_62011[(2)]);
var state_62011__$1 = state_62011;
if(cljs.core.truth_(inst_61918)){
var statearr_62089_62155 = state_62011__$1;
(statearr_62089_62155[(1)] = (19));

} else {
var statearr_62090_62156 = state_62011__$1;
(statearr_62090_62156[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (42))){
var state_62011__$1 = state_62011;
var statearr_62091_62157 = state_62011__$1;
(statearr_62091_62157[(2)] = null);

(statearr_62091_62157[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (37))){
var inst_61977 = (state_62011[(2)]);
var state_62011__$1 = state_62011;
var statearr_62092_62158 = state_62011__$1;
(statearr_62092_62158[(2)] = inst_61977);

(statearr_62092_62158[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62012 === (8))){
var inst_61871 = (state_62011[(7)]);
var inst_61884 = (state_62011[(22)]);
var inst_61884__$1 = cljs.core.seq.call(null,inst_61871);
var state_62011__$1 = (function (){var statearr_62093 = state_62011;
(statearr_62093[(22)] = inst_61884__$1);

return statearr_62093;
})();
if(inst_61884__$1){
var statearr_62094_62159 = state_62011__$1;
(statearr_62094_62159[(1)] = (10));

} else {
var statearr_62095_62160 = state_62011__$1;
(statearr_62095_62160[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__58034__auto__,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__58035__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__58035__auto____0 = (function (){
var statearr_62099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62099[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__58035__auto__);

(statearr_62099[(1)] = (1));

return statearr_62099;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__58035__auto____1 = (function (state_62011){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_62011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e62100){if((e62100 instanceof Object)){
var ex__58038__auto__ = e62100;
var statearr_62101_62161 = state_62011;
(statearr_62101_62161[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62162 = state_62011;
state_62011 = G__62162;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__58035__auto__ = function(state_62011){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__58035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__58035__auto____1.call(this,state_62011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__58035__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__58035__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__58148__auto__ = (function (){var statearr_62102 = f__58147__auto__.call(null);
(statearr_62102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto__);

return statearr_62102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto__,map__61856,map__61856__$1,opts,before_jsload,on_jsload,reload_dependents,map__61857,map__61857__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__58146__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__62165,link){
var map__62168 = p__62165;
var map__62168__$1 = ((((!((map__62168 == null)))?((((map__62168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62168):map__62168);
var file = cljs.core.get.call(null,map__62168__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__62168,map__62168__$1,file){
return (function (p1__62163_SHARP_,p2__62164_SHARP_){
if(cljs.core._EQ_.call(null,p1__62163_SHARP_,p2__62164_SHARP_)){
return p1__62163_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__62168,map__62168__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__62174){
var map__62175 = p__62174;
var map__62175__$1 = ((((!((map__62175 == null)))?((((map__62175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62175):map__62175);
var match_length = cljs.core.get.call(null,map__62175__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__62175__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__62170_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__62170_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__62177_SHARP_,p2__62178_SHARP_){
return cljs.core.assoc.call(null,p1__62177_SHARP_,cljs.core.get.call(null,p2__62178_SHARP_,key),p2__62178_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_62179 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_62179);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_62179);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__62180,p__62181){
var map__62186 = p__62180;
var map__62186__$1 = ((((!((map__62186 == null)))?((((map__62186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62186):map__62186);
var on_cssload = cljs.core.get.call(null,map__62186__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__62187 = p__62181;
var map__62187__$1 = ((((!((map__62187 == null)))?((((map__62187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62187):map__62187);
var files_msg = map__62187__$1;
var files = cljs.core.get.call(null,map__62187__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map