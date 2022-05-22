// BÀI 1:
function findN(){
/* Khai báo số n và sum */
    var n = 0;
    var sum = 0;
/* Vòng lặp với điều kiện sum <= 10000 -> tăng n lên
cho đến khi sum > 10000 */
    while (sum <= 10000) {
        n++;
        sum += n;
    }
/* Hiển thị */
    document.getElementById("findN").innerHTML = `Số n thỏa mãn điều kiện trên là ${n}`
}
// BÀI 2:
function calcSum(){
/* Khai báo kèm lấy giá trị số x và n; khai báo sum */
    var x = +document.getElementById('x').value;
    var n = +document.getElementById('n').value;
    var sum = 0
/* Vòng lặp với điều kiện i <= n thì sum += x^i (=Math.pow(x,i))
cho đến khi i>n thì dừng */
    for ( var i = 1; i <= n; i++){
        sum += Math.pow(x, i)
    }
/* Hiển thị */
    document.getElementById("sum").innerHTML = `Tổng của dãy trên là ${sum}`
}

// BÀI 3:
function calcFac(){
/* Khai báo kèm lấy giá trị số y; khai báo fac = 1 (do start từ i=1) */
    var y = +document.getElementById('y').value
    var fac = 1
/* Vòng lặp với điều kiện i <= y thì fac = fac(trước đó) * i
cho đến khi i>y thì dừng */
    for (var i = 1; i <= y; i++){
        fac = fac*i
    }
/* Hiển thị */
    document.getElementById("fac").innerHTML = `Tích của dãy trên là ${fac}`
}
// BÀI 4:
function showContent(){
/* Hiển thị các div nằm trong div có id là content */
var content = document.querySelectorAll("#content > div")
/* Vòng lặp với điều kiện i < content.length */
for (var i = 0; i < content.length; i++) {
/* Do i = 0 -> hiển thị div thứ nhất 
Nên i chia hết cho 2 thì background là màu xanh (div vị trí lẻ)
Tương tự với i = 2,4,6,8 */
    if ( i % 2 === 0){
        content[i].style.backgroundColor = "blue";
    } 
/* Ngược lại, i = 1 -> hiển thị div thứ hai
Nên i không chia hết cho 2 thì background là màu đỏ (div vị trí chẵn)
Tương tự với i = 2,4,6,8 */
    else{
        content[i].style.backgroundColor = "red";
    }
  }
/* Hiển thị */
  document.getElementById("content").style.display = "block"
}
