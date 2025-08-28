const { student, bankAccount, inventory, company, products, findExpensiveProducts } = require('./objects');
describe("Student Object", () => {
  test("should return student name", () => {
    expect(student.name).toBe("John Doe");
  });

    test("should return second course", () => {
      expect(student.courses[1]).toBe("Physics");
    });
  
test("should return zip code", () => {
    expect(student.address.zip).toBe(10001);
  });

  test("should return updated details", () => {
    expect(student.getDetails())
      .toBe("John Doe is 23 years old and has a GPA of 3.8");
  });
});


describe("Bank Account", () => {
  test("should deposit money", () => {
    expect(bankAccount.deposit(200)).toBe(700);
  });

  test("should not withdraw if insufficient funds", () => {
    expect(bankAccount.withdraw(1000)).toBe(false);
  });

  test("should withdraw successfully", () => {
    expect(bankAccount.withdraw(100)).toBe(true);
    expect(bankAccount.balance).toBe(600); 
  });
});


describe("Inventory", () => {
  test("should count total fruits", () => {
    const total = Object.values(inventory).reduce((a, b) => a + b, 0);
    expect(total).toBe(35);
  });

  test("should have 12 mangoes", () => {
    expect(inventory.mango).toBe(12);
  });
});


describe("Company", () => {
  test("should return second employee name", () => {
    expect(company.employees[1].name).toBe("Bob");
  });

  test("should destructure company name & location", () => {
    const { name, location } = company;
    expect(name).toBe("TechCorp");
    expect(location).toBe("San Francisco");
  });

  test("should have 4 employees", () => {
    expect(company.employees.length).toBe(4);
  });
});


describe("Products", () => {
  test("should find expensive products > 700", () => {
    const result = findExpensiveProducts(products, 700);
    expect(result).toEqual([
      { id: 1, name: "Laptop", price: 1200 },
      { id: 2, name: "Phone", price: 800 }
    ]);
  });

  test("should return empty if no product is above threshold", () => {
    expect(findExpensiveProducts(products, 2000)).toEqual([]);
  });
});