describe("Cypress tests", () => {
    // it("Successfully changed information about learning organizations", () => {
    //     cy.fixture("example").then((data) => {
    //         cy.visit(data.login_url)
    //         cy.log("Вводим логин")
    //         cy.get('.form-input--text').type("ADARNUL")
    //         cy.log("Вводим пароль")
    //         cy.get('.form-input--password').type("Biba123!")
    //         cy.log("Нажимаем на кнопку Войти")
    //         cy.get(':nth-child(3) > .button').click()
    //         cy.get(':nth-child(3) > .menu-item__item-name')
    //             .click()

    //         cy.wait(1000)

    //         cy.get(".shared-list-item__title > span")
    //             .contains("Заявка на создание организации PivoQWE1 по адресу PivoQWE1")
    //             .parents(".shared-list-item")
    //             .within(() => {
    //                 cy.get(".button__background-color-light-blue")
    //                     .click()
    //             })

    //         cy.wait(500)

    //         cy.get('.desktop-modal__content > .create-company-form > :nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .clear()
    //             .type("PivoQWE")

    //         cy.get('.desktop-modal__content > .create-company-form > :nth-child(1) > :nth-child(2) > .form-control--medium > .form-input--text')
    //             .clear()
    //             .type("PivoQWE")

    //         cy.get('.desktop-modal__content > .create-company-form > :nth-child(2) > :nth-child(1) > .form-control > .form-area')
    //             .clear()
    //             .type("PivoQWE")

    //         cy.log("Нажимаем на кнопку Добавить")
    //         cy.get('.desktop-modal__content > .create-company-form > .create-company-form__description-block > .button')
    //             .click()

    //         cy.wait(1000)

    //         cy.get(".shared-list-item__title > span")
    //             .and("contain", "Заявка на создание организации PivoQWE по адресу PivoQWE")
    //     })
    // })

    it.only("Failed changed information about learning organizations", () => {
        cy.fixture("example").then((data) => {
            cy.visit(data.login_url)
            cy.log("Вводим логин")
            cy.get('.form-input--text').type("ADARNUL")
            cy.log("Вводим пароль")
            cy.get('.form-input--password').type("Biba123!")
            cy.log("Нажимаем на кнопку Войти")
            cy.get(':nth-child(3) > .button').click()

            cy.log("Переходим во вкладку Заявки")
            cy.get(':nth-child(3) > .menu-item__item-name')
                .click()

            cy.log("Ждем пока загрузиться страница")
            cy.wait(1000)

            cy.log("Находим один элемент зная уникальный текст")
            cy.get(".shared-list-item__title > span")
                .contains("Заявка на создание организации PivoQWE по адресу PivoQWE")
                .parents(".shared-list-item")
                .within(() => {
                    cy.get(".button__background-color-light-blue")
                        .click()
                })

            cy.wait(500)

            cy.log("Очищаем поля, чтобы они стали невалидными")
            cy.get('.desktop-modal__content > .create-company-form > :nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
                .clear()

            cy.get('.desktop-modal__content > .create-company-form > :nth-child(1) > :nth-child(2) > .form-control--medium > .form-input--text')
                .clear()

            cy.get('.desktop-modal__content > .create-company-form > :nth-child(2) > :nth-child(1) > .form-control > .form-area')
                .clear()

            cy.get(':nth-child(1) > :nth-child(1) > .form-error > span')
                .should("contain", "Введите корректное значение")

            cy.get(':nth-child(2) > .form-error > span')
                .should("contain", "Введите корректное значение")

            cy.get(':nth-child(2) > :nth-child(1) > .form-error > span')
                .should("contain", "Введите корректное значение")

            cy.get('.desktop-modal__content > .create-company-form > .create-company-form__description-block')
                .find(".button.button__background-color-light-blue.button__size-small.button__color-white")
                .should("have.attr", "disabled")
        })
    })
})
