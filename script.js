/*
let myName = 'Alice';
const myName = 'Alice';
var myName = 'Alice';
*/
/*
const age = 30;
const age = 40;
*/

/*
let age = 44; // Din ålder
let name = 'Tommy'; // Ditt namn
const isStudent = true; // Är du en student? true eller false
*/
/*
let age = 44;
console.log (age)*/
/*
let z:
console.log(z);*/
/*
let city = 'stockholm';
console.log(city);*/
/*






//Datatyper
1 Är följande if sats true eller false?
let a = 1;
let b = '1';
if(a == b) ; //true , ==jämför värdena men === jämför både värdet och datatypen
*/

/*2 Vilket av följande tecken visar ett kodblock?
[] // A 
() // B
{} // C
*/

/*3 Vilket av följande syntax är det korrekta sättet att skriva strängar?
"Hello World" // A den
'Hello World' // B och den
`Hello World` // C
*/

//4 Vad kommer stå i console.log()? = Hello World
/*let greeting = 'Good bye world';
greeting = 'Hello World';
console.log (greeting);*/

//5. Vilka datatyper är följande uttryck? Använd typeof i konsolen för att kontrollera ditt svar

//5
//console.log(typeof (5));number
//'Pannkaka'
//console.log(typeof ('pannkaka'));=string
//5 && 8
//console.log(typeof (5 && 8));number
//true
//console.log(typeof (true));=boolean
//null
//console.log(typeof (null));=Object
//undefined
//console.log(typeof (undefined));=undefined
//NaN
//console.log(typeof (NaN));=Number
//false || true
//onsole.log(typeof (false));=Boolean
//console.log(typeof (true));=Boolean
//true && false || false && true
//console.log(typeof (true && false));=Boolean
//console.log(typeof (false && true));=Boolean
//'två' < 'tre'
//console.log(typeof ('två' < 'tre'));=Boolean
//1.01
//console.log(typeof (1.01));=number
//"1000" / 10
//console.log(typeof ("1000" / 10));=number
//!!5
//console.log(typeof (!!5));=Boolean
//17.000000000000000000001 == 17
//console.log(typeof (17.000000000000000000001 == 17));=Boolean
//1 + 2 * 3 + 4 * 5 + 6
//console.log(typeof (1 + 2 * 3 + 4 * 5 + 6));=number
//123.4 - ''
//console.log(typeof (123.4 - ''));=number
//2 < 3
//console.log(typeof (2 < 3));=Boolean
//Pannkaka
//console.log(typeof (Pannkaka));=undefined
//5 || 8
//console.log(typeof (5 || 8));//=number
//typeof (typeof true)
//console.log(typeof (typeof true));=string

//6.  Hur tar man reda på vad en variabel har för datatyp?= type of ?

//7
//let age = 44; //=number
//let name = 'Tommy';=string
//let  isStudent = true;
//console.log(typeof (tommy));

//8. Skapa en strängvariabel med ditt namn och skriv ut den med console.log()
//let namn = 'Tommy';
//console.log(typeof namn);

//9. Vilka datatyper finns det i JS? Svara i form av en array.
//let datatypes = [Number , 'String' , Boolean , Null , Undefined , Bigint , Symbol , Object]

//10. Gör följande:
//● Skapa variabeln myNum och tilldela den ett nummer.
//let myNum = 40;
//● Skapa variabeln myBool och tilldela den en boolean.
//let myBool = false;
//● Skapa variabeln myStr och tilldela den en sträng.
//const myStr = "vinter";

//💡Level-up
//1. Skriv ett program som frågar vad användaren heter och skriver ut "Välkommen <NN>!"
// där <NN> är användarens namn.
//Tips: använd console.log för att skriva ut och prompt för att hämta input från användaren.
//  Se till att spara namnet i en variabel.

/*let namn;
namn = prompt ("Vad heter du ?")
console.log ("Välkommen",namn);*/

//2. Skriv ett program som frågar användaren efter två tal och sparar dem i variabler.
// Sedan ska det skriva ut talens summa, diff erens och produkt.

//let tal1 = prompt ("Säg ett tal")

//let tal2 = prompt ('Säg ett till tal')

//let totalSumma = Number(tal1) + Number(tal2);

//alert("Totalsumman blir = " + totalSumma + " (och är datatypen " + typeof totalSumma + ")");

//3. Skriv ett program som frågar användaren efter ett tal.
// Programmet ska skriva ut talet avrundat till ett heltal. Extra utmaning: skriv ut talet avrundat till en decimal i

// Fråga användaren efter ett tal
/*let tal1 = prompt("Skriv ett tal:");

// Konvertera strängen till ett tal
let tal = Number(tal1);

// Avrunda till heltal
let heltal = Math.round(tal);

// Avrunda till en decimal
let enDecimal = tal.toFixed(1);

// Skriv ut båda resultaten
alert("Avrundat till heltal: " + heltal + "\nAvrundat till en decimal: " + enDecimal);*/

//Logical operators

//1. Vilket sätt finns det att jämföra om två värden är lika?
//strikt jämförelse === jämför både värde och datatyp ,eller == jämför bara värde

