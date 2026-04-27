import SelectablePage from "../pageObjects/selectable.page";

describe("MD1 Selectable Grid", () => {
  beforeEach(() => {
    SelectablePage.visit(SelectablePage.url);
  });

  it("Selects even numbers and validates highlights", () => {
    //click grid tab
    SelectablePage.gridTab.click();

    //click even nrs
    ["Two", "Four", "Six", "Eight"].forEach((num) => {
      SelectablePage.numberBox(num).click();
    });

    //validate highlighted nrs
    ["Two", "Four", "Six", "Eight"].forEach((num) => {
      SelectablePage.numberBox(num).should("have.class", "active");
    });

    //validate NOT highlighted nrs
    ["One", "Three", "Five", "Seven", "Nine"].forEach((num) => {
      SelectablePage.numberBox(num).should("not.have.class", "active");
    });

  });


});
