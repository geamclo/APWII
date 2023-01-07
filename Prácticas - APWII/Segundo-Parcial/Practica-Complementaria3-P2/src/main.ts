import './style.css'
import axios from 'axios'
import { IResPropina, Propina } from './interfaces/IPropina';
const httpAxios =  axios.create({
  baseURL:'http://localhost:8000',
})



const app = document.querySelector<HTMLDivElement>('#app')!
//#region mapa de elementos
const etiqueta = document.createElement("label")
etiqueta.textContent="ID"
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);
app.innerHTML += `

<label for ="valor_propina">Valor Propina</label><input id="valor_propina"/>
<label for ="id_mesero">ID Mesero</label><input id="id_mesero"/>
<label for ="id_cliente">ID Cliente</label><input id="id_cliente"/>
<label for ="fecha">Fecha</label><input id="fecha"/>
<label for ="hora">Hora</label><input id="hora"/>
<button id="new" >New</button>
<button id="save" >Save</button>
<button id="query" >Query</button>
<div id="body"/>
`
const newb = document.querySelector<HTMLButtonElement>('#new')!
const save = document.querySelector<HTMLButtonElement>('#save')!
const query = document.querySelector<HTMLButtonElement>('#query')!

const id = document.querySelector<HTMLInputElement>('#id')!


const id_mesero = document.querySelector<HTMLInputElement>('#id_mesero')!
const id_cliente = document.querySelector<HTMLInputElement>('#id_cliente')!
const status = document.querySelector<HTMLInputElement>('#status')!
const fecha = document.querySelector<HTMLInputElement>('#fecha')!
const hora = document.querySelector<HTMLInputElement>('#hora')!
const valor_propina = document.querySelector<HTMLInputElement>('#valor_propina')!
const body = document.querySelector<HTMLDivElement>('#body')!
//#endregion


newb.addEventListener('click',()=>{
  id_mesero.value=""
  id_cliente.value=""
  fecha.value=""
  hora.value=""
  valor_propina.value=""
  id.value=""
})
query.addEventListener('click', async ()=>{
  const respPropinas:IResPropina
  =  await (await httpAxios.get<IResPropina>('propina')).data;

    const tabla   = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"


    const { propinas } = respPropinas;
    console.log(respPropinas)

    for (const propina of propinas)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${propina}" >${propina}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${propina}`
    }
    body.innerHTML=``
    body.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const Propina:Propina 
          =  await (await httpAxios.get<Propina>(`propina/${idx}`)).data;
          id_mesero.value= Propina.id_mesero;          
          id_cliente.value= Propina.id_cliente;  
          fecha.value= Propina.fecha;  
          hora.value= Propina.hora;
          valor_propina.value= Propina.valor_propina;  
          id.value= Propina._id!;  
           
      })
    })

  

    

  

})
save.addEventListener('click',async ()=>{
  const data:Propina = {
    id_mesero:id_mesero.value,
    id_cliente:  id_cliente.value,
    fecha:fecha.value,
    hora:hora.value,
    valor_propina:valor_propina.value,
  }

  if (id.value.trim().length>0 )
  {
    //        
    const resp: Propina = await (await httpAxios.put<Propina>(`propina/${id.value}`, data)).data
    console.log(resp)
    console.log(`El valor de la propina ${resp.valor_propina} fue modificado con exitosamente`);
    
    return;
  }
  try {
    const resp: Propina =  await (await httpAxios.post<Propina>(`propina`, data)).data
    console.log(`El valor de la propina ${resp.valor_propina} ha sido guardado exitosamente`);
  } catch (error) {
    if ( axios.isAxiosError(error)  )
    {
      console.log(error );
      
    }
    
  }
  
  
})