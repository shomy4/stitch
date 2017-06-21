// Compiled by ClojureScript 1.9.495 {}
goog.provide('stitch.components.scans');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('stitch.components.common');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('goog.net.IframeIo');
goog.require('goog.events.EventType');
stitch.components.scans.image_modal = (function stitch$components$scans$image_modal(link){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.image.panel.panel-default","img.image.panel.panel-default",-702444629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reagent.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850));
}),new cljs.core.Keyword(null,"src","src",-1651076051),link], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-backdrop.fade.in","div.modal-backdrop.fade.in",-1698078477)], null)], null);
});
});
stitch.components.scans.thumb_link = (function stitch$components$scans$thumb_link(p__55568){
var map__55571 = p__55568;
var map__55571__$1 = ((((!((map__55571 == null)))?((((map__55571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55571):map__55571);
var name = cljs.core.get.call(null,map__55571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__55571__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-4","div.col-sm-4",1703492594),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("img/scan.jpeg")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__55571,map__55571__$1,name,description){
return (function (){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850),stitch.components.scans.image_modal.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("img/scan.jpeg")].join('')));
});})(map__55571,map__55571__$1,name,description))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs-center>div.btn.btn-danger","div.text-xs-center>div.btn.btn-danger",-1550484412),name], null)], null);
});
stitch.components.scans.gallery = (function stitch$components$scans$gallery(links){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs-center","div.text-xs-center",507338088),(function (){var iter__48909__auto__ = (function stitch$components$scans$gallery_$_iter__55593(s__55594){
return (new cljs.core.LazySeq(null,(function (){
var s__55594__$1 = s__55594;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55594__$1);
if(temp__4657__auto__){
var s__55594__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55594__$2)){
var c__48907__auto__ = cljs.core.chunk_first.call(null,s__55594__$2);
var size__48908__auto__ = cljs.core.count.call(null,c__48907__auto__);
var b__55596 = cljs.core.chunk_buffer.call(null,size__48908__auto__);
if((function (){var i__55595 = (0);
while(true){
if((i__55595 < size__48908__auto__)){
var row = cljs.core._nth.call(null,c__48907__auto__,i__55595);
cljs.core.chunk_append.call(null,b__55596,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__48909__auto__ = ((function (i__55595,row,c__48907__auto__,size__48908__auto__,b__55596,s__55594__$2,temp__4657__auto__){
return (function stitch$components$scans$gallery_$_iter__55593_$_iter__55605(s__55606){
return (new cljs.core.LazySeq(null,((function (i__55595,row,c__48907__auto__,size__48908__auto__,b__55596,s__55594__$2,temp__4657__auto__){
return (function (){
var s__55606__$1 = s__55606;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__55606__$1);
if(temp__4657__auto____$1){
var s__55606__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55606__$2)){
var c__48907__auto____$1 = cljs.core.chunk_first.call(null,s__55606__$2);
var size__48908__auto____$1 = cljs.core.count.call(null,c__48907__auto____$1);
var b__55608 = cljs.core.chunk_buffer.call(null,size__48908__auto____$1);
if((function (){var i__55607 = (0);
while(true){
if((i__55607 < size__48908__auto____$1)){
var link = cljs.core._nth.call(null,c__48907__auto____$1,i__55607);
cljs.core.chunk_append.call(null,b__55608,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.scans.thumb_link,link], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)));

var G__55613 = (i__55607 + (1));
i__55607 = G__55613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55608),stitch$components$scans$gallery_$_iter__55593_$_iter__55605.call(null,cljs.core.chunk_rest.call(null,s__55606__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55608),null);
}
} else {
var link = cljs.core.first.call(null,s__55606__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.scans.thumb_link,link], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)),stitch$components$scans$gallery_$_iter__55593_$_iter__55605.call(null,cljs.core.rest.call(null,s__55606__$2)));
}
} else {
return null;
}
break;
}
});})(i__55595,row,c__48907__auto__,size__48908__auto__,b__55596,s__55594__$2,temp__4657__auto__))
,null,null));
});})(i__55595,row,c__48907__auto__,size__48908__auto__,b__55596,s__55594__$2,temp__4657__auto__))
;
return iter__48909__auto__.call(null,row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)));

var G__55614 = (i__55595 + (1));
i__55595 = G__55614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55596),stitch$components$scans$gallery_$_iter__55593.call(null,cljs.core.chunk_rest.call(null,s__55594__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55596),null);
}
} else {
var row = cljs.core.first.call(null,s__55594__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__48909__auto__ = ((function (row,s__55594__$2,temp__4657__auto__){
return (function stitch$components$scans$gallery_$_iter__55593_$_iter__55609(s__55610){
return (new cljs.core.LazySeq(null,((function (row,s__55594__$2,temp__4657__auto__){
return (function (){
var s__55610__$1 = s__55610;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__55610__$1);
if(temp__4657__auto____$1){
var s__55610__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55610__$2)){
var c__48907__auto__ = cljs.core.chunk_first.call(null,s__55610__$2);
var size__48908__auto__ = cljs.core.count.call(null,c__48907__auto__);
var b__55612 = cljs.core.chunk_buffer.call(null,size__48908__auto__);
if((function (){var i__55611 = (0);
while(true){
if((i__55611 < size__48908__auto__)){
var link = cljs.core._nth.call(null,c__48907__auto__,i__55611);
cljs.core.chunk_append.call(null,b__55612,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.scans.thumb_link,link], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)));

var G__55615 = (i__55611 + (1));
i__55611 = G__55615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55612),stitch$components$scans$gallery_$_iter__55593_$_iter__55609.call(null,cljs.core.chunk_rest.call(null,s__55610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55612),null);
}
} else {
var link = cljs.core.first.call(null,s__55610__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.scans.thumb_link,link], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)),stitch$components$scans$gallery_$_iter__55593_$_iter__55609.call(null,cljs.core.rest.call(null,s__55610__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__55594__$2,temp__4657__auto__))
,null,null));
});})(row,s__55594__$2,temp__4657__auto__))
;
return iter__48909__auto__.call(null,row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)),stitch$components$scans$gallery_$_iter__55593.call(null,cljs.core.rest.call(null,s__55594__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__48909__auto__.call(null,cljs.core.partition_all.call(null,(3),links));
})()], null);
});
stitch.components.scans.forward = (function stitch$components$scans$forward(i,pages){
if((i < (pages - (1)))){
return (i + (1));
} else {
return i;
}
});
stitch.components.scans.back = (function stitch$components$scans$back(i){
if((i > (0))){
return (i - (1));
} else {
return i;
}
});
stitch.components.scans.nav_link = (function stitch$components$scans$nav_link(page,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.page-item>a.page-link.btn.btn-primary","li.page-item>a.page-link.btn.btn-primary",548071941),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,page,i);
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,i,cljs.core.deref.call(null,page)))?"active":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),i], null)], null);
});
stitch.components.scans.pager = (function stitch$components$scans$pager(pages,page){
if((pages > (1))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs-center>ul.pagination.pagination-lg","div.text-xs-center>ul.pagination.pagination-lg",2040148172)], null),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.page-item>a.page-link.btn.btn-primary","li.page-item>a.page-link.btn.btn-primary",548071941),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,page,stitch.components.scans.back,pages);
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,page),(0)))?"disabled":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u00C2\u00AB"], null)], null)], null),cljs.core.map.call(null,cljs.core.partial.call(null,stitch.components.scans.nav_link,page),cljs.core.range.call(null,pages)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.page-item>a.page-link.btn.btn-primary","li.page-item>a.page-link.btn.btn-primary",548071941),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,page,stitch.components.scans.forward,pages);
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,page),(pages - (1))))?"disabled":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u00C2\u00BB"], null)], null)], null)));
} else {
return null;
}
});
stitch.components.scans.fetch_scans_BANG_ = (function stitch$components$scans$fetch_scans_BANG_(owner){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/list-scans/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (obj){
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"scans","scans",183440284),obj);

return console.log(cljs.core.clj__GT_js.call(null,obj));
})], null));
});
stitch.components.scans.partition_links = (function stitch$components$scans$partition_links(links){
if(cljs.core.truth_(cljs.core.not_empty.call(null,links))){
return cljs.core.vec.call(null,cljs.core.partition_all.call(null,(6),links));
} else {
return null;
}
});
stitch.components.scans.scans_page = (function stitch$components$scans$scans_page(){
var page = reagent.core.atom.call(null,(0));
return ((function (page){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),(function (){var temp__4657__auto__ = stitch.components.scans.partition_links.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"scans","scans",183440284)));
if(cljs.core.truth_(temp__4657__auto__)){
var thumbnail_links = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>div.col-md-12","div.row>div.col-md-12",1262945285),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.scans.pager,cljs.core.count.call(null,thumbnail_links),page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.scans.gallery,thumbnail_links.call(null,cljs.core.deref.call(null,page))], null)], null);
} else {
return null;
}
})()], null);
});
;})(page))
});

//# sourceMappingURL=scans.js.map