 $.get('https://raw.githubusercontent.com/Ustintys/Ustintys.github.io/master/XML.xml')
            .done(function (data) {
                data = $.parseXML(data);
                 $(data).find("name1").each(
                    function (index, element) {
                    	console.log($(element).find("name1").context.innerHTML);
                        $(".middle-info-name").html($(element).find("name1").context.innerHTML);

                    })})
