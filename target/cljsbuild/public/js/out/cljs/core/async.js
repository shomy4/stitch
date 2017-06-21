// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args58191 = [];
var len__49232__auto___58197 = arguments.length;
var i__49233__auto___58198 = (0);
while(true){
if((i__49233__auto___58198 < len__49232__auto___58197)){
args58191.push((arguments[i__49233__auto___58198]));

var G__58199 = (i__49233__auto___58198 + (1));
i__49233__auto___58198 = G__58199;
continue;
} else {
}
break;
}

var G__58193 = args58191.length;
switch (G__58193) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58191.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async58194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58194 = (function (f,blockable,meta58195){
this.f = f;
this.blockable = blockable;
this.meta58195 = meta58195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58196,meta58195__$1){
var self__ = this;
var _58196__$1 = this;
return (new cljs.core.async.t_cljs$core$async58194(self__.f,self__.blockable,meta58195__$1));
});

cljs.core.async.t_cljs$core$async58194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58196){
var self__ = this;
var _58196__$1 = this;
return self__.meta58195;
});

cljs.core.async.t_cljs$core$async58194.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async58194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async58194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async58194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58195","meta58195",1831438296,null)], null);
});

cljs.core.async.t_cljs$core$async58194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58194";

cljs.core.async.t_cljs$core$async58194.cljs$lang$ctorPrWriter = (function (this__48730__auto__,writer__48731__auto__,opt__48732__auto__){
return cljs.core._write.call(null,writer__48731__auto__,"cljs.core.async/t_cljs$core$async58194");
});

cljs.core.async.__GT_t_cljs$core$async58194 = (function cljs$core$async$__GT_t_cljs$core$async58194(f__$1,blockable__$1,meta58195){
return (new cljs.core.async.t_cljs$core$async58194(f__$1,blockable__$1,meta58195));
});

}

return (new cljs.core.async.t_cljs$core$async58194(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args58203 = [];
var len__49232__auto___58206 = arguments.length;
var i__49233__auto___58207 = (0);
while(true){
if((i__49233__auto___58207 < len__49232__auto___58206)){
args58203.push((arguments[i__49233__auto___58207]));

var G__58208 = (i__49233__auto___58207 + (1));
i__49233__auto___58207 = G__58208;
continue;
} else {
}
break;
}

var G__58205 = args58203.length;
switch (G__58205) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58203.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args58210 = [];
var len__49232__auto___58213 = arguments.length;
var i__49233__auto___58214 = (0);
while(true){
if((i__49233__auto___58214 < len__49232__auto___58213)){
args58210.push((arguments[i__49233__auto___58214]));

var G__58215 = (i__49233__auto___58214 + (1));
i__49233__auto___58214 = G__58215;
continue;
} else {
}
break;
}

var G__58212 = args58210.length;
switch (G__58212) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58210.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args58217 = [];
var len__49232__auto___58220 = arguments.length;
var i__49233__auto___58221 = (0);
while(true){
if((i__49233__auto___58221 < len__49232__auto___58220)){
args58217.push((arguments[i__49233__auto___58221]));

var G__58222 = (i__49233__auto___58221 + (1));
i__49233__auto___58221 = G__58222;
continue;
} else {
}
break;
}

var G__58219 = args58217.length;
switch (G__58219) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58217.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_58224 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_58224);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_58224,ret){
return (function (){
return fn1.call(null,val_58224);
});})(val_58224,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args58225 = [];
var len__49232__auto___58228 = arguments.length;
var i__49233__auto___58229 = (0);
while(true){
if((i__49233__auto___58229 < len__49232__auto___58228)){
args58225.push((arguments[i__49233__auto___58229]));

var G__58230 = (i__49233__auto___58229 + (1));
i__49233__auto___58229 = G__58230;
continue;
} else {
}
break;
}

var G__58227 = args58225.length;
switch (G__58227) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58225.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__49042__auto___58232 = n;
var x_58233 = (0);
while(true){
if((x_58233 < n__49042__auto___58232)){
(a[x_58233] = (0));

var G__58234 = (x_58233 + (1));
x_58233 = G__58234;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__58235 = (i + (1));
i = G__58235;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async58239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58239 = (function (flag,meta58240){
this.flag = flag;
this.meta58240 = meta58240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_58241,meta58240__$1){
var self__ = this;
var _58241__$1 = this;
return (new cljs.core.async.t_cljs$core$async58239(self__.flag,meta58240__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_58241){
var self__ = this;
var _58241__$1 = this;
return self__.meta58240;
});})(flag))
;

cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async58239.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58240","meta58240",-31198946,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async58239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58239";

cljs.core.async.t_cljs$core$async58239.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__48730__auto__,writer__48731__auto__,opt__48732__auto__){
return cljs.core._write.call(null,writer__48731__auto__,"cljs.core.async/t_cljs$core$async58239");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async58239 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58239(flag__$1,meta58240){
return (new cljs.core.async.t_cljs$core$async58239(flag__$1,meta58240));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async58239(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async58245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58245 = (function (flag,cb,meta58246){
this.flag = flag;
this.cb = cb;
this.meta58246 = meta58246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58247,meta58246__$1){
var self__ = this;
var _58247__$1 = this;
return (new cljs.core.async.t_cljs$core$async58245(self__.flag,self__.cb,meta58246__$1));
});

cljs.core.async.t_cljs$core$async58245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58247){
var self__ = this;
var _58247__$1 = this;
return self__.meta58246;
});

cljs.core.async.t_cljs$core$async58245.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58245.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async58245.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async58245.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async58245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58246","meta58246",-1903679749,null)], null);
});

cljs.core.async.t_cljs$core$async58245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58245";

cljs.core.async.t_cljs$core$async58245.cljs$lang$ctorPrWriter = (function (this__48730__auto__,writer__48731__auto__,opt__48732__auto__){
return cljs.core._write.call(null,writer__48731__auto__,"cljs.core.async/t_cljs$core$async58245");
});

cljs.core.async.__GT_t_cljs$core$async58245 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58245(flag__$1,cb__$1,meta58246){
return (new cljs.core.async.t_cljs$core$async58245(flag__$1,cb__$1,meta58246));
});

}

return (new cljs.core.async.t_cljs$core$async58245(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58248_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58248_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58249_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58249_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__48119__auto__ = wport;
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
return port;
}
})()], null));
} else {
var G__58250 = (i + (1));
i = G__58250;
continue;
}
} else {
return null;
}
break;
}
})();
var or__48119__auto__ = ret;
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__48107__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__48107__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__48107__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__49239__auto__ = [];
var len__49232__auto___58256 = arguments.length;
var i__49233__auto___58257 = (0);
while(true){
if((i__49233__auto___58257 < len__49232__auto___58256)){
args__49239__auto__.push((arguments[i__49233__auto___58257]));

var G__58258 = (i__49233__auto___58257 + (1));
i__49233__auto___58257 = G__58258;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((1) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49240__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58253){
var map__58254 = p__58253;
var map__58254__$1 = ((((!((map__58254 == null)))?((((map__58254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58254):map__58254);
var opts = map__58254__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58251){
var G__58252 = cljs.core.first.call(null,seq58251);
var seq58251__$1 = cljs.core.next.call(null,seq58251);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__58252,seq58251__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args58259 = [];
var len__49232__auto___58309 = arguments.length;
var i__49233__auto___58310 = (0);
while(true){
if((i__49233__auto___58310 < len__49232__auto___58309)){
args58259.push((arguments[i__49233__auto___58310]));

var G__58311 = (i__49233__auto___58310 + (1));
i__49233__auto___58310 = G__58311;
continue;
} else {
}
break;
}

var G__58261 = args58259.length;
switch (G__58261) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58259.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__58146__auto___58313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___58313){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___58313){
return (function (state_58285){
var state_val_58286 = (state_58285[(1)]);
if((state_val_58286 === (7))){
var inst_58281 = (state_58285[(2)]);
var state_58285__$1 = state_58285;
var statearr_58287_58314 = state_58285__$1;
(statearr_58287_58314[(2)] = inst_58281);

(statearr_58287_58314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58286 === (1))){
var state_58285__$1 = state_58285;
var statearr_58288_58315 = state_58285__$1;
(statearr_58288_58315[(2)] = null);

(statearr_58288_58315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58286 === (4))){
var inst_58264 = (state_58285[(7)]);
var inst_58264__$1 = (state_58285[(2)]);
var inst_58265 = (inst_58264__$1 == null);
var state_58285__$1 = (function (){var statearr_58289 = state_58285;
(statearr_58289[(7)] = inst_58264__$1);

return statearr_58289;
})();
if(cljs.core.truth_(inst_58265)){
var statearr_58290_58316 = state_58285__$1;
(statearr_58290_58316[(1)] = (5));

} else {
var statearr_58291_58317 = state_58285__$1;
(statearr_58291_58317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58286 === (13))){
var state_58285__$1 = state_58285;
var statearr_58292_58318 = state_58285__$1;
(statearr_58292_58318[(2)] = null);

(statearr_58292_58318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58286 === (6))){
var inst_58264 = (state_58285[(7)]);
var state_58285__$1 = state_58285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58285__$1,(11),to,inst_58264);
} else {
if((state_val_58286 === (3))){
var inst_58283 = (state_58285[(2)]);
var state_58285__$1 = state_58285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58285__$1,inst_58283);
} else {
if((state_val_58286 === (12))){
var state_58285__$1 = state_58285;
var statearr_58293_58319 = state_58285__$1;
(statearr_58293_58319[(2)] = null);

(statearr_58293_58319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58286 === (2))){
var state_58285__$1 = state_58285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58285__$1,(4),from);
} else {
if((state_val_58286 === (11))){
var inst_58274 = (state_58285[(2)]);
var state_58285__$1 = state_58285;
if(cljs.core.truth_(inst_58274)){
var statearr_58294_58320 = state_58285__$1;
(statearr_58294_58320[(1)] = (12));

} else {
var statearr_58295_58321 = state_58285__$1;
(statearr_58295_58321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58286 === (9))){
var state_58285__$1 = state_58285;
var statearr_58296_58322 = state_58285__$1;
(statearr_58296_58322[(2)] = null);

(statearr_58296_58322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58286 === (5))){
var state_58285__$1 = state_58285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58297_58323 = state_58285__$1;
(statearr_58297_58323[(1)] = (8));

} else {
var statearr_58298_58324 = state_58285__$1;
(statearr_58298_58324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58286 === (14))){
var inst_58279 = (state_58285[(2)]);
var state_58285__$1 = state_58285;
var statearr_58299_58325 = state_58285__$1;
(statearr_58299_58325[(2)] = inst_58279);

(statearr_58299_58325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58286 === (10))){
var inst_58271 = (state_58285[(2)]);
var state_58285__$1 = state_58285;
var statearr_58300_58326 = state_58285__$1;
(statearr_58300_58326[(2)] = inst_58271);

(statearr_58300_58326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58286 === (8))){
var inst_58268 = cljs.core.async.close_BANG_.call(null,to);
var state_58285__$1 = state_58285;
var statearr_58301_58327 = state_58285__$1;
(statearr_58301_58327[(2)] = inst_58268);

(statearr_58301_58327[(1)] = (10));


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
});})(c__58146__auto___58313))
;
return ((function (switch__58034__auto__,c__58146__auto___58313){
return (function() {
var cljs$core$async$state_machine__58035__auto__ = null;
var cljs$core$async$state_machine__58035__auto____0 = (function (){
var statearr_58305 = [null,null,null,null,null,null,null,null];
(statearr_58305[(0)] = cljs$core$async$state_machine__58035__auto__);

(statearr_58305[(1)] = (1));

return statearr_58305;
});
var cljs$core$async$state_machine__58035__auto____1 = (function (state_58285){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_58285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e58306){if((e58306 instanceof Object)){
var ex__58038__auto__ = e58306;
var statearr_58307_58328 = state_58285;
(statearr_58307_58328[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58329 = state_58285;
state_58285 = G__58329;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$state_machine__58035__auto__ = function(state_58285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58035__auto____1.call(this,state_58285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58035__auto____0;
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58035__auto____1;
return cljs$core$async$state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___58313))
})();
var state__58148__auto__ = (function (){var statearr_58308 = f__58147__auto__.call(null);
(statearr_58308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___58313);

return statearr_58308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___58313))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__58517){
var vec__58518 = p__58517;
var v = cljs.core.nth.call(null,vec__58518,(0),null);
var p = cljs.core.nth.call(null,vec__58518,(1),null);
var job = vec__58518;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__58146__auto___58704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___58704,res,vec__58518,v,p,job,jobs,results){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___58704,res,vec__58518,v,p,job,jobs,results){
return (function (state_58525){
var state_val_58526 = (state_58525[(1)]);
if((state_val_58526 === (1))){
var state_58525__$1 = state_58525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58525__$1,(2),res,v);
} else {
if((state_val_58526 === (2))){
var inst_58522 = (state_58525[(2)]);
var inst_58523 = cljs.core.async.close_BANG_.call(null,res);
var state_58525__$1 = (function (){var statearr_58527 = state_58525;
(statearr_58527[(7)] = inst_58522);

return statearr_58527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58525__$1,inst_58523);
} else {
return null;
}
}
});})(c__58146__auto___58704,res,vec__58518,v,p,job,jobs,results))
;
return ((function (switch__58034__auto__,c__58146__auto___58704,res,vec__58518,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0 = (function (){
var statearr_58531 = [null,null,null,null,null,null,null,null];
(statearr_58531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__);

(statearr_58531[(1)] = (1));

return statearr_58531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1 = (function (state_58525){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_58525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e58532){if((e58532 instanceof Object)){
var ex__58038__auto__ = e58532;
var statearr_58533_58705 = state_58525;
(statearr_58533_58705[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58706 = state_58525;
state_58525 = G__58706;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__ = function(state_58525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1.call(this,state_58525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___58704,res,vec__58518,v,p,job,jobs,results))
})();
var state__58148__auto__ = (function (){var statearr_58534 = f__58147__auto__.call(null);
(statearr_58534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___58704);

return statearr_58534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___58704,res,vec__58518,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__58535){
var vec__58536 = p__58535;
var v = cljs.core.nth.call(null,vec__58536,(0),null);
var p = cljs.core.nth.call(null,vec__58536,(1),null);
var job = vec__58536;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__49042__auto___58707 = n;
var __58708 = (0);
while(true){
if((__58708 < n__49042__auto___58707)){
var G__58539_58709 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__58539_58709) {
case "compute":
var c__58146__auto___58711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__58708,c__58146__auto___58711,G__58539_58709,n__49042__auto___58707,jobs,results,process,async){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (__58708,c__58146__auto___58711,G__58539_58709,n__49042__auto___58707,jobs,results,process,async){
return (function (state_58552){
var state_val_58553 = (state_58552[(1)]);
if((state_val_58553 === (1))){
var state_58552__$1 = state_58552;
var statearr_58554_58712 = state_58552__$1;
(statearr_58554_58712[(2)] = null);

(statearr_58554_58712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58553 === (2))){
var state_58552__$1 = state_58552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58552__$1,(4),jobs);
} else {
if((state_val_58553 === (3))){
var inst_58550 = (state_58552[(2)]);
var state_58552__$1 = state_58552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58552__$1,inst_58550);
} else {
if((state_val_58553 === (4))){
var inst_58542 = (state_58552[(2)]);
var inst_58543 = process.call(null,inst_58542);
var state_58552__$1 = state_58552;
if(cljs.core.truth_(inst_58543)){
var statearr_58555_58713 = state_58552__$1;
(statearr_58555_58713[(1)] = (5));

} else {
var statearr_58556_58714 = state_58552__$1;
(statearr_58556_58714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58553 === (5))){
var state_58552__$1 = state_58552;
var statearr_58557_58715 = state_58552__$1;
(statearr_58557_58715[(2)] = null);

(statearr_58557_58715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58553 === (6))){
var state_58552__$1 = state_58552;
var statearr_58558_58716 = state_58552__$1;
(statearr_58558_58716[(2)] = null);

(statearr_58558_58716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58553 === (7))){
var inst_58548 = (state_58552[(2)]);
var state_58552__$1 = state_58552;
var statearr_58559_58717 = state_58552__$1;
(statearr_58559_58717[(2)] = inst_58548);

(statearr_58559_58717[(1)] = (3));


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
});})(__58708,c__58146__auto___58711,G__58539_58709,n__49042__auto___58707,jobs,results,process,async))
;
return ((function (__58708,switch__58034__auto__,c__58146__auto___58711,G__58539_58709,n__49042__auto___58707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0 = (function (){
var statearr_58563 = [null,null,null,null,null,null,null];
(statearr_58563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__);

(statearr_58563[(1)] = (1));

return statearr_58563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1 = (function (state_58552){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_58552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e58564){if((e58564 instanceof Object)){
var ex__58038__auto__ = e58564;
var statearr_58565_58718 = state_58552;
(statearr_58565_58718[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58719 = state_58552;
state_58552 = G__58719;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__ = function(state_58552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1.call(this,state_58552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__;
})()
;})(__58708,switch__58034__auto__,c__58146__auto___58711,G__58539_58709,n__49042__auto___58707,jobs,results,process,async))
})();
var state__58148__auto__ = (function (){var statearr_58566 = f__58147__auto__.call(null);
(statearr_58566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___58711);

return statearr_58566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(__58708,c__58146__auto___58711,G__58539_58709,n__49042__auto___58707,jobs,results,process,async))
);


break;
case "async":
var c__58146__auto___58720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__58708,c__58146__auto___58720,G__58539_58709,n__49042__auto___58707,jobs,results,process,async){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (__58708,c__58146__auto___58720,G__58539_58709,n__49042__auto___58707,jobs,results,process,async){
return (function (state_58579){
var state_val_58580 = (state_58579[(1)]);
if((state_val_58580 === (1))){
var state_58579__$1 = state_58579;
var statearr_58581_58721 = state_58579__$1;
(statearr_58581_58721[(2)] = null);

(statearr_58581_58721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58580 === (2))){
var state_58579__$1 = state_58579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58579__$1,(4),jobs);
} else {
if((state_val_58580 === (3))){
var inst_58577 = (state_58579[(2)]);
var state_58579__$1 = state_58579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58579__$1,inst_58577);
} else {
if((state_val_58580 === (4))){
var inst_58569 = (state_58579[(2)]);
var inst_58570 = async.call(null,inst_58569);
var state_58579__$1 = state_58579;
if(cljs.core.truth_(inst_58570)){
var statearr_58582_58722 = state_58579__$1;
(statearr_58582_58722[(1)] = (5));

} else {
var statearr_58583_58723 = state_58579__$1;
(statearr_58583_58723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58580 === (5))){
var state_58579__$1 = state_58579;
var statearr_58584_58724 = state_58579__$1;
(statearr_58584_58724[(2)] = null);

(statearr_58584_58724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58580 === (6))){
var state_58579__$1 = state_58579;
var statearr_58585_58725 = state_58579__$1;
(statearr_58585_58725[(2)] = null);

(statearr_58585_58725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58580 === (7))){
var inst_58575 = (state_58579[(2)]);
var state_58579__$1 = state_58579;
var statearr_58586_58726 = state_58579__$1;
(statearr_58586_58726[(2)] = inst_58575);

(statearr_58586_58726[(1)] = (3));


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
});})(__58708,c__58146__auto___58720,G__58539_58709,n__49042__auto___58707,jobs,results,process,async))
;
return ((function (__58708,switch__58034__auto__,c__58146__auto___58720,G__58539_58709,n__49042__auto___58707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0 = (function (){
var statearr_58590 = [null,null,null,null,null,null,null];
(statearr_58590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__);

(statearr_58590[(1)] = (1));

return statearr_58590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1 = (function (state_58579){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_58579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e58591){if((e58591 instanceof Object)){
var ex__58038__auto__ = e58591;
var statearr_58592_58727 = state_58579;
(statearr_58592_58727[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58728 = state_58579;
state_58579 = G__58728;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__ = function(state_58579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1.call(this,state_58579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__;
})()
;})(__58708,switch__58034__auto__,c__58146__auto___58720,G__58539_58709,n__49042__auto___58707,jobs,results,process,async))
})();
var state__58148__auto__ = (function (){var statearr_58593 = f__58147__auto__.call(null);
(statearr_58593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___58720);

return statearr_58593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(__58708,c__58146__auto___58720,G__58539_58709,n__49042__auto___58707,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__58729 = (__58708 + (1));
__58708 = G__58729;
continue;
} else {
}
break;
}

var c__58146__auto___58730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___58730,jobs,results,process,async){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___58730,jobs,results,process,async){
return (function (state_58615){
var state_val_58616 = (state_58615[(1)]);
if((state_val_58616 === (1))){
var state_58615__$1 = state_58615;
var statearr_58617_58731 = state_58615__$1;
(statearr_58617_58731[(2)] = null);

(statearr_58617_58731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58616 === (2))){
var state_58615__$1 = state_58615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58615__$1,(4),from);
} else {
if((state_val_58616 === (3))){
var inst_58613 = (state_58615[(2)]);
var state_58615__$1 = state_58615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58615__$1,inst_58613);
} else {
if((state_val_58616 === (4))){
var inst_58596 = (state_58615[(7)]);
var inst_58596__$1 = (state_58615[(2)]);
var inst_58597 = (inst_58596__$1 == null);
var state_58615__$1 = (function (){var statearr_58618 = state_58615;
(statearr_58618[(7)] = inst_58596__$1);

return statearr_58618;
})();
if(cljs.core.truth_(inst_58597)){
var statearr_58619_58732 = state_58615__$1;
(statearr_58619_58732[(1)] = (5));

} else {
var statearr_58620_58733 = state_58615__$1;
(statearr_58620_58733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58616 === (5))){
var inst_58599 = cljs.core.async.close_BANG_.call(null,jobs);
var state_58615__$1 = state_58615;
var statearr_58621_58734 = state_58615__$1;
(statearr_58621_58734[(2)] = inst_58599);

(statearr_58621_58734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58616 === (6))){
var inst_58601 = (state_58615[(8)]);
var inst_58596 = (state_58615[(7)]);
var inst_58601__$1 = cljs.core.async.chan.call(null,(1));
var inst_58602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58603 = [inst_58596,inst_58601__$1];
var inst_58604 = (new cljs.core.PersistentVector(null,2,(5),inst_58602,inst_58603,null));
var state_58615__$1 = (function (){var statearr_58622 = state_58615;
(statearr_58622[(8)] = inst_58601__$1);

return statearr_58622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58615__$1,(8),jobs,inst_58604);
} else {
if((state_val_58616 === (7))){
var inst_58611 = (state_58615[(2)]);
var state_58615__$1 = state_58615;
var statearr_58623_58735 = state_58615__$1;
(statearr_58623_58735[(2)] = inst_58611);

(statearr_58623_58735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58616 === (8))){
var inst_58601 = (state_58615[(8)]);
var inst_58606 = (state_58615[(2)]);
var state_58615__$1 = (function (){var statearr_58624 = state_58615;
(statearr_58624[(9)] = inst_58606);

return statearr_58624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58615__$1,(9),results,inst_58601);
} else {
if((state_val_58616 === (9))){
var inst_58608 = (state_58615[(2)]);
var state_58615__$1 = (function (){var statearr_58625 = state_58615;
(statearr_58625[(10)] = inst_58608);

return statearr_58625;
})();
var statearr_58626_58736 = state_58615__$1;
(statearr_58626_58736[(2)] = null);

(statearr_58626_58736[(1)] = (2));


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
});})(c__58146__auto___58730,jobs,results,process,async))
;
return ((function (switch__58034__auto__,c__58146__auto___58730,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0 = (function (){
var statearr_58630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__);

(statearr_58630[(1)] = (1));

return statearr_58630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1 = (function (state_58615){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_58615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e58631){if((e58631 instanceof Object)){
var ex__58038__auto__ = e58631;
var statearr_58632_58737 = state_58615;
(statearr_58632_58737[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58738 = state_58615;
state_58615 = G__58738;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__ = function(state_58615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1.call(this,state_58615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___58730,jobs,results,process,async))
})();
var state__58148__auto__ = (function (){var statearr_58633 = f__58147__auto__.call(null);
(statearr_58633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___58730);

return statearr_58633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___58730,jobs,results,process,async))
);


var c__58146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto__,jobs,results,process,async){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto__,jobs,results,process,async){
return (function (state_58671){
var state_val_58672 = (state_58671[(1)]);
if((state_val_58672 === (7))){
var inst_58667 = (state_58671[(2)]);
var state_58671__$1 = state_58671;
var statearr_58673_58739 = state_58671__$1;
(statearr_58673_58739[(2)] = inst_58667);

(statearr_58673_58739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (20))){
var state_58671__$1 = state_58671;
var statearr_58674_58740 = state_58671__$1;
(statearr_58674_58740[(2)] = null);

(statearr_58674_58740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (1))){
var state_58671__$1 = state_58671;
var statearr_58675_58741 = state_58671__$1;
(statearr_58675_58741[(2)] = null);

(statearr_58675_58741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (4))){
var inst_58636 = (state_58671[(7)]);
var inst_58636__$1 = (state_58671[(2)]);
var inst_58637 = (inst_58636__$1 == null);
var state_58671__$1 = (function (){var statearr_58676 = state_58671;
(statearr_58676[(7)] = inst_58636__$1);

return statearr_58676;
})();
if(cljs.core.truth_(inst_58637)){
var statearr_58677_58742 = state_58671__$1;
(statearr_58677_58742[(1)] = (5));

} else {
var statearr_58678_58743 = state_58671__$1;
(statearr_58678_58743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (15))){
var inst_58649 = (state_58671[(8)]);
var state_58671__$1 = state_58671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58671__$1,(18),to,inst_58649);
} else {
if((state_val_58672 === (21))){
var inst_58662 = (state_58671[(2)]);
var state_58671__$1 = state_58671;
var statearr_58679_58744 = state_58671__$1;
(statearr_58679_58744[(2)] = inst_58662);

(statearr_58679_58744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (13))){
var inst_58664 = (state_58671[(2)]);
var state_58671__$1 = (function (){var statearr_58680 = state_58671;
(statearr_58680[(9)] = inst_58664);

return statearr_58680;
})();
var statearr_58681_58745 = state_58671__$1;
(statearr_58681_58745[(2)] = null);

(statearr_58681_58745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (6))){
var inst_58636 = (state_58671[(7)]);
var state_58671__$1 = state_58671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58671__$1,(11),inst_58636);
} else {
if((state_val_58672 === (17))){
var inst_58657 = (state_58671[(2)]);
var state_58671__$1 = state_58671;
if(cljs.core.truth_(inst_58657)){
var statearr_58682_58746 = state_58671__$1;
(statearr_58682_58746[(1)] = (19));

} else {
var statearr_58683_58747 = state_58671__$1;
(statearr_58683_58747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (3))){
var inst_58669 = (state_58671[(2)]);
var state_58671__$1 = state_58671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58671__$1,inst_58669);
} else {
if((state_val_58672 === (12))){
var inst_58646 = (state_58671[(10)]);
var state_58671__$1 = state_58671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58671__$1,(14),inst_58646);
} else {
if((state_val_58672 === (2))){
var state_58671__$1 = state_58671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58671__$1,(4),results);
} else {
if((state_val_58672 === (19))){
var state_58671__$1 = state_58671;
var statearr_58684_58748 = state_58671__$1;
(statearr_58684_58748[(2)] = null);

(statearr_58684_58748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (11))){
var inst_58646 = (state_58671[(2)]);
var state_58671__$1 = (function (){var statearr_58685 = state_58671;
(statearr_58685[(10)] = inst_58646);

return statearr_58685;
})();
var statearr_58686_58749 = state_58671__$1;
(statearr_58686_58749[(2)] = null);

(statearr_58686_58749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (9))){
var state_58671__$1 = state_58671;
var statearr_58687_58750 = state_58671__$1;
(statearr_58687_58750[(2)] = null);

(statearr_58687_58750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (5))){
var state_58671__$1 = state_58671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58688_58751 = state_58671__$1;
(statearr_58688_58751[(1)] = (8));

} else {
var statearr_58689_58752 = state_58671__$1;
(statearr_58689_58752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (14))){
var inst_58649 = (state_58671[(8)]);
var inst_58651 = (state_58671[(11)]);
var inst_58649__$1 = (state_58671[(2)]);
var inst_58650 = (inst_58649__$1 == null);
var inst_58651__$1 = cljs.core.not.call(null,inst_58650);
var state_58671__$1 = (function (){var statearr_58690 = state_58671;
(statearr_58690[(8)] = inst_58649__$1);

(statearr_58690[(11)] = inst_58651__$1);

return statearr_58690;
})();
if(inst_58651__$1){
var statearr_58691_58753 = state_58671__$1;
(statearr_58691_58753[(1)] = (15));

} else {
var statearr_58692_58754 = state_58671__$1;
(statearr_58692_58754[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (16))){
var inst_58651 = (state_58671[(11)]);
var state_58671__$1 = state_58671;
var statearr_58693_58755 = state_58671__$1;
(statearr_58693_58755[(2)] = inst_58651);

(statearr_58693_58755[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (10))){
var inst_58643 = (state_58671[(2)]);
var state_58671__$1 = state_58671;
var statearr_58694_58756 = state_58671__$1;
(statearr_58694_58756[(2)] = inst_58643);

(statearr_58694_58756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (18))){
var inst_58654 = (state_58671[(2)]);
var state_58671__$1 = state_58671;
var statearr_58695_58757 = state_58671__$1;
(statearr_58695_58757[(2)] = inst_58654);

(statearr_58695_58757[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58672 === (8))){
var inst_58640 = cljs.core.async.close_BANG_.call(null,to);
var state_58671__$1 = state_58671;
var statearr_58696_58758 = state_58671__$1;
(statearr_58696_58758[(2)] = inst_58640);

(statearr_58696_58758[(1)] = (10));


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
}
}
}
}
});})(c__58146__auto__,jobs,results,process,async))
;
return ((function (switch__58034__auto__,c__58146__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0 = (function (){
var statearr_58700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__);

(statearr_58700[(1)] = (1));

return statearr_58700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1 = (function (state_58671){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_58671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e58701){if((e58701 instanceof Object)){
var ex__58038__auto__ = e58701;
var statearr_58702_58759 = state_58671;
(statearr_58702_58759[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58760 = state_58671;
state_58671 = G__58760;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__ = function(state_58671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1.call(this,state_58671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto__,jobs,results,process,async))
})();
var state__58148__auto__ = (function (){var statearr_58703 = f__58147__auto__.call(null);
(statearr_58703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto__);

return statearr_58703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto__,jobs,results,process,async))
);

return c__58146__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args58761 = [];
var len__49232__auto___58764 = arguments.length;
var i__49233__auto___58765 = (0);
while(true){
if((i__49233__auto___58765 < len__49232__auto___58764)){
args58761.push((arguments[i__49233__auto___58765]));

var G__58766 = (i__49233__auto___58765 + (1));
i__49233__auto___58765 = G__58766;
continue;
} else {
}
break;
}

var G__58763 = args58761.length;
switch (G__58763) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58761.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args58768 = [];
var len__49232__auto___58771 = arguments.length;
var i__49233__auto___58772 = (0);
while(true){
if((i__49233__auto___58772 < len__49232__auto___58771)){
args58768.push((arguments[i__49233__auto___58772]));

var G__58773 = (i__49233__auto___58772 + (1));
i__49233__auto___58772 = G__58773;
continue;
} else {
}
break;
}

var G__58770 = args58768.length;
switch (G__58770) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58768.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args58775 = [];
var len__49232__auto___58828 = arguments.length;
var i__49233__auto___58829 = (0);
while(true){
if((i__49233__auto___58829 < len__49232__auto___58828)){
args58775.push((arguments[i__49233__auto___58829]));

var G__58830 = (i__49233__auto___58829 + (1));
i__49233__auto___58829 = G__58830;
continue;
} else {
}
break;
}

var G__58777 = args58775.length;
switch (G__58777) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58775.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__58146__auto___58832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___58832,tc,fc){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___58832,tc,fc){
return (function (state_58803){
var state_val_58804 = (state_58803[(1)]);
if((state_val_58804 === (7))){
var inst_58799 = (state_58803[(2)]);
var state_58803__$1 = state_58803;
var statearr_58805_58833 = state_58803__$1;
(statearr_58805_58833[(2)] = inst_58799);

(statearr_58805_58833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (1))){
var state_58803__$1 = state_58803;
var statearr_58806_58834 = state_58803__$1;
(statearr_58806_58834[(2)] = null);

(statearr_58806_58834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (4))){
var inst_58780 = (state_58803[(7)]);
var inst_58780__$1 = (state_58803[(2)]);
var inst_58781 = (inst_58780__$1 == null);
var state_58803__$1 = (function (){var statearr_58807 = state_58803;
(statearr_58807[(7)] = inst_58780__$1);

return statearr_58807;
})();
if(cljs.core.truth_(inst_58781)){
var statearr_58808_58835 = state_58803__$1;
(statearr_58808_58835[(1)] = (5));

} else {
var statearr_58809_58836 = state_58803__$1;
(statearr_58809_58836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (13))){
var state_58803__$1 = state_58803;
var statearr_58810_58837 = state_58803__$1;
(statearr_58810_58837[(2)] = null);

(statearr_58810_58837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (6))){
var inst_58780 = (state_58803[(7)]);
var inst_58786 = p.call(null,inst_58780);
var state_58803__$1 = state_58803;
if(cljs.core.truth_(inst_58786)){
var statearr_58811_58838 = state_58803__$1;
(statearr_58811_58838[(1)] = (9));

} else {
var statearr_58812_58839 = state_58803__$1;
(statearr_58812_58839[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (3))){
var inst_58801 = (state_58803[(2)]);
var state_58803__$1 = state_58803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58803__$1,inst_58801);
} else {
if((state_val_58804 === (12))){
var state_58803__$1 = state_58803;
var statearr_58813_58840 = state_58803__$1;
(statearr_58813_58840[(2)] = null);

(statearr_58813_58840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (2))){
var state_58803__$1 = state_58803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58803__$1,(4),ch);
} else {
if((state_val_58804 === (11))){
var inst_58780 = (state_58803[(7)]);
var inst_58790 = (state_58803[(2)]);
var state_58803__$1 = state_58803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58803__$1,(8),inst_58790,inst_58780);
} else {
if((state_val_58804 === (9))){
var state_58803__$1 = state_58803;
var statearr_58814_58841 = state_58803__$1;
(statearr_58814_58841[(2)] = tc);

(statearr_58814_58841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (5))){
var inst_58783 = cljs.core.async.close_BANG_.call(null,tc);
var inst_58784 = cljs.core.async.close_BANG_.call(null,fc);
var state_58803__$1 = (function (){var statearr_58815 = state_58803;
(statearr_58815[(8)] = inst_58783);

return statearr_58815;
})();
var statearr_58816_58842 = state_58803__$1;
(statearr_58816_58842[(2)] = inst_58784);

(statearr_58816_58842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (14))){
var inst_58797 = (state_58803[(2)]);
var state_58803__$1 = state_58803;
var statearr_58817_58843 = state_58803__$1;
(statearr_58817_58843[(2)] = inst_58797);

(statearr_58817_58843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (10))){
var state_58803__$1 = state_58803;
var statearr_58818_58844 = state_58803__$1;
(statearr_58818_58844[(2)] = fc);

(statearr_58818_58844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (8))){
var inst_58792 = (state_58803[(2)]);
var state_58803__$1 = state_58803;
if(cljs.core.truth_(inst_58792)){
var statearr_58819_58845 = state_58803__$1;
(statearr_58819_58845[(1)] = (12));

} else {
var statearr_58820_58846 = state_58803__$1;
(statearr_58820_58846[(1)] = (13));

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
});})(c__58146__auto___58832,tc,fc))
;
return ((function (switch__58034__auto__,c__58146__auto___58832,tc,fc){
return (function() {
var cljs$core$async$state_machine__58035__auto__ = null;
var cljs$core$async$state_machine__58035__auto____0 = (function (){
var statearr_58824 = [null,null,null,null,null,null,null,null,null];
(statearr_58824[(0)] = cljs$core$async$state_machine__58035__auto__);

(statearr_58824[(1)] = (1));

return statearr_58824;
});
var cljs$core$async$state_machine__58035__auto____1 = (function (state_58803){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_58803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e58825){if((e58825 instanceof Object)){
var ex__58038__auto__ = e58825;
var statearr_58826_58847 = state_58803;
(statearr_58826_58847[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58848 = state_58803;
state_58803 = G__58848;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$state_machine__58035__auto__ = function(state_58803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58035__auto____1.call(this,state_58803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58035__auto____0;
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58035__auto____1;
return cljs$core$async$state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___58832,tc,fc))
})();
var state__58148__auto__ = (function (){var statearr_58827 = f__58147__auto__.call(null);
(statearr_58827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___58832);

return statearr_58827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___58832,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__58146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto__){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto__){
return (function (state_58912){
var state_val_58913 = (state_58912[(1)]);
if((state_val_58913 === (7))){
var inst_58908 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
var statearr_58914_58935 = state_58912__$1;
(statearr_58914_58935[(2)] = inst_58908);

(statearr_58914_58935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (1))){
var inst_58892 = init;
var state_58912__$1 = (function (){var statearr_58915 = state_58912;
(statearr_58915[(7)] = inst_58892);

return statearr_58915;
})();
var statearr_58916_58936 = state_58912__$1;
(statearr_58916_58936[(2)] = null);

(statearr_58916_58936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (4))){
var inst_58895 = (state_58912[(8)]);
var inst_58895__$1 = (state_58912[(2)]);
var inst_58896 = (inst_58895__$1 == null);
var state_58912__$1 = (function (){var statearr_58917 = state_58912;
(statearr_58917[(8)] = inst_58895__$1);

return statearr_58917;
})();
if(cljs.core.truth_(inst_58896)){
var statearr_58918_58937 = state_58912__$1;
(statearr_58918_58937[(1)] = (5));

} else {
var statearr_58919_58938 = state_58912__$1;
(statearr_58919_58938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (6))){
var inst_58895 = (state_58912[(8)]);
var inst_58899 = (state_58912[(9)]);
var inst_58892 = (state_58912[(7)]);
var inst_58899__$1 = f.call(null,inst_58892,inst_58895);
var inst_58900 = cljs.core.reduced_QMARK_.call(null,inst_58899__$1);
var state_58912__$1 = (function (){var statearr_58920 = state_58912;
(statearr_58920[(9)] = inst_58899__$1);

return statearr_58920;
})();
if(inst_58900){
var statearr_58921_58939 = state_58912__$1;
(statearr_58921_58939[(1)] = (8));

} else {
var statearr_58922_58940 = state_58912__$1;
(statearr_58922_58940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (3))){
var inst_58910 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58912__$1,inst_58910);
} else {
if((state_val_58913 === (2))){
var state_58912__$1 = state_58912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58912__$1,(4),ch);
} else {
if((state_val_58913 === (9))){
var inst_58899 = (state_58912[(9)]);
var inst_58892 = inst_58899;
var state_58912__$1 = (function (){var statearr_58923 = state_58912;
(statearr_58923[(7)] = inst_58892);

return statearr_58923;
})();
var statearr_58924_58941 = state_58912__$1;
(statearr_58924_58941[(2)] = null);

(statearr_58924_58941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (5))){
var inst_58892 = (state_58912[(7)]);
var state_58912__$1 = state_58912;
var statearr_58925_58942 = state_58912__$1;
(statearr_58925_58942[(2)] = inst_58892);

(statearr_58925_58942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (10))){
var inst_58906 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
var statearr_58926_58943 = state_58912__$1;
(statearr_58926_58943[(2)] = inst_58906);

(statearr_58926_58943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (8))){
var inst_58899 = (state_58912[(9)]);
var inst_58902 = cljs.core.deref.call(null,inst_58899);
var state_58912__$1 = state_58912;
var statearr_58927_58944 = state_58912__$1;
(statearr_58927_58944[(2)] = inst_58902);

(statearr_58927_58944[(1)] = (10));


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
});})(c__58146__auto__))
;
return ((function (switch__58034__auto__,c__58146__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__58035__auto__ = null;
var cljs$core$async$reduce_$_state_machine__58035__auto____0 = (function (){
var statearr_58931 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58931[(0)] = cljs$core$async$reduce_$_state_machine__58035__auto__);

(statearr_58931[(1)] = (1));

return statearr_58931;
});
var cljs$core$async$reduce_$_state_machine__58035__auto____1 = (function (state_58912){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_58912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e58932){if((e58932 instanceof Object)){
var ex__58038__auto__ = e58932;
var statearr_58933_58945 = state_58912;
(statearr_58933_58945[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58946 = state_58912;
state_58912 = G__58946;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__58035__auto__ = function(state_58912){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__58035__auto____1.call(this,state_58912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__58035__auto____0;
cljs$core$async$reduce_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__58035__auto____1;
return cljs$core$async$reduce_$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto__))
})();
var state__58148__auto__ = (function (){var statearr_58934 = f__58147__auto__.call(null);
(statearr_58934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto__);

return statearr_58934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto__))
);

return c__58146__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args58947 = [];
var len__49232__auto___58999 = arguments.length;
var i__49233__auto___59000 = (0);
while(true){
if((i__49233__auto___59000 < len__49232__auto___58999)){
args58947.push((arguments[i__49233__auto___59000]));

var G__59001 = (i__49233__auto___59000 + (1));
i__49233__auto___59000 = G__59001;
continue;
} else {
}
break;
}

var G__58949 = args58947.length;
switch (G__58949) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58947.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__58146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto__){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto__){
return (function (state_58974){
var state_val_58975 = (state_58974[(1)]);
if((state_val_58975 === (7))){
var inst_58956 = (state_58974[(2)]);
var state_58974__$1 = state_58974;
var statearr_58976_59003 = state_58974__$1;
(statearr_58976_59003[(2)] = inst_58956);

(statearr_58976_59003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (1))){
var inst_58950 = cljs.core.seq.call(null,coll);
var inst_58951 = inst_58950;
var state_58974__$1 = (function (){var statearr_58977 = state_58974;
(statearr_58977[(7)] = inst_58951);

return statearr_58977;
})();
var statearr_58978_59004 = state_58974__$1;
(statearr_58978_59004[(2)] = null);

(statearr_58978_59004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (4))){
var inst_58951 = (state_58974[(7)]);
var inst_58954 = cljs.core.first.call(null,inst_58951);
var state_58974__$1 = state_58974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58974__$1,(7),ch,inst_58954);
} else {
if((state_val_58975 === (13))){
var inst_58968 = (state_58974[(2)]);
var state_58974__$1 = state_58974;
var statearr_58979_59005 = state_58974__$1;
(statearr_58979_59005[(2)] = inst_58968);

(statearr_58979_59005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (6))){
var inst_58959 = (state_58974[(2)]);
var state_58974__$1 = state_58974;
if(cljs.core.truth_(inst_58959)){
var statearr_58980_59006 = state_58974__$1;
(statearr_58980_59006[(1)] = (8));

} else {
var statearr_58981_59007 = state_58974__$1;
(statearr_58981_59007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (3))){
var inst_58972 = (state_58974[(2)]);
var state_58974__$1 = state_58974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58974__$1,inst_58972);
} else {
if((state_val_58975 === (12))){
var state_58974__$1 = state_58974;
var statearr_58982_59008 = state_58974__$1;
(statearr_58982_59008[(2)] = null);

(statearr_58982_59008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (2))){
var inst_58951 = (state_58974[(7)]);
var state_58974__$1 = state_58974;
if(cljs.core.truth_(inst_58951)){
var statearr_58983_59009 = state_58974__$1;
(statearr_58983_59009[(1)] = (4));

} else {
var statearr_58984_59010 = state_58974__$1;
(statearr_58984_59010[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (11))){
var inst_58965 = cljs.core.async.close_BANG_.call(null,ch);
var state_58974__$1 = state_58974;
var statearr_58985_59011 = state_58974__$1;
(statearr_58985_59011[(2)] = inst_58965);

(statearr_58985_59011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (9))){
var state_58974__$1 = state_58974;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58986_59012 = state_58974__$1;
(statearr_58986_59012[(1)] = (11));

} else {
var statearr_58987_59013 = state_58974__$1;
(statearr_58987_59013[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (5))){
var inst_58951 = (state_58974[(7)]);
var state_58974__$1 = state_58974;
var statearr_58988_59014 = state_58974__$1;
(statearr_58988_59014[(2)] = inst_58951);

(statearr_58988_59014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (10))){
var inst_58970 = (state_58974[(2)]);
var state_58974__$1 = state_58974;
var statearr_58989_59015 = state_58974__$1;
(statearr_58989_59015[(2)] = inst_58970);

(statearr_58989_59015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (8))){
var inst_58951 = (state_58974[(7)]);
var inst_58961 = cljs.core.next.call(null,inst_58951);
var inst_58951__$1 = inst_58961;
var state_58974__$1 = (function (){var statearr_58990 = state_58974;
(statearr_58990[(7)] = inst_58951__$1);

return statearr_58990;
})();
var statearr_58991_59016 = state_58974__$1;
(statearr_58991_59016[(2)] = null);

(statearr_58991_59016[(1)] = (2));


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
});})(c__58146__auto__))
;
return ((function (switch__58034__auto__,c__58146__auto__){
return (function() {
var cljs$core$async$state_machine__58035__auto__ = null;
var cljs$core$async$state_machine__58035__auto____0 = (function (){
var statearr_58995 = [null,null,null,null,null,null,null,null];
(statearr_58995[(0)] = cljs$core$async$state_machine__58035__auto__);

(statearr_58995[(1)] = (1));

return statearr_58995;
});
var cljs$core$async$state_machine__58035__auto____1 = (function (state_58974){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_58974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e58996){if((e58996 instanceof Object)){
var ex__58038__auto__ = e58996;
var statearr_58997_59017 = state_58974;
(statearr_58997_59017[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59018 = state_58974;
state_58974 = G__59018;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$state_machine__58035__auto__ = function(state_58974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58035__auto____1.call(this,state_58974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58035__auto____0;
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58035__auto____1;
return cljs$core$async$state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto__))
})();
var state__58148__auto__ = (function (){var statearr_58998 = f__58147__auto__.call(null);
(statearr_58998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto__);

return statearr_58998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto__))
);

return c__58146__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__48787__auto__ = (((_ == null))?null:_);
var m__48788__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,_);
} else {
var m__48788__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__48787__auto__ = (((m == null))?null:m);
var m__48788__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__48788__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__48787__auto__ = (((m == null))?null:m);
var m__48788__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,m,ch);
} else {
var m__48788__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__48787__auto__ = (((m == null))?null:m);
var m__48788__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,m);
} else {
var m__48788__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async59244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59244 = (function (ch,cs,meta59245){
this.ch = ch;
this.cs = cs;
this.meta59245 = meta59245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_59246,meta59245__$1){
var self__ = this;
var _59246__$1 = this;
return (new cljs.core.async.t_cljs$core$async59244(self__.ch,self__.cs,meta59245__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async59244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_59246){
var self__ = this;
var _59246__$1 = this;
return self__.meta59245;
});})(cs))
;

cljs.core.async.t_cljs$core$async59244.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async59244.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59244.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async59244.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async59244.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async59244.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta59245","meta59245",1172264225,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async59244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59244";

cljs.core.async.t_cljs$core$async59244.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__48730__auto__,writer__48731__auto__,opt__48732__auto__){
return cljs.core._write.call(null,writer__48731__auto__,"cljs.core.async/t_cljs$core$async59244");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async59244 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async59244(ch__$1,cs__$1,meta59245){
return (new cljs.core.async.t_cljs$core$async59244(ch__$1,cs__$1,meta59245));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async59244(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__58146__auto___59469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___59469,cs,m,dchan,dctr,done){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___59469,cs,m,dchan,dctr,done){
return (function (state_59381){
var state_val_59382 = (state_59381[(1)]);
if((state_val_59382 === (7))){
var inst_59377 = (state_59381[(2)]);
var state_59381__$1 = state_59381;
var statearr_59383_59470 = state_59381__$1;
(statearr_59383_59470[(2)] = inst_59377);

(statearr_59383_59470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (20))){
var inst_59280 = (state_59381[(7)]);
var inst_59292 = cljs.core.first.call(null,inst_59280);
var inst_59293 = cljs.core.nth.call(null,inst_59292,(0),null);
var inst_59294 = cljs.core.nth.call(null,inst_59292,(1),null);
var state_59381__$1 = (function (){var statearr_59384 = state_59381;
(statearr_59384[(8)] = inst_59293);

return statearr_59384;
})();
if(cljs.core.truth_(inst_59294)){
var statearr_59385_59471 = state_59381__$1;
(statearr_59385_59471[(1)] = (22));

} else {
var statearr_59386_59472 = state_59381__$1;
(statearr_59386_59472[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (27))){
var inst_59322 = (state_59381[(9)]);
var inst_59249 = (state_59381[(10)]);
var inst_59329 = (state_59381[(11)]);
var inst_59324 = (state_59381[(12)]);
var inst_59329__$1 = cljs.core._nth.call(null,inst_59322,inst_59324);
var inst_59330 = cljs.core.async.put_BANG_.call(null,inst_59329__$1,inst_59249,done);
var state_59381__$1 = (function (){var statearr_59387 = state_59381;
(statearr_59387[(11)] = inst_59329__$1);

return statearr_59387;
})();
if(cljs.core.truth_(inst_59330)){
var statearr_59388_59473 = state_59381__$1;
(statearr_59388_59473[(1)] = (30));

} else {
var statearr_59389_59474 = state_59381__$1;
(statearr_59389_59474[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (1))){
var state_59381__$1 = state_59381;
var statearr_59390_59475 = state_59381__$1;
(statearr_59390_59475[(2)] = null);

(statearr_59390_59475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (24))){
var inst_59280 = (state_59381[(7)]);
var inst_59299 = (state_59381[(2)]);
var inst_59300 = cljs.core.next.call(null,inst_59280);
var inst_59258 = inst_59300;
var inst_59259 = null;
var inst_59260 = (0);
var inst_59261 = (0);
var state_59381__$1 = (function (){var statearr_59391 = state_59381;
(statearr_59391[(13)] = inst_59299);

(statearr_59391[(14)] = inst_59259);

(statearr_59391[(15)] = inst_59258);

(statearr_59391[(16)] = inst_59260);

(statearr_59391[(17)] = inst_59261);

return statearr_59391;
})();
var statearr_59392_59476 = state_59381__$1;
(statearr_59392_59476[(2)] = null);

(statearr_59392_59476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (39))){
var state_59381__$1 = state_59381;
var statearr_59396_59477 = state_59381__$1;
(statearr_59396_59477[(2)] = null);

(statearr_59396_59477[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (4))){
var inst_59249 = (state_59381[(10)]);
var inst_59249__$1 = (state_59381[(2)]);
var inst_59250 = (inst_59249__$1 == null);
var state_59381__$1 = (function (){var statearr_59397 = state_59381;
(statearr_59397[(10)] = inst_59249__$1);

return statearr_59397;
})();
if(cljs.core.truth_(inst_59250)){
var statearr_59398_59478 = state_59381__$1;
(statearr_59398_59478[(1)] = (5));

} else {
var statearr_59399_59479 = state_59381__$1;
(statearr_59399_59479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (15))){
var inst_59259 = (state_59381[(14)]);
var inst_59258 = (state_59381[(15)]);
var inst_59260 = (state_59381[(16)]);
var inst_59261 = (state_59381[(17)]);
var inst_59276 = (state_59381[(2)]);
var inst_59277 = (inst_59261 + (1));
var tmp59393 = inst_59259;
var tmp59394 = inst_59258;
var tmp59395 = inst_59260;
var inst_59258__$1 = tmp59394;
var inst_59259__$1 = tmp59393;
var inst_59260__$1 = tmp59395;
var inst_59261__$1 = inst_59277;
var state_59381__$1 = (function (){var statearr_59400 = state_59381;
(statearr_59400[(14)] = inst_59259__$1);

(statearr_59400[(18)] = inst_59276);

(statearr_59400[(15)] = inst_59258__$1);

(statearr_59400[(16)] = inst_59260__$1);

(statearr_59400[(17)] = inst_59261__$1);

return statearr_59400;
})();
var statearr_59401_59480 = state_59381__$1;
(statearr_59401_59480[(2)] = null);

(statearr_59401_59480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (21))){
var inst_59303 = (state_59381[(2)]);
var state_59381__$1 = state_59381;
var statearr_59405_59481 = state_59381__$1;
(statearr_59405_59481[(2)] = inst_59303);

(statearr_59405_59481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (31))){
var inst_59329 = (state_59381[(11)]);
var inst_59333 = done.call(null,null);
var inst_59334 = cljs.core.async.untap_STAR_.call(null,m,inst_59329);
var state_59381__$1 = (function (){var statearr_59406 = state_59381;
(statearr_59406[(19)] = inst_59333);

return statearr_59406;
})();
var statearr_59407_59482 = state_59381__$1;
(statearr_59407_59482[(2)] = inst_59334);

(statearr_59407_59482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (32))){
var inst_59322 = (state_59381[(9)]);
var inst_59321 = (state_59381[(20)]);
var inst_59323 = (state_59381[(21)]);
var inst_59324 = (state_59381[(12)]);
var inst_59336 = (state_59381[(2)]);
var inst_59337 = (inst_59324 + (1));
var tmp59402 = inst_59322;
var tmp59403 = inst_59321;
var tmp59404 = inst_59323;
var inst_59321__$1 = tmp59403;
var inst_59322__$1 = tmp59402;
var inst_59323__$1 = tmp59404;
var inst_59324__$1 = inst_59337;
var state_59381__$1 = (function (){var statearr_59408 = state_59381;
(statearr_59408[(9)] = inst_59322__$1);

(statearr_59408[(22)] = inst_59336);

(statearr_59408[(20)] = inst_59321__$1);

(statearr_59408[(21)] = inst_59323__$1);

(statearr_59408[(12)] = inst_59324__$1);

return statearr_59408;
})();
var statearr_59409_59483 = state_59381__$1;
(statearr_59409_59483[(2)] = null);

(statearr_59409_59483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (40))){
var inst_59349 = (state_59381[(23)]);
var inst_59353 = done.call(null,null);
var inst_59354 = cljs.core.async.untap_STAR_.call(null,m,inst_59349);
var state_59381__$1 = (function (){var statearr_59410 = state_59381;
(statearr_59410[(24)] = inst_59353);

return statearr_59410;
})();
var statearr_59411_59484 = state_59381__$1;
(statearr_59411_59484[(2)] = inst_59354);

(statearr_59411_59484[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (33))){
var inst_59340 = (state_59381[(25)]);
var inst_59342 = cljs.core.chunked_seq_QMARK_.call(null,inst_59340);
var state_59381__$1 = state_59381;
if(inst_59342){
var statearr_59412_59485 = state_59381__$1;
(statearr_59412_59485[(1)] = (36));

} else {
var statearr_59413_59486 = state_59381__$1;
(statearr_59413_59486[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (13))){
var inst_59270 = (state_59381[(26)]);
var inst_59273 = cljs.core.async.close_BANG_.call(null,inst_59270);
var state_59381__$1 = state_59381;
var statearr_59414_59487 = state_59381__$1;
(statearr_59414_59487[(2)] = inst_59273);

(statearr_59414_59487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (22))){
var inst_59293 = (state_59381[(8)]);
var inst_59296 = cljs.core.async.close_BANG_.call(null,inst_59293);
var state_59381__$1 = state_59381;
var statearr_59415_59488 = state_59381__$1;
(statearr_59415_59488[(2)] = inst_59296);

(statearr_59415_59488[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (36))){
var inst_59340 = (state_59381[(25)]);
var inst_59344 = cljs.core.chunk_first.call(null,inst_59340);
var inst_59345 = cljs.core.chunk_rest.call(null,inst_59340);
var inst_59346 = cljs.core.count.call(null,inst_59344);
var inst_59321 = inst_59345;
var inst_59322 = inst_59344;
var inst_59323 = inst_59346;
var inst_59324 = (0);
var state_59381__$1 = (function (){var statearr_59416 = state_59381;
(statearr_59416[(9)] = inst_59322);

(statearr_59416[(20)] = inst_59321);

(statearr_59416[(21)] = inst_59323);

(statearr_59416[(12)] = inst_59324);

return statearr_59416;
})();
var statearr_59417_59489 = state_59381__$1;
(statearr_59417_59489[(2)] = null);

(statearr_59417_59489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (41))){
var inst_59340 = (state_59381[(25)]);
var inst_59356 = (state_59381[(2)]);
var inst_59357 = cljs.core.next.call(null,inst_59340);
var inst_59321 = inst_59357;
var inst_59322 = null;
var inst_59323 = (0);
var inst_59324 = (0);
var state_59381__$1 = (function (){var statearr_59418 = state_59381;
(statearr_59418[(9)] = inst_59322);

(statearr_59418[(20)] = inst_59321);

(statearr_59418[(21)] = inst_59323);

(statearr_59418[(12)] = inst_59324);

(statearr_59418[(27)] = inst_59356);

return statearr_59418;
})();
var statearr_59419_59490 = state_59381__$1;
(statearr_59419_59490[(2)] = null);

(statearr_59419_59490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (43))){
var state_59381__$1 = state_59381;
var statearr_59420_59491 = state_59381__$1;
(statearr_59420_59491[(2)] = null);

(statearr_59420_59491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (29))){
var inst_59365 = (state_59381[(2)]);
var state_59381__$1 = state_59381;
var statearr_59421_59492 = state_59381__$1;
(statearr_59421_59492[(2)] = inst_59365);

(statearr_59421_59492[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (44))){
var inst_59374 = (state_59381[(2)]);
var state_59381__$1 = (function (){var statearr_59422 = state_59381;
(statearr_59422[(28)] = inst_59374);

return statearr_59422;
})();
var statearr_59423_59493 = state_59381__$1;
(statearr_59423_59493[(2)] = null);

(statearr_59423_59493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (6))){
var inst_59313 = (state_59381[(29)]);
var inst_59312 = cljs.core.deref.call(null,cs);
var inst_59313__$1 = cljs.core.keys.call(null,inst_59312);
var inst_59314 = cljs.core.count.call(null,inst_59313__$1);
var inst_59315 = cljs.core.reset_BANG_.call(null,dctr,inst_59314);
var inst_59320 = cljs.core.seq.call(null,inst_59313__$1);
var inst_59321 = inst_59320;
var inst_59322 = null;
var inst_59323 = (0);
var inst_59324 = (0);
var state_59381__$1 = (function (){var statearr_59424 = state_59381;
(statearr_59424[(9)] = inst_59322);

(statearr_59424[(29)] = inst_59313__$1);

(statearr_59424[(20)] = inst_59321);

(statearr_59424[(21)] = inst_59323);

(statearr_59424[(30)] = inst_59315);

(statearr_59424[(12)] = inst_59324);

return statearr_59424;
})();
var statearr_59425_59494 = state_59381__$1;
(statearr_59425_59494[(2)] = null);

(statearr_59425_59494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (28))){
var inst_59340 = (state_59381[(25)]);
var inst_59321 = (state_59381[(20)]);
var inst_59340__$1 = cljs.core.seq.call(null,inst_59321);
var state_59381__$1 = (function (){var statearr_59426 = state_59381;
(statearr_59426[(25)] = inst_59340__$1);

return statearr_59426;
})();
if(inst_59340__$1){
var statearr_59427_59495 = state_59381__$1;
(statearr_59427_59495[(1)] = (33));

} else {
var statearr_59428_59496 = state_59381__$1;
(statearr_59428_59496[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (25))){
var inst_59323 = (state_59381[(21)]);
var inst_59324 = (state_59381[(12)]);
var inst_59326 = (inst_59324 < inst_59323);
var inst_59327 = inst_59326;
var state_59381__$1 = state_59381;
if(cljs.core.truth_(inst_59327)){
var statearr_59429_59497 = state_59381__$1;
(statearr_59429_59497[(1)] = (27));

} else {
var statearr_59430_59498 = state_59381__$1;
(statearr_59430_59498[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (34))){
var state_59381__$1 = state_59381;
var statearr_59431_59499 = state_59381__$1;
(statearr_59431_59499[(2)] = null);

(statearr_59431_59499[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (17))){
var state_59381__$1 = state_59381;
var statearr_59432_59500 = state_59381__$1;
(statearr_59432_59500[(2)] = null);

(statearr_59432_59500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (3))){
var inst_59379 = (state_59381[(2)]);
var state_59381__$1 = state_59381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59381__$1,inst_59379);
} else {
if((state_val_59382 === (12))){
var inst_59308 = (state_59381[(2)]);
var state_59381__$1 = state_59381;
var statearr_59433_59501 = state_59381__$1;
(statearr_59433_59501[(2)] = inst_59308);

(statearr_59433_59501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (2))){
var state_59381__$1 = state_59381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59381__$1,(4),ch);
} else {
if((state_val_59382 === (23))){
var state_59381__$1 = state_59381;
var statearr_59434_59502 = state_59381__$1;
(statearr_59434_59502[(2)] = null);

(statearr_59434_59502[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (35))){
var inst_59363 = (state_59381[(2)]);
var state_59381__$1 = state_59381;
var statearr_59435_59503 = state_59381__$1;
(statearr_59435_59503[(2)] = inst_59363);

(statearr_59435_59503[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (19))){
var inst_59280 = (state_59381[(7)]);
var inst_59284 = cljs.core.chunk_first.call(null,inst_59280);
var inst_59285 = cljs.core.chunk_rest.call(null,inst_59280);
var inst_59286 = cljs.core.count.call(null,inst_59284);
var inst_59258 = inst_59285;
var inst_59259 = inst_59284;
var inst_59260 = inst_59286;
var inst_59261 = (0);
var state_59381__$1 = (function (){var statearr_59436 = state_59381;
(statearr_59436[(14)] = inst_59259);

(statearr_59436[(15)] = inst_59258);

(statearr_59436[(16)] = inst_59260);

(statearr_59436[(17)] = inst_59261);

return statearr_59436;
})();
var statearr_59437_59504 = state_59381__$1;
(statearr_59437_59504[(2)] = null);

(statearr_59437_59504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (11))){
var inst_59280 = (state_59381[(7)]);
var inst_59258 = (state_59381[(15)]);
var inst_59280__$1 = cljs.core.seq.call(null,inst_59258);
var state_59381__$1 = (function (){var statearr_59438 = state_59381;
(statearr_59438[(7)] = inst_59280__$1);

return statearr_59438;
})();
if(inst_59280__$1){
var statearr_59439_59505 = state_59381__$1;
(statearr_59439_59505[(1)] = (16));

} else {
var statearr_59440_59506 = state_59381__$1;
(statearr_59440_59506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (9))){
var inst_59310 = (state_59381[(2)]);
var state_59381__$1 = state_59381;
var statearr_59441_59507 = state_59381__$1;
(statearr_59441_59507[(2)] = inst_59310);

(statearr_59441_59507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (5))){
var inst_59256 = cljs.core.deref.call(null,cs);
var inst_59257 = cljs.core.seq.call(null,inst_59256);
var inst_59258 = inst_59257;
var inst_59259 = null;
var inst_59260 = (0);
var inst_59261 = (0);
var state_59381__$1 = (function (){var statearr_59442 = state_59381;
(statearr_59442[(14)] = inst_59259);

(statearr_59442[(15)] = inst_59258);

(statearr_59442[(16)] = inst_59260);

(statearr_59442[(17)] = inst_59261);

return statearr_59442;
})();
var statearr_59443_59508 = state_59381__$1;
(statearr_59443_59508[(2)] = null);

(statearr_59443_59508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (14))){
var state_59381__$1 = state_59381;
var statearr_59444_59509 = state_59381__$1;
(statearr_59444_59509[(2)] = null);

(statearr_59444_59509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (45))){
var inst_59371 = (state_59381[(2)]);
var state_59381__$1 = state_59381;
var statearr_59445_59510 = state_59381__$1;
(statearr_59445_59510[(2)] = inst_59371);

(statearr_59445_59510[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (26))){
var inst_59313 = (state_59381[(29)]);
var inst_59367 = (state_59381[(2)]);
var inst_59368 = cljs.core.seq.call(null,inst_59313);
var state_59381__$1 = (function (){var statearr_59446 = state_59381;
(statearr_59446[(31)] = inst_59367);

return statearr_59446;
})();
if(inst_59368){
var statearr_59447_59511 = state_59381__$1;
(statearr_59447_59511[(1)] = (42));

} else {
var statearr_59448_59512 = state_59381__$1;
(statearr_59448_59512[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (16))){
var inst_59280 = (state_59381[(7)]);
var inst_59282 = cljs.core.chunked_seq_QMARK_.call(null,inst_59280);
var state_59381__$1 = state_59381;
if(inst_59282){
var statearr_59449_59513 = state_59381__$1;
(statearr_59449_59513[(1)] = (19));

} else {
var statearr_59450_59514 = state_59381__$1;
(statearr_59450_59514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (38))){
var inst_59360 = (state_59381[(2)]);
var state_59381__$1 = state_59381;
var statearr_59451_59515 = state_59381__$1;
(statearr_59451_59515[(2)] = inst_59360);

(statearr_59451_59515[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (30))){
var state_59381__$1 = state_59381;
var statearr_59452_59516 = state_59381__$1;
(statearr_59452_59516[(2)] = null);

(statearr_59452_59516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (10))){
var inst_59259 = (state_59381[(14)]);
var inst_59261 = (state_59381[(17)]);
var inst_59269 = cljs.core._nth.call(null,inst_59259,inst_59261);
var inst_59270 = cljs.core.nth.call(null,inst_59269,(0),null);
var inst_59271 = cljs.core.nth.call(null,inst_59269,(1),null);
var state_59381__$1 = (function (){var statearr_59453 = state_59381;
(statearr_59453[(26)] = inst_59270);

return statearr_59453;
})();
if(cljs.core.truth_(inst_59271)){
var statearr_59454_59517 = state_59381__$1;
(statearr_59454_59517[(1)] = (13));

} else {
var statearr_59455_59518 = state_59381__$1;
(statearr_59455_59518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (18))){
var inst_59306 = (state_59381[(2)]);
var state_59381__$1 = state_59381;
var statearr_59456_59519 = state_59381__$1;
(statearr_59456_59519[(2)] = inst_59306);

(statearr_59456_59519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (42))){
var state_59381__$1 = state_59381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59381__$1,(45),dchan);
} else {
if((state_val_59382 === (37))){
var inst_59349 = (state_59381[(23)]);
var inst_59249 = (state_59381[(10)]);
var inst_59340 = (state_59381[(25)]);
var inst_59349__$1 = cljs.core.first.call(null,inst_59340);
var inst_59350 = cljs.core.async.put_BANG_.call(null,inst_59349__$1,inst_59249,done);
var state_59381__$1 = (function (){var statearr_59457 = state_59381;
(statearr_59457[(23)] = inst_59349__$1);

return statearr_59457;
})();
if(cljs.core.truth_(inst_59350)){
var statearr_59458_59520 = state_59381__$1;
(statearr_59458_59520[(1)] = (39));

} else {
var statearr_59459_59521 = state_59381__$1;
(statearr_59459_59521[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59382 === (8))){
var inst_59260 = (state_59381[(16)]);
var inst_59261 = (state_59381[(17)]);
var inst_59263 = (inst_59261 < inst_59260);
var inst_59264 = inst_59263;
var state_59381__$1 = state_59381;
if(cljs.core.truth_(inst_59264)){
var statearr_59460_59522 = state_59381__$1;
(statearr_59460_59522[(1)] = (10));

} else {
var statearr_59461_59523 = state_59381__$1;
(statearr_59461_59523[(1)] = (11));

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
});})(c__58146__auto___59469,cs,m,dchan,dctr,done))
;
return ((function (switch__58034__auto__,c__58146__auto___59469,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__58035__auto__ = null;
var cljs$core$async$mult_$_state_machine__58035__auto____0 = (function (){
var statearr_59465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59465[(0)] = cljs$core$async$mult_$_state_machine__58035__auto__);

(statearr_59465[(1)] = (1));

return statearr_59465;
});
var cljs$core$async$mult_$_state_machine__58035__auto____1 = (function (state_59381){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_59381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e59466){if((e59466 instanceof Object)){
var ex__58038__auto__ = e59466;
var statearr_59467_59524 = state_59381;
(statearr_59467_59524[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59525 = state_59381;
state_59381 = G__59525;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__58035__auto__ = function(state_59381){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__58035__auto____1.call(this,state_59381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__58035__auto____0;
cljs$core$async$mult_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__58035__auto____1;
return cljs$core$async$mult_$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___59469,cs,m,dchan,dctr,done))
})();
var state__58148__auto__ = (function (){var statearr_59468 = f__58147__auto__.call(null);
(statearr_59468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___59469);

return statearr_59468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___59469,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args59526 = [];
var len__49232__auto___59529 = arguments.length;
var i__49233__auto___59530 = (0);
while(true){
if((i__49233__auto___59530 < len__49232__auto___59529)){
args59526.push((arguments[i__49233__auto___59530]));

var G__59531 = (i__49233__auto___59530 + (1));
i__49233__auto___59530 = G__59531;
continue;
} else {
}
break;
}

var G__59528 = args59526.length;
switch (G__59528) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59526.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__48787__auto__ = (((m == null))?null:m);
var m__48788__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,m,ch);
} else {
var m__48788__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__48787__auto__ = (((m == null))?null:m);
var m__48788__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,m,ch);
} else {
var m__48788__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__48787__auto__ = (((m == null))?null:m);
var m__48788__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,m);
} else {
var m__48788__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__48787__auto__ = (((m == null))?null:m);
var m__48788__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,m,state_map);
} else {
var m__48788__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__48787__auto__ = (((m == null))?null:m);
var m__48788__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,m,mode);
} else {
var m__48788__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__49239__auto__ = [];
var len__49232__auto___59543 = arguments.length;
var i__49233__auto___59544 = (0);
while(true){
if((i__49233__auto___59544 < len__49232__auto___59543)){
args__49239__auto__.push((arguments[i__49233__auto___59544]));

var G__59545 = (i__49233__auto___59544 + (1));
i__49233__auto___59544 = G__59545;
continue;
} else {
}
break;
}

var argseq__49240__auto__ = ((((3) < args__49239__auto__.length))?(new cljs.core.IndexedSeq(args__49239__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__49240__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__59537){
var map__59538 = p__59537;
var map__59538__$1 = ((((!((map__59538 == null)))?((((map__59538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59538):map__59538);
var opts = map__59538__$1;
var statearr_59540_59546 = state;
(statearr_59540_59546[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__59538,map__59538__$1,opts){
return (function (val){
var statearr_59541_59547 = state;
(statearr_59541_59547[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__59538,map__59538__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_59542_59548 = state;
(statearr_59542_59548[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq59533){
var G__59534 = cljs.core.first.call(null,seq59533);
var seq59533__$1 = cljs.core.next.call(null,seq59533);
var G__59535 = cljs.core.first.call(null,seq59533__$1);
var seq59533__$2 = cljs.core.next.call(null,seq59533__$1);
var G__59536 = cljs.core.first.call(null,seq59533__$2);
var seq59533__$3 = cljs.core.next.call(null,seq59533__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59534,G__59535,G__59536,seq59533__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async59716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59716 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta59717){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta59717 = meta59717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_59718,meta59717__$1){
var self__ = this;
var _59718__$1 = this;
return (new cljs.core.async.t_cljs$core$async59716(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta59717__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_59718){
var self__ = this;
var _59718__$1 = this;
return self__.meta59717;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59716.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59716.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59716.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59716.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59716.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59716.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59716.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59716.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta59717","meta59717",1933610993,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59716";

cljs.core.async.t_cljs$core$async59716.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__48730__auto__,writer__48731__auto__,opt__48732__auto__){
return cljs.core._write.call(null,writer__48731__auto__,"cljs.core.async/t_cljs$core$async59716");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async59716 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async59716(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta59717){
return (new cljs.core.async.t_cljs$core$async59716(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta59717));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async59716(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58146__auto___59883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___59883,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___59883,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_59820){
var state_val_59821 = (state_59820[(1)]);
if((state_val_59821 === (7))){
var inst_59735 = (state_59820[(2)]);
var state_59820__$1 = state_59820;
var statearr_59822_59884 = state_59820__$1;
(statearr_59822_59884[(2)] = inst_59735);

(statearr_59822_59884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (20))){
var inst_59747 = (state_59820[(7)]);
var state_59820__$1 = state_59820;
var statearr_59823_59885 = state_59820__$1;
(statearr_59823_59885[(2)] = inst_59747);

(statearr_59823_59885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (27))){
var state_59820__$1 = state_59820;
var statearr_59824_59886 = state_59820__$1;
(statearr_59824_59886[(2)] = null);

(statearr_59824_59886[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (1))){
var inst_59722 = (state_59820[(8)]);
var inst_59722__$1 = calc_state.call(null);
var inst_59724 = (inst_59722__$1 == null);
var inst_59725 = cljs.core.not.call(null,inst_59724);
var state_59820__$1 = (function (){var statearr_59825 = state_59820;
(statearr_59825[(8)] = inst_59722__$1);

return statearr_59825;
})();
if(inst_59725){
var statearr_59826_59887 = state_59820__$1;
(statearr_59826_59887[(1)] = (2));

} else {
var statearr_59827_59888 = state_59820__$1;
(statearr_59827_59888[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (24))){
var inst_59780 = (state_59820[(9)]);
var inst_59794 = (state_59820[(10)]);
var inst_59771 = (state_59820[(11)]);
var inst_59794__$1 = inst_59771.call(null,inst_59780);
var state_59820__$1 = (function (){var statearr_59828 = state_59820;
(statearr_59828[(10)] = inst_59794__$1);

return statearr_59828;
})();
if(cljs.core.truth_(inst_59794__$1)){
var statearr_59829_59889 = state_59820__$1;
(statearr_59829_59889[(1)] = (29));

} else {
var statearr_59830_59890 = state_59820__$1;
(statearr_59830_59890[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (4))){
var inst_59738 = (state_59820[(2)]);
var state_59820__$1 = state_59820;
if(cljs.core.truth_(inst_59738)){
var statearr_59831_59891 = state_59820__$1;
(statearr_59831_59891[(1)] = (8));

} else {
var statearr_59832_59892 = state_59820__$1;
(statearr_59832_59892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (15))){
var inst_59765 = (state_59820[(2)]);
var state_59820__$1 = state_59820;
if(cljs.core.truth_(inst_59765)){
var statearr_59833_59893 = state_59820__$1;
(statearr_59833_59893[(1)] = (19));

} else {
var statearr_59834_59894 = state_59820__$1;
(statearr_59834_59894[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (21))){
var inst_59770 = (state_59820[(12)]);
var inst_59770__$1 = (state_59820[(2)]);
var inst_59771 = cljs.core.get.call(null,inst_59770__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59772 = cljs.core.get.call(null,inst_59770__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59773 = cljs.core.get.call(null,inst_59770__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59820__$1 = (function (){var statearr_59835 = state_59820;
(statearr_59835[(13)] = inst_59772);

(statearr_59835[(11)] = inst_59771);

(statearr_59835[(12)] = inst_59770__$1);

return statearr_59835;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_59820__$1,(22),inst_59773);
} else {
if((state_val_59821 === (31))){
var inst_59802 = (state_59820[(2)]);
var state_59820__$1 = state_59820;
if(cljs.core.truth_(inst_59802)){
var statearr_59836_59895 = state_59820__$1;
(statearr_59836_59895[(1)] = (32));

} else {
var statearr_59837_59896 = state_59820__$1;
(statearr_59837_59896[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (32))){
var inst_59779 = (state_59820[(14)]);
var state_59820__$1 = state_59820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59820__$1,(35),out,inst_59779);
} else {
if((state_val_59821 === (33))){
var inst_59770 = (state_59820[(12)]);
var inst_59747 = inst_59770;
var state_59820__$1 = (function (){var statearr_59838 = state_59820;
(statearr_59838[(7)] = inst_59747);

return statearr_59838;
})();
var statearr_59839_59897 = state_59820__$1;
(statearr_59839_59897[(2)] = null);

(statearr_59839_59897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (13))){
var inst_59747 = (state_59820[(7)]);
var inst_59754 = inst_59747.cljs$lang$protocol_mask$partition0$;
var inst_59755 = (inst_59754 & (64));
var inst_59756 = inst_59747.cljs$core$ISeq$;
var inst_59757 = (cljs.core.PROTOCOL_SENTINEL === inst_59756);
var inst_59758 = (inst_59755) || (inst_59757);
var state_59820__$1 = state_59820;
if(cljs.core.truth_(inst_59758)){
var statearr_59840_59898 = state_59820__$1;
(statearr_59840_59898[(1)] = (16));

} else {
var statearr_59841_59899 = state_59820__$1;
(statearr_59841_59899[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (22))){
var inst_59780 = (state_59820[(9)]);
var inst_59779 = (state_59820[(14)]);
var inst_59778 = (state_59820[(2)]);
var inst_59779__$1 = cljs.core.nth.call(null,inst_59778,(0),null);
var inst_59780__$1 = cljs.core.nth.call(null,inst_59778,(1),null);
var inst_59781 = (inst_59779__$1 == null);
var inst_59782 = cljs.core._EQ_.call(null,inst_59780__$1,change);
var inst_59783 = (inst_59781) || (inst_59782);
var state_59820__$1 = (function (){var statearr_59842 = state_59820;
(statearr_59842[(9)] = inst_59780__$1);

(statearr_59842[(14)] = inst_59779__$1);

return statearr_59842;
})();
if(cljs.core.truth_(inst_59783)){
var statearr_59843_59900 = state_59820__$1;
(statearr_59843_59900[(1)] = (23));

} else {
var statearr_59844_59901 = state_59820__$1;
(statearr_59844_59901[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (36))){
var inst_59770 = (state_59820[(12)]);
var inst_59747 = inst_59770;
var state_59820__$1 = (function (){var statearr_59845 = state_59820;
(statearr_59845[(7)] = inst_59747);

return statearr_59845;
})();
var statearr_59846_59902 = state_59820__$1;
(statearr_59846_59902[(2)] = null);

(statearr_59846_59902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (29))){
var inst_59794 = (state_59820[(10)]);
var state_59820__$1 = state_59820;
var statearr_59847_59903 = state_59820__$1;
(statearr_59847_59903[(2)] = inst_59794);

(statearr_59847_59903[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (6))){
var state_59820__$1 = state_59820;
var statearr_59848_59904 = state_59820__$1;
(statearr_59848_59904[(2)] = false);

(statearr_59848_59904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (28))){
var inst_59790 = (state_59820[(2)]);
var inst_59791 = calc_state.call(null);
var inst_59747 = inst_59791;
var state_59820__$1 = (function (){var statearr_59849 = state_59820;
(statearr_59849[(15)] = inst_59790);

(statearr_59849[(7)] = inst_59747);

return statearr_59849;
})();
var statearr_59850_59905 = state_59820__$1;
(statearr_59850_59905[(2)] = null);

(statearr_59850_59905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (25))){
var inst_59816 = (state_59820[(2)]);
var state_59820__$1 = state_59820;
var statearr_59851_59906 = state_59820__$1;
(statearr_59851_59906[(2)] = inst_59816);

(statearr_59851_59906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (34))){
var inst_59814 = (state_59820[(2)]);
var state_59820__$1 = state_59820;
var statearr_59852_59907 = state_59820__$1;
(statearr_59852_59907[(2)] = inst_59814);

(statearr_59852_59907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (17))){
var state_59820__$1 = state_59820;
var statearr_59853_59908 = state_59820__$1;
(statearr_59853_59908[(2)] = false);

(statearr_59853_59908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (3))){
var state_59820__$1 = state_59820;
var statearr_59854_59909 = state_59820__$1;
(statearr_59854_59909[(2)] = false);

(statearr_59854_59909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (12))){
var inst_59818 = (state_59820[(2)]);
var state_59820__$1 = state_59820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59820__$1,inst_59818);
} else {
if((state_val_59821 === (2))){
var inst_59722 = (state_59820[(8)]);
var inst_59727 = inst_59722.cljs$lang$protocol_mask$partition0$;
var inst_59728 = (inst_59727 & (64));
var inst_59729 = inst_59722.cljs$core$ISeq$;
var inst_59730 = (cljs.core.PROTOCOL_SENTINEL === inst_59729);
var inst_59731 = (inst_59728) || (inst_59730);
var state_59820__$1 = state_59820;
if(cljs.core.truth_(inst_59731)){
var statearr_59855_59910 = state_59820__$1;
(statearr_59855_59910[(1)] = (5));

} else {
var statearr_59856_59911 = state_59820__$1;
(statearr_59856_59911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (23))){
var inst_59779 = (state_59820[(14)]);
var inst_59785 = (inst_59779 == null);
var state_59820__$1 = state_59820;
if(cljs.core.truth_(inst_59785)){
var statearr_59857_59912 = state_59820__$1;
(statearr_59857_59912[(1)] = (26));

} else {
var statearr_59858_59913 = state_59820__$1;
(statearr_59858_59913[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (35))){
var inst_59805 = (state_59820[(2)]);
var state_59820__$1 = state_59820;
if(cljs.core.truth_(inst_59805)){
var statearr_59859_59914 = state_59820__$1;
(statearr_59859_59914[(1)] = (36));

} else {
var statearr_59860_59915 = state_59820__$1;
(statearr_59860_59915[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (19))){
var inst_59747 = (state_59820[(7)]);
var inst_59767 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59747);
var state_59820__$1 = state_59820;
var statearr_59861_59916 = state_59820__$1;
(statearr_59861_59916[(2)] = inst_59767);

(statearr_59861_59916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (11))){
var inst_59747 = (state_59820[(7)]);
var inst_59751 = (inst_59747 == null);
var inst_59752 = cljs.core.not.call(null,inst_59751);
var state_59820__$1 = state_59820;
if(inst_59752){
var statearr_59862_59917 = state_59820__$1;
(statearr_59862_59917[(1)] = (13));

} else {
var statearr_59863_59918 = state_59820__$1;
(statearr_59863_59918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (9))){
var inst_59722 = (state_59820[(8)]);
var state_59820__$1 = state_59820;
var statearr_59864_59919 = state_59820__$1;
(statearr_59864_59919[(2)] = inst_59722);

(statearr_59864_59919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (5))){
var state_59820__$1 = state_59820;
var statearr_59865_59920 = state_59820__$1;
(statearr_59865_59920[(2)] = true);

(statearr_59865_59920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (14))){
var state_59820__$1 = state_59820;
var statearr_59866_59921 = state_59820__$1;
(statearr_59866_59921[(2)] = false);

(statearr_59866_59921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (26))){
var inst_59780 = (state_59820[(9)]);
var inst_59787 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_59780);
var state_59820__$1 = state_59820;
var statearr_59867_59922 = state_59820__$1;
(statearr_59867_59922[(2)] = inst_59787);

(statearr_59867_59922[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (16))){
var state_59820__$1 = state_59820;
var statearr_59868_59923 = state_59820__$1;
(statearr_59868_59923[(2)] = true);

(statearr_59868_59923[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (38))){
var inst_59810 = (state_59820[(2)]);
var state_59820__$1 = state_59820;
var statearr_59869_59924 = state_59820__$1;
(statearr_59869_59924[(2)] = inst_59810);

(statearr_59869_59924[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (30))){
var inst_59780 = (state_59820[(9)]);
var inst_59772 = (state_59820[(13)]);
var inst_59771 = (state_59820[(11)]);
var inst_59797 = cljs.core.empty_QMARK_.call(null,inst_59771);
var inst_59798 = inst_59772.call(null,inst_59780);
var inst_59799 = cljs.core.not.call(null,inst_59798);
var inst_59800 = (inst_59797) && (inst_59799);
var state_59820__$1 = state_59820;
var statearr_59870_59925 = state_59820__$1;
(statearr_59870_59925[(2)] = inst_59800);

(statearr_59870_59925[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (10))){
var inst_59722 = (state_59820[(8)]);
var inst_59743 = (state_59820[(2)]);
var inst_59744 = cljs.core.get.call(null,inst_59743,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59745 = cljs.core.get.call(null,inst_59743,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59746 = cljs.core.get.call(null,inst_59743,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59747 = inst_59722;
var state_59820__$1 = (function (){var statearr_59871 = state_59820;
(statearr_59871[(16)] = inst_59744);

(statearr_59871[(7)] = inst_59747);

(statearr_59871[(17)] = inst_59746);

(statearr_59871[(18)] = inst_59745);

return statearr_59871;
})();
var statearr_59872_59926 = state_59820__$1;
(statearr_59872_59926[(2)] = null);

(statearr_59872_59926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (18))){
var inst_59762 = (state_59820[(2)]);
var state_59820__$1 = state_59820;
var statearr_59873_59927 = state_59820__$1;
(statearr_59873_59927[(2)] = inst_59762);

(statearr_59873_59927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (37))){
var state_59820__$1 = state_59820;
var statearr_59874_59928 = state_59820__$1;
(statearr_59874_59928[(2)] = null);

(statearr_59874_59928[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59821 === (8))){
var inst_59722 = (state_59820[(8)]);
var inst_59740 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59722);
var state_59820__$1 = state_59820;
var statearr_59875_59929 = state_59820__$1;
(statearr_59875_59929[(2)] = inst_59740);

(statearr_59875_59929[(1)] = (10));


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
});})(c__58146__auto___59883,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__58034__auto__,c__58146__auto___59883,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__58035__auto__ = null;
var cljs$core$async$mix_$_state_machine__58035__auto____0 = (function (){
var statearr_59879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59879[(0)] = cljs$core$async$mix_$_state_machine__58035__auto__);

(statearr_59879[(1)] = (1));

return statearr_59879;
});
var cljs$core$async$mix_$_state_machine__58035__auto____1 = (function (state_59820){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_59820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e59880){if((e59880 instanceof Object)){
var ex__58038__auto__ = e59880;
var statearr_59881_59930 = state_59820;
(statearr_59881_59930[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59931 = state_59820;
state_59820 = G__59931;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__58035__auto__ = function(state_59820){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__58035__auto____1.call(this,state_59820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__58035__auto____0;
cljs$core$async$mix_$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__58035__auto____1;
return cljs$core$async$mix_$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___59883,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__58148__auto__ = (function (){var statearr_59882 = f__58147__auto__.call(null);
(statearr_59882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___59883);

return statearr_59882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___59883,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__48787__auto__ = (((p == null))?null:p);
var m__48788__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__48788__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__48787__auto__ = (((p == null))?null:p);
var m__48788__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,p,v,ch);
} else {
var m__48788__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args59932 = [];
var len__49232__auto___59935 = arguments.length;
var i__49233__auto___59936 = (0);
while(true){
if((i__49233__auto___59936 < len__49232__auto___59935)){
args59932.push((arguments[i__49233__auto___59936]));

var G__59937 = (i__49233__auto___59936 + (1));
i__49233__auto___59936 = G__59937;
continue;
} else {
}
break;
}

var G__59934 = args59932.length;
switch (G__59934) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59932.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__48787__auto__ = (((p == null))?null:p);
var m__48788__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,p);
} else {
var m__48788__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__48787__auto__ = (((p == null))?null:p);
var m__48788__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__48787__auto__)]);
if(!((m__48788__auto__ == null))){
return m__48788__auto__.call(null,p,v);
} else {
var m__48788__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__48788__auto____$1 == null))){
return m__48788__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args59940 = [];
var len__49232__auto___60065 = arguments.length;
var i__49233__auto___60066 = (0);
while(true){
if((i__49233__auto___60066 < len__49232__auto___60065)){
args59940.push((arguments[i__49233__auto___60066]));

var G__60067 = (i__49233__auto___60066 + (1));
i__49233__auto___60066 = G__60067;
continue;
} else {
}
break;
}

var G__59942 = args59940.length;
switch (G__59942) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59940.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__48119__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__48119__auto__)){
return or__48119__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__48119__auto__,mults){
return (function (p1__59939_SHARP_){
if(cljs.core.truth_(p1__59939_SHARP_.call(null,topic))){
return p1__59939_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__59939_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__48119__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async59943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59943 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta59944){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta59944 = meta59944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_59945,meta59944__$1){
var self__ = this;
var _59945__$1 = this;
return (new cljs.core.async.t_cljs$core$async59943(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta59944__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_59945){
var self__ = this;
var _59945__$1 = this;
return self__.meta59944;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59943.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59943.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59943.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59943.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59943.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59943.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta59944","meta59944",2001076315,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59943";

cljs.core.async.t_cljs$core$async59943.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__48730__auto__,writer__48731__auto__,opt__48732__auto__){
return cljs.core._write.call(null,writer__48731__auto__,"cljs.core.async/t_cljs$core$async59943");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async59943 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async59943(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59944){
return (new cljs.core.async.t_cljs$core$async59943(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59944));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async59943(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58146__auto___60069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___60069,mults,ensure_mult,p){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___60069,mults,ensure_mult,p){
return (function (state_60017){
var state_val_60018 = (state_60017[(1)]);
if((state_val_60018 === (7))){
var inst_60013 = (state_60017[(2)]);
var state_60017__$1 = state_60017;
var statearr_60019_60070 = state_60017__$1;
(statearr_60019_60070[(2)] = inst_60013);

(statearr_60019_60070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (20))){
var state_60017__$1 = state_60017;
var statearr_60020_60071 = state_60017__$1;
(statearr_60020_60071[(2)] = null);

(statearr_60020_60071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (1))){
var state_60017__$1 = state_60017;
var statearr_60021_60072 = state_60017__$1;
(statearr_60021_60072[(2)] = null);

(statearr_60021_60072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (24))){
var inst_59996 = (state_60017[(7)]);
var inst_60005 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_59996);
var state_60017__$1 = state_60017;
var statearr_60022_60073 = state_60017__$1;
(statearr_60022_60073[(2)] = inst_60005);

(statearr_60022_60073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (4))){
var inst_59948 = (state_60017[(8)]);
var inst_59948__$1 = (state_60017[(2)]);
var inst_59949 = (inst_59948__$1 == null);
var state_60017__$1 = (function (){var statearr_60023 = state_60017;
(statearr_60023[(8)] = inst_59948__$1);

return statearr_60023;
})();
if(cljs.core.truth_(inst_59949)){
var statearr_60024_60074 = state_60017__$1;
(statearr_60024_60074[(1)] = (5));

} else {
var statearr_60025_60075 = state_60017__$1;
(statearr_60025_60075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (15))){
var inst_59990 = (state_60017[(2)]);
var state_60017__$1 = state_60017;
var statearr_60026_60076 = state_60017__$1;
(statearr_60026_60076[(2)] = inst_59990);

(statearr_60026_60076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (21))){
var inst_60010 = (state_60017[(2)]);
var state_60017__$1 = (function (){var statearr_60027 = state_60017;
(statearr_60027[(9)] = inst_60010);

return statearr_60027;
})();
var statearr_60028_60077 = state_60017__$1;
(statearr_60028_60077[(2)] = null);

(statearr_60028_60077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (13))){
var inst_59972 = (state_60017[(10)]);
var inst_59974 = cljs.core.chunked_seq_QMARK_.call(null,inst_59972);
var state_60017__$1 = state_60017;
if(inst_59974){
var statearr_60029_60078 = state_60017__$1;
(statearr_60029_60078[(1)] = (16));

} else {
var statearr_60030_60079 = state_60017__$1;
(statearr_60030_60079[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (22))){
var inst_60002 = (state_60017[(2)]);
var state_60017__$1 = state_60017;
if(cljs.core.truth_(inst_60002)){
var statearr_60031_60080 = state_60017__$1;
(statearr_60031_60080[(1)] = (23));

} else {
var statearr_60032_60081 = state_60017__$1;
(statearr_60032_60081[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (6))){
var inst_59948 = (state_60017[(8)]);
var inst_59998 = (state_60017[(11)]);
var inst_59996 = (state_60017[(7)]);
var inst_59996__$1 = topic_fn.call(null,inst_59948);
var inst_59997 = cljs.core.deref.call(null,mults);
var inst_59998__$1 = cljs.core.get.call(null,inst_59997,inst_59996__$1);
var state_60017__$1 = (function (){var statearr_60033 = state_60017;
(statearr_60033[(11)] = inst_59998__$1);

(statearr_60033[(7)] = inst_59996__$1);

return statearr_60033;
})();
if(cljs.core.truth_(inst_59998__$1)){
var statearr_60034_60082 = state_60017__$1;
(statearr_60034_60082[(1)] = (19));

} else {
var statearr_60035_60083 = state_60017__$1;
(statearr_60035_60083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (25))){
var inst_60007 = (state_60017[(2)]);
var state_60017__$1 = state_60017;
var statearr_60036_60084 = state_60017__$1;
(statearr_60036_60084[(2)] = inst_60007);

(statearr_60036_60084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (17))){
var inst_59972 = (state_60017[(10)]);
var inst_59981 = cljs.core.first.call(null,inst_59972);
var inst_59982 = cljs.core.async.muxch_STAR_.call(null,inst_59981);
var inst_59983 = cljs.core.async.close_BANG_.call(null,inst_59982);
var inst_59984 = cljs.core.next.call(null,inst_59972);
var inst_59958 = inst_59984;
var inst_59959 = null;
var inst_59960 = (0);
var inst_59961 = (0);
var state_60017__$1 = (function (){var statearr_60037 = state_60017;
(statearr_60037[(12)] = inst_59959);

(statearr_60037[(13)] = inst_59961);

(statearr_60037[(14)] = inst_59958);

(statearr_60037[(15)] = inst_59983);

(statearr_60037[(16)] = inst_59960);

return statearr_60037;
})();
var statearr_60038_60085 = state_60017__$1;
(statearr_60038_60085[(2)] = null);

(statearr_60038_60085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (3))){
var inst_60015 = (state_60017[(2)]);
var state_60017__$1 = state_60017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60017__$1,inst_60015);
} else {
if((state_val_60018 === (12))){
var inst_59992 = (state_60017[(2)]);
var state_60017__$1 = state_60017;
var statearr_60039_60086 = state_60017__$1;
(statearr_60039_60086[(2)] = inst_59992);

(statearr_60039_60086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (2))){
var state_60017__$1 = state_60017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60017__$1,(4),ch);
} else {
if((state_val_60018 === (23))){
var state_60017__$1 = state_60017;
var statearr_60040_60087 = state_60017__$1;
(statearr_60040_60087[(2)] = null);

(statearr_60040_60087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (19))){
var inst_59948 = (state_60017[(8)]);
var inst_59998 = (state_60017[(11)]);
var inst_60000 = cljs.core.async.muxch_STAR_.call(null,inst_59998);
var state_60017__$1 = state_60017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60017__$1,(22),inst_60000,inst_59948);
} else {
if((state_val_60018 === (11))){
var inst_59958 = (state_60017[(14)]);
var inst_59972 = (state_60017[(10)]);
var inst_59972__$1 = cljs.core.seq.call(null,inst_59958);
var state_60017__$1 = (function (){var statearr_60041 = state_60017;
(statearr_60041[(10)] = inst_59972__$1);

return statearr_60041;
})();
if(inst_59972__$1){
var statearr_60042_60088 = state_60017__$1;
(statearr_60042_60088[(1)] = (13));

} else {
var statearr_60043_60089 = state_60017__$1;
(statearr_60043_60089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (9))){
var inst_59994 = (state_60017[(2)]);
var state_60017__$1 = state_60017;
var statearr_60044_60090 = state_60017__$1;
(statearr_60044_60090[(2)] = inst_59994);

(statearr_60044_60090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (5))){
var inst_59955 = cljs.core.deref.call(null,mults);
var inst_59956 = cljs.core.vals.call(null,inst_59955);
var inst_59957 = cljs.core.seq.call(null,inst_59956);
var inst_59958 = inst_59957;
var inst_59959 = null;
var inst_59960 = (0);
var inst_59961 = (0);
var state_60017__$1 = (function (){var statearr_60045 = state_60017;
(statearr_60045[(12)] = inst_59959);

(statearr_60045[(13)] = inst_59961);

(statearr_60045[(14)] = inst_59958);

(statearr_60045[(16)] = inst_59960);

return statearr_60045;
})();
var statearr_60046_60091 = state_60017__$1;
(statearr_60046_60091[(2)] = null);

(statearr_60046_60091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (14))){
var state_60017__$1 = state_60017;
var statearr_60050_60092 = state_60017__$1;
(statearr_60050_60092[(2)] = null);

(statearr_60050_60092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (16))){
var inst_59972 = (state_60017[(10)]);
var inst_59976 = cljs.core.chunk_first.call(null,inst_59972);
var inst_59977 = cljs.core.chunk_rest.call(null,inst_59972);
var inst_59978 = cljs.core.count.call(null,inst_59976);
var inst_59958 = inst_59977;
var inst_59959 = inst_59976;
var inst_59960 = inst_59978;
var inst_59961 = (0);
var state_60017__$1 = (function (){var statearr_60051 = state_60017;
(statearr_60051[(12)] = inst_59959);

(statearr_60051[(13)] = inst_59961);

(statearr_60051[(14)] = inst_59958);

(statearr_60051[(16)] = inst_59960);

return statearr_60051;
})();
var statearr_60052_60093 = state_60017__$1;
(statearr_60052_60093[(2)] = null);

(statearr_60052_60093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (10))){
var inst_59959 = (state_60017[(12)]);
var inst_59961 = (state_60017[(13)]);
var inst_59958 = (state_60017[(14)]);
var inst_59960 = (state_60017[(16)]);
var inst_59966 = cljs.core._nth.call(null,inst_59959,inst_59961);
var inst_59967 = cljs.core.async.muxch_STAR_.call(null,inst_59966);
var inst_59968 = cljs.core.async.close_BANG_.call(null,inst_59967);
var inst_59969 = (inst_59961 + (1));
var tmp60047 = inst_59959;
var tmp60048 = inst_59958;
var tmp60049 = inst_59960;
var inst_59958__$1 = tmp60048;
var inst_59959__$1 = tmp60047;
var inst_59960__$1 = tmp60049;
var inst_59961__$1 = inst_59969;
var state_60017__$1 = (function (){var statearr_60053 = state_60017;
(statearr_60053[(12)] = inst_59959__$1);

(statearr_60053[(13)] = inst_59961__$1);

(statearr_60053[(14)] = inst_59958__$1);

(statearr_60053[(17)] = inst_59968);

(statearr_60053[(16)] = inst_59960__$1);

return statearr_60053;
})();
var statearr_60054_60094 = state_60017__$1;
(statearr_60054_60094[(2)] = null);

(statearr_60054_60094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (18))){
var inst_59987 = (state_60017[(2)]);
var state_60017__$1 = state_60017;
var statearr_60055_60095 = state_60017__$1;
(statearr_60055_60095[(2)] = inst_59987);

(statearr_60055_60095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60018 === (8))){
var inst_59961 = (state_60017[(13)]);
var inst_59960 = (state_60017[(16)]);
var inst_59963 = (inst_59961 < inst_59960);
var inst_59964 = inst_59963;
var state_60017__$1 = state_60017;
if(cljs.core.truth_(inst_59964)){
var statearr_60056_60096 = state_60017__$1;
(statearr_60056_60096[(1)] = (10));

} else {
var statearr_60057_60097 = state_60017__$1;
(statearr_60057_60097[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__58146__auto___60069,mults,ensure_mult,p))
;
return ((function (switch__58034__auto__,c__58146__auto___60069,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__58035__auto__ = null;
var cljs$core$async$state_machine__58035__auto____0 = (function (){
var statearr_60061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60061[(0)] = cljs$core$async$state_machine__58035__auto__);

(statearr_60061[(1)] = (1));

return statearr_60061;
});
var cljs$core$async$state_machine__58035__auto____1 = (function (state_60017){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_60017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e60062){if((e60062 instanceof Object)){
var ex__58038__auto__ = e60062;
var statearr_60063_60098 = state_60017;
(statearr_60063_60098[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60099 = state_60017;
state_60017 = G__60099;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$state_machine__58035__auto__ = function(state_60017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58035__auto____1.call(this,state_60017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58035__auto____0;
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58035__auto____1;
return cljs$core$async$state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___60069,mults,ensure_mult,p))
})();
var state__58148__auto__ = (function (){var statearr_60064 = f__58147__auto__.call(null);
(statearr_60064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___60069);

return statearr_60064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___60069,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args60100 = [];
var len__49232__auto___60103 = arguments.length;
var i__49233__auto___60104 = (0);
while(true){
if((i__49233__auto___60104 < len__49232__auto___60103)){
args60100.push((arguments[i__49233__auto___60104]));

var G__60105 = (i__49233__auto___60104 + (1));
i__49233__auto___60104 = G__60105;
continue;
} else {
}
break;
}

var G__60102 = args60100.length;
switch (G__60102) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60100.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args60107 = [];
var len__49232__auto___60110 = arguments.length;
var i__49233__auto___60111 = (0);
while(true){
if((i__49233__auto___60111 < len__49232__auto___60110)){
args60107.push((arguments[i__49233__auto___60111]));

var G__60112 = (i__49233__auto___60111 + (1));
i__49233__auto___60111 = G__60112;
continue;
} else {
}
break;
}

var G__60109 = args60107.length;
switch (G__60109) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60107.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args60114 = [];
var len__49232__auto___60185 = arguments.length;
var i__49233__auto___60186 = (0);
while(true){
if((i__49233__auto___60186 < len__49232__auto___60185)){
args60114.push((arguments[i__49233__auto___60186]));

var G__60187 = (i__49233__auto___60186 + (1));
i__49233__auto___60186 = G__60187;
continue;
} else {
}
break;
}

var G__60116 = args60114.length;
switch (G__60116) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60114.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__58146__auto___60189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___60189,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___60189,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_60155){
var state_val_60156 = (state_60155[(1)]);
if((state_val_60156 === (7))){
var state_60155__$1 = state_60155;
var statearr_60157_60190 = state_60155__$1;
(statearr_60157_60190[(2)] = null);

(statearr_60157_60190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60156 === (1))){
var state_60155__$1 = state_60155;
var statearr_60158_60191 = state_60155__$1;
(statearr_60158_60191[(2)] = null);

(statearr_60158_60191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60156 === (4))){
var inst_60119 = (state_60155[(7)]);
var inst_60121 = (inst_60119 < cnt);
var state_60155__$1 = state_60155;
if(cljs.core.truth_(inst_60121)){
var statearr_60159_60192 = state_60155__$1;
(statearr_60159_60192[(1)] = (6));

} else {
var statearr_60160_60193 = state_60155__$1;
(statearr_60160_60193[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60156 === (15))){
var inst_60151 = (state_60155[(2)]);
var state_60155__$1 = state_60155;
var statearr_60161_60194 = state_60155__$1;
(statearr_60161_60194[(2)] = inst_60151);

(statearr_60161_60194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60156 === (13))){
var inst_60144 = cljs.core.async.close_BANG_.call(null,out);
var state_60155__$1 = state_60155;
var statearr_60162_60195 = state_60155__$1;
(statearr_60162_60195[(2)] = inst_60144);

(statearr_60162_60195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60156 === (6))){
var state_60155__$1 = state_60155;
var statearr_60163_60196 = state_60155__$1;
(statearr_60163_60196[(2)] = null);

(statearr_60163_60196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60156 === (3))){
var inst_60153 = (state_60155[(2)]);
var state_60155__$1 = state_60155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60155__$1,inst_60153);
} else {
if((state_val_60156 === (12))){
var inst_60141 = (state_60155[(8)]);
var inst_60141__$1 = (state_60155[(2)]);
var inst_60142 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_60141__$1);
var state_60155__$1 = (function (){var statearr_60164 = state_60155;
(statearr_60164[(8)] = inst_60141__$1);

return statearr_60164;
})();
if(cljs.core.truth_(inst_60142)){
var statearr_60165_60197 = state_60155__$1;
(statearr_60165_60197[(1)] = (13));

} else {
var statearr_60166_60198 = state_60155__$1;
(statearr_60166_60198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60156 === (2))){
var inst_60118 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_60119 = (0);
var state_60155__$1 = (function (){var statearr_60167 = state_60155;
(statearr_60167[(7)] = inst_60119);

(statearr_60167[(9)] = inst_60118);

return statearr_60167;
})();
var statearr_60168_60199 = state_60155__$1;
(statearr_60168_60199[(2)] = null);

(statearr_60168_60199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60156 === (11))){
var inst_60119 = (state_60155[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_60155,(10),Object,null,(9));
var inst_60128 = chs__$1.call(null,inst_60119);
var inst_60129 = done.call(null,inst_60119);
var inst_60130 = cljs.core.async.take_BANG_.call(null,inst_60128,inst_60129);
var state_60155__$1 = state_60155;
var statearr_60169_60200 = state_60155__$1;
(statearr_60169_60200[(2)] = inst_60130);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60155__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60156 === (9))){
var inst_60119 = (state_60155[(7)]);
var inst_60132 = (state_60155[(2)]);
var inst_60133 = (inst_60119 + (1));
var inst_60119__$1 = inst_60133;
var state_60155__$1 = (function (){var statearr_60170 = state_60155;
(statearr_60170[(7)] = inst_60119__$1);

(statearr_60170[(10)] = inst_60132);

return statearr_60170;
})();
var statearr_60171_60201 = state_60155__$1;
(statearr_60171_60201[(2)] = null);

(statearr_60171_60201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60156 === (5))){
var inst_60139 = (state_60155[(2)]);
var state_60155__$1 = (function (){var statearr_60172 = state_60155;
(statearr_60172[(11)] = inst_60139);

return statearr_60172;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60155__$1,(12),dchan);
} else {
if((state_val_60156 === (14))){
var inst_60141 = (state_60155[(8)]);
var inst_60146 = cljs.core.apply.call(null,f,inst_60141);
var state_60155__$1 = state_60155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60155__$1,(16),out,inst_60146);
} else {
if((state_val_60156 === (16))){
var inst_60148 = (state_60155[(2)]);
var state_60155__$1 = (function (){var statearr_60173 = state_60155;
(statearr_60173[(12)] = inst_60148);

return statearr_60173;
})();
var statearr_60174_60202 = state_60155__$1;
(statearr_60174_60202[(2)] = null);

(statearr_60174_60202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60156 === (10))){
var inst_60123 = (state_60155[(2)]);
var inst_60124 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_60155__$1 = (function (){var statearr_60175 = state_60155;
(statearr_60175[(13)] = inst_60123);

return statearr_60175;
})();
var statearr_60176_60203 = state_60155__$1;
(statearr_60176_60203[(2)] = inst_60124);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60155__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60156 === (8))){
var inst_60137 = (state_60155[(2)]);
var state_60155__$1 = state_60155;
var statearr_60177_60204 = state_60155__$1;
(statearr_60177_60204[(2)] = inst_60137);

(statearr_60177_60204[(1)] = (5));


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
});})(c__58146__auto___60189,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__58034__auto__,c__58146__auto___60189,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__58035__auto__ = null;
var cljs$core$async$state_machine__58035__auto____0 = (function (){
var statearr_60181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60181[(0)] = cljs$core$async$state_machine__58035__auto__);

(statearr_60181[(1)] = (1));

return statearr_60181;
});
var cljs$core$async$state_machine__58035__auto____1 = (function (state_60155){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_60155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e60182){if((e60182 instanceof Object)){
var ex__58038__auto__ = e60182;
var statearr_60183_60205 = state_60155;
(statearr_60183_60205[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60206 = state_60155;
state_60155 = G__60206;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$state_machine__58035__auto__ = function(state_60155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58035__auto____1.call(this,state_60155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58035__auto____0;
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58035__auto____1;
return cljs$core$async$state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___60189,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__58148__auto__ = (function (){var statearr_60184 = f__58147__auto__.call(null);
(statearr_60184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___60189);

return statearr_60184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___60189,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args60208 = [];
var len__49232__auto___60266 = arguments.length;
var i__49233__auto___60267 = (0);
while(true){
if((i__49233__auto___60267 < len__49232__auto___60266)){
args60208.push((arguments[i__49233__auto___60267]));

var G__60268 = (i__49233__auto___60267 + (1));
i__49233__auto___60267 = G__60268;
continue;
} else {
}
break;
}

var G__60210 = args60208.length;
switch (G__60210) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60208.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__58146__auto___60270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___60270,out){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___60270,out){
return (function (state_60242){
var state_val_60243 = (state_60242[(1)]);
if((state_val_60243 === (7))){
var inst_60221 = (state_60242[(7)]);
var inst_60222 = (state_60242[(8)]);
var inst_60221__$1 = (state_60242[(2)]);
var inst_60222__$1 = cljs.core.nth.call(null,inst_60221__$1,(0),null);
var inst_60223 = cljs.core.nth.call(null,inst_60221__$1,(1),null);
var inst_60224 = (inst_60222__$1 == null);
var state_60242__$1 = (function (){var statearr_60244 = state_60242;
(statearr_60244[(7)] = inst_60221__$1);

(statearr_60244[(8)] = inst_60222__$1);

(statearr_60244[(9)] = inst_60223);

return statearr_60244;
})();
if(cljs.core.truth_(inst_60224)){
var statearr_60245_60271 = state_60242__$1;
(statearr_60245_60271[(1)] = (8));

} else {
var statearr_60246_60272 = state_60242__$1;
(statearr_60246_60272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60243 === (1))){
var inst_60211 = cljs.core.vec.call(null,chs);
var inst_60212 = inst_60211;
var state_60242__$1 = (function (){var statearr_60247 = state_60242;
(statearr_60247[(10)] = inst_60212);

return statearr_60247;
})();
var statearr_60248_60273 = state_60242__$1;
(statearr_60248_60273[(2)] = null);

(statearr_60248_60273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60243 === (4))){
var inst_60212 = (state_60242[(10)]);
var state_60242__$1 = state_60242;
return cljs.core.async.ioc_alts_BANG_.call(null,state_60242__$1,(7),inst_60212);
} else {
if((state_val_60243 === (6))){
var inst_60238 = (state_60242[(2)]);
var state_60242__$1 = state_60242;
var statearr_60249_60274 = state_60242__$1;
(statearr_60249_60274[(2)] = inst_60238);

(statearr_60249_60274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60243 === (3))){
var inst_60240 = (state_60242[(2)]);
var state_60242__$1 = state_60242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60242__$1,inst_60240);
} else {
if((state_val_60243 === (2))){
var inst_60212 = (state_60242[(10)]);
var inst_60214 = cljs.core.count.call(null,inst_60212);
var inst_60215 = (inst_60214 > (0));
var state_60242__$1 = state_60242;
if(cljs.core.truth_(inst_60215)){
var statearr_60251_60275 = state_60242__$1;
(statearr_60251_60275[(1)] = (4));

} else {
var statearr_60252_60276 = state_60242__$1;
(statearr_60252_60276[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60243 === (11))){
var inst_60212 = (state_60242[(10)]);
var inst_60231 = (state_60242[(2)]);
var tmp60250 = inst_60212;
var inst_60212__$1 = tmp60250;
var state_60242__$1 = (function (){var statearr_60253 = state_60242;
(statearr_60253[(11)] = inst_60231);

(statearr_60253[(10)] = inst_60212__$1);

return statearr_60253;
})();
var statearr_60254_60277 = state_60242__$1;
(statearr_60254_60277[(2)] = null);

(statearr_60254_60277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60243 === (9))){
var inst_60222 = (state_60242[(8)]);
var state_60242__$1 = state_60242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60242__$1,(11),out,inst_60222);
} else {
if((state_val_60243 === (5))){
var inst_60236 = cljs.core.async.close_BANG_.call(null,out);
var state_60242__$1 = state_60242;
var statearr_60255_60278 = state_60242__$1;
(statearr_60255_60278[(2)] = inst_60236);

(statearr_60255_60278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60243 === (10))){
var inst_60234 = (state_60242[(2)]);
var state_60242__$1 = state_60242;
var statearr_60256_60279 = state_60242__$1;
(statearr_60256_60279[(2)] = inst_60234);

(statearr_60256_60279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60243 === (8))){
var inst_60221 = (state_60242[(7)]);
var inst_60222 = (state_60242[(8)]);
var inst_60223 = (state_60242[(9)]);
var inst_60212 = (state_60242[(10)]);
var inst_60226 = (function (){var cs = inst_60212;
var vec__60217 = inst_60221;
var v = inst_60222;
var c = inst_60223;
return ((function (cs,vec__60217,v,c,inst_60221,inst_60222,inst_60223,inst_60212,state_val_60243,c__58146__auto___60270,out){
return (function (p1__60207_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__60207_SHARP_);
});
;})(cs,vec__60217,v,c,inst_60221,inst_60222,inst_60223,inst_60212,state_val_60243,c__58146__auto___60270,out))
})();
var inst_60227 = cljs.core.filterv.call(null,inst_60226,inst_60212);
var inst_60212__$1 = inst_60227;
var state_60242__$1 = (function (){var statearr_60257 = state_60242;
(statearr_60257[(10)] = inst_60212__$1);

return statearr_60257;
})();
var statearr_60258_60280 = state_60242__$1;
(statearr_60258_60280[(2)] = null);

(statearr_60258_60280[(1)] = (2));


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
});})(c__58146__auto___60270,out))
;
return ((function (switch__58034__auto__,c__58146__auto___60270,out){
return (function() {
var cljs$core$async$state_machine__58035__auto__ = null;
var cljs$core$async$state_machine__58035__auto____0 = (function (){
var statearr_60262 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60262[(0)] = cljs$core$async$state_machine__58035__auto__);

(statearr_60262[(1)] = (1));

return statearr_60262;
});
var cljs$core$async$state_machine__58035__auto____1 = (function (state_60242){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_60242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e60263){if((e60263 instanceof Object)){
var ex__58038__auto__ = e60263;
var statearr_60264_60281 = state_60242;
(statearr_60264_60281[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60282 = state_60242;
state_60242 = G__60282;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$state_machine__58035__auto__ = function(state_60242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58035__auto____1.call(this,state_60242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58035__auto____0;
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58035__auto____1;
return cljs$core$async$state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___60270,out))
})();
var state__58148__auto__ = (function (){var statearr_60265 = f__58147__auto__.call(null);
(statearr_60265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___60270);

return statearr_60265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___60270,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args60283 = [];
var len__49232__auto___60332 = arguments.length;
var i__49233__auto___60333 = (0);
while(true){
if((i__49233__auto___60333 < len__49232__auto___60332)){
args60283.push((arguments[i__49233__auto___60333]));

var G__60334 = (i__49233__auto___60333 + (1));
i__49233__auto___60333 = G__60334;
continue;
} else {
}
break;
}

var G__60285 = args60283.length;
switch (G__60285) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60283.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__58146__auto___60336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___60336,out){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___60336,out){
return (function (state_60309){
var state_val_60310 = (state_60309[(1)]);
if((state_val_60310 === (7))){
var inst_60291 = (state_60309[(7)]);
var inst_60291__$1 = (state_60309[(2)]);
var inst_60292 = (inst_60291__$1 == null);
var inst_60293 = cljs.core.not.call(null,inst_60292);
var state_60309__$1 = (function (){var statearr_60311 = state_60309;
(statearr_60311[(7)] = inst_60291__$1);

return statearr_60311;
})();
if(inst_60293){
var statearr_60312_60337 = state_60309__$1;
(statearr_60312_60337[(1)] = (8));

} else {
var statearr_60313_60338 = state_60309__$1;
(statearr_60313_60338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (1))){
var inst_60286 = (0);
var state_60309__$1 = (function (){var statearr_60314 = state_60309;
(statearr_60314[(8)] = inst_60286);

return statearr_60314;
})();
var statearr_60315_60339 = state_60309__$1;
(statearr_60315_60339[(2)] = null);

(statearr_60315_60339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (4))){
var state_60309__$1 = state_60309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60309__$1,(7),ch);
} else {
if((state_val_60310 === (6))){
var inst_60304 = (state_60309[(2)]);
var state_60309__$1 = state_60309;
var statearr_60316_60340 = state_60309__$1;
(statearr_60316_60340[(2)] = inst_60304);

(statearr_60316_60340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (3))){
var inst_60306 = (state_60309[(2)]);
var inst_60307 = cljs.core.async.close_BANG_.call(null,out);
var state_60309__$1 = (function (){var statearr_60317 = state_60309;
(statearr_60317[(9)] = inst_60306);

return statearr_60317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60309__$1,inst_60307);
} else {
if((state_val_60310 === (2))){
var inst_60286 = (state_60309[(8)]);
var inst_60288 = (inst_60286 < n);
var state_60309__$1 = state_60309;
if(cljs.core.truth_(inst_60288)){
var statearr_60318_60341 = state_60309__$1;
(statearr_60318_60341[(1)] = (4));

} else {
var statearr_60319_60342 = state_60309__$1;
(statearr_60319_60342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (11))){
var inst_60286 = (state_60309[(8)]);
var inst_60296 = (state_60309[(2)]);
var inst_60297 = (inst_60286 + (1));
var inst_60286__$1 = inst_60297;
var state_60309__$1 = (function (){var statearr_60320 = state_60309;
(statearr_60320[(8)] = inst_60286__$1);

(statearr_60320[(10)] = inst_60296);

return statearr_60320;
})();
var statearr_60321_60343 = state_60309__$1;
(statearr_60321_60343[(2)] = null);

(statearr_60321_60343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (9))){
var state_60309__$1 = state_60309;
var statearr_60322_60344 = state_60309__$1;
(statearr_60322_60344[(2)] = null);

(statearr_60322_60344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (5))){
var state_60309__$1 = state_60309;
var statearr_60323_60345 = state_60309__$1;
(statearr_60323_60345[(2)] = null);

(statearr_60323_60345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (10))){
var inst_60301 = (state_60309[(2)]);
var state_60309__$1 = state_60309;
var statearr_60324_60346 = state_60309__$1;
(statearr_60324_60346[(2)] = inst_60301);

(statearr_60324_60346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60310 === (8))){
var inst_60291 = (state_60309[(7)]);
var state_60309__$1 = state_60309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60309__$1,(11),out,inst_60291);
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
});})(c__58146__auto___60336,out))
;
return ((function (switch__58034__auto__,c__58146__auto___60336,out){
return (function() {
var cljs$core$async$state_machine__58035__auto__ = null;
var cljs$core$async$state_machine__58035__auto____0 = (function (){
var statearr_60328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60328[(0)] = cljs$core$async$state_machine__58035__auto__);

(statearr_60328[(1)] = (1));

return statearr_60328;
});
var cljs$core$async$state_machine__58035__auto____1 = (function (state_60309){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_60309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e60329){if((e60329 instanceof Object)){
var ex__58038__auto__ = e60329;
var statearr_60330_60347 = state_60309;
(statearr_60330_60347[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60348 = state_60309;
state_60309 = G__60348;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$state_machine__58035__auto__ = function(state_60309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58035__auto____1.call(this,state_60309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58035__auto____0;
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58035__auto____1;
return cljs$core$async$state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___60336,out))
})();
var state__58148__auto__ = (function (){var statearr_60331 = f__58147__auto__.call(null);
(statearr_60331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___60336);

return statearr_60331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___60336,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async60356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60356 = (function (f,ch,meta60357){
this.f = f;
this.ch = ch;
this.meta60357 = meta60357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60358,meta60357__$1){
var self__ = this;
var _60358__$1 = this;
return (new cljs.core.async.t_cljs$core$async60356(self__.f,self__.ch,meta60357__$1));
});

cljs.core.async.t_cljs$core$async60356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60358){
var self__ = this;
var _60358__$1 = this;
return self__.meta60357;
});

cljs.core.async.t_cljs$core$async60356.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60356.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60356.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async60359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60359 = (function (f,ch,meta60357,_,fn1,meta60360){
this.f = f;
this.ch = ch;
this.meta60357 = meta60357;
this._ = _;
this.fn1 = fn1;
this.meta60360 = meta60360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_60361,meta60360__$1){
var self__ = this;
var _60361__$1 = this;
return (new cljs.core.async.t_cljs$core$async60359(self__.f,self__.ch,self__.meta60357,self__._,self__.fn1,meta60360__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async60359.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_60361){
var self__ = this;
var _60361__$1 = this;
return self__.meta60360;
});})(___$1))
;

cljs.core.async.t_cljs$core$async60359.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async60359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async60359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__60349_SHARP_){
return f1.call(null,(((p1__60349_SHARP_ == null))?null:self__.f.call(null,p1__60349_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async60359.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60357","meta60357",1760824821,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async60356","cljs.core.async/t_cljs$core$async60356",-1664499438,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta60360","meta60360",92677512,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async60359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60359";

cljs.core.async.t_cljs$core$async60359.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__48730__auto__,writer__48731__auto__,opt__48732__auto__){
return cljs.core._write.call(null,writer__48731__auto__,"cljs.core.async/t_cljs$core$async60359");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async60359 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60359(f__$1,ch__$1,meta60357__$1,___$2,fn1__$1,meta60360){
return (new cljs.core.async.t_cljs$core$async60359(f__$1,ch__$1,meta60357__$1,___$2,fn1__$1,meta60360));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async60359(self__.f,self__.ch,self__.meta60357,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__48107__auto__ = ret;
if(cljs.core.truth_(and__48107__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__48107__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async60356.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async60356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60357","meta60357",1760824821,null)], null);
});

cljs.core.async.t_cljs$core$async60356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60356";

cljs.core.async.t_cljs$core$async60356.cljs$lang$ctorPrWriter = (function (this__48730__auto__,writer__48731__auto__,opt__48732__auto__){
return cljs.core._write.call(null,writer__48731__auto__,"cljs.core.async/t_cljs$core$async60356");
});

cljs.core.async.__GT_t_cljs$core$async60356 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60356(f__$1,ch__$1,meta60357){
return (new cljs.core.async.t_cljs$core$async60356(f__$1,ch__$1,meta60357));
});

}

return (new cljs.core.async.t_cljs$core$async60356(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async60365 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60365 = (function (f,ch,meta60366){
this.f = f;
this.ch = ch;
this.meta60366 = meta60366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60367,meta60366__$1){
var self__ = this;
var _60367__$1 = this;
return (new cljs.core.async.t_cljs$core$async60365(self__.f,self__.ch,meta60366__$1));
});

cljs.core.async.t_cljs$core$async60365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60367){
var self__ = this;
var _60367__$1 = this;
return self__.meta60366;
});

cljs.core.async.t_cljs$core$async60365.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60365.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async60365.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async60365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60366","meta60366",-1468098133,null)], null);
});

cljs.core.async.t_cljs$core$async60365.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60365";

cljs.core.async.t_cljs$core$async60365.cljs$lang$ctorPrWriter = (function (this__48730__auto__,writer__48731__auto__,opt__48732__auto__){
return cljs.core._write.call(null,writer__48731__auto__,"cljs.core.async/t_cljs$core$async60365");
});

cljs.core.async.__GT_t_cljs$core$async60365 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async60365(f__$1,ch__$1,meta60366){
return (new cljs.core.async.t_cljs$core$async60365(f__$1,ch__$1,meta60366));
});

}

return (new cljs.core.async.t_cljs$core$async60365(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async60371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60371 = (function (p,ch,meta60372){
this.p = p;
this.ch = ch;
this.meta60372 = meta60372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60373,meta60372__$1){
var self__ = this;
var _60373__$1 = this;
return (new cljs.core.async.t_cljs$core$async60371(self__.p,self__.ch,meta60372__$1));
});

cljs.core.async.t_cljs$core$async60371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60373){
var self__ = this;
var _60373__$1 = this;
return self__.meta60372;
});

cljs.core.async.t_cljs$core$async60371.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60371.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60371.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async60371.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async60371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60372","meta60372",-1607638842,null)], null);
});

cljs.core.async.t_cljs$core$async60371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60371";

cljs.core.async.t_cljs$core$async60371.cljs$lang$ctorPrWriter = (function (this__48730__auto__,writer__48731__auto__,opt__48732__auto__){
return cljs.core._write.call(null,writer__48731__auto__,"cljs.core.async/t_cljs$core$async60371");
});

cljs.core.async.__GT_t_cljs$core$async60371 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async60371(p__$1,ch__$1,meta60372){
return (new cljs.core.async.t_cljs$core$async60371(p__$1,ch__$1,meta60372));
});

}

return (new cljs.core.async.t_cljs$core$async60371(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args60374 = [];
var len__49232__auto___60418 = arguments.length;
var i__49233__auto___60419 = (0);
while(true){
if((i__49233__auto___60419 < len__49232__auto___60418)){
args60374.push((arguments[i__49233__auto___60419]));

var G__60420 = (i__49233__auto___60419 + (1));
i__49233__auto___60419 = G__60420;
continue;
} else {
}
break;
}

var G__60376 = args60374.length;
switch (G__60376) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60374.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__58146__auto___60422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___60422,out){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___60422,out){
return (function (state_60397){
var state_val_60398 = (state_60397[(1)]);
if((state_val_60398 === (7))){
var inst_60393 = (state_60397[(2)]);
var state_60397__$1 = state_60397;
var statearr_60399_60423 = state_60397__$1;
(statearr_60399_60423[(2)] = inst_60393);

(statearr_60399_60423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60398 === (1))){
var state_60397__$1 = state_60397;
var statearr_60400_60424 = state_60397__$1;
(statearr_60400_60424[(2)] = null);

(statearr_60400_60424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60398 === (4))){
var inst_60379 = (state_60397[(7)]);
var inst_60379__$1 = (state_60397[(2)]);
var inst_60380 = (inst_60379__$1 == null);
var state_60397__$1 = (function (){var statearr_60401 = state_60397;
(statearr_60401[(7)] = inst_60379__$1);

return statearr_60401;
})();
if(cljs.core.truth_(inst_60380)){
var statearr_60402_60425 = state_60397__$1;
(statearr_60402_60425[(1)] = (5));

} else {
var statearr_60403_60426 = state_60397__$1;
(statearr_60403_60426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60398 === (6))){
var inst_60379 = (state_60397[(7)]);
var inst_60384 = p.call(null,inst_60379);
var state_60397__$1 = state_60397;
if(cljs.core.truth_(inst_60384)){
var statearr_60404_60427 = state_60397__$1;
(statearr_60404_60427[(1)] = (8));

} else {
var statearr_60405_60428 = state_60397__$1;
(statearr_60405_60428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60398 === (3))){
var inst_60395 = (state_60397[(2)]);
var state_60397__$1 = state_60397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60397__$1,inst_60395);
} else {
if((state_val_60398 === (2))){
var state_60397__$1 = state_60397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60397__$1,(4),ch);
} else {
if((state_val_60398 === (11))){
var inst_60387 = (state_60397[(2)]);
var state_60397__$1 = state_60397;
var statearr_60406_60429 = state_60397__$1;
(statearr_60406_60429[(2)] = inst_60387);

(statearr_60406_60429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60398 === (9))){
var state_60397__$1 = state_60397;
var statearr_60407_60430 = state_60397__$1;
(statearr_60407_60430[(2)] = null);

(statearr_60407_60430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60398 === (5))){
var inst_60382 = cljs.core.async.close_BANG_.call(null,out);
var state_60397__$1 = state_60397;
var statearr_60408_60431 = state_60397__$1;
(statearr_60408_60431[(2)] = inst_60382);

(statearr_60408_60431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60398 === (10))){
var inst_60390 = (state_60397[(2)]);
var state_60397__$1 = (function (){var statearr_60409 = state_60397;
(statearr_60409[(8)] = inst_60390);

return statearr_60409;
})();
var statearr_60410_60432 = state_60397__$1;
(statearr_60410_60432[(2)] = null);

(statearr_60410_60432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60398 === (8))){
var inst_60379 = (state_60397[(7)]);
var state_60397__$1 = state_60397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60397__$1,(11),out,inst_60379);
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
});})(c__58146__auto___60422,out))
;
return ((function (switch__58034__auto__,c__58146__auto___60422,out){
return (function() {
var cljs$core$async$state_machine__58035__auto__ = null;
var cljs$core$async$state_machine__58035__auto____0 = (function (){
var statearr_60414 = [null,null,null,null,null,null,null,null,null];
(statearr_60414[(0)] = cljs$core$async$state_machine__58035__auto__);

(statearr_60414[(1)] = (1));

return statearr_60414;
});
var cljs$core$async$state_machine__58035__auto____1 = (function (state_60397){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_60397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e60415){if((e60415 instanceof Object)){
var ex__58038__auto__ = e60415;
var statearr_60416_60433 = state_60397;
(statearr_60416_60433[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60434 = state_60397;
state_60397 = G__60434;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$state_machine__58035__auto__ = function(state_60397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58035__auto____1.call(this,state_60397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58035__auto____0;
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58035__auto____1;
return cljs$core$async$state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___60422,out))
})();
var state__58148__auto__ = (function (){var statearr_60417 = f__58147__auto__.call(null);
(statearr_60417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___60422);

return statearr_60417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___60422,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args60435 = [];
var len__49232__auto___60438 = arguments.length;
var i__49233__auto___60439 = (0);
while(true){
if((i__49233__auto___60439 < len__49232__auto___60438)){
args60435.push((arguments[i__49233__auto___60439]));

var G__60440 = (i__49233__auto___60439 + (1));
i__49233__auto___60439 = G__60440;
continue;
} else {
}
break;
}

var G__60437 = args60435.length;
switch (G__60437) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60435.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__58146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto__){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto__){
return (function (state_60607){
var state_val_60608 = (state_60607[(1)]);
if((state_val_60608 === (7))){
var inst_60603 = (state_60607[(2)]);
var state_60607__$1 = state_60607;
var statearr_60609_60650 = state_60607__$1;
(statearr_60609_60650[(2)] = inst_60603);

(statearr_60609_60650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (20))){
var inst_60573 = (state_60607[(7)]);
var inst_60584 = (state_60607[(2)]);
var inst_60585 = cljs.core.next.call(null,inst_60573);
var inst_60559 = inst_60585;
var inst_60560 = null;
var inst_60561 = (0);
var inst_60562 = (0);
var state_60607__$1 = (function (){var statearr_60610 = state_60607;
(statearr_60610[(8)] = inst_60561);

(statearr_60610[(9)] = inst_60559);

(statearr_60610[(10)] = inst_60584);

(statearr_60610[(11)] = inst_60562);

(statearr_60610[(12)] = inst_60560);

return statearr_60610;
})();
var statearr_60611_60651 = state_60607__$1;
(statearr_60611_60651[(2)] = null);

(statearr_60611_60651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (1))){
var state_60607__$1 = state_60607;
var statearr_60612_60652 = state_60607__$1;
(statearr_60612_60652[(2)] = null);

(statearr_60612_60652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (4))){
var inst_60548 = (state_60607[(13)]);
var inst_60548__$1 = (state_60607[(2)]);
var inst_60549 = (inst_60548__$1 == null);
var state_60607__$1 = (function (){var statearr_60613 = state_60607;
(statearr_60613[(13)] = inst_60548__$1);

return statearr_60613;
})();
if(cljs.core.truth_(inst_60549)){
var statearr_60614_60653 = state_60607__$1;
(statearr_60614_60653[(1)] = (5));

} else {
var statearr_60615_60654 = state_60607__$1;
(statearr_60615_60654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (15))){
var state_60607__$1 = state_60607;
var statearr_60619_60655 = state_60607__$1;
(statearr_60619_60655[(2)] = null);

(statearr_60619_60655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (21))){
var state_60607__$1 = state_60607;
var statearr_60620_60656 = state_60607__$1;
(statearr_60620_60656[(2)] = null);

(statearr_60620_60656[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (13))){
var inst_60561 = (state_60607[(8)]);
var inst_60559 = (state_60607[(9)]);
var inst_60562 = (state_60607[(11)]);
var inst_60560 = (state_60607[(12)]);
var inst_60569 = (state_60607[(2)]);
var inst_60570 = (inst_60562 + (1));
var tmp60616 = inst_60561;
var tmp60617 = inst_60559;
var tmp60618 = inst_60560;
var inst_60559__$1 = tmp60617;
var inst_60560__$1 = tmp60618;
var inst_60561__$1 = tmp60616;
var inst_60562__$1 = inst_60570;
var state_60607__$1 = (function (){var statearr_60621 = state_60607;
(statearr_60621[(8)] = inst_60561__$1);

(statearr_60621[(9)] = inst_60559__$1);

(statearr_60621[(11)] = inst_60562__$1);

(statearr_60621[(14)] = inst_60569);

(statearr_60621[(12)] = inst_60560__$1);

return statearr_60621;
})();
var statearr_60622_60657 = state_60607__$1;
(statearr_60622_60657[(2)] = null);

(statearr_60622_60657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (22))){
var state_60607__$1 = state_60607;
var statearr_60623_60658 = state_60607__$1;
(statearr_60623_60658[(2)] = null);

(statearr_60623_60658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (6))){
var inst_60548 = (state_60607[(13)]);
var inst_60557 = f.call(null,inst_60548);
var inst_60558 = cljs.core.seq.call(null,inst_60557);
var inst_60559 = inst_60558;
var inst_60560 = null;
var inst_60561 = (0);
var inst_60562 = (0);
var state_60607__$1 = (function (){var statearr_60624 = state_60607;
(statearr_60624[(8)] = inst_60561);

(statearr_60624[(9)] = inst_60559);

(statearr_60624[(11)] = inst_60562);

(statearr_60624[(12)] = inst_60560);

return statearr_60624;
})();
var statearr_60625_60659 = state_60607__$1;
(statearr_60625_60659[(2)] = null);

(statearr_60625_60659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (17))){
var inst_60573 = (state_60607[(7)]);
var inst_60577 = cljs.core.chunk_first.call(null,inst_60573);
var inst_60578 = cljs.core.chunk_rest.call(null,inst_60573);
var inst_60579 = cljs.core.count.call(null,inst_60577);
var inst_60559 = inst_60578;
var inst_60560 = inst_60577;
var inst_60561 = inst_60579;
var inst_60562 = (0);
var state_60607__$1 = (function (){var statearr_60626 = state_60607;
(statearr_60626[(8)] = inst_60561);

(statearr_60626[(9)] = inst_60559);

(statearr_60626[(11)] = inst_60562);

(statearr_60626[(12)] = inst_60560);

return statearr_60626;
})();
var statearr_60627_60660 = state_60607__$1;
(statearr_60627_60660[(2)] = null);

(statearr_60627_60660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (3))){
var inst_60605 = (state_60607[(2)]);
var state_60607__$1 = state_60607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60607__$1,inst_60605);
} else {
if((state_val_60608 === (12))){
var inst_60593 = (state_60607[(2)]);
var state_60607__$1 = state_60607;
var statearr_60628_60661 = state_60607__$1;
(statearr_60628_60661[(2)] = inst_60593);

(statearr_60628_60661[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (2))){
var state_60607__$1 = state_60607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60607__$1,(4),in$);
} else {
if((state_val_60608 === (23))){
var inst_60601 = (state_60607[(2)]);
var state_60607__$1 = state_60607;
var statearr_60629_60662 = state_60607__$1;
(statearr_60629_60662[(2)] = inst_60601);

(statearr_60629_60662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (19))){
var inst_60588 = (state_60607[(2)]);
var state_60607__$1 = state_60607;
var statearr_60630_60663 = state_60607__$1;
(statearr_60630_60663[(2)] = inst_60588);

(statearr_60630_60663[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (11))){
var inst_60559 = (state_60607[(9)]);
var inst_60573 = (state_60607[(7)]);
var inst_60573__$1 = cljs.core.seq.call(null,inst_60559);
var state_60607__$1 = (function (){var statearr_60631 = state_60607;
(statearr_60631[(7)] = inst_60573__$1);

return statearr_60631;
})();
if(inst_60573__$1){
var statearr_60632_60664 = state_60607__$1;
(statearr_60632_60664[(1)] = (14));

} else {
var statearr_60633_60665 = state_60607__$1;
(statearr_60633_60665[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (9))){
var inst_60595 = (state_60607[(2)]);
var inst_60596 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_60607__$1 = (function (){var statearr_60634 = state_60607;
(statearr_60634[(15)] = inst_60595);

return statearr_60634;
})();
if(cljs.core.truth_(inst_60596)){
var statearr_60635_60666 = state_60607__$1;
(statearr_60635_60666[(1)] = (21));

} else {
var statearr_60636_60667 = state_60607__$1;
(statearr_60636_60667[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (5))){
var inst_60551 = cljs.core.async.close_BANG_.call(null,out);
var state_60607__$1 = state_60607;
var statearr_60637_60668 = state_60607__$1;
(statearr_60637_60668[(2)] = inst_60551);

(statearr_60637_60668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (14))){
var inst_60573 = (state_60607[(7)]);
var inst_60575 = cljs.core.chunked_seq_QMARK_.call(null,inst_60573);
var state_60607__$1 = state_60607;
if(inst_60575){
var statearr_60638_60669 = state_60607__$1;
(statearr_60638_60669[(1)] = (17));

} else {
var statearr_60639_60670 = state_60607__$1;
(statearr_60639_60670[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (16))){
var inst_60591 = (state_60607[(2)]);
var state_60607__$1 = state_60607;
var statearr_60640_60671 = state_60607__$1;
(statearr_60640_60671[(2)] = inst_60591);

(statearr_60640_60671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60608 === (10))){
var inst_60562 = (state_60607[(11)]);
var inst_60560 = (state_60607[(12)]);
var inst_60567 = cljs.core._nth.call(null,inst_60560,inst_60562);
var state_60607__$1 = state_60607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60607__$1,(13),out,inst_60567);
} else {
if((state_val_60608 === (18))){
var inst_60573 = (state_60607[(7)]);
var inst_60582 = cljs.core.first.call(null,inst_60573);
var state_60607__$1 = state_60607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60607__$1,(20),out,inst_60582);
} else {
if((state_val_60608 === (8))){
var inst_60561 = (state_60607[(8)]);
var inst_60562 = (state_60607[(11)]);
var inst_60564 = (inst_60562 < inst_60561);
var inst_60565 = inst_60564;
var state_60607__$1 = state_60607;
if(cljs.core.truth_(inst_60565)){
var statearr_60641_60672 = state_60607__$1;
(statearr_60641_60672[(1)] = (10));

} else {
var statearr_60642_60673 = state_60607__$1;
(statearr_60642_60673[(1)] = (11));

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
}
}
}
}
}
}
});})(c__58146__auto__))
;
return ((function (switch__58034__auto__,c__58146__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__58035__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__58035__auto____0 = (function (){
var statearr_60646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60646[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__58035__auto__);

(statearr_60646[(1)] = (1));

return statearr_60646;
});
var cljs$core$async$mapcat_STAR__$_state_machine__58035__auto____1 = (function (state_60607){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_60607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e60647){if((e60647 instanceof Object)){
var ex__58038__auto__ = e60647;
var statearr_60648_60674 = state_60607;
(statearr_60648_60674[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60675 = state_60607;
state_60607 = G__60675;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__58035__auto__ = function(state_60607){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__58035__auto____1.call(this,state_60607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__58035__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__58035__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto__))
})();
var state__58148__auto__ = (function (){var statearr_60649 = f__58147__auto__.call(null);
(statearr_60649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto__);

return statearr_60649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto__))
);

return c__58146__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args60676 = [];
var len__49232__auto___60679 = arguments.length;
var i__49233__auto___60680 = (0);
while(true){
if((i__49233__auto___60680 < len__49232__auto___60679)){
args60676.push((arguments[i__49233__auto___60680]));

var G__60681 = (i__49233__auto___60680 + (1));
i__49233__auto___60680 = G__60681;
continue;
} else {
}
break;
}

var G__60678 = args60676.length;
switch (G__60678) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60676.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args60683 = [];
var len__49232__auto___60686 = arguments.length;
var i__49233__auto___60687 = (0);
while(true){
if((i__49233__auto___60687 < len__49232__auto___60686)){
args60683.push((arguments[i__49233__auto___60687]));

var G__60688 = (i__49233__auto___60687 + (1));
i__49233__auto___60687 = G__60688;
continue;
} else {
}
break;
}

var G__60685 = args60683.length;
switch (G__60685) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60683.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args60690 = [];
var len__49232__auto___60741 = arguments.length;
var i__49233__auto___60742 = (0);
while(true){
if((i__49233__auto___60742 < len__49232__auto___60741)){
args60690.push((arguments[i__49233__auto___60742]));

var G__60743 = (i__49233__auto___60742 + (1));
i__49233__auto___60742 = G__60743;
continue;
} else {
}
break;
}

var G__60692 = args60690.length;
switch (G__60692) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60690.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__58146__auto___60745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___60745,out){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___60745,out){
return (function (state_60716){
var state_val_60717 = (state_60716[(1)]);
if((state_val_60717 === (7))){
var inst_60711 = (state_60716[(2)]);
var state_60716__$1 = state_60716;
var statearr_60718_60746 = state_60716__$1;
(statearr_60718_60746[(2)] = inst_60711);

(statearr_60718_60746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60717 === (1))){
var inst_60693 = null;
var state_60716__$1 = (function (){var statearr_60719 = state_60716;
(statearr_60719[(7)] = inst_60693);

return statearr_60719;
})();
var statearr_60720_60747 = state_60716__$1;
(statearr_60720_60747[(2)] = null);

(statearr_60720_60747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60717 === (4))){
var inst_60696 = (state_60716[(8)]);
var inst_60696__$1 = (state_60716[(2)]);
var inst_60697 = (inst_60696__$1 == null);
var inst_60698 = cljs.core.not.call(null,inst_60697);
var state_60716__$1 = (function (){var statearr_60721 = state_60716;
(statearr_60721[(8)] = inst_60696__$1);

return statearr_60721;
})();
if(inst_60698){
var statearr_60722_60748 = state_60716__$1;
(statearr_60722_60748[(1)] = (5));

} else {
var statearr_60723_60749 = state_60716__$1;
(statearr_60723_60749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60717 === (6))){
var state_60716__$1 = state_60716;
var statearr_60724_60750 = state_60716__$1;
(statearr_60724_60750[(2)] = null);

(statearr_60724_60750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60717 === (3))){
var inst_60713 = (state_60716[(2)]);
var inst_60714 = cljs.core.async.close_BANG_.call(null,out);
var state_60716__$1 = (function (){var statearr_60725 = state_60716;
(statearr_60725[(9)] = inst_60713);

return statearr_60725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60716__$1,inst_60714);
} else {
if((state_val_60717 === (2))){
var state_60716__$1 = state_60716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60716__$1,(4),ch);
} else {
if((state_val_60717 === (11))){
var inst_60696 = (state_60716[(8)]);
var inst_60705 = (state_60716[(2)]);
var inst_60693 = inst_60696;
var state_60716__$1 = (function (){var statearr_60726 = state_60716;
(statearr_60726[(7)] = inst_60693);

(statearr_60726[(10)] = inst_60705);

return statearr_60726;
})();
var statearr_60727_60751 = state_60716__$1;
(statearr_60727_60751[(2)] = null);

(statearr_60727_60751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60717 === (9))){
var inst_60696 = (state_60716[(8)]);
var state_60716__$1 = state_60716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60716__$1,(11),out,inst_60696);
} else {
if((state_val_60717 === (5))){
var inst_60693 = (state_60716[(7)]);
var inst_60696 = (state_60716[(8)]);
var inst_60700 = cljs.core._EQ_.call(null,inst_60696,inst_60693);
var state_60716__$1 = state_60716;
if(inst_60700){
var statearr_60729_60752 = state_60716__$1;
(statearr_60729_60752[(1)] = (8));

} else {
var statearr_60730_60753 = state_60716__$1;
(statearr_60730_60753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60717 === (10))){
var inst_60708 = (state_60716[(2)]);
var state_60716__$1 = state_60716;
var statearr_60731_60754 = state_60716__$1;
(statearr_60731_60754[(2)] = inst_60708);

(statearr_60731_60754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60717 === (8))){
var inst_60693 = (state_60716[(7)]);
var tmp60728 = inst_60693;
var inst_60693__$1 = tmp60728;
var state_60716__$1 = (function (){var statearr_60732 = state_60716;
(statearr_60732[(7)] = inst_60693__$1);

return statearr_60732;
})();
var statearr_60733_60755 = state_60716__$1;
(statearr_60733_60755[(2)] = null);

(statearr_60733_60755[(1)] = (2));


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
});})(c__58146__auto___60745,out))
;
return ((function (switch__58034__auto__,c__58146__auto___60745,out){
return (function() {
var cljs$core$async$state_machine__58035__auto__ = null;
var cljs$core$async$state_machine__58035__auto____0 = (function (){
var statearr_60737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60737[(0)] = cljs$core$async$state_machine__58035__auto__);

(statearr_60737[(1)] = (1));

return statearr_60737;
});
var cljs$core$async$state_machine__58035__auto____1 = (function (state_60716){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_60716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e60738){if((e60738 instanceof Object)){
var ex__58038__auto__ = e60738;
var statearr_60739_60756 = state_60716;
(statearr_60739_60756[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60757 = state_60716;
state_60716 = G__60757;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$state_machine__58035__auto__ = function(state_60716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58035__auto____1.call(this,state_60716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58035__auto____0;
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58035__auto____1;
return cljs$core$async$state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___60745,out))
})();
var state__58148__auto__ = (function (){var statearr_60740 = f__58147__auto__.call(null);
(statearr_60740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___60745);

return statearr_60740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___60745,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args60758 = [];
var len__49232__auto___60828 = arguments.length;
var i__49233__auto___60829 = (0);
while(true){
if((i__49233__auto___60829 < len__49232__auto___60828)){
args60758.push((arguments[i__49233__auto___60829]));

var G__60830 = (i__49233__auto___60829 + (1));
i__49233__auto___60829 = G__60830;
continue;
} else {
}
break;
}

var G__60760 = args60758.length;
switch (G__60760) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60758.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__58146__auto___60832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___60832,out){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___60832,out){
return (function (state_60798){
var state_val_60799 = (state_60798[(1)]);
if((state_val_60799 === (7))){
var inst_60794 = (state_60798[(2)]);
var state_60798__$1 = state_60798;
var statearr_60800_60833 = state_60798__$1;
(statearr_60800_60833[(2)] = inst_60794);

(statearr_60800_60833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60799 === (1))){
var inst_60761 = (new Array(n));
var inst_60762 = inst_60761;
var inst_60763 = (0);
var state_60798__$1 = (function (){var statearr_60801 = state_60798;
(statearr_60801[(7)] = inst_60762);

(statearr_60801[(8)] = inst_60763);

return statearr_60801;
})();
var statearr_60802_60834 = state_60798__$1;
(statearr_60802_60834[(2)] = null);

(statearr_60802_60834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60799 === (4))){
var inst_60766 = (state_60798[(9)]);
var inst_60766__$1 = (state_60798[(2)]);
var inst_60767 = (inst_60766__$1 == null);
var inst_60768 = cljs.core.not.call(null,inst_60767);
var state_60798__$1 = (function (){var statearr_60803 = state_60798;
(statearr_60803[(9)] = inst_60766__$1);

return statearr_60803;
})();
if(inst_60768){
var statearr_60804_60835 = state_60798__$1;
(statearr_60804_60835[(1)] = (5));

} else {
var statearr_60805_60836 = state_60798__$1;
(statearr_60805_60836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60799 === (15))){
var inst_60788 = (state_60798[(2)]);
var state_60798__$1 = state_60798;
var statearr_60806_60837 = state_60798__$1;
(statearr_60806_60837[(2)] = inst_60788);

(statearr_60806_60837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60799 === (13))){
var state_60798__$1 = state_60798;
var statearr_60807_60838 = state_60798__$1;
(statearr_60807_60838[(2)] = null);

(statearr_60807_60838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60799 === (6))){
var inst_60763 = (state_60798[(8)]);
var inst_60784 = (inst_60763 > (0));
var state_60798__$1 = state_60798;
if(cljs.core.truth_(inst_60784)){
var statearr_60808_60839 = state_60798__$1;
(statearr_60808_60839[(1)] = (12));

} else {
var statearr_60809_60840 = state_60798__$1;
(statearr_60809_60840[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60799 === (3))){
var inst_60796 = (state_60798[(2)]);
var state_60798__$1 = state_60798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60798__$1,inst_60796);
} else {
if((state_val_60799 === (12))){
var inst_60762 = (state_60798[(7)]);
var inst_60786 = cljs.core.vec.call(null,inst_60762);
var state_60798__$1 = state_60798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60798__$1,(15),out,inst_60786);
} else {
if((state_val_60799 === (2))){
var state_60798__$1 = state_60798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60798__$1,(4),ch);
} else {
if((state_val_60799 === (11))){
var inst_60778 = (state_60798[(2)]);
var inst_60779 = (new Array(n));
var inst_60762 = inst_60779;
var inst_60763 = (0);
var state_60798__$1 = (function (){var statearr_60810 = state_60798;
(statearr_60810[(10)] = inst_60778);

(statearr_60810[(7)] = inst_60762);

(statearr_60810[(8)] = inst_60763);

return statearr_60810;
})();
var statearr_60811_60841 = state_60798__$1;
(statearr_60811_60841[(2)] = null);

(statearr_60811_60841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60799 === (9))){
var inst_60762 = (state_60798[(7)]);
var inst_60776 = cljs.core.vec.call(null,inst_60762);
var state_60798__$1 = state_60798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60798__$1,(11),out,inst_60776);
} else {
if((state_val_60799 === (5))){
var inst_60771 = (state_60798[(11)]);
var inst_60766 = (state_60798[(9)]);
var inst_60762 = (state_60798[(7)]);
var inst_60763 = (state_60798[(8)]);
var inst_60770 = (inst_60762[inst_60763] = inst_60766);
var inst_60771__$1 = (inst_60763 + (1));
var inst_60772 = (inst_60771__$1 < n);
var state_60798__$1 = (function (){var statearr_60812 = state_60798;
(statearr_60812[(11)] = inst_60771__$1);

(statearr_60812[(12)] = inst_60770);

return statearr_60812;
})();
if(cljs.core.truth_(inst_60772)){
var statearr_60813_60842 = state_60798__$1;
(statearr_60813_60842[(1)] = (8));

} else {
var statearr_60814_60843 = state_60798__$1;
(statearr_60814_60843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60799 === (14))){
var inst_60791 = (state_60798[(2)]);
var inst_60792 = cljs.core.async.close_BANG_.call(null,out);
var state_60798__$1 = (function (){var statearr_60816 = state_60798;
(statearr_60816[(13)] = inst_60791);

return statearr_60816;
})();
var statearr_60817_60844 = state_60798__$1;
(statearr_60817_60844[(2)] = inst_60792);

(statearr_60817_60844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60799 === (10))){
var inst_60782 = (state_60798[(2)]);
var state_60798__$1 = state_60798;
var statearr_60818_60845 = state_60798__$1;
(statearr_60818_60845[(2)] = inst_60782);

(statearr_60818_60845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60799 === (8))){
var inst_60771 = (state_60798[(11)]);
var inst_60762 = (state_60798[(7)]);
var tmp60815 = inst_60762;
var inst_60762__$1 = tmp60815;
var inst_60763 = inst_60771;
var state_60798__$1 = (function (){var statearr_60819 = state_60798;
(statearr_60819[(7)] = inst_60762__$1);

(statearr_60819[(8)] = inst_60763);

return statearr_60819;
})();
var statearr_60820_60846 = state_60798__$1;
(statearr_60820_60846[(2)] = null);

(statearr_60820_60846[(1)] = (2));


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
});})(c__58146__auto___60832,out))
;
return ((function (switch__58034__auto__,c__58146__auto___60832,out){
return (function() {
var cljs$core$async$state_machine__58035__auto__ = null;
var cljs$core$async$state_machine__58035__auto____0 = (function (){
var statearr_60824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60824[(0)] = cljs$core$async$state_machine__58035__auto__);

(statearr_60824[(1)] = (1));

return statearr_60824;
});
var cljs$core$async$state_machine__58035__auto____1 = (function (state_60798){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_60798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e60825){if((e60825 instanceof Object)){
var ex__58038__auto__ = e60825;
var statearr_60826_60847 = state_60798;
(statearr_60826_60847[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60848 = state_60798;
state_60798 = G__60848;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$state_machine__58035__auto__ = function(state_60798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58035__auto____1.call(this,state_60798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58035__auto____0;
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58035__auto____1;
return cljs$core$async$state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___60832,out))
})();
var state__58148__auto__ = (function (){var statearr_60827 = f__58147__auto__.call(null);
(statearr_60827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___60832);

return statearr_60827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___60832,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args60849 = [];
var len__49232__auto___60923 = arguments.length;
var i__49233__auto___60924 = (0);
while(true){
if((i__49233__auto___60924 < len__49232__auto___60923)){
args60849.push((arguments[i__49233__auto___60924]));

var G__60925 = (i__49233__auto___60924 + (1));
i__49233__auto___60924 = G__60925;
continue;
} else {
}
break;
}

var G__60851 = args60849.length;
switch (G__60851) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60849.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__58146__auto___60927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58146__auto___60927,out){
return (function (){
var f__58147__auto__ = (function (){var switch__58034__auto__ = ((function (c__58146__auto___60927,out){
return (function (state_60893){
var state_val_60894 = (state_60893[(1)]);
if((state_val_60894 === (7))){
var inst_60889 = (state_60893[(2)]);
var state_60893__$1 = state_60893;
var statearr_60895_60928 = state_60893__$1;
(statearr_60895_60928[(2)] = inst_60889);

(statearr_60895_60928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (1))){
var inst_60852 = [];
var inst_60853 = inst_60852;
var inst_60854 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60893__$1 = (function (){var statearr_60896 = state_60893;
(statearr_60896[(7)] = inst_60854);

(statearr_60896[(8)] = inst_60853);

return statearr_60896;
})();
var statearr_60897_60929 = state_60893__$1;
(statearr_60897_60929[(2)] = null);

(statearr_60897_60929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (4))){
var inst_60857 = (state_60893[(9)]);
var inst_60857__$1 = (state_60893[(2)]);
var inst_60858 = (inst_60857__$1 == null);
var inst_60859 = cljs.core.not.call(null,inst_60858);
var state_60893__$1 = (function (){var statearr_60898 = state_60893;
(statearr_60898[(9)] = inst_60857__$1);

return statearr_60898;
})();
if(inst_60859){
var statearr_60899_60930 = state_60893__$1;
(statearr_60899_60930[(1)] = (5));

} else {
var statearr_60900_60931 = state_60893__$1;
(statearr_60900_60931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (15))){
var inst_60883 = (state_60893[(2)]);
var state_60893__$1 = state_60893;
var statearr_60901_60932 = state_60893__$1;
(statearr_60901_60932[(2)] = inst_60883);

(statearr_60901_60932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (13))){
var state_60893__$1 = state_60893;
var statearr_60902_60933 = state_60893__$1;
(statearr_60902_60933[(2)] = null);

(statearr_60902_60933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (6))){
var inst_60853 = (state_60893[(8)]);
var inst_60878 = inst_60853.length;
var inst_60879 = (inst_60878 > (0));
var state_60893__$1 = state_60893;
if(cljs.core.truth_(inst_60879)){
var statearr_60903_60934 = state_60893__$1;
(statearr_60903_60934[(1)] = (12));

} else {
var statearr_60904_60935 = state_60893__$1;
(statearr_60904_60935[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (3))){
var inst_60891 = (state_60893[(2)]);
var state_60893__$1 = state_60893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60893__$1,inst_60891);
} else {
if((state_val_60894 === (12))){
var inst_60853 = (state_60893[(8)]);
var inst_60881 = cljs.core.vec.call(null,inst_60853);
var state_60893__$1 = state_60893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60893__$1,(15),out,inst_60881);
} else {
if((state_val_60894 === (2))){
var state_60893__$1 = state_60893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60893__$1,(4),ch);
} else {
if((state_val_60894 === (11))){
var inst_60857 = (state_60893[(9)]);
var inst_60861 = (state_60893[(10)]);
var inst_60871 = (state_60893[(2)]);
var inst_60872 = [];
var inst_60873 = inst_60872.push(inst_60857);
var inst_60853 = inst_60872;
var inst_60854 = inst_60861;
var state_60893__$1 = (function (){var statearr_60905 = state_60893;
(statearr_60905[(7)] = inst_60854);

(statearr_60905[(8)] = inst_60853);

(statearr_60905[(11)] = inst_60873);

(statearr_60905[(12)] = inst_60871);

return statearr_60905;
})();
var statearr_60906_60936 = state_60893__$1;
(statearr_60906_60936[(2)] = null);

(statearr_60906_60936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (9))){
var inst_60853 = (state_60893[(8)]);
var inst_60869 = cljs.core.vec.call(null,inst_60853);
var state_60893__$1 = state_60893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60893__$1,(11),out,inst_60869);
} else {
if((state_val_60894 === (5))){
var inst_60854 = (state_60893[(7)]);
var inst_60857 = (state_60893[(9)]);
var inst_60861 = (state_60893[(10)]);
var inst_60861__$1 = f.call(null,inst_60857);
var inst_60862 = cljs.core._EQ_.call(null,inst_60861__$1,inst_60854);
var inst_60863 = cljs.core.keyword_identical_QMARK_.call(null,inst_60854,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_60864 = (inst_60862) || (inst_60863);
var state_60893__$1 = (function (){var statearr_60907 = state_60893;
(statearr_60907[(10)] = inst_60861__$1);

return statearr_60907;
})();
if(cljs.core.truth_(inst_60864)){
var statearr_60908_60937 = state_60893__$1;
(statearr_60908_60937[(1)] = (8));

} else {
var statearr_60909_60938 = state_60893__$1;
(statearr_60909_60938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (14))){
var inst_60886 = (state_60893[(2)]);
var inst_60887 = cljs.core.async.close_BANG_.call(null,out);
var state_60893__$1 = (function (){var statearr_60911 = state_60893;
(statearr_60911[(13)] = inst_60886);

return statearr_60911;
})();
var statearr_60912_60939 = state_60893__$1;
(statearr_60912_60939[(2)] = inst_60887);

(statearr_60912_60939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (10))){
var inst_60876 = (state_60893[(2)]);
var state_60893__$1 = state_60893;
var statearr_60913_60940 = state_60893__$1;
(statearr_60913_60940[(2)] = inst_60876);

(statearr_60913_60940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (8))){
var inst_60857 = (state_60893[(9)]);
var inst_60853 = (state_60893[(8)]);
var inst_60861 = (state_60893[(10)]);
var inst_60866 = inst_60853.push(inst_60857);
var tmp60910 = inst_60853;
var inst_60853__$1 = tmp60910;
var inst_60854 = inst_60861;
var state_60893__$1 = (function (){var statearr_60914 = state_60893;
(statearr_60914[(7)] = inst_60854);

(statearr_60914[(8)] = inst_60853__$1);

(statearr_60914[(14)] = inst_60866);

return statearr_60914;
})();
var statearr_60915_60941 = state_60893__$1;
(statearr_60915_60941[(2)] = null);

(statearr_60915_60941[(1)] = (2));


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
});})(c__58146__auto___60927,out))
;
return ((function (switch__58034__auto__,c__58146__auto___60927,out){
return (function() {
var cljs$core$async$state_machine__58035__auto__ = null;
var cljs$core$async$state_machine__58035__auto____0 = (function (){
var statearr_60919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60919[(0)] = cljs$core$async$state_machine__58035__auto__);

(statearr_60919[(1)] = (1));

return statearr_60919;
});
var cljs$core$async$state_machine__58035__auto____1 = (function (state_60893){
while(true){
var ret_value__58036__auto__ = (function (){try{while(true){
var result__58037__auto__ = switch__58034__auto__.call(null,state_60893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58037__auto__;
}
break;
}
}catch (e60920){if((e60920 instanceof Object)){
var ex__58038__auto__ = e60920;
var statearr_60921_60942 = state_60893;
(statearr_60921_60942[(5)] = ex__58038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60943 = state_60893;
state_60893 = G__60943;
continue;
} else {
return ret_value__58036__auto__;
}
break;
}
});
cljs$core$async$state_machine__58035__auto__ = function(state_60893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58035__auto____1.call(this,state_60893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58035__auto____0;
cljs$core$async$state_machine__58035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58035__auto____1;
return cljs$core$async$state_machine__58035__auto__;
})()
;})(switch__58034__auto__,c__58146__auto___60927,out))
})();
var state__58148__auto__ = (function (){var statearr_60922 = f__58147__auto__.call(null);
(statearr_60922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__58146__auto___60927);

return statearr_60922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58148__auto__);
});})(c__58146__auto___60927,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map