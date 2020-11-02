function visiteur() {
    var numero = Math.floor(Math.random() * 1000);
    var texte = "Tu es le visiteur n° " + numero;
    alert(texte);
}

function ChangerTitre() {
    if (document.getElementById("titre_header").innerHTML == "Mes dév! Web en SNIR") {
        document.getElementById("titre_header").innerHTML = "Pierre LAURENT";
        setTimeout(ChangerTitre, 1000); 
    }
    else {
        document.getElementById("titre_header").innerHTML = "Mes dév! Web en SNIR";
    }
}

function changer_theme() {
    if(this.id == "theme_orange") {
        document.documentElement.style.setProperty("--couleur1", "#FF7B00");
        document.documentElement.style.setProperty("--couleur2", "#FAE6D4");
        document.documentElement.style.setProperty("--couleur3", "#FAE6D43A");
        document.documentElement.style.setProperty("--cible", "#000000");
        document.getElementsByTagName("h2")[0].style.color = "black";
        document.getElementsByTagName("body")[0].style.cursor = 'url("cursorO.png"), pointer';
        document.getElementById("icon").href = "faviconO.ico";
    }
    else if(this.id == "theme_noir") {
        document.documentElement.style.setProperty("--couleur1", "#000000");
        document.documentElement.style.setProperty("--couleur2", "#454545");
        document.documentElement.style.setProperty("--couleur3", "#4545453A");
        document.documentElement.style.setProperty("--cible", "#454545");
        document.getElementsByTagName("h2")[0].style.color = "white";
        document.getElementsByTagName("body")[0].style.cursor = 'url("cursorN.png"), pointer';
        document.getElementById("icon").href = "faviconN.ico";
    }
    else {
        document.documentElement.style.setProperty("--couleur1", "#2874a6");
        document.documentElement.style.setProperty("--couleur2", "#ebf5fb");
        document.documentElement.style.setProperty("--couleur3", "#ebf5fb3a");
        document.documentElement.style.setProperty("--cible", "#000000");
        document.getElementsByTagName("h2")[0].style.color = "black";
        document.getElementsByTagName("body")[0].style.cursor = 'url("cursorB.png"), pointer';
        document.getElementById("icon").href = "faviconB.ico";
    }
}

function VerifierFormulaireInscription(event) {
    if(document.getElementById("mdp1").value != document.getElementById("mdp2").value) {
        alert("Les mots de passe sont différents !");
        event.preventDefault();
    }
    else if(!(VerifierMotDePasse())) {
        alert("La sécurité sur le mot de passe n’est pas respectée !");
        event.preventDefault();
    }
}

function changerSection() {
    if(this.id == "nav_cv") {
        document.getElementById("inscription").style.display = "none";
        document.getElementById("connexion").style.display = "none";
        document.getElementById("mon_cv").style.display = "block";
        document.getElementById("mini-jeu").style.display = "none";
        document.getElementsByTagName("title")[0].innerHTML = "Pierre LAURENT • Mon CV";
    }
    else if(this.id == "nav_inscription") {
        document.getElementById("inscription").style.display = "block";
        document.getElementById("connexion").style.display = "none";
        document.getElementById("mon_cv").style.display = "none";
        document.getElementById("mini-jeu").style.display = "none";
        document.getElementsByTagName("title")[0].innerHTML = "Pierre LAURENT • Inscription";
    }
    else if(this.id == "nav_mini-jeu") {
        document.getElementById("inscription").style.display = "none";
        document.getElementById("connexion").style.display = "none";
        document.getElementById("mon_cv").style.display = "none";
        document.getElementById("mini-jeu").style.display = "block";
        document.getElementsByTagName("title")[0].innerHTML = "Pierre LAURENT • Mini jeu";
    }
    else {
        document.getElementById("inscription").style.display = "none";
        document.getElementById("connexion").style.display = "block";
        document.getElementById("mon_cv").style.display = "none";
        document.getElementById("mini-jeu").style.display = "none";
        document.getElementsByTagName("title")[0].innerHTML = "Pierre LAURENT • Connexion";
    }
}

