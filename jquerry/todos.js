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
            	itemsList();
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
					$(".checkbox")[i].checked=true;
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
					$(".checkbox")[i].checked=false;
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
	function itemsList() {
		// var html="<div class='result' id='"+id1+"'>"+
		// +"<input type='checkbox' class='checkbox' onclick='checkItem("+id1+")' id='checkItem"+id1+"'>"+
		// +"<div class='result-content' id='input"+id1+"' ondblclick='editContent('input"+id1+"')' "+
		// +"onkeypress='submitEdit('input"+id1+"',event)'>"+$("#input").val()+"</div>"+
		// +"<p id='deleteItem"+id1+"' onclick='deleteItem("+id1+")'>X<p>"
		// +"</div>";
	    var div = $("<div></div>");
	    div.addClass("result");
	    div.attr("id",id1);
	    var inputcheck= $("<input>");
	    inputcheck.attr("type", "checkbox");
	    inputcheck.addClass("checkbox");
	    inputcheck.attr("onclick", "checkItem("+id1+")");
	    inputcheck.attr("id", "checkItem"+id1);
	    var resultcontent = $("<div></div>").text($("#input").val());
	    resultcontent.addClass("result-content ");
	    resultcontent.attr("id", "input"+id1);
	    resultcontent.attr("onkeypress", "submitEdit('input"+id1+"',event)");
	    resultcontent.attr("ondblclick", "editContent('input"+id1+"')");
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
	    	$("#checkItem"+id).removeAttr("checked");
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
	    	$("#checkItem"+id).attr("checked","checked");
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
    	$("#"+id).attr('contenteditable','');
    }
    function submitEdit(id,event){
		if($("#"+id).text().trim()!=""){
	        if (event.keyCode === 13) {
		        $("#"+id).removeAttr('contenteditable');
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
        var clearcompleted = $("<button></button>").text("Clear completed");
        all.attr("onclick","allItems()");
        active.attr('onclick', "active()");
        completed.attr("onclick","completed()");
        clearcompleted.attr("onclick","clearcompleted()");
        $("#op").append(divnumberitems);
        $("#op").append(divoptions);
        $("#options").append(all);
        $("#options").append(active);
        $("#options").append(completed);
        $("#options").append(clearcompleted);
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
	function clearcompleted(){
		var n = $("#ct").children().length;
		for (var i = n-1; i >=0 ; i--) {
    		if($(".result")[i].classList.contains("checked")==true)
    	    {
    		   $(".result")[i].parentNode.removeChild(document.getElementsByClassName("result")[i]);    		   
    	    }
    	}
	}