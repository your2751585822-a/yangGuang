let oBox = document.getElementById("box")
let renum 
    let oMrror = document.getElementById("mirror-box")
    let oShow = document.getElementById("show-box")
    $("#show-box").css({display:"none"})
    $("#mirror-box").css({display:"none"})
    // console.log(oBox,oMrror,oShow)
    oBox.onmousemove = function(event){
       let e = event || window.event
       $("#mirror-box").css({display:"block"})
       $("#show-box").css({display:"block"})
       
       $("#box").mouseleave(function(){
        $("#mirror-box").css({display:"none"})
        $("#show-box").css({display:"none"})
       })
       let oBoxLeft = oBox.offsetLeft
       let oBoxTop = oBox.offsetTop

       let oMrrorW = oMrror.offsetWidth
       let oMrrorH = oMrror.offsetHeight
    //    console.log(oBoxLeft,oBoxTop)
    //    console.log(oMrrorH,oMrrorW)
        // console.log(e.pageX,e.pageY)
        let left1 = e.pageX-oBoxLeft-oMrrorW/2
        let top1 = e.pageY-oBoxTop-oMrrorH/2
        if(left1<0){    
            left1=0
        }else if(left1+oMrrorW>oBox.offsetWidth){
            left1 = oBox.offsetWidth-oMrrorW
        }
        if(top1<0){
            top1 = 0
        }else if(top1+oMrrorH>oBox.offsetHeight){
            top1 = oBox.offsetHeight-oMrrorH
        }
        // console.log(left1,top1)
        oMrror.style.left = left1+"px"
        oMrror.style.top = top1+"px"
        
        oShow.style.backgroundPosition = `-${left1*3}px -${top1*3}px`
    }
    $("#imgs-box").on("click","img",function(){
        // console.log(this)
        // console.log($(this).attr("src"))
        $("#box").css({"backgroundImage":`url("../client/${$(this).attr("src")}")`})
        $("#show-box").css({"backgroundImage":`url("../client/${$(this).attr("src")}")`})
    })
    $(".nav-box>li>a").eq(0).css({backgroundColor:"red",color:"white"}).siblings().css({backgroundColor:"white",color:"black"})
    $(".nav-box>li>a").eq(1).css({color:"red"})
    
    // let num = 0
    $(".prev").click(function(){
        // num--
         count = parseFloat($(".oCount").val())
        // console.log(count)
        count--
        if(count<0){
            count=0
        }
        $(".oCount").val(count) 
        // fn(count)
        renum = count
    })
    $(".next").click(function(){
        // num--
     count = parseFloat($(".oCount").val())
        // console.log(count)
        count++
        $(".oCount").val(count)
        // fn(count)
        renum = count
    })
    $(".cartbox1 a").mouseenter(function(){
        $(this).css({color:"red",border:"1px solid red"}).mouseleave(function(){
            $(this).css({color:'white',border:"0"})
        })  
        
    })
// console.log("djfsojf")
// console.log(count)

function fn(){
    let good_id = location.href.split("=")[1]
    // let user_id = localStorage.getItem("userId")
    // let num_id = count
    // let num_id = $(".oCount").txet()
    // console.log(good_id,user_id,num_id)
    $.ajax({
        url:"../server/goods02.php",
        dataType:"json"
    }).done(data=>{
        // console.log(data[res-61])
        // console.log(data[res-61].good_desc)
        $(".dail-title").html(data[good_id-61].good_desc)
        $(".dail-show-price span").html(data[good_id-61].good_price)
        // oBox.style.backgroundImage =`url(${data[good_id-61].good_src})`
        $("#box").css({
            backgroundImage:`url(${data[good_id-61].good_src})
`
        })
        $("#show-box").css({
            backgroundImage:`url(${data[good_id-61].good_src})
`
        })
        // console.log(data[good_id-61].good_src.split("@")[0])
    })
    
}
fn()
$(".dail-show1").on("click",".cartbox a",function(e){
    e.preventDefault()
    let good_id = location.href.split("=")[1]
    let user_id = localStorage.getItem("userId")
    // console.log($(".cartbox").val())
    let num_id = renum ||1
    // console.log(num_id)
    // console.log(count)
    
    // console.log("jdfj")
    $.ajax({
        url:"../server/add02.php",
        data:`good_id=${good_id}&user_id=${user_id}&num_id=${num_id}`,
    }).done(data=>{
        alert(data)
    })
})

    