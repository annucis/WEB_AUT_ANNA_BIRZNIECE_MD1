import BasePage from "./base.page";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get gridTab() {
    return cy.get("#demo-tab-grid");
  }

  static get numberBox() {
    return (label) => cy.contains(".list-group-item", label);
  }
  
}

export default SelectablePage;
