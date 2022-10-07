/* Calcolo costo biglietto del treno */

/* Costanti */

// Nome del passeggero
const userName = document.getElementById("userName").value;
// Chilometri percorsi
const kmTraveled = document.getElementById("km").value;
// Età del passeggero
const passengerAge = document.getElementById("age").value;
// Prezzo in base ai km (0.21 € al km)
const ticketPrice = (kmTraveled * 0.21);
// Sconto del 20%
const underageDiscount = 0.2
// Sconto del 40%
const over65Discount = 0.4

/* Calcolo prezzo biglietto */

// Creazione del pulsante per generare il costo del biglietto
const priceGenerator = document.querySelector('button');
// Impostare una funzione al nostro pulsante
priceGenerator.addEventListener('click', function() {

    /* console.log('Ho cliccato sul pulsante'); */
    console.log('Nome e Cognome:', userName);
    document.getElementById("passenger_name").innerHTML = userName;
    console.log('Chilometri percorsi:', `${kmTraveled} km`);
    console.log('Età del passeggero:', passengerAge);
    // Se il passeggero ha meno di 18 anni applica il 20% di sconto
    if (passengerAge < 18) {
        const underageTicketPrice = (ticketPrice - underageDiscount);
        document.getElementById("ticket_price").innerHTML = (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(underageTicketPrice));
    // Se il passeggero ha più di 65 anni applica il 40% di sconto
    } else if (passengerAge > 65) {
        const over65TicketPrice = (ticketPrice - over65Discount);
        document.getElementById("ticket_price").innerHTML = (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(over65TicketPrice));
    // Altrimenti non applicare nessuno sconto
    } else {
        document.getElementById("ticket_price").innerHTML = (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(ticketPrice));
    }

})