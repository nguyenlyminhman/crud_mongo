function Crud() {
    function bindEvent() {
        $("#btn_update").click( function (e) {
            let params = {
                _id: $("#_id").val(),
                email: $("#email").val(),
                fullname: $("#fullname").val(),
                age: $("#age").val()
            };
            let base_url = location.protocol + "//" + document.domain + ":" + location.port;
            $.ajax({
                url: base_url+"/user/edit",
                type: "PUT",
                data: params,
                dataType: "JSON",
                success: function(res){
                    if(res && res.status_code == 200){
                        location.reload();
                    }
                }
            });
        
        });

        $(".btn_delete").click(function (e){
            let user_id = $(this).attr("user_id");
            let base_url = location.protocol + "//" + document.domain + ":" + location.port;
            console.log(user_id)
            $.ajax({
                url: base_url+"/user/delete",
                type: "DELETE",
                data: {_id: user_id},
                dataType: "JSON",
                success: function(res){
                    if(res && res.status_code == 200){
                        location.reload();
                    }
                }
            });
        })
    }
    bindEvent();
} 

$(document).ready(function () {
    new Crud();
});