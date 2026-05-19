function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      /// EXAM: COMPLÉTEZ LE CODE ICI !
      console.log(data);


      const headerNomJournal = document.querySelector('header #nom-journal');
      const headerPhraseAccroche = document.querySelector('header #phrase-accroche');

      const themesNav = document.querySelector('#themes-nav');
      const btnTous = document.createElement('button');
      const themes = ['Collection', 'Restauration', 'Top 10', 'Customisation', 'Événements'];

      const heroPrincipal = document.querySelector('#article-principal')
      

      const sectionArticles = document.querySelector('.articles-section')
      const sectionThemes = document.querySelector('.themes-section')
      const sectionAuteurs = document.querySelector('.authors-section')

      

      // TODO 1: REMPLIR LE HEADER

      headerNomJournal.textContent = data.journal.nomJournal
      headerPhraseAccroche.textContent = data.journal.phraseAccroche


      // TODO 2: REMPLIR LA NAVIGATION

      let html = `<button class="nav-theme-btn active">Tous</button>`;

      themes.forEach(function(theme) {
          html += `<button class="nav-theme-btn">${theme}</button>`;
        });

        themesNav.innerHTML = html;



      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

       let articlePrincipal = `<div class= "article-principal">
                                    <img id="hero-image" src="${data.journal.articlePrincipal.image}">
                                    <div id="hero-titre">
                                        <h1>${data.journal.articlePrincipal.titre}</h1>
                                    </div>
                                      <div class="theme-badge">
                                        ${data.journal.articlePrincipal.theme}
                                      </div>
                                    <div id="hero-description">
                                        <p>${data.journal.articlePrincipal.description}</p>
                                    </div>
                                    <div class="date">
                                      <p>${data.journal.articlePrincipal.date }</p>
                                    </div>
                              </div>`;

      
         heroPrincipal.innerHTML = articlePrincipal;


      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
        
   
    function createCard(article){

      let image = article.image;
      let badge = article.theme;
      let titre= article.titre;
      let date= article.date;

      let carte = `<div class="article-card">
                      <img src="${image}" alt="">
                      <span class = "theme-badge">
                        ${badge}
                      </span>
                          <div class="content">
                            <h3>${titre}</h3>
                            <p>${date}</p>
                          </div>
                    </div>`;

      sectionArticles.insertAdjacentHTML("beforeend", carte);
    }

   
      // TODO 5: REMPLIR LES THEMES

      // TODO 6: REMPLIR LES AUTEURS

      // TODO 7: REMPLIR LE CALL TO ACTION

      /// FIN DU CODE

      // BONUS 1 : Alert sur le bouton CTA

      // BONUS 2 : Filtrage par thème

      // BONUS 3 : Tri par popularité
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();


// let Heroimg = data.articlePrincipal.image
//     let HeroTitre = data.articlePrincipal.titre
 //     let HeroDescription = data.articlePrincipal.description 
   //   let Herodate = data.articlePrincipal.date 
     // let Herotheme = data.articlePrincipal.theme  


         let articlePrincipal = `<div class= "article-principal">
                                    <img id="hero-image" src="${data.articlePrincipal.image}">
                                    <div id="hero-titre">
                                        <h1>${data.articlePrincipal.titre}</h1>
                                    </div>
                                      <div class="theme-badge">
                                        ${data.articlePrincipal.theme}
                                      </div>
                                    <div id="hero-description">
                                        <p>${data.articlePrincipal.description}</p>
                                    </div>
                                    <div class="date">
                                      <p>${data.articlePrincipal.date }</p>
                                    </div>
                              </div>`;

      
         heroPrincipal.innerHTML = articlePrincipal;