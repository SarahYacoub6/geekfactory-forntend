var Task = (function () {
    function Task(category, title, priority, estimate, spent, remaining) {
        this.category = category;
        this.title = title;
        this.priority = priority;
        this.estimate = estimate;
        this.spent = spent;
        this.remaining = remaining;
        this.spent = this.spent || 0;
        this.remaining = this.remaining || this.estimate;
    }
    Task.prototype.track = function (spent) {
        if (spent > 0) {
            this.spent = spent;
            this.remaining = this.remaining - spent;
        }
        else {
            return;
        }
    };
    Task.prototype.done = function () {
        if (this.remaining === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Task.prototype.complete = function () {
        this.remaining = 0;
    };
    return Task;
}());
