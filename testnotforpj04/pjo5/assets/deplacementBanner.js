
		let nPage = 1;
		const image= document.querySelector(".banner-img");
		const cg = document.querySelectorAll(".arrow_left");
		const titre = document.querySelectorAll(".titre");
		const cd = document.querySelectorAll(".arrow_right");
		const tableau =
		[
			{
				"image":"slide1.jpg",
				"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
			},
			{
				"image":"slide2.jpg",
				"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
			},
			{
				"image":"slide3.jpg",
				"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
			},
			{
				"image":"slide4.png",
				"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
			}
		]



		cg.forEach(element =>
		{
			element.addEventListener("click", () =>
			{

			console.log("Le bouton gauche a été cliqué !");
			nPage=nPage-1;


			if (nPage<=0)
			{
			nPage=4;
			const newImageSrc = `./assets/images/slideshow/slide${nPage}.png`;
			image.src = newImageSrc;
// 			changement de titre
			const imageActuel = tableau[nPage-1].tagLine; //image actuel prend la bonne tagline
			for (const elem of titre) {
			elem.innerHTML = imageActuel;
			}// on change le titre via une boucle
			}

			else if (nPage<=1)
			{
			nPage=1;
			const newImageSrc = `./assets/images/slideshow/slide${nPage}.jpg`;
			image.src = newImageSrc;
// 			changement de titre
			const imageActuel = tableau[nPage-1].tagLine; //image actuel prend la bonne tagline
			for (const elem of titre) {
			elem.innerHTML = imageActuel;
			}// on change le titre via une boucle
			}


			else
			{
			const newImageSrc = `./assets/images/slideshow/slide${nPage}.jpg`;
			image.src = newImageSrc;
// 			changement de titre
			const imageActuel = tableau[nPage-1].tagLine; //image actuel prend la bonne tagline
			for (const elem of titre) {
			elem.innerHTML = imageActuel;
			}// on change le titre via une boucle
			}
			});
			console.log(nPage);
		});


		cd.forEach(element =>
		{
			element.addEventListener("click", () =>
			{
			console.log("Le bouton de droite a été cliqué !");
			nPage=nPage+1;


			if (nPage>=5)
			{
			nPage=1;
			const newImageSrc = `./assets/images/slideshow/slide${nPage}.jpg`;
			image.src = newImageSrc;
// 			changement de titre
			const imageActuel = tableau[nPage-1].tagLine; //image actuel prend la bonne tagline
			for (const elem of titre) {
			elem.innerHTML = imageActuel;
			}// on change le titre via une boucle
			}

			else if (nPage===4)
			{

			const newImageSrc = `./assets/images/slideshow/slide${nPage}.png`;
			image.src = newImageSrc;
// 			changement de titre
			const imageActuel = tableau[nPage-1].tagLine; //image actuel prend la bonne tagline
			for (const elem of titre) {
			elem.innerHTML = imageActuel;
			}// on change le titre via une boucle
			}


			else if (nPage<=1)
			{
			nPage=1;
			const newImageSrc = `./assets/images/slideshow/slide${nPage}.jpg`;
			image.src = newImageSrc;
// 			changement de titre
			const imageActuel = tableau[nPage-1].tagLine; //image actuel prend la bonne tagline
			for (const elem of titre) {
			elem.innerHTML = imageActuel;
			}// on change le titre via une boucle
			}


			else
			{
			const newImageSrc = `./assets/images/slideshow/slide${nPage}.jpg`;
			image.src = newImageSrc;
// 			changement de titre
			const imageActuel = tableau[nPage-1].tagLine; //image actuel prend la bonne tagline
			for (const elem of titre) {
			elem.innerHTML = imageActuel;
			}// on change le titre via une boucle
			}
			});

		});

