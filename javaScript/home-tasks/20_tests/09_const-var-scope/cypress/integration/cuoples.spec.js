/* eslint-disable no-undef */
/// <reference types="cypress" />

function findCouple(firstElement, element, couples) {
  cy.get(element).next().click().then((e) => {
    cy.get(firstElement).click().then(() => {
      if (e.text() !== couples) {
        return findCouple(firstElement, e, couples);
      }
      cy.get('.grid-item').any().click();
      cy.get(firstElement).should('have.class', 'fliped');
      cy.get(e).should('have.class', 'fliped');
      return null;
    });
  });
}
function findNotCouple(firstElement, element, couples) {
  const couplesText = couples ? firstElement.text() : couples;
  cy.get(element).next().click().then((e) => {
    if (e.text() === couplesText) {
      cy.get(e).next().click().then((elem) => {
        const coupleTextelse = e.text();
        return findNotCouple(elem, elem, coupleTextelse);
      });
      return findNotCouple(e, cy.get(e).next(), couplesText);
    }
    cy.get('.grid-item').any().click();
    cy.get(firstElement).should('not.have.class', 'fliped');
    cy.get(e).should('not.have.class', 'fliped');
    return null;
  });
}
describe('Приложение Couples', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Skillbox/js_advanced/20_testing/09_const-var-scope/index.html');
  });

  it('В начальном состоянии игра должна иметь поле четыре на четыре клетки, в каждой клетке цифра должна быть невидима', () => {
    cy.get('.grid-item').should('have.length', 16);
    cy.get('.grid-item .flip').should('have.length', 0);
  });
  it('Нажать на одну произвольную карточку. Убедиться, что она осталась открытой.', () => {
    cy.get('.grid-item').any().click().should('have.class', 'flip', { timeout: 3000 });
  });
  it('Нажать на левую верхнюю карточку, затем на следующую. Если это не пара, то повторять со следующей карточкой, пока не будет найдена пара. Проверить, что найденная пара карточек осталась видимой.', () => {
    cy.get('.grid-item:first-child').click().then((e) => {
      const couple = e.text();
      findCouple(e, e, couple);
    });
  });
  it('Нажать на левую верхнюю карточку, затем на следующую. Если это пара, то повторять со следующими двумя карточками, пока не найдутся непарные карточки. Проверить, что после нажатия на вторую карточку обе становятся невидимыми.', () => {
    cy.get('.grid-item:first-child').click().then((e) => {
      const couple = e.text();
      findNotCouple(e, e, couple);
    });
  });
});
