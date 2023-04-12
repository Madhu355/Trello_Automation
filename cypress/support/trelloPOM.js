class trelloPageObjects {
  getCreateBoardBtn() {
    return cy.get(".board-tile");
  }
  getBoardTitle() {
    return cy.get('[data-testid="create-board-title-input"]');
  }
  getCreateBoardSubmitBtn() {
    return cy.get('[data-testid="create-board-submit-button"]');
  }
  getAddListBtn1() {
    return cy.get(".js-add-list");
  }
  getListTitle1() {
    return cy.get("input.list-name-input");
  }
  getValidateListTitle1() {
    return cy.get(
      ":nth-child(4) > div > div.list-header.js-list-header.u-clearfix.is-menu-shown.ui-sortable-handle > h2"
    );
  }
  getListTitle2() {
    return cy.get(".list-name-input");
  }
  getValidateListTitle2() {
    return cy.get(
      ":nth-child(5) > div > div.list-header.js-list-header.u-clearfix.is-menu-shown.ui-sortable-handle > h2"
    );
  }
  getcreateTaskBtn() {
    return cy.get(
      ":nth-child(1) > .list > .card-composer-container > .open-card-composer"
    );
  }
  getTaskTitle() {
    return cy.get(".js-card-title");
  }
}

export default trelloPageObjects;
