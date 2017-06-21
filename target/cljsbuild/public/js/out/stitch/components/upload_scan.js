// Compiled by ClojureScript 1.9.495 {}
goog.provide('stitch.components.upload_scan');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('stitch.components.common');
goog.require('goog.net.IframeIo');
goog.require('goog.events.EventType');
stitch.components.upload_scan.upload_file_BANG_ = (function stitch$components$upload_scan$upload_file_BANG_(upload_form_id,status){
cljs.core.reset_BANG_.call(null,status,null);

var io = (new goog.net.IframeIo());
goog.events.listen(io,goog.net.EventType.SUCCESS,((function (io){
return (function (){
return cljs.core.reset_BANG_.call(null,status,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-success","div.alert.alert-success",1190067590),"file uploaded successfully"], null));
});})(io))
);

goog.events.listen(io,goog.net.EventType.ERROR,((function (io){
return (function (){
return cljs.core.reset_BANG_.call(null,status,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),"failed to upload the file"], null));
});})(io))
);

io.setErrorChecker(((function (io){
return (function (){
return cljs.core._EQ_.call(null,"error",io.getResponseText());
});})(io))
);

return io.sendFromForm(document.getElementById(upload_form_id),"/upload");
});
stitch.components.upload_scan.upload_form = (function stitch$components$upload_scan$upload_form(){
var status = reagent.core.atom.call(null,null);
var form_id = "upload-form";
return ((function (status,form_id){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stitch.components.common.modal,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Upload File"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref.call(null,status))?cljs.core.deref.call(null,status):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),form_id,new cljs.core.Keyword(null,"enc-type","enc-type",-1746291599),"multipart/form-data",new cljs.core.Keyword(null,"method","method",55703592),"POST"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"name"], null),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"name",new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"description"], null),"Description"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"description",new cljs.core.Keyword(null,"name","name",1843675177),"description",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"file"], null),"select an image for upload"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"file",new cljs.core.Keyword(null,"name","name",1843675177),"file",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (status,form_id){
return (function (){
return stitch.components.upload_scan.upload_file_BANG_.call(null,form_id,status);
});})(status,form_id))
], null),"Upload"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.pull-right","button.btn.btn-danger.pull-right",1248292848),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (status,form_id){
return (function (){
return reagent.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850));
});})(status,form_id))
], null),"Cancel"], null)], null)], null);
});
;})(status,form_id))
});
stitch.components.upload_scan.upload_button = (function stitch$components$upload_scan$upload_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850),stitch.components.upload_scan.upload_form);
})], null),"upload image"], null);
});

//# sourceMappingURL=upload_scan.js.map