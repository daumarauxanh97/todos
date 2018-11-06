	var id1=0;
	var number=0;
	var numberoption=0;
	var input = document.getElementById("input");
	var erase= document.getElementById("erase");
	var checkall = document.getElementById("checkall");
	erase.addEventListener("click", function() {
        input.value="";
	});
	input.addEventListener("keypress", function(event) {
		if(input.value.trim()!=""){
	        if (event.keyCode === 13) {
		        myFunction();
		        numberoption++;
		        if (numberoption==1) 
		        {
		        	option();
		        }
		        number++;
		        nb(number);
		    }
		}
		else
		{
			if (event.keyCode === 13) {
		        alert("You must write something");
		    }
		}
	});
	checkall.addEventListener("click", function(event) {
	    var n = document.getElementById("ct").childElementCount;
	    if(number!=0)
	    {
	    	for (var i = 0; i < n; i++) {
	    		if(document.getElementsByClassName("result")[i].classList.contains("checked")==false)
	    		{
	  
					document.getElementsByClassName("result")[i].classList.add("checked");
					document.getElementsByTagName("input")[i+1].checked=true;
					number--;
	    	        nb(number);
	    		}
	    	}
	    }
	    else
	    {
	    	for (var i = 0; i < n; i++) {
	    		if(document.getElementsByClassName("result")[i].classList.contains("checked")==true)
	    		{  
					document.getElementsByClassName("result")[i].classList.remove("checked");
					document.getElementsByTagName("input")[i+1].checked=false;
					number++;
	    	        nb(number);
	    		}
	    	}
	    }
	});
	function nb(number)
	{
		if(number<=1)
	        {
	        	numberitems.innerHTML=number+" item left";
	        }
	        else 
	        {
	        	numberitems.innerHTML=number+" items left";
	        }
	}
	function myFunction() {
	    var div = document.createElement("div");
	    div.setAttribute("class","result");
	    div.setAttribute("id",id1);
	    var inputcheck= document.createElement("input");
	    inputcheck.setAttribute("type", "checkbox");
	    inputcheck.setAttribute("onclick", "checkbox("+id1+")");
	    var resultcontent = document.createElement("input");
	    resultcontent.setAttribute("type","text");
	    resultcontent.setAttribute("class","result-content input1");
	    resultcontent.setAttribute("id","input"+id1);
	    resultcontent.setAttribute("onkeypress","submitEdit('input"+id1+"',event)");
	    resultcontent.value=input.value;
	    resultcontent.disabled=true;
	    div.setAttribute("ondblclick","editContent('input"+id1+"')");
	    var p= document.createElement("p");
	    p.setAttribute("onclick", "deleteItem("+id1+")");
	    var x = document.createTextNode("x");
	    p.appendChild(x);
	    document.getElementById("ct").appendChild(div);	  
	    document.getElementById(id1).appendChild(inputcheck);
	    document.getElementById(id1).appendChild(resultcontent);
	    document.getElementById(id1).appendChild(p);
	    id1++;
        input.value="";       
    }
    function checkbox(id){
    	var checked = document.getElementById(id);
            checked.classList.contains("checked");
	    	if (checked.classList.contains("checked")==true) 
	    	{
	    	    if(checked.classList.contains("completed")==true)
	    	    {
                    checked.classList.add("display");
                    checked.classList.remove("completed");
	    	    }            
	    		document.getElementById(id).classList.remove("checked");
	    		number++;
		    	nb(number);
	    	}
	    	else  
	    	{
	    		if(checked.classList.contains("active")==true)
	    	    {
                    checked.classList.add("display");
                    checked.classList.remove("active");
	    	    }
	    		document.getElementById(id).classList.add("checked");
                number--;
		    	nb(number);
	    	}
    }
    function editContent(id){
        var edit = document.getElementById(id);
        edit.disabled=false;
    }
    function submitEdit(id,event){
    	var submit=document.getElementById(id);
		if(submit.value.trim()!=""){
	        if (event.keyCode === 13) {
		        submit.disabled = true;
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
    function deleteItem(id){
    	var z=document.getElementById(id);
	    	z.parentNode.removeChild(z);
	    	z.classList.contains("checked");
	    	if(z.classList.contains("checked")==false)
	    	{
	    		number--;
	    	    nb(number);
	    	}
    }
	function option(){
		var divnumberitems = document.createElement("div");
	    divnumberitems.setAttribute("id","numberitems");
	    var numberitems= document.getElementById("numberitems");
	    var divoptions=	 document.createElement("div"); 
	    divoptions.setAttribute("id","options");
	    var all = document.createElement("button");
        var active = document.createElement("button");
        var completed = document.createElement("button");
        var all1 = document.createTextNode("All");
        var active1 = document.createTextNode("Active");
        var completed1 = document.createTextNode("Completed");
        all.setAttribute("onclick","allItems()");
        active.setAttribute("onclick","active()");
        completed.setAttribute("onclick","completed()");
        all.appendChild(all1);
        active.appendChild(active1);
        completed.appendChild(completed1);
        document.getElementById("op").appendChild(divnumberitems);
        document.getElementById("op").appendChild(divoptions);
        document.getElementById("options").appendChild(all);
        document.getElementById("options").appendChild(active);
        document.getElementById("options").appendChild(completed);
	}
	function allItems(){
		var n = document.getElementById("ct").childElementCount;
    	for (var i = 0; i < n; i++) {
    		if(document.getElementsByClassName("result")[i].classList.contains("display")==true)
    	    {
    		   document.getElementsByClassName("result")[i].classList.remove("display");
    	    }
    	    if(document.getElementsByClassName("result")[i].classList.contains("active")==true)
    	    {
    		   document.getElementsByClassName("result")[i].classList.remove("active");
    	    }
    	    if(document.getElementsByClassName("result")[i].classList.contains("completed")==true)
    	    {
    		   document.getElementsByClassName("result")[i].classList.remove("active");
    	    }
    	}
	}
	function active(){
		var n = document.getElementById("ct").childElementCount;
    	for (var i = 0; i < n; i++) {
    		if(document.getElementsByClassName("result")[i].classList.contains("checked")==true)
    	    {
    		   document.getElementsByClassName("result")[i].classList.add("display");
    	    }
    	    else
    	    {
    	       document.getElementsByClassName("result")[i].classList.add("active");
               document.getElementsByClassName("result")[i].classList.remove("display");
    	    }
    	}
	}
	function completed(){
		var n = document.getElementById("ct").childElementCount;
        for (var i = 0; i < n; i++) {
    		if(document.getElementsByClassName("result")[i].classList.contains("checked")!=true)
    	    {
    		   document.getElementsByClassName("result")[i].classList.add("display");
    		   
    	    }
    	    else
    	    {
               document.getElementsByClassName("result")[i].classList.remove("display");
               document.getElementsByClassName("result")[i].classList.add("completed");
    	    }
    	}
	}