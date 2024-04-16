describe("Cypress tests", () => {
    // it("Successfully updated job information", () => {
    //     cy.fixture("example").then((data) => {
    //         cy.viewport(1920, 1080);

    //         cy.visit(data.login_url)
    //         cy.log("Вводим логин")
    //         cy.get('.form-input--text').type("testerEmployer")
    //         cy.log("Вводим пароль")
    //         cy.get('.form-input--password').type("Password1")
    //         cy.log("Нажимаем на кнопку Войти")
    //         cy.get(':nth-child(3) > .button').click()

    //         cy.log("Переходим во вкладку Вакансии")
    //         cy.get(':nth-child(7) > .menu-item__item-name')
    //             .click()

    //         cy.log("Ждем пока загрузится страница")
    //         cy.wait(1000)

    //         cy.get('.vacancy-item__info-wrapper > .vacancy-header > .vacancy-header__name')
    //             .filter((_, element) => Cypress.$(element).text().trim() === "Varshik")
    //             .parent(".vacancy-header")
    //             .parent(".vacancy-item__info-wrapper")
    //             .then((vacancy) => {
    //                 vacancy.find(".button.button__background-color-gray.button__size-small.button__color-black")
    //                     .click()
    //             })

    //         cy.wait(500)

    //         cy.log("Меняем Название вакансии")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > input')
    //             .clear()
    //             .type("VarshikM...")

    //         cy.log("Меняем Требования")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
    //             .clear()
    //             .type("VarshikM...")

    //         cy.log("Меняем Обязанности")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
    //             .clear()
    //             .type("VarshikM...")

    //         cy.log("Кликаем на Создать вакансию")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .buttons > .button')
    //             .click()

    //         cy.log("Ждем перезагрузки списка вакансий")
    //         cy.wait(1000)

    //         cy.log("Проверяем, что вакансия успешно обновлена по уникальному имени")
    //         cy.get('.vacancy-item__info-wrapper > .vacancy-header > .vacancy-header__name')
    //             .filter((_, element) => Cypress.$(element).text().trim() === "VarshikM...")
    //             .should("have.length", 1)
    //             .then(() => {
    //                 cy.log("Тест успешно пройден")
    //             })
    //     })
    // })

    it.only("Failed updated job information", () => {
        cy.fixture("example").then((data) => {
            cy.viewport(1920, 1080);

            cy.visit(data.login_url)
            cy.log("Вводим логин")
            cy.get('.form-input--text').type("testerEmployer")
            cy.log("Вводим пароль")
            cy.get('.form-input--password').type("Password1")
            cy.log("Нажимаем на кнопку Войти")
            cy.get(':nth-child(3) > .button').click()

            cy.log("Переходим во вкладку Вакансии")
            cy.get(':nth-child(7) > .menu-item__item-name')
                .click()

            cy.log("Ждем пока загрузится страница")
            cy.wait(1000)

            cy.get('.vacancy-item__info-wrapper > .vacancy-header > .vacancy-header__name')
                .filter((_, element) => Cypress.$(element).text().trim() === "VarshikM...")
                .parent(".vacancy-header")
                .parent(".vacancy-item__info-wrapper")
                .then((vacancy) => {
                    vacancy.find(".button.button__background-color-gray.button__size-small.button__color-black")
                        .click()
                })

            cy.wait(500)

            cy.log("Вводим невалидное Название вакансии")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > input')
                .clear()

            cy.get(':nth-child(1) > .form-error > span')
                .should("contain", "Обязательное поле, максимум 255 символов")

            cy.log("Вводим невалидные Требования")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
                .clear()

            cy.get(':nth-child(5) > .form-error > span')
                .should("contain", "Обязательное поле, максимум 1000 символов")

            cy.log("Вводим невалидные Обязанности")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
                .clear()

            cy.get(':nth-child(6) > .form-error > span')
                .should("contain", "Обязательное поле, максимум 1000 символов")

            cy.log("Проверяем, что кнопка не кликабельная")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .buttons > .button')
                .should("have.attr", "disabled")
        })
    })
})