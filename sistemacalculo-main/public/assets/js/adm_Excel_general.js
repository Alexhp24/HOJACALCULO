$(document).ready(function () {
    $("#desingButton").click((e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del botón
        //variables generales
        const tabla = {
            A: {
                Eprom:	130000,
                fm:	210,
                fc:	145,
                fct:	40,
                fv	:15,
                ft	:145

            },

            B: {
                Eprom :130000,
                fm:210,
                fc:145,
                fct:40,
                fv:15,
                ft:145
            },
            C: {
                Eprom :90000,
                fm:100,
                fc:80,
                fct:15,
                fv:8,
                ft:75
            }
        }
        const selectabc = document.getElementById("selectabc").value;
        const fcprime = parseFloat(document.getElementById("fcprime").value);
        const fy = parseFloat(document.getElementById("fy").value);
        const base = parseFloat(document.getElementById("base").value);
        const altura = parseFloat(document.getElementById("altura").value);      
        const momentoultimo = parseFloat(document.getElementById("momentoultimo").value);
        const vucortante = parseFloat(document.getElementById("vucortante").value);
        const cieloraso = parseFloat(document.getElementById("cieloraso").value);
        const sobrecarga = parseFloat(document.getElementById("sobrecarga").value);

        const Emin = tabla[selectabc].Eprom;
        const fm = tabla[selectabc].fm;
        const fc = tabla[selectabc].fc;
        const fct = tabla[selectabc].fct;
        const fv = tabla[selectabc].fv;
        const ft = tabla[selectabc].ft;


        document.getElementById("predimenension").innerHTML += `
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>Modulo de elasticidad</td>
            <td class='py-2 px-4'>Emin</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${Emin} kg/cm<sup>2</sup></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>Esfuerzo admisible a flexion</td>
            <td class='py-2 px-4'>fm</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fm} kg/cm<sup>2</sup></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>Esfuerzo admisible a la compresion</td>
            <td class='py-2 px-4'>fc</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fc} kg/cm<sup>2</sup></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>Esfuerzo admisible compresion perpendicular a las fiestas </td>
            <td class='py-2 px-4'>fc┴</td>
            <td class='py-2 px-4'></td>
            <td class='py-2 px-4 text-center'>${fct} kg/cm<sup>2</sup></td>
        </tr>
         <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>Esfuerzo admisible al corte paralelo</td>
            <td class='py-2 px-4'>fv</td>
            <td class='py-2 px-4'></td>
            <td class='py-2 px-4 text-center'>${fv} kg/cm<sup>2</sup></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>- </td>
            <td class='py-2 px-4'>ft</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${ft} kg/cm<sup>2</sup></td>
        </tr>`;

        const b = fcprime * 2.54;
        const h =fy * 2.54;

         document.getElementById("dimensionamiento").innerHTML += `
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>- </td>
            <td class='py-2 px-4'>a</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${b} cm</td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>- </td>
            <td class='py-2 px-4'>b</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${h} cm</td>
        </tr>
         `;
         const CM = momentoultimo + vucortante + cieloraso;
         const CV = sobrecarga;
         const CMCV = CM+CV;
         const W = CMCV*altura;

        document.getElementById("combinaciondecargas").innerHTML += `
         <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>- </td>
            <td class='py-2 px-4'>CM</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${CM} kg/m<sup>2</sup></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>CV</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${CV} kg/m<sup>2</sup></td>
        </tr>

        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>- </td>
            <td class='py-2 px-4'>CM+CV</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${CMCV} kg/m<sup>2</sup></td>
       </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>CV</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${W} kg/m</td>
       </tr>
       
       `;
       


        document.getElementById("analisisestructural").innerHTML += `
         <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>W</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${W} kg/m></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 84.38kg></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 52.73kg-m></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 84.38kg></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>Momento</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 52.73kg-m></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>Cortante</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 84.38kg-m></td>
        </tr>
        `;
        document.getElementById("desingFlexion").innerHTML += ` `;
        document.getElementById("modulo41").innerHTML += `
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>1.1fm</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 231kg/cm<sup>2</sup>></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>Zrequerido</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 22.83kg/cm<sup>3</sup>></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>Z</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 231kg/cm<sup>3</sup></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'></td>
            <td class='py-2 px-8'></td>
            <td class='py-2 px-8'>ZZreq CUMPLE</td>
            <td class='py-2 px-8'></td>
           
        </tr>
        `;
        document.getElementById("modulo42").innerHTML += `
         <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>(solo calculo de flecciones)</td>
            <td class='py-2 px-4'>W<sub>equivalente</sub></td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 1.8W<sub>d</sub>+W<sub>1</sub></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>W<sub>e</sub>1</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 85.5kg/m</td>
        </tr>
         <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>W<sub></sub>2</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 45kg/m</td>
        </tr>
         <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>PARA LA CARGAR TOTAL</td>
            <td class='py-2 px-4'>K</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 250</td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>I</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 334.52</td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>PARA LA SOBRECARGA</td>
            <td class='py-2 px-4'>K</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 350</td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>I</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 246.49</td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>Imax</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 334.52 cm<sup>4</sup></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>I</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 443.98 cm<sup>4</sup></td>
        </tr>
        `;
        document.getElementById("modulo43").innerHTML += `
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>I</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 77.5 Kg</td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>V<sub>(h)</sub></td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 84.38 Kg</td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>1.1fv</td>
            <td class='py-2 px-4'>-</td>
            <td class='py-2 px-4 text-center'>${fy} 16.5Kg/cm<sup>2</sup></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>t<sub>(h)</sub></td>
            <td class='py-2 px-4'>1.1fv>t<sub>h</sub></td>
            <td class='py-2 px-4 text-center'>${fy} 2.25Kg/cm<sup>2</sup></td>
        </tr>
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>t</td>
            <td class='py-2 px-4'>1.1fv>t</td>
            <td class='py-2 px-4 text-center'>${fy} 2.45Kg/cm<sup>2</sup></td>
        </tr>
        `;
        document.getElementById("modulo44").innerHTML += `
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>h/b</td>
            <td class='py-2 px-4'></td>
            <td class='py-2 px-4 text-center'>${fy} 2.00</td>
        </tr>`;
        document.getElementById("modulo45").innerHTML += `
        <tr class="bg-gray-100 dark:bg-gray-600">
            <td class='py-2 px-8'>-</td>
            <td class='py-2 px-4'>a</td>
            <td class='py-2 px-4'></td>
            <td class='py-2 px-4 text-center'>${fy} 0.42cm</td>
        </tr>`;

    });
});
