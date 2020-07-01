$(function(){
    // alert("jdskjfd")
    $(".nav-box1>li").mouseenter(function(){
        // console.log(this)
        let index = $(this).index()
        // console.log(index)
        $(".nav-box2>li").eq(index).css({"display":"block"}).siblings().css({"display":"none"})
    })
    $(".nav-box1>li").mouseleave(function(){
        let index = $(this).index()
        // console.log(index)
        $(".nav-box2>li").eq(index).css({"display":"none"})
        $(".nav-box2>li").eq(index).mouseenter(function(){
            $(".nav-box2>li").eq(index).css({"display":"block"}).siblings().css({"display":"none"})
            
        })
        
        $(".nav-box2>li").eq(index).mouseleave(function(){
            $(".nav-box2>li").eq(index).css({"display":"none"})
        })
    })

 
        $.ajax({
            url:"../server/goods01.php",
            dataType:"json"
        }).done(data=>{
            // console.log(data)
            // console.log($(".store-box"))
            let html1=""
             data.map(item=>{
                return html1+=`
                <li class="a-box">
                    <img src=${item.good_src} alt="">
                    <p class="desc"><a href="">${item.good_desc}</a></p>
                    <h2 class="price">￥${item.good_price}</h2>
                </li>
                `
            }).join("")
            $(".store-box").html(html1)
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