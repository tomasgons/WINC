const tellFortune = function(jobTitle, geoLocation, partner, amountKids) {
  let future =
    "You will be a " +
    jobTitle +
    " in " +
    geoLocation +
    " and married to " +
    partner +
    " " +
    " with " +
    amountKids +
    " kids.";
  console.log(future);
};

tellFortune("programmer", "japan", "melania", 5);
tellFortune("putjesschepper", "Samoa", "Beyonce", 100);
tellFortune("surfer", "Alaska", "the ocean", 20);
