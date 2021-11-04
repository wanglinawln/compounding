
$(function(){
    //get dom ele
    var $capital=$('#capital'),
        $rate=$('#rate'),
        $time=$('#time'),
        $btnCal=$('#calculate'),
        $income=$('#income');

    $btnCal.click(function(){
        //È¥µô¸¡µãº¯Êý
        function roundFractional(x, n) {
            return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
        }
        //validate if error return
        if(!validate('#capital')||!validate('#rate')||!validate('#time')) return;
        //get value
        var c=Number($capital.val()),
            r=Number($rate.val());
            t=Number($time.val());

        //calculate
        var com =compounding();
        var i=roundFractional(com.income(c,r,t),2);
        //output
        $income.val(i);

    });

    $capital.focusout(function(){
        if(!validate('#capital')){
            $capital.select();
        }
    });
    $rate.focusout(function(){
        if(!validate('#rate')){
            $rate.select();
        }
    });
    $time.focusout(function(){
        if(!validate('#time')){
            $time.select();
        }
    });
    $capital.keypress(function(e) {
        if(!isLegalKey(e,e.key, e.target.value, e.target.selectionStart)) {
            e.preventDefault();
        }
    });
    $rate.keypress(function(e) {
        if(!isLegalKey(e,e.key, e.target.value, e.target.selectionStart)) {
            e.preventDefault();
        }
    });
    $time.keypress(function(e) {
        if(!isLegalKey(e,e.key, e.target.value, e.target.selectionStart)) {
            e.preventDefault();
        }
    });
});