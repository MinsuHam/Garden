window.onload = function() {
    // 1. 아이디 입력창 정보 가져오기
    let elInputUserid = document.querySelector('#userid'); //input#userid

    // 2. 성공 메시지 정보 가져오기
    let elSuccessMessage = document.querySelector('.success-message'); // div.success-message.hide

    // 3. 실패 메시지 정보 가져오기 (글자수 제한 4~12글자)
    let elFailureMessage = document.querySelector('.failure-message'); // div.failure-message.hide

    // 4. 실패 메시지2 정보 가져오기 (영어 또는 숫자)
    let elFailureMessageTwo = document.querySelector('.failure-message2'); // div.failure-message2.hide

    // 1. 비밀번호 입쳑창 정보 가져오기
    let elInputPassword = document.querySelector('#userpass'); //input#password

    // 2. 비밀번호 확인 입력창 정보 가져오기
    let elInputPasswordRetype = document.querySelector('#userpass_check'); //input#password-retype

    // 3. 실패 및 성공 메시지 정보 가져오기 (비밀번호 불일치)
    let elMismatchMessage = document.querySelector('.mismatch-message'); //div.mismatch-message.hide
    let elMatchMessage = document.querySelector('.match-message');

    // 4. 실패 메시지 정보 가져오기 (8글자 이상, 영문, 숫자, 특수문자 미사용)
    let elStrongPasswordMessage = document.querySelector('.strongPassword-message'); //// div.strongPassword-message.hide
    
    // 5. 이름 입력창 정보 가져오기
    let elInputUsername = document.querySelector('.username');

    // 6. 이름 입력창 성공 메시지
    let elSuccessKo = document.querySelector('.success-korean');

    // 7. 이름 입력창 성공 메시지
    let elFailureKo = document.querySelector('.failure-korean');

    // 8. 휴대폰 번호 입렵창 정보 가져오기
/*     let elInputTel = document.querySelector('.tel'); */

    
    /** 6글자 이상 또는 20글자 이하인 경우 true, 아니면  false로 리턴  */
    function idLength(value) {
        return value.length >= 6 && value.length <= 20; 
    }

    /** 영어 또는 숫자가 들어간 경우 true, 아니면 false를 리턴  */
    function onlyNumberAndEnglish(str) {
        return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
        // test(): 문자열에 일치하는 부분이 있는지 확인한다. true 또는 false를 반환
    }

    /** 한글만 들어간 경우 true, 아니면 false를 리턴 */
    function onlyKorean(str) {
        return /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(str);
    }

    /** 최소 8글자 이상이면서, 알파벳과 숫자 및 특수문자(@$!%*#?&)가 하나 이상 포함될 경우 true, 아니면 false를 리턴  */
    function strongPassword(str) {
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
    }

    /** 비밀번호와 비밀번호 확인이 일치할 경우 true, 아니면 false를 리턴  */
    function isMatch(passoword1, passoword2) {
        return passoword1 === passoword2;
    }

    function isTel(str) {
        return /^[0-9]+/g;
    }

    let userid_check_btn = document.querySelector('.userid_check');
    userid_check_btn.addEventListener('click', function() {
        if(elInputUserid.value.length >= 6 && elInputUserid.value.length <= 20) {
            alert("사용 가능한 아이디입니다.");
        }
        else {
            alert("아이디를 확인해주세요.");
        }
    });

    //onkey: 키보드를 눌렀다 떼어졌을 때
    elInputUserid.onkeyup = function() {
        // 값을 입력한 경우
        if(elInputUserid.value.length !== 0) {
            // 영어 또는 숫자 외의 값을 입력했을 경우
            if(onlyNumberAndEnglish(elInputUserid.value) === false) {
                elSuccessMessage.classList.add('hide');
                elFailureMessage.classList.add('hide');
                elFailureMessageTwo.classList.remove('hide'); //영어 또는 숫자만 가능합니다.
                elFailureMessageTwo.style.color = "red";
            }
            // 글자 수가 4~12글자가 아닐 경우
            else if(idLength(elInputUserid.value) === false) {
                elSuccessMessage.classList.add('hide'); //성공 메시지가 가려져야함
                elFailureMessage.classList.remove('hide'); //아이디는 6~20글자 이어야 합니다.
                elFailureMessage.style.color = "red";
                elFailureMessageTwo.classList.add('hide'); // 실패 메시지2가 가려져야함
            }
            // 조건을 모두 만족할 경우
            else if(idLength(elInputUserid.value) || onlyNumberAndEnglish(elInputUserid.value)) {
                elSuccessMessage.classList.remove('hide'); //사용할 수 있는 아이디입니다.
                elFailureMessage.classList.add('hide');
                elFailureMessageTwo.classList.add('hide');
            }
        }
        // 값을 입력하지 않은 경우 (지웠을 때), 모든 메시지를 가린다
        else {
            elSuccessMessage.classList.add('hide');
            elFailureMessage.classList.add('hide');
            elFailureMessageTwo.classList.add('hide');
        }
    }


    elInputPassword.onkeyup = function() {
        //값을 입력한 경우
        if(elInputPassword.value.length !== 0) {
            if(strongPassword(elInputPassword.value)) {
                elStrongPasswordMessage.classList.add('hide'); 
            }
            else {
                elStrongPasswordMessage.classList.remove('hide'); 
                elStrongPasswordMessage.style.color = "red";
            }
        }
        else {
            elStrongPasswordMessage.classList.add('hide'); 
        }
    };


    elInputPasswordRetype.onkeyup = function() {
        if(elInputPasswordRetype.value.length !== 0) {
            if(isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
                elMismatchMessage.classList.add('hide');
                elMatchMessage.classList.remove('hide');
            }
            else {
                elMismatchMessage.classList.remove('hide'); 
                elMismatchMessage.style.color = "red"; 
                elMatchMessage.classList.add('hide');
            }
        }
        else {
            elMismatchMessage.classList.add('hide'); 
        }
    }

    elInputUsername.onkeyup = function() {
        if(elInputUsername.value.length !== 0) {
            if(onlyKorean(elInputUsername.value) === false) {
                elSuccessKo.classList.add('hide');
                elFailureKo.classList.remove('hide');
                elFailureKo.style.color = "red";
            }
            else {
                elSuccessKo.classList.remove('hide');
                elFailureKo.classList.add('hide'); 
            }
        }
    }

        //휴대폰 번호 유효성 검사 (진행중)
/*     elInputTel.onkeyup = function() {
        if(isTel(elInputTel.value.length !== 0)) {
            if(isTel(elInputTel.value) === false) {
                elFailureTel.classList.add('hide');
            }
            else {
                elFailureTel.classList.remove('hide');
                elFailureTel.style.color = "red";

            }
        }
    } */





};//JavaScript


//회원가입 Email
$(function () {
    $('#E_select').change(function () {
        if ($('#E_select').val() == 'directly') {
            $('#emailId').val('');
            $('#emailId').focus();
        } else {
            $('#emailId').val($('#E_select').val());
        }
    });
}); //jQuery
