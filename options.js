export default function(options){
const select=document.createElement("select")
options.map((item)=>{
const op=document.createElement("option")
op.innerText=item
select.appendChild(op)
})
return select
}
