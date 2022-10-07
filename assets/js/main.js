/* Calcolo costo biglietto del treno */

/* Milestone 1 */

/* Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console. */

/* Costanti */

// Chilometri percorsi
const kmTraveled = document.getElementById("km");
// Età del passeggero
const passengerAge = document.getElementById("age");
// Prezzo in base ai km (0.21 € al km)
const ticketPrice = (kmTraveled * 0.21);
// Sconto del 20%
const underageDiscount = 0.2
// Sconto del 40%
const over65Discount = 0.4

/* Calcolo prezzo biglietto */

// 
// Crezione del pulsante per generare il costo del biglietto
const priceGenerator = document.querySelector('button');
// Impostare una funzione al nostro pulsante
priceGenerator.addEventListener('click', function() {

    console.log('Ho cliccato sul pulsante');
    const kmTraveled = document.getElementById("km");
    console.log('Chilometri percorsi:', kmTraveled.value);
    const passengerAge = document.getElementById("age");
    console.log('Età passeggero:', passengerAge.value);
    if (passengerAge < 18) {
        const underageTicketPrice = ((kmTraveled * 0.21) - underageDiscount);
        console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(underageTicketPrice));
    // Se il passeggero ha più di 65 anni applica il 40% di sconto
    } else if (passengerAge > 65) {
        /* const over65Discount = ((passengerAge * 40) /100); */
        const over65TicketPrice = (ticketPrice - over65Discount);
        console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(over65TicketPrice));
    // Altrimenti non applicare nessuno sconto
    } else {
        console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(ticketPrice));
    }





})






/* Milestone 2 */

/* Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il riepilogo dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */