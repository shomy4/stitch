// Compiled by ClojureScript 1.9.495 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x53616_53617 = value;
x53616_53617.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x53621_53622 = value;
x53621_53622.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x53626_53627 = value;
x53626_53627.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__48107__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__48107__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__48107__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__49239__auto__ = [];
var len__49232__auto___53635 = arguments.length;
var i__49233__auto___53636 = (0);
while(true){
if((i__49233__auto___53636 < len__49232__auto___53635)){
args__49239__auto__.push((arguments[i__49233__auto___53636]));

var G__53637 = (i__49233__auto___53636 + (1));
i__49233__auto___53636 = G__53637;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__53631_53638 = cljs.core.seq.call(null,items);
var chunk__53632_53639 = null;
var count__53633_53640 = (0);
var i__53634_53641 = (0);
while(true){
if((i__53634_53641 < count__53633_53640)){
var item_53642 = cljs.core._nth.call(null,chunk__53632_53639,i__53634_53641);
if(!((item_53642 == null))){
if(cljs.core.coll_QMARK_.call(null,item_53642)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_53642)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_53642));
}
} else {
}

var G__53643 = seq__53631_53638;
var G__53644 = chunk__53632_53639;
var G__53645 = count__53633_53640;
var G__53646 = (i__53634_53641 + (1));
seq__53631_53638 = G__53643;
chunk__53632_53639 = G__53644;
count__53633_53640 = G__53645;
i__53634_53641 = G__53646;
continue;
} else {
var temp__4657__auto___53647 = cljs.core.seq.call(null,seq__53631_53638);
if(temp__4657__auto___53647){
var seq__53631_53648__$1 = temp__4657__auto___53647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53631_53648__$1)){
var c__48938__auto___53649 = cljs.core.chunk_first.call(null,seq__53631_53648__$1);
var G__53650 = cljs.core.chunk_rest.call(null,seq__53631_53648__$1);
var G__53651 = c__48938__auto___53649;
var G__53652 = cljs.core.count.call(null,c__48938__auto___53649);
var G__53653 = (0);
seq__53631_53638 = G__53650;
chunk__53632_53639 = G__53651;
count__53633_53640 = G__53652;
i__53634_53641 = G__53653;
continue;
} else {
var item_53654 = cljs.core.first.call(null,seq__53631_53648__$1);
if(!((item_53654 == null))){
if(cljs.core.coll_QMARK_.call(null,item_53654)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_53654)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_53654));
}
} else {
}

var G__53655 = cljs.core.next.call(null,seq__53631_53648__$1);
var G__53656 = null;
var G__53657 = (0);
var G__53658 = (0);
seq__53631_53638 = G__53655;
chunk__53632_53639 = G__53656;
count__53633_53640 = G__53657;
i__53634_53641 = G__53658;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq53630){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53630));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__49239__auto__ = [];
var len__49232__auto___53666 = arguments.length;
var i__49233__auto___53667 = (0);
while(true){
if((i__49233__auto___53667 < len__49232__auto___53666)){
args__49239__auto__.push((arguments[i__49233__auto___53667]));

var G__53668 = (i__49233__auto___53667 + (1));
i__49233__auto___53667 = G__53668;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((2) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__49240__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__53662_53669 = cljs.core.seq.call(null,children);
var chunk__53663_53670 = null;
var count__53664_53671 = (0);
var i__53665_53672 = (0);
while(true){
if((i__53665_53672 < count__53664_53671)){
var child_53673 = cljs.core._nth.call(null,chunk__53663_53670,i__53665_53672);
if(!((child_53673 == null))){
if(cljs.core.coll_QMARK_.call(null,child_53673)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_53673))));
} else {
var temp__4655__auto___53674 = devtools.formatters.helpers.pref.call(null,child_53673);
if(cljs.core.truth_(temp__4655__auto___53674)){
var child_value_53675 = temp__4655__auto___53674;
template.push(child_value_53675);
} else {
}
}
} else {
}

var G__53676 = seq__53662_53669;
var G__53677 = chunk__53663_53670;
var G__53678 = count__53664_53671;
var G__53679 = (i__53665_53672 + (1));
seq__53662_53669 = G__53676;
chunk__53663_53670 = G__53677;
count__53664_53671 = G__53678;
i__53665_53672 = G__53679;
continue;
} else {
var temp__4657__auto___53680 = cljs.core.seq.call(null,seq__53662_53669);
if(temp__4657__auto___53680){
var seq__53662_53681__$1 = temp__4657__auto___53680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53662_53681__$1)){
var c__48938__auto___53682 = cljs.core.chunk_first.call(null,seq__53662_53681__$1);
var G__53683 = cljs.core.chunk_rest.call(null,seq__53662_53681__$1);
var G__53684 = c__48938__auto___53682;
var G__53685 = cljs.core.count.call(null,c__48938__auto___53682);
var G__53686 = (0);
seq__53662_53669 = G__53683;
chunk__53663_53670 = G__53684;
count__53664_53671 = G__53685;
i__53665_53672 = G__53686;
continue;
} else {
var child_53687 = cljs.core.first.call(null,seq__53662_53681__$1);
if(!((child_53687 == null))){
if(cljs.core.coll_QMARK_.call(null,child_53687)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_53687))));
} else {
var temp__4655__auto___53688 = devtools.formatters.helpers.pref.call(null,child_53687);
if(cljs.core.truth_(temp__4655__auto___53688)){
var child_value_53689 = temp__4655__auto___53688;
template.push(child_value_53689);
} else {
}
}
} else {
}

