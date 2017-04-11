var limiteHorizontal = window.innerWidth;
var limiteVertical = window.innerHeight;

var puntuacion = 0;
var comida = 10;
var puntuacionMaxima = 100;
var marcador = document.getElementById('marcador');
var pacman = document.getElementById('pacman');
var punto = document.getElementById('punto');


/*function moverPacman(evento)
{	
	var izquierda = pacman.style.left;
	var arriba = pacman.style.top;
	var derecha = pacman.style.right;
	var abajo = pacman.style.bottom;


	switch(evento.which)
	{
		case 37:
		if(izquierda > limiteHorizontal)
			console.log("Fecha izquierda");
			pacman.style.left =+ '50px';
			break
		case 38:
			console.log("Fecha arriba");
			break
		case 39:
					if(derecha < 0)
					{
						console.log("Fecha derecha");
					derecha += 50 +"px";	
					}
					else
					{
						console.l
						og('caca de vaca');
					}
			
			break
			break
		case 40:
			console.log("Fecha abajo");
			break;
	}

}*/

var pacmanLeft = 100;
var pacmanRight = 100;
var pacmanTop = 100;
var pacmanBottom = 100;
var pacmanSize = 100;

var puntoTop = 100;
var puntoLeft= 100;
var puntoSize = 20;

var velocidad = 10;

inicio();
document.addEventListener("keydown", moverPacman);


function inicio()
{
pacman.style.left = pacmanLeft + "px";
pacman.style.top = pacmanTop + "px";
pacman.style.width = pacmanSize + "px";
pacman.style.height = pacmanSize + "px";


punto.style.width = puntoSize + "px";
punto.style.height = puntoSize + "px";

moverPunto();
console.log(puntoLeft);
}

function moverPunto()
{
	do
	{


	puntoLeft = parseInt(Math.random() * (limiteHorizontal- puntoSize));
	puntoTop = parseInt(Math.random() * (limiteVertical- puntoSize));
	}while(hayColision()==true);

	punto.style.left = puntoLeft + "px";
	punto.style.top = puntoTop + "px";
}


function hayColision()
{
	if((puntoLeft < pacmanLeft + pacmanSize) && (puntoLeft + puntoSize > pacmanLeft) && (puntoTop < pacmanTop + pacmanSize) && (puntoTop + puntoSize > pacmanTop))
	{
		console.log('winner');
		return true;
	}
	return false;
}

function moverPacman(evento)
{
	switch(evento.which)
	{
		case 37:
			if (pacmanLeft > 0)
			{
			pacmanLeft -= velocidad;
			}
			break;

		case 38:
			if(pacmanTop > 0)
			{
			pacmanTop -= velocidad;
			}
			break;

		case 39:
			if(pacmanLeft + pacmanSize < limiteHorizontal )
			{
			pacmanLeft += velocidad;
			}
			break;

		case 40:
			if(pacmanTop + pacmanSize <limiteVertical)
			{
			pacmanTop += velocidad;
			}
			break;

	}
	pacman.style.left= pacmanLeft + "px";
	pacman.style.top= pacmanTop + "px";

	if(hayColision () == true)
	{
		moverPunto();
		contadorVictoria();
	}

}



function contadorVictoria()
{
	puntuacion += comida; 
	marcador.innerHTML = puntuacion;



	if(puntuacion>= puntuacionMaxima)
				{
						alert('WINNER'); // se puede poner con confirm window.location = 'pacman.html';
				}

}

