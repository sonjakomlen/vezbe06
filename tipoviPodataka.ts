//primitivni

let godine:number = 20;
let ime:string = "sonja";
let studira:boolean=true;

//nizovi

let predmeti:string[]=["epos", "klijentske", "cloud"];
let ocene:number[]=[10, 8, 9];

//tuples

let tuple:[string, number]=["sonja", 20];

//enum

enum Modul{
    TehnologijeElektronskogPoslovanja, 
    SoftverskoInzenjerstvo,
    InformacioniSistemi
}
let modul:Modul = Modul.TehnologijeElektronskogPoslovanja;

//objekat

let student:{ime:string, godine:number, studira:boolean}={
    ime:"sonja", 
    godine:20, 
    studira:true
};

//unija tipova

let brojIliString:number | string=10;

//any tip

let biloSta:any="moze bilo koji tip";

//void

function cao ():void{
    console.log("cao");
}

//null undefined

let n:null = null;
let u:undefined = undefined;

let nekaVrednost:any = "neki string";
let duzinaStringa:number = (nekaVrednost as String).length;

console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n, u);
console.log(duzinaStringa);
