function toggle() {
	var ele = document.getElementById("text1");
	var text = document.getElementById("displayText");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "+ Information";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "- Information";
	}
}

//This is the dropdown menu.
$(document).ready(function(){

        $('.dropdown').each(function() {
          var $dropdown = $(this);

          $(".dropdown-link", $dropdown).click(function(e) {
            e.preventDefault();
            $div = $(".submenu", $dropdown);
            $div.toggle();
            $(".submenu").not($div).hide();
            return false;
          });

        });

        $('html').click(function(){
          $(".submenu").hide();
        });

      });

			var menu=document.getElementById("menu");
			function appear(){
				if (menu.style.display=="none"){
				menu.style.display="block";
				menu.style.zIndex="2000";
				console.log("hello");}
				else {menu.style.display="none";}
			}
