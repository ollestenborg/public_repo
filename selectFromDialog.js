export default function selectFromDialog(arr=[{name:"adfa"},{name:"ayyu"}]){
	const tmpvar=document.createElement("dialog")
	tmpvar.open=true
	tmpvar.style='z-index:4;position: absolute;left: 50%;top: 50%;'
	document.body.appendChild(tmpvar)
	tmpvar.id="selectFromArray"
	return new Promise((resolve, reject) => {
arr.map(item2=>{
	const btn= Object.assign(document.createElement("button"), {
            innerText: item2.name,
		className:"btn-lg btn-outline-primary",
		type:"button",
            onclick: e => {
resolve(item2)
		    document.querySelector("#selectFromArray").remove()
            }
                })


		btn.style.margin="8px"
		console.log(btn.onclick)
	tmpvar.appendChild(btn)
        })

})
}
