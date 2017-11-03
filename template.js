export default function() {return {fun:{
    fileOrigin:'xpandForm',
 name:'funTemplate',
        ns:'xpand.form',
code:function(inp, item){
    var e = document.createElement('div');
    e.className = 'listItem';
  e.style.background='purple';
  e.fun=item;
  e.id='funListItem_'+item;
  e.onclick=function(){ 
      window[this.fun].code();
  };
  e.innerText=item;
  outputDiv.code(e);
}}
,
texttest:{
    fileOrigin:'xpandForm',
 name:'textTemplate',
        ns:'xpand.form',
    code:function(key,value){
var div = document.createElement('div');
	      div.id =key 
	      div.value =value 


var e = document.createElement('input');
e.id = key;
e.placeholder=key
if(value){
e.value = value;
}
e.className = 'listItem';
e.onclick = function() {
};
e.oninput=function(){
div.value=e.value
}
div.appendChild(e)
return div
}
},
text:{
    fileOrigin:'xpandForm',
    name:'textTemplate',
        ns:'xpand.form',
    code:function(inp, key){
var e = document.createElement('div');
inp.selectedKey = key;
var id = 'id_' + getLevelPath.code() + '-' + key;
e.id = id;
e.args={selectedKey:inp.selectedKey,list:getCurTypeLevel.code().p[key].list,listFun:getCurTypeLevel.code().p[key].listFun,fun:'selectValueFromList',objToUse:inp.objToUse};
e.innerText = key;

e.className = 'listItem';
e.onclick = function() {
popTwo.code(this.args);
};
outputDiv.code(e);
}
},
mtm:{
    fileOrigin:'xpandForm',
 name:'mtmTemplate',
        ns:'xpand.form',
    code:function(inp, key){
var e = document.createElement('div');
inp.selectedKey = key;
var id = 'id_' + getLevelPath.code() + '-' + key;
e.id = id;
e.args={selectedKey:inp.selectedKey,list:getCurTypeLevel.code().p[key].list,listFun:getCurTypeLevel.code().p[key].listFun,fun:'selectValueFromList',objToUse:inp.objToUse};
e.innerText = key;

e.className = 'listItem';
e.onclick = function() {
popTwo.code(this.args);
};
outputDiv.code(e);
}
},
date:{
    fileOrigin:'xpandForm',
 name:'dateTemplate',
    ns:'xpand.form',
    code:function(inp, key){
var e = document.createElement('div');
inp.selectedKey = key;
var id = 'id_' + getLevelPath.code() + '-' + key;
e.id = id;
e.args={selectedKey:inp.selectedKey,list:getCurTypeLevel.code().p[key].list,listFun:getCurTypeLevel.code().p[key].listFun,fun:'selectValueDateFrom',objToUse:inp.objToUse};
e.innerText = key;

e.className = 'listItem';
e.onclick = function() {
popUpDate.code(this.args);
};
outputDiv.code(e);
}
}
,bool:{
    fileOrigin:'xpandForm',
 name:'boolTemplate',
        ns:'xpand.form',
code:function(inp, key){
var e = document.createElement('div');
inp.selectedKey = key;
var id = 'id_' + getLevelPath.code() + '-' + key;
e.id = id;
e.args={selectedKey:inp.selectedKey,objToUse:inp.objToUse};
e.innerText = key;
e.className = 'listItem';
e.onclick = function() {
switchBool.code(this.args);
};
outputDiv.code(e);
}}}}
