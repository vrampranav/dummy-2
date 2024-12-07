// const data = [
//     {id:101,name:"Ajay",marks:45},
//     {id:301,name:"Baaloo",marks:89},
//     {id:601,name:"Aaloo",marks:22},
//     {id:201,name:"Siraj",marks:21},
//     {id:501,name:"Lalith",marks:45},
// ]

// const x = [55,1,7,8,22,90]

// console.log(x);


const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const filterBtn = document.getElementById('filter-btn');
const clearBtn = document.getElementById('clear-btn');

const container = document.getElementById('todo-container')


let todos = [];
let tid = 101;

addBtn.addEventListener('click',()=>{
    let userTodo = todoInput.value.trim();
    let data = {id:tid,todo:userTodo,isCompleted:false};
    todos.push(data);

    console.log(todos);
    displayTodos(todos);
    tid++;
})


function displayTodos(todosData){
    container.innerHTML = '';
    todosData.forEach(obj => {
        const div = document.createElement('div');
        div.setAttribute('data-id',obj.id);
        let p = document.createElement('p');
        p.innerText = obj.todo;
        p.addEventListener('click',()=>{
            let todoFinishId = p.parentElement.getAttribute('data-id')
            finishTodo(todoFinishId);
            filterTodos();
        })
        if(obj.isCompleted){
            p.classList.add('finish');        
        }
        let delBtn = document.createElement('button');
        delBtn.innerText = 'Delete';
        delBtn.addEventListener('click',(e)=>{
            deleteTodo(e.target.parentElement.getAttribute('data-id'));
        });

        div.appendChild(p);
        div.appendChild(delBtn);
        container.appendChild(div);
    });

}

function finishTodo(todoId){
    let updatedTodos = todos.map(obj=>{
        if(obj.id===+todoId){
            obj.isCompleted = obj.isCompleted?false:true;
        }
        return obj;
    })
    todos = updatedTodos;
    displayTodos(todos);

}

function deleteTodo(todoId){

    let updatedTodos = todos.filter(obj=>obj.id!==+todoId);
    todos = updatedTodos
    displayTodos(todos);
}