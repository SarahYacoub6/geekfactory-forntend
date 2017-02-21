(function (scope) {
    "use strict";

    var form = document.querySelector('#new-todo');
    var editForm = document.querySelector('#edit');
    var tasksContainer = document.querySelector('#tasks');
    var taskManager = create();
    taskManager.onChange(update);
    loadTasks();

    form && form.addEventListener('submit', addTask);
    
    function addTask(event) {
        event.preventDefault();
        var task = {} as any;
        event.target.querySelectorAll('input:not([type="submit"]').forEach(function (input) {
            task[input.name] = input.value;
            input.value = null;
        });
        taskManager.create(task.category, task.title, task.priority, task.estimate);
    }

    function update(tasks) {
        localStorage.setItem('tasks',JSON.stringify(tasks));
        while (tasksContainer.hasChildNodes()) {
            tasksContainer.removeChild(tasksContainer.lastChild);
        }
        var index=1;
        taskManager.getAll().forEach(function (task) {
            tasksContainer.appendChild(createTaskRow(task,index));
            index++;
        });
    }

    function createTaskRow(task,index) {
        var tr = document.createElement('tr');
        var link = document.createElement('a');
        link.innerHTML = 'Delete';

        var editLink = document.createElement('a');
        editLink.innerHTML = 'Edit';

        link.addEventListener("click",function(){
        console.log("remove it");
        taskManager.remove(task);
           });

        editLink.addEventListener("click",function(){
            getTaskData(task);
        });
        function editTask(event){
            event.preventDefault();
            task.category = (<HTMLInputElement>document.getElementById('edit-category')).value;
            task.title = (<HTMLInputElement>document.getElementById('edit-title')).value;
            task.priority = (<HTMLInputElement>document.getElementById('edit-priority')).value;
            task.estimate = (<HTMLInputElement>document.getElementById('edit-estimate')).value;
            update(taskManager.getAll());
                         
        }
        function getTaskData(task){
            //remove the disabled option from each input in edit form
            (<HTMLInputElement>document.getElementById('edit-category')).disabled = false;
            (<HTMLInputElement>document.getElementById('edit-title')).disabled = false;
            (<HTMLInputElement>document.getElementById('edit-priority')).disabled = false;
            (<HTMLInputElement>document.getElementById('edit-estimate')).disabled = false;
            (<HTMLInputElement>document.getElementById('edit-done')).disabled = false;
            //set values in each text 
            (<HTMLInputElement>document.getElementById('edit-category')).value = task.category;
            (<HTMLInputElement>document.getElementById('edit-title')).value = task.title;
            (<HTMLInputElement>document.getElementById('edit-priority')).value = task.priority;
            (<HTMLInputElement>document.getElementById('edit-estimate')).value = task.estimate;
            editForm && editForm.addEventListener('submit',editTask);
        }
        //tr.appendChild(createTableCell(index));
        tr.appendChild(createTableCell(task.category));
        tr.appendChild(createTableCell(task.title));
        tr.appendChild(createTableCell(task.priority));
        tr.appendChild(createTableCell(task.estimate));
        tr.appendChild(createTableCell(task.spent));
        tr.appendChild(createTableCell(task.remaining));
        tr.appendChild(createTableCell(task.done() && '&#10004;'));
        tr.appendChild(editLink);
        tr.appendChild(link);
        return tr;
    }

    function createTableCell(text) {
        var td = document.createElement('td');
        if (text) {
            var text: any;
            text = document.createTextNode(text);
            td.appendChild(text);
        }
        return td;
    }

    function loadTasks()
    {
        if(typeof scope.localStorage !== 'undefined')
        {
            var tasks = JSON.parse(scope.localStorage.getItem('tasks'));
            tasks && tasks.forEach(function(task){
            taskManager.create(task.category,task.title,task.priority,task.estimate);
            })
        }
    }
   
})(window);