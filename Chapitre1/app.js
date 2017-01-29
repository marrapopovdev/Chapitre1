// Declaration de variable
//var x: number;
//var y: number;
//var z: number = 20;
//var a = 0.5; //Type inference-->Le type est detecté par JS 
//x = 15;
//y = 10;
//console.log(a);
//Type de variables
//Boolean
//var x: boolean = false;
//var y: boolean = true;
//Nombre
//var nombre: number = 10;
//var nombre2: number = -500;
//Chaine de caractere
//var nom: string = "John";
//var prenom: string = 'Doe';
//var description: string = "c'est un inconnu";
//console.log(nom + ' ' + prenom + ' ' + description);
//Tableaux typé
//var tableauNotes: number[] = [1, 5, 10, 15, 20];
//Tableau generique
//var tableauNombre: Array<number> = [1, 2, 3];
//var tableauChaineCaractere: Array<string> = ["John", 'Jane', "c'est un inconnu"];
//console.log(tableauNombre);
//console.log(tableauChaineCaractere);
//Enumeration
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 15] = "Green";
    Color[Color["Blue"] = 23] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c); //15
//# sourceMappingURL=app.js.map