$.fn.inner_float = function(obj) {
	console.log(obj);
	var child_id=$(this).attr("id");
	var parent_height=$(this).parent().height();
	var child_height=$(this).height();
	var child_top=$(this).offset().top;
	var parent_top=$(this).parent().offset().top;
	if(obj.margintop)
	{
        var margintop=parseInt(obj.margintop);
        if(margintop>parent_height-child_height)
		{
			$(this).parent().css("position",'relative');
	        $(this).css("position",'absolute');
			$(this).css("top",parent_height-child_height);
		}
		else
		{
            $(this).parent().css("position",'relative');
	        $(this).css("position",'absolute');
	        $(this).css("top",margintop);
		}
	}
	else
	{
		var margintop=0;
	}
	if(obj.marginbottom)
	{
        var marginbottom=parseInt(obj.marginbottom);
	}
	else
	{
		var marginbottom=0;
	}

	if(obj.top)
	{
        var top=parseInt(obj.top);
	}
	var line1=child_top+margintop-top;
	var line2=parent_top+parent_height-child_height-marginbottom-top;
    $(window).scroll(function() {scroll()});
    function scroll() {
    console.log(obj,this,this.parent);
    console.log(parent_height);
	console.log(child_height);
	console.log(child_top);
	console.log(parent_top);
    	var scrollTop=document.documentElement.scrollTop;
    	if(scrollTop>=line1 && scrollTop <=line2){
    		$("#"+child_id).parent().css("position","");
	        $("#"+child_id).css("position","fixed").css("top",top).css("bottom","");
    	}
    	else if(scrollTop<line1){
    	    $("#"+child_id).parent().css("position","relative");
            $("#"+child_id).css("position","absolute").css("bottom","").css("top",margintop);
    	}
    	else if(scrollTop>line2){
    		$("#"+child_id).css("position","absolute").css("bottom",marginbottom).css("top","");
	        $("#"+child_id).parent().css("position","relative");
    	}
    }
}
// scrollTop >= parent_height-1.00001*margintop
/* Call your plugin */
$(document).ready(function(){

	    $('#almost-show2').inner_float({
	    	top:"10px",
	    	margintop:"50px",
	    	marginbottom:"50px"
	});
	    $('#almost-show').inner_float({
	    	top:"10px",
	    	margintop:"20px",
	    	marginbottom:"20px"
	});
});
