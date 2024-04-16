describe("Cypress tests", () => {
    it("Successfully changed password", () => {
        cy.fixture("example").then((data) => {
            cy.visit(data.login_url)

            cy.log("Вводим логин")
            cy.get('.form-input--text').type("ADARNUL")
            cy.log("Вводим пароль")
            cy.get('.form-input--password').type("QWEasd123!")
            cy.log("Нажимаем на кнопку Войти")
            cy.get(':nth-child(3) > .button').click()

            cy.log("Ждем ответа")
            cy.wait(600)

            cy.log("Сравниваем ссылки, чтобы убедиться в успешной авторизации")
            cy.url().should("include", "/account/main")

            cy.get(':nth-child(1) > .form-input--password')
                .type("Biba123!")

            cy.get(':nth-child(2) > .form-input--password')
                .type("Biba123!")

            cy.get('.form__buttons > div > .button')
                .click()

            cy.wait(1000)

            cy.get('.form__buttons > div > p')
                .should("contain", "Пароль успешно изменён!")
        })
    })

    // it.only("Failed changed password", () => {
    //     cy.fixture("example").then((data) => {
    //         cy.visit(data.login_url)

    //         cy.log("Вводим логин")
    //         cy.get('.form-input--text').type("ADARNUL")
    //         cy.log("Вводим пароль")
    //         cy.get('.form-input--password').type("QWEasd123!")
    //         cy.log("Нажимаем на кнопку Войти")
    //         cy.get(':nth-child(3) > .button').click()

    //         cy.log("Ждем ответа")
    //         cy.wait(600)

    //         cy.log("Сравниваем ссылки, чтобы убедиться в успешной авторизации")
    //         cy.url().should("include", "/account/main")

    //         cy.get(':nth-child(1) > .form-input--password')
    //             .type("Biba12331!")

    //         cy.get(':nth-child(2) > .form-input--password')
    //             .type("QWEasd123!")

    //         cy.get('.form-error > span')
    //             .should("contain", "Пароли не совпадают")
    //     })
    // })
})