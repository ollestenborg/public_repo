export default {addPrpFromPing:{
		name:"addPrpFromPing",
		type:"actions",
code:function(item){
		app.service.selectPrp.code(item).then((eventObj)=>{
		app.service.popLatest.code(item, eventObj.field).then((returnedValueObject)=>{
const uy="https://us-central1-blazing-fire-5166.cloudfunctions.net/addAnyEvent?streamid="+eventObj.streamid+"&field="+eventObj.field+"&value="+returnedValueObject.id+"&op="+eventObj.op
		console.log(uy)
window.getF(uy).then((retu)=>{ return retu.json}).then((rejs)=>{
console.log(rejs)
})
		})
		})
		}
	},addNew:{
		name:"addNew",
		type:"actions",
code:function(item){
	const url="https://storage.googleapis.com/blazing-fire-5166.appspot.com/singleComponent/addNew.html"
app.helper.hrefBlank.code(url)
	}
	},
addInstanceFromType:{
		name:"addInstanceFromType",
		type:"actions",
code:function(item){
	const url="https://storage.googleapis.com/blazing-fire-5166.appspot.com/singleComponent/addNew.html?type="+item.type
window.app.helper.hrefBlank.code(url)	
	}
	},getItemsOn4lmnt:{
		name:"getItemsOn4lmnt",
		type:"actions",
code:function(item){
app.helper.getValueFromType.code(item)
	}},workFlowState:{
		name:"workFlowState",
		type:"actions",
code:function(item){
app.helper.getValueFromType.code(item, "workFlowState")
	}},popBaseActoins:{
		name:"popBaseActoins",
		type:"actions",
code:function(item){
	getF("https://us-central1-blazing-fire-5166.cloudfunctions.net/aggregateByEventId/baseObj").then((data)=>{
	selectFromDialog(data.events.filter(item5=>item5.field=="action").map((item7)=>{return Object.assign(item7,{name:item7.value})})).then((data3)=>{
		 window.actions[data3.name].code(item)
	})
	})
        }
	},
	popActions:{
		name:"popActions",
		type:"actions",
code:function(item){
	getF("https://us-central1-blazing-fire-5166.cloudfunctions.net/aggregateByEventId/"+item.type).then((data)=>{
	selectFromDialog(data.events.filter(item5=>item5.field=="action").map((item7)=>{return Object.assign(item7,{name:item7.value})})).then((data3)=>{
		 window.actions[data3.name].code(item)
	})
	})
        }
	},listChildren:{
		name:"listChildren",
		type:"actions",
code:function(item){
if(item.events){
	const children=	item.events.filter(item=> item.field=="child").map(item => {
return item.value
	})

	document.querySelector("#list").innerHTML=''
	fetch("https://us-central1-blazing-fire-5166.cloudfunctions.net/getAggFromMultipleId",{method:"post",
body:JSON.stringify(children)}).then((reh)=> reh.json()).then(json=> {
			console.log(json)
		json.map((item2)=>{
addResultRow(item2)
				})
		})
}
}
	},changeId:{
		name:"changeId",
		type:"actions",
code:function(item){
	const newId=prompt("newId")
const url="https://us-central1-blazing-fire-5166.cloudfunctions.net/changeId/"+item.id+"/"+newId
	app.helper.hrefBlank.code(url)
}
	},addAnyPrp:{
		name:"addAnyPrp",
		type:"actions",
code:function(item){
const a=document.createElement("a")
const url="https://storage.googleapis.com/blazing-fire-5166.appspot.com/singleComponent/addPrp.html?id="+item.id
	app.helper.hrefBlank.code(url)
}
	},listItems:{
		name:"listItems",
		type:"actions",
code:function(item){
	app.service.fetchResult.code([{field:"type",op:"==",value:item.name}])
}
	},delete:{
		name:"delete",
		type:"actions",
code:function(item){
const url="https://us-central1-blazing-fire-5166.cloudfunctions.net/delete/"+item.id
window.getF(url).then((retu)=>{ 
console.log(retu)	
})
}
	},ping:{
		name:"ping",
		type:"actions",
code:function(item){
const url="https://us-central1-blazing-fire-5166.cloudfunctions.net/ping?id="+item.id
window.getF(url).then((retu)=>{ 
console.log(retu)	
})
}
	}}
