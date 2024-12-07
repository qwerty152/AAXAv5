const animItems = document.querySelectorAll('.anim-items');  

if (animItems.length > 0) {  
   window.addEventListener('scroll', animOnScroll);  
   function animOnScroll() {  
      for (let index = 0; index < animItems.length; index++) {  
         const animItem = animItems[index];  
         const animItemHeight = animItem.offsetHeight;  
         const animItemOffset = offset(animItem).top;  
         const animStart = 4;  

         let animItemPoint = window.innerHeight - animItemHeight / animStart; 
         if (animItemHeight > window.innerHeight) {  
            animItemPoint = window.innerHeight - window.innerHeight / animStart;  
         }  

         if (( pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {  
            animItem.classList.add('active');  
         } else {  
            animItem.classList.remove('active');  
         }  
   }  
   }  
	function offset(el) {  
		const rect = el.getBoundingClientRect(),  
			scrollLeft = pageYOffset || document.documentElement.scrollLeft,  
			scrollTop = pageYOffset || document.documentElement.scrollTop;  
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll()
}

// document.addEventListener("DOMContentLoaded", function() {  
// 	const menuItems = document.querySelectorAll('.menu__nav a');  
// 	if (menuItems.length > 0) {  
// 		 menuItems[0].classList.add('active__menu'); // Добавляем класс для выделения  
// 	}  
// });  

// document.addEventListener("DOMContentLoaded", function() {  
// 	const menuItems = document.querySelectorAll('.menu_nav a'); // Селектор для меню  
// 	const sections = document.querySelectorAll('section'); // Селектор для секций  

// 	// Проверка существования элементов  
// 	if (menuItems.length === 0 || sections.length === 0) {  
// 		 console.error('Menu items or sections not found');  
// 		 return; // Выход, если элементы не найдены  
// 	}  

// 	// Функция для обновления активного пункта меню  
// 	function updateActiveMenu() {  
// 		 let scrollPos = window.scrollY + window.innerHeight / 2; // Позиция прокрутки  

// 		 sections.forEach((section, index) => {  
// 			  const sectionTop = section.offsetTop;  
// 			  const sectionHeight = section.offsetHeight;  

// 			  // Проверка, если секция находится в пределах видимости  
// 			  if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {  
// 					menuItems.forEach(item => item.classList.remove('active_menu')); // Сброс всех активных классов  
// 					menuItems[index].classList.add('active_menu'); // Добавляем активный класс к текущему элементу  
// 			  }  
// 		 });  
// 	}  

// 	// Инициализация при загрузке страницы: активируем первый пункт меню  
// 	menuItems[0].classList.add('active_menu'); // Устанавливаем активный класс на первый элемент  

// 	// Слушатель прокрутки  
// 	window.addEventListener('scroll', updateActiveMenu);  

// 	// Инициализация при загрузке страницы  
// 	updateActiveMenu();  
// });  

document.addEventListener("DOMContentLoaded", function () {  
	const tabs = document.querySelectorAll('.menu__nav a');  
	const sections = document.querySelectorAll('section');  
 
	// Устанавливаем первую вкладку активной при загрузке страницы  
	tabs[0].classList.add('active__menu');  
 
	window.addEventListener('scroll', function () {  
	  let scrollPosition = window.scrollY;  
 
	  sections.forEach((section, index) => {  
		 if (scrollPosition >= section.offsetTop) {  
			// Убираем активный класс у всех вкладок  
			tabs.forEach(tab => tab.classList.remove('active__menu'));  
			// Устанавливаем активный класс для активной вкладки  
			tabs[index].classList.add('active__menu');  
		 }  
	  });  
	});  
 });  