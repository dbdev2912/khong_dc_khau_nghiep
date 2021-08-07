function In(value, array){
    let is_valid = false;
    for(let i = 0; i < array.length; i++){
        if(value == array[i]){
            return true
        }
    }
    return is_valid;
}

const month_with_31_days_long = [1, 3, 5, 7, 8, 10, 12];
const month_with_30_days_long = [4, 6, 9, 11];

let day     = 29,
    month   = 2,
    year    = 2001;

let valid = true;

if( year % 4 === 0 ){
    if( In(month, month_with_31_days_long) ){

        if( day > 31 ){
            valid = false;
        }
    }else{
        if( In(month, month_with_30_days_long) ){
            if( day > 30 ){
                valid = false
            }
        }else{
            if( day > 29 ){
                valid = false;
            }
        }
    }
}else{
    if( In(month, month_with_31_days_long) ){
        if( day > 31 ){
            valid = false;
        }
    }else{
        if( In(month, month_with_30_days_long) ){
            if( day > 30 ){
                valid = false
            }
        }else{
            if( day > 28 ){
                valid = false;
            }
        }
    }
}

if(valid){
    console.log(`Ngày ${day}/${month}/${year} là một ngày hụp lịa`);
}else{
    console.log(`Ngày ${day}/${month}/${year} khum tồn tại`);
}
