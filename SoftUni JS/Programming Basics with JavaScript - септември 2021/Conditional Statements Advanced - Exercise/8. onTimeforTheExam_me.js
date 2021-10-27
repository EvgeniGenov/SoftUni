function onTime(input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourStudent = Number(input[2]);
    let minuteStudent = Number(input[3]);

    let timeExamMinutes = hourExam * 60 + minuteExam;
    let timeStudentMinutes = hourStudent * 60 + minuteStudent;

    if (timeExamMinutes < timeStudentMinutes) {
        console.log("Late");

        let diff = timeStudentMinutes - timeExamMinutes;

        if (diff >= 60) {
            let h = Math.floor(diff / 60);
            let min = diff % 60;
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
        } else {
            let min = diff % 60;
            console.log(`${min} minutes after the start`);
        }

    } else if (timeExamMinutes - timeStudentMinutes <= 30) {
        console.log("On time");

        let diff = timeExamMinutes - timeStudentMinutes;

        if (diff !== 0) {
            let min = diff % 60;
            console.log(`${min} minutes before the start`);
        }
    } else {
        console.log("Early");
        let diff = timeExamMinutes - timeStudentMinutes;
        if (diff >= 60) {

            let h = Math.floor(diff / 60);
            let min = diff % 60;
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${min} hours before the start`);
        }
    }

}
onTime(["11",
    "30",
    "8",
    "12"
])