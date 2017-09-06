$(document).ready(function(){
    alert("good");
    $("#confirm").click(function(){
        var inp = $("#input").val();
        //var pwd = $("#password").val();
        var pd={"input":inp};
        $.ajax({
        	type:"post",
        	url:"/",
        	data:pd,
        	cache:false,
        	success:function(data){
        		document.getElementById("a").innerHTML=data;
        	},
        	error:function(){
        		alert("error!");
        	},
        });
    });
});