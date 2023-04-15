function price(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    if (ticketQuantity <= 100) {
        const ticketPrice = first100Rate * ticketQuantity;
        return ticketPrice;
    }
    else if (ticketQuantity <= 200) {
        const firstTicketPrice = first100Rate * 100;
        const restTicketIn200 = ticketQuantity - 100;
        const restTicketIn200Price = restTicketIn200 * second100Rate;
        const totalCostIn200 = firstTicketPrice + restTicketIn200Price;
        return totalCostIn200;
    }
    else{
        const first100TicketPrice = first100Rate * 100;
        const restTicket200Price = second100Rate * 100;
        const restTicket300 = ticketQuantity - 200;
        const restTicket300Price = restRate * restTicket300;
        const totalConstUpTo300 = first100TicketPrice + restTicket200Price + restTicket300Price;
        return totalConstUpTo300;
    }
}

const myTicketNumber = price(301);
console.log(myTicketNumber);