$(function(){
    $("#userphone").val(13926291888);
    $("#username").val("zs");
    $("#userpass").val(123);
    $("#userp").val(123);
    let imgCode;
/*不传值，统一走默认值*/
let captcha = new Captcha({
    lineWidth: 1, //线条宽度
    lineNum: 2, //线条数量
    // dotR: 200, //点的半径
    // dotNum: 1000, //点的数量
    preGroundColor: [10, 80], //前景色区间
    backGroundColor: [150, 250], //背景色区间
    fontSize: 40, //字体大小
    fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'], //字体类型
    fontStyle: 'stroke', //字体绘制方法，有fill和stroke
    content: '0123456789', //验证码内容
    length: 4 //验证码长度
});

captcha.draw(document.querySelector('#captcha'), r => {
    console.log('验证码', r);
    imgCode = r;

    /* 自动触发标签的事件 */
    $("#imgCode").trigger("blur");
});
    let option = {
        "username":{
            reg:`/^[a-zA-Z]{2,6}$/.test(val)`,
            msg:"输入用户名不规范！"
        },
        "userphone":{
            reg:`/^1[3-9]\\d{9}$/.test(val)`,
            msg:"输入手机号不正确！"
        },
        "userpass":{
            reg:`/^[a-zA-Z0-9]{3,16}$/.test(val)`,
            msg:"输入密码不规范"
        },
        "userp":{
            reg:`$.trim($("#userpass").val()) === val`,
            msg:"密码不一致！"
        },
        "imgCode":{
            reg:`$(this).val()==imgCode`,
            msg:"验证码不一致"
        }
    }
    // console.log($("table input"))
    $("table input").blur(function(){
         let option_id = this.id
        console.log(option_id)
        let val = $.trim($(this).val())
         if(eval(option[option_id].reg)){
            $(this).next().text("").removeClass("ret")
        }else{
            $(this).next().text(option[option_id].msg).css({color:"red"}).addClass("ret")
        }
    })  
        
    
    $("#btn").click(function(){
        // console.log(this)
        $("#username,#userphone,#userpass,#userp,#imgCode").trigger("blur")

        if($(".ret").length!=0){
            console.log("289427")
            return
        }
        let ischeck = $("#portocol").is(":checked")
        if(!ischeck){
            alert("请阅读并同意央广购物协议！")
            return
        }
        let data = {
            username:$("#username").val(),
            userpass:$("#userpass").val(),
            userphone:$("#userphone").val()
        }
        // console.log(data)
        
        $.ajax({
            url:"../server/res.php",
            type:"post",
            data,
            dataType:"json"
        }).done(data=>{
            if(data.status=="success"){
                alert("注册成功")
                location.href="../client/login.html"
                // console.log("jdokfsjfdjs")
            }else{
                alert("用戶名已被占用")
            }
        })
    })
})
    // $("#username").blur(function(){
    //     // console.log(this)
    //     let reg = /^[a-zA-Z]{2,6}$/;
    //     let val = $.trim($(this).val())
    //     // console.log(val)
    //     if(reg.test(val)){
    //         $(this).next().text("")
    //     }else{
    //         $(this).next().text("输入用户名不规范！").css({color:"red"})
    //     }
    // })  
    // $("#userphone").blur(function(){
    //     // console.log(this)
    //     let reg = /^1[3-9]\d{9}$/
    //     let val = $.trim($(this).val())
    //     if(reg.test(val)){
    //         $(this).next().text("")
    //     }else{
    //         $(this).next().text("输入手机号不正确！").css({color:"red"})
    //     }
    // })
    // $("#userpass").blur(function(){
    //     let reg = /^[a-zA-Z0-9]{3,16}$/
    //     let val = $.trim($(this).val())
    //     if(reg.test(val)){
    //         $(this).next().text("")
    //     }else{
    //         $(this).next().text("输入密码不规范!").css({color:"red"})
    //     }
    // })
    // $("#userp").blur(function(){
    //     // console.log(this)(
    //     let val = $.trim($(this).val())
    //     if($("#userpass").val()==val){
    //         $(this).next().text("")
    //     }else{
    //         $(this).next().text("密码不一致！").css({color:"red"})
    //     }
    // })
    // $("#imgCode").blur(function(){
    //     if($(this).val()==imgCode){
    //         // console.log("24732874")
    //         $(this).next().text("")
    //     }else{
    //         $(this).next().text("验证码不一致!").css({color:"red"})
    //     }
    // })
// })