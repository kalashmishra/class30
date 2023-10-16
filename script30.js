var arr=[
    {img:"https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",story:"https://images.unsplash.com/photo-1508606572321-901ea443707f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"},
    {img:"https://images.unsplash.com/photo-1578835187997-017d9952f020?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",story:"https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {img:"https://images.unsplash.com/photo-1514069419621-1adbe445edf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",story:"https://images.unsplash.com/photo-1545911825-6bfa5b0c34a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
    
]
var clutter="";

var timer;
arr.forEach(function(val,index){
    clutter+=` <div class="circle">
    <div class="circle1">
    <div class="story">
        <img id="${index}" src="${val.img}" alt="">
    </div>
</div></div>`
})

document.querySelector("#stories").innerHTML=clutter;
document.querySelector("#stories").addEventListener("click",function(details){
//document.querySelector("#fs img").setAttribute("src", arr[details.target.id].story)
document.querySelector("#fs").style.backgroundImage=`url(${arr[details.target.id].story})`
document.querySelector("#fs").style.display="initial"
document.querySelector("#progress #growth").style.width="0";
clearInterval(timer);

  runtime();  



})
function runtime(){
    var progress=0;
    timer=setInterval(function(){
        progress++ ;
       document.querySelector("#progress #growth").style.width=progress+"%";
       },28);
    setTimeout(function(){
        document.querySelector("#fs").style.display="none";
    },3000);
}    

