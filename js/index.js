$(function () {
    var util = {
        Regex: {
            MOBILE: /^1\d{10}$/,
            ISCODE: /^[0-9]{6}$/i
        }
    }
    var validateMethods = {
        phone: function (val) {
            var msgBox = $('.phone-error');
            if ($.trim(val) != "") {
                if (util.Regex.MOBILE.test(val)) {
                    msgBox.html("");
                    return true;
                } else {
                    msgBox.html("输入手机号码格式不正确");
                    return false;
                }
            } else {
                msgBox.html("手机号码不能为空");
                return false;
            }
        },
        password: function (val) {
            var msgBox = $('.pwd-error');
            if (val.indexOf(" ") > -1) {
                msgBox.html("密码不允许含有空格");
                return false;
            }
            if ($.trim(val) != "") {
                if (/^.*?[\d]+.*$/.test(val) && /^.*?[A-Za-z].*$/.test(val) && /^.{6,16}$/.test(val)) {
                    msgBox.html("");
                    return true;
                } else {
                    msgBox.html("密码格式错误，必须为6-16个字符(包含字母+数字)");
                    return false;
                }
            }
            else {
                msgBox.html("密码不能为空");
                return false;
            }
        },
        imgCode: function (val) {
            var msgBox = $(".imgcode-error");
            if ($.trim(imgCode) == "") {
                msgBox.html("图形验证码不能为空");
                return false;
            } else {
                msgBox.hide();
                return true;
            }
        },
        telCode: function (val) {
            var msgBox = $('.telcode-error');
            if ($.trim(val) != "") {
                if (util.Regex.ISCODE.test(val)) {
                    msgBox.html("");
                    return true;
                }  else {
                    msgBox.html("验证码错误,请重新输入");
                    return false;
                }
            } else {
                msgBox.html("请输入验证码");
                return false;
            }
        }
    }

    $(".regist-btn").on("click", 'button', function(){
        var PhoneVal = $("#phone").val();
        var PwdVal = $('#pwd').val();
        var ImgcodeVal = $('#imgcode').val();
        var TelcodeVal = $('#identifycode').val();
        if(validateMethods.phone(PhoneVal) && validateMethods.password(PwdVal) && validateMethods.imgCode(ImgcodeVal) && validateMethods.telCode(TelcodeVal)){

        }
    });

    // 弹窗
    $('#packet').on('click', function(){
        $('.newcomer-packet').css('display','block');
    }) 
    $('#jdcard').on('click', function(){
        $('.jdcard-rule').css('display','block');
    }) 
    $('#bbin').on('click',function(){
        $('.newcomer-bbin').css('display','block');
    })
    $('#member').on('click', function(){
        $('.member-rights').css('display','block');
    })
    $('.newcomer-packet').on('click', '.close', function(){
        var $box = $('.newcomer-packet');
        $box.css('display','none');
    })
    $('.jdcard-rule').on('click', '.close', function(){
        var $box = $('.jdcard-rule');
        $box.css('display','none');
    })
    $('.newcomer-bbin').on('click', '.close', function(){
        var $box = $('.newcomer-bbin');
        $box.css('display','none');
    })
    $('.member-rights').on('click', '.close', function(){
        var $box = $('.member-rights');
        $box.css('display','none');
    })
});
