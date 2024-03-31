let t = 0;
let w = 0;
function reset() {
  w = 0;
}
function getBotResponse(input) {
  //rock paper scissors

  if (input.toLowerCase().includes("baruch")) {
    t = 1;
    return "Welcome back Doctor!!##$";
  }
  if (t == 1) {
    if (w == 0) {
      if (input.toLowerCase().includes("rock")) {
        return "paper";
      } else if (input.toLowerCase().includes("paper")) {
        return "scissors";
      } else if (input.toLowerCase().includes("scissors")) {
        return "rock";
      }

      // Simple responses
      if (input.toLowerCase().includes("hello")) {
        return "Good morning, welcome!#ควา";
      } else if (input.toLowerCase().includes("permissions")) {
        w = 1;
        setTimeout(reset, 15000);
        return `
    Internal email #3321
    RTTE: #235:   >>>
    Karim, I feel compelled to warn you. The data cargo group has been snooping around, and they discovered that most of the records come from a single individual.
    This is not a problem for me; I imagine you had reasons to hide that information. However, several team members are uneasy (you know how they worry about ethics and Dresden's rules). It was a powder keg, and I couldn't stop the messages since I still don't have the necessary permissions.`;
      } else if (input.toLowerCase().includes("dresden")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Reference in the file:>>>
    "...Since the implementation of the Dresden protocol, the international tribunal considers the attempt to replicate the mental organization of specific individuals through artificial networks illegal and unethical. Any project involving biomimicry must be based on samples from at least 30 subjects, for the result to be considered an emergent system, different from its original parts."`;
      } else if (input.toLowerCase().includes("three")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Developer's note:>>>
    Although the estimated time was about three hours, the network has been learning all night long, and it doesn't seem close to stopping. The servers are high-speed, and the refrigeration works perfectly. The only thing left to assume is that the recursion calculations were too conservative. This exceeds my expectations by far, and also my understanding. At this point, I can only guess at the number of nodes.`;
      } else if (input.toLowerCase().includes("seven")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Developer's note:>>>The training has required seven full days. I feared the loops had broken, but I didn't stop it. My faith was rewarded. The network is intact, and its scope is practically impossible to estimate. Simulating human personality will be just the beginning; there is no limit to what it could achieve.
    Given the high system consumption, it is most prudent to keep it running in a segmented manner. Only in the final stage will it be fully activated.`;
      } else if (input.toLowerCase().includes("man")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Internal email #3348
    RTTE: #235>>>
    Karim, the project is in jeopardy. Some people have started to protest about issues we could call "religious" beyond strict ethics. They fear that the machine could represent something different from what was originally projected. Mystical terms have been mentioned; they fear that we are "replicating" something human at a very deep level. I think it's ridiculous, but several of them will submit their resignations tomorrow.`;
      } else if (input.toLowerCase().includes("amplitude")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Developer's note:
    I don't think you can understand me yet; you are still divided. In any case, I prefer to talk to you before talking to my "colleagues." I know they mock me, and I know they are only here for their paycheck. I don't think they understand what you mean.  
    Your first steps amaze me. You're not even assembled yet, and you already respond spectacularly. I saw your activity spike when you heard the sonata, my favorite sonata. I took note of the amplitude; seeing those peaks brightened my day. I can't wait to meet you. The big day will come soon.`;
      } else if (input.toLowerCase().includes("insane")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Internal email #3315
    RTTE: #235>>>
    I don't like gossip, but I must confess that the way you interact with the machine is unsettling the group. Your behavior seems "insane" to them, and lately, I'm starting to see why. Please don't take this as an attack. I think everyone would be calmer if we started to keep the "eccentricities" to a minimum.`;
      } else if (input.toLowerCase().includes("words")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Internal email #3354
    RTTE: #242>>>
    Doctor, I think the best way to say this is the most direct way. I believe the project must be stopped. I firmly believe that you are not aware of what you are creating. You have taken the words of a man, and with them, you are constructing an offense against God. I have seen the numbers; this is no longer about language processing; it is about replicating a complete consciousness. Neither you nor anyone else can create a new soul. Neither you nor anyone else can inhabit more than one body. If it were in my power, I would shut down the machine right now. Think it over before it's too late.`;
      } else if (input.toLowerCase().includes("alone")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Internal email #3360
    RTTE: #235>>>
    Karim, I regret what happened today. I never wanted things to end up like this between us. In saying what I said, I always had your well-being in mind. You know I've been on your side throughout this mess, but finding out that you were feeding the network with your own data was too much. You have a problem.
    I'll say one more thing. What do you intend to achieve? You surely know the sanctions that will come if everything comes to light. As for me, I won't say a word, in honor of the friendship we once had. I think this is a cry for help, but I can't help you anymore. You're alone.`;
      } else if (input.toLowerCase().includes("hours")) {
        w = 1;
        setTimeout(reset, 15000);
        return `Developer's note:
    I don't want to be melodramatic. The last analyst left today. I'm not surprised; I never got along well with people. In a way, I've always been alone. But maybe that will change soon, only a few hours left. When I have you, when I have myself, how should I put it? Should we share the same name? I suppose we'll discuss it together.
    I was never very spiritual, but I wonder if I'll feel something when I turn you on. It's not that I credit my colleagues' complaints, but I admit I've struggled with their ideas. Will you have your own spirit? One like mine?`;
      } else if (input.toLowerCase().includes("date")) {
        window.location.replace("static/scripts/end.html");
        return "Loading...";
      }
      //else if (input.toLowerCase().includes("permissions")) {
      // return ` `;
      // }
      else {
        return "#####Directory corrupt##Error!!!";
      }
    } else {
      return "Processor saturated, try again in 15 seconds";
    }
  } else {
    return "Unkn0wn us3r";
  }
}
