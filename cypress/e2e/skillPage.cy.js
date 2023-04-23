describe('Skill Page Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/skills/deception')
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
    cy.get('h2').should('contain', 'Deception')
  })

  it('Should navigate to an ability score when the link is clicked', () => {
    cy.get('a > p').click().url().should('contain', '/ability-scores/cha')
    .get('h2').should('contain', 'Charisma')
  })
})