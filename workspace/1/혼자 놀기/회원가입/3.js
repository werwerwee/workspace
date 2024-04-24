function check(ab){
    let ps = document.getElementById('ps').value
    let psch = document.getElementById('psch').value
    if(ps == psch && ab == 'a'){
        alert("수정완료")
    }else if(ps == psch  && ab == 'b'){
        alert("가입성공")
    }
    else{
        alert("비밀번호를 왁인해 주세요")
    } 

    // if(ps == psch){
    //     switch(ab){
    //         case 'a' : 
    //             alert("수정완료")
    //             break;
    //         case 'b' : 
    //             alert("가입성공")
    //             break;
    //     }
    // }else{
    //     alert("비밀번호를 왁인해 주세요")
    // }
}