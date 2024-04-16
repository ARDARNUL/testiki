describe("Cypress tests", () => {
    it("Successfully adding a learning organization role", () => {
        cy.fixture("example").then((data) => {
            cy.visit(data.login_url)

            cy.log("Вводим логин")
            cy.get('.form-input--text').type("ADARNUL")
            cy.log("Вводим пароль")
            cy.get('.form-input--password').type("Biba123!")
            cy.log("Нажимаем на кнопку Войти")
            cy.get(':nth-child(3) > .button').click()

            cy.log("Ждем ответа")
            cy.wait(600)

            cy.log("Сравниваем ссылки, чтобы убедиться в успешной авторизации")
            cy.url().should("include", "/account/main")

            cy.log("Кликаем на кнопку Выбрать роль")
            cy.get('.page-nav__role-block > .button')
                .click()

            cy.wait(500)

            cy.log("В открывшемся окне выбираем Образовательная орагизация организация")
            cy.get('.select-role-form > :nth-child(2)')
                .click()

            cy.wait(500)

            cy.log("Выбираем Создание нового личного кабинета ОУ")
            cy.get('.variants-company > :nth-child(2)')
                .click()

            cy.log("Вводим название учебной организации")
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text')
                .type("fsdfds")

            cy.log("Вводим адрес учебной организации")
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
                .type("fsdfds")

            cy.log("Вводим описание учебной организации")
            cy.get('.form-area')
                .type("fsdfds")

            cy.log("Нажимаем на кнопку Добавить")
            cy.get('.create-company-form__description-block')
                .find(".button.button__background-color-light-blue.button__size-small.button__color-white")
                .click()

            cy.wait(2000)

            cy.log("Переходим в раздел Заявки")
            cy.get(':nth-child(3) > .menu-item__item-name')
                .click()

            cy.log("Ждем загрузку всех заявок")
            cy.wait(2000)

            cy.log("Проверяем, что создалась новая заявка")
            cy.get('.shared-list-item__title')
                .children()
                .should("contain", "Заявка на создание организации fsdfds по адресу fsdfds")

        })
    })

    // it.only("Failed adding a learning organization role", () => {
    //     cy.fixture("example").then((data) => {
    //         cy.visit(data.login_url)

    //         cy.log("Вводим логин")
    //         cy.get('.form-input--text').type("ADARNUL")
    //         cy.log("Вводим пароль")
    //         cy.get('.form-input--password').type("Biba123!")
    //         cy.log("Нажимаем на кнопку Войти")
    //         cy.get(':nth-child(3) > .button').click()

    //         cy.log("Ждем ответа")
    //         cy.wait(600)

    //         cy.log("Сравниваем ссылки, чтобы убедиться в успешной авторизации")
    //         cy.url().should("include", "/account/main")

    //         cy.log("Кликаем на кнопку Выбрать роль")
    //         cy.get('.page-nav__role-block > .button')
    //             .click()

    //         cy.wait(500)

    //         cy.log("В открывшемся окне выбираем Образовательная орагизация организация")
    //         cy.get('.select-role-form > :nth-child(2)')
    //             .click()

    //         cy.wait(500)

    //         cy.log("Выбираем Создание нового личного кабинета ОУ")
    //         cy.get('.variants-company > :nth-child(2)')
    //             .click()

    //         cy.log("Вводим невалидное название учебной организации")
    //         cy.get(':nth-child(1) > .form-control--medium > .form-input--text')
    //             .type("fsdfds")
    //             .clear()

    //         cy.get(':nth-child(1) > :nth-child(1) > .form-error > span')
    //             .should("contain", "Введите корректное значение")

    //         cy.log("Вводим невалидный адрес учебной организации")
    //         cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
    //             .type("fsdfds")
    //             .clear()

    //         cy.get(':nth-child(2) > .form-error > span')
    //             .should("contain", "Введите корректное значение")

    //         cy.log("Вводим невалидное описание учебной организации")
    //         cy.get('.form-area')
    //             .type("fsdfds")
    //             .clear()

    //         cy.get(':nth-child(2) > :nth-child(1) > .form-error > span')
    //             .should("contain", "Введите корректное значение")

    //         cy.log("Нажимаем на кнопку Добавить")
    //         cy.get('.create-company-form__description-block')
    //             .find(".button.button__background-color-light-blue.button__size-small.button__color-white")
    //             .should("have.attr", "disabled")
    //     })
    // })
})