var canvas=new fabric.canvas('canvas');
x=10;
y=10;
largura=30;
altura=30;
var jogador='';
var bloco='';
function atualizar(){
    fabric.Image.fromURL('New Piskel (1).png',function(Img){
        jogador=Img;
        jogador.scaleToWidth(150);
        jogador.scaleToHeight(140);
        jogador.set({
            top:y,
            left:x
        });
        canvas.add(jogador);
    });
}
function bloco(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        objeto=Img;
        objeto.scaleToWidth(largura);
        objeto.scaleToHeight(altura);
        objeto.set({
            top:y,
            left:x+150
        });
    canvas.add(objeto);
    });
}e
window.addEventListener('keyDown',tecla);
function tecla(e){
    var teclapressionada=e.keyCode;
    console.log(teclapressionada)
    if(teclapressionada=='38'){
       cima();
    };
    if(teclapressionada=='40'){
        baixo();
     };
     if(teclapressionada=='37'){
        esquerda();
     };
     if(teclapressionada=='39'){
        direita();
     };
    
}
function cima()
{
	if(y >=0)
	{
		y = y - altura;
		console.log("autura da imagem do bloco = " + altura);
		console.log("Quando a tecla direcional Cima for pressionada, X =  " + x + " , Y = "+y);
		canvas.remove(jogador);
		atualizar();
	}
}

function baixo()
{
	if(y <=500)
	{
		y = y + altura;
		console.log("altura da imagem do bloco = " + altura);
		console.log("Quando a tecla direcional Baixo for pressionada, X =  " + x + " , Y = "+y);
		canvas.remove(jogador);
		atualizar();
	}
}

function esquerda()
{
	if(x >0)
	{
		x = x - largura;
		console.log("largura da imagem do bloco = " + largura);
		console.log("Quando a tecla direcional Esquerda for pressionada, X =  " + x + " , Y = "+y);
		canvas.remove(jogador);
		atualizar();
	}
}

function direita()
{
	if(x <=850)
	{
		x = x + largura;
		console.log("largura da imagem do bloco = " + largura);
		console.log("Quando a tecla direcional Direita for pressionada, X =  " + x + " , Y = "+y);
		canvas.remove(jogador);
		atualizar();
	}
}

