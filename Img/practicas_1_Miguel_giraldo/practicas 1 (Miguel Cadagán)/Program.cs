// See https://aka.ms/new-console-template for more information

//@autor: Miguel Cadagán
//@fecha: 2023/03/30
//@comentario: Ambiente inicial de C#
Console.WriteLine("Hola, mundo de C#");

//definición de variables
//primera forma de definición de variables con diferentes notaciones
//int salario_base; //snake_case
//int salarioBase; //camelCase
//int SalarioBase; //PascalCase

//segunda forma de definición de variables
//int salario_base, salarioBase, SalarioBase;

//tercera forma de definición de variables: Definición e inicialización
//int salario_base = 35;
int salario_base;

//definición de variables tipo cadena de caracteres (string)
//string nombre = "Miguel Ángel";
string nombre;

//definir variables tipo float (flotantes)
//se tuvo que pasar estas variables a "double" para que las operaciones pudieran dar de forma correcta
double por_salud, por_pension, salud, pension, salario_neto, comision;

//leer datos por consola (Console.ReadLine())
Console.WriteLine("Programa para calcular el salario neto del usuario");

//Console.Write("Ingrese su nombre: ")
Console.WriteLine("Ingrese su nombre: ");
nombre = Console.ReadLine();

//salario_base = Console.ReadLine() -> se requiere hacer un casting
Console.WriteLine("Ingrese su salario base: ");
salario_base = int.Parse(Console.ReadLine()); //casting

//operaciones

por_pension = 0.045; //4.5/100
por_salud = 0.04; //4/100

salud = salario_base*por_salud;
pension = salario_base*por_pension;
salario_neto = salario_base-(salud+pension);

//condición
if (salario_neto>=1200000)
{
    comision = salario_neto*0.05;
}
else
{
    comision = salario_neto*0.1;
}


//mostrar por pantalla/finalización
Console.WriteLine("Señor(a) " + nombre + " su salario neto es del: $" + salario_neto + " También se le ha agregado una comisión de: $" + comision);
Console.WriteLine("Su coste de pensión es de: $" + pension);
Console.WriteLine("Su coste de salud es de: $" + salud);
