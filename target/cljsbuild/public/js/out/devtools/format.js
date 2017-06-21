// Compiled by ClojureScript 1.9.495 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__48787__auto__ = (((value == null))?null:value);
var m__48788__auto__ = (devtools.format._header[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,value);
} else {
var m__48788__auto____$1 = (devtools.format._header["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__48787__auto__ = (((value == null))?null:value);
var m__48788__auto__ = (devtools.format._has_body[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,value);
} else {
var m__48788__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__48787__auto__ = (((value == null))?null:value);
var m__48788__auto__ = (devtools.format._body[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,value);
} else {
var m__48788__auto____$1 = (devtools.format._body["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__50864__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__50864__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__50864__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__50864__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__50863__auto__ = temp__4657__auto____$2;
return goog.object.get(o__50863__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__50864__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__50864__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__50864__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__50864__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__50863__auto__ = temp__4657__auto____$2;
return goog.object.get(o__50863__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__50864__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__50864__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__50864__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__50864__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__50863__auto__ = temp__4657__auto____$2;
return goog.object.get(o__50863__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__50864__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__50864__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__50864__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__50864__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__50863__auto__ = temp__4657__auto____$2;
return goog.object.get(o__50863__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__50864__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__50864__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__50864__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__50864__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__50863__auto__ = temp__4657__auto____$2;
return goog.object.get(o__50863__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__50864__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__50864__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__50864__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__50864__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__50863__auto__ = temp__4657__auto____$2;
return goog.object.get(o__50863__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__50864__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__50864__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__50864__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__50864__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__50863__auto__ = temp__4657__auto____$2;
return goog.object.get(o__50863__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__49239__auto__ = [];
var len__49232__auto___50885 = arguments.length;
var i__49233__auto___50886 = (0);
while(true){
if((i__49233__auto___50886 < len__49232__auto___50885)){
args__49239__auto__.push((arguments[i__49233__auto___50886]));

var G__50887 = (i__49233__auto___50886 + (1));
i__49233__auto___50886 = G__50887;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq50884){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50884));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__49239__auto__ = [];
var len__49232__auto___50889 = arguments.length;
var i__49233__auto___50890 = (0);
while(true){
if((i__49233__auto___50890 < len__49232__auto___50889)){
args__49239__auto__.push((arguments[i__49233__auto___50890]));

var G__50891 = (i__49233__auto___50890 + (1));
i__49233__auto___50890 = G__50891;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq50888){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50888));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__49239__auto__ = [];
var len__49232__auto___50893 = arguments.length;
var i__49233__auto___50894 = (0);
while(true){
if((i__49233__auto___50894 < len__49232__auto___50893)){
args__49239__auto__.push((arguments[i__49233__auto___50894]));

var G__50895 = (i__49233__auto___50894 + (1));
i__49233__auto___50894 = G__50895;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq50892){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50892));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__49239__auto__ = [];
var len__49232__auto___50897 = arguments.length;
var i__49233__auto___50898 = (0);
while(true){
if((i__49233__auto___50898 < len__49232__auto___50897)){
args__49239__auto__.push((arguments[i__49233__auto___50898]));

var G__50899 = (i__49233__auto___50898 + (1));
i__49233__auto___50898 = G__50899;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq50896){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50896));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__49239__auto__ = [];
var len__49232__auto___50901 = arguments.length;
var i__49233__auto___50902 = (0);
while(true){
if((i__49233__auto___50902 < len__49232__auto___50901)){
args__49239__auto__.push((arguments[i__49233__auto___50902]));

var G__50903 = (i__49233__auto___50902 + (1));
i__49233__auto___50902 = G__50903;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq50900){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50900));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__49239__auto__ = [];
var len__49232__auto___50905 = arguments.length;
var i__49233__auto___50906 = (0);
while(true){
if((i__49233__auto___50906 < len__49232__auto___50905)){
args__49239__auto__.push((arguments[i__49233__auto___50906]));

var G__50907 = (i__49233__auto___50906 + (1));
i__49233__auto___50906 = G__50907;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq50904){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50904));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__49239__auto__ = [];
var len__49232__auto___50909 = arguments.length;
var i__49233__auto___50910 = (0);
while(true){
if((i__49233__auto___50910 < len__49232__auto___50909)){
args__49239__auto__.push((arguments[i__49233__auto___50910]));

var G__50911 = (i__49233__auto___50910 + (1));
i__49233__auto___50910 = G__50911;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq50908){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50908));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__49239__auto__ = [];
var len__49232__auto___50919 = arguments.length;
var i__49233__auto___50920 = (0);
while(true){
if((i__49233__auto___50920 < len__49232__auto___50919)){
args__49239__auto__.push((arguments[i__49233__auto___50920]));

var G__50921 = (i__49233__auto___50920 + (1));
i__49233__auto___50920 = G__50921;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50915){
var vec__50916 = p__50915;
var state_override = cljs.core.nth.call(null,vec__50916,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__50916,state_override){
return (function (p1__50912_SHARP_){
return cljs.core.merge.call(null,p1__50912_SHARP_,state_override);
});})(vec__50916,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq50913){
var G__50914 = cljs.core.first.call(null,seq50913);
var seq50913__$1 = cljs.core.next.call(null,seq50913);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__50914,seq50913__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__49239__auto__ = [];
var len__49232__auto___50923 = arguments.length;
var i__49233__auto___50924 = (0);
while(true){
if((i__49233__auto___50924 < len__49232__auto___50923)){
args__49239__auto__.push((arguments[i__49233__auto___50924]));

var G__50925 = (i__49233__auto___50924 + (1));
i__49233__auto___50924 = G__50925;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq50922){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50922));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__49239__auto__ = [];
var len__49232__auto___50928 = arguments.length;
var i__49233__auto___50929 = (0);
while(true){
if((i__49233__auto___50929 < len__49232__auto___50928)){
args__49239__auto__.push((arguments[i__49233__auto___50929]));

var G__50930 = (i__49233__auto___50929 + (1));
i__49233__auto___50929 = G__50930;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq50926){
var G__50927 = cljs.core.first.call(null,seq50926);
var seq50926__$1 = cljs.core.next.call(null,seq50926);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__50927,seq50926__$1);
});


//# sourceMappingURL=format.js.map