import { Task } from "./task";
export var create = function()
 {
    var tasks = [];
    var onchangecallback;
    function create(category: String, title: String, priority: number, estimate: number) 
    {
        var task = new Task(category, title, priority, estimate);
        tasks.push(task);
        onchangecallback && onchangecallback(tasks);
        return task;
    }
    function get(index)
    {
        return tasks[index];
    }
    function getAll(activeOnly)
    {
         return _filter(function (task) {
            return !activeOnly || !task.done();
        });
    }
    function find(query)
    {
        query && query.toLowerCase && (query = query.toLowerCase());

        return _filter(function (t) {
            return t.title.toLowerCase().indexOf(query) > -1 || t.category.toLowerCase().indexOf(query) > -1;
        });
    }
    function _filter(predicte) 
    {
        var matched = [];
        tasks.forEach(function (task)
         {
            predicte(task) && matched.push(task);
        });
        return matched;
    }
    function remove(index)
    {
        if(typeof index !== 'number')
        {
            for (var i = 0; i < tasks.length; i++)
            {
                if (tasks[i] === index)
                {
                    index = i;
                    break;
                }
            }
         }
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            onchangecallback && onchangecallback(tasks);    //to make sure that "onchangecallback" is not null
        }
    }
    function onChange(callback)                             //we want to make sure that the callback has a function
    {
        onchangecallback = callback;
    }
 return {
       create: create,
       get: get,
       getAll: getAll,
       find: find,
       remove: remove,
       onChange: onChange
   };
 
}

