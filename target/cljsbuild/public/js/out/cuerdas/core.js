// Compiled by ClojureScript 1.9.495 {}
goog.provide('cuerdas.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('clojure.set');
goog.require('clojure.walk');
/**
 * Checks if a string is empty.
 */
cuerdas.core.empty_QMARK_ = (function cuerdas$core$empty_QMARK_(s){
if((s == null)){
return false;
} else {
return cljs.core._EQ_.call(null,cljs.core.count.call(null,s),(0));
}
});
/**
 * Determines whether a string contains a substring.
 */
cuerdas.core.contains_QMARK_ = (function cuerdas$core$contains_QMARK_(s,subs){
if((s == null)){
return null;
} else {
return cljs.core.not_EQ_.call(null,s.indexOf(subs),(-1));
}
});
/**
 * Extracts a section of a string and returns a new string.
 */
cuerdas.core.slice = (function cuerdas$core$slice(var_args){
var args56585 = [];
var len__49232__auto___56588 = arguments.length;
var i__49233__auto___56589 = (0);
while(true){
if((i__49233__auto___56589 < len__49232__auto___56588)){
args56585.push((arguments[i__49233__auto___56589]));

var G__56590 = (i__49233__auto___56589 + (1));
i__49233__auto___56589 = G__56590;
continue;
} else {
}
break;
}

var G__56587 = args56585.length;
switch (G__56587) {
case 2:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56585.length)].join('')));

}
});

cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2 = (function (s,begin){
if((s == null)){
return null;
} else {
return s.slice(begin);
}
});

cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3 = (function (s,begin,end){
if((s == null)){
return null;
} else {
return s.slice(begin,end);
}
});

cuerdas.core.slice.cljs$lang$maxFixedArity = 3;

/**
 * Build or derive regexp instance.
 */
cuerdas.core.regexp = (function cuerdas$core$regexp(var_args){
var args56592 = [];
var len__49232__auto___56595 = arguments.length;
var i__49233__auto___56596 = (0);
while(true){
if((i__49233__auto___56596 < len__49232__auto___56595)){
args56592.push((arguments[i__49233__auto___56596]));

var G__56597 = (i__49233__auto___56596 + (1));
i__49233__auto___56596 = G__56597;
continue;
} else {
}
break;
}

var G__56594 = args56592.length;
switch (G__56594) {
case 1:
return cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56592.length)].join('')));

}
});

cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$1 = (function (s){
if(cljs.core.regexp_QMARK_.call(null,s)){
return s;
} else {
return (new RegExp(s));
}
});

cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$2 = (function (s,flags){
if(cljs.core.regexp_QMARK_.call(null,s)){
return (new RegExp(s.source,flags));
} else {
return (new RegExp(s,flags));
}
});

cuerdas.core.regexp.cljs$lang$maxFixedArity = 2;

/**
 * Check if the string starts with prefix.
 */
cuerdas.core.starts_with_QMARK_ = (function cuerdas$core$starts_with_QMARK_(s,prefix){
if((s == null)){
return null;
} else {
return cljs.core._EQ_.call(null,s.lastIndexOf(prefix,(0)),(0));
}
});
/**
 * Check if the string ends with suffix.
 */
cuerdas.core.ends_with_QMARK_ = (function cuerdas$core$ends_with_QMARK_(s,suffix){
if((s == null)){
return null;
} else {
var l = (cljs.core.count.call(null,s) - cljs.core.count.call(null,suffix));
return ((l >= (0))) && (cljs.core._EQ_.call(null,s.indexOf(suffix,l),l));
}
});
cuerdas.core.startswith_QMARK_ = cuerdas.core.starts_with_QMARK_;
cuerdas.core.endswith_QMARK_ = cuerdas.core.ends_with_QMARK_;
/**
 * Converts string to all lower-case.
 */
cuerdas.core.lower = (function cuerdas$core$lower(s){
if((s == null)){
return null;
} else {
return s.toLowerCase();
}
});
/**
 * Converts string to all upper-case.
 */
cuerdas.core.upper = (function cuerdas$core$upper(s){
if((s == null)){
return null;
} else {
return s.toUpperCase();
}
});
/**
 * Checks if a string is empty or contains only whitespace.
 */
cuerdas.core.blank_QMARK_ = (function cuerdas$core$blank_QMARK_(s){
return goog.string.isEmptySafe(s);
});
cuerdas.core.char_range_check = (function cuerdas$core$char_range_check(re){
return (function (s){
if((s == null)){
return false;
} else {
return cljs.core.re_matches.call(null,re,s);
}
});
});
/**
 * Checks if a string contains only alpha characters.
 */
cuerdas.core.alpha_QMARK_ = cuerdas.core.char_range_check.call(null,/^[a-zA-Z]+$/);
/**
 * Checks if a string contains only numeric characters.
 */
cuerdas.core.numeric_QMARK_ = cuerdas.core.char_range_check.call(null,/^[0-9]+$/);
/**
 * Checks if a string contains only alphanumeric characters.
 */
