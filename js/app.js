$(function(){
	
	var atual = -1;
	var maximo = $('.box-single').length - 1;
	var timer;
	var animacaoDelay = 1;

	executarAnimacao();
	function executarAnimacao(){
		$('.box-single').hide();
		timer = setInterval(logicaAnimacao,animacaoDelay*1000);

		function logicaAnimacao(){
			atual++;
			if(atual > maximo){

				clearInterval(timer);
				return false;
			}

			//alert('chamando intervalo');

			$('.box-single').eq(atual).fadeIn();

		};
		


	};
	$(".open").on("click", function(e){
		e.preventDefault();
		Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Sua Mensagem foi enviada com sucesso!',
		showConfirmButton: false,
		timer: 1500
		})
		resetarFormulario();
	  });
	  function resetarFormulario(){
		  let email = document.getElementById('email')
		  let nome = document.getElementById('nome')
		  let mensagem = document.getElementById('mensagem')

		  email.value = '';
		  nome.value = '';
		  mensagem.value = '';
	  };
	 
});
const burger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.mobile-nav ul li');
const navBg = document.querySelector('.bg-nav');

burger.addEventListener('click', () =>{
burger.classList.toggle('is-active');
});	

function showNav(){
burger.addEventListener('click',()=>{
	for(i = 0; i < navLinks.length; i++){
		navLinks[i].classList.toggle('nav-active');
	}
	
	navBg.classList.toggle('bg-active');
	navMobile.classList.toggle('nav-active');		
			
});

};
showNav();
navBg.addEventListener('click',()=>{
	burger.classList.remove('is-active');
	navMobile.classList.remove('nav-active');	
	navBg.classList.remove('bg-active');
})