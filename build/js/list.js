$(function(){
    // alert("jdskjfd")
    // $(".nav-box1>li").mouseenter(function(){
    //     // console.log(this)
    //     let index = $(this).index()
    //     // console.log(index)
    //     $(".nav-box2>li").eq(index).css({"display":"block"}).siblings().css({"display":"none"})
    // })
    // $(".nav-box1>li").mouseleave(function(){
    //     let index = $(this).index()
    //     // console.log(index)
    //     $(".nav-box2>li").eq(index).css({"display":"none"})
    //     $(".nav-box2>li").eq(index).mouseenter(function(){
    //         $(".nav-box2>li").eq(index).css({"display":"block"}).siblings().css({"display":"none"})
            
    //     })
        
    //     $(".nav-box2>li").eq(index).mouseleave(function(){
    //         $(".nav-box2>li").eq(index).css({"display":"none"})
    //     })
    // })

 
        $.ajax({
            url:"../server/goods01.php",
            data:"res_id=dt",
            dataType:"json"
        }).done(data=>{
            console.log(data)
            // console.log($(".store-box"))
            deAe("dt")
        })
        // $(".store-box").on("click","a-box",function(){
        //     console.log(this)
        // // })
        $(".store-box").on("mouseenter",".a-box",function(){
            // $(this).mouseenter(()=>{
                $(this).css({"border":"1px solid red"}).siblings().css({"border":"1px solid #ffffff"})
            // })
        })
        $.ajax({
            url:"../server/get2.json",
            dataType:"json"
        }).done(data=>{
            let html = ""
            data.map(data=>{
               return html+=`
                <li class="list-content">
                <div class="list-header">
                    <p class="list-title">
                        美妆护肤
                    </p>
                </div>
                <div class="list-show">
                    <div class="show-l">
                        <img src=${data.src4} alt="" class="imgs">
                    </div>
                    <ol class="l-box">
                        <li class="box-1">
                            <span>${data.desc}</span>
                            <h6>${data.title}</h6>
                            <img src=${data.src2} alt="" class="imgs">
                        </li>
                        <li class="box-1">
                            <span>补水面膜</span>
                            <h6>润泽肌肤</h6>
                            <img src=${data.src3} alt="" class="imgs">
                        </li> 
                    </ol>
                    <div class="header-img">
                        <img src=${data.src} alt="" class="imgs">
                        <img src=${data.src1} alt="" class="imgs">
                    </div>
                </div>
            </li>
                `
            })
            $(".list-box").html(html)
            $(".list-header").eq(1).text("珠宝首饰").css({
                    "font-size": "20px",
                    "color":" #ffffff",
                    "line-height": "70px",
                    "padding-left": "20px"
            })
            $(".list-header").eq(2).text("家电用具").css({
                "font-size": "20px",
                "color":" #ffffff",
                "line-height": "70px",
                "padding-left": "20px"
        })
        })

        
        $(".store-box").on("click",".btnB",function(e){
            console.log(this)
            // event.stopPropagation()
            // return false;
            // let target = e.target||e.srcElement
            // if(target.nodeName=="LI"){
            //     console.log("jfsjfd")
            //     return
            // }
            // return
            let user_id = localStorage.getItem("userId")||""
            // let goodid = localStorage.getItem("user_pass")||""
            let good_id = $(this).parent().attr("data-xx")
            console.log(user_id,good_id)
            if(user_id&&good_id){
                // console.log("jdfisjfd")
                $.ajax({
                    url:"../server/add.php",
                    // type:"post",
                    data:`good_id=${good_id}&user_id=${user_id}`,
                    // dataType:"json"
                }).done(data=>{
                    alert("添加成功")
                })
            }else{
                location.href = "../client/login.html"
            }
        })
        $(".store-box").on("click",".a-box",function(e){
            // console.log(this)
            // return
            let target = e.target||e.srcElement
            if(target.nodeName=="DIV"){
                console.log("djsjfdjf")
                return
            }
            let good_id =  $(this).attr("data-xx")
            // console.log(good_id)
            $.ajax({
                url:"../server/02.php",
                type:"get",
                data:`good_id=${good_id}`,
                dataType:"json"
            }).done(data=>{
                // console.log(data)
                if(data.status=="success"){
                    // console.log('jdfojds')
                    location.href = `./dail.html?type=${good_id}`
                }
            })
        })  
        $(".a-width").on("click","li",function(){
            // console.log(this)
            $(this).addClass("moren").siblings().removeClass("moren")
            let retAnd = $(this).attr("data-res")
           deAe(retAnd)
        })
        function deAe(retAnd){
            $.ajax({
                url:"../server/goods01.php",
                data:`res_id=${retAnd}`,
                dataType:"json"
            }).done(data=>{
                let html1=""
                data.map((item)=>{
                   //  let res1 = item.good_src.split("@")[0]
                   console.log(item.good_src)
                   return html1+=`
                   <li class="a-box" data-xx =${item.good_id}>
                       <img src=${item.good_src} alt="">
                       <p class="desc"><a href="">${item.good_desc}</a></p>
                       <h2 class="price">￥${item.good_price}</h2>
                       <div class="btnB">加入购物车</div>
                       
                   </li>
                   `
               }).join("")
               $(".store-box").html(html1)
            })
            $(".r-box i").eq(0).click(function(){
                location.href="../client/cart.html"
            })
        }
        // $(".nav-box").on("click",".a-width",function(){
        //     // console.log("3747289")
        //     $(".nav-box1").slideToggle()
        // })
        // $(".nav-box>li>a").eq(0)
})  
// let arrsj = document.getElementsByClassName("bz-more-list")[0].querySelectorAll(".bz-more-info-price-txt")
// let arrt1 = document.getElementsByClassName("bz-more-list")[0].children
// let rest1 = []
// Array.from(arrt1).forEach(element => {
//     let obj = {}
//     obj.desc = element.querySelector(".bz-more-info-name").innerText
//     obj.src = element.querySelector("img").src
//     obj.price = element.querySelector(".bz-more-info-price-txt").innerText
//     rest1.push(obj)
// });
// let ret1 = document.getElementsByClassName("bz-more-list")[0]
// let arr7= []
// Array.from(ret1).forEach(element => {
//     let obj = {}
//     obj.inner = element.querySelector(".bz-more-info-name").innerText
    
//     arr7.push(obj)
// });

// console.log(res)
// document.getElementsByClassName("bz-more-list")[0].querySelectorAll(".bz-more-info-name")
// document.getElementsByClassName("bz-more-list")[0].querySelectorAll("img")
// document.getElementsByClassName("bz-more-list")[0].querySelectorAll(".bz-more-info-price-txt")
// JSON.stringify()