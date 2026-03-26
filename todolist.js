
const todoInput2=document.querySelector('.todo-input2');
const todoInputDate=document.querySelector('.todo-input-date');
const addToArrayButton=document.querySelector('.add-button')
const todoList=[
 
];
function render(){
let todoListHTML=''
todoList.forEach((todoListObject,index)=>{

  const {name,duedate}=todoListObject
 const HTML=`
    <div>${name}</div> <div>${duedate}</div>
      <button class='delete-button'>Delete</button>
   </p>`
 todoListHTML+=HTML;


})
document.querySelector('.todo-container2').innerHTML=todoListHTML;
document.querySelectorAll('.delete-button').forEach((deleteButton,index)=>{
  deleteButton.addEventListener('click',()=>{
    todoList.splice({index},1);
    render();
  })
})
}
function addToArray(){
todoList.push({name:todoInput2.value,duedate:todoInputDate.value});
todoInput2.value=''
todoInputDate.value=''
render();

}

addToArrayButton.addEventListener('click',()=>{
  addToArray();
})
 
document.body.addEventListener('keydown',(event)=>{
  if(event.key==='Enter'){
    addToArray();
  }
})
