// Simple toggle functionality for Movies/TV Shows
        const toggleButtons = document.querySelectorAll('.trending-toggle button');
        const sections = document.querySelectorAll('.trending-section');

        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const target = button.getAttribute('data-target');
                
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                sections.forEach(section => {
                    if (section.id === target) {
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const darkModeToggle = document.getElementById('darkModeToggle');
            const body = document.body;
          
            // Check for saved 'darkMode' in localStorage
            let darkMode = localStorage.getItem('darkMode');
          
            const enableDarkMode = () => {
              body.classList.add('dark-mode');
              localStorage.setItem('darkMode', 'enabled');
            }
          
            const disableDarkMode = () => {
              body.classList.remove('dark-mode');
              localStorage.setItem('darkMode', null);
            }
           
            // If the user already visited and enabled darkMode
            // start things off with it on
            if (darkMode === 'enabled') {
              enableDarkMode();
              darkModeToggle.checked = true;
            }
          
            // When someone clicks the button
            darkModeToggle.addEventListener('click', () => {
              darkMode = localStorage.getItem('darkMode'); 
              if (darkMode !== 'enabled') {
                enableDarkMode();
              } else {  
                disableDarkMode(); 
              }
            });
          });
          
          // QUOTE GEN
          document.addEventListener('DOMContentLoaded', function() {
            const quotes = [
              { quote: "May the Force be with you.", movie: "Star Wars" },
              { quote: "I'm going to make him an offer he can't refuse.", movie: "The Godfather" },
              { quote: "You talking to me?", movie: "Taxi Driver" },
              { quote: "E.T. phone home.", movie: "E.T. the Extra-Terrestrial" },
              { quote: "Here's looking at you, kid.", movie: "Casablanca" },
              { quote: "I'll be back.", movie: "The Terminator" },
              { quote: "You can't handle the truth!", movie: "A Few Good Men" },
              { quote: "I see dead people.", movie: "The Sixth Sense" },
              { quote: "You're gonna need a bigger boat.", movie: "Jaws" },
              { quote: "I'm king of the world!", movie: "Titanic" }
            ];
          
            const quoteDisplay = document.getElementById('quoteDisplay');
            const newQuoteBtn = document.getElementById('newQuoteBtn');
          
            function getRandomQuote() {
              return quotes[Math.floor(Math.random() * quotes.length)];
            }
          
            function displayNewQuote() {
              const { quote, movie } = getRandomQuote();
              quoteDisplay.innerHTML = `"${quote}" <br>- <em>${movie}</em>`;
            }
          
            if (newQuoteBtn) {
              newQuoteBtn.addEventListener('click', displayNewQuote);
            }
          });
          
          // Movie Search bar
          document.addEventListener('DOMContentLoaded', function() {
            const searchInput = document.getElementById('movieSearch');
            const searchButton = document.getElementById('searchButton');
            const movieItems = document.querySelectorAll('.movie-item');
        
            function performSearch() {
                const searchTerm = searchInput.value.toLowerCase();
                
                movieItems.forEach(item => {
                    const title = item.querySelector('h4').textContent.toLowerCase();
                    const director = item.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
                    const stars = item.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
                    
                    if (title.includes(searchTerm) || director.includes(searchTerm) || stars.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        
            searchButton.addEventListener('click', performSearch);
        
            searchInput.addEventListener('keyup', function(event) {
                if (event.key === 'Enter') {
                    performSearch();
                }
            });
        });