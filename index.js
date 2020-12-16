$(document).ready(function() {
    let theme = localStorage.getItem('theme');

    $('.tabButton').on('click', function(){
        $('.tab').toggleClass('active', false);
        $('#' + $(this).val() + '').toggleClass('active');
    });

    if (theme === null){
        setTheme('light');
    }else{
        setTheme(theme);
    }

    $('.theme-dot').on('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    })

    function setTheme(mode){
        if(mode === 'light') {
            $('#theme-style').attr('href', 'Style.css');
        } else {
            $('#theme-style').attr('href', mode + '.css');
        }

        localStorage.setItem('theme', mode);
    }

    $('.backToTop').hide();

    $(window).on('scroll',()=>{
        if($(document).scrollTop() > 50){
            $('.backToTop').show()
        }else{
            $('.backToTop').hide();
        }
    });

    $('.backToTop').on('click',()=>{
        $(document).scrollTop(0);
        $('this').hide();
    });
});
