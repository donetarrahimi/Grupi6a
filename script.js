
let cmimiLibrit = 12.50;
let sasiaLibrave = 3;
let cmimiFletores = 1.80;
let sasiaFletoreve = 4;

let totaliLibrave = cmimiLibrit * sasiaLibrave;
let totaliFletoreve = cmimiFletores * sasiaFletoreve;

let totaliFatures = totaliLibrave + totaliFletoreve;
totaliFatures += 2.50;

console.log("===== 01. FATURA E LIBRARISE =====");
console.log("Librat: " + totaliLibrave + " €");
console.log("Fletoret: " + totaliFletoreve + " €");
console.log("Transporti: 2.50 €");
console.log("Totali: " + totaliFatures + " €");


let aktiviteti = 18;
let projekti = 24;
let provimi = 43;

let totalPike = aktiviteti + projekti + provimi;
let perqindja = (totalPike / 100) * 100;

console.log("\n===== 02. PIKET E STUDENTIT =====");
console.log("Rezultati fillestar: " + totalPike + " pike");
console.log("Perqindja: " + perqindja + "%");

provimi = 48;

totalPike = aktiviteti + projekti + provimi;
perqindja = (totalPike / 100) * 100;

console.log("Pas korrigjimit: " + totalPike + " pike");
console.log("Perqindja e re: " + perqindja + "%");

let akomodimi = 96;
let transporti = 42;
let ushqimi = 57;

let kostoTotale = akomodimi + transporti + ushqimi;
let pjesaPersonit = kostoTotale / 3;

let buxheti = 80;
let parateMbetura = buxheti - pjesaPersonit;

console.log("\n===== 03. NDARJA E SHPENZIMEVE =====");
console.log("Kostoja totale eshte " + kostoTotale + " euro.");
console.log("Secili person paguan " + pjesaPersonit + " euro.");
console.log("Secilit person i mbeten " + parateMbetura + " euro.");


let produkti1 = 35;
let produkti2 = 24;

let cmimiParaZbritjes = (2 * produkti1) + produkti2;
let zbritja = cmimiParaZbritjes * 0.15;
let cmimiPasZbritjes = cmimiParaZbritjes - zbritja;

let transportiPorosise = 4;
let cmimiFinal = cmimiPasZbritjes + transportiPorosise;

console.log("\n===== 04. POROSIA ME ZBRITJE =====");
console.log("Cmimi para zbritjes: " + cmimiParaZbritjes + " €");
console.log("Zbritja 15%: " + zbritja + " €");
console.log("Cmimi pas zbritjes: " + cmimiPasZbritjes + " €");
console.log("Transporti: " + transportiPorosise + " €");
console.log("Cmimi final: " + cmimiFinal + " €");


let vlera1 = "25";
let vlera2 = "17";
let vlera3 = "8";

let rezultatiTekst = vlera1 + vlera2 + vlera3;

console.log("\n===== 05. KONVERTIMI I TE DHENAVE =====");
console.log("Pa konvertim: " + rezultatiTekst);

let numri1 = Number(vlera1);
let numri2 = Number(vlera2);
let numri3 = Number(vlera3);

let shuma = numri1 + numri2 + numri3;
let mesatarja = shuma / 3;

console.log("Shuma: " + shuma);
console.log("Mesatarja: " + mesatarja);
console.log("Tipi i shumes: " + typeof shuma);
console.log("Tipi i mesatares: " + typeof mesatarja);


let eHene = 95;
let eMarte = 80;
let eMerkure = 115;

let totalMinuta = eHene + eMarte + eMerkure;
let ore = totalMinuta / 60;
let minutaMbetura = totalMinuta % 60;

console.log("\n===== 06. KOHA E MESIMIT =====");
console.log("Minutat totale: " + totalMinuta);
console.log("Koha ne ore: " + ore);
console.log("Minutat e mbetura: " + minutaMbetura);

let stoku = 120;

console.log("\n===== 07. MENAXHIMI I STOKUT =====");
console.log("Stoku fillestar: " + stoku);

stoku -= 18;
console.log("Pas shitjes se pare: " + stoku);

stoku -= 27;
console.log("Pas shitjes se dyte: " + stoku);

stoku += 35;
console.log("Pas furnizimit: " + stoku);

let cmimiNjesise = 6.75;
let vleraStokut = stoku * cmimiNjesise;

console.log("Vlera e stokut: " + vleraStokut + " €");

let flete = 157;
let fletePerStudent = 6;

let grupet = parseInt(flete / fletePerStudent);
let mbetja = flete % fletePerStudent;

let kontrolli = (grupet * 6) + mbetja;

console.log("\n===== 08. SHPERNDARJA E MATERIALEVE =====");
console.log("Grupet e plota: " + grupet);
console.log("Fletet e mbetura: " + mbetja);
console.log("Kontrollimi: " + kontrolli);


let cmimi1 = Number("19.90");
let cmimi2 = Number("8.50");

let sasia1 = 2;
let sasia2 = 3;

let totali1 = cmimi1 * sasia1;
let totali2 = cmimi2 * sasia2;

let shumaPorosise = totali1 + totali2;
let tarifa = shumaPorosise * 0.10;

let shumaFinale = shumaPorosise + tarifa;
let rezultati = shumaFinale.toFixed(2);

console.log("\n===== 09. TARIFA E SHERBIMIT =====");
console.log("Artikulli 1: " + totali1 + " €");
console.log("Artikulli 2: " + totali2 + " €");
console.log("Shuma e porosise: " + shumaPorosise + " €");
console.log("Tarifa 10%: " + tarifa + " €");
console.log("Shuma finale: " + rezultati + " €");
console.log("Tipi i rezultatit: " + typeof rezultati);

let pjesemarres = 45;
let pagesa = 12;

let teArdhurat = pjesemarres * pagesa;

let salla = 180;
let materialet = 95;
let reklama = 60;

let shpenzimet = salla + materialet + reklama;
let diferenca = teArdhurat - shpenzimet;

console.log("\n===== 10. RAPORTI I AKTIVITETIT =====");
console.log("Te ardhurat: " + teArdhurat + " €");
console.log("Shpenzimet fillestare: " + shpenzimet + " €");
console.log("Diferenca fillestare: " + diferenca + " €");

shpenzimet += 25;

diferenca = teArdhurat - shpenzimet;

console.log("Shpenzimet pas shteses: " + shpenzimet + " €");
console.log("Diferenca perfundimtare: " + diferenca + " €");
