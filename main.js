function sendmsg() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        quantity: document.getElementById('quantity').value,
        phone: document.getElementById('phone').value
        
    };

    emailjs.send("service_zfq5cog", "template_x2bo0b5", params)
    .then(function(response) {
    
        document.getElementById("success-msg").style.display = "block";
        setTimeout(function() {
            document.getElementById("success-msg").style.display = "none";
        }, 5000);
    })
  
    .catch(function(error) {
        console.error("حدث خطأ:", error);
        alert("فشل في الإرسال: " + error.text);
    });

}
   /* emailjs.send("service_zfq5cog", "template_x2bo0b5", params)
    .then(function(response) {
        alert("تم الإرسال بنجاح! الحالة: " + response.status);
    })
    .catch(function(error) {
        console.error("حدث خطأ:", error);
        alert("فشل في الإرسال: " + error.text);
    });

}*/


let btn= document.getElementById('btn');

window.onscroll=function(){
    if(scrollY>=800){
        btn.style.display='block';

    }else{
        btn.style.display='none';  
    }
}
btn.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth",
    }) 
}


var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests:true,
      clickable:true,

    },
    autoplay:{
        delay:2000,
    },
    loop:true,
  });

  