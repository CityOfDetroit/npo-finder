describe('Test app load', () => {
    it('successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL
      cy.contains('All NPOs')
    })

    it('test filter by address', () => {
      cy.visit('/') // change URL to match your dev URL
      cy.contains('All NPOs')
      cy.get('#geocoder-input').type('1104 military{enter}')
      cy.wait(1000)
      cy.get('.npo-content').contains('Alfonso Ruiz')
      cy.get('.npo-content').should('not.have', 'Nicole Sumpter')
    })

    it('test clear filters', () => {
      cy.visit('/') // change URL to match your dev URL
      cy.contains('All NPOs')
      cy.get('#geocoder-input').type('1104 military{enter}')
      cy.wait(1000)
      cy.get('.npo-content').contains('Alfonso Ruiz')
      cy.get('.npo-content').should('not.have', 'Nicole Sumpter')
      cy.get('#clear-services-btn').click()
      cy.get('.npo-content').contains('Nicole Sumpter')
    })
})