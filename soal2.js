class Worker {
    constructor(hoursWorked, rate, TAX) {
        this.hoursWorked = hoursWorked;
        this.rate = rate;
        this.TAX = TAX;
    }

    basicSalary() {
        return this.hoursWorked * this.rate
    }
    overviewSalary() {
        return this.basicSalary() - this.TAX

    }

}
//input value for hoursWorked, rate and TAX
const worker = new Worker(10, 9, 100);
console.log(worker.basicSalary());
console.log(worker.overviewSalary());