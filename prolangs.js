// JavaScript Document
<script type="text/javascript">
function endring()
{
var valg="";

valg = document.getElementById("select_id").value; 

if(valg==""){
	document.getElementById("melding").innerHTML="Velg et språk ";}

else{document.getElementById("melding").innerHTML="<b>Du har selektert programeringsspråket " +valg;
}}
</script>