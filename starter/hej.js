/**********************
Variabler och datatyper

*/
// Variabler=minne/behållare som du ger ett värde till och åberopar vid behov
/*
//förMamn är namnet på variabeln och värde/innehållet är texten 'Lamar'
var förNamn = 'Lamar';
console.log(förNamn);

var efterNamn = 'Gheljai';
var ålder = 25;

var fullÅlder = true;
console.log(fullÅlder);

var jobb;
console.log(jobb);

jobb = 'Systemutvecklare';
console.log(jobb);

// När man namnger Variabler så Måste det vara egna påhittade ord som inte finns i js språket
var _6år = 6;
var erikMackan = 'Erik och Mackan';
var if = 23;
*/

/*******************
Mutation utav variabler och datatyper 


var förNamn = 'Lamar';
var ålder = 25;

// Sammansättning av variabler o datatyper till samma rad 
console.log(förNamn + ' ' + ålder);

var jobb, ärGift;
jobb = 'Systemutvecklare';
ärGift = 'Nej';

console.log(förNamn + ' är en ' + ålder + ' år gammal ' + jobb + '. Är han gift? ' + ärGift);

// Mutera= penetrera/förändring/avvikelse utav Variabler
ålder = 'tjugofem';
jobb = 'ingenjör';

// Alternativ för console.log
alert(förNamn + ' är en ' + ålder + ' år gammal ' + jobb + '. Är han gift? ' + ärGift);

// Få data/ställa en fråga(pop up)
var efterNamn = prompt('Vad är hans efternamn?');
console.log(förNamn + ' ' + efterNamn);
*/

/************************************************
Grund operatörer/funktioner

// namnge flera variabler på samma rad sedan ge det ett värde 
var år, dåt, årLamar, årAlicia;
nut = 2018;
årtLamar = 25;
årtAlicia = 21;

// Matematiska operatörer/funktioner
årLamar = nut - årtLamar;
årAlicia = nut - årtAlicia;

console.log(årLamar);

console.log(nut + 2);
console.log(nut * 2);
console.log(nut / 10);

// Logiska operatörer/funktioner
var lamarÄldre = årtLamar < årtAlicia;
console.log(lamarÄldre);


// typeof operatörer/funktioner visar korrekt datatyp
console.log(typeof lamarÄldre);
console.log(typeof årtLamar);
console.log(typeof 'Lamar är äldre än Alicia');
var x;
console.log(typeof x);


/******************************************
Vilka operatörer har förtur?


var nu = 2018;
var årLamar = 1993;
var fullÅlder = 18;

// Multiple operators
var ärFullÅlder = nu - årLamar >= fullÅlder; // true

console.log(ärFullÅlder);

// Grouping
var ålderLamar = nu - årLamar;
var ålderAlicia = 21;
var medelÅlder = (ålderLamar + ålderAlicia) / 2;
console.log(medelÅlder);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// Fler operatörer
x *=2; //x = x * 2;
console.log(x);
x += 10; 
console.log(x);
x++;//x = x + 1;// x += 1;// x--(motsatt)
console.log(x);

/****************************************
Coding challenge
Comparing BMI
*/
/*
var johmHeight, markHeight, johnWeight, markWeight, isHigher;
johnHeight = 1.78;
johnWeight = 60;

markHeight = 1.70;
markWeight = 63;

bmiJohn = johnWeight / (johnHeight *=2);
bmiMark = markWeight / (markHeight *=2);
console.log(bmiMark, bmiJohn);

sHigher = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s?', isHigher);

*/

/**************************************************
  If / else statements
*/

/*
var förNamn = 'Lamar';
var civilStatus = 'Singel';

if (civilStatus === 'gift') {   
    console.log(förNamn + 'är gift!');
} else {
    console.log(förNamn + ' kommer nog vara gift inom en snar framtid :) ');
    
}

var ärGift = true;
if (ärGift) {
    console.log(förNamn + ' är gift! ');
} else {
    console.log(förNamn + ' kommer nog vara gift inom en snar framtid :) ');
}



var johmHeight, markHeight, johnWeight, markWeight, isHigher;
johnHeight = 1.78;
johnWeight = 60;

markHeight = 1.70;
markWeight = 63;

bmiJohn = johnWeight / (johnHeight *=2);
bmiMark = markWeight / (markHeight *=2);

*/


/******************************************
  Boolean logic
 */
/*

var förNamn = 'Daniel';
var ålder = 20;

if (ålder < 13) {
    console.log(förNamn + ' är ett barn.');
} else if (ålder >= 13 && ålder < 20) {// mellan 13 och 20 === ålder >= 13 Och ålder < 20
    console.log(förNamn + ' är en tonåring.');       
} else if (ålder >= 20 && ålder < 30) {
    console.log(förNamn + ' är en ungdom.');
} else { 
    console.log(förNamn + ' är vuxen.'); 
}

/**********************************************
  Ternary(conditioner) operator and switch statements
*/

// Ternary operators
var förNamn = 'Daniel';
var ålder = 16;
//condition ------------> if and else
ålder >= 18 ? console.log(förNamn + ' dricker öl.')
: console.log(förNamn + ' dricker juice.');

var dricka = ålder >= 18 ? 'öl' : 'juice';
console.log(dricka);
/*
if (ålder >= 18) {
    var dricka = 'öl';
} else {
    var dricka = 'juice';
}*/


// Switch statement
var jobb = 'lärare';
switch (jobb) {
    case 'lärare':
    case 'pedagog':   
        console.log(förNamn + ' lär ut programmering till barn.');
        break;
    case 'förare':
        console.log(förNamn + ' kör en uber i Stockholm.');
        break;
    case 'designer':
        console.log(förNamn + ' designar exceptionella hemsidor.');
        break;
    default:
        console.log(förNamn + ' har en annan sysselsättning.');
}

ålder = 56;
switch (true) {
    case ålder < 13:
        console.log(förNamn + ' är ett barn.');
        break;
    case ålder >= 13 && ålder < 20:
        console.log(förNamn + ' är en tonåring.');
        break;
    case ålder >= 20 && ålder < 30:
        console.log(förNamn + ' är en ungdom.');
        break;
    default:
        console.log(förNamn + ' är vuxen');
}


/* 
var förNamn = 'Daniel';
var ålder = 20;

if (ålder < 13) {
    console.log(förNamn + ' är ett barn.');
} else if (ålder >= 13 && ålder < 20) {// mellan 13 och 20 === ålder >= 13 Och ålder < 20
    console.log(förNamn + ' är en tonåring.');       
} else if (ålder >= 20 && ålder < 30) {
    console.log(förNamn + ' är en ungdom.');
} else { 
    console.log(förNamn + ' är vuxen.'); 
}*/







































































