function coins(input) {
    let sum = Number(input[0]);
    let stotinki = Math.floor(sum * 100);
    let counter = 0;

    while (stotinki > 0) {
        if (stotinki >= 200) {
            counter++;
            stotinki -= 200;
        } else if (stotinki >= 100) {
            counter++;
            stotinki -= 100;
        } else if (stotinki >= 50) {
            counter++;
            stotinki -= 50;
        } else if (stotinki >= 20) {
            counter++;
            stotinki -= 20;
        } else if (stotinki >= 10) {
            counter++;
            stotinki -= 10;
        } else if (stotinki >= 5) {
            counter++;
            stotinki -= 5;
        } else if (stotinki >= 2) {
            counter++;
            stotinki -= 2;
        } else if (stotinki >= 1) {
            counter++;
            stotinki -= 1;
        }
    }
    console.log(counter);
}
coins(["1.23"])