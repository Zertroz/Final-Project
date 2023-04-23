describe('Stat Page Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/ability-scores/cha')
    cy.intercept("GET", "https://www.dnd5eapi.co/api/ability-scores/cha", {
      statusCode: 200,
      fixture: 'stat'
    })
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/skills/deception', {
      statusCode: 200,
      fixture: 'skill'
    })
  })

  it('Should be able to load the page from the url', () => {
    cy.get('h2').should('contain', "Charisma")
  })

  it('Should be able to navigate to a skill page by clicking a link', () => {
    cy.get('[href="/skills/deception"] > li').should('contain', 'Deception')
    .click().url('/skills/deception')
    .get('h2').should('contain', 'Deception')
  })
})