var G__53690 = cljs.core.next.call(null,seq__53662_53681__$1);
var G__53691 = null;
var G__53692 = (0);
var G__53693 = (0);
seq__53662_53669 = G__53690;
chunk__53663_53670 = G__53691;
count__53664_53671 = G__53692;
i__53665_53672 = G__53693;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq53659){
var G__53660 = cljs.core.first.call(null,seq53659);
var seq53659__$1 = cljs.core.next.call(null,seq53659);
var G__53661 = cljs.core.first.call(null,seq53659__$1);
var seq53659__$2 = cljs.core.next.call(null,seq53659__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__53660,G__53661,seq53659__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__49239__auto__ = [];
var len__49232__auto___53696 = arguments.length;
var i__49233__auto___53697 = (0);
while(true){
if((i__49233__auto___53697 < len__49232__auto___53696)){
args__49239__auto__.push((arguments[i__49233__auto___53697]));

var G__53698 = (i__49233__auto___53697 + (1));
i__49233__auto___53697 = G__53698;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq53694){
var G__53695 = cljs.core.first.call(null,seq53694);
var seq53694__$1 = cljs.core.next.call(null,seq53694);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53695,seq53694__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__49239__auto__ = [];
var len__49232__auto___53701 = arguments.length;
var i__49233__auto___53702 = (0);
while(true){
if((i__49233__auto___53702 < len__49232__auto___53701)){
args__49239__auto__.push((arguments[i__49233__auto___53702]));

var G__53703 = (i__49233__auto___53702 + (1));
i__49233__auto___53702 = G__53703;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq53699){
var G__53700 = cljs.core.first.call(null,seq53699);
var seq53699__$1 = cljs.core.next.call(null,seq53699);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53700,seq53699__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args53704 = [];
var len__49232__auto___53709 = arguments.length;
var i__49233__auto___53710 = (0);
while(true){
if((i__49233__auto___53710 < len__49232__auto___53709)){
args53704.push((arguments[i__49233__auto___53710]));

var G__53711 = (i__49233__auto___53710 + (1));
i__49233__auto___53710 = G__53711;
continue;
} else {
}
break;
}

var G__53706 = args53704.length;
switch (G__53706) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53704.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj53708 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__48119__auto__ = start_index;
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
return (0);
}
})()};
return obj53708;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__49239__auto__ = [];
var len__49232__auto___53719 = arguments.length;
var i__49233__auto___53720 = (0);
while(true){
if((i__49233__auto___53720 < len__49232__auto___53719)){
args__49239__auto__.push((arguments[i__49233__auto___53720]));

var G__53721 = (i__49233__auto___53720 + (1));
i__49233__auto___53720 = G__53721;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__53715){
var vec__53716 = p__53715;
var state_override_fn = cljs.core.nth.call(null,vec__53716,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq53713){
var G__53714 = cljs.core.first.call(null,seq53713);
var seq53713__$1 = cljs.core.next.call(null,seq53713);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__53714,seq53713__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__49113__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_53725_53728 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_53726_53729 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_53725_53728,_STAR_print_fn_STAR_53726_53729,sb__49113__auto__){
return (function (x__49114__auto__){
return sb__49113__auto__.append(x__49114__auto__);
});})(_STAR_print_newline_STAR_53725_53728,_STAR_print_fn_STAR_53726_53729,sb__49113__auto__))
;

try{var _STAR_print_level_STAR_53727_53730 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_53727_53730;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53726_53729;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_53725_53728;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__49113__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_53732 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_53732;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__53734 = name;
switch (G__53734) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__53739 = tag;
var html_tag = cljs.core.nth.call(null,vec__53739,(0),null);
var style = cljs.core.nth.call(null,vec__53739,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_53743 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_53743;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_53746 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_53747 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_53747;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_53746;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__53748 = initial_value;
var G__53749 = value.call(null);
initial_value = G__53748;
value = G__53749;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__53750 = initial_value;
var G__53751 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__53750;
value = G__53751;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__53752 = initial_value;
var G__53753 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__53752;
value = G__53753;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map