function VerifierMotDePasse() {
    if(document.getElementById("mdp1").value.length > 7) {
        document.getElementById("mdp_longueur").classList.remove("rouge");
        document.getElementById("mdp_longueur").classList.add("vert");
    }
    else {
        document.getElementById("mdp_longueur").classList.add("rouge");
        document.getElementById("mdp_longueur").classList.remove("vert");
    }
    var nbMajuscules = 0;
    var nbMinuscules = 0;
    var nbChiffres = 0;
    var nbSpecial = 0;
    for(var tour = 0; tour < document.getElementById("mdp1").value.length; tour++) {
        var charTour = document.getElementById("mdp1").value.charAt(tour);
        if(MajusculeBool(charTour)) {
            nbMajuscules = nbMajuscules + 1;
        }
        else if(MinusculeBool(charTour)) {
            nbMinuscules = nbMinuscules + 1;
        }
        else if(SpécialBool(charTour)) {
            nbSpecial = nbSpecial + 1;
        }
        else if(ChiffreBool(charTour)) {
            nbChiffres = nbChiffres + 1;
        }
    }
    if(nbMajuscules > 0) {
        document.getElementById("mdp_majuscule").classList.remove("rouge");
        document.getElementById("mdp_majuscule").classList.add("vert");
    }
    else {
        document.getElementById("mdp_majuscule").classList.add("rouge");
        document.getElementById("mdp_majuscule").classList.remove("vert");
    }
    if(nbMinuscules > 0) {
        document.getElementById("mdp_minuscule").classList.remove("rouge");
        document.getElementById("mdp_minuscule").classList.add("vert");
    }
    else {
        document.getElementById("mdp_minuscule").classList.add("rouge");
        document.getElementById("mdp_minuscule").classList.remove("vert");
    }
    if(nbChiffres > 0) {
        document.getElementById("mdp_chiffre").classList.remove("rouge");
        document.getElementById("mdp_chiffre").classList.add("vert");
    }
    else {
        document.getElementById("mdp_chiffre").classList.add("rouge");
        document.getElementById("mdp_chiffre").classList.remove("vert");
    }
    if(nbSpecial > 0) {
        document.getElementById("mdp_special").classList.remove("rouge");
        document.getElementById("mdp_special").classList.add("vert");
    }
    else {
        document.getElementById("mdp_special").classList.add("rouge");
        document.getElementById("mdp_special").classList.remove("vert");
    }

    if(document.getElementById("mdp1").value.length > 7 && nbMajuscules > 0 && nbMinuscules > 0 && nbChiffres > 0 && nbSpecial > 0) {
        return true;
    }
    else {
        return false;
    }
}

function MajusculeBool(caractére) {
    var listedescaractéres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(var tour = 0; tour < listedescaractéres.length; tour++) {
        if(listedescaractéres[tour] == caractére) {
            return true;
        }
    }
    return false;
}

function MinusculeBool(caractére) {
    var listedescaractéres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(var tour = 0; tour < listedescaractéres.length; tour++) {
        if(listedescaractéres[tour].toLowerCase() == caractére) {
            return true;
        }
    }
    return false;
}

function SpécialBool(caractére) {
    var listedescaractéres = [" ", "`", "!", "@", "#", "$", "%", "*", "(", ")", "_", "+", "\\", "-", "=", "[", "]", "{", "}", ";", "'", ":", "\"", "|", ",", ".", "<", ">", "/", "?", "~"];
    for(var tour = 0; tour < listedescaractéres.length; tour++) {
        if(listedescaractéres[tour] == caractére) {
            return true;
        }
    }
    return false;
}

function ChiffreBool(caractére) {
    var listedescaractéres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(var tour = 0; tour < listedescaractéres.length; tour++) {
        if(listedescaractéres[tour] == caractére) {
            return true;
        }
    }
    return false;
}

function MettreAJourLeCompteur() {
    var aujourdhui = new Date();
    var debut_stage = new Date("May 24, 2021 00:00:00"); // janvier = 0 et decembre = 11 !!!!!! WTF
    var différence = debut_stage.getTime() - aujourdhui.getTime();
    document.getElementById("stage_jours").innerHTML = Math.floor(différence / (1000 * 60 * 60 * 24)) + "J";
    document.getElementById("stage_heures").innerHTML = Math.floor((différence / (1000 * 60 * 60))%24) + "H";
    document.getElementById("stage_minutes").innerHTML =Math.floor((différence / (1000 * 60))%60) + "M";
    document.getElementById("stage_secondes").innerHTML = Math.floor((différence / (1000))%60) + "S";
    setTimeout(MettreAJourLeCompteur, 1000); 
}
var score = 0;
var numerocible = 0;
var numerocibleavant = 0;
var tempsRestant = 30;
var record = getCookie("record");
document.getElementById("jeu_record").innerHTML = "RECORD DU NAVIGATEUR: " + record;

function jeuAjouter() {
    if(this.id == numerocible) {
        score = score + 1;
        document.getElementById("jeu_score").innerHTML = "SCORE: " + score;
        changerCible();
    }
    else if(numerocible == 0) {
        changerCible();
        chrono();
        document.getElementById("jeu_score").innerHTML = "SCORE: " + score;
    }
}

function changerCible() {
    numerocible = Math.floor(Math.random() * 9) + 1;
    if(numerocible == numerocibleavant){
      changerCible();
    }
    else{
      for(var tour = 0; tour <= 8; tour++) {
          if(numerocible == tour + 1) {
              document.getElementsByClassName("jeu_cible")[tour].style.visibility = "visible";
          }
          else {
              document.getElementsByClassName("jeu_cible")[tour].style.visibility = "hidden";
          }
      }
      numerocibleavant = numerocible
    }
}

function chrono() {
    tempsRestant = tempsRestant - 1;
    document.getElementById("tempsbar").value = tempsRestant;
    if(tempsRestant == 0) {
        stop();
    }
    else {
        setTimeout(chrono, 1000);
    }
}

function stop() {
    alert("Score final: " + score);
    for(var tour = 0; tour <= 8; tour++) {
        document.getElementsByClassName("jeu_cible")[tour].style.visibility = "visible";
    }
    if(score > record) {
        record = score;
        setCookie("record", record, 90);
        document.getElementById("jeu_record").innerHTML = "RECORD DU NAVIGATEUR: " + record;
    }
    score = 0;
    numerocible = 0;
    tempsRestant = 30;
}

// ||| ctrl+c et ctrl+v 
// vvv
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "0";
  }
// ------

/*
var nom = "LAURENT";
var prénom = "Pierre";
var phrase = "Bonjour, je m'appelle ";
alert(phrase + prénom + " " + nom);

prix1 = 5.95;
prix2 = 8.90;
var texte = "Mes 2 articles m'ont coûté ";
alert(texte + (prix1 + prix2).toFixed(2));
*/
var p_footer = document.getElementById("p_footer");
p_footer.addEventListener("dblclick", visiteur);
document.getElementById("titre_header").addEventListener("mouseover", ChangerTitre)
document.getElementById("theme_bleu").addEventListener("click", changer_theme);
document.getElementById("theme_orange").addEventListener("click", changer_theme);
document.getElementById("theme_noir").addEventListener("click", changer_theme);
document.getElementById("nav_cv").addEventListener("click", changerSection);
document.getElementById("nav_inscription").addEventListener("click", changerSection);
document.getElementById("nav_connexion").addEventListener("click", changerSection);
document.getElementById("nav_mini-jeu").addEventListener("click", changerSection);
document.getElementsByTagName("form")[0].addEventListener("submit", VerifierFormulaireInscription);
document.getElementById("mdp1").addEventListener("input", VerifierMotDePasse);
MettreAJourLeCompteur();
for(var tour = 0; tour <= 8; tour++) {
    document.getElementsByClassName("jeu_cible")[tour].addEventListener("click", jeuAjouter);
}

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "cv.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 40,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 4,
          "size_min": 5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 100,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
  }
);