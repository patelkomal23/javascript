class Employee {
    constructor(name, age, salary) {
        this.E_name = name;
        this.age = age;
        this.salary = salary;
    }

    setEmp(name, age, salary) {
        this.E_name = name;
        this.age = age;
        this.salary = salary;
    }

    getEmp() {
        console.log("Employee Name: " + this.E_name + " Age: " + this.age + " Salary: " + this.salary);
    }
}

class Salary extends Employee {
    constructor(name, age, salary, hra, ma, pf) {
        super(name, age, salary);
        this.hra = hra;
        this.ma = ma;
        this.pf = pf;
        this.grossSalary = this.hra + this.ma - this.pf;
        this.netSalary = this.grossSalary + this.salary;
    }

    getSal() {
        super.getEmp();
        console.log(`Employee grossSalary is ${this.grossSalary} and netSalary is ${this.netSalary}`);
    }
}


let sal = new Salary("Bheem", 19, 60000, 3500, 2000, 4500);
sal.getSal();