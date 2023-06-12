

/*Exercice 9 :
Créez un bouton "Cacher" et un paragraphe avec du texte. 
Utilisez JavaScript pour masquer le paragraphe lorsque le 
bouton est cliqué.*/



//je recupere les element html
const para = document.getElementById('para');
const button = document.getElementById('button');

//variable pour determiner l'etat du text
let change = false;


//recuperer les evenements sur le boutton 'click'
button.addEventListener('click', function(){
   
   
    //j'annule tout d'abord les modification 'cette etape est là pour eviter des erreurs'
    para.classList.remove('class');
    para.classList.remove('class2');

    //condition pour determiner l'action a effectuer afficher ou cacher
    if(change === false){
        para.classList.add('class');
        button.textContent = "AFICHER"
        change = true;
    
    }else if(change === true){
        para.classList.add('class2');
        button.textContent = "CACHER."
        change = false;
    }
})

