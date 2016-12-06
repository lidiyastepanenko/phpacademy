	 window.onload = function () {
            document.getElementById("contactname");
            var all = document.getElementById("all");
            contactname.onclick = function(){
            	var pattern = /[а-яА-Я]+ [а-яА-Я]+ [а-яА-Я]+/;
        		var text = input;
        		if (pattern.test(input)) {
		            document.write("ФИО" + input+ "<br />");
		        }
		        else {
		            function PropertyError(input) {
					  Error.call(this, property) ;
					  this.name = "PropertyError";
		        }
		        		document.write(text + " -> " + pattern.test(text) + "<br />");
		     };
				};
			};
 