// Compiled by ClojureScript 1.9.495 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__56119){
var map__56130 = p__56119;
var map__56130__$1 = ((((!((map__56130 == null)))?((((map__56130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56130):map__56130);
var replacement_transformers = cljs.core.get.call(null,map__56130__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__56130__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__56130__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__56130,map__56130__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_56132 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__56133 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_56132,map__56130,map__56130__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__56136,transformer){
var vec__56137 = p__56136;
var text = cljs.core.nth.call(null,vec__56137,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__56137,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_56132,map__56130,map__56130__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__48119__auto__ = replacement_transformers;
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__56133,(0),null);
var new_state = cljs.core.nth.call(null,vec__56133,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_56132;
}});
;})(map__56130,map__56130__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__49239__auto__ = [];
var len__49232__auto___56142 = arguments.length;
var i__49233__auto___56143 = (0);
while(true){
if((i__49233__auto___56143 < len__49232__auto___56142)){
args__49239__auto__.push((arguments[i__49233__auto___56143]));

var G__56144 = (i__49233__auto___56143 + (1));
i__49233__auto___56143 = G__56144;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq56140){
var G__56141 = cljs.core.first.call(null,seq56140);
var seq56140__$1 = cljs.core.next.call(null,seq56140);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__56141,seq56140__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__56149_56153 = cljs.core.seq.call(null,lines);
var chunk__56150_56154 = null;
var count__56151_56155 = (0);
var i__56152_56156 = (0);
while(true){
if((i__56152_56156 < count__56151_56155)){
var line_56157 = cljs.core._nth.call(null,chunk__56150_56154,i__56152_56156);
markdown.links.parse_reference_link.call(null,line_56157,references);

var G__56158 = seq__56149_56153;
var G__56159 = chunk__56150_56154;
var G__56160 = count__56151_56155;
var G__56161 = (i__56152_56156 + (1));
seq__56149_56153 = G__56158;
chunk__56150_56154 = G__56159;
count__56151_56155 = G__56160;
i__56152_56156 = G__56161;
continue;
} else {
var temp__4657__auto___56162 = cljs.core.seq.call(null,seq__56149_56153);
if(temp__4657__auto___56162){
var seq__56149_56163__$1 = temp__4657__auto___56162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56149_56163__$1)){
var c__48938__auto___56164 = cljs.core.chunk_first.call(null,seq__56149_56163__$1);
var G__56165 = cljs.core.chunk_rest.call(null,seq__56149_56163__$1);
var G__56166 = c__48938__auto___56164;
var G__56167 = cljs.core.count.call(null,c__48938__auto___56164);
var G__56168 = (0);
seq__56149_56153 = G__56165;
chunk__56150_56154 = G__56166;
count__56151_56155 = G__56167;
i__56152_56156 = G__56168;
continue;
} else {
var line_56169 = cljs.core.first.call(null,seq__56149_56163__$1);
markdown.links.parse_reference_link.call(null,line_56169,references);

var G__56170 = cljs.core.next.call(null,seq__56149_56163__$1);
var G__56171 = null;
var G__56172 = (0);
var G__56173 = (0);
seq__56149_56153 = G__56170;
chunk__56150_56154 = G__56171;
count__56151_56155 = G__56172;
i__56152_56156 = G__56173;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__56178_56182 = cljs.core.seq.call(null,lines);
var chunk__56179_56183 = null;
var count__56180_56184 = (0);
var i__56181_56185 = (0);
while(true){
if((i__56181_56185 < count__56180_56184)){
var line_56186 = cljs.core._nth.call(null,chunk__56179_56183,i__56181_56185);
markdown.links.parse_footnote_link.call(null,line_56186,footnotes);

var G__56187 = seq__56178_56182;
var G__56188 = chunk__56179_56183;
var G__56189 = count__56180_56184;
var G__56190 = (i__56181_56185 + (1));
seq__56178_56182 = G__56187;
chunk__56179_56183 = G__56188;
count__56180_56184 = G__56189;
i__56181_56185 = G__56190;
continue;
} else {
var temp__4657__auto___56191 = cljs.core.seq.call(null,seq__56178_56182);
if(temp__4657__auto___56191){
var seq__56178_56192__$1 = temp__4657__auto___56191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56178_56192__$1)){
var c__48938__auto___56193 = cljs.core.chunk_first.call(null,seq__56178_56192__$1);
var G__56194 = cljs.core.chunk_rest.call(null,seq__56178_56192__$1);
var G__56195 = c__48938__auto___56193;
var G__56196 = cljs.core.count.call(null,c__48938__auto___56193);
var G__56197 = (0);
seq__56178_56182 = G__56194;
chunk__56179_56183 = G__56195;
count__56180_56184 = G__56196;
i__56181_56185 = G__56197;
continue;
} else {
var line_56198 = cljs.core.first.call(null,seq__56178_56192__$1);
markdown.links.parse_footnote_link.call(null,line_56198,footnotes);

var G__56199 = cljs.core.next.call(null,seq__56178_56192__$1);
var G__56200 = null;
var G__56201 = (0);
var G__56202 = (0);
seq__56178_56182 = G__56199;
chunk__56179_56183 = G__56200;
count__56180_56184 = G__56201;
i__56181_56185 = G__56202;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__56207 = cljs.core.split_with.call(null,(function (p1__56203_SHARP_){
return cljs.core.not_empty.call(null,p1__56203_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__56207,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__56207,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_56225 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_56226 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_56225,_STAR_formatter_STAR_56226){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_56225,_STAR_formatter_STAR_56226))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__56227 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__56227,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__56227,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__56233_56240 = lines__$1;
var vec__56234_56241 = G__56233_56240;
var seq__56235_56242 = cljs.core.seq.call(null,vec__56234_56241);
var first__56236_56243 = cljs.core.first.call(null,seq__56235_56242);
var seq__56235_56244__$1 = cljs.core.next.call(null,seq__56235_56242);
var line_56245 = first__56236_56243;
var more_56246 = seq__56235_56244__$1;
var state_56247 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__56233_56248__$1 = G__56233_56240;
var state_56249__$1 = state_56247;
while(true){
var vec__56237_56250 = G__56233_56248__$1;
var seq__56238_56251 = cljs.core.seq.call(null,vec__56237_56250);
var first__56239_56252 = cljs.core.first.call(null,seq__56238_56251);
var seq__56238_56253__$1 = cljs.core.next.call(null,seq__56238_56251);
var line_56254__$1 = first__56239_56252;
var more_56255__$1 = seq__56238_56253__$1;
var state_56256__$2 = state_56249__$1;
var line_56257__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_56256__$2))?"":line_56254__$1);
var state_56258__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_56256__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_56256__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_56256__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_56256__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_56256__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_56255__$1))){
var G__56259 = more_56255__$1;
var G__56260 = cljs.core.assoc.call(null,transformer.call(null,html,line_56257__$2,cljs.core.first.call(null,more_56255__$1),cljs.core.dissoc.call(null,state_56258__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_56257__$2));
G__56233_56248__$1 = G__56259;
state_56249__$1 = G__56260;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_56258__$3))),line_56257__$2,"",cljs.core.assoc.call(null,state_56258__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_56226;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_56225;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__49239__auto__ = [];
var len__49232__auto___56263 = arguments.length;
var i__49233__auto___56264 = (0);
while(true){
if((i__49233__auto___56264 < len__49232__auto___56263)){
args__49239__auto__.push((arguments[i__49233__auto___56264]));

var G__56265 = (i__49233__auto___56264 + (1));
i__49233__auto___56264 = G__56265;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq56261){
var G__56262 = cljs.core.first.call(null,seq56261);
var seq56261__$1 = cljs.core.next.call(null,seq56261);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__56262,seq56261__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__49239__auto__ = [];
var len__49232__auto___56268 = arguments.length;
var i__49233__auto___56269 = (0);
while(true){
if((i__49233__auto___56269 < len__49232__auto___56268)){
args__49239__auto__.push((arguments[i__49233__auto___56269]));

var G__56270 = (i__49233__auto___56269 + (1));
i__49233__auto___56269 = G__56270;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq56266){
var G__56267 = cljs.core.first.call(null,seq56266);
var seq56266__$1 = cljs.core.next.call(null,seq56266);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__56267,seq56266__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__49239__auto__ = [];
var len__49232__auto___56272 = arguments.length;
var i__49233__auto___56273 = (0);
while(true){
if((i__49233__auto___56273 < len__49232__auto___56272)){
args__49239__auto__.push((arguments[i__49233__auto___56273]));

var G__56274 = (i__49233__auto___56273 + (1));
i__49233__auto___56273 = G__56274;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq56271){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56271));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__49239__auto__ = [];
var len__49232__auto___56276 = arguments.length;
var i__49233__auto___56277 = (0);
while(true){
if((i__49233__auto___56277 < len__49232__auto___56276)){
args__49239__auto__.push((arguments[i__49233__auto___56277]));

var G__56278 = (i__49233__auto___56277 + (1));
i__49233__auto___56277 = G__56278;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((0) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__49240__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq56275){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56275));
});


//# sourceMappingURL=core.js.map