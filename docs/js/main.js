$(document).ready(function() {
'use strict';
//slide2id - плавная прокрутка по ссылкам внутри страницы
$("a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	highlightSelector:"a",
});


$('#portfolio-project').mixItUp();
// функция для вложения одного файла js  в другой
function dynamicallyLoadScript(url) {
    	var script = document.createElement("script");  // Создаем элемент script
    	script.src = url;  // задаем значение src 
    	document.body.appendChild(script);  // вставляем script перед </body>
    }
  dynamicallyLoadScript("js/_navigation.js"); // вызываем функцию 


// FansyBox
$('[data-fancybox="gallery"]').fancybox({
    // helpers : {
    // 	overlay: {
    // 		Locked:false
    // 	}
    // }
    transitionEffect: "circular",
});

  // Валидация формы
 
$('#contact-form').validate({
	rules: {
		name:{
			required:true
		},
		email:{
			required:true
		},
		message:{
			required:true
		},
	},
	messages : {
		name: {
			required: "Пожалуйста, введите своё имя"
		},
		email: {
			required: "Пожалуйста, введите свой Email",
			email:"Пожалуйста, введите Email формата anonimous@gmail.com"
		},
		message: {
			required: "Пожалуйста, введите своё сообщение"
		}
	},
	submitHandler: function(form) {
		ajaxFormSubmit();
	}
});

// Функция AJAX запрса на сервер
	function ajaxFormSubmit(){
		var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function(html){
				$("#contact-form").slideUp(800);
				$("#answer").html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false; 
	}



});