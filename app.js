$(document).ready(function(){
    $("#get-time").click(function(){
        $.ajax({
            url: "https://admin.zoodex.ir/api/v3/cities?",  // آدرس API
            method: "GET",  // متد درخواست
            headers: {
                "Accept": "application/json"  // نوع داده که انتظار داریم
            },
            success: function(response){
                const res = response;
                console.log({res}) // داده‌ها رو تو کنسول ببین
                $("#time-result").html(
                    "<p>نام شهر: " + response[0].title + "</p>" +
                    "<p>json: " + JSON.stringify(response) + "</p>"
                );
            },
            error: function(xhr, status, error){
                console.log("خطا:", error);
                $("#time-result").html("<p style='color:red;'>خطا در دریافت اطلاعات</p>");
            }
        });
    });
});
