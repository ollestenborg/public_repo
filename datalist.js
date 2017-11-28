export default function(options, listName){
const datalist=document.createElement("datalist")
options.map((item)=>{
const op=document.createElement("option")
op.innerText=item
datalist.appendChild(op)
})
return datalist
}
