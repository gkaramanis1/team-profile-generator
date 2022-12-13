const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

it("should create an Engineer object", () => {
    const engineer = new Engineer('Engineer1');
    expect(typeof(engineer)).toBe('object');
});

it("should get the github username", () => {
    const engineer = new Engineer('Manager', '1', 'johndoe123@email.com', 'Johngithub');

    expect(engineer.getGithub()).toBe('Johngithub')
});

it("should return engineer", () => {
    const engineer = new Engineer('Manager1');

    expect(engineer.getRole()).toBe('Engineer');
})