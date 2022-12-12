const Employee = require('../lib/Employee');

it("should create an employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

it("should get the employee's name", () => {
    const employee = new Employee('Employee1');
    expect(employee.getName()).toBe('Employee1');
});

it("should get the employee's id", () => {
    const employee = new Employee('Employee1', '1');
    expect(employee.getId()).toBe('1');
});

it("should get employee's email", () => {
    const employee = new Employee('Employee1', '1', 'johndoe123@email.com');
    expect(employee.getEmail()).toBe('johndoe123@email.com');
});

it("should return employee", () => {
    const employee = new Employee('Employee');
    expect(employee.getRole()).toBe('Employee');
});