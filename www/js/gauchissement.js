var imbares;
function controllo() {
    "use strict";
    if ( document.getElementById('rck').value === '') {
        var attenzione = document.getElementById('attenzione');
        alert("Inserez la resistance du beton en N/mmq");
    document.getElementById('rck').focus();
    } else {controllo5();}
}
function controllo5(){
var cespo=document.getElementById('classesp').value;
var rck=document.getElementById('rck').value;
if(cespo=='XC1' && rck < 30){
alert("ATTENZIONE:"+"\n"+"\n"+ " Resistance inferieur a 30 N/mmq, classe de resistance minimal admis pour XC1");
document.getElementById('rck').value='';
document.getElementById('rck').focus();

}else if (cespo=='XC2' && rck < 30){
alert("ATTENZIONE:"+"\n"+"\n"+ " Resistance inferieur a 30 N/mmq, classe de resistance minimal admis pour XC2");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
}else if (cespo=='XC3' && rck < 35) {
alert("ATTENZIONE: "+"\n"+"\n"+ "Resistance inferieur a 35 N/mmq, classe de resistance minimal admis pour XC3");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
}else if(cespo=='XC4' && rck < 40){
alert("ATTENZIONE:"+"\n"+"\n"+ " Resistance inferieur a 40 N/mmq, classe de resistance minimal admis pour XC4");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
}else if(cespo=='XF3' && rck < 30){
alert("ATTENZIONE:"+"\n"+"\n"+ " Resistance inferieur a 30 N/mmq, classe de resistance minimal admis pour XC1");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
}else if (cespo=='XF4' && rck < 35){
alert("ATTENZIONE:"+"\n"+"\n"+ " Resistance inferieur a 35 N/mmq, classe de resistance minimal admis pour per XF4");
document.getElementById('rck').value='';
document.getElementById('rck').focus();
} 
else {controllo1()

}
}
function controllo1() {
    "use strict"
     if ( document.getElementById('digiucont').value === '') {
         alert("entrez la distance des joints de retrait") ;
         document.getElementById('digiucont').focus();
         } else{controllo2();}
}
function controllo2(){
if(document.getElementById('umidita').value==''){
alert("insérez l'humidité relative") ;
document.getElementById('umidita').focus();
} else{
controllo3();}
}

function controllo3(){
if(document.getElementById('spesspav').value==''){
alert("inserez l'epaisseur de la dalle") ;
document.getElementById('spesspav').focus();
} else{
imbarcamento();}
}



