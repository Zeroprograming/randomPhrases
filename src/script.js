document.addEventListener("DOMContentLoaded", function () {
  const quoteText = document.getElementById("text");
  const quoteAuthor = document.getElementById("author");
  const newQuoteBtn = document.getElementById("new-quote");
  const tweetQuoteBtn = document.getElementById("tweet-quote");
  const body = document.body;

  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  // Obtener una frase aleatoria
  function getRandomQuote() {
    const quotes = [
      {
        text: "La vida es 10% lo que me sucede y 90% cómo reacciono a ello.",
        author: "Charles R. Swindoll",
      },
      {
        text: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito.",
        author: "Albert Schweitzer",
      },
      {
        text: "No importa lo lento que vayas, siempre y cuando no te detengas.",
        author: "Confucio",
      },
      {
        text: "No esperes. El momento nunca será el adecuado.",
        author: "Napoleón Hill",
      },
      {
        text: "La mejor manera de predecir el futuro es crearlo.",
        author: "Peter Drucker",
      },
    ];

    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  // Mostrar una nueva frase aleatoria
  async function getQuote() {
    const randomQuote = getRandomQuote();

    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = randomQuote.author;

    var color = Math.floor(Math.random() * colors.length);

    body.style.backgroundColor = colors[color];
    body.style.color = colors[color];


    newQuoteBtn.style.backgroundColor = colors[color];
    tweetQuoteBtn.style.backgroundColor = colors[color];
  }

  // Evento clic del botón "Nueva Frase"
  newQuoteBtn.addEventListener("click", function () {
    getQuote();
  });

  // Cargar una frase aleatoria al cargar la página
  getQuote();
});
