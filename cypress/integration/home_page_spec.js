before(() => {
  cy.visit("/");
});

describe("Home page", () => {
  it("YGOO Header Loads", () => {
    cy.get("h1").should("be.visible").and("contain", "YOGO");
  });

  it("Login form loads on start", () => {
    cy.get("button[data-test=login]")
      .should("be.visible")
      .get("button[data-test=create-account]")
      .should("be.visible")           
  });
  
  // it("Create account form loads correctly", () => {
  //   cy.get("button[data-test=login]")
  //     .should("be.visible")
  //     // .get("button[data-test=create-account]")
  //     // .should("be.visible")
  //     .get("button[data-test=user-name]")
  //     .should("be.visible")    
  //     .get("button[data-test=first-name]")
  //     .should("be.visible")    
  //     .get("button[data-test=last-name]")
  //     .should("be.visible")    
  //     .get("button[data-test=email]")
  //     .should("be.visible")    
  //     .get("button[data-test=password]")
  //     .should("be.visible")    
  //     .get("button[data-test=create-account-button]")
  //     .should("be.visible")    
  //     .get("button[data-test=skip-login]")
  //     .should("be.visible");      
  // });
});
