// JavaScript Document
function endring()
{
var valg="";

valg = document.getElementById("select_id").value; 

if(valg==""){
	document.getElementById("melding").innerHTML="Velg et språk ";}

else{document.getElementById("melding").innerHTML="<b>Du har selektert programeringsspråket " +valg;
}}

function konstruksjon()
{
alert("Denne siden er under konstruksjon!");
}
