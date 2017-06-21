// Compiled by ClojureScript 1.9.495 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__50851__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__50851__auto__,"add").call(o__50851__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__50851__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__50851__auto__,"delete").call(o__50851__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__50851__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__50851__auto__,"has").call(o__50851__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = goog.object.get(data,"config");
var G__53979 = data;
var target__50870__auto__ = G__53979;
if(cljs.core.truth_(target__50870__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("unable to locate object path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53979)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("target__50870__auto__")].join('')));
}

goog.object.set(target__50870__auto__,cljs.core.last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config"], null)),devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__53979;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_53988 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_53988);
} else {
var seq__53984_53989 = cljs.core.seq.call(null,json_ml);
var chunk__53985_53990 = null;
var count__53986_53991 = (0);
var i__53987_53992 = (0);
while(true){
if((i__53987_53992 < count__53986_53991)){
var item_53993 = cljs.core._nth.call(null,chunk__53985_53990,i__53987_53992);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_53993,new_depth_budget_53988);

var G__53994 = seq__53984_53989;
var G__53995 = chunk__53985_53990;
var G__53996 = count__53986_53991;
var G__53997 = (i__53987_53992 + (1));
seq__53984_53989 = G__53994;
chunk__53985_53990 = G__53995;
count__53986_53991 = G__53996;
i__53987_53992 = G__53997;
continue;
} else {
var temp__4657__auto___53998 = cljs.core.seq.call(null,seq__53984_53989);
if(temp__4657__auto___53998){
var seq__53984_53999__$1 = temp__4657__auto___53998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53984_53999__$1)){
var c__48938__auto___54000 = cljs.core.chunk_first.call(null,seq__53984_53999__$1);
var G__54001 = cljs.core.chunk_rest.call(null,seq__53984_53999__$1);
var G__54002 = c__48938__auto___54000;
var G__54003 = cljs.core.count.call(null,c__48938__auto___54000);
var G__54004 = (0);
seq__53984_53989 = G__54001;
chunk__53985_53990 = G__54002;
count__53986_53991 = G__54003;
i__53987_53992 = G__54004;
continue;
} else {
var item_54005 = cljs.core.first.call(null,seq__53984_53999__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_54005,new_depth_budget_53988);

var G__54006 = cljs.core.next.call(null,seq__53984_53999__$1);
var G__54007 = null;
var G__54008 = (0);
var G__54009 = (0);
seq__53984_53989 = G__54006;
chunk__53985_53990 = G__54007;
count__53986_53991 = G__54008;
i__53987_53992 = G__54009;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__4655__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__4655__auto__)){
var initial_hierarchy_depth_budget = temp__4655__auto__;
var remaining_depth_budget = (function (){var or__48119__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map