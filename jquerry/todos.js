	var id1=0;
	var number=0;
	var numberoption=0;
    var task = [];
	$("#erase").click(function(){
       $("#input").val("");
    });
    $("#input").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            if($("#input").val().trim()==""){
            	alert("you must write some thing");
            }
            else
            {
            	if(document.getElementById("ct").classList.contains("allTab"))
            	{
            		itemsList();
            	}
            	else if(document.getElementById("ct").classList.contains("activeTab"))
            	{
            		itemsList();
            		var n = $("#ct").children().length;
            		$(".result")[n-1].classList.add("active");
            		document.getElementById("checkall").classList.remove("hidden");
            	}
            	else if(document.getElementById("ct").classList.contains("completedTab"))
            	{
            		itemsList();
            		var n = $("#ct").children().length;
            		if(document.getElementById("ct").classList.contains("completedTab"))
            		{
            			$(".result")[n-1].classList.add("display");
            		}
            		if(document.getElementById("ct").classList.contains("activeTab"))
            		{
            			$(".result")[n-1].classList.remove("display");
            		}
            		if(document.getElementById("ct").classList.contains("allTab"))
            		{
            			$(".result")[n-1].classList.remove("display");
            		}           		
            	}
		        numberoption++;
		        if (numberoption==1) 
		        {
		        	option();
		        }
		        task[id1] = { "IdItem":id1,
						      "ItemContent":$("#input").val(), 
						      "Status": false };
		        id1++;
		        number++;
		        numberitems(number);
		        $("#input").val("");
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
	                if($(".result")[i].classList.contains("active")==true)
		    	    {
		    	       $(".result")[i].classList.add("display");
		    		   $(".result")[i].classList.remove("active");
		    		   $(".result")[i].classList.add("completed");
		    		   document.getElementById("checkall").classList.add("hidden");
		    	    }
					$(".result")[i].classList.add("checked");
					$(".checkbox")[i].checked=true;
					for(j = 0; j < task.length; j++) {
				        if(task[i].Status == false) {
				            task[i].Status = true;
				        }
	                }
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
	    			if($(".result")[i].classList.contains("completed")==true)
		    	    {
		    		   $(".result")[i].classList.add("display");
		    		   $(".result")[i].classList.remove("completed");
		    		   $(".result")[i].classList.add("active");
		    		   document.getElementById("checkall").classList.add("hidden");
		    	    }
					$(".result")[i].classList.remove("checked");
					$(".checkbox")[i].checked=false;
					for(j = 0; j < task.length; j++) {
				        if(task[i].Status == true) {
				            task[i].Status = false;
				        }
	                }
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
	    	for(i = 0; i < task.length; i++) {
		        if(task[i].IdItem == parentId) {
		            task[i].Status = false;
		        }
            }
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
	    	for(i = 0; i < task.length; i++) {
		        if(task[i].IdItem == parentId) {
		            task[i].Status = true;
		        }
            }
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
	    	task = task.filter(function( obj ) {
			  return obj.IdItem != parentId;
			});
        }
    function editContent(id){ 
    	$("#"+id).attr('contenteditable','');
    }
    function submitEdit(id,event){
		if($("#"+id).text().trim()!=""){
	        if (event.keyCode === 13) {
		        $("#"+id).removeAttr('contenteditable');
		        alert("Update success");
		        for(i = 0; i < task.length; i++) {
			        if(task[i].IdItem ==id.slice(5)) {
			            task[i].ItemContent = $("#"+id).text();
			        }
                }
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
        var exportItems = $("<button></button>").text("Export");
        all.attr("onclick","allItems()");
        active.attr('onclick', "active()");
        completed.attr("onclick","completed()");
        clearcompleted.attr("onclick","clearcompleted()");
        exportItems.attr("onclick","downloadContent()");
        $("#op").append(divnumberitems);
        $("#op").append(divoptions);
        $("#options").append(all);
        $("#options").append(active);
        $("#options").append(completed);
        $("#options").append(clearcompleted);
        $("#options").append(exportItems);
    }
	function allItems(){
		$(".headline")[0].innerHTML="todos-all";
		document.getElementById("ct").classList.remove("activeTab");
		document.getElementById("ct").classList.remove("completedTab");
		document.getElementById("ct").classList.add("allTab");
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
	    document.getElementById("checkall").classList.remove("hidden");
	}
	function active(){
		$(".headline")[0].innerHTML="todos-active";
		document.getElementById("ct").classList.add("activeTab");
		document.getElementById("ct").classList.remove("completedTab");
		document.getElementById("ct").classList.remove("allTab");
		var numberactive=0;
		var n = $("#ct").children().length;
    	for (var i = 0; i < n; i++) {
    		if($(".result")[i].classList.contains("checked")==true)
    	    {
    		   $(".result")[i].classList.add("display");
    	    }
    	    else
    	    {
    	       numberactive++;
    	       $(".result")[i].classList.add("active");
               $(".result")[i].classList.remove("display");
    	    }
    	}
    	if(numberactive>0)
        {
       	  document.getElementById("checkall").classList.remove("hidden");
        }
        else
        {
          document.getElementById("checkall").classList.add("hidden");
        }
	}
	function completed(){
		$(".headline")[0].innerHTML="todos-completed";
		document.getElementById("ct").classList.add("completedTab");
		document.getElementById("ct").classList.remove("allTab");
		document.getElementById("ct").classList.remove("activeTab");
		var numbercompleted=0;
		var n = $("#ct").children().length;
		for (var i = 0; i < n; i++) {
			if($(".result")[i].classList.contains("checked")!=true)
			{
				$(".result")[i].classList.add("display");

			}
			else
			{
				numbercompleted++;
				$(".result")[i].classList.remove("display");
				$(".result")[i].classList.add("completed");
			}
		}
		if(numbercompleted>0)
        {
       	 document.getElementById("checkall").classList.remove("hidden");
        }
        else
        {
         document.getElementById("checkall").classList.add("hidden");
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
    	task = task.filter(function( obj ) {
			  return obj.Status != true;
			});

	}
	function Contentdownload(name, content) {
	  var atag = document.createElement("a");
	  var file = new Blob([content], {type: 'text/plain'});
	  atag.href = URL.createObjectURL(file);
	  atag.download = name;
	  atag.click();
	}
	function downloadContent(name, content) {
	  var str = JSON.stringify(task);
	  Contentdownload("content.txt",str);
	  console.log(task);
	}
    fileInput=document.getElementById('file');
    fileInput.addEventListener('change', function () {
        var reader = new FileReader();
        reader.onload = function () {
            var dataImport=JSON.parse(reader.result);
            var n=task.length;
            for(i = 0; i < dataImport.length; i++) {
            task[n+i]={ "IdItem":id1,
						"ItemContent":dataImport[i].ItemContent, 
						"Status": dataImport[i].Status };	
		    var div = $("<div></div>");
		    div.addClass("result");
		    div.attr("id",id1);
		    var inputcheck= $("<input>");
		    inputcheck.attr("type", "checkbox");
		    inputcheck.addClass("checkbox");
		    inputcheck.checked=dataImport[i].Status;		    
		    inputcheck.attr("onclick", "checkItem("+id1+")");
		    inputcheck.attr("id", "checkItem"+id1);
		    var resultcontent = $("<div></div>").text(dataImport[i].ItemContent);
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
		    numberoption++;
	        if (numberoption==1) 
	        {
	        	option();
	        }
		    if(inputcheck.checked==true){
	           div.addClass("checked");
	           inputcheck.attr("checked", "checked");
		    }
		    else
		    {
		    	number++;
	    	    numberitems(number);
		    } 
		    id1++;
            }
        };
        reader.readAsBinaryString(fileInput.files[0]);
    });


