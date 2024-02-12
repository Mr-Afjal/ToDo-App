let inputs = document.getElementById('inputArea');
let text = document.querySelector('.textArea');

function addTask(){
    if(inputs.value == ""){
        alert("please enter your task");
    }
    else{
        let newEle = document.createElement('ul');
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEle.remove();
        }
    }
}