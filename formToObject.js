export default function() {
const list = document.querySelector('div#formArea').children
    var obj = {}
    for (var i = 0; i < list.length; i++) {
        console.log(list[i].value)
        obj[list[i].id] = list[i].value
    }
    console.log(obj)
    return obj
}
