class Task
{
    
    constructor(
        public category: String,
        public title: String,
        public priority: number,
        public estimate: number,
        public spent?: number,
        public remaining?: number  )
    {
        this.spent = this.spent || 0;
        this.remaining = this.remaining || this.estimate;
    }
    track(spent: number)
    {
        
            if(spent > 0)
            {
                this.spent=spent;
                this.remaining=this.remaining - spent;
            }
            else
            {
                return;
            }
    }
    done()
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
    complete()
    {
        this.remaining = 0;
    }
}