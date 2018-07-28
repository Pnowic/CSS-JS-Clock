document.addEventListener("DOMContentLoaded", function(){

    const secondHand = document.querySelector('.second-hand'),
        minHand = document.querySelector('.min-hand'),
        hourHand = document.querySelector('.hour-hand'),
        allHands = document.querySelectorAll('.hand');


    const allTimezones = ['Your local time', ...moment.tz.names()];
    const timezonesSelect = $('.timezones');

    allTimezones.forEach((timezone, key) => {

        timezonesSelect.append($('<option>')
            .attr({key : key,
                value : timezone
            })
            .text(timezone));
    });

    let currentTimezone =  $('option:selected').val();

    timezonesSelect.change(function () {
        currentTimezone = $('option:selected').val();
    });

    function setDate (){

        const now = moment();

        let seconds = now.format('ss');
        currentTimezone === 'Your local time' ? seconds = now.format('ss') : now.tz(`${currentTimezone}`).format('ss');
        const secondsDeg = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDeg}deg)`;

        let minutes = now.format('mm');
        currentTimezone === 'Your local time' ? minutes = now.format('mm') : now.tz(`${currentTimezone}`).format('mm');
        const minutesDeg = ((minutes / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minutesDeg}deg)`;

        let hours = now.format('HH');
        currentTimezone === 'Your local time' ? hours = now.format('HH') : now.tz(`${currentTimezone}`).format('HH');
        const hoursDeg = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDeg}deg)`;

        const ampm = $('.ampm');

        hours >= 12 ? ampm.text('PM') : ampm.text('AM');

        const date = $('.date');

        currentTimezone === 'Your local time' ? date.text(now.format('Do MMMM YYYY')) : date.text(now.tz(`${currentTimezone}`).format('Do MMMM YYYY'));


        secondsDeg === 90 ? allHands.forEach (hand => hand.style.transition = 'none') : allHands.forEach(hand => hand.style.transition = '')


    }

    setInterval(setDate, 1000);

    setDate();

});