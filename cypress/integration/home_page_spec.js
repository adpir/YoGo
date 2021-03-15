beforeEach(() => {
  cy.visit("/");
});

describe("Smoke Tests", () => {
  it("YGOO Header Loads", () => {
    cy.get("h1").should("be.visible").and("contain", "YOGO");
  });

  it("Login form loads on start", () => {
    cy.get("input[data-test=login-email]")
      .should("be.visible")
      .get("input[data-test=login-password]")
      .should("be.visible")
      .get("input[data-test=login-remember]")
      .should("be.visible")
      .get("button[data-test=sign-in-button]")
      .should("be.visible");
  });

  it("Create Activity Form Loads", () => {
    cy.get("[data-test=skip-login]").click();
    cy.get("[data-test=create-activity]").click();
    cy.contains("ACTIVITY NAME").should("be.visible");
    cy.contains("Duration").should("be.visible");
    cy.contains("Frequency").should("be.visible");
    cy.get("textarea").should("be.visible");
    cy.contains("CREATE!").should("be.visible");
  });

  it("Select System Activity page loads with Mind, Body, Social, All buttons", () => {
    cy.get("[data-test=skip-login]").click();
    cy.get("[data-test=select-activity]").click();
    cy.get("[data-test=select-body-activities]")
      .should("be.visible")
      .get("[data-test=select-social-activities]")
      .should("be.visible")
      .get("[data-test=select-all-activities]")
      .should("be.visible");
  });

  // Mind, Body, Social, All paths
  it("Select System Activity Mind Activity Info page loads", () => {
    cy.get("[data-test=skip-login]").click();
    cy.get("[data-test=select-activity]").click();
    cy.get(`[data-test=select-mind-activities]`).click();
    cy.contains("TODAY IS THE DAY!").should("be.visible");
    cy.url().should("include", `day-schedule/mind`);
  });

  const activityTypes = ["mind", "body", "social", "all"];
  activityTypes.forEach((activity) => {
    it(`Select System Activity ${activity} Activity Info page loads`, () => {
      cy.get("[data-test=skip-login]").click();
      cy.get("[data-test=select-activity]").click();
      cy.get(`[data-test=select-${activity}-activities]`).click();
      cy.contains("TODAY IS THE DAY!").should("be.visible");
      cy.url().should("include", `day-schedule/${activity}`);
    });
  });
});
