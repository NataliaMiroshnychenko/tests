import { Selector } from 'testcafe';

fixture `signup`
    .page `https://booking.uz.gov.ua/ru/`;

test('New Test', async t => {
    await t
        .click(Selector('a').withText('Авторизироваться'))
        .click(Selector('a').withText('Зарегистрироваться'))
        .typeText(Selector('#registration').find('[name="email"]'), 'natalexmir@gmail.com')
        .pressKey('tab')
        .typeText(Selector('[name="passwd"]'), 'zimaletto11')
        .click(Selector('.fld[name="last_name"]'))
        .pressKey('alt+shift')
        .pressKey('alt+shift')
        .pressKey('shift+alt')
        .typeText(Selector('.fld[name="last_name"]'), 'Мирошниченко')
        .pressKey('tab')
        .typeText(Selector('.fld[name="first_name"]'), 'Наталья')
        .typeText(Selector('[name="phone"][data-placeholder="___ (__) ___ __ __"][data-regexp="\\\\d"].empty'), '380972807873')
        .click(Selector('[name="agree"]'))
        .click(Selector('[name="bonus_agree"]'))
        .click(Selector('button').withText('Зарегистрироваться'));
});