function imbarcamento(){
 document.getElementById('pinserimento').style.display="none";
document.getElementById('risultati').style.display="block";
var rck=document.getElementById('rck').value;
var distcont=document.getElementById('digiucont').value;
var umrel=document.getElementById('umidita').value;
var spess=document.getElementById('spesspav').value;
var avvisa=document.getElementById('alertimbarca')  ;
var cespo=document.getElementById('classesp').value;
var tgetto=document.getElementById('tipogetto').value;
if ( document.getElementById('barriera').checked) {
    var barvap= "si";
} else {
barvap="no";
}
if (tgetto=="direct" && cespo=='XC1'){
var srit=700;}
if (tgetto=="direct" && cespo=='XC2'){
srit=700;}
if (tgetto=="direct" && cespo=='XC3'){
srit=650;}
if (tgetto=="direct" && cespo=='XC4'){
srit=600;}
if (tgetto=="direct" && cespo=='XF3'){
srit=600;}
if (tgetto=="direct" && cespo=='XF4'){
srit=550;}
if (tgetto=="avec pompe" && cespo=='XC1'){
srit=800;}
if (tgetto=="avec pompe" && cespo=='XC2'){
srit=800;}
if (tgetto=="avec pompe" && cespo=='XC3'){
srit=750;}
if (tgetto=="avec pompe" && cespo=='XC4'){
srit=700;}
if (tgetto=="avec pompe" && cespo=='XF3'){
srit=700;}
if (tgetto=="avec pompe" && cespo=='XF4'){
srit=650;}
if(umrel<40){
umi=1.15;
}else if (umrel==40) {
umi=1.1 ;
}else if (umrel>40 && umrel<60){
umi=1.1-((umrel-40)*0.01);
}else if(umrel>=60 && umrel<80) {
umi=0.9-((umrel-60)*0.02);
}else if(umrel>80){
umi=0.45;
}
if(cespo=='XC1'){ var ac=0.6; }
if(cespo=='XC2'){ var ac=0.6; }
if(cespo=='XC3'){ var ac=0.55; }
if(cespo=='XC4'){ var ac=0.5; }
if(cespo=='XF3'){ var ac=0.5; }
if(cespo=='XF4'){ var ac=0.45; }
var ritteo=(umi*srit*1.15)/1000000;
var disdia=Math.sqrt((Math.pow(distcont,2)+Math.pow(distcont,2))) ;
var raggio=((spess*(1-ritteo))/ritteo)/100;
var alfa=disdia/(raggio+(spess/100));
var alfa1=alfa/2;
var cosalfa1=Math.cos(alfa1);
var alfa2=1-cosalfa1;
var imb1=(raggio*alfa2)*100;
var imbarcafinale=imb1-((100-(spess*2.35)*imb1)/100);
var imbarcamfinale=Math.round(imbarcafinale*100)/100;
var imbarcamentot = document.getElementById('imbarcamentot');
if (barvap=="no"){
imbarcamentot.innerHTML="Le  gauchissement theorique entre le centre et l'intersection des joints sera de <span style='font:bold 18px arial;color:#ff2200;'>"+imbarcamfinale+"  </span> mm";
}else if (barvap=="si"){
var imbavapo = Math.round((imbarcafinale+(imbarcafinale*15/100))*100)/100;
imbarcamentot.innerHTML="Si le sol est imperm&eacute;able &agrave; l&rsquo;eau par une feuille de poly&eacute;thyl&egrave;ne, le gauchissement theorique entre le centre et les joints de retrait sera de <span style='font:bold 20px arial;color:#ff2200;'>"+imbavapo+"  </span> mm";
}
if (barvap=="no"){
    imbares = imbarcamfinale;
 
    } else if(barvap=="si"){
    imbares = imbavapo;
    
    }

if (imbares<2.5){
avvisa.innerHTML="Le gauchissement jusqu&rsquo;&agrave; 2,5 mm est acceptable";
}else if (imbares>5){
avvisa.innerHTML="<span style='font-weigth:bold;color:#ff2200;'>le gauchissement est sup&eacute;rieure &agrave; 5 mm. Sont n&eacute;cessaires r&eacute;parations</span>";
}else{
avvisa.innerHTML="Gauchissement entre 2,5 et 5,0 mm: D&eacute;cidez avec le client ce qu&rsquo;il faut faire";
}  
    
var canvas = document.getElementById("imbarcamento");
var ctx=canvas.getContext("2d");
var img=document.getElementById('imbpic');
ctx.drawImage(img, 0, -20);
ctx.font="18px arial";
ctx.fillStyle = "#000040";
ctx.textAlign = "center";
ctx.fillText("A = "+imbares+" mm", 235, 140)
 
}
function init(){
document.getElementById('intro').style.display="block";
document.getElementById('risultati').style.display="none";
document.getElementById('pinserimento').style.display="none";
}
function fineintro(){
document.getElementById('intro').style.display="none";
document.getElementById('pinserimento').style.display="block";
}
function esci(){
 app.exitApp();
}
function ripeti(){
window.location="index.html";
}
function gocalcolo(){
 window.location = "gauchissement.html";

} 
function inviamail(){
var pac=document.getElementById('classesp').value;
var contr=document.getElementById('digiucont').value;
var getto=document.getElementById('tipogetto').value;
var cls=document.getElementById('rck').value;
var spessore=document.getElementById('spesspav').value;
if(document.getElementById('barriera').checked){
var strimp="oui";
}else{
var strimp="no";
}
if (imbares<2.5){
var avvisai="Le gauchissement jusqu'a 2,5 mm est acceptable";
}else if (imbares>5){
avvisai="le gauchissement est superieure a 5 mm. Sont necessaires reparations";
}else{
avvisai="Gauchissement entre 2,5 et 5,0 mm: Decidez avec le client ce qu'il faut faire";
}  


var mess="DONNEES DE CALCUL %0d%0a -------------------------%0d%0a%0d%0aClasse d'exposition du beton        : "+pac+"%0d%0aResistance du beton                      : "+cls+" N/mmq%0d%0aEpaisseur de la dalle                     : "+spessore+" cm%0d%0aDistance entre les joint de retrait :  "+contr+" ml%0d%0aCoulage du beton                          : "+getto+"%0d%0asubstrait impermeable                  : "+strimp+"%0d%0a%0d%0a%0d%0aRESULTATS%0d%0a----------------------%0d%0aLe gauchissement theorique de la dalle entre le centre et l'intersection des joints de retraits sera de "+ imbares +" mm.;%0d%0a"+ avvisai;
var oggetto="Calcul du gauchissement de dalles -- Chantier de :"  ;
document.location.href = "mailto:?"+"Subject=" + oggetto + "&Body=" + mess; 
}