cuerdas.core.alpha_numeric_QMARK_ = cuerdas.core.char_range_check.call(null,/^[a-zA-Z0-9]+$/);
/**
 * Removes whitespace or specified characters
 *   from both ends of string.
 */
cuerdas.core.trim = (function cuerdas$core$trim(var_args){
var args56599 = [];
var len__49232__auto___56602 = arguments.length;
var i__49233__auto___56603 = (0);
while(true){
if((i__49233__auto___56603 < len__49232__auto___56602)){
args56599.push((arguments[i__49233__auto___56603]));

var G__56604 = (i__49233__auto___56603 + (1));
i__49233__auto___56603 = G__56604;
continue;
} else {
}
break;
}

var G__56601 = args56599.length;
switch (G__56601) {
case 1:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56599.length)].join('')));

}
});

cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.trim.call(null,s," ");
});

cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if((s == null)){
return null;
} else {
var rxstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.escape_regexp.call(null,chs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
var rxstr__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+$")].join('');
var rx = cljs.core.re_pattern.call(null,rxstr__$1);
return cuerdas.core.replace.call(null,s,rx,"");
}
});

cuerdas.core.trim.cljs$lang$maxFixedArity = 2;

/**
 * Removes whitespace or specified characters
 *   from right side of string.
 */
cuerdas.core.rtrim = (function cuerdas$core$rtrim(var_args){
var args56606 = [];
var len__49232__auto___56609 = arguments.length;
var i__49233__auto___56610 = (0);
while(true){
if((i__49233__auto___56610 < len__49232__auto___56609)){
args56606.push((arguments[i__49233__auto___56610]));

var G__56611 = (i__49233__auto___56610 + (1));
i__49233__auto___56610 = G__56611;
continue;
} else {
}
break;
}

var G__56608 = args56606.length;
switch (G__56608) {
case 1:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56606.length)].join('')));

}
});

cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.rtrim.call(null,s," ");
});

cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if((s == null)){
return null;
} else {
var rxstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.escape_regexp.call(null,chs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
var rxstr__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+$")].join('');
var rx = cljs.core.re_pattern.call(null,rxstr__$1);
return cuerdas.core.replace.call(null,s,rx,"");
}
});

cuerdas.core.rtrim.cljs$lang$maxFixedArity = 2;

/**
 * Removes whitespace or specified characters
 *   from left side of string.
 */
cuerdas.core.ltrim = (function cuerdas$core$ltrim(var_args){
var args56613 = [];
var len__49232__auto___56616 = arguments.length;
var i__49233__auto___56617 = (0);
while(true){
if((i__49233__auto___56617 < len__49232__auto___56616)){
args56613.push((arguments[i__49233__auto___56617]));

var G__56618 = (i__49233__auto___56617 + (1));
i__49233__auto___56617 = G__56618;
continue;
} else {
}
break;
}

var G__56615 = args56613.length;
switch (G__56615) {
case 1:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56613.length)].join('')));

}
});

cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.ltrim.call(null,s," ");
});

cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if((s == null)){
return null;
} else {
var rxstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.escape_regexp.call(null,chs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
var rxstr__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+")].join('');
var rx = cljs.core.re_pattern.call(null,rxstr__$1);
return cuerdas.core.replace.call(null,s,rx,"");
}
});

cuerdas.core.ltrim.cljs$lang$maxFixedArity = 2;

cuerdas.core.strip = cuerdas.core.trim;
cuerdas.core.rstrip = cuerdas.core.rtrim;
cuerdas.core.lstrip = cuerdas.core.ltrim;
/**
 * Strip prefix in more efficient way.
 */
cuerdas.core.strip_prefix = (function cuerdas$core$strip_prefix(s,prefix){
if(cljs.core.truth_(cuerdas.core.starts_with_QMARK_.call(null,s,prefix))){
return cuerdas.core.slice.call(null,s,cljs.core.count.call(null,prefix),cljs.core.count.call(null,s));
} else {
return s;
}
});
/**
 * Strip suffix in more efficient way.
 */
cuerdas.core.strip_suffix = (function cuerdas$core$strip_suffix(s,prefix){
if(cljs.core.truth_(cuerdas.core.ends_with_QMARK_.call(null,s,prefix))){
return cuerdas.core.slice.call(null,s,(0),(cljs.core.count.call(null,s) - cljs.core.count.call(null,prefix)));
} else {
return s;
}
});
/**
 * Repeats string n times.
 */
cuerdas.core.repeat = (function cuerdas$core$repeat(var_args){
var args56620 = [];
var len__49232__auto___56623 = arguments.length;
var i__49233__auto___56624 = (0);
while(true){
if((i__49233__auto___56624 < len__49232__auto___56623)){
args56620.push((arguments[i__49233__auto___56624]));

var G__56625 = (i__49233__auto___56624 + (1));
i__49233__auto___56624 = G__56625;
continue;
} else {
}
break;
}

var G__56622 = args56620.length;
switch (G__56622) {
case 1:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56620.length)].join('')));

}
});

cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.repeat.call(null,s,(1));
});

cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2 = (function (s,n){
if((s == null)){
return null;
} else {
return goog.string.repeat(s,n);
}
});

cuerdas.core.repeat.cljs$lang$maxFixedArity = 2;

/**
 * Escapes characters in the string that are not safe
 * to use in a RegExp.
 */
cuerdas.core.escape_regexp = (function cuerdas$core$escape_regexp(s){
return goog.string.regExpEscape(s);
});
/**
 * Replaces all instance of match with replacement in s.
 *   The replacement is literal (i.e. none of its characters are treated
 *   specially) for all cases above except pattern / string.
 *   In match is pattern instance, replacement can contain $1, $2, etc.
 *   will be substituted with string that matcher the corresponding
 *   parenthesized group in pattern.
 *   If you wish your replacement string to be used literary,
 *   use `(escape-regexp replacement)`.
 *   Example:
 *  (replace "Almost Pig Latin" #"\b(\w)(\w+)\b" "$2$1ay")
 *  ;; => "lmostAay igPay atinLay"
 *   
 */
cuerdas.core.replace = (function cuerdas$core$replace(s,match,replacement){
if((s == null)){
return null;
} else {
return s.replace(cuerdas.core.regexp.call(null,match,"g"),replacement);
}
});
/**
 * Replaces all instance of match with replacement in s.
 */
cuerdas.core.ireplace = (function cuerdas$core$ireplace(s,match,replacement){
if((s == null)){
return null;
} else {
return s.replace(cuerdas.core.regexp.call(null,match,"ig"),replacement);
}
});
/**
 * Replaces first instance of match with replacement in s.
 */
cuerdas.core.replace_first = (function cuerdas$core$replace_first(s,match,replacement){
if((s == null)){
return null;
} else {
return s.replace(cuerdas.core.regexp.call(null,match),replacement);
}
});
/**
 * Replaces first instance of match with replacement in s.
 */
cuerdas.core.ireplace_first = (function cuerdas$core$ireplace_first(s,match,replacement){
if((s == null)){
return null;
} else {
return s.replace(cuerdas.core.regexp.call(null,match,"i"),replacement);
}
});
/**
 * Truncates a string to a certain length and adds '...'
 *   if necessary.
 */
cuerdas.core.prune = (function cuerdas$core$prune(var_args){
var args56627 = [];
var len__49232__auto___56630 = arguments.length;
var i__49233__auto___56631 = (0);
while(true){
if((i__49233__auto___56631 < len__49232__auto___56630)){
args56627.push((arguments[i__49233__auto___56631]));

var G__56632 = (i__49233__auto___56631 + (1));
i__49233__auto___56631 = G__56632;
continue;
} else {
}
break;
}

var G__56629 = args56627.length;
switch (G__56629) {
case 2:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56627.length)].join('')));

}
});

cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2 = (function (s,num){
return cuerdas.core.prune.call(null,s,num,"...");
});

cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3 = (function (s,num,subs){
if((cljs.core.count.call(null,s) <= num)){
return s;
} else {
var tmpl = (function (c){
if(cljs.core.not_EQ_.call(null,cuerdas.core.upper.call(null,c),cuerdas.core.lower.call(null,c))){
return "A";
} else {
return " ";
}
});
var template = cuerdas.core.replace.call(null,cuerdas.core.slice.call(null,s,(0),(num + (1))),/.(?=\W*\w*$)/,tmpl);
var tmp = cuerdas.core.slice.call(null,template,(cljs.core.count.call(null,template) - (2)));
var template__$1 = (cljs.core.truth_(tmp.match(/\w\w/))?cuerdas.core.replace_first.call(null,template,/\s*\S+$/,""):cuerdas.core.rtrim.call(null,cuerdas.core.slice.call(null,template,(0),(cljs.core.count.call(null,template) - (1)))));
if((cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(template__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subs)].join('')) > cljs.core.count.call(null,s))){
return s;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.call(null,s,(0),cljs.core.count.call(null,template__$1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subs)].join('');
}
}
});

cuerdas.core.prune.cljs$lang$maxFixedArity = 3;

/**
 * Takes a string and replaces newlines with a space.
 *   Multiple lines are replaced with a single space.
 */
cuerdas.core.strip_newlines = (function cuerdas$core$strip_newlines(s){
return cuerdas.core.replace.call(null,s,/(\r\n|\r|\n)+/," ");
});
/**
 * Splits a string on a separator a limited
 *   number of times. The separator can be a string
 *   or Pattern (clj) / RegExp (cljs) instance.
 */
cuerdas.core.split = (function cuerdas$core$split(var_args){
var args56634 = [];
var len__49232__auto___56637 = arguments.length;
var i__49233__auto___56638 = (0);
while(true){
if((i__49233__auto___56638 < len__49232__auto___56637)){
args56634.push((arguments[i__49233__auto___56638]));

var G__56639 = (i__49233__auto___56638 + (1));
i__49233__auto___56638 = G__56639;
continue;
} else {
}
break;
}

var G__56636 = args56634.length;
switch (G__56636) {
case 1:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56634.length)].join('')));

}
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.split.call(null,s,/\s/,null);
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$2 = (function (s,sep){
return cuerdas.core.split.call(null,s,sep,null);
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$3 = (function (s,sep,num){
if((s == null)){
return s;
} else {
if(cljs.core.regexp_QMARK_.call(null,sep)){
return clojure.string.split.call(null,s,sep,num);
} else {
return clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,sep),num);

}
}
});

