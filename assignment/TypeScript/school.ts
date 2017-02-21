export class Person
{
    constructor(public name: String)
    {
        this.name = name;
    }
    getRole()
    {

    }
    getInfo()
    {
        return `My name is ${this.name}. I am a ` + this.getRole() + `.`;
    }
}

export class Student extends Person
{
    constructor(name:string)
    {
         super(name);
    }
    getRole()
    {
        return 'Student';
    }
}
export class Staff extends Person
{
    constructor(name:string)
    {
        super(name);
    }
    getRole()
    {
        return 'Staff';
    }
    getInfo()
    {
        return super.getInfo();
    }
}
export class Teacher extends Staff
{
    constructor(name:string, public subject: String)
    {
        super(name);
        this.subject = subject;
    }
    getRole()
    {
        return super.getRole();
    }
    getInfo()
    {
        return super.getInfo() + ` I teach ${this.subject}.`;
    }
}