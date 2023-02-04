$(document).ready(function () {

    var xicon = `<img src="images/x.png" width="60px" />`;
    var oicon = `<img src="images/o.png" width="60px" />`;


    var palyer = 1;
    var iswin = false;
    var tclicks = 0;

    resetgame = () => {
        palyer = 1;
        iswin = false;
        tclicks = 0;
        $('button').html('');
        $('button').val('');
        $('button').removeAttr('disabled');
        $('.winnerbord').css('display', 'none');
    }

    changepalyer = () => {
        palyer == 1 ? palyer = 0 : palyer = 1;
    }

    getturn = () => {
        return palyer == 1 ? 'x' : 'o';
    }

    setboxclick = (element) => {
        tclicks++;
        $(element).html(palyer == 1 ? xicon : oicon);
        $(element).val(getturn());
        $(element).attr('disabled', 'disabled');

        if (palyer == 1) {
            $('#showturn').attr('src', 'images/o.png');
        } else {
            $('#showturn').attr('src', 'images/x.png');

        }

        chackwin();
        if (tclicks == 9 && iswin == false) {
            $('#winnername').text('Match Is Drow');
            $('.winnerbord').css('display', 'flex');
        }
        changepalyer();

    }


    hanedalwin = (winer) => {
        $('button').attr('disabled', 'disabled');
        $('#winnername').text(winer + ' Is Winner');
        $('.winnerbord').css('display', 'flex');
        iswin = true;
    }


    chackwin = () => {
        var b0 = $('#box0').val();
        var b1 = $('#box1').val();
        var b2 = $('#box2').val();
        var b3 = $('#box3').val();
        var b4 = $('#box4').val();
        var b5 = $('#box5').val();
        var b6 = $('#box6').val();
        var b7 = $('#box7').val();
        var b8 = $('#box8').val();

        if (b0 == getturn() && b1 == getturn() && b2 == getturn()) {
            hanedalwin(getturn());
        }

        if (b3 == getturn() && b4 == getturn() && b5 == getturn()) {
            hanedalwin(getturn());
        }
        if (b6 == getturn() && b7 == getturn() && b8 == getturn()) {
            hanedalwin(getturn());
        }
        if (b0 == getturn() && b3 == getturn() && b6 == getturn()) {
            hanedalwin(getturn());
        }
        if (b1 == getturn() && b4 == getturn() && b7 == getturn()) {
            hanedalwin(getturn());
        }
        if (b2 == getturn() && b5 == getturn() && b8 == getturn()) {
            hanedalwin(getturn());
        }
        if (b1 == getturn() && b4 == getturn() && b7 == getturn()) {
            hanedalwin(getturn());
        }
        if (b0 == getturn() && b4 == getturn() && b8 == getturn()) {
            hanedalwin(getturn());
        }
        if (b2 == getturn() && b4 == getturn() && b6 == getturn()) {
            hanedalwin(getturn());
        }

    }


});