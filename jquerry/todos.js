	var id1=0;
	var number=0;
	var numberoption=0;
	$("#erase").click(function(){
       $("#input").val("");
    });
    $("#input").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            if($("#input").val().trim()==""){
            	alert("you must write some thing");
            }
            else{
            	myFunction();
		        numberoption++;
		        if (numberoption==1) 
		        {
		        	option();
		        }
		        number++;
		        numberitems(number);
            }
        }

    });
    $("#checkall").click(function(){
       var n = $("#ct").children().length;
	    if(number!=0)
	    {
	    	for (var i = 0; i < n; i++) {
	    		if($(".result")[i].classList.contains("checked")==false)
	    		{
	  
					$(".result")[i].classList.add("checked");
					$("input")[i+1].checked=true;
					number--;
	    	        numberitems(number);
	    		}
	    	}
	    }
	    else
	    {
	    	for (var i = 0; i < n; i++) {
	    		if($(".result")[i].classList.contains("checked")==true)
	    		{  
					$(".result")[i].classList.remove("checked");
					$("input")[i+1].checked=false;
					number++;
	    	        numberitems(number);
	    		}
	    	}
	    }
    });
    function numberitems(number)
	{
		if(number<=1)
	        {
	        	$("#numberitems").text(number +" item left");
	        }
	        else 
	        {
	        	$("#numberitems").text(number +" items left");
	        }
	}
	function myFunction() {
	    var div = $("<div></div>");
	    div.addClass("result");
	    div.attr("id",id1);
	    var inputcheck= $("<input>");
	    inputcheck.attr("type", "checkbox");
	    inputcheck.attr("onclick", "checkItem("+id1+")");
	    inputcheck.attr("id", "checkItem"+id1);
	    var resultcontent = $("<input>").val($("#input").val());
	    resultcontent.addClass("result-content input1");
	    resultcontent.attr('disabled','disabled');
	    resultcontent.attr("id", "input"+id1);
	    resultcontent.attr("onkeypress", "submitEdit('input"+id1+"',event)");
	    div.attr("ondblclick", "editContent('input"+id1+"')");
	    var p= $("<p></p>").text("x");
	    p.attr("id", "deleteItem"+id1);
	    p.attr("onclick","deleteItem("+id1+")");
	    $("#ct").append(div);
	    $("#"+id1).append(inputcheck);
	    $("#"+id1).append(resultcontent);
	    $("#"+id1).append(p);
        id1++;
        $("#input").val("");
    }
    function checkItem(id){
    	var parentId = $("#checkItem"+id).parent().attr('id'); 
    	if ($("#"+parentId).hasClass("checked")==true) 
    	{
    	    if($("#"+parentId).hasClass("completed")==true)
    	    {
                $("#"+parentId).addClass("display");
                $("#"+parentId).removeClass("completed");
    	    }            
    		$("#"+parentId).removeClass("checked");
    		number++;
	    	numberitems(number);
    	}
    	else  
    	{
    		if($("#"+parentId).hasClass("active")==true)
    	    {
                $("#"+parentId).addClass("display");
                $("#"+parentId).removeClass("active");
    	    }
    		$("#"+parentId).addClass("checked");
            number--;
	    	numberitems(number);
    	}
    }
    function deleteItem(id){
    	var parentId = $("#deleteItem"+id).parent().attr('id');
	    	if($("#"+parentId).hasClass("checked")!=true)
	    	{
	    		number--;
	    	    numberitems(number);
	    	}
	    	$("#"+parentId).remove();
        }
    function editContent(id){ 
    	$("#"+id).removeAttr('disabled');
    }
    function submitEdit(id,event){
		if($("#"+id).val().trim()!=""){
	        if (event.keyCode === 13) {
		        $("#"+id).attr('disabled','disabled');
		        alert("Update success");
		    }
		}
		else
		{
			if (event.keyCode === 13) {
		        alert("You must write something");
		    }
		}
    }
	function option(){
		var divnumberitems = $("<div></div>");
	    divnumberitems.attr("id","numberitems");
	    var divoptions=	 $("<div></div>");	    
	    divoptions.attr("id","options");
	    var all = $("<button></button>").text("All");
        var active = $("<button></button>").text("Active");
        var completed = $("<button></button>").text("Completed");
        all.attr("onclick","allItems()");
        active.attr('onclick', "active()");
        completed.attr("onclick","completed()");
        $("#op").append(divnumberitems);
        $("#op").append(divoptions);
        $("#options").append(all);
        $("#options").append(active);
        $("#options").append(completed);
    }
	function allItems(){
		var n = $("#ct").children().length;
	    for (var i = 0; i < n; i++) {
			if($(".result")[i].classList.contains("display")==true)
			{
				$(".result")[i].classList.remove("display");
			}
			if($(".result")[i].classList.contains("active")==true)
			{
				$(".result")[i].classList.remove("active");
			}
			if($(".result")[i].classList.contains("completed")==true)
			{
				$(".result")[i].classList.remove("active");
			}
	    }
	}
	function active(){
		var n = $("#ct").children().length;
    	for (var i = 0; i < n; i++) {
    		if($(".result")[i].classList.contains("checked")==true)
    	    {
    		   $(".result")[i].classList.add("display");
    	    }
    	    else
    	    {
    	       $(".result")[i].classList.add("active");
               $(".result")[i].classList.remove("display");
    	    }
    	}
	}
	function completed(){
		var n = $("#ct").children().length;
		for (var i = 0; i < n; i++) {
			if($(".result")[i].classList.contains("checked")!=true)
			{
				$(".result")[i].classList.add("display");

			}
			else
			{
				$(".result")[i].classList.remove("display");
				$(".result")[i].classList.add("completed");
			}
		}
	}