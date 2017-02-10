var Task=function(category,title,priority,estimate)
{
    this.category=category;
    this.title=title;
    this.priority=priority;
    this.estimate=estimate;
    this.spent=0;
    this.remaining=this.estimate-this.spent;
}
    ////////////////////////////////////
Task.prototype.track=function(spent)
{

    if(spent<0 || typeof(spent) !== 'number')
    {
        return;
    }
    else
    {
        this.spent=spent;
        this.remaining=this.estimate-this.spent;  
        
    }
}
    ///////////////////////////////////
Task.prototype.done=function()
{
    if(this.remaining === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
    ///////////////////////////////////
Task.prototype.complete=function()
{
    this.track(this.estimate);

}

module.exports = Task;