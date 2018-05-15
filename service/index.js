export default {fetchResult:{name:"fetchResult",code:function fetchResult(criterias3){
fetch("https://us-central1-blazing-fire-5166.cloudfunctions.net/getAggByCriterias",{mode:"cors",method:"post",
	body:JSON.stringify(criterias3)})
.then((reh)=> reh.json()).then(json=> {
	console.log(json)
	document.querySelector("#list").innerHTML=''
		json.map(item=> {
			addResultRow(item)
			console.log(11,item)
		})
	
})
}},popLatest:{name:"popLatest",code:function(args={item:{lol:"adsf"},field:"hej"}, field="prpAttr"){
	return new Promise((resolve, reject) => {
getLatestUserEvents()
.then((data)=>{
	selectFromDialog(data.map(item=> item.obj))
		.then(item2 => {
			resolve(item2)
})
})
})
}},selectPrp:{
	name:"selectPrp",
	type:"actions",
	code:function(item){
		return new Promise((resolve, reject) => {
		fetch("https://us-central1-blazing-fire-5166.cloudfunctions.net/aggregateByEventId/"+item.type,{method:"get",mode:"cors"}).then(res=>res.json()).then((data)=>{
console.log(data)
	selectFromDialog(data.events.filter(item5=>item5.field=="prpAttr").map((item7)=>{return Object.assign(item7,{name:item7.value})})).then((data3)=>{
		  
		var op=""
		switch(data3.name){
			  case "prpAttr": op= "append";
			  case "child": op="append";
			  default: op= ":";
		}
			resolve({streamid:item.id,field:data3.name,op:op})
		



		})
	 
		})
//		 window.actions[data3.name](item)
	})
	}}}
