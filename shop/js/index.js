function actionTimer(end) {
    let delta = Math.floor((Date.parse(end) - Date.now()) / 1000);
    if (delta > 0) {
        let seconds = delta % 60;
        delta = Math.floor(delta / 60);
        let minutes = delta % 60;
        delta = Math.floor(delta / 60);
        let hours = delta % 24;
        delta = Math.floor(delta / 24);
        $('.actiontimer').html("<b>" + delta + "</b>" + grammatics(delta, 'день', 'дня', 'дней') + "<b>" + hours + "</b>" + grammatics(hours, 'час', 'часа', 'часов') + "<b>" + addZero(minutes) + "</b>" + grammatics(minutes, 'минута', 'минуты', 'минут') + "<b>" + addZero(seconds) + "</b><span>" + grammatics(seconds, 'секунда', 'секунды', 'секунд') + "</span>");
    } else {
        $('.actiontimer').html("<b>0</b>дней<b>0</b>часов<b>00</b>минут<b>00</b><span>секунд</span>");
        /*    $('.action').remove();*/
    }
    /* document.querySelector('.actiontimer').innerHTML = `<b>${delta}</b>${grammatics(delta, 'день', 'дня', 'дней')}<b>${hours}</b>${grammatics(hours, 'час', 'часа', 'часов')}<b>${addZero(minutes)}</b>${grammatics(minutes, 'минута', 'минуты', 'минут')}<b>${addZero(seconds)}</b><span>${grammatics(seconds, 'секунда', 'секунды', 'секунд')}</span>`;
     document.querySelector('.actiontimer').innerHTML = "<b>" + delta + "</b>" + grammatics(delta, 'день', 'дня', 'дней') + "<b>" + hours + "</b>" + grammatics(hours, 'час', 'часа', 'часов') + "<b>" + addZero(minutes) + "</b>" + grammatics(minutes, 'минута', 'минуты', 'минут') + "<b>" + addZero(seconds) + "</b><span>" + grammatics(seconds, 'секунда', 'секунды', 'секунд') + "</span>";
 */
}
