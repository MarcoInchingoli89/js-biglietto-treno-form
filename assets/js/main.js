/* Calcolo costo biglietto del treno */

/* Costanti */

// Sconto del 20%
const underageDiscount = 0.2
// Sconto del 40%
const over65Discount = 0.4

/* Calcolo prezzo biglietto */

// Creazione del pulsante per generare il costo del biglietto
const priceGenerator = document.querySelector('button');
// Impostare una funzione al nostro pulsante
priceGenerator.addEventListener('click', function() {

    // Nome e congnome dell'utente
    const userName = document.getElementById("userName").value;
    console.log('Nome e Cognome:', userName);
    document.getElementById("passenger_name").innerHTML = userName;
    // Chilometri che si vuole percorrere
    const kmTraveled = Number(document.getElementById("km").value);
    console.log('Chilometri percorsi:', `${kmTraveled} km`);
    // Età del passeggero
    const passengerAge = Number(document.getElementById("age").value);
    console.log('Età del passeggero:', passengerAge);
    // Se il passeggero ha meno di 18 anni applica il 20% di sconto
    if (passengerAge < 18) {
        const underageTicketPrice = ((kmTraveled * 0.21) - underageDiscount);
        document.getElementById("ticket_price").innerHTML = (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(underageTicketPrice));
    // Se il passeggero ha più di 65 anni applica il 40% di sconto
    } else if (passengerAge > 65) {
        const over65TicketPrice = ((kmTraveled * 0.21) - over65Discount);
        document.getElementById("ticket_price").innerHTML = (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(over65TicketPrice));
    // Altrimenti non applicare nessuno sconto
    } else {
        document.getElementById("ticket_price").innerHTML = (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(kmTraveled * 0.21));
    }

})