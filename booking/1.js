import { Selector } from 'testcafe';

fixture `buy ticket`
    .page `https://booking.uz.gov.ua/ru/`;

test('New Test 1', async t => {
    await t
        .click(Selector('span').withText('Харьков'))
        .click(Selector('[name="date-hover"]'))
        .click(Selector('.ui-calendar-month-table').find('a').withText('16'))
        .click(Selector('button').withText('Поиск поездов на 16.04.2020'))
        .typeText(Selector('[name="captcha"]'), '')
        .click(Selector('button').withText('Отправить'))
        .click(Selector('div').withText('Сидячий второго класса').nth(2).find('.g-button[data-wagon-id="С2"]'))
        .click(Selector('a').withText('44').nth(2).find('.num'))
        .click(Selector('span').withText('9'))
        .click(Selector('.headrest.headrest-right.place.fr[title="Место: 4 свободно"]'))
        .click(Selector('.headrest.headrest-right.place.fr[title="Место: 3 свободно"]'))
        .click(Selector('.headrest.headrest-right.place.fr.cr[title="Место: 4 свободно"]'))
        .click(Selector('.next-button').find('.g-button'))
        .typeText(Selector('[name="lastname"]'), 'Малышева')
        .typeText(Selector('[name="firstname"]'), 'Марина')
        .click(Selector('div').withText('Общая стоимость:').nth(8).find('.g-button'))
        .click(Selector('.pay').find('input'));
});