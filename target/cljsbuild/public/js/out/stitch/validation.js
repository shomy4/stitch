// Compiled by ClojureScript 1.9.495 {}
goog.provide('stitch.validation');
goog.require('cljs.core');
goog.require('struct.core');
goog.require('bouncer.core');
goog.require('bouncer.validators');
stitch.validation.registration_errors = (function stitch$validation$registration_errors(p__56935){
var map__56938 = p__56935;
var map__56938__$1 = ((((!((map__56938 == null)))?((((map__56938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56938):map__56938);
var params = map__56938__$1;
var pass_confirm = cljs.core.get.call(null,map__56938__$1,new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590));
return cljs.core.first.call(null,bouncer.core.validate.call(null,params,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Username is required"], null)], null),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Password is required"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.min_count,(7),new cljs.core.Keyword(null,"message","message",-406056002),"Password must contain at least 7 chars!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_,pass_confirm,new cljs.core.Keyword(null,"message","message",-406056002),"Passwords do not match!"], null)], null)));
});

//# sourceMappingURL=validation.js.map