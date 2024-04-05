//primitivni
var godine = 20;
var ime = "sonja";
var studira = true;
//nizovi
var predmeti = ["epos", "klijentske", "cloud"];
var ocene = [10, 8, 9];
//tuples
var tuple = ["sonja", 20];
//enum
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElektronskogPoslovanja"] = 0] = "TehnologijeElektronskogPoslovanja";
    Modul[Modul["SoftverskoInzenjerstvo"] = 1] = "SoftverskoInzenjerstvo";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeElektronskogPoslovanja;
//objekat
var student = {
    ime: "sonja",
    godine: 20,
    studira: true
};
//unija tipova
var brojIliString = 10;
//any tip
var biloSta = "moze bilo koji tip";
//void
function cao() {
    console.log("cao");
}
//null undefined
var n = null;
var u = undefined;
var nekaVrednost = "neki string";
var duzinaStringa = nekaVrednost.length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n, u);
console.log(duzinaStringa);
