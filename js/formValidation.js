const pw = $("#senha");
const cPw = $("#confirmasenha");

pw.keyup(()=>{
    let pw1 = pw.val();
    let pw2 = cPw.val();
    if(!(pw1 === pw2)){
        socorr.innerHTML = "Passwords doesn't match";
        console.log(`pw1: ${pw1}`);
        console.log(`pw2: ${pw2}`);
    }
    else {
        socorr.innerHTML = "";
        // console.log(`${cPw.val()} ${pw.val()}`)
    }
})

cPw.keyup(()=>{
    let pw1 = pw.val();
    let pw2 = cPw.val();
    if(!(pw1 === pw2)){
        socorr.innerHTML = "Passwords doesn't match";
        console.log(`pw1: ${pw1}`);
        console.log(`pw2: ${pw2}`);
    }
    else {
        socorr.innerHTML = "";
        // console.log(`${cPw.val()} ${pw.val()}`)
    }
})