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
      .should("be.visible");
  });
});
