$(document).ready(function() {
    console.log('Ready');
        var Cat='';
        var up_user='';
        console.log('loaded');
        $.ajax({
            url: "http://www.json-generator.com/api/json/get/cqGeKUifpK?indent=2",
            type: "GET",
            success:function(data){
                    var cat = data.Category;
                    up_user = data.book;
                    
                    for(var i =0;i<cat.length;i++){
                       
                        Cat +='<li id='+cat[i]+'>';
                        Cat += cat[i];
                        Cat += '</li>';
                      
                    }
                    
                $('#List').html(Cat);
                  
                    console.log(cat);
            }

        });
   
    $('#List').on('click', function (event) {
        var user = event.target.id;
        console.log(user);
       
     
        var outlook = ' ';  
      
               
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
          
            
            
        });
    
    

});