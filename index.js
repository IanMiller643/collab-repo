const weather = (temp) => {
    if (temp > 50) {
        console.log("It's hot");
    }
    else {
        console.log("It's cold");
    }
}

weather(60);
weather(50);