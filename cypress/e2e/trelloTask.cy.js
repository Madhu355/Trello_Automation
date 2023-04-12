import trelloPageObjects from "../support/trelloPOM";
describe("Trello", () => {
  const trelloPageObjects = new trelloPageObjects();
  const boardName = "Test Board 1";
  const listName1 = "My List A";
  const listName2 = "My List B";
  const taskName = "Task Card 1";

  beforeEach(() => {
    // Log in to Trello
    cy.visit("https://trello.com/login");
    cy.get("#user").type("peheref674@gam1fy.com");
    cy.get("#login").click();
    cy.wait(3000);

    cy.origin("https://id.atlassian.com", () => {
      cy.get("#password").type("Qwerty@12345");
      cy.get("#login-submit").click();
    });
  });

  it("creates a dashboard and a task", () => {
    // Create a new board
    trelloPageObjects.getCreateBoardBtn().contains("Create new board").click();
    trelloPageObjects.getBoardTitle().type(boardName);
    trelloPageObjects.getCreateBoardSubmitBtn().click();
    cy.contains(boardName).should("be.visible");

    // Create a new list A
    trelloPageObjects.getAddListBtn1().click();
    trelloPageObjects.getListTitle1().type(listName1 + "{enter}");
    trelloPageObjects.getValidateListTitle1().should("contain", listName1);

    // Create a new list B
    trelloPageObjects.getListTitle2().type(listName2 + "{enter}");
    trelloPageObjects.getValidateListTitle2().should("contain", listName2);

    // Create a new task
    trelloPageObjects.getCreateTaskBtn().click();
    cy.wait(2000);
    trelloPageObjects.getTaskTitle().type(taskName + "{enter}");
    cy.contains(taskName).should("be.visible");

    // Move the task to a new position
    cy.get(
      "#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards.js-sortable.ui-sortable > a"
    ).drag(":nth-child(2) > .list > .list-header > .list-header-target", {
      force: true,
    });

    // Verify that the task has been moved to the new position
    cy.get(".list-card")
      .last()
      .then(($card) => {
        const { x, y } = $card[0].getBoundingClientRect();
        cy.log($card[0]);
        cy.log(x);
        cy.log(y);
      });
  });
});
