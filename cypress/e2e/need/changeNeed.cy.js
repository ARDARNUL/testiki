describe("Cypress test", () => {
    // it("Successfully added need", () => {
    //     cy.viewport(1920, 1080);

    //     cy.fixture("example").then((data) => {
    //         cy.visit(data.login_url)

    //                 cy.log("Вводим логин")
    //                 cy.get('.form-input--text').type("testerEmployer")
    //                 cy.log("Вводим пароль")
    //                 cy.get('.form-input--password').type("Password1")
    //                 cy.log("Нажимаем на кнопку Войти")
    //                 cy.get(':nth-child(3) > .button').click()
    //                 cy.log("Переходим во вкладку Потребности")
    //                 cy.get(':nth-child(6) > .menu-item__item-name')
    //                     .click()

    //         cy.log("Переходим во вкладку Потребности")
    //         cy.get(':nth-child(6) > .menu-item__item-name')
    //             .click()

    //         cy.log("Ждем загрузки страницы")
    //         cy.wait(1000)

    //         cy.log("Ищем нужную запись по имени")
    //         cy.get('.need-item__info-wrapper > .need-header > .need-header__name')
    //             .filter((_, element) => Cypress.$(element).text().trim() === "kyrsach")
    //             .parent(".need-header")
    //             .parent(".need-item__info-wrapper")
    //             .then((need) => {
    //                 need.find(".button.button__background-color-gray.button__size-small.button__color-black")
    //                     .click()
    //             })

    //         cy.log("Вводим невалидное значение Название потребности")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
    //             .clear()
    //             .type("practic")

    //         cy.log("Вводим невалидное значение Обязанности")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area')
    //             .clear()
    //             .type("practic")

    //         cy.log("Вводим невалидное значение Требования")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
    //             .clear()
    //             .type("practic")

    //         cy.log("Кликаем на кнопку Добавить")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button')
    //             .click()

    //         cy.log("Ждем перезагрузки списка потребностей")
    //         cy.wait(3000)

    //         if(cy.get('.need-item__info-wrapper > .need-header > .need-header__name').filter((_, element) => Cypress.$(element).text().trim() === "kyrsach")){

    //         cy.log("Ищем нужную запись по имени")
    //         cy.get('.need-item__info-wrapper > .need-header > .need-header__name')
    //             .filter((_, element) => Cypress.$(element).text().trim() === "kyrsach")
    //             .parent(".need-header")
    //             .parent(".need-item__info-wrapper")
    //             .then((need) => {
    //                 need.find(".button.button__background-color-gray.button__size-small.button__color-black")
    //                     .click()
    //             })

    //         cy.log("Вводим невалидное значение Название потребности")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
    //             .clear()
    //             .type("practic")

    //         cy.log("Вводим невалидное значение Обязанности")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area')
    //             .clear()
    //             .type("practic")

    //         cy.log("Вводим невалидное значение Требования")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
    //             .clear()
    //             .type("practic")

    //         cy.log("Кликаем на кнопку Добавить")
    //         cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button')
    //             .click()

    //         cy.log("Ждем перезагрузки списка потребностей")
    //         cy.wait(3000)
    //         }
    //         else{
    //         cy.log("Находим созданную запись по уникальному имени")
    //         cy.get('.need-item__info-wrapper > .need-header > .need-header__name')
    //             .filter((_, element) => Cypress.$(element).text().trim() === "practic")
    //         }
    //     })
    // })

    it.only("Failed added need", () => {
        cy.fixture("example").then((data) => {
            cy.viewport(1920, 1080);

           cy.visit(data.login_url)
            cy.log("Вводим логин")
            cy.get('.form-input--text').type("testerEmployer")
            cy.log("Вводим пароль")
            cy.get('.form-input--password').type("Password1")
            cy.log("Нажимаем на кнопку Войти")
            cy.get(':nth-child(3) > .button').click()
            cy.log("Переходим во вкладку Потребности")
            cy.get(':nth-child(6) > .menu-item__item-name')
                .click()

            cy.log("Переходим во вкладку Потребности")
            cy.get(':nth-child(6) > .menu-item__item-name')
                .click()

            cy.log("Ждем загрузки страницы")
            cy.wait(1000)

            cy.log("")
            cy.get('.need-item__info-wrapper > .need-header > .need-header__name')
                .filter((_, element) => Cypress.$(element).text().trim() === "practic")
                .parent(".need-header")
                .parent(".need-item__info-wrapper")
                .then((vacancy) => {
                    vacancy.find(".button.button__background-color-gray.button__size-small.button__color-black")
                        .click()
                })

            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
                .clear()

            cy.get(':nth-child(1) > .form-error > span')
                .should("contain", "Обязательное поле, максимум 255 символов")

            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area')
                .clear()

            cy.get(':nth-child(3) > .form-error > span')
                .should("contain", "Обязательное поле, максимум 1000 символов")

            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
                .clear()

            cy.get(':nth-child(4) > .form-error > span')
                .should("contain", "Обязательное поле, максимум 1000 символов")

            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons')
                .find(".button.button__background-color-green.button__size-medium.button__color-white.buttons__button")
                .should("have.attr", "disabled")
        })
    })
})