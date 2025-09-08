const wrapper = document.getElementById("wrapper")
//console.log(wrapper);
const titles = document.getElementsByClassName("title")
document.addEventListener('DOMContentLoaded', loadTasks);
//console.log(titles);

// const lis = document.getElementsByTagName("li")
// const liArray = Array.from(lis)
// console.log(liArray);
//console.log(Array.from(lis));

const ul = document.querySelector("ul")
//console.log(ul);


window.addEventListener("DOMContentLoaded", loadTasks)


taskList.addEventListener("click",(event) => {
    if(event.target.classList.contains("delete")){
        const li = event.target.parentElement;
        const taskName = li.querySelector("span.me").textContent
        taskList.removeChild(li);
        removeTaskFromStorage(taskName)
    }
    if(event.target.type === "checkbox"){
        const taskname = event.target.nextsibling.textContent;
        toggleTaskInStorage(taskname, event.target.checked)
    }
})

const lis = document.querySelectorAll("li")
//console.log(lis);
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

const searchBar = document.getElementById("search-Task");
const bookList = document.getElementById("task-list");

searchBar.addEventListener("keydown", (event) => {
    const term = event.target.value.toLowerCase();
    const books = bookList.getElementsByTagName("li");

    for (let book of books) {
        const title = book.textContent.toLowerCase();
        if (title.includes(term)) {
            book.style.display = ""; 
        } else {
            book.style.display = "none"; 
        }
    }
});

    // const books = booklist.getElementsByTagName("li");
    // Array.from(books).forEach((book) => {
    //     let title = book.firstElementChild.textContent;
    //     if(title.toLowerCase().indexOf(searchBar) != -1){
    //         book.style.display = "block"
    //     }else{
    //         book.style.display = "none"
    //     }
    // });
const booklist = document.querySelector("#task-list ul")
booklist.addEventListener("click",(event) => {
    console.log(event);
    if(event.target.textContent == "delete"){
        let li = event.target.closest("li")
        //console.log(li);
        booklist.removeChild(li)
    }
})
const addBookForm = document.getElementById("add-task")
addBookForm.addEventListener("submit",(event) => {
    event.preventDefault();

    const value = document.querySelector("#add-task input").value.trim()
    //console.log(value);
    if(value!=""){
    // let newLiTag = document.createElement("li")
    // let firstSpan = document.createElement("span")
    // let secondSpan = document.createElement("span")
    const{newLiTag,firstSpan,secondSpan} = createNewElement()
    addClassName(firstSpan,secondSpan);
    addtextContent(firstSpan,secondSpan, value );
    appendChildren(newLiTag,firstSpan,secondSpan);
     addtaskForm.reset()
    
    // newLiTag.classList.add("name")


    // firstSpan.classList.add("name")
    // secondSpan.classList.add("delete")



    // newLiTag.appendChild(firstSpan);
    // newLiTag.append(secondSpan);
    // booklist.append(newLiTag);


    // firstSpan.textContent = value;
    // secondSpan.textContent = "delete";
    }else{
        alert("oga get sense, then add a book")
    }
    //addBookForm.reset()


});
function createNewElement(){
    let newLiTag = document.createElement("li")
    let firstSpan = document.createElement("span")
    let secondSpan = document.createElement("span")
    return {newLiTag,firstSpan,secondSpan}
}
function addClassName(firstSpan,secondSpan){
    firstSpan.classList.add("name")
    secondSpan.classList.add("delete")
}
function addtextContent(firstSpan,secondSpan,value){
    firstSpan.textContent = value;
    secondSpan.textContent = "delete";
}
function appendChildren(newLiTag,firstSpan,secondSpan){
    newLiTag.appendChild(firstSpan);
    newLiTag.append(secondSpan);
    booklist.append(newLiTag);
}

