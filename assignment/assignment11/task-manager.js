var taskfile=require('./task');
var taskManager=function()
{

}
    ////////////////////////////////////
taskManager.prototype.create=function()
{
    return new manager();
}

var manager=function()
{
  
}
  manager.prototype.create=function(category,title,priority,estimate)
    {
        return new Task(category,title,priority,estimate);
    }
module.exports=taskManager;
module.exports=manager;
module.exports=taskfile;