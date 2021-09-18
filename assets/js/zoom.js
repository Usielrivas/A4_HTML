 function addElement () {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("div");
     newDiv.id="btn"
  var newContent = document.createTextNode("Loading...");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

addElement();

const div= document.getElementById("btn");


        function btns(){
                    let comp= `
                             <style>

                               main{
                                transform-origin: top;
                               } 
                                #menos, #mas{
                                    cursor: pointer;
                                }

                                button#menos:disabled{
                                    cursor: not-allowed;
                                }

                                .fixbtn{
                                    position: fixed;
                                    bottom: 15px;
                                    right: 20px;
                                }
                                .btn{
                                    margin:2px;
                                    font-size:30px;
                                    width: 60px;
                                    border-radius: 10px;
                                    border: 1px solid gray;
                                    color: gray;
                                }
                                .btn:hover{
                                    color: black;
                                    border: 1px solid black;
                                }
                                .txtz{
                                    margin:0px;
                                    text-align: center;
                                    opacity: 0;
                                }

                                @keyframes opa{
                                    from{ opacity: 1}
                                    to{ opacity: 0}
                                }
                                @keyframes opa2{
                                    from{ opacity: 1}
                                    to{ opacity: 0}
                                }
                             </style>  
                            <style type="text/css" media="print">
                            /* Aquí irían tus reglas CSS específicas para imprimir */
                            #btn{
                                display:none;
                            }
 
                            main{
                                zoom: 100%;
                                scale:100%
                            }
                            </style>
                             <div class="fixbtn">
                                 <h1 id="muestra" class="txtz" data-time="opa">100%</h1>
                                 <div class="d-flex">
                                    <button id="mas" class="btn" data-zoom="100">+</button>
                                    <button id="menos"class="btn">-</button>
                                 </div>
                             </div>
                    `;

                    div.innerHTML= comp;
                    
                    document.getElementById("mas").addEventListener("click",function(){
                        mas();
                    } )

                    document.getElementById("menos").addEventListener("click",function(){
                        menos();
                    } )
                }

                function mas(){
                    let mas= document.getElementById("mas");
                    let valor= mas.getAttribute("data-zoom");
                    valor= parseInt(valor) + 10;
                    mas.setAttribute("data-zoom",valor);
                    let result= mas.getAttribute("data-zoom");
                    if(parseInt(result) > 10){
                        document.getElementById("menos").disabled= false;
                    }
                    zoom();
                   // console.log(result);
                }

                function menos(){
                    let mas= document.getElementById("mas");
                    let valor= mas.getAttribute("data-zoom");
                    valor= parseInt(valor) - 10;
                    mas.setAttribute("data-zoom",valor);
                    let result= mas.getAttribute("data-zoom");
                    if(result === "10"){
                        document.getElementById("menos").disabled= true;
                    }
                    zoom()
                    //console.log(result);
                }

                function zoom(){
                 let elemento= document.querySelectorAll("main")[0];
                 let valor= document.getElementById("mas").getAttribute("data-zoom");
                 let muestra= document.getElementById("muestra");
                 elemento.style= `zoom: ${valor}%;scale: ${valor}% `;
                 document.querySelectorAll("body")[0].style=`height: ${(1140/100)*valor}px`;
                 let time=document.querySelectorAll(".txtz")[0].getAttribute("data-time");
                 document.querySelectorAll(".txtz")[0].style= `animation: ${time} 3.5s;`;
                    if(time === "opa"){
                        document.querySelectorAll(".txtz")[0].setAttribute("data-time","opa2");
                    }else{
                        document.querySelectorAll(".txtz")[0].setAttribute("data-time","opa");
                    }
                 muestra.innerHTML= `${valor}%`;
                }

        btns();


