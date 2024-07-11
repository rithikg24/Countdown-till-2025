const targetDate = new Date('2025-01-01T00:00:00');

function updateCountdown(){
    const currDate = new Date();

    const timeDiff = targetDate-currDate;

    var days=Math.floor(timeDiff/(1000*60*60*24));
    var hours=Math.floor(timeDiff%((1000*60*60*24)/(1000*60*60)));
    var minutes=Math.floor(timeDiff%((1000*60*60*24)/(1000*60)));
    var seconds=Math.floor(timeDiff%((1000*60*60*24)/(1000)));

    var cntdwn = document.querySelector('#countdown');
    cntdwn.textContent = days+'d '+hours+'h '+minutes+'m '+seconds+'s \ntill 2025.';

    setTimeout(updateCountdown,1000);

}

updateCountdown();