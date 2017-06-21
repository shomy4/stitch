// Compiled by ClojureScript 1.9.495 {}
goog.provide('stitch.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('markdown.core');
goog.require('stitch.ajax');
goog.require('ajax.core');
goog.require('stitch.components.common');
goog.require('stitch.components.registration');
goog.require('stitch.components.login');
goog.require('stitch.components.upload_scan');
goog.require('stitch.components.scans');
goog.require('goog.History');
stitch.core.nav_link = (function stitch$core$nav_link(uri,title,page,collapsed_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,page,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,collapsed_QMARK_,true);
})], null),title], null)], null);
});
stitch.core.user_menu = (function stitch$core$user_menu(){
var temp__4655__auto__ = reagent.session.get.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035));
if(cljs.core.truth_(temp__4655__auto__)){
var id = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.pull-xs-right","ul.nav.navbar-nav.pull-xs-right",282714831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.upload_scan.upload_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item.btn","a.dropdown-item.btn",1932808132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id,temp__4655__auto__){
return (function (){
return ajax.core.POST.call(null,"/logout",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (id,temp__4655__auto__){
return (function (){
return reagent.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035));
});})(id,temp__4655__auto__))
], null));
});})(id,temp__4655__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-user","i.fa.fa-user",382004105)], null)," ",id," | sign out"], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.pull-xs-right","ul.nav.navbar-nav.pull-xs-right",282714831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.login.login_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.registration.registration_button], null)], null)], null);
}
});
stitch.core.navbar = (function stitch$core$navbar(){
var collapsed_QMARK_ = reagent.core.atom.call(null,true);
return ((function (collapsed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-light.bg-faded","nav.navbar.navbar-light.bg-faded",244269307),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-toggler.hidden-sm-up","button.navbar-toggler.hidden-sm-up",-398271905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (collapsed_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,collapsed_QMARK_,cljs.core.not);
});})(collapsed_QMARK_))
], null),"\u00E2\u02DC\u00B0"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.collapse.navbar-toggleable-xs","div.collapse.navbar-toggleable-xs",-474131623),(cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"in"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"stitch"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.core.nav_link,"#/","Home",new cljs.core.Keyword(null,"home","home",-74557309),collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.core.nav_link,"#/about","About",new cljs.core.Keyword(null,"about","about",1423892543),collapsed_QMARK_], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.core.user_menu], null)], null)], null);
});
;})(collapsed_QMARK_))
});
stitch.core.about_page = (function stitch$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Stitcher about page. Coming soon"], null);
});
stitch.core.galleries = (function stitch$core$galleries(gallery_links){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs-center","div.text-xs-center",507338088),(function (){var iter__48909__auto__ = (function stitch$core$galleries_$_iter__55670(s__55671){
return (new cljs.core.LazySeq(null,(function (){
var s__55671__$1 = s__55671;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55671__$1);
if(temp__4657__auto__){
var s__55671__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55671__$2)){
var c__48907__auto__ = cljs.core.chunk_first.call(null,s__55671__$2);
var size__48908__auto__ = cljs.core.count.call(null,c__48907__auto__);
var b__55673 = cljs.core.chunk_buffer.call(null,size__48908__auto__);
if((function (){var i__55672 = (0);
while(true){
if((i__55672 < size__48908__auto__)){
var row = cljs.core._nth.call(null,c__48907__auto__,i__55672);
cljs.core.chunk_append.call(null,b__55673,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__48909__auto__ = ((function (i__55672,row,c__48907__auto__,size__48908__auto__,b__55673,s__55671__$2,temp__4657__auto__){
return (function stitch$core$galleries_$_iter__55670_$_iter__55698(s__55699){
return (new cljs.core.LazySeq(null,((function (i__55672,row,c__48907__auto__,size__48908__auto__,b__55673,s__55671__$2,temp__4657__auto__){
return (function (){
var s__55699__$1 = s__55699;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__55699__$1);
if(temp__4657__auto____$1){
var s__55699__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55699__$2)){
var c__48907__auto____$1 = cljs.core.chunk_first.call(null,s__55699__$2);
var size__48908__auto____$1 = cljs.core.count.call(null,c__48907__auto____$1);
var b__55701 = cljs.core.chunk_buffer.call(null,size__48908__auto____$1);
if((function (){var i__55700 = (0);
while(true){
if((i__55700 < size__48908__auto____$1)){
var map__55706 = cljs.core._nth.call(null,c__48907__auto____$1,i__55700);
var map__55706__$1 = ((((!((map__55706 == null)))?((((map__55706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55706):map__55706);
var owner = cljs.core.get.call(null,map__55706__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var name = cljs.core.get.call(null,map__55706__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append.call(null,b__55701,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-4","div.col-sm-4",1703492594),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#/gallery/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/gallery/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)));

var G__55722 = (i__55700 + (1));
i__55700 = G__55722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55701),stitch$core$galleries_$_iter__55670_$_iter__55698.call(null,cljs.core.chunk_rest.call(null,s__55699__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55701),null);
}
} else {
var map__55708 = cljs.core.first.call(null,s__55699__$2);
var map__55708__$1 = ((((!((map__55708 == null)))?((((map__55708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55708):map__55708);
var owner = cljs.core.get.call(null,map__55708__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var name = cljs.core.get.call(null,map__55708__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-4","div.col-sm-4",1703492594),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#/gallery/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/gallery/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)),stitch$core$galleries_$_iter__55670_$_iter__55698.call(null,cljs.core.rest.call(null,s__55699__$2)));
}
} else {
return null;
}
break;
}
});})(i__55672,row,c__48907__auto__,size__48908__auto__,b__55673,s__55671__$2,temp__4657__auto__))
,null,null));
});})(i__55672,row,c__48907__auto__,size__48908__auto__,b__55673,s__55671__$2,temp__4657__auto__))
;
return iter__48909__auto__.call(null,row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)));

var G__55723 = (i__55672 + (1));
i__55672 = G__55723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55673),stitch$core$galleries_$_iter__55670.call(null,cljs.core.chunk_rest.call(null,s__55671__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55673),null);
}
} else {
var row = cljs.core.first.call(null,s__55671__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__48909__auto__ = ((function (row,s__55671__$2,temp__4657__auto__){
return (function stitch$core$galleries_$_iter__55670_$_iter__55710(s__55711){
return (new cljs.core.LazySeq(null,((function (row,s__55671__$2,temp__4657__auto__){
return (function (){
var s__55711__$1 = s__55711;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__55711__$1);
if(temp__4657__auto____$1){
var s__55711__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55711__$2)){
var c__48907__auto__ = cljs.core.chunk_first.call(null,s__55711__$2);
var size__48908__auto__ = cljs.core.count.call(null,c__48907__auto__);
var b__55713 = cljs.core.chunk_buffer.call(null,size__48908__auto__);
if((function (){var i__55712 = (0);
while(true){
if((i__55712 < size__48908__auto__)){
var map__55718 = cljs.core._nth.call(null,c__48907__auto__,i__55712);
var map__55718__$1 = ((((!((map__55718 == null)))?((((map__55718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55718):map__55718);
var owner = cljs.core.get.call(null,map__55718__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var name = cljs.core.get.call(null,map__55718__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append.call(null,b__55713,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-4","div.col-sm-4",1703492594),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#/gallery/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/gallery/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)));

var G__55724 = (i__55712 + (1));
i__55712 = G__55724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55713),stitch$core$galleries_$_iter__55670_$_iter__55710.call(null,cljs.core.chunk_rest.call(null,s__55711__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55713),null);
}
} else {
var map__55720 = cljs.core.first.call(null,s__55711__$2);
var map__55720__$1 = ((((!((map__55720 == null)))?((((map__55720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55720):map__55720);
var owner = cljs.core.get.call(null,map__55720__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var name = cljs.core.get.call(null,map__55720__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-4","div.col-sm-4",1703492594),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#/gallery/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/gallery/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)),stitch$core$galleries_$_iter__55670_$_iter__55710.call(null,cljs.core.rest.call(null,s__55711__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__55671__$2,temp__4657__auto__))
,null,null));
});})(row,s__55671__$2,temp__4657__auto__))
;
return iter__48909__auto__.call(null,row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)),stitch$core$galleries_$_iter__55670.call(null,cljs.core.rest.call(null,s__55671__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__48909__auto__.call(null,cljs.core.partition_all.call(null,(3),gallery_links));
})()], null);
});
stitch.core.home_page = (function stitch$core$home_page(){
stitch.components.scans.fetch_scans_BANG_.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035)));

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12>h2","div.col-md-12>h2",-306562402),"Welcome to Stitcher"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>div.col-md-12","div.row>div.col-md-12",1262945285),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.scans.scans_page], null)], null)], null);
});
});
stitch.core.pages = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return stitch.core.home_page;},new cljs.core.Symbol("stitch.core","home-page","stitch.core/home-page",-1440019291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"stitch.core","stitch.core",-1971534865,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/milos/workspace/stitch/src/cljs/stitch/core.cljs",16,1,65,65,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(stitch.core.home_page)?stitch.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return stitch.core.about_page;},new cljs.core.Symbol("stitch.core","about-page","stitch.core/about-page",-543243883,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"stitch.core","stitch.core",-1971534865,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/home/milos/workspace/stitch/src/cljs/stitch/core.cljs",17,1,51,51,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(stitch.core.about_page)?stitch.core.about_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"scans","scans",183440284),new cljs.core.Var(function(){return stitch.components.scans.scans_page;},new cljs.core.Symbol("stitch.components.scans","scans-page","stitch.components.scans/scans-page",-2075135571,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"stitch.components.scans","stitch.components.scans",1252053571,null),new cljs.core.Symbol(null,"scans-page","scans-page",291411018,null),"src/cljs/stitch/components/scans.cljs",17,1,77,77,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(stitch.components.scans.scans_page)?stitch.components.scans.scans_page.cljs$lang$test:null)]))], null);
stitch.core.modal = (function stitch$core$modal(){
var temp__4657__auto__ = reagent.session.get.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850));
if(cljs.core.truth_(temp__4657__auto__)){
var session_modal = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [session_modal], null);
} else {
return null;
}
});
stitch.core.page = (function stitch$core$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var temp__4657__auto__ = reagent.session.get.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850));
if(cljs.core.truth_(temp__4657__auto__)){
var session_modal = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [session_modal], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__49444__auto___55730 = (function (params__49445__auto__){
if(cljs.core.map_QMARK_.call(null,params__49445__auto__)){
var map__55725 = params__49445__auto__;
var map__55725__$1 = ((((!((map__55725 == null)))?((((map__55725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55725):map__55725);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__49445__auto__)){
var vec__55727 = params__49445__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__49444__auto___55730);

var action__49444__auto___55736 = (function (params__49445__auto__){
if(cljs.core.map_QMARK_.call(null,params__49445__auto__)){
var map__55731 = params__49445__auto__;
var map__55731__$1 = ((((!((map__55731 == null)))?((((map__55731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55731):map__55731);
var owner = cljs.core.get.call(null,map__55731__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
stitch.components.scans.fetch_scans_BANG_.call(null,owner);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"scans","scans",183440284));
} else {
if(cljs.core.vector_QMARK_.call(null,params__49445__auto__)){
var vec__55733 = params__49445__auto__;
var owner = cljs.core.nth.call(null,vec__55733,(0),null);
stitch.components.scans.fetch_scans_BANG_.call(null,owner);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"scans","scans",183440284));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/list-scans/:owner",action__49444__auto___55736);

var action__49444__auto___55742 = (function (params__49445__auto__){
if(cljs.core.map_QMARK_.call(null,params__49445__auto__)){
var map__55737 = params__49445__auto__;
var map__55737__$1 = ((((!((map__55737 == null)))?((((map__55737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55737):map__55737);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__49445__auto__)){
var vec__55739 = params__49445__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__49444__auto___55742);

stitch.core.hook_browser_navigation_BANG_ = (function stitch$core$hook_browser_navigation_BANG_(){
var G__55744 = (new goog.History());
goog.events.listen(G__55744,goog.history.EventType.NAVIGATE,((function (G__55744){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__55744))
);

G__55744.setEnabled(true);

return G__55744;
});
stitch.core.mount_components = (function stitch$core$mount_components(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return stitch.core.navbar;},new cljs.core.Symbol("stitch.core","navbar","stitch.core/navbar",1634647060,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"stitch.core","stitch.core",-1971534865,null),new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),"/home/milos/workspace/stitch/src/cljs/stitch/core.cljs",13,1,37,37,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(stitch.core.navbar)?stitch.core.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return stitch.core.page;},new cljs.core.Symbol("stitch.core","page","stitch.core/page",-189624304,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"stitch.core","stitch.core",-1971534865,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"/home/milos/workspace/stitch/src/cljs/stitch/core.cljs",11,1,85,85,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(stitch.core.page)?stitch.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
stitch.core.init_BANG_ = (function stitch$core$init_BANG_(){
stitch.ajax.load_interceptors_BANG_.call(null);

stitch.core.hook_browser_navigation_BANG_.call(null);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035),identity);

return stitch.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map