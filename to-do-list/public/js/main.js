$(function(){


	if($('body').hasClass('home')){
		$.ajax({
			url: '/tasks',
			method: 'GET',
			dataType: 'json',
			success: function(res){
				updateTasks(res);	
			}
		});
	}

	$('#addTasks').on('submit', function(e){
		e.preventDefault();
		var taskTitle  = $('[name=title]').val();
		var taskDescription = $('[name=description]').val();

		$.ajax({
			url: '/tasks',
			method: 'POST',
			dataType: 'json',
			data: {
				title: taskTitle, 
				description: taskDescription,
			},
			success: function(res){
				updateTasks(res);
				$('form')[0].reset();		
			}
		});	
	});

	$('body').on('click','.remove-task a', function(e){
		e.preventDefault();
		var title  = $(this).data('title');
		var url = '/tasks/'+title;
		
		$.ajax({
			url: url,
			type: 'DELETE',
			success: function(res){
				updateTasks(res);		
			}
		});	
	});

});

function updateTasks(tasks){
	var tasksContainer = $('.tasks');
	tasksContainer.empty();
	var str = '';
	if(tasks.length > 0){
		tasks.forEach(function(v, i){
			str+= '<div class="task">'+
						'<div class="sr">'+
							'<span>'+ (1+i) +'</span>'+
						'</div>'+
						'<div class="task-details">'+
							'<span class="task-title">'+ v.title +'</span>'+
							'<span class="task-description">'+ v.description +'</span>'+
						'</div>'+
						'<div class="remove-task">'+
							'<a href="#" data-title ="'+ v.title +'">-</a>'+
						'</div>'+
					'</div>';
		});
	}else{
		str = '<div class="no-tasks">No Tasks Available</div>'	
	}
	tasksContainer.append(str);
}