//2. Vilket sätt finns det att jämföra/kolla i fall två värden är olika?
//strikt jämförelse !=== jämför både värde och datatyp ,eller !== jämför bara värde

//3. Hur kan vi kolla om ett värde är större/mindre än ett annat?
//>Större än och <mindre än

//4. Förklara hur vi kan kolla om ett värde är större än eller lika med ett annat värde?
//>= större än eller lika med , eller <= lika med eller mindre

//5. Vilket tecken används för att kolla om två (eller fler) villkor är uppfyllda? Tips! Vilket tecken representerar “och”?
//Ett logiskt OCH-tecken = &&

//6. Vilket tecken används för att kolla om ena eller det andra villkoret är uppfyllt? Tips! Vilket tecken representerar “or”?
//Eller-tecken = ||

//Arrayer

//7. Förklara vad en array är och vilka datatyper den kan bestå av.
//En array är som en lista där man kan lagra flera olika datatyper i en och samma variabel

//8. Gör en array som innehåller 5 st olika frukter av datatypen string.
//let frukter = ['äpple', 'banan', 'apelsin', 'kiwi', 'mango'];

//9. Gör en array som innehåller 3 olika datatyper, ex. string, number, array.
//let olikaDatatyper = ['Dator', 20, ['äpple', 'banan', 'apelsin']];

//let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
//3.console.log(animals.length) //hur många värden arrayen ovan innehåller.

//4. I arrayen ovan, hämta cat.
//console.log(animals[0]);

//5. I arrayen ovan, hämta funky chihuahua.
//console.log(animals[3]);

//6. I arrayen ovan, byt ut hamster mot tiger.
//let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
//console.log((animals[1] = tiger));

//💡Level-up

//let a = [1,2,3,7,8,9];
//let b = [4,5,6];
//Merga ner array b på index 3 i array a.

//a.splice(3, 0, ...b);
//console.log(a); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//let arr = ['a', 'b', 'c'];
//Klona ovanstående array. Tips: Kolla på array-metoder
//let kopia = arr.slice();

//Loopar

//Classic For loops
/*
for (let i = 0; i < 10; i++) {
console.log(i);
}
*/

//1. Skapa en loop som itererar 1000 varv.
//För varje iteration ska du console.log() vilket varv du är på.
/*
for (let i = 0; i < 1000; i++) {
console.log(i);
}
*/

//2. Skapa en loop som räknar ner från 100 till 0.
//För varje varv ska du console.log() vilket varv du är på.
/*
for (let i = 100; i > 0; i--) {
  console.log(i);
}*/

//let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
//3. Loopa ut ovanstående array med en for-loop.
//För varje varv ska du console.log() innehållet ( frukten ).
/*
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}*/

//4. Loopa ut ovanstående array med console.log().
//Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv.
/*
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ". " + fruits[i]);
}*/

//Eget test av for lop
/*
for (let index = 0; index < 4; index++ ) {
    console.log (index)
}*/
/*
for (let index = 1; index <= 10; index++) {
    console.log (index)
}*/

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/

/*
const maxAntal = 200;
let antalInne = 10;


while (antalInne < maxAntal) {
antalInne++
console.log (antalInne);
}

//do {} while (condition)
*/

//For of loops

//for (variable of iterable) {
// // code block to be executed
//}

//let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
//6. Loopa ut ovanstående array och console.log() varje pryl med en for..of loop.}
/*
let prylar = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
for (let pryl of prylar) {
  console.log(pryl);
}*/

//ForEach-metoden

//let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

//7. Loopa ut ovanstående array och console.log() varje pryl med forEach()-metoden.
/*
let prylar = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

prylar.forEach(function(pryl) {
  console.log(pryl);
});*/

//8. Loopa ut ovanstående array och console.log() varje pryl samt vilken position i arrayen den har med forEach().
/*
let prylar = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

prylar.forEach(function(pryl, i) {
  console.log(i + ", " + pryl);
});
*/

//While loops

//1. Skapa en while-loop som kör 1000 varv. console.log() ut varje varv.
/*
let varv = 100;
while (varv <= 1000) {
  console.log(varv);
  varv+=100;
}
/*


//2. Kör programmet nedan. Vad skrivs ut? = y är:  10
/*
let x = 1, y = 0
while( x <= 4 ) {
y = y + x
x = x + 1
}
console.log('y är: ', y)
*/

//Ändra sedan så att programmet lägger ihop talen 1 till 10 i stället.
/*
let x = 1, y = 0
while( x <= 10 ) {
y ++;
x = x + y 
y++;  
y = y + x
x = x + 1
}
console.log(x)
*/

/*
let x = 1;
let summa = 0;

while (x <= 10) {
  summa += x;  // lägg till x i summan
  x++;         // gå vidare till nästa tal
}

console.log(summa); // 55
/*
/*
Förklaring:
• x	 börjar på 1
• summa	 samlar ihop alla tal
• summa + = x	 betyder "lägg till x i summa"
• x++	 ökar talet med 1 varje varv
• 	När x blir 11, avslutas loopen
*/

//Loop Arrays

//let fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];

