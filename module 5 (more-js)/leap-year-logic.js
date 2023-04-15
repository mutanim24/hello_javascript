function isLeapyear(year){
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                console.log("The year is a leap year (it has 366 days)")
            }
            else{
                console.log("The year is not a leap year (it has 365 days)")
            }
        }
        else{
            console.log("The year is a leap year (it has 366 days).")
        }
    }
    else{
        console.log("The year is not a leap year (it has 365 days).")
    }
}

isLeapyear(1800);