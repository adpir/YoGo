beforeEach(() => {
  cy.exec("npm run seed:users");
  cy.visit("/");
  cy.get("input[data-test=login-email]").type("testy@testy.com");
  cy.get("input[data-test=login-password]").type("123123");
  cy.get("button[data-test=sign-in-button]").click();
});

describe("Smoke Tests", () => {
  it("YOGO Header Loads", () => {
    cy.get("h1").should("be.visible").and("contain", "YOGO");
  });

  // it("Login form loads on start", () => {
  //   cy.get("input[data-test=login-email]")
  //     .should("be.visible")
  //     .get("input[data-test=login-password]")
  //     .should("be.visible")
  //     .get("input[data-test=login-remember]")
  //     .should("be.visible")
  //     .get("button[data-test=sign-in-button]")
  //     .should("be.visible");
  // });

  it("Create Activity Form Loads", () => {
    // cy.get("[data-test=skip-login]").click();
    cy.get("[data-test=create-activity]").click();
    cy.get("[data-test=activity-name-field]").should("be.visible");
    cy.get("[data-test=category-dropdown]").should("be.visible");
    cy.get("[data-test=duration-field]").should("be.visible");
    // cy.contains("Frequency").should("be.visible");
    cy.get("[data-test=description-field]").should("be.visible");
    cy.contains("CREATE!").should("be.visible");
  });

  // Mind, Body, Social, All paths
  it("Select System Activity page loads with Mind, Body, Social, All buttons", () => {
    // cy.get("[data-test=skip-login]").click();
    cy.get("[data-test=select-activity]").click();
    cy.get("[data-test=select-body-activities]")
      .should("be.visible")
      .get("[data-test=select-social-activities]")
      .should("be.visible")
      .get("[data-test=select-all-activities]")
      .should("be.visible");
  });

  const activityTypes = ["mind", "body", "social", "all"];
  activityTypes.forEach((activity) => {
    it(`Select System Activity ${activity} Activity Info page loads`, () => {
      // cy.get("[data-test=skip-login]").click();
      cy.get("[data-test=select-activity]").click();
      cy.get(`[data-test=select-${activity}-activities]`).click();
      cy.contains("TODAY IS THE DAY!").should("be.visible");
      cy.url().should("include", `day-schedule/${activity}`);
    });
  });

  it("Activity Info page loads correctly", () => {
    // cy.get("[data-test=skip-login]").click();
    cy.get("[data-test=select-activity]").click();
    cy.get(`[data-test=select-all-activities]`).click();
    cy.get("[data-test=day-schedule-activity]").first().click();
    cy.get("[data-test=activity-info-name]")
      .should("be.visible")
      .get("[data-test=activity-info-duration]")
      .should("be.visible")
      .get("[data-test=activity-info-description]")
      .should("be.visible");
  });
});