cuerdas.core.split.cljs$lang$maxFixedArity = 3;

/**
 * Return string reversed.
 */
cuerdas.core.reverse = (function cuerdas$core$reverse(s){
if((s == null)){
return null;
} else {
return s.split("").reverse().join("");
}
});
/**
 * Split a string in a seq of chars.
 */
cuerdas.core.chars = (function cuerdas$core$chars(s){
if((s == null)){
return null;
} else {
return cljs.core.js__GT_clj.call(null,s.split(""));
}
});
/**
 * Return a list of the lines in the string.
 */
cuerdas.core.lines = (function cuerdas$core$lines(s){
return cuerdas.core.split.call(null,s,/\n|\r\n/);
});
/**
 * Returns a new string joining a list of strings with a newline char (\n).
 */
cuerdas.core.unlines = (function cuerdas$core$unlines(s){
if((s == null)){
return s;
} else {
return clojure.string.join.call(null,"\n",s);
}
});
/**
 * Returns a vector of the words in the string.
 */
cuerdas.core.words = (function cuerdas$core$words(var_args){
var args56641 = [];
var len__49232__auto___56644 = arguments.length;
var i__49233__auto___56645 = (0);
while(true){
if((i__49233__auto___56645 < len__49232__auto___56644)){
args56641.push((arguments[i__49233__auto___56645]));

var G__56646 = (i__49233__auto___56645 + (1));
i__49233__auto___56645 = G__56646;
continue;
} else {
}
break;
}

var G__56643 = args56641.length;
switch (G__56643) {
case 2:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56641.length)].join('')));

}
});

cuerdas.core.words.cljs$core$IFn$_invoke$arity$2 = (function (s,word_re){
if((s == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.vec.call(null,cljs.core.re_seq.call(null,word_re,s));
}
});

cuerdas.core.words.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.words.call(null,s,/[a-zA-Z0-9_-]+/);
});

cuerdas.core.words.cljs$lang$maxFixedArity = 2;

/**
 * Simple string interpolation.
 */
cuerdas.core.format = (function cuerdas$core$format(var_args){
var args__49239__auto__ = [];
var len__49232__auto___56650 = arguments.length;
var i__49233__auto___56651 = (0);
while(true){
if((i__49233__auto___56651 < len__49232__auto___56650)){
args__49239__auto__.push((arguments[i__49233__auto___56651]));

var G__56652 = (i__49233__auto___56651 + (1));
i__49233__auto___56651 = G__56652;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (s,args){
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,args),(1))) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))){
var params = cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,args));
return cuerdas.core.replace.call(null,s,/%\(\w+\)s/,((function (params){
return (function (match){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((params[cuerdas.core.slice.call(null,match,(2),(-2))]))].join('');
});})(params))
);
} else {
var params = cljs.core.clj__GT_js.call(null,args);
return cuerdas.core.replace.call(null,s,cuerdas.core.regexp.call(null,"%s","g"),((function (params){
return (function (_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(params.shift())].join('');
});})(params))
);
}
});

cuerdas.core.format.cljs$lang$maxFixedArity = (1);

cuerdas.core.format.cljs$lang$applyTo = (function (seq56648){
var G__56649 = cljs.core.first.call(null,seq56648);
var seq56648__$1 = cljs.core.next.call(null,seq56648);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(G__56649,seq56648__$1);
});

/**
 * Joins strings together with given separator.
 */
cuerdas.core.join = (function cuerdas$core$join(var_args){
var args56653 = [];
var len__49232__auto___56656 = arguments.length;
var i__49233__auto___56657 = (0);
while(true){
if((i__49233__auto___56657 < len__49232__auto___56656)){
args56653.push((arguments[i__49233__auto___56657]));

var G__56658 = (i__49233__auto___56657 + (1));
i__49233__auto___56657 = G__56658;
continue;
} else {
}
break;
}

var G__56655 = args56653.length;
switch (G__56655) {
case 1:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56653.length)].join('')));

}
});

cuerdas.core.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});

cuerdas.core.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});

cuerdas.core.join.cljs$lang$maxFixedArity = 2;

/**
 * Surround a string with another string.
 */
