class BasePage {
  static visit(path = "") {
    cy.visit(path);
  }
}

export default BasePage;
