<!-- Vergeet je niet de comments uit te zetten voordat je begint met typen? 💬 -->

# Procesverslag

## Over
* **Naam:** Desi van den Dijssel
* **Klas:** `vid-1/vid-2`
* **Minor:** `Visual Interface Design`
* **Favoriete dier:** `Kolibrie`
* **Startniveau:** `blauw/rood/zwart` (Uhm.. welke kleur betekend startniveau 0? Die kleur is het!)

## Concept
Het leek mij interessant om de vier seizoenen visueel te maken doormiddel van een boom te creëren die groeit door de input van een gebruiker. De takken en bladeren wiegen in de wint, doormiddel van bijvoorbeeld een slijder zou je als gebruiker door de 4 seizoenen heen kunnen gaan. Elk seizoen laat een andere boom zien.

## Features

`Wat zijn de features in het project dat je gemaakt hebt? Waar kan ik op klikken? Waar zit de interactie?`

## Onderzoek & inspiratie
Voor mijn onderzoek ben ik de lijst Resources & inspiration van Danny afgegaan. Hier heb ik van alles wat mij aansprak een moodboard gemaakt. Vervolgens heb ik een mindmap gemaakt over mijzelf, wie ben ik en waar houd ik van. Uit deze mindmap kwam dat ik van transparantie, niet al te veel en felle kleuren en de natuur houd. Deze informatie heb ik tijdens de les gedeeld. Ik kreeg goede feedback waaruit een idee is ontstaan, namelijk bladeren en/of bomen creëren die reageren op de input van de gebruiker.
Cancel changes
## Voortang

`Schrijf hier een klein logboekje met je voortgang per week.`

### Week-1
Ik ben onderzoek gaan doen naar Generative Art, heb grote namen in deze scene gegoogeld en hun werk bekeken. Toen ben ik voor mijzelf gaan kijken wie ben ik en waar hou ik van. Natuur was één van de dingen die hieruit kwam en waar ik ook graag iets mee wil gaan doen. Na de feedback in de les ben ik op een idee gekomen. Ik wil graag iets doen met bomen, bladeren en seizoenen.

Deze week was het de bedoeling dat we één eerste schets zouden maken met P5. Hier ben ik meteen ingedoken en heb met code mijn eerste boom gemaakt die je kan laten bewegen door input van een gebruiker. Dit was een goed begin, door deze oefening weet ik nu beter wat er mogelijk is en heb ik nieuwe ideeën gekregen voor mijn concept.


### Week-2
Deze week verschilden bomen gecreëerd door te kijken naar verschillende tutorials. Ik begon. Met het proberen van mijn eerst gemaakt boom aan passen qua kleur enz toen dat gelukt was liep ik helaas weer vast. Al volgt maar verschilden bomen gecreëerd door te kijken naar verschillende tutorials. Ik hoopte op deze manier steeds meer vanzelf te snappen hoe P5.js werk. Enigszins werkte dit ook, wel raak ik soms helemaal in de war van wat ik aan het doen ben, ik vind dit heel lastig..![image]


### Week-3
Deze week ben ik gaan kijken naar L systemen. Hier heb ik een tutorial over gevolgd met als uitkomst een boom die je door het systeem kan laten groeien. Ik kan steeds een ander boom creëren door het veranderen van de rules zoals je hier onder kan zien:
var rules= [];
rules[0] = {
  a: "F",
  b: "FF[++F[-F]+F][--F[+F]-F]" "FF[++F[-F]+F][--F[+F]-F]"

Het L system werk als volgt:
FF : will move two steps forward.
FF+F : will move forward two steps, turn right and move forward in that direction.
FF[+F]-F : will move forward two steps, save orientation, say A.
Turns right and moves forward. Returns to A. Turns left and moves forward.

Dit was leuk en leerzaam en heb zo verschillenden bomen kunnen creëren. Het lukt me nog niet om seizoenen toe te passen of de boom steeds te laten veranderen uit zichzelf. Eerlijk gezegd loop ik nu ook een beetje vast en zie ik door de bomen het bos niet meer.


### Week-4
Ik heb dus verschilden bomen los van elkaar gecreëerd. Deze week naar school geweest en van elkaar feedback ontvangen. Mensen vonden mijn bomen mooi en ik kreeg tips om bijvoorbeeld de verschillende bomen samen te voegen tot één concept.

Thuis weer aan de slag gegaan, dit keer met de L systeem boom. Het gaat niet erg soepel en begin steeds meer een zooitje van de code te maken. Ik wil graag dat de boom groeit door te klikken op het scherm. Dat is gelukt, nu wil ik dat na vier klikken de boom veranderd in een andere boom die groeit en zo verder. Dat onderdeel lukt me nog niet. 

### Week-5 (Beoordelingsweek)
Danny heb ik om hulp gevraagd, hij heeft mijn bestand geordend en een begin gemaakt aan dat de boom na vier klikken opnieuw een andere boom genereerd. Ik ben nu zelf bezig dit af te maken, het lukt me nog niet echt en raak gefrustreerd. Daarom heb hulp gevraag aan Pepijn, hoop dat die reageert. Zelf nu maar opzoek gegaan naar hoe de code steeds weer te laten resetten. Hier heb ik een tutorial over gevonden dus maar hopen dat dit werkt.


## Bronnenlijst
* https://www.youtube.com/watch?v=lm8Y8TD4CTM
* https://www.youtube.com/watch?v=fcdNSZ9IzJM
* https://www.youtube.com/watch?v=E1B4UoSQMFw
* http://paulbourke.net/fractals/lsys/
* https://github.com/TanviKumar/treegen
* https://github.com/TanviKumar/treegen/blob/master/script.js
* https://codepen.io/franksLaboratory/pen/abzyVme
* https://github.com/someuser-321/TreeGenerator/commit/832293ef827974d9a65afdf6f76ad56c348486a7
* https://github.com/nenadV91/Fractal-tree
* https://github.com/erdavids/Portfolio/tree/master/generative-plants
