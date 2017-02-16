(function (scope) {
    "use strict";

    var form = document.querySelector('form');
    var tasksContainer = document.querySelector('#tasks');
    var taskManager = createTaskManager();
    taskManager.onChange(update);
    loadTasks();

    form && form.addEventListener('submit', addTask);
    

    function addTask(event) {
        event.preventDefault();
        var task = {};
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

        taskManager.getAll().forEach(function (task) {
            tasksContainer.appendChild(createTaskRow(task));
        });
    }

    function createTaskRow(task) {
        var tr = document.createElement('tr');
        var link=document.createElement('a');
        link.innerHTML='Delete';

        link.addEventListener("click",function(){
        console.log("remove it");
        taskManager.remove(task);
           });
        tr.appendChild(createTableCell(task.category));
        tr.appendChild(createTableCell(task.title));
        tr.appendChild(createTableCell(task.priority));
        tr.appendChild(createTableCell(task.estimate));
        tr.appendChild(createTableCell(task.spent));
        tr.appendChild(createTableCell(task.remaining));
        tr.appendChild(createTableCell(task.done() && '&#10004;'));
        tr.appendChild(link);
        return tr;
    }

    function createTableCell(text) {
        var td = document.createElement('td');
        if (text) {
            var text = document.createTextNode(text);
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