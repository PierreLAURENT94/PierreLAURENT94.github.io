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
        document.getElementsByTagName("h2")[0].style.color = "black";
        document.getElementsByTagName("body")[0].style.cursor = 'url("cursorO.png"), pointer';
        document.getElementById("icon").href = "faviconO.ico";
    }
    else if(this.id == "theme_noir") {
        document.documentElement.style.setProperty("--couleur1", "#000000");
        document.documentElement.style.setProperty("--couleur2", "#454545");
        document.documentElement.style.setProperty("--couleur3", "#4545453A");
        document.getElementsByTagName("h2")[0].style.color = "white";
        document.getElementsByTagName("body")[0].style.cursor = 'url("cursorN.png"), pointer';
        document.getElementById("icon").href = "faviconN.ico";
    }
    else {
        document.documentElement.style.setProperty("--couleur1", "#2874a6");
        document.documentElement.style.setProperty("--couleur2", "#ebf5fb");
        document.documentElement.style.setProperty("--couleur3", "#ebf5fb3a");
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
        document.getElementsByTagName("title")[0].innerHTML = "Pierre LAURENT • Mon CV";
    }
    else if(this.id == "nav_inscription") {
        document.getElementById("inscription").style.display = "block";
        document.getElementById("connexion").style.display = "none";
        document.getElementById("mon_cv").style.display = "none";
        document.getElementsByTagName("title")[0].innerHTML = "Pierre LAURENT • Inscription";
    }
    else {
        document.getElementById("inscription").style.display = "none";
        document.getElementById("connexion").style.display = "block";
        document.getElementById("mon_cv").style.display = "none";
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
document.getElementsByTagName("form")[0].addEventListener("submit", VerifierFormulaireInscription);
document.getElementById("mdp1").addEventListener("input", VerifierMotDePasse);
MettreAJourLeCompteur();