document.addEventListener("DOMContentLoaded", function(){

    const secondHand = document.querySelector('.second-hand'),
        minHand = document.querySelector('.min-hand'),
        hourHand = document.querySelector('.hour-hand'),
        allHands = document.querySelectorAll('.hand');

    function setDate () {

        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDeg = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDeg}deg)`;

        const minutes = now.getMinutes();
        const minutesDeg = ((minutes / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minutesDeg}deg)`;

        const hours = now.getHours();
        const hoursDeg = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDeg}deg)`;

        secondsDeg === 90 ? allHands.forEach (hand => hand.style.transition = 'none') : allHands.forEach(hand => hand.style.transition = '')

    }



    setInterval(setDate, 1000);

    setDate();



    const allTimezones = ['Your local time', ...moment.tz.names()];
    console.log(allTimezones);

    const timezones = $('.timezones');

    allTimezones.forEach((timezone, key) => {

        timezones.append($('<option></option>')
            .attr('key', key)
            .text(timezone));

    });


});