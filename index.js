var boton = document.getElementById('boton'),
    caja = document.getElementById('caja'),
    contador = 0;

    function cambio(){
        if(contador==0){
            caja.classList.add('azul');
            contador=1;
        }else{
            caja.classList.remove('azul');
            contador=0;
        }
    }
   
    boton.addEventListener('click',cambio,true)

    document.getElementById('boton').addEventListener('click', function() {
        document.getElementById('boton').style.display = 'none';
        document.getElementById('data').style.display = 'block'; 
        document.getElementById('dat').style.display = 'block'; 
        document.body.style.backgroundImage = 'none';

    });

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        document.getElementById('des').style.display = 'none';
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }
   
    