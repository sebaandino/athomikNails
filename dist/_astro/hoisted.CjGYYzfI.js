import"./hoisted.XYQjTWMW.js";document.getElementById("reservaForm").addEventListener("submit",function(n){n.preventDefault();const t=document.getElementById("calendar"),c=document.getElementById("time"),a=document.querySelector("option:checked"),r=t.value,s=c.value,m=a.textContent,e=`Hola, me gustaría reservar un turno.
            Fecha de Reserva: ${r}
            Hora Preferible: ${s}
            Servicio: ${m}`,o=`https://wa.me/541139064966?text=${encodeURIComponent(e)}`;console.log(e),console.log(o),window.open(o,"_blank")});