//1. Loopa ut följande array med en forEach()-loop och console.log() varje ord.
/*
let fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];
fruits.forEach(function(fruit) {
  console.log(fruit);
});*/

//2. Loopa ut följande array med en for of-loop och console.log() varje ord.
/*
let fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];
for (let fruit of fruits) {
  console.log(fruit);
}*/

//3. Loopa ut följande array med en for-loop och console.log() varje ord.
/*
let fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];
for(let i = 0; i < fruits.length; i++ ) {
console.log(fruits[i]);
}*/

/*
4. Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex:
0 - apelsin
1 - päron
…
*/
/*
let fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];
for(let i = 0; i < fruits.length; i++ ) {
console.log(i + ' - ' + fruits[i]);
}*/

//💡Level-up

//10. Generera en kortlek med 52 kort där varje kort innehåller en färg ( suite ) och ett värde mellan 2 och 14 ( ess ). Ex:
//[..., 'hjärter 8', 'hjärter 9', ...]

/*
let kortlek =['hjärter1', 'hjärter2', 'hjärter3', 'hjärter4', 'hjärter5', 'hjärter6', 'hjärter7', 'hjärter8', 'hjärter9'];
console.log(kortlek);*/

// 11. Loopa ut samtliga vänners favoritfrukter med en console.log().
// let friends = [
//   {
//     name: "Sixten",
//     likes: ["bananas", "strawberries", "blueberries"],
//   },
//   {
//     name: "Khalid",
//     likes: ["papaya", "pear", "pineapple"],
//   },
//   {
//     name: "Lisa",
//     likes: ["raspberries", "watermelon", "apple"],
//   },
// ];

// for (let friend of friends) {
//   console.log(`${friend.name} gillar ${friend.likes.join(", ")}`)
// }



//If…else
// 1. Vad skrivs ut av följande kod? Svar = Sant
/*
let condition = true
if( condition ) {
console.log('Sant')
} else {
console.log('Falskt')
}
*/


//2.Vad händer när koden körs? Svar = Ingenting ,värdet är under 130
/*
let length = 122
if( length >= 130 ) {
console.log('Du får åka Balder!')
}*/


//3. Bygg om ovanstående kod så att längden är större än 130.
/*
let length = 142
if( length >= 130 ) {
console.log('Du får åka Balder!')
}*/



//4. Skriv färdigt programmet, så att det skrivs ut rätt årstid, i stället för frågetecknen. 
// Testa sedan att utöka programmet så att det även kan tala om ifall årstiden är vår (mars, april, maj).
/*
let month = 10
if( month >= 9 && month <= 11 ) {
console.log('Årstiden är: höst månad ' + month)
}*/


/*
let month = 4
if( month >= 9 && month <= 11 ) {
console.log('Årstiden är: höst månad ' + month)
}

else if( month >= 3 && month <= 5 ) {
console.log('Årstiden är: vår månad ' + month)
}
*/


//1. Skriv om någon av ovanstående loopar till en switch statement

/*
switch(expression) {
  case x:
    // kodblock
    break;
  case y:
    // kodblock
    break;
  default:
    // kodblock
}
*/

/*
let month = 5
switch(month) {
  case 9:
    console.log('Årstiden är: höst månad ' + month)
    break;
  case 10:
    console.log('Årstiden är: höst månad ' + month)
    break;
  case 11:
    console.log('Årstiden är: höst månad ' + month)
    break;
  case 3:
    console.log('Årstiden är: vår månad ' + month)
    break;
  case 4:
    console.log('Årstiden är: vår månad ' + month)
    break;
  case 5:
    console.log('Årstiden är: vår månad ' + month)
    break;
  default:
    //console.log("Du har angett en ogiltig månad " + month)
    alert("Du har angett en ogiltig månad " + month)
    // kodblock
}
*/





//Functions

//1. Skapa en funktion
//Skapa en funktion som tar två tal som argument och returnerar deras summa.
/*
function totalSumma(tal1, tal2) {
  return tal1 * tal2;
}
let resultat = totalSumma(5, 10);
console.log(resultat);
*/

//2. Räkna
//Skapa en funktion som tar ett heltal som argument och räknar upp från 1 till det 
//givna talet genom att logga varje nummer till konsolen.
/*
let tal = 5;
function räkna(tal) {
  for (let index = 0; index <= tal; index++) {
    console.log(index);
    
  }
}
räkna(tal);
*/


//3. Skriv ut förnamn
//Skapa en funktion som tar en sträng (ett namn) som argument och skriver ut "Hej, [namn]!" till konsolen.






//4. Skriv ut hela namnet
//Skapa en funktion som tar två strängar (för- och efternamn) som argument och returnerar en hälsningsfras som kombinerar dem.

//5. Räkna Baklänges
//Skapa en funktion som tar ett heltal som argument och räknar ner från det givna talet till 1 genom att logga varje nummer till konsolen.

//6. Arrow function
//Skapa en arrow function som tar två tal som argument och returnerar deras produkt.

//7. Dubblera ett tal
//Skapa en arrow function som tar ett tal som argument och returnerar dubbelt så stort värde.


