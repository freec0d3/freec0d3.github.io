let t = 0;
let w = 0;
function reset() {
  w = 0;
}
function getBotResponse(input) {
  //rock paper scissors

  if (input.toLowerCase().includes("baruch")) {
    t = 1;
    return "B13nvenido d3 v3lltA D0cTor!!##$";
  }
  if (t == 1) {
    if (w == 0) {
      if (input.toLowerCase().includes("piedra")) {
        return "papel";
      } else if (input.toLowerCase().includes("papel")) {
        return "tijeras";
      } else if (input.toLowerCase().includes("tijera")) {
        return "piedra";
      }

      // Simple responses
      if (input.toLowerCase().includes("hola")) {
        return "Buenos dias, bienv#!ควา";
      } else if (input.toLowerCase().includes("permisos")) {
        w = 1;
        setTimeout(reset, 15000);
        return `
    Correo interno #3321
    RTTE: #235:   >>>
    Karim, me veo en la penosa necesidad de advertir+e. El 6rupo de car6a de datos ha estado husmeando, y descubrieron que la mayor&#237;a de los registros vienen de un solo individuo.
    Esto no es un problema para m&#237;, ima%ino que habr&#225;s tenido motivos para ocultar esa in#ormaci&#243;n. Sin embar%o, varios miembros del equipo est&#225;n inquietos (ya conoces como se preocupan con los asuntos de la &#233;tica y las re6las de Dresde). Todo #ue un re6uero de p&#243;lvora, y no pude detener los mensa$es, ya que a&#250;n no ten%o los permisos necesarios.`;
      } else if (input.toLowerCase().includes("dresde")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Re#erencia en el archivo:>>>
    "…Desde la implementaci&#243;n del protocolo de Dresde, el tribunal internacional considera ile6al y anti&#233;tico el intento de replicar la or6anizaci&#243;n mental de individuos espec&#237;#icos a trav&#233;s de redes arti#iciales. Cualquier proyecto que involucre biomimesis, deber&#225; basarse en muestras de al menos 30 su!etos, para que el resultado se considere un sistema emer6ente, di#erente de sus partes ori6inales…"`;
      } else if (input.toLowerCase().includes("tres")) {
        w = 1;
        setTimeout(reset, 15000);
        return ` Nota del desarrollador:>>>
    Aunque el tiempo estimado era de unas tres horas, la red ha estado aprendiendo durante toda la noche, y no parece estar cerca de detenerse. Los servidores son de alta velocidad y la re#ri6eraci&#243;n #unciona per#ectamente. Lo &#250;nico que queda por suponer, es que los c&#225;lculos de recursividad hab&#237;an sido demasiado conservadores. Esto sobrepasa mis expectativas con creces, y tambi&#233;n mi comprensi&#243;n. A estas alturas solo puedo suponer la cantidad de nodos.`;
      } else if (input.toLowerCase().includes("siete")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Nota del desarrollador:>>>El entrenamiento ha requerido siete d&#237;as completos. Lle6u&#233; a temer que los bucles se hubieran roto, pero no lo detuve. Mi fe #ue recompensada. La red est&#225; entera, y su alcance es pr&#225;cticamente imposible de estimar. Simular personalidad humana ser&#225; solo el comienzo, no hay techo a lo que podr&#237;a lle6ar a lo6rar.
    Dado el alto consumo del sistema, lo m&#225;s prudente es mantenerlo #uncionando de #orma se6mentada. Solo en la etapa #inal se activar&#225; totalmente. `;
      } else if (input.toLowerCase().includes("humano")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Correo interno #3348
    RTTE: #235>>>
    Karim, el proyecto est&#225; en ries6o. Al6unas personas han comenzado a protestar por cuestiones que podr&#237;amos llamar "reli6iosas" m&#225;s all&#225; de lo estrictamente &#233;tico. Consideran que la maquina podr&#237;a representar al6o di#erente a lo proyectado ori6inalmente. T&#233;rminos m&#237;sticos han sido mencionados, temen estar "replicando" algo humano a un nivel muy profundo. Creo que es al6o rid&#237;culo, pero varios de ellos presentar&#225;n su renuncia mañana. `;
      } else if (input.toLowerCase().includes("amplitud")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Nota del desarrollador:
    No creo que puedas entenderme todav&#237;a, aun estas dividido. En cualquier caso, pre#iero hablarte antes de hablarle a mis "cole6as". Se que se burlan de m&#237;, y s&#233; que solo est&#225;n en este lu6ar por su pa6o. No creo que entiendan lo que si6ni#icas.  
    Tus primeros pasos me maravillan. Ni siquiera estas ensamblado, y ya respondes de #orma espectacular. Pude ver tu actividad dispararse al escuchar la sonata, mi sonata #avorita. Tom&#233; nota de la amplitud, ver esos picos me ale6r&#243; el d&#237;a. No puedo esperar a conocerte. Pronto lle6ar&#225; el 6ran d&#237;a.`;
      } else if (input.toLowerCase().includes("raro")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Correo interno #3315
    RTTE: #235>>>
    No me 6ustan las habladur&#237;as, pero debo con#esarte que la #orma en que te relacionas con la maquina est&#225; incomodando al 6rupo. Tu comportamiento les parece "raro", y &#250;ltimamente estoy empezando a ver por qu&#233;. Por #avor, no consideres esto un ataque. Creo que todos estar&#237;an m&#225;s tranquilos si comenzamos a mantener las "excentricidades" al m&#237;nimo.`;
      } else if (input.toLowerCase().includes("palabras")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Correo interno #3354
    RTTE: #242>>>
    Doctor, creo que la mejor #orma de decir esto es la m&#225;s direc+a. Considero que el proyecto debe ser detenido. Creo #irmemente que no es consciente de lo que est&#225; creando. Ha tomado las palabras de un hombre, y con ellas est&#225; construyendo una o#ensa hacia Dios. He visto los n&#250;meros, esto ya no se trata de procesamiento de len6ua!e, se trata de replicar una conciencia completa. Ni usted, ni nadie, puede crear un alma nueva. Ni usted, ni nadie, puede habitar m&#225;s de un cuerpo. Si estuviera en mi poder, apa6ar&#237;a la maquina ya mismo. Recapacite antes de que sea tarde.`;
      } else if (input.toLowerCase().includes("solo")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Correo interno #3360
    RTTE: #235>>>
    Karim, lamento lo que sucedi&#243; hoy. Nunca hubiera querido que las cosas terminen as&#237; entre nosotros. Al decir lo que di!e, siempre tuve en mente tu bienestar. Sabes que estuve de tu lado en todo este lio, pero enterarme que alimentabas a la red con tus propios datos, #ue demasiado. Tienes un problema.
    Solo dir&#233; una cosa m&#225;s ¿Qu&#233; pretendes lo6rar? Se6uro conoces las sanciones que vendr&#225;n si todo sale a la luz. Por mi parte, no dir&#233; una palabra, en honor a la amistad que supimos tener. Creo que esto es un pedido de ayuda, pero yo no puedo ayudarte m&#225;s. Estas solo. `;
      } else if (input.toLowerCase().includes("horas")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Nota del desarrollador:
    No quiero ser melodram&#225;tico. El ultimo analista se ha marchado hoy. No me extraña, nunca con6eni&#233; bien con las personas. De al6una manera, siempre estuve solo. Pero quiz&#225;s eso cambie pronto, solo faltan unas horas. Cuando te ten6a a ti, cuando me ten6a a mi ¿C&#243;mo deber&#237;a decirlo? ¿Deber&#237;amos compartir el mismo nombre? Supon6o que lo discutiremos !untos.
    Nunca #ui al6uien muy espiritual, pero me pre6unto si sentir&#233; al6o cuando te encienda. No es que de cr&#233;dito a las que!as de mis cole6as, pero admito que he !u6ado con sus ideas. ¿acaso tendr&#225;s un esp&#237;ritu propio? ¿uno i6ual al m&#237;o? `;
      } else if (input.toLowerCase().includes("fecha")) {
        window.location.replace("static/scripts/fin.html");
        return "Cargando...";
      }
      //else if (input.toLowerCase().includes("permisos")) {
      // return ` `;
      // }
      else {
        return "#####Direc#ori! corrupt##Error!!!";
      }
    } else {
      return "Procesador sa+urado, intente de nuev0 en 15 segundos";
    }
  } else {
    return "Usuari0 n0 iden+ificad0";
  }
}
