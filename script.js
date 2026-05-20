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
      

      const sectionArticles = document.querySelector('.articles-grid')
      const sectionThemes = document.querySelector('.themes-list')
      const sectionAuteurs = document.querySelector('.authors-list')

      

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

       let articlePrincipal = `
                                    <img id="hero-image" src="${data.journal.articlePrincipal.image}">
                                  <div class="hero-info">
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
                                  </div>
                              `;

      
         heroPrincipal.innerHTML = articlePrincipal;


      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
        
   
    function createCard(article){

      let image = article.image;
      let badge = article.theme;
      let titre= article.titre;
      let date= article.date;

      let carte = `<div class="article-card">
                        <img src="${image}" alt="">
                          <div class="article-content">
                            <span class = "theme-badge">
                              ${badge}
                            </span>  
                                  <h3>${titre}</h3>
                                  <p>${date}</p>
                              <div class="article-author">
                              </div>
                            </div>
                    </div>`;

      sectionArticles.insertAdjacentHTML("beforeend", carte);
    }

    data.journal.articles.forEach(article => {
      createCard(article)
      
    });

    console.log(data.journal.themes);
    
   
      // TODO 5: REMPLIR LES THEMES

      function themesCard(theme){
        let themeNom = theme.nom;
        let themeInfo = theme.description;
        
        let carte =  `<div class="theme-item">
                          <div class="theme-icon">
                          </div>
                          <h3>${themeNom}</h3>
                          <p>${themeInfo}</p>    
                        </div>`;

          sectionThemes.insertAdjacentHTML("beforeend", carte);
          
      }

      data.journal.themes.forEach(theme =>{
            themesCard(theme);
          });
        

      // TODO 6: REMPLIR LES AUTEURS

      function AuthorCard(auteur){
          let auteurPhoto = auteur.photo;
          let prenomAuteur = auteur.prenom;
          let auteurExp = auteur.typeExperience;
          let auteurPresentation = auteur.presentation;

          let carte = `<div class="author-card">
                          <img class="author-image" src="${auteurPhoto}">
                          <h3>${prenomAuteur}</h3>
                            <div class="author-role">
                              <p>${auteurExp}</p>
                            </div>
                            <div class="author-bio">
                              <p>${auteurPresentation}</p>
                            </div>
                        </div>`;

          sectionAuteurs.insertAdjacentHTML("beforeend", carte);
                      
}

    data.journal.auteurs.forEach(auteur => {
      AuthorCard(auteur);
    });

      // TODO 7: REMPLIR LE CALL TO ACTION

      const callToAction = document.querySelector('#call-to-action');
        callToAction.innerHTML = `<p>${data.journal.texteAppelAction}</p>
                                      <button class="cta-button">S'abonner</button>`;

      const ctaButton = document.querySelector('.cta-button');
      ctaButton.addEventListener('click', function() {
          alert('Merci pour votre abonnement ! ');
      });

      /// FIN DU CODE
      
      // BONUS 1 : Alert sur le bouton CTA

      // BONUS 2 : Filtrage par thème

      // BONUS 3 : Tri par popularité
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();


