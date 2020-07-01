$(function(){
    $(".content-reg1").click(function(){
        $(".d1").removeClass("act").next().addClass("act")
    })
    $(".content-reg2").click(function(){
        $(".d2").removeClass("act").prev().addClass("act")
    })
    
    $("#btn").click(function(){
        let isCheck =  $("#protocol").is(":checked")
        if(!isCheck){
            alert("请阅读并同意央广购物协议")
            return
        }
        let data = {
            username:$("#username").val(),
            userpass:$("#userpass").val()
        }

        $.ajax({
            url:"../server/login.php",
            type:"post",
            data,
            dataType:"json",
        }).done(data=>{
            // console.log(data)
            if(data.status=="success"){
                alert("登录成功")
                location.href="../client/index.html"
            }else if(data.status=="error"){
                alert("用户名或密码错误！")
            }
        })
    })
})