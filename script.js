var btnPs = document.querySelectorAll('.btnP')
var btnMs = document.querySelectorAll('.btnM')
var trashS = document.querySelectorAll('.fa-trash')
var hearts = document.querySelectorAll('.fa-heart')

for(let i = 0; i<btnPs.length;i++){
    btnPs[i].addEventListener('click',function(){
        btnPs[i].previousElementSibling.innerHTML ++
        CalculSomme()
    })
}

for(let i = 0; i<btnMs.length; i++){
    btnMs[i].addEventListener('click',function(){
        if (btnMs[i].nextElementSibling.innerHTML>0) {
            btnMs[i].nextElementSibling.innerHTML-- 
            CalculSomme()
        }
         })
}

for(let i = 0; i<trashS.length; i++){
    trashS[i].addEventListener('click',function(){
        trashS[i].parentElement.remove()
        CalculSomme()
    })
}

for(let i = 0; i<hearts.length;i++){
    hearts[i].addEventListener('click',function(){
        hearts[i].classList.toggle('alhassane')
    })
}


function CalculSomme(){
    var prix = document.querySelectorAll('.prix')
    var qte = document.querySelectorAll('.qte')
    var total = document.querySelector('#prixTotal')

    var resultat  = 0

    for(let i = 0; i<prix.length; i ++){
        resultat = resultat + prix[i].innerHTML * qte[i].innerHTML
    }

    total.innerHTML = resultat
}