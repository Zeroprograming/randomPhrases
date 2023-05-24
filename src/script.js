document.addEventListener("DOMContentLoaded", function () {
  const quoteText = document.getElementById("text");
  const quoteAuthor = document.getElementById("author");
  const newQuoteBtn = document.getElementById("new-quote");
  const body = document.body;

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
  function showRandomQuote() {
    const randomQuote = getRandomQuote();
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = randomQuote.author;
  }

  // Cambiar el color del body al hacer clic en el botón "Nueva Frase"
  function changeBodyColor() {
    // Comprueba si la propiedad 'currentColorIndex' está definida en el body
    if (!body.currentColorIndex) {
      // Si no está definida, inicializa el índice en 0
      body.currentColorIndex = 0;
    } else {
      // Incrementa el índice en 1 y asegúrate de que no exceda el rango de colores
      body.currentColorIndex = (body.currentColorIndex + 1) % colors.length;
    }

    var nextColor = colors[body.currentColorIndex];
    body.style.backgroundColor = nextColor;
  }

  // Cargar una frase aleatoria al cargar la página
  showRandomQuote();

  // Evento clic del botón "Nueva Frase"
  newQuoteBtn.addEventListener("click", function () {
    showRandomQuote();
    changeBodyColor();
  });
});
