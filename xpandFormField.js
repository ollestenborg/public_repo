const xpandForm ={
  fileOrigin:'xpandForm',
 name:'xpandFormField',
oldName:'xpandForm',
      ns:'xpand.form',
code:function(inp) {
outputCounter++;
searchObj={};
  if(inp.objToUse == undefined){
    inp.objToUse = 'curObj';
  }
    var ret = '';
 $('#filterSug').val();
if(currentType.fun !== undefined){
currentType.fun['addDocFromForm'] ={};
currentType.fun['filterFromForm']={};
}

for(item in currentType.fun){
  funTemplate.code(currentType, item);
}
    for (var key in getCurTypeLevel.code().p) {
        console.log('afds');
        var thekey = getCurTypeLevel.code().p[key];
        var hasProp = false;
        if (thekey['p'] !== undefined) {
            hasProp = true;
        }
        var type = thekey.type;
        if (type == undefined && !hasProp) { type = 'text' };
        if (type == 'text') {
        textTemplate.code(inp, key);
  }
  if (type == 'bool') {
        boolTemplate.code(inp, key);
  }
  if (type == 'date') {
        dateTemplate.code(inp, key);
  }
  if (type == 'mtm') {
  mtmTemplate.code(inp,key)
  } 
        if (hasProp) {
            if (window[inp.objToUse][key] == undefined) {
                window[inp.objToUse][key] = {};
            }
var d =document.createElement('div');
	d.style.color='white';
d.style.background='blue';
d.id='id_' + getLevelPath.code() + '-' + key; 
d.onclick=addLevel.code(key);
d.innerText=key;
outputDiv.code(d);
        }
        if (type == 'objArray') {
            if (window[inp.objToUse][key] == undefined) {
                window[inp.objToUse][key] = [];
            }
	    
	var a =document.createElement('a');
		a.onclick=AddSubObj.code(key);
	var d =document.createElement('div');
	d.style.color='white';
d.style.background='blue';
d.id='id_' + getLevelPath.code() + '-' + key; 
d.onclick=addLevel.code(key);
d.innerText=key;
outputDiv.code(d);
    
        }

    }

    $('#id_-is').val(currentType.name);
}}
const funTemplate={
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
