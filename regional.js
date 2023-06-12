var preguntasRespuestas = [
  {
    pregunta: "hola",
    respuesta: "Hola, Mi nombre es Brandon Asistente Virtual."
  },
  {
    pregunta: "ayuda",
    respuesta: "Claro, En qué puedo servirte?"
  },
  {
    pregunta: "duracion",
    respuesta: "El tour tiene una duración de 2 días."
  },
  {
    pregunta: "costo",
    respuesta: "El tour tiene un costo de $300.000 pesos por persona."
  },
  {
    pregunta: "incluye",
    respuesta: "El tour incluye hospedaje, guianza, recorrido, alimentación y seguro de vida."
  },

  {
    pregunta: "formas",
    respuesta: "Las formas de pago que puedes utilizar son efectivo(CUOTAS), tarjeta de credito y transferencia."
  },

  {
    pregunta: "cuotas",
    respuesta: "Debes de pagar 3 cuotas en total. 1-En el mes de junio 2- En Julio 3- Esta ultima se paga en Agosto."
  }
];

function enviarMensaje() {
  var userInput = document.getElementById("user-input");
  var chatContainer = document.getElementById("chat-container");

  var selectedOption = userInput.value;
  var selectedQuestion = userInput.options[userInput.selectedIndex].text;

  var userMessage = document.createElement("p");
  userMessage.innerText = "Turista: " + selectedQuestion;
  chatContainer.appendChild(userMessage);

  obtenerRespuesta(selectedOption);
  userInput.value = "";
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function obtenerRespuesta(pregunta) {
  var respuestaEncontrada = false;

  for (var i = 0; i < preguntasRespuestas.length; i++) {
    var pr = preguntasRespuestas[i];

    if (pr.pregunta === pregunta) {
      mostrarRespuesta(pr.respuesta);
      respuestaEncontrada = true;
      break;
    }
  }

  if (!respuestaEncontrada) {
    mostrarRespuesta("Lo siento, no tengo respuesta para esa pregunta.");
  }
}

function mostrarRespuesta(respuesta) {
  var chatContainer = document.getElementById("chat-container");

  var assistantMessage = document.createElement("p");
  assistantMessage.classList.add("message", "assistant-message");
  assistantMessage.innerText = "Asistente: " + respuesta;
  chatContainer.appendChild(assistantMessage);

  chatContainer.scrollTop = chatContainer.scrollHeight;
}