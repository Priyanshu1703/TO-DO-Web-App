

function handleCheckboxChange(event){
    var parent=event.target.parentNode;
    var para=parent.getElementsByTagName('p');
    if(event.target.checked){
        para[0].classList.add('strike_through');
    }
    else{
        para[0].classList.remove('strike_through');
    }
}

function handleAddButtonChange(){
    var todos=document.getElementsByClassName('container');
    var data=document.getElementById('input-box').value;

    if(data!==''){
        todos[0].innerHTML=todos[0].innerHTML+`
    <div class="todo_Div">
            <input type="checkbox" class="ckbox" onclick="handleCheckboxChange(event)">   
            <p class="paragraph">${data}</p>
            <button class="XButton" onclick="handleXButton(event)">x</button>
        </div>`;
    }
}

function handleXButton(event){
    var parent=event.target.parentNode;
    parent.remove();
}




