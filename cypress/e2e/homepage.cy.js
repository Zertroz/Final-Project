

describe('Homepage functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.intercept("GET", "https://www.dnd5eapi.co/api/ability-scores/cha", {
      statusCode: 200,
      fixture: 'stat'
    })
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/skills/deception', {
      statusCode: 200,
      fixture: 'skill'
    })
  })

  it('Should contain a header, stat list, and text', () => {
    cy.get('header').should('contain', 'Starters and Saviors');
    cy.get('.stat-list').should('contain', 'STR');
    cy.get('.homepage-right').should('contain', "Welcome to Starters and Saviors!")
  })
  
  it('Should navigate to a new page when a stat is clicked', () => {
    cy.get('.stat').last().click()
    .url('/ability-scores/cha')
    .get('h2').should('contain', "Charisma")
  })

  it('Should navigate to a new page when the search bar is used to find a stat', () => {
    cy.get('input[name="search-bar"]').type('charisma').get('button').click()
    .get('h2').should('contain', "Charisma")
  })

  it('Should navigate to a new page when the search bar is used to find a skill', () => {
    cy.get('input[name="search-bar"]').type('deception').get('button').click()
    .get('h2').should('contain', "Deception")
  })

  it('Should show an error when there is no page for the inputted value', () => {
    cy.intercept("GET", "https://www.dnd5eapi.co/api/"), {
      statusCode: 404
    }

    cy.get('input[name="search-bar"]').type('nonsense').get('button').click()
    .get('.error-page').should('contain', 'Could not find results, please try again.')
  })
})