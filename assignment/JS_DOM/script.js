(function (scope) {
    "use strict";

    var form = document.querySelector('#new-todo');
    var editForm = document.querySelector('#edit');
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
        
        var deleteLinkTd = document.createElement('td');
        var link = document.createElement('a');
        link.innerHTML = 'Delete';
        deleteLinkTd.appendChild(link);

        var editLinkTd = document.createElement('td');
        var editLink = document.createElement('a');
        editLink.innerHTML = 'Edit';
        editLinkTd.appendChild(editLink);

        link.addEventListener("click",function(){
        console.log("remove it");
        taskManager.remove(task);
           });

        editLink.addEventListener("click",function(){
            getTaskData(task);
        });
        function editTask(event){
            event.preventDefault();
            task.category = document.getElementById('edit-category').value;
            task.title = document.getElementById('edit-title').value;
            task.priority = document.getElementById('edit-priority').value;
            task.estimate = document.getElementById('edit-estimate').value;
            update(taskManager.getAll());
            document.getElementById('edit-category').value = null;
            document.getElementById('edit-title').value = null;
            document.getElementById('edit-priority').value = null;
            document.getElementById('edit-estimate').value = null;
            disableTaskForm( true);
            editForm && editForm.removeEventListener('submit',editTask);
        }
        function getTaskData(task){
            disableTaskForm(false);
            //set values in each text 
            document.getElementById('edit-category').value = task.category;
            document.getElementById('edit-title').value = task.title;
            document.getElementById('edit-priority').value = task.priority;
            document.getElementById('edit-estimate').value = task.estimate;
            editForm && editForm.addEventListener('submit',editTask);
        }

        function disableTaskForm(disabled){
            //remove the disabled option from each input in edit form
            document.getElementById('edit-category').disabled = disabled;
            document.getElementById('edit-title').disabled = disabled;
            document.getElementById('edit-priority').disabled = disabled;
            document.getElementById('edit-estimate').disabled = disabled;
            document.getElementById('edit-done').disabled = disabled;
        }

        tr.appendChild(createTableCell(task.category));
        tr.appendChild(createTableCell(task.title));
        tr.appendChild(createTableCell(task.priority));
        tr.appendChild(createTableCell(task.estimate));
        tr.appendChild(createTableCell(task.spent));
        tr.appendChild(createTableCell(task.remaining));
        tr.appendChild(createTableCell(task.done() && '&#10004;'));
        tr.appendChild(editLinkTd);
        tr.appendChild(deleteLinkTd);
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