	$(function(){
		
		let items;	//alle mögliche items für memory spiel 
		let itemimages = -1; //images in one item
		
		/*einstellung für das spiel*/
		
		$('#time').hide();
		$('#menu').hide();
		
		$.getJSON('extern/memoryBilder.txt')
						
		.done(function(data){	//bei erfolgreicher anforderung der daten

			items = data;
			$.each(items,function(i){
				$('#play').before('<button id="'+items[i].title+'">' +items[i].title+ '</button>');
				$('#' + items[i].title).click(function(){
					ladeImages(i);
				});		

			});
			$('#' + items[0].title).trigger('click');//beginnt von erstes item
			
			$('#play').click(function(){		//submit the selected item and begin the game

				if(itemimages != -1)	//no selected item 
					startMemorySpiel(itemimages);
				else //select item from function ladeImages
					alert('select an item at first');
			});
			
			$('#zuStart').on('click',function(){	
				$('#game').hide();
				$('#startSeite').show();
				$('#menu').hide();
			});	

		})
			
		.fail(function(){	//bei fehlgeschlagner anforderung
			alert('sorry, konnte daten nicht laden');
		});
		

		function ladeImages( index ){
			
				let url = items[index].dataPath;		//extern/mario.txt
				
					
				$.getJSON(url)
				.done(function(data){
					itemimages = data;
					$('#gallerie').empty();		//leer always content
					$.each(data,function(i){		//für jden index aus mario.txt
						let bild = data[i].img;  
						$('<img>').attr('src',bild).appendTo('#gallerie').hide().fadeIn();
						
					});
				})
				.fail(function(){
					alert('die datei ' + items[index].title + 'konnte nicht geladen werden');
				});
				
		}
	})