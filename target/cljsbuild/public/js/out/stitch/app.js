// Compiled by ClojureScript 1.9.495 {}
goog.provide('stitch.app');
goog.require('cljs.core');
goog.require('stitch.core');
goog.require('devtools.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),stitch.core.mount_components);
devtools.core.install_BANG_.call(null);
stitch.core.init_BANG_.call(null);

//# sourceMappingURL=app.js.map