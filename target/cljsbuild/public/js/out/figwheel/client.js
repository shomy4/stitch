// Compiled by ClojureScript 1.9.495 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args64016 = [];
var len__49232__auto___64019 = arguments.length;
var i__49233__auto___64020 = (0);
while(true){
if((i__49233__auto___64020 < len__49232__auto___64019)){
args64016.push((arguments[i__49233__auto___64020]));

var G__64021 = (i__49233__auto___64020 + (1));
i__49233__auto___64020 = G__64021;
continue;
} else {
}
break;
}

var G__64018 = args64016.length;
switch (G__64018) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64016.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__49239__auto__ = [];
var len__49232__auto___64024 = arguments.length;
var i__49233__auto___64025 = (0);
while(true){
if((i__49233__auto___64025 < len__49232__auto___64024)){
args__49239__auto__.push((arguments[i__49233__auto___64025]));

var G__64026 = (i__49233__auto___64025 + (1));
i__49233__auto___64025 = G__64026;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq64023){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64023));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__49239__auto__ = [];
var len__49232__auto___64028 = arguments.length;
var i__49233__auto___64029 = (0);
while(true){
if((i__49233__auto___64029 < len__49232__auto___64028)){
args__49239__auto__.push((arguments[i__49233__auto___64029]));

var G__64030 = (i__49233__auto___64029 + (1));
i__49233__auto___64029 = G__64030;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq64027){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64027));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__64031){
var map__64034 = p__64031;
var map__64034__$1 = ((((!((map__64034 == null)))?((((map__64034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64034):map__64034);
var message = cljs.core.get.call(null,map__64034__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__64034__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__48119__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__48107__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__48107__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__48107__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__58146__auto___64196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___64196,ch){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___64196,ch){
return (function (state_64165){
var state_val_64166 = (state_64165[(1)]);
if((state_val_64166 === (7))){
var inst_64161 = (state_64165[(2)]);
var state_64165__$1 = state_64165;
var statearr_64167_64197 = state_64165__$1;
(statearr_64167_64197[(2)] = inst_64161);

(statearr_64167_64197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (1))){
var state_64165__$1 = state_64165;
var statearr_64168_64198 = state_64165__$1;
(statearr_64168_64198[(2)] = null);

(statearr_64168_64198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (4))){
var inst_64118 = (state_64165[(7)]);
var inst_64118__$1 = (state_64165[(2)]);
var state_64165__$1 = (function (){var statearr_64169 = state_64165;
(statearr_64169[(7)] = inst_64118__$1);

return statearr_64169;
})();
if(cljs.core.truth_(inst_64118__$1)){
var statearr_64170_64199 = state_64165__$1;
(statearr_64170_64199[(1)] = (5));

} else {
var statearr_64171_64200 = state_64165__$1;
(statearr_64171_64200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (15))){
var inst_64125 = (state_64165[(8)]);
var inst_64140 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_64125);
var inst_64141 = cljs.core.first.call(null,inst_64140);
var inst_64142 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_64141);
var inst_64143 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_64142)].join('');
var inst_64144 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_64143);
var state_64165__$1 = state_64165;
var statearr_64172_64201 = state_64165__$1;
(statearr_64172_64201[(2)] = inst_64144);

(statearr_64172_64201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (13))){
var inst_64149 = (state_64165[(2)]);
var state_64165__$1 = state_64165;
var statearr_64173_64202 = state_64165__$1;
(statearr_64173_64202[(2)] = inst_64149);

(statearr_64173_64202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (6))){
var state_64165__$1 = state_64165;
var statearr_64174_64203 = state_64165__$1;
(statearr_64174_64203[(2)] = null);

(statearr_64174_64203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (17))){
var inst_64147 = (state_64165[(2)]);
var state_64165__$1 = state_64165;
var statearr_64175_64204 = state_64165__$1;
(statearr_64175_64204[(2)] = inst_64147);

(statearr_64175_64204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (3))){
var inst_64163 = (state_64165[(2)]);
var state_64165__$1 = state_64165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64165__$1,inst_64163);
} else {
if((state_val_64166 === (12))){
var inst_64124 = (state_64165[(9)]);
var inst_64138 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_64124,opts);
var state_64165__$1 = state_64165;
if(cljs.core.truth_(inst_64138)){
var statearr_64176_64205 = state_64165__$1;
(statearr_64176_64205[(1)] = (15));

} else {
var statearr_64177_64206 = state_64165__$1;
(statearr_64177_64206[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (2))){
var state_64165__$1 = state_64165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64165__$1,(4),ch);
} else {
if((state_val_64166 === (11))){
var inst_64125 = (state_64165[(8)]);
var inst_64130 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64131 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_64125);
var inst_64132 = cljs.core.async.timeout.call(null,(1000));
var inst_64133 = [inst_64131,inst_64132];
var inst_64134 = (new cljs.core.PersistentVector(null,2,(5),inst_64130,inst_64133,null));
var state_64165__$1 = state_64165;
return cljs.core.async.ioc_alts_BANG_.call(null,state_64165__$1,(14),inst_64134);
} else {
if((state_val_64166 === (9))){
var inst_64125 = (state_64165[(8)]);
var inst_64151 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_64152 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_64125);
var inst_64153 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_64152);
var inst_64154 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_64153)].join('');
var inst_64155 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_64154);
var state_64165__$1 = (function (){var statearr_64178 = state_64165;
(statearr_64178[(10)] = inst_64151);

return statearr_64178;
})();
var statearr_64179_64207 = state_64165__$1;
(statearr_64179_64207[(2)] = inst_64155);

(statearr_64179_64207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (5))){
var inst_64118 = (state_64165[(7)]);
var inst_64120 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_64121 = (new cljs.core.PersistentArrayMap(null,2,inst_64120,null));
var inst_64122 = (new cljs.core.PersistentHashSet(null,inst_64121,null));
var inst_64123 = figwheel.client.focus_msgs.call(null,inst_64122,inst_64118);
var inst_64124 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_64123);
var inst_64125 = cljs.core.first.call(null,inst_64123);
var inst_64126 = figwheel.client.autoload_QMARK_.call(null);
var state_64165__$1 = (function (){var statearr_64180 = state_64165;
(statearr_64180[(8)] = inst_64125);

(statearr_64180[(9)] = inst_64124);

return statearr_64180;
})();
if(cljs.core.truth_(inst_64126)){
var statearr_64181_64208 = state_64165__$1;
(statearr_64181_64208[(1)] = (8));

} else {
var statearr_64182_64209 = state_64165__$1;
(statearr_64182_64209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (14))){
var inst_64136 = (state_64165[(2)]);
var state_64165__$1 = state_64165;
var statearr_64183_64210 = state_64165__$1;
(statearr_64183_64210[(2)] = inst_64136);

(statearr_64183_64210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (16))){
var state_64165__$1 = state_64165;
var statearr_64184_64211 = state_64165__$1;
(statearr_64184_64211[(2)] = null);

(statearr_64184_64211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (10))){
var inst_64157 = (state_64165[(2)]);
var state_64165__$1 = (function (){var statearr_64185 = state_64165;
(statearr_64185[(11)] = inst_64157);

return statearr_64185;
})();
var statearr_64186_64212 = state_64165__$1;
(statearr_64186_64212[(2)] = null);

(statearr_64186_64212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64166 === (8))){
var inst_64124 = (state_64165[(9)]);
var inst_64128 = figwheel.client.reload_file_state_QMARK_.call(null,inst_64124,opts);
var state_64165__$1 = state_64165;
if(cljs.core.truth_(inst_64128)){
var statearr_64187_64213 = state_64165__$1;
(statearr_64187_64213[(1)] = (11));

} else {
var statearr_64188_64214 = state_64165__$1;
(statearr_64188_64214[(1)] = (12));

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
});})(c__58146__auto___64196,ch))
;
return ((function (switch__58034__auto__,c__58146__auto___64196,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__58035__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__58035__auto____0 = (function (){
var statearr_64192 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64192[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__58035__auto__);

(statearr_64192[(1)] = (1));

return statearr_64192;
});
var figwheel$client$file_reloader_plugin_$_state_machine__58035__auto____1 = (function (state_64165){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_64165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e64193){if((e64193 instanceof Object)){
var ex__58038__auto__ = e64193;
var statearr_64194_64215 = state_64165;
(statearr_64194_64215[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64216 = state_64165;
state_64165 = G__64216;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__58035__auto__ = function(state_64165){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__58035__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__58035__auto____1.call(this,state_64165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__58035__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__58035__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___64196,ch))
})();
var state__58148__auto__ = (function (){var statearr_64195 = f__58147__auto__.call(null);
(statearr_64195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___64196);

return statearr_64195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___64196,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__64217_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__64217_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_64220 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_64220){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e64219){if((e64219 instanceof Error)){
var e = e64219;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_64220], null));
} else {
var e = e64219;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_64220))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__64221){
var map__64230 = p__64221;
var map__64230__$1 = ((((!((map__64230 == null)))?((((map__64230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64230):map__64230);
var opts = map__64230__$1;
var build_id = cljs.core.get.call(null,map__64230__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__64230,map__64230__$1,opts,build_id){
return (function (p__64232){
var vec__64233 = p__64232;
var seq__64234 = cljs.core.seq.call(null,vec__64233);
var first__64235 = cljs.core.first.call(null,seq__64234);
var seq__64234__$1 = cljs.core.next.call(null,seq__64234);
var map__64236 = first__64235;
var map__64236__$1 = ((((!((map__64236 == null)))?((((map__64236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64236):map__64236);
var msg = map__64236__$1;
var msg_name = cljs.core.get.call(null,map__64236__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__64234__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__64233,seq__64234,first__64235,seq__64234__$1,map__64236,map__64236__$1,msg,msg_name,_,map__64230,map__64230__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__64233,seq__64234,first__64235,seq__64234__$1,map__64236,map__64236__$1,msg,msg_name,_,map__64230,map__64230__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__64230,map__64230__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__64244){
var vec__64245 = p__64244;
var seq__64246 = cljs.core.seq.call(null,vec__64245);
var first__64247 = cljs.core.first.call(null,seq__64246);
var seq__64246__$1 = cljs.core.next.call(null,seq__64246);
var map__64248 = first__64247;
var map__64248__$1 = ((((!((map__64248 == null)))?((((map__64248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64248):map__64248);
var msg = map__64248__$1;
var msg_name = cljs.core.get.call(null,map__64248__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__64246__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__64250){
var map__64262 = p__64250;
var map__64262__$1 = ((((!((map__64262 == null)))?((((map__64262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64262):map__64262);
var on_compile_warning = cljs.core.get.call(null,map__64262__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__64262__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__64262,map__64262__$1,on_compile_warning,on_compile_fail){
return (function (p__64264){
var vec__64265 = p__64264;
var seq__64266 = cljs.core.seq.call(null,vec__64265);
var first__64267 = cljs.core.first.call(null,seq__64266);
var seq__64266__$1 = cljs.core.next.call(null,seq__64266);
var map__64268 = first__64267;
var map__64268__$1 = ((((!((map__64268 == null)))?((((map__64268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64268):map__64268);
var msg = map__64268__$1;
var msg_name = cljs.core.get.call(null,map__64268__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__64266__$1;
var pred__64270 = cljs.core._EQ_;
var expr__64271 = msg_name;
if(cljs.core.truth_(pred__64270.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__64271))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__64270.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__64271))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__64262,map__64262__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__58146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto__,msg_hist,msg_names,msg){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto__,msg_hist,msg_names,msg){
return (function (state_64499){
var state_val_64500 = (state_64499[(1)]);
if((state_val_64500 === (7))){
var inst_64419 = (state_64499[(2)]);
var state_64499__$1 = state_64499;
if(cljs.core.truth_(inst_64419)){
var statearr_64501_64551 = state_64499__$1;
(statearr_64501_64551[(1)] = (8));

} else {
var statearr_64502_64552 = state_64499__$1;
(statearr_64502_64552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (20))){
var inst_64493 = (state_64499[(2)]);
var state_64499__$1 = state_64499;
var statearr_64503_64553 = state_64499__$1;
(statearr_64503_64553[(2)] = inst_64493);

(statearr_64503_64553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (27))){
var inst_64489 = (state_64499[(2)]);
var state_64499__$1 = state_64499;
var statearr_64504_64554 = state_64499__$1;
(statearr_64504_64554[(2)] = inst_64489);

(statearr_64504_64554[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (1))){
var inst_64412 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_64499__$1 = state_64499;
if(cljs.core.truth_(inst_64412)){
var statearr_64505_64555 = state_64499__$1;
(statearr_64505_64555[(1)] = (2));

} else {
var statearr_64506_64556 = state_64499__$1;
(statearr_64506_64556[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (24))){
var inst_64491 = (state_64499[(2)]);
var state_64499__$1 = state_64499;
var statearr_64507_64557 = state_64499__$1;
(statearr_64507_64557[(2)] = inst_64491);

(statearr_64507_64557[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (4))){
var inst_64497 = (state_64499[(2)]);
var state_64499__$1 = state_64499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64499__$1,inst_64497);
} else {
if((state_val_64500 === (15))){
var inst_64495 = (state_64499[(2)]);
var state_64499__$1 = state_64499;
var statearr_64508_64558 = state_64499__$1;
(statearr_64508_64558[(2)] = inst_64495);

(statearr_64508_64558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (21))){
var inst_64448 = (state_64499[(2)]);
var inst_64449 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64450 = figwheel.client.auto_jump_to_error.call(null,opts,inst_64449);
var state_64499__$1 = (function (){var statearr_64509 = state_64499;
(statearr_64509[(7)] = inst_64448);

return statearr_64509;
})();
var statearr_64510_64559 = state_64499__$1;
(statearr_64510_64559[(2)] = inst_64450);

(statearr_64510_64559[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (31))){
var inst_64478 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_64499__$1 = state_64499;
if(cljs.core.truth_(inst_64478)){
var statearr_64511_64560 = state_64499__$1;
(statearr_64511_64560[(1)] = (34));

} else {
var statearr_64512_64561 = state_64499__$1;
(statearr_64512_64561[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (32))){
var inst_64487 = (state_64499[(2)]);
var state_64499__$1 = state_64499;
var statearr_64513_64562 = state_64499__$1;
(statearr_64513_64562[(2)] = inst_64487);

(statearr_64513_64562[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (33))){
var inst_64474 = (state_64499[(2)]);
var inst_64475 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64476 = figwheel.client.auto_jump_to_error.call(null,opts,inst_64475);
var state_64499__$1 = (function (){var statearr_64514 = state_64499;
(statearr_64514[(8)] = inst_64474);

return statearr_64514;
})();
var statearr_64515_64563 = state_64499__$1;
(statearr_64515_64563[(2)] = inst_64476);

(statearr_64515_64563[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (13))){
var inst_64433 = figwheel.client.heads_up.clear.call(null);
var state_64499__$1 = state_64499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64499__$1,(16),inst_64433);
} else {
if((state_val_64500 === (22))){
var inst_64454 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64455 = figwheel.client.heads_up.append_warning_message.call(null,inst_64454);
var state_64499__$1 = state_64499;
var statearr_64516_64564 = state_64499__$1;
(statearr_64516_64564[(2)] = inst_64455);

(statearr_64516_64564[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (36))){
var inst_64485 = (state_64499[(2)]);
var state_64499__$1 = state_64499;
var statearr_64517_64565 = state_64499__$1;
(statearr_64517_64565[(2)] = inst_64485);

(statearr_64517_64565[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (29))){
var inst_64465 = (state_64499[(2)]);
var inst_64466 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64467 = figwheel.client.auto_jump_to_error.call(null,opts,inst_64466);
var state_64499__$1 = (function (){var statearr_64518 = state_64499;
(statearr_64518[(9)] = inst_64465);

return statearr_64518;
})();
var statearr_64519_64566 = state_64499__$1;
(statearr_64519_64566[(2)] = inst_64467);

(statearr_64519_64566[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (6))){
var inst_64414 = (state_64499[(10)]);
var state_64499__$1 = state_64499;
var statearr_64520_64567 = state_64499__$1;
(statearr_64520_64567[(2)] = inst_64414);

(statearr_64520_64567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (28))){
var inst_64461 = (state_64499[(2)]);
var inst_64462 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64463 = figwheel.client.heads_up.display_warning.call(null,inst_64462);
var state_64499__$1 = (function (){var statearr_64521 = state_64499;
(statearr_64521[(11)] = inst_64461);

return statearr_64521;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64499__$1,(29),inst_64463);
} else {
if((state_val_64500 === (25))){
var inst_64459 = figwheel.client.heads_up.clear.call(null);
var state_64499__$1 = state_64499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64499__$1,(28),inst_64459);
} else {
if((state_val_64500 === (34))){
var inst_64480 = figwheel.client.heads_up.flash_loaded.call(null);
var state_64499__$1 = state_64499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64499__$1,(37),inst_64480);
} else {
if((state_val_64500 === (17))){
var inst_64439 = (state_64499[(2)]);
var inst_64440 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64441 = figwheel.client.auto_jump_to_error.call(null,opts,inst_64440);
var state_64499__$1 = (function (){var statearr_64522 = state_64499;
(statearr_64522[(12)] = inst_64439);

return statearr_64522;
})();
var statearr_64523_64568 = state_64499__$1;
(statearr_64523_64568[(2)] = inst_64441);

(statearr_64523_64568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (3))){
var inst_64431 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_64499__$1 = state_64499;
if(cljs.core.truth_(inst_64431)){
var statearr_64524_64569 = state_64499__$1;
(statearr_64524_64569[(1)] = (13));

} else {
var statearr_64525_64570 = state_64499__$1;
(statearr_64525_64570[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (12))){
var inst_64427 = (state_64499[(2)]);
var state_64499__$1 = state_64499;
var statearr_64526_64571 = state_64499__$1;
(statearr_64526_64571[(2)] = inst_64427);

(statearr_64526_64571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (2))){
var inst_64414 = (state_64499[(10)]);
var inst_64414__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_64499__$1 = (function (){var statearr_64527 = state_64499;
(statearr_64527[(10)] = inst_64414__$1);

return statearr_64527;
})();
if(cljs.core.truth_(inst_64414__$1)){
var statearr_64528_64572 = state_64499__$1;
(statearr_64528_64572[(1)] = (5));

} else {
var statearr_64529_64573 = state_64499__$1;
(statearr_64529_64573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (23))){
var inst_64457 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_64499__$1 = state_64499;
if(cljs.core.truth_(inst_64457)){
var statearr_64530_64574 = state_64499__$1;
(statearr_64530_64574[(1)] = (25));

} else {
var statearr_64531_64575 = state_64499__$1;
(statearr_64531_64575[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (35))){
var state_64499__$1 = state_64499;
var statearr_64532_64576 = state_64499__$1;
(statearr_64532_64576[(2)] = null);

(statearr_64532_64576[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (19))){
var inst_64452 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_64499__$1 = state_64499;
if(cljs.core.truth_(inst_64452)){
var statearr_64533_64577 = state_64499__$1;
(statearr_64533_64577[(1)] = (22));

} else {
var statearr_64534_64578 = state_64499__$1;
(statearr_64534_64578[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (11))){
var inst_64423 = (state_64499[(2)]);
var state_64499__$1 = state_64499;
var statearr_64535_64579 = state_64499__$1;
(statearr_64535_64579[(2)] = inst_64423);

(statearr_64535_64579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (9))){
var inst_64425 = figwheel.client.heads_up.clear.call(null);
var state_64499__$1 = state_64499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64499__$1,(12),inst_64425);
} else {
if((state_val_64500 === (5))){
var inst_64416 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_64499__$1 = state_64499;
var statearr_64536_64580 = state_64499__$1;
(statearr_64536_64580[(2)] = inst_64416);

(statearr_64536_64580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (14))){
var inst_64443 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_64499__$1 = state_64499;
if(cljs.core.truth_(inst_64443)){
var statearr_64537_64581 = state_64499__$1;
(statearr_64537_64581[(1)] = (18));

} else {
var statearr_64538_64582 = state_64499__$1;
(statearr_64538_64582[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (26))){
var inst_64469 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_64499__$1 = state_64499;
if(cljs.core.truth_(inst_64469)){
var statearr_64539_64583 = state_64499__$1;
(statearr_64539_64583[(1)] = (30));

} else {
var statearr_64540_64584 = state_64499__$1;
(statearr_64540_64584[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (16))){
var inst_64435 = (state_64499[(2)]);
var inst_64436 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64437 = figwheel.client.heads_up.display_exception.call(null,inst_64436);
var state_64499__$1 = (function (){var statearr_64541 = state_64499;
(statearr_64541[(13)] = inst_64435);

return statearr_64541;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64499__$1,(17),inst_64437);
} else {
if((state_val_64500 === (30))){
var inst_64471 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64472 = figwheel.client.heads_up.display_warning.call(null,inst_64471);
var state_64499__$1 = state_64499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64499__$1,(33),inst_64472);
} else {
if((state_val_64500 === (10))){
var inst_64429 = (state_64499[(2)]);
var state_64499__$1 = state_64499;
var statearr_64542_64585 = state_64499__$1;
(statearr_64542_64585[(2)] = inst_64429);

(statearr_64542_64585[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (18))){
var inst_64445 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64446 = figwheel.client.heads_up.display_exception.call(null,inst_64445);
var state_64499__$1 = state_64499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64499__$1,(21),inst_64446);
} else {
if((state_val_64500 === (37))){
var inst_64482 = (state_64499[(2)]);
var state_64499__$1 = state_64499;
var statearr_64543_64586 = state_64499__$1;
(statearr_64543_64586[(2)] = inst_64482);

(statearr_64543_64586[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64500 === (8))){
var inst_64421 = figwheel.client.heads_up.flash_loaded.call(null);
var state_64499__$1 = state_64499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64499__$1,(11),inst_64421);
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
});})(c__58146__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__58034__auto__,c__58146__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58035__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58035__auto____0 = (function (){
var statearr_64547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64547[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58035__auto__);

(statearr_64547[(1)] = (1));

return statearr_64547;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58035__auto____1 = (function (state_64499){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_64499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e64548){if((e64548 instanceof Object)){
var ex__58038__auto__ = e64548;
var statearr_64549_64587 = state_64499;
(statearr_64549_64587[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64588 = state_64499;
state_64499 = G__64588;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58035__auto__ = function(state_64499){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58035__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58035__auto____1.call(this,state_64499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58035__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58035__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto__,msg_hist,msg_names,msg))
})();
var state__58148__auto__ = (function (){var statearr_64550 = f__58147__auto__.call(null);
(statearr_64550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto__);

return statearr_64550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto__,msg_hist,msg_names,msg))
);

return c__58146__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__58146__auto___64651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___64651,ch){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___64651,ch){
return (function (state_64634){
var state_val_64635 = (state_64634[(1)]);
if((state_val_64635 === (1))){
var state_64634__$1 = state_64634;
var statearr_64636_64652 = state_64634__$1;
(statearr_64636_64652[(2)] = null);

(statearr_64636_64652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64635 === (2))){
var state_64634__$1 = state_64634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64634__$1,(4),ch);
} else {
if((state_val_64635 === (3))){
var inst_64632 = (state_64634[(2)]);
var state_64634__$1 = state_64634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64634__$1,inst_64632);
} else {
if((state_val_64635 === (4))){
var inst_64622 = (state_64634[(7)]);
var inst_64622__$1 = (state_64634[(2)]);
var state_64634__$1 = (function (){var statearr_64637 = state_64634;
(statearr_64637[(7)] = inst_64622__$1);

return statearr_64637;
})();
if(cljs.core.truth_(inst_64622__$1)){
var statearr_64638_64653 = state_64634__$1;
(statearr_64638_64653[(1)] = (5));

} else {
var statearr_64639_64654 = state_64634__$1;
(statearr_64639_64654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64635 === (5))){
var inst_64622 = (state_64634[(7)]);
var inst_64624 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_64622);
var state_64634__$1 = state_64634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64634__$1,(8),inst_64624);
} else {
if((state_val_64635 === (6))){
var state_64634__$1 = state_64634;
var statearr_64640_64655 = state_64634__$1;
(statearr_64640_64655[(2)] = null);

(statearr_64640_64655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64635 === (7))){
var inst_64630 = (state_64634[(2)]);
var state_64634__$1 = state_64634;
var statearr_64641_64656 = state_64634__$1;
(statearr_64641_64656[(2)] = inst_64630);

(statearr_64641_64656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64635 === (8))){
var inst_64626 = (state_64634[(2)]);
var state_64634__$1 = (function (){var statearr_64642 = state_64634;
(statearr_64642[(8)] = inst_64626);

return statearr_64642;
})();
var statearr_64643_64657 = state_64634__$1;
(statearr_64643_64657[(2)] = null);

(statearr_64643_64657[(1)] = (2));


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
});})(c__58146__auto___64651,ch))
;
return ((function (switch__58034__auto__,c__58146__auto___64651,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__58035__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__58035__auto____0 = (function (){
var statearr_64647 = [null,null,null,null,null,null,null,null,null];
(statearr_64647[(0)] = figwheel$client$heads_up_plugin_$_state_machine__58035__auto__);

(statearr_64647[(1)] = (1));

return statearr_64647;
});
var figwheel$client$heads_up_plugin_$_state_machine__58035__auto____1 = (function (state_64634){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_64634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e64648){if((e64648 instanceof Object)){
var ex__58038__auto__ = e64648;
var statearr_64649_64658 = state_64634;
(statearr_64649_64658[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64659 = state_64634;
state_64634 = G__64659;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__58035__auto__ = function(state_64634){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__58035__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__58035__auto____1.call(this,state_64634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__58035__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__58035__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___64651,ch))
})();
var state__58148__auto__ = (function (){var statearr_64650 = f__58147__auto__.call(null);
(statearr_64650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___64651);

return statearr_64650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___64651,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__58146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto__){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto__){
return (function (state_64680){
var state_val_64681 = (state_64680[(1)]);
if((state_val_64681 === (1))){
var inst_64675 = cljs.core.async.timeout.call(null,(3000));
var state_64680__$1 = state_64680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64680__$1,(2),inst_64675);
} else {
if((state_val_64681 === (2))){
var inst_64677 = (state_64680[(2)]);
var inst_64678 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_64680__$1 = (function (){var statearr_64682 = state_64680;
(statearr_64682[(7)] = inst_64677);

return statearr_64682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64680__$1,inst_64678);
} else {
return null;
}
}
});})(c__58146__auto__))
;
return ((function (switch__58034__auto__,c__58146__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__58035__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__58035__auto____0 = (function (){
var statearr_64686 = [null,null,null,null,null,null,null,null];
(statearr_64686[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__58035__auto__);

(statearr_64686[(1)] = (1));

return statearr_64686;
});
var figwheel$client$enforce_project_plugin_$_state_machine__58035__auto____1 = (function (state_64680){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_64680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e64687){if((e64687 instanceof Object)){
var ex__58038__auto__ = e64687;
var statearr_64688_64690 = state_64680;
(statearr_64688_64690[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64691 = state_64680;
state_64680 = G__64691;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__58035__auto__ = function(state_64680){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__58035__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__58035__auto____1.call(this,state_64680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__58035__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__58035__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto__))
})();
var state__58148__auto__ = (function (){var statearr_64689 = f__58147__auto__.call(null);
(statearr_64689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto__);

return statearr_64689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto__))
);

return c__58146__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__58146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto__,figwheel_version,temp__4657__auto__){
return (function (state_64714){
var state_val_64715 = (state_64714[(1)]);
if((state_val_64715 === (1))){
var inst_64708 = cljs.core.async.timeout.call(null,(2000));
var state_64714__$1 = state_64714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64714__$1,(2),inst_64708);
} else {
if((state_val_64715 === (2))){
var inst_64710 = (state_64714[(2)]);
var inst_64711 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_64712 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_64711);
var state_64714__$1 = (function (){var statearr_64716 = state_64714;
(statearr_64716[(7)] = inst_64710);

return statearr_64716;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64714__$1,inst_64712);
} else {
return null;
}
}
});})(c__58146__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__58034__auto__,c__58146__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58035__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58035__auto____0 = (function (){
var statearr_64720 = [null,null,null,null,null,null,null,null];
(statearr_64720[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58035__auto__);

(statearr_64720[(1)] = (1));

return statearr_64720;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58035__auto____1 = (function (state_64714){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_64714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e64721){if((e64721 instanceof Object)){
var ex__58038__auto__ = e64721;
var statearr_64722_64724 = state_64714;
(statearr_64722_64724[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64725 = state_64714;
state_64714 = G__64725;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58035__auto__ = function(state_64714){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58035__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58035__auto____1.call(this,state_64714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58035__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58035__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto__,figwheel_version,temp__4657__auto__))
})();
var state__58148__auto__ = (function (){var statearr_64723 = f__58147__auto__.call(null);
(statearr_64723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto__);

return statearr_64723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto__,figwheel_version,temp__4657__auto__))
);

return c__58146__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__64726){
var map__64730 = p__64726;
var map__64730__$1 = ((((!((map__64730 == null)))?((((map__64730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64730):map__64730);
var file = cljs.core.get.call(null,map__64730__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__64730__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__64730__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__64732 = "";
var G__64732__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64732),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__64732);
var G__64732__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64732__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__64732__$1);
if(cljs.core.truth_((function (){var and__48107__auto__ = line;
if(cljs.core.truth_(and__48107__auto__)){
return column;
} else {
return and__48107__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64732__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__64732__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__64733){
var map__64740 = p__64733;
var map__64740__$1 = ((((!((map__64740 == null)))?((((map__64740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64740):map__64740);
var ed = map__64740__$1;
var formatted_exception = cljs.core.get.call(null,map__64740__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__64740__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__64740__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__64742_64746 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__64743_64747 = null;
var count__64744_64748 = (0);
var i__64745_64749 = (0);
while(true){
if((i__64745_64749 < count__64744_64748)){
var msg_64750 = cljs.core._nth.call(null,chunk__64743_64747,i__64745_64749);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_64750);

var G__64751 = seq__64742_64746;
var G__64752 = chunk__64743_64747;
var G__64753 = count__64744_64748;
var G__64754 = (i__64745_64749 + (1));
seq__64742_64746 = G__64751;
chunk__64743_64747 = G__64752;
count__64744_64748 = G__64753;
i__64745_64749 = G__64754;
continue;
} else {
var temp__4657__auto___64755 = cljs.core.seq.call(null,seq__64742_64746);
if(temp__4657__auto___64755){
var seq__64742_64756__$1 = temp__4657__auto___64755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64742_64756__$1)){
var c__48938__auto___64757 = cljs.core.chunk_first.call(null,seq__64742_64756__$1);
var G__64758 = cljs.core.chunk_rest.call(null,seq__64742_64756__$1);
var G__64759 = c__48938__auto___64757;
var G__64760 = cljs.core.count.call(null,c__48938__auto___64757);
var G__64761 = (0);
seq__64742_64746 = G__64758;
chunk__64743_64747 = G__64759;
count__64744_64748 = G__64760;
i__64745_64749 = G__64761;
continue;
} else {
var msg_64762 = cljs.core.first.call(null,seq__64742_64756__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_64762);

var G__64763 = cljs.core.next.call(null,seq__64742_64756__$1);
var G__64764 = null;
var G__64765 = (0);
var G__64766 = (0);
seq__64742_64746 = G__64763;
chunk__64743_64747 = G__64764;
count__64744_64748 = G__64765;
i__64745_64749 = G__64766;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__64767){
var map__64770 = p__64767;
var map__64770__$1 = ((((!((map__64770 == null)))?((((map__64770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64770):map__64770);
var w = map__64770__$1;
var message = cljs.core.get.call(null,map__64770__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__48107__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__48107__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__48107__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__64782 = cljs.core.seq.call(null,plugins);
var chunk__64783 = null;
var count__64784 = (0);
var i__64785 = (0);
while(true){
if((i__64785 < count__64784)){
var vec__64786 = cljs.core._nth.call(null,chunk__64783,i__64785);
var k = cljs.core.nth.call(null,vec__64786,(0),null);
var plugin = cljs.core.nth.call(null,vec__64786,(1),null);
if(cljs.core.truth_(plugin)){
var pl_64792 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__64782,chunk__64783,count__64784,i__64785,pl_64792,vec__64786,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_64792.call(null,msg_hist);
});})(seq__64782,chunk__64783,count__64784,i__64785,pl_64792,vec__64786,k,plugin))
);
} else {
}

var G__64793 = seq__64782;
var G__64794 = chunk__64783;
var G__64795 = count__64784;
var G__64796 = (i__64785 + (1));
seq__64782 = G__64793;
chunk__64783 = G__64794;
count__64784 = G__64795;
i__64785 = G__64796;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__64782);
if(temp__4657__auto__){
var seq__64782__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64782__$1)){
var c__48938__auto__ = cljs.core.chunk_first.call(null,seq__64782__$1);
var G__64797 = cljs.core.chunk_rest.call(null,seq__64782__$1);
var G__64798 = c__48938__auto__;
var G__64799 = cljs.core.count.call(null,c__48938__auto__);
var G__64800 = (0);
seq__64782 = G__64797;
chunk__64783 = G__64798;
count__64784 = G__64799;
i__64785 = G__64800;
continue;
} else {
var vec__64789 = cljs.core.first.call(null,seq__64782__$1);
var k = cljs.core.nth.call(null,vec__64789,(0),null);
var plugin = cljs.core.nth.call(null,vec__64789,(1),null);
if(cljs.core.truth_(plugin)){
var pl_64801 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__64782,chunk__64783,count__64784,i__64785,pl_64801,vec__64789,k,plugin,seq__64782__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_64801.call(null,msg_hist);
});})(seq__64782,chunk__64783,count__64784,i__64785,pl_64801,vec__64789,k,plugin,seq__64782__$1,temp__4657__auto__))
);
} else {
}

var G__64802 = cljs.core.next.call(null,seq__64782__$1);
var G__64803 = null;
var G__64804 = (0);
var G__64805 = (0);
seq__64782 = G__64802;
chunk__64783 = G__64803;
count__64784 = G__64804;
i__64785 = G__64805;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args64806 = [];
var len__49232__auto___64813 = arguments.length;
var i__49233__auto___64814 = (0);
while(true){
if((i__49233__auto___64814 < len__49232__auto___64813)){
args64806.push((arguments[i__49233__auto___64814]));

var G__64815 = (i__49233__auto___64814 + (1));
i__49233__auto___64814 = G__64815;
continue;
} else {
}
break;
}

var G__64808 = args64806.length;
switch (G__64808) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64806.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__64809_64817 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__64810_64818 = null;
var count__64811_64819 = (0);
var i__64812_64820 = (0);
while(true){
if((i__64812_64820 < count__64811_64819)){
var msg_64821 = cljs.core._nth.call(null,chunk__64810_64818,i__64812_64820);
figwheel.client.socket.handle_incoming_message.call(null,msg_64821);

var G__64822 = seq__64809_64817;
var G__64823 = chunk__64810_64818;
var G__64824 = count__64811_64819;
var G__64825 = (i__64812_64820 + (1));
seq__64809_64817 = G__64822;
chunk__64810_64818 = G__64823;
count__64811_64819 = G__64824;
i__64812_64820 = G__64825;
continue;
} else {
var temp__4657__auto___64826 = cljs.core.seq.call(null,seq__64809_64817);
if(temp__4657__auto___64826){
var seq__64809_64827__$1 = temp__4657__auto___64826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64809_64827__$1)){
var c__48938__auto___64828 = cljs.core.chunk_first.call(null,seq__64809_64827__$1);
var G__64829 = cljs.core.chunk_rest.call(null,seq__64809_64827__$1);
var G__64830 = c__48938__auto___64828;
var G__64831 = cljs.core.count.call(null,c__48938__auto___64828);
var G__64832 = (0);
seq__64809_64817 = G__64829;
chunk__64810_64818 = G__64830;
count__64811_64819 = G__64831;
i__64812_64820 = G__64832;
continue;
} else {
var msg_64833 = cljs.core.first.call(null,seq__64809_64827__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_64833);

var G__64834 = cljs.core.next.call(null,seq__64809_64827__$1);
var G__64835 = null;
var G__64836 = (0);
var G__64837 = (0);
seq__64809_64817 = G__64834;
chunk__64810_64818 = G__64835;
count__64811_64819 = G__64836;
i__64812_64820 = G__64837;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__49239__auto__ = [];
var len__49232__auto___64842 = arguments.length;
var i__49233__auto___64843 = (0);
while(true){
if((i__49233__auto___64843 < len__49232__auto___64842)){
args__49239__auto__.push((arguments[i__49233__auto___64843]));

var G__64844 = (i__49233__auto___64843 + (1));
i__49233__auto___64843 = G__64844;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__64839){
var map__64840 = p__64839;
var map__64840__$1 = ((((!((map__64840 == null)))?((((map__64840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64840):map__64840);
var opts = map__64840__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq64838){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64838));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e64846){if((e64846 instanceof Error)){
var e = e64846;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e64846;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__64850){
var map__64851 = p__64850;
var map__64851__$1 = ((((!((map__64851 == null)))?((((map__64851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64851):map__64851);
var msg_name = cljs.core.get.call(null,map__64851__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map