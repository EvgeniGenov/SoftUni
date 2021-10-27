function cinemaTickets(input) {
    let index = 0;
    let command = input[index++];
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let totalTicketsCounter = 0;


    //("student", "standard", "kid")

    while (command !== 'Finish') {
        let nameMovie = command;
        let freeSeats = Number(input[index++]);
        let typeOfTickets = input[index++];
        let totalTickets = 0;

        while (typeOfTickets !== 'End') {
            totalTickets++;

            switch (typeOfTickets) {

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
            if (totalTickets >= freeSeats) {
                break;
            }
            typeOfTickets = input[index++];
        }
        totalTicketsCounter += totalTickets;
        console.log(`${nameMovie} - ${(totalTickets / freeSeats * 100).toFixed(2)}% full.`);
        command = input[index++];


    }

    let totalStandard = standardTicket / totalTicketsCounter * 100;
    let totalStudent = studentTicket / totalTicketsCounter * 100;
    let totalKid = kidTicket / totalTicketsCounter * 100;

    console.log(`Total tickets: ${totalTicketsCounter}`);
    console.log(`${totalStudent.toFixed(2)}% student tickets.`);
    console.log(`${totalStandard.toFixed(2)}% standard tickets.`);
    console.log(`${totalKid.toFixed(2)}% kids tickets.`);

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














// if (typeOfTickets === 'student') {
//     studentTicket++;
//     totalTickets++;
// } else if (typeOfTickets === 'standard') {
//     standardTicket++;
//     totalTickets++
// } else if (typeOfTickets === 'kid') {
//     kidTicket++;
//     totalTickets++
// }