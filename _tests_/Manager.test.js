const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

it("should create manager object", () => {
    const manager = new Manager('Manager1');
    expect(typeof(manager)).toBe('object');
});

it("should get office number", () => {
    const manager = new Manager('Manager', '1', 'Johndoe123@email.com', '3');
    expect(manager.getOfficeNumber()).toBe('3');
});

it("should return Manager", () => {
    const manager = new Manager('Manager');
    expect(manager.getRole()).toBe('Manager');
});