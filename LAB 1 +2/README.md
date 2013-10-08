Github
======

Hva er dette?

IS-104
Elev: Jens Holm
Semester: høst 2013

Hva gjør denne websiden?

Denne websiden er en webapplikasjon for å presentere forskjellige programmeringsspråk.

[LAB 1 v.01]

IS-104 oppgave [Kontrollspørsmål]
 
0) Les introduksjon til JavaScript på http://w3schools.com/js/js_intro.asp og svar på følgende
spørsmål, ­ hva kan JavaScript brukes til?
 
- JavaScript er svært enkelt å implementere. Alt du trenger å gjøre er å sette koden i HTML-dokumentet og fortelle leseren at det er JavaScript.
- JavaScript fungerer på web brukernes datamaskiner - selv når de er offline!
- JavaScript lar deg lage svært grensesnitt som forbedrer brukeropplevelsen og gi dynamisk funksjonalitet, uten å måtte vente på at serveren skal reagere og vise en annen side.
- JavaScript kan laste innhold inn i dokumentet hvis og når brukeren trenger det, uten å laste hele siden - dette er ofte referert til som Ajax.


1) Les minst de to gitte linkene og forklar med dine egne ord forskjell på CSS id og class elementer
http://www.tizag.com/cssT/cssid.php
http://css­tricks.com/the­difference­between­id­and­class/
 
- ID er en bra egenskap, men det er veldig lett å bruke dem feil. Du kan bare bruke ID navn en gang i XHTML eller HTML dokumentet. Duplikat av ID-kodene vil føre til at siden vil mislykkes valideringen, og kan ha negative effekter ved bruk av JavaScript med dem. Enkelt sagt, er en ID unikt.
- Class , som ID-tallet, kan også brukes i JavaScript, men i motsetning til ID-tallet, kan de brukes flere ganger i samme HTML-dokumentet. Class kan ikke bare bli brukt mer enn en gang, men mer enn en kan bli brukt på et element.
 
 
2) Vurder og sammenlign brukbarhet til versjoner i deloppgave 0 og deloppgave 1 avdesignet for presentasjon av en liste (ta utgangspunkt at listen er mye lengre enn vist i skjermbildene, over 100 elementer).
 
- Versjonen i deloppgave 0 er en enkel liste. Du må scrolle deg nedover på siden for å se på de forskjellige elementene. Vis vi sier det er over 100 elementer kan listen bli veldig lang. Når du lager en annen presentasjon av listen som vi gjøre i deloppgave 1 kan du f.eks velge “actionscript” og deretter trykke på forbokstaven til programeringsspråket du vil ha i listen. 

3) Med hvilken HTML teknikk og designløsning løser Wikipedia
(http://en.wikipedia.org/wiki/List_of_programming_languages) problemstilling med en lang liste
av programmeringsspråk?

- Wikipedia bruker HTML <td> tag som lager forskjellige celler i alfabetisk rekkefølge. Dette gjøre det lettere for leserens øye å fange opp de forskjellige forbokstavene. 

4) Ved å søke på WWW finn ut selv og forklar kort hva som er hovedforskjeller mellom et
<div> og et <span> element (tagg) i HTML.

- Dette betyr at for å bruke dem semantisk, bør <div> brukes til å pakke inn deler av et dokument, mens <span> bør brukes til å pakke inn små porsjoner av tekst, bilder, osv.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[LAB 2 v.02]

1) Forklar hvilken deler av din applikasjon så langt, implementerer de forskjellige lagene i MVC
arkitekturen. MVC står får Model­View­Controller, som til norsk kan oversettes til
Modell­Presentasjon­Kontorller.

2) 

ModelViewController består av tre forskjellige ledd. 

1. Modell(Innhold): Det er en av modellene som lager/mellomlagrer informasjon som brkeren enten legger inn (skjema)
eller "tar ut" (surfe).

Denne modellen i min applikasjon så langt gjør at når brukeren trykker på drop down-menyen så får brukeren beskjed (alert) om at siden er 
under konstruksjon samt når kunden velger en av programmeringsspråkene fra "form" får de et svar (output) for hvilket språk brukeren har valgt.

2. Kontrolleren: Tar inn informasjon i form av hendelser fra det såkalte "bruekrregisteret" og bruker "modellen" for å returne en presentasjon
som resultat av tekst. 

Denne modellen i min applikasjon så langt registrerer handlingene brukeren gjør å sender den informasjonen til modellen. 

3. Presentasjonlaget:  Applikasjon som motar kodet informasjon Presentasjon blir laget av en applikasjon som mottar kodet
informasjon (HTML og eventuelt CSS, JavaScript) og basert på det opptegner denne applikasjonen et skjermbilde som vi
også kaller for brukergrensesnitt.

Denne modellen gjør at min applikasjon er avhenig av at brukeren har en applikasjon (webbrowser) for å kunne se innholdet og bruke kontrolleren. 














