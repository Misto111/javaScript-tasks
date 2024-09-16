function lifeInWeeks(age) {

    var daysInYear = 365;
    var weeksInYear = 52;
    var monthsInYear = 12;
    var yearsForLife = 90;
    
    var peopleTotalDay = daysInYear * age;
    var totalDayForLife = yearsForLife * daysInYear;
    var daysLeft = totalDayForLife - peopleTotalDay;

    var peopleTotalWeeks = weeksInYear * age;
    var totalWeeksForLife = weeksInYear * yearsForLife; 
    var weeksLeft = totalWeeksForLife - peopleTotalWeeks;

    var peopleTotalMonths = monthsInYear * age;
    var totalMonthsForLife = yearsForLife * monthsInYear;
    var monthsLeft = totalMonthsForLife - peopleTotalMonths; 
    
    console.log("You have " + daysLeft + " days" + ", " + weeksLeft + " weeks" + ", " +  "and " + monthsLeft + " months left.");
    
}

  lifeInWeeks(56);






