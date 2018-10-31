$(function () {
    $('#List').on('click', function (event) {
        var user = event.target.id;
        console.log(user);
       
     
        var outlook = ' ';  
        $.ajax({
            url: "http://www.json-generator.com/api/json/get/cfFCjCzUHS?indent=2",
            type: 'GET',
            success: function (data) {
                var up_user = data.book;
                for (var i = 0; i < up_user.length; i++) {
                    if(user === 'All'||up_user[i].category === user){
                    outlook += "<div class='row'>";
                    outlook += "<div class='column'>" + up_user[i].name + "</div>";
                    outlook += "<div class = 'column'>" + up_user[i].description + "</div>";
                    outlook += "<div class='column'>" + up_user[i].category + "</div>";
                    outlook += "</div>";
                }
                    
            }
                $('#base').html(outlook);
          
            },
            error: function (jqXHR, textStatus, errorThrow) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrow);
            }
        });
    
    });

});