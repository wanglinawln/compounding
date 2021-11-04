function compounding(){
    return {
        'income':function (capital,rate,time){
            return capital*Math.pow((1+rate/100), time);
        }
    };
}

function validate(filed){
    //get DOM error message
    var $data=$(filed),
        $msg=$(filed+'-validation-message');
    //validate null
    if($data.val()===''){
        $msg.html('不能为空');
        $data.select();
        return false;
    }
    
    //validate number
    if(!(/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?/.test($data.val()))){
        $msg.html('必须是数值');
        $data.select();
        return false;
    }
    
    //validate >0
    if($data.val()<0){
        $msg.html('必须大于零');
        $data.select();
        return false;
    }
    $msg.html('');
    return true;

}

function isLegalKey(e,key, con, pos) {
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(key)){
        e.preventDefault();
        return ;
    }
    if(key==='e'){
        if(pos===0||con.indexOf('e')!==-1||con.indexOf('E')!==-1){
            e.preventDefault();
            return;
        }
        if(pos===1&&con.substring(0,1)==='-'){
            e.preventDefault();
            return;
        }
    }
    if(key==='E'){
        if(pos===0||con.indexOf('e')!==-1||con.indexOf('E')!==-1){
            e.preventDefault();
            return;
        }
        if(pos===1&&con.substring(0,1)==='-'){
            e.preventDefault();
            return;
        }
    }
    if(key==='.'){
        if(pos===0||con.indexOf('.')!==-1){
            e.preventDefault();
            return;
        }
        if(pos===1&&con.substring(0,1)==='-'){
            e.preventDefault();
            return;
        }
    }
    

    return true;
}