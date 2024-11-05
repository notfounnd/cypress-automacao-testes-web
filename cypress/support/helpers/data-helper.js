/// <reference types="cypress" />

const { fakerEN_US: faker } = require('@faker-js/faker')

function generateDataUser () {
  const user = {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email({ provider: 'pgats.juliodelima.com.br' }),
    password: '123456',
    title: faker.helpers.arrayElement(['Mr.', 'Mrs.']),
    birth_day: faker.number.int({ min: 1, max: 25 }).toString(),
    birth_month: faker.date.month(),
    birth_year: faker.number.int({ min: 1989, max: 1999 }).toString(),
    company: faker.company.name(),
    address: faker.location.streetAddress(true),
    country: 'United States',
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobile_number: faker.phone.number(),
    comment: faker.lorem.sentence(),
    cc_number: faker.finance.creditCardNumber(),
    cc_cvc: faker.finance.creditCardCVV(),
    cc_month: '11',
    cc_year: faker.date.future({ years: 2 }).getFullYear()
  }

  return cy.wrap(user)
}

Cypress.Commands.add('generateDataUser', generateDataUser)

function generateDataMessage () {
  const message = {
    name: faker.person.fullName(),
    email: faker.internet.email({ provider: 'pgats.juliodelima.com.br' }),
    subject: faker.lorem.sentence({ min: 3, max: 5 }),
    message: faker.lorem.paragraph()
  }

  return cy.wrap(message)
}

Cypress.Commands.add('generateDataMessage', generateDataMessage)
