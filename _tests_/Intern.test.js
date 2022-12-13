const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

it("should create an intern object", () => {
    const intern = new Intern('Intern1');
    expect(typeof(intern)).toBe('object');
});

it("should get the intern's school", () => {
    const intern = new Intern('Intern1', '2', 'email', 'school1');
    expect(intern.getSchool()).toBe('school1');
});

it("should return Intern", () => {
    const intern = new Intern('Intern');
    expect(intern.getRole()).toBe('Intern');
});