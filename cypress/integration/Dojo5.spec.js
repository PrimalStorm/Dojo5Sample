// Dojo5.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

//import React from 'react';

describe ('Dojo5 test', () => {
  it('Dojo5 example test', () => {
    // open root - localhost:3000 must be running the React app already for test to work
    cy.visit('/')

    // check logo is visible and loads
    cy.get('[alt="dojo logo"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.contains("Access Charts Through Menu").should('exist')
    
    // click through to Charts page
    cy.contains("Charts").should('exist')
    cy.contains("Charts").click({force: true})
    
    // click through to Line Chart and check elements
    cy.contains("Line Chart").should('exist')
    cy.contains("Line Chart").click()
    cy.contains("Simple Line Chart").should('exist')
    cy.contains("This is an example of a simple line chart").should('exist')
    
    // check chart type pre toggle
    cy.get(".recharts-responsive-container").should('exist')
    cy.get(".recharts-line").should('exist')
    cy.get(".xAxis").should('exist')
    cy.get(".xAxis").invoke('text').should('eq', 'Page APage BPage CPage DPage EPage FPage G')
    cy.get(".yAxis").should('exist')
    cy.get(".yAxis").invoke('text').should('eq', '025005000750010000')
    
    // toggle
    cy.contains("Toggle Axis").should('exist')
    cy.contains("Toggle Axis").click()
    
    // check data post toggle
    cy.get(".recharts-responsive-container").should('exist')
    cy.get(".recharts-line").should('exist')
    cy.get(".xAxis").should('exist')
    cy.get(".xAxis").invoke('text').should('eq', 'Page APage BPage CPage DPage EPage FPage G')
    cy.get(".yAxis").should('exist')
    cy.get(".yAxis").invoke('text').should('eq', '06000120001800024000')
    
    // retoggle
    cy.contains("Toggle Axis").should('exist')
    cy.contains("Toggle Axis").click()
    
    // check data post retoggle
    cy.get(".recharts-responsive-container").should('exist')
    cy.get(".recharts-line").should('exist')
    cy.get(".xAxis").should('exist')
    cy.get(".xAxis").invoke('text').should('eq', 'Page APage BPage CPage DPage EPage FPage G')
    cy.get(".yAxis").should('exist')
    cy.get(".yAxis").invoke('text').should('eq', '025005000750010000')
    
    // repeat with Bar Chart
    cy.contains("Bar Chart").should('exist')
    cy.contains("Bar Chart").click()
    cy.contains("Simple Bar Chart").should('exist')
    cy.contains("This is an example of a simple bar chart").should('exist')

    // check chart type pre toggle
    cy.get(".recharts-responsive-container").should('exist')
    cy.get(".recharts-bar").should('exist')
    cy.get(".xAxis").should('exist')
    cy.get(".xAxis").invoke('text').should('eq', 'Page APage BPage CPage DPage EPage FPage G')
    cy.get(".yAxis").should('exist')
    cy.get(".yAxis").invoke('text').should('eq', '025005000750010000')
    
    // toggle
    cy.contains("Toggle Axis").should('exist')
    cy.contains("Toggle Axis").click()
    
    // check data post toggle
    cy.get(".recharts-responsive-container").should('exist')
    cy.get(".xAxis").should('exist')
    cy.get(".xAxis").invoke('text').should('eq', 'Page APage BPage CPage DPage EPage FPage G')
    cy.get(".yAxis").should('exist')
    cy.get(".yAxis").invoke('text').should('eq', '06000120001800024000')
    
    // retoggle
    cy.contains("Toggle Axis").should('exist')
    cy.contains("Toggle Axis").click()
    
    // check data post retoggle
    cy.get(".recharts-responsive-container").should('exist')
    cy.get(".xAxis").should('exist')
    cy.get(".xAxis").invoke('text').should('eq', 'Page APage BPage CPage DPage EPage FPage G')
    cy.get(".yAxis").should('exist')
    cy.get(".yAxis").invoke('text').should('eq', '025005000750010000')
    
    // click through to About page
    cy.contains("About").should('exist')
    cy.contains("About").click({force: true})
    
    // click through to About App page and check elements
    cy.contains("About App").should('exist')
    cy.contains("About App").click()
    cy.contains("About the App").should('exist')
    cy.contains("This App is a sample app for Dojo5").should('exist')
    cy.contains("Build a small React site that demonstrates integration of a charting library. The data can be fake, but should allow for the user to interact with it in some way.").should('exist')
    
    // click through to About Author page and check elements
    cy.contains("About Author").should('exist')
    cy.contains("About Author").click()
    cy.contains("About the Author").should('exist')
    cy.contains("This app was developed by Miles Bradley").should('exist')
    cy.get('[alt="Profile Head Shot"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    
      // click back to Home page and recheck elements
    cy.contains("Home").should('exist')
    cy.contains("Home").click({force: true})
    
    // check logo is visible and loads
    cy.get('[alt="dojo logo"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.contains("Access Charts Through Menu").should('exist')
  });
});