cuerdas.core.surround = (function cuerdas$core$surround(s,wrap){
if((s == null)){
return null;
} else {
return cuerdas.core.join.call(null,"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,s,wrap], null));
}
});
/**
 * Unsurround a string surrounded by another.
 */
cuerdas.core.unsurround = (function cuerdas$core$unsurround(s,surrounding){
var length = cljs.core.count.call(null,surrounding);
var fstr = cuerdas.core.slice.call(null,s,(0),length);
var slength = cljs.core.count.call(null,s);
var rightend = (slength - length);
var lstr = cuerdas.core.slice.call(null,s,rightend,slength);
if((cljs.core._EQ_.call(null,fstr,surrounding)) && (cljs.core._EQ_.call(null,lstr,surrounding))){
return cuerdas.core.slice.call(null,s,length,rightend);
} else {
return s;
}
});
/**
 * Quotes a string.
 */
cuerdas.core.quote = (function cuerdas$core$quote(var_args){
var args56660 = [];
var len__49232__auto___56663 = arguments.length;
var i__49233__auto___56664 = (0);
while(true){
if((i__49233__auto___56664 < len__49232__auto___56663)){
args56660.push((arguments[i__49233__auto___56664]));

var G__56665 = (i__49233__auto___56664 + (1));
i__49233__auto___56664 = G__56665;
continue;
} else {
}
break;
}

var G__56662 = args56660.length;
switch (G__56662) {
case 1:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56660.length)].join('')));

}
});

cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.surround.call(null,s,"\"");
});

cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.surround.call(null,s,qchar);
});

cuerdas.core.quote.cljs$lang$maxFixedArity = 2;

/**
 * Unquote a string.
 */
cuerdas.core.unquote = (function cuerdas$core$unquote(var_args){
var args56667 = [];
var len__49232__auto___56670 = arguments.length;
var i__49233__auto___56671 = (0);
while(true){
if((i__49233__auto___56671 < len__49232__auto___56670)){
args56667.push((arguments[i__49233__auto___56671]));

var G__56672 = (i__49233__auto___56671 + (1));
i__49233__auto___56671 = G__56672;
continue;
} else {
}
break;
}

var G__56669 = args56667.length;
switch (G__56669) {
case 1:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56667.length)].join('')));

}
});

cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.unsurround.call(null,s,"\"");
});

cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.unsurround.call(null,s,qchar);
});

cuerdas.core.unquote.cljs$lang$maxFixedArity = 2;

/**
 * Converts a underscored or camelized string
 *   into an dasherized one.
 */
cuerdas.core.dasherize = (function cuerdas$core$dasherize(s){
var G__56675 = s;
var G__56675__$1 = (((G__56675 == null))?null:cuerdas.core.trim.call(null,G__56675));
var G__56675__$2 = (((G__56675__$1 == null))?null:cuerdas.core.replace.call(null,G__56675__$1,/([A-Z]+)/,"-$1"));
var G__56675__$3 = (((G__56675__$2 == null))?null:cuerdas.core.replace.call(null,G__56675__$2,/[-_\s]+/,"-"));
var G__56675__$4 = (((G__56675__$3 == null))?null:cuerdas.core.strip_prefix.call(null,G__56675__$3,"-"));
if((G__56675__$4 == null)){
return null;
} else {
return cuerdas.core.lower.call(null,G__56675__$4);
}
});
/**
 * Transform text into a URL slug.
 */
cuerdas.core.slugify = (function cuerdas$core$slugify(s){
if(cljs.core.truth_(s)){
var from = "\u0105\u00E0\u00E1\u00E4\u00E2\u00E3\u00E5\u00E6\u0103\u0107\u010D\u0109\u0119\u00E8\u00E9\u00EB\u00EA\u011D\u0125\u00EC\u00ED\u00EF\u00EE\u0135\u0142\u013E\u0144\u0148\u00F2\u00F3\u00F6\u0151\u00F4\u00F5\u00F0\u00F8\u015B\u0219\u0161\u015D\u0165\u021B\u016D\u00F9\u00FA\u00FC\u0171\u00FB\u00F1\u00FF\u00FD\u00E7\u017C\u017A\u017E";
var to = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz";
var regex = cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.escape_regexp.call(null,from)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''));
return cuerdas.core.dasherize.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.lower.call(null,s),regex,((function (from,to,regex){
return (function (c){
var index = from.indexOf(c);
var res = to.charAt(index);
if(cljs.core.truth_(cuerdas.core.empty_QMARK_.call(null,res))){
return "-";
} else {
return res;
}
});})(from,to,regex))
),/[^\w\s-]/,""));
} else {
return null;
}
});
/**
 * Converts first letter of the string to uppercase.
 */
