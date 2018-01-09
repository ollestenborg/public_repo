export default (eles) => {
console.log(eles)
const hel= Array.from(eles).map((ele)=>{
return Array.from(ele.children).map((field)=>{
return field.value
})
console.log(criteriaArray)
})
return hel
}
