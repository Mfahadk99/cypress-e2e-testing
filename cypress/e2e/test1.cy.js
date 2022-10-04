///<reference types="cypress"/>

it("test1", () => {
  cy.visit("https://unsplash.com/s/photos/programmer");
  cy.get(":nth-child(1) > .FBggh > .sHvDg")
    .should("be.visible")
    .and("have.text", "developer")
    .and("have.class", "sHvDg")
    .and("not.be.disabled")
    .click();
  cy.get(
    ':nth-child(1) > :nth-child(2) > .YdIix > :nth-child(1) > .GIFah > .zmDAx > .rEAWd > .omfF5 > .MorZF > .VQW0y > [data-test="photo-grid-multi-col-img"]'
  ).click();
  cy.get(".wl5gA").click();
  // cy.get(".gLFyf").type("Mfahadk99 {Enter}");
  // cy.contains("Images").click();
});
