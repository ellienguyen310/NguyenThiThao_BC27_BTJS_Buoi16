function showResult(){
    var flag = false
    var number = document.getElementById('number').value
    if (number < 2){
        flag = true;
        document.getElementById('show-result').innerHTML = "Số " + number + " không phải là số nguyên tố"
    }
    else{
        var i = 2
        while ( i < number){
            if ( number % i == 0){
                flag = true;
                document.getElementById('show-result').innerHTML = "Số " + number + " không phải là số nguyên tố"
                break
            }
            i++
        }
        if (!flag){
            document.getElementById('show-result').innerHTML = "Số " + number + " là số nguyên tố"
    }
}
}
