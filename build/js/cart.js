function arr(){
    $(".oInput>input").click(function(){
        let res = $(this).is(":checked")
        // console.log(res)
        if(res){
            $(".list-content input").prop("checked",res)
            // console.log($(".list-content input"))
        }else if(!res){
            $(".list-content input").prop("checked",res)
        }
        if($(".list-content input").is(":checked")){
            priceY()
       }else{
        $(".oPrice>span").text()
       }
    })
    $(".list-content1").on("click","input",function(){
        let res = $(this).is(":checked")
        if(res){
            $(this).parent().next().find(".nx").prop("checked",res)
        }else if(!res){
            $(this).parent().next().find(".nx").prop("checked",res)
        }
        fn()
        priceY()
    })
    $(".list-content1").on("click",".nx",function(){
        let res = $(this).is(":checked")
        if(res){
            $(this).parent().parent().prev().find("input").prop("checked",res)
        }else if(!res){
            $(this).parent().parent().prev().find("input").prop("checked",res)
        }
        fn()
        priceY()
    })
    function fn(){
        let arr = true
        $(".list-content").find('[type=checkbox]').map((index,item)=>{
                // console.log(item)
                let res = item.checked
                // arr = 
                if(!res){
                return arr = false
                }
                // console.log(res)
                
        })
        
        if(!arr){
            $(".oInput>input").prop("checked",arr)
        }else if(arr){
            $(".oInput>input").prop("checked",arr)
        }
    }
    $(".list-content1").on("click",".prev",function(){
        let oCount = parseFloat($(this).next().val())
        oCount--
        if(oCount<0){
            oCount=0
        }
        $(this).next().val(oCount)
        let price = parseFloat($(this).parent().prev().text())
        // console.log(price)
           price = oCount*price
          $(this).parent().next().find("span").text(price)
          oCountY($(this),oCount)
        
    })
    $(".list-content1").on("click",".next",function(){
        let oCount = parseFloat($(this).prev().val())
        oCount++
        $(this).prev().val(oCount)
        oCountY($(this),oCount)
        
    })

    function oCountY (e,oCount){
        
        let price = parseFloat(e.parent().prev().text())
        // console.log(price)
           price = oCount*price
          e.parent().next().find("span").text(price)
       if($(".list-content input").is(":checked")){
            priceY()
       }
    }
    $(".list-content1").on("blur",".ny",function(){
       let oCount = parseFloat($(this).val())
       oCountY($(this),oCount)
    })
    function priceY(){
        let num = 0
        $(".cla5 span").map((index,item)=>{
           //  item.innerText
           num+=parseFloat(item.innerText)
        })
       //  console.log(num)
       $(".oPrice>span").text(num)
   
       let num1 = 0
        $('.ny').map((index,item)=>{
            num1+=parseFloat(item.value)
        })
        $(".oCount i").text(num1)
    }
    $(".list-content1").on("click",".del",function(){
        // console.log("jdjfs")
        let arr2 = $(this).parent().parent().find(".btnId").text()
        console.log(arr2)
        $.ajax({
            url:"../server/del.php",
            data:`btn_id=${arr2}`,
            dataType:"json"
        }).done(data=>{
            if(data.status=="success"){
                $(this).parent().parent().parent().remove()
            }
        })
    })
}
    function fn1(arr){
        $.ajax({    
            url:"../server/num01.php",
            dataType:"json"
        }).done(data=>{
            // console.log(data)
            let html1 = ""
            data.forEach((item,index)=>{
                $.ajax({
                    url:"../server/goods02.php",
                    dataType:"json"
                }).done((data)=>{
                    // console.log(data)
                    // console.log(data[0])
                    // return data
                    // return data[0].good_desc
                   html1+=`
                    <div class="list-content fs">
                    <p class="list-title">
                        <input type="checkbox">  迦莲美妆专营店 
                    </p>
                    <ul class="list-box1">
                        <li class="cla1">
                            <input type="checkbox" class="nx"> <img src='${data[item.goodId-61].good_src}'alt="">
                        </li>
                        <li class="cla2">
                            ${data[item.goodId-61].good_desc}<span class="btnId">${item.goodId}</span>
                        </li>
                        <li class="cla3">
                        ${data[item.goodId-61].good_price}
                        </li>   
                        <li class="cla4">
                            <button class="prev">-</button>
                            <input type="text" value="${item.num}" class="ny">
                            <button class="next">+</button>
                        </li>
                        <li class="cla5">
                            ￥<span>${data[item.goodId-61].good_price}</span>
                        </li>
                        <li class="cla6">
                            <button class="del">刪除</button>
                        </li>
                    </ul>
                    
                </div>
                    `
                    $(".list-content1").html(html1)
                })
               arr()
             
                // console.log(item.goodId)
               
            //  let retcontent = ret()
            //  console.log(rec())
            
                
            })
            
        })
    }
    fn1(arr)
    
    function andOrd(){
        let username =localStorage.getItem("userId") ||""
        if(username!=""){
            console.log("djsjfd")
            $(".dl>.Id").text(username)
            $(".dr").css({display:"none"})
            $(".dr").css({display:"none"})
            $(".dl b").click(function(){
                localStorage.removeItem("userId")
                $(".dr").css({display:"block"})
                $(".dl").css({display:"none"})
                and()
            })
        }else if(username==""){
            // console.log("jdjsf")
            $(".dr").css({"display":"block"})
            $(".dl").css({display:"none"})
             and()
        }
    }
    andOrd()
    
     function and(){
        $(".dr .lg").click(function(){
            location.href="../build/login.html"
        })
        $(".dr i").click(function(){
            location.href="../build/reg.html"
        })
     }       
            //  console.log(data1)
    // let num = 0
    //  $(".cla5 span").map((index,item)=>{
    //     //  item.innerText
    //     num+=parseFloat(item.innerText)
    //  })
    // //  console.log(num)
    // $(".oPrice>span").text(num)
     
    // let num1 = 0
    //  $('.ny').map((index,item)=>{
    //      num1+=parseFloat(item.value)
    //  })
    //  $(".oCount i").text(num1)

    