cuerdas.core.capitalize = (function cuerdas$core$capitalize(s){
if((s == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.upper.call(null,s.charAt((0)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.call(null,s,(1)))].join('');
}
});
/**
 * Converts a string from selector-case to camelCase.
 */
cuerdas.core.camelize = (function cuerdas$core$camelize(s){
var G__56681 = s;
var G__56681__$1 = (((G__56681 == null))?null:cuerdas.core.trim.call(null,G__56681));
if((G__56681__$1 == null)){
return null;
} else {
return cuerdas.core.replace.call(null,G__56681__$1,cuerdas.core.regexp.call(null,/[-_\s]+(.)?/,"g"),((function (G__56681,G__56681__$1){
return (function (p__56682){
var vec__56683 = p__56682;
var match = cljs.core.nth.call(null,vec__56683,(0),null);
var c = cljs.core.nth.call(null,vec__56683,(1),null);
if(cljs.core.truth_(c)){
return cuerdas.core.upper.call(null,c);
} else {
return "";
}
});})(G__56681,G__56681__$1))
);
}
});
/**
 * Converts a camelized or dasherized string
 *   into an underscored one.
 */
cuerdas.core.underscored = (function cuerdas$core$underscored(s){
var G__56687 = s;
var G__56687__$1 = (((G__56687 == null))?null:cuerdas.core.trim.call(null,G__56687));
var G__56687__$2 = (((G__56687__$1 == null))?null:cuerdas.core.replace.call(null,G__56687__$1,cuerdas.core.regexp.call(null,/([a-z\d])([A-Z]+)/,"g"),"$1_$2"));
var G__56687__$3 = (((G__56687__$2 == null))?null:cuerdas.core.replace.call(null,G__56687__$2,cuerdas.core.regexp.call(null,/[-\s]+/,"g"),"_"));
if((G__56687__$3 == null)){
return null;
} else {
return cuerdas.core.lower.call(null,G__56687__$3);
}
});
/**
 * Converts an underscored, camelized, or
 *   dasherized string into a humanized one.
 */
cuerdas.core.humanize = (function cuerdas$core$humanize(s){
var G__56689 = s;
var G__56689__$1 = (((G__56689 == null))?null:cuerdas.core.underscored.call(null,G__56689));
var G__56689__$2 = (((G__56689__$1 == null))?null:cuerdas.core.replace.call(null,G__56689__$1,/_id$/,""));
var G__56689__$3 = (((G__56689__$2 == null))?null:cuerdas.core.replace.call(null,G__56689__$2,cuerdas.core.regexp.call(null,"_","g")," "));
if((G__56689__$3 == null)){
return null;
} else {
return cuerdas.core.capitalize.call(null,G__56689__$3);
}
});
/**
 * Converts a string into TitleCase.
 */
cuerdas.core.titleize = (function cuerdas$core$titleize(var_args){
var args56690 = [];
var len__49232__auto___56693 = arguments.length;
var i__49233__auto___56694 = (0);
while(true){
if((i__49233__auto___56694 < len__49232__auto___56693)){
args56690.push((arguments[i__49233__auto___56694]));

var G__56695 = (i__49233__auto___56694 + (1));
i__49233__auto___56694 = G__56695;
continue;
} else {
}
break;
}

var G__56692 = args56690.length;
switch (G__56692) {
case 1:
return cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56690.length)].join('')));

}
});

cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$1 = (function (s){
if((s == null)){
return null;
} else {
return goog.string.toTitleCase(s);
}
});

cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$2 = (function (s,delimeters){
return goog.string.toTitleCase(s,delimeters);
});

cuerdas.core.titleize.cljs$lang$maxFixedArity = 2;

/**
 * Converts string to camelized class name. First letter is always upper case.
 */
cuerdas.core.classify = (function cuerdas$core$classify(s){
var G__56698 = s;
var G__56698__$1 = (((G__56698 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56698)].join(''));
var G__56698__$2 = (((G__56698__$1 == null))?null:cuerdas.core.replace.call(null,G__56698__$1,/[\W_]/," "));
var G__56698__$3 = (((G__56698__$2 == null))?null:cuerdas.core.camelize.call(null,G__56698__$2));
var G__56698__$4 = (((G__56698__$3 == null))?null:cuerdas.core.replace.call(null,G__56698__$3,/\s/,""));
if((G__56698__$4 == null)){
return null;
} else {
return cuerdas.core.capitalize.call(null,G__56698__$4);
}
});
cuerdas.core.parse_number_impl = (function cuerdas$core$parse_number_impl(source){
var or__48119__auto__ = (source * (1));
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
return (0);
}
});
/**
 * General purpose function for parse number like
 *   string to number. It works with both integers
 *   and floats.
 */
cuerdas.core.parse_number = (function cuerdas$core$parse_number(var_args){
var args56699 = [];
var len__49232__auto___56702 = arguments.length;
var i__49233__auto___56703 = (0);
while(true){
if((i__49233__auto___56703 < len__49232__auto___56702)){
args56699.push((arguments[i__49233__auto___56703]));

var G__56704 = (i__49233__auto___56703 + (1));
i__49233__auto___56703 = G__56704;
continue;
} else {
}
break;
}

var G__56701 = args56699.length;
switch (G__56701) {
case 1:
return cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56699.length)].join('')));

}
});

cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.parse_number.call(null,s,(0));
});

cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$2 = (function (s,precision){
if((s == null)){
return (0);
} else {
var s__$1 = cuerdas.core.trim.call(null,s);
var rx = /^-?\d+(?:\.\d+)?$/;
if(cljs.core.truth_(s__$1.match(rx))){
return cuerdas.core.parse_number_impl.call(null,cuerdas.core.parse_number_impl.call(null,s__$1).toFixed(precision));
} else {
return NaN;
}
}
});

cuerdas.core.parse_number.cljs$lang$maxFixedArity = 2;

/**
 * Return the float value, wraps parseFloat.
 */
cuerdas.core.parse_float = (function cuerdas$core$parse_float(var_args){
var args56706 = [];
var len__49232__auto___56709 = arguments.length;
var i__49233__auto___56710 = (0);
while(true){
if((i__49233__auto___56710 < len__49232__auto___56709)){
args56706.push((arguments[i__49233__auto___56710]));

var G__56711 = (i__49233__auto___56710 + (1));
i__49233__auto___56710 = G__56711;
continue;
} else {
}
break;
}

var G__56708 = args56706.length;
switch (G__56708) {
case 1:
return cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56706.length)].join('')));

}
});

cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$1 = (function (s){
return parseFloat(s);
});

cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$2 = (function (s,precision){
if((precision == null)){
return parseFloat(s);
} else {
return parseFloat(parseFloat(s).toFixed(precision));
}
});

cuerdas.core.parse_float.cljs$lang$maxFixedArity = 2;

/**
 * Return the number value in integer form.
 */
cuerdas.core.parse_int = (function cuerdas$core$parse_int(s){
var rx = cuerdas.core.regexp.call(null,"^\\s*-?0x","i");
if(cljs.core.truth_(rx.test(s))){
return parseInt(s,(16));
} else {
return parseInt(s,(10));
}
});
/**
 * Returns true if s can be found in coll.
 */
cuerdas.core.one_of_QMARK_ = (function cuerdas$core$one_of_QMARK_(coll,s){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__56713_SHARP_){
return cljs.core._EQ_.call(null,p1__56713_SHARP_,s);
}),coll));
});
/**
 * Returns true for 1/on/true/yes string values (case-insensitive),
 *   false otherwise.
 */
cuerdas.core.to_bool = (function cuerdas$core$to_bool(s){
return cuerdas.core.one_of_QMARK_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","on","true","yes"], null),cuerdas.core.lower.call(null,s));
});
/**
 * Pads the str with characters until the total string
 *   length is equal to the passed length parameter. By
 *   default, pads on the left with the space char.
 */
cuerdas.core.pad = (function cuerdas$core$pad(var_args){
var args__49239__auto__ = [];
var len__49232__auto___56725 = arguments.length;
var i__49233__auto___56726 = (0);
while(true){
if((i__49233__auto___56726 < len__49232__auto___56725)){
args__49239__auto__.push((arguments[i__49233__auto___56726]));

var G__56727 = (i__49233__auto___56726 + (1));
i__49233__auto___56726 = G__56727;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__56716){
var vec__56717 = p__56716;
var map__56720 = cljs.core.nth.call(null,vec__56717,(0),null);
var map__56720__$1 = ((((!((map__56720 == null)))?((((map__56720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56720):map__56720);
var length = cljs.core.get.call(null,map__56720__$1,new cljs.core.Keyword(null,"length","length",588987862),(0));
var padding = cljs.core.get.call(null,map__56720__$1,new cljs.core.Keyword(null,"padding","padding",1660304693)," ");
var type = cljs.core.get.call(null,map__56720__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"left","left",-399115937));
if((s == null)){
return null;
} else {
var padding__$1 = cuerdas.core.slice.call(null,padding,(0),(1));
var padlen = (length - cljs.core.count.call(null,s));
var pred__56722 = cljs.core._EQ_;
var expr__56723 = type;
if(cljs.core.truth_(pred__56722.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__56723))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.repeat.call(null,padding__$1,padlen))].join('');
} else {
if(cljs.core.truth_(pred__56722.call(null,new cljs.core.Keyword(null,"both","both",-393648840),expr__56723))){
var first = cuerdas.core.repeat.call(null,padding__$1,Math.ceil((padlen / (2))));
var second = cuerdas.core.repeat.call(null,padding__$1,Math.floor((padlen / (2))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(first),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(second)].join('');
} else {
if(cljs.core.truth_(pred__56722.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__56723))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.repeat.call(null,padding__$1,padlen)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__56723)].join('')));
}
}
}
}
});

cuerdas.core.pad.cljs$lang$maxFixedArity = (1);

cuerdas.core.pad.cljs$lang$applyTo = (function (seq56714){
var G__56715 = cljs.core.first.call(null,seq56714);
var seq56714__$1 = cljs.core.next.call(null,seq56714);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic(G__56715,seq56714__$1);
});

/**
 * Converts all adjacent whitespace characters
 *   to a single space.
 */
cuerdas.core.collapse_whitespace = (function cuerdas$core$collapse_whitespace(s){
var G__56729 = s;
var G__56729__$1 = (((G__56729 == null))?null:cuerdas.core.replace.call(null,G__56729,/[\s\xa0]+/," "));
if((G__56729__$1 == null)){
return null;
} else {
return cuerdas.core.replace.call(null,G__56729__$1,/^\s+|\s+$/,"");
}
});
cuerdas.core.html_escape_chars = new cljs.core.PersistentArrayMap(null, 5, ["lt","<","gt",">","quot","\"","amp","&","apos","'"], null);
cuerdas.core.reversed_html_escape_chars = clojure.set.map_invert.call(null,cuerdas.core.html_escape_chars);
cuerdas.core.escape_html = (function cuerdas$core$escape_html(s){

var escapechars = cljs.core.assoc.call(null,cuerdas.core.reversed_html_escape_chars,"'","#39");
var rx = cljs.core.re_pattern.call(null,"[&<>\"']");
return cuerdas.core.replace.call(null,s,rx,((function (escapechars,rx){
return (function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("&"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,escapechars,x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
});})(escapechars,rx))
);
});
/**
 * Converts entity characters to HTML equivalents.
 */
cuerdas.core.unescape_html = (function cuerdas$core$unescape_html(s){
return cuerdas.core.replace.call(null,s,/\&(\w+);/,(function (x,y){
if(cljs.core.contains_QMARK_.call(null,cuerdas.core.html_escape_chars,y)){
return cljs.core.get.call(null,cuerdas.core.html_escape_chars,y);
} else {
return y;

}
}));
});
cuerdas.core.strip_tags_impl = (function cuerdas$core$strip_tags_impl(s,tags,mappings){
var kwdize = cljs.core.comp.call(null,cljs.core.keyword,cuerdas.core.lower,cljs.core.name);
var tags__$1 = (((tags == null))?tags:((typeof tags === 'string')?cljs.core.PersistentHashSet.createAsIfByAssoc([kwdize.call(null,tags)]):((cljs.core.sequential_QMARK_.call(null,tags))?cljs.core.set.call(null,cljs.core.map.call(null,kwdize,tags)):null)));
var rx = cljs.core.re_pattern.call(null,"<\\/?([^<>]*)>");
var replacer = (((tags__$1 == null))?((function (kwdize,tags__$1,rx){
return (function (match,tag){
var tag__$1 = kwdize.call(null,tag);
return cljs.core.get.call(null,mappings,tag__$1,"");
});})(kwdize,tags__$1,rx))
:((function (kwdize,tags__$1,rx){
return (function (match,tag){
var tag__$1 = kwdize.call(null,tag);
if(cljs.core.truth_(tags__$1.call(null,tag__$1))){
return cljs.core.get.call(null,mappings,tag__$1,"");
} else {
return match;
}
});})(kwdize,tags__$1,rx))
);
return cuerdas.core.replace.call(null,s,rx,replacer);
});
/**
 * Remove html tags from string.
 */
cuerdas.core.strip_tags = (function cuerdas$core$strip_tags(var_args){
var args56730 = [];
var len__49232__auto___56733 = arguments.length;
var i__49233__auto___56734 = (0);
while(true){
if((i__49233__auto___56734 < len__49232__auto___56733)){
args56730.push((arguments[i__49233__auto___56734]));

var G__56735 = (i__49233__auto___56734 + (1));
i__49233__auto___56734 = G__56735;
continue;
} else {
}
break;
}

var G__56732 = args56730.length;
switch (G__56732) {
case 1:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56730.length)].join('')));

}
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.strip_tags_impl.call(null,s,null,cljs.core.PersistentArrayMap.EMPTY);
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2 = (function (s,tags){
if(cljs.core.map_QMARK_.call(null,tags)){
return cuerdas.core.strip_tags_impl.call(null,s,null,tags);
} else {
return cuerdas.core.strip_tags_impl.call(null,s,tags,cljs.core.PersistentArrayMap.EMPTY);
}
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3 = (function (s,tags,mapping){
return cuerdas.core.strip_tags_impl.call(null,s,tags,mapping);
});

cuerdas.core.strip_tags.cljs$lang$maxFixedArity = 3;

/**
 * Trim and replace multiple spaces with
 *   a single space.
 */
cuerdas.core.clean = (function cuerdas$core$clean(s){
return cuerdas.core.replace.call(null,cuerdas.core.trim.call(null,s),/\s+/," ");
});
/**
 * Find string that is nested in between two strings. Return first match
 */
cuerdas.core.substr_between = (function cuerdas$core$substr_between(s,prefix,suffix){
if((s == null)){
return null;
} else {
if((prefix == null)){
return null;
} else {
if((suffix == null)){
return null;
} else {
if(cljs.core.not.call(null,cuerdas.core.contains_QMARK_.call(null,s,prefix))){
return null;
} else {
if(cljs.core.not.call(null,cuerdas.core.contains_QMARK_.call(null,s,suffix))){
return null;
} else {
var G__56738 = s;
var G__56738__$1 = (((G__56738 == null))?null:cuerdas.core.split.call(null,G__56738,prefix));
var G__56738__$2 = (((G__56738__$1 == null))?null:cljs.core.second.call(null,G__56738__$1));
var G__56738__$3 = (((G__56738__$2 == null))?null:cuerdas.core.split.call(null,G__56738__$2,suffix));
if((G__56738__$3 == null)){
return null;
} else {
return cljs.core.first.call(null,G__56738__$3);
}

}
}
}
}
}
});

//# sourceMappingURL=core.js.map