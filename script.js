var res=0,num=1,tabla=1;
$( document ).ready(function() {
 
 	$("#juego").hide();
	iniciar();
	$("#btnjugar").click(jugar);
	$("#btnjugaragain").click(again);
	$("#btninstrucciones").click(instrucciones);
	$("#btnvolver").click(volver);
	$("#btninfo").click(info);
	$("#btnvolverres").click(volverres);
	$("#btnvolverinfo").click(volverinfo);
	//$("#botones").hide();
	$("#si").click(sumar);
	$("#no").click(nosumar);
});

function iniciar(){
	$("#respuesta").hide();
	$("#instrucciones").hide();
	$("#info").hide();
	$("#tabla1").hide();
	$("#tabla2").hide();
	$("#tabla3").hide();
	$("#tabla4").hide();
	$("#tabla5").hide();
	$("#tabla6").hide();
	$("#tabla7").hide();
	}

function jugar(){
	res=0;
	num=1;
	tabla=1;
	$("#home").hide("slow");
	$("#juego").show("slow");
	$("#botones").show("slow");
	$("#tabla1").show("slow");
	}
function sumar(){
res=res+num;
num=num*2;
$("#tabla"+tabla+"").hide("slow");
tabla=tabla+1;

$("#tabla"+tabla+"").show("slow");
if(tabla==8){
	//alert("tu numero es:"+res);
	$("#botones").hide("slow");
	$("#respuesta").show("slow");
	if(res>100){
	$("#respuestah1").text("Estas haciendo trampa, hazlo otra vez.");	
		}else{
	$("#respuestah1").text("El número en el que pensaste es: "+res);
		}
	}
}

function nosumar(){
	num=num*2;
	$("#tabla"+tabla+"").hide("slow");
	tabla=tabla+1;
	$("#tabla"+tabla+"").show("slow");
	if(tabla==8){
	//alert("tu numero es:"+res);
	$("#botones").hide("slow");
	$("#respuesta").show("slow");
	if(res>100 || res==0){
	$("#respuestah1").text("Estas haciendo trampa, hazlo otra vez.");	
		}else{
	$("#respuestah1").text("El número en el que pensaste es: "+res);
		}
	}
	}
function again(){
	res=0;
	num=1;
	tabla=1;
	$("#respuesta").hide("slow");
	$("#juego").show("slow");
	$("#botones").show("slow");
	$("#tabla1").show("slow");
	}
function instrucciones(){
	$("#home").hide("slow");
	$("#instrucciones").show("slow");	
	}
function info(){
	$("#home").hide("slow");
	$("#info").show("slow");	
	}
function volver(){
	$("#instrucciones").hide("slow");
	$("#home").show("slow");
	
	}
function volverres(){
	$("#respuesta").hide("slow");
	$("#home").show("slow");
	//$("#botones").show();
	}
function volverinfo(){
	$("#info").hide("slow");
	$("#home").show("slow");
	}