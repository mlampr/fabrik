/*! Fabrik */
var inline=new Class({Implements:Options,options:{},initialize:function(a,b){this.setOptions(b),document.addEvent("dblclick:relay("+a+")",function(a,b){var c;b.hide(),b.store("origValue",b.get("text")),b.retrieve("inline")?c=b.retrieve("inline"):(c=new Element("input"),c.addEvent("keydown",function(a){this.checkKey(a,b)}.bind(this)),c.inject(b,"after").focus(),c.hide(),b.store("inline",c)),c.set("value",b.get("text")).toggle().focus(),c.select()}.bind(this))},checkKey:function(a,b){("enter"===a.key||"esc"===a.key||"tab"===a.key)&&(b.retrieve("inline").hide(),b.show()),("enter"===a.key||"tab"===a.key)&&(b.set("text",a.target.get("value")),Fabrik.fireEvent("fabrik.inline.save",[b,a]))}});