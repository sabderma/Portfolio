document.addEventListener("DOMContentLoaded", function () {
	setTimeout(() => {
		document.getElementById("loader").style.display = "none"; // Masque le loader
		document.getElementById("main-content").classList.remove("hidden"); // Affiche le contenu
	}, 2000); // Temps en millisecondes (2 secondes)
});
	
	
	let href_scrolls=document.querySelectorAll("[data-nw-href]")
	for(let href_scroll of href_scrolls)
	{
		let tempTarget=document.querySelector(href_scroll.getAttribute("data-nw-href"))
		href_scroll.addEventListener("click",()=>{
			tempTarget.scrollIntoView(true)
		})
	}
/*-----------------------------------------------*/
	let js_show_btns=document.querySelectorAll(".js_show_btn")

	for(let js_show_btn of js_show_btns)
	{
		js_show_btn.addEventListener("click", function(){
			
			let idPTarget = js_show_btn.getAttribute("data-nw-id-target")
			let groupBtns=js_show_btn.getAttribute("data-nw-classGroup")
			let PTargets = document.querySelectorAll("."+groupBtns)

			for(let p of PTargets)
			{
				p.classList.add("hidden")
			}

			document.querySelector("#"+idPTarget).classList.remove("hidden")

			let btns=document.querySelectorAll("[data-nw-classGroup='"+groupBtns+"']")

			for(let btn of btns)
			{
				btn.classList.remove('selected_btn')
			}

			js_show_btn.classList.add('selected_btn')

		})
	}

/*toggle btn*/
    
	let progressContainers=document.querySelectorAll('.progressContainer')


	for(let progressContainer of progressContainers)
	{
		let progressLabel=progressContainer.querySelector(".progressLabel")
		let progress=progressContainer.querySelector(".progress")

		let progressBar=progressContainer.querySelector('.progress-bar')
		let width=parseInt(progressBar.innerText)
		progressBar.setAttribute("aria-valuenow",width) //accessibility	

		progress.classList.add("noOpacity")

		progressContainer.addEventListener('mouseenter',()=>{
			progressLabel.classList.add('noOpacity')
			progress.classList.remove("noOpacity")

			progressBar.style.width=width+"%"
		})
		progressContainer.addEventListener('mouseleave',()=>{
			progressLabel.classList.remove('noOpacity')
			progress.classList.add("noOpacity")

			progressBar.style.width=0
		})

	}