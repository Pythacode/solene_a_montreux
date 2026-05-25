const mail = "info@montreuxcomedy.com"
const subject = "Une artiste à ne pas manquer pour Montreux Comédie"
const body = `Bonjour,

Je me permets de vous contacter car je pense sincèrement que Solène PETIT--FRULIO aurait toute sa place sur la scène de Montreux Comédie.

Son humour, son univers et son talent méritent d'être partagés avec le public du festival. Je suis convaincu(e) que sa présence serait une vraie valeur ajoutée à la programmation.

Elle est déjà suivie par au moins de nombreux follower et son sketch "CPE en millieux hostile" fait furreur sur les réseaux.
Vous pourrez la retrouver sur instagram (https://www.instagram.com/solene.petitfrulio/) ainsi que retrouver son sketch sur solene-a-montreux.nathanaelle.org.

Auriez-vous la possibilité d'étudier sa candidature pour une prochaine édition ?

Merci d'avance pour votre attention, et bravo pour la qualité du festival année après année.

Cordialement`
const link = `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

document.getElementById('subject').innerText = subject
document.getElementById('body').innerHTML = body
document.getElementById('sendButton').href = link
