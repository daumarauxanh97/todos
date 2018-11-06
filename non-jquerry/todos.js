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
	                if(document.getElementsByClassName("result")[i].classList.contains("active")==true)
		    	    {
		    	       document.getElementsByClassName("result")[i].classList.add("display");
		    		   document.getElementsByClassName("result")[i].classList.remove("active");
		    		   document.getElementsByClassName("result")[i].classList.add("completed");
		    		   document.getElementById("checkall").classList.add("hidden");
		    	    }
		    	       document.getElementsByClassName("result")[i].classList.add("checked");
					   document.getElementsByClassName("checkbox")[i].checked=true;
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
	    			if(document.getElementsByClassName("result")[i].classList.contains("completed")==true)
		    	    {
		    		   document.getElementsByClassName("result")[i].classList.add("display");
		    		   document.getElementsByClassName("result")[i].classList.remove("completed");
		    		   document.getElementsByClassName("result")[i].classList.add("active");
		    		   document.getElementById("checkall").classList.add("hidden");
		    	    }
		    	    document.getElementsByClassName("result")[i].classList.remove("checked");
					document.getElementsByClassName("checkbox")[i].checked=false;
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
	    inputcheck.setAttribute("class", "checkbox");
	    inputcheck.setAttribute("onclick", "checkbox("+id1+")");
	    var resultcontent = document.createElement("div");
	    resultcontent.setAttribute("class","result-content ");
	    resultcontent.setAttribute("id","input"+id1);
	    resultcontent.setAttribute("onkeypress","submitEdit('input"+id1+"',event)");
	    var content= document.createTextNode(input.value);
	    resultcontent.appendChild(content);
	    resultcontent.setAttribute("ondblclick","editContent('input"+id1+"')");
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
		    	checked.checked=false;
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
		    	checked.checked=true;
	    	}
    }
    function editContent(id){
        var edit = document.getElementById(id);
        edit.setAttribute('contenteditable','');
    }
    function submitEdit(id,event){
    	var submit=document.getElementById(id);
		if(submit.innerText.trim()!=""){
	        if (event.keyCode === 13) {
		        submit.removeAttribute('contenteditable');
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
        var clearcompleted = document.createElement("button");
        var all1 = document.createTextNode("All");
        var active1 = document.createTextNode("Active");
        var completed1 = document.createTextNode("Completed");
        var clearcompleted1 = document.createTextNode("Clear completed");
        all.setAttribute("onclick","allItems()");
        active.setAttribute("onclick","active()");
        completed.setAttribute("onclick","completed()");
        clearcompleted.setAttribute("onclick","clearcompleted()");
        all.appendChild(all1);
        active.appendChild(active1);
        completed.appendChild(completed1);
        clearcompleted.appendChild(clearcompleted1);
        document.getElementById("op").appendChild(divnumberitems);
        document.getElementById("op").appendChild(divoptions);
        document.getElementById("options").appendChild(all);
        document.getElementById("options").appendChild(active);
        document.getElementById("options").appendChild(completed);
        document.getElementById("options").appendChild(clearcompleted);
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
    	document.getElementById("checkall").classList.remove("hidden");
	}
	function active(){
		var numberactive=0;
		var n = document.getElementById("ct").childElementCount;
    	for (var i = 0; i < n; i++) {
    		if(document.getElementsByClassName("result")[i].classList.contains("checked")==true)
    	    {
    		   document.getElementsByClassName("result")[i].classList.add("display");
    	    }
    	    else
    	    {
    	       document.getElementsByClassName("result")[i].classList.add("active");
               numberactive++;
               document.getElementsByClassName("result")[i].classList.remove("display");
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
		var numbercompleted=0;
		var n = document.getElementById("ct").childElementCount;
        for (var i = 0; i < n; i++) {
    		if(document.getElementsByClassName("result")[i].classList.contains("checked")!=true)
    	    {
    		   document.getElementsByClassName("result")[i].classList.add("display");
    		   
    	    }
    	    else
    	    {
    	       numbercompleted++;
               document.getElementsByClassName("result")[i].classList.remove("display");
               document.getElementsByClassName("result")[i].classList.add("completed");
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
		var n = document.getElementById("ct").childElementCount;
		for (var i = n-1; i >=0 ; i--) {
    		if(document.getElementsByClassName("result")[i].classList.contains("checked")==true)
    	    {
    		   document.getElementsByClassName("result")[i].parentNode.removeChild(document.getElementsByClassName("result")[i]);    		   
    	    }
    	}
	}