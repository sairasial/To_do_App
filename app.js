var list=document.getElementById("list")


function addTodo(){
    var toDoitem=document.getElementById("toDoitem")


    var li=document.createElement("li")
    var litext=document.createTextNode(toDoitem.value)
    li.setAttribute("class","val")
    li.append(litext)
    


    var dbtn=document.createElement("button")
    var dtext=document.createTextNode("Delete")
    dbtn.append(dtext)
    li.append(dbtn)
    dbtn.setAttribute("onclick","del(this)")
    dbtn.setAttribute("class","btn")
    dbtn.setAttribute("class","btn2")


    var ebtn=document.createElement("button")
    var etext=document.createTextNode("Edit")
    ebtn.append(etext)
    li.append(ebtn)
    ebtn.setAttribute("onclick","edit(this)")
    ebtn.setAttribute("class","btn")
    ebtn.setAttribute("class","btn2")

list.appendChild(li)
toDoitem.value=""
console.log(li)
}

function del(e){
    e.parentNode.remove()
}


function deleteTodo(){
    list.innerHTML=" "
}

function edit(e){
    var val = e.parentNode.firstChild.nodeValue
    var edit=prompt("enter value",val)
    e.parentNode.firstChild.nodeValue=edit
}