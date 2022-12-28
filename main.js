class User {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
}
 
getFullName() 
    {
    return this.name + "Тимур Юнусов" + this.surname
    }
}
 
    class Student extends User 
    {
        
        constructor (name, surname, year)
        {
            super(name, surname)
            this.year = year
            }
                getFullName(){
            super.getFullName()
        }
        
 
        getCourse() 
        {   
            let now = new Date(),
            nowYear = now.getFullYear()
 
            if (this.year > 2019 && this.year < 2022)
            {
                return nowYear - this.year;
            }
        }
}
 
 
var student = new Student("Тимур", "Юнусов", 2020)
console.log(student)
console.log(student.name)
console.log(student.surname)
console.log(student.getFullName())
console.log(student.year)
console.log(student.getCourse())


