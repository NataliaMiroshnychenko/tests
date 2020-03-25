import { Selector } from 'testcafe';

fixture `buy ticket`
    .page `https://booking.uz.gov.ua/ru/`;

test('New Test 1', async t => {
    await t
        .click(Selector('span').withText('Харьков'))
        .click(Selector('[name="date-hover"]'))
        .click(Selector('.ui-calendar-month-table').find('a').withText('16'))
        .click(Selector('button').withText('Поиск поездов на 16.04.2020'))
});