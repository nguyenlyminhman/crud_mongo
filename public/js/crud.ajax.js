function Crud() {
    function bindEvent() {
        $("#btn_update").click( function (e) {
            alert("sd")
            let params = {
                _id: $("#_id").val(),
                email: $("#email").val(),
                fullname: $("#fullname").val(),
                age: $("#age").val()
            };
            console.log(params);
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
    }
    bindEvent();
} 


$(document).ready(function () {
    new Crud();
});