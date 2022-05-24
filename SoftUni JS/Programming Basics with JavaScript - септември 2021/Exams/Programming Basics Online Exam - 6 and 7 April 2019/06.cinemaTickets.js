function cinemaTickets(input) {
    let index = 0;
    let command = input[index++];
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let totalTickets = 0;
    let totalTicketsCounter = 0;



    while (command !== 'Finish') {
        let movie = command;
        let seats = Number(input[index++]);

        let type = input[index++];
        totalTickets = 0;

        while (type !== 'End') {
            totalTickets++;
            totalTicketsCounter++;
            switch (type) {

                case 'student':
                    studentTicket++;
                    break;

                case 'standard':
                    standardTicket++;
                    break;

                case 'kid':
                    kidTicket++;
                    break;
            }

            if (totalTickets >= seats) {
                break;
            }
            type = input[index++];

        }

        let diff = (totalTickets / seats * 100).toFixed(2);
        console.log(`${movie} - ${diff}% full.`);
        command = input[index++];


    }

    console.log(`Total tickets: ${totalTicketsCounter}`);
    console.log(`${(studentTicket / totalTicketsCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicket / totalTicketsCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicket / totalTicketsCounter * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
])