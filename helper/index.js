export default {
	hrefBlank:{
		name:"hrefblank",
		code:function (url){
		const a=document.createElement("a")
			a.target="_blank"
			a.href=url
			a.click()
		}
	},getValueFromType:{name:"getValueFromType",code:function(item,type="whty",op=":"){
getF("https://us-central1-blazing-fire-5166.cloudfunctions.net/getAggByType/"+type).then((data)=>{
selectFromDialog(data).then((data2)=>{
	console.log(item)
getF("https://us-central1-blazing-fire-5166.cloudfunctions.net/addAnyEvent?streamid="+item.id+"&field="+type+"&op="+op+"&value="+data2.name).then((data5)=>{
	
alert(data5)
})
})
})
	}},getF:{name:"getF",code:()=>{
	return fetch(url,{method:"get",mode:"cors",accessToken:localStorage.getItem("accessToken")}).then(res=>res.json())
	}}
}
