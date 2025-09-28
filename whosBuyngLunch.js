function whosPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(numberOfPeople * Math.random());
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}

whosPaying(["Stanimira", "Miro", 'Hachi']);






