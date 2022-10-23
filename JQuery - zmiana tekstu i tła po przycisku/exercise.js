$('.interface').on('click', function () {
    // console.log('dzila');
    // console.log(this);
    // console.log($(this).attr('class'))
    if ($(this).hasClass('orange')) {
        console.log('prawda w orange');
        $('body').attr('class','orange')
    }
    if ($(this).hasClass('green')) {
        console.log('prawda w green');
        $('body').attr('class','green')
    }
    if ($(this).hasClass('increase')) {
        console.log('prawda w plus')
        $('.text').animate({
            'font-size':'+=5px'
        }, 500)
    }
    if ($(this).hasClass('move')) {
        console.log('prawda w strzalce')
        $('.text').animate({
            'left' : '+=30px',
            'letter-spacing': '+=5'
        })
    }
})

        // $('body').toggleClass('orange')
        // $('body').css('background-color', 'orange');
    // if (this.classList.contains('green')) {
    //     console.log('prawda w green')
    // }
    // if ($(this).hasClass('green')) {
    //     console.log('prawda w green');
    //     $('body').css({
    //         'background-color': 'green'
