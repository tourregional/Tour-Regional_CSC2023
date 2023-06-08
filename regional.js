
var preguntasRespuestas = [

   
    {
      pregunta: "hola",
      respuesta: "Hola, Mi nombre es Brandon Asistente Virtual."
    },

    {
        pregunta: "Hola",
        respuesta: "Hola, Mi nombre es Brandon Asistente Virtual."
      },

    {
      pregunta: "como estas",
      respuesta: "Estoy bien, ¡gracias por preguntar!"
    },

    {
        pregunta: "como estas?",
        respuesta: "Estoy bien, ¡gracias por preguntar!"
      },

    {
      pregunta: "me ayudas?",
      respuesta: "En que puedo servirte?"
    },
{
        pregunta: "me ayudas",
        respuesta: "En que puedo servirte?"
      },
    {
        pregunta: "Me ayudas?",
        respuesta: "En que puedo servirte?"
      },
    // Agrega más preguntas y respuestas aquí
    {
        pregunta: "cuanto dura el tour",
        respuesta: "El tour tiene una duración de 2 días."
      },

    {
        pregunta: "cuanto dura el tour?",
        respuesta: "El tour tiene una duración de 2 días."
      },

    {
        pregunta: "cual es la duración del tour?",
        respuesta: "El tour tiene una duración de 2 días."
      },

    {
        pregunta: "cuanto cuesta el tour?",
        respuesta: "El tour tiene un costo de $300.000 pesos colombianos por persona."
      },

      {
        pregunta: "cual es el costo del tour?",
        respuesta: "El tour tiene un costo de $300.000 pesos colombianos por persona."
      },

      {
        pregunta: "cuantas cuotas debo pagar?",
        respuesta: "Puedes pagar el tour con un plazo de 3 cuotas, una la pagas este mes de junio, la siguiente en el mes de julio y la ultima para finalizar tu pago en el mes de agosto."
      },

      {
        pregunta: "Formas de pago?",
        respuesta: "Puedes pagar el tour a cuotas de x plata por mes."
      },
    {
        pregunta: "que incluye el tour?",
        respuesta: "El tour incluye Hospedaje, Guianza, Recorrido, Alimentación, Seguro de vida."
      },

  ];

  function enviarMensaje() {
    var userInput = document.getElementById("user-input");
    var chatContainer = document.getElementById("chat-container");

    var userMessage = document.createElement("p");
    userMessage.innerText = "Usuario: " + userInput.value;
    chatContainer.appendChild(userMessage);

    obtenerRespuesta(userInput.value);
    userInput.value = "";
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function obtenerRespuesta(pregunta) {
    var respuestaEncontrada = false;

    for (var i = 0; i < preguntasRespuestas.length; i++) {
      var pr = preguntasRespuestas[i];

      if (pr.pregunta.toLowerCase() === pregunta.toLowerCase()) {
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

document.getElementById("chat-container").addEventListener ("submit", function (event){
    event.preventDefault();
    enviarMensaje();
});