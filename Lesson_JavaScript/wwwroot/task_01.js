function Calculate() {
    let a = document.getElementById("numberA").value;
    let b = document.getElementById("numberB").value;

    document.getElementById("result").innerHTML = Number(a) + Number(b);
}