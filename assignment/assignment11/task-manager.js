var Task=require('./task');

var create=function()
{
    var task_arr = [];
    let taskManager={
       create:function(category,title,priority,estimate)
       {
           
           task_arr.push(new Task(category,title,priority,estimate));
           return task_arr[0];
       } 
       ,get:function(index)
       {
           return task_arr[index];
       }
       ,getAll:function()
       {
           return task_arr;
       }
       ,find:function(find_value){
           var task_find_arr = [];

           for(var i=0 ; i<task_arr.length ; i++)
           {
               if(task_arr[i].title.slice(0,20) === find_value)
               {
                    task_find_arr.push(task_arr[i]);
               }
               if(task_arr[i].category.slice(0,6) === find_value)
               {
                   task_find_arr.push(task_arr[i]);
               }
           }
           return task_find_arr;
       }
        ,remove:function(index)
       {
           if( typeof(index)  === 'number'){
               if(index < task_arr.length){
                task_arr.pop(index);
               }
           }else{
               task_arr.pop(task_arr.length -1)
           }
           
       }
   }
   return taskManager;
}
   
exports.create=create;