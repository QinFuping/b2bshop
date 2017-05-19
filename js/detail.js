$(document).ready(function(){
    var navHere=$('#nav').offset().top;
    var navHeight=$('#nav').height();
    $(window).scroll(function(){
        if($(window).scrollTop()>=navHere){
            $('#nav').addClass('fixed navStop');
            $('#content').css({paddingTop:navHeight+'px'});
        }else{
            $('#nav').removeClass('fixed navStop');
            $('#content').css({paddingTop:'0'});
        }
    });
    //quantity
    $('#productMinus').click(function(){
        var num=$('#quantity').val();
        num--;
        if(num<0){
            num=0;
        }
        $('#quantity').val(num);
    });
    $('#productPlus').click(function(){
        var num=$('#quantity').val();
        num++;
        $('#quantity').val(num);
    });
    //grid of list
    $('.grid-btn-eye').hover(function(){
        $('.grid-btn-view').addClass('grid-btn-view2');
    },function(){
        $('.grid-btn-view').removeClass('grid-btn-view2');
    });
    $('.grid-item').hover(function(){
        this.getElementsByClassName('grid-btn')[0].className='grid-btn grid-btn2';
        this.getElementsByClassName('grid-text-wrapper')[0].className='grid-text-wrapper grid-text-wrapper2';
        this.getElementsByClassName('gridImage')[0].className='gridImage scaleImage';
    },function(){
        this.getElementsByClassName('grid-btn')[0].className='grid-btn';
        this.getElementsByClassName('grid-text-wrapper')[0].className='grid-text-wrapper';
        this.getElementsByClassName('gridImage')[0].className='gridImage';
    });
    //form of contact
    var formFlag=true;
    $('.contact-title').click(function(){
        if(formFlag) {
            $('.contact-content').addClass('contact-content2');
            $('.contact').css('boxShadow','0 0 6px rgba(0,0,0,.6)');
            $('.contact-title-shut').css('display', 'block');
            $('.contact-title-arrow').css('backgroundPositionY', '-14px');
            formFlag=false;
        }else{
            $('.contact-content').removeClass('contact-content2');
            $('.contact').css('boxShadow','0 0 6px rgba(0,0,0,0)');
            $('.contact-title-arrow').css('backgroundPositionY','0px');
            $('.contact-title-shut').css('display','none');
            formFlag=true;
        }
    });
});
