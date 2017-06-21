// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__63577){
var map__63602 = p__63577;
var map__63602__$1 = ((((!((map__63602 == null)))?((((map__63602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63602):map__63602);
var m = map__63602__$1;
var n = cljs.core.get.call(null,map__63602__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__63602__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__63604_63626 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63605_63627 = null;
var count__63606_63628 = (0);
var i__63607_63629 = (0);
while(true){
if((i__63607_63629 < count__63606_63628)){
var f_63630 = cljs.core._nth.call(null,chunk__63605_63627,i__63607_63629);
cljs.core.println.call(null,"  ",f_63630);

var G__63631 = seq__63604_63626;
var G__63632 = chunk__63605_63627;
var G__63633 = count__63606_63628;
var G__63634 = (i__63607_63629 + (1));
seq__63604_63626 = G__63631;
chunk__63605_63627 = G__63632;
count__63606_63628 = G__63633;
i__63607_63629 = G__63634;
continue;
} else {
var temp__4657__auto___63635 = cljs.core.seq.call(null,seq__63604_63626);
if(temp__4657__auto___63635){
var seq__63604_63636__$1 = temp__4657__auto___63635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63604_63636__$1)){
var c__48938__auto___63637 = cljs.core.chunk_first.call(null,seq__63604_63636__$1);
var G__63638 = cljs.core.chunk_rest.call(null,seq__63604_63636__$1);
var G__63639 = c__48938__auto___63637;
var G__63640 = cljs.core.count.call(null,c__48938__auto___63637);
var G__63641 = (0);
seq__63604_63626 = G__63638;
chunk__63605_63627 = G__63639;
count__63606_63628 = G__63640;
i__63607_63629 = G__63641;
continue;
} else {
var f_63642 = cljs.core.first.call(null,seq__63604_63636__$1);
cljs.core.println.call(null,"  ",f_63642);

var G__63643 = cljs.core.next.call(null,seq__63604_63636__$1);
var G__63644 = null;
var G__63645 = (0);
var G__63646 = (0);
seq__63604_63626 = G__63643;
chunk__63605_63627 = G__63644;
count__63606_63628 = G__63645;
i__63607_63629 = G__63646;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_63647 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__48119__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_63647);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_63647)))?cljs.core.second.call(null,arglists_63647):arglists_63647));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__63608_63648 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63609_63649 = null;
var count__63610_63650 = (0);
var i__63611_63651 = (0);
while(true){
if((i__63611_63651 < count__63610_63650)){
var vec__63612_63652 = cljs.core._nth.call(null,chunk__63609_63649,i__63611_63651);
var name_63653 = cljs.core.nth.call(null,vec__63612_63652,(0),null);
var map__63615_63654 = cljs.core.nth.call(null,vec__63612_63652,(1),null);
var map__63615_63655__$1 = ((((!((map__63615_63654 == null)))?((((map__63615_63654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63615_63654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63615_63654):map__63615_63654);
var doc_63656 = cljs.core.get.call(null,map__63615_63655__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63657 = cljs.core.get.call(null,map__63615_63655__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_63653);

cljs.core.println.call(null," ",arglists_63657);

if(cljs.core.truth_(doc_63656)){
cljs.core.println.call(null," ",doc_63656);
} else {
}

var G__63658 = seq__63608_63648;
var G__63659 = chunk__63609_63649;
var G__63660 = count__63610_63650;
var G__63661 = (i__63611_63651 + (1));
seq__63608_63648 = G__63658;
chunk__63609_63649 = G__63659;
count__63610_63650 = G__63660;
i__63611_63651 = G__63661;
continue;
} else {
var temp__4657__auto___63662 = cljs.core.seq.call(null,seq__63608_63648);
if(temp__4657__auto___63662){
var seq__63608_63663__$1 = temp__4657__auto___63662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63608_63663__$1)){
var c__48938__auto___63664 = cljs.core.chunk_first.call(null,seq__63608_63663__$1);
var G__63665 = cljs.core.chunk_rest.call(null,seq__63608_63663__$1);
var G__63666 = c__48938__auto___63664;
var G__63667 = cljs.core.count.call(null,c__48938__auto___63664);
var G__63668 = (0);
seq__63608_63648 = G__63665;
chunk__63609_63649 = G__63666;
count__63610_63650 = G__63667;
i__63611_63651 = G__63668;
continue;
} else {
var vec__63617_63669 = cljs.core.first.call(null,seq__63608_63663__$1);
var name_63670 = cljs.core.nth.call(null,vec__63617_63669,(0),null);
var map__63620_63671 = cljs.core.nth.call(null,vec__63617_63669,(1),null);
var map__63620_63672__$1 = ((((!((map__63620_63671 == null)))?((((map__63620_63671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63620_63671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63620_63671):map__63620_63671);
var doc_63673 = cljs.core.get.call(null,map__63620_63672__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63674 = cljs.core.get.call(null,map__63620_63672__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_63670);

cljs.core.println.call(null," ",arglists_63674);

if(cljs.core.truth_(doc_63673)){
cljs.core.println.call(null," ",doc_63673);
} else {
}

var G__63675 = cljs.core.next.call(null,seq__63608_63663__$1);
var G__63676 = null;
var G__63677 = (0);
var G__63678 = (0);
seq__63608_63648 = G__63675;
chunk__63609_63649 = G__63676;
count__63610_63650 = G__63677;
i__63611_63651 = G__63678;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__63622 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__63623 = null;
var count__63624 = (0);
var i__63625 = (0);
while(true){
if((i__63625 < count__63624)){
var role = cljs.core._nth.call(null,chunk__63623,i__63625);
var temp__4657__auto___63679__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___63679__$1)){
var spec_63680 = temp__4657__auto___63679__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_63680));
} else {
}

var G__63681 = seq__63622;
var G__63682 = chunk__63623;
var G__63683 = count__63624;
var G__63684 = (i__63625 + (1));
seq__63622 = G__63681;
chunk__63623 = G__63682;
count__63624 = G__63683;
i__63625 = G__63684;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__63622);
if(temp__4657__auto____$1){
var seq__63622__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63622__$1)){
var c__48938__auto__ = cljs.core.chunk_first.call(null,seq__63622__$1);
var G__63685 = cljs.core.chunk_rest.call(null,seq__63622__$1);
var G__63686 = c__48938__auto__;
var G__63687 = cljs.core.count.call(null,c__48938__auto__);
var G__63688 = (0);
seq__63622 = G__63685;
chunk__63623 = G__63686;
count__63624 = G__63687;
i__63625 = G__63688;
continue;
} else {
var role = cljs.core.first.call(null,seq__63622__$1);
var temp__4657__auto___63689__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___63689__$2)){
var spec_63690 = temp__4657__auto___63689__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_63690));
} else {
}

var G__63691 = cljs.core.next.call(null,seq__63622__$1);
var G__63692 = null;
var G__63693 = (0);
var G__63694 = (0);
seq__63622 = G__63691;
chunk__63623 = G__63692;
count__63624 = G__63693;
i__63625 = G__63694;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map