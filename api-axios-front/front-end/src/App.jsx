import { useState } from 'react'
import {api} from "./service/api.js";

function App() {

    const [name, setName] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [idade, setIdade] = useState(0)

    const postUser = (e) => {
        e.preventDefault();
        api.post("/usuario/", {
            nome: name,
            sobrenome: sobrenome,
            idade: idade
        }).then(res => console.log(res.data))
            .catch(err => console.error(err))
    }

  return (
    <div className="App">
        <form>
            <input type={"text"}
                   onChange={(e) => setName(e.target.value)}
                   placeholder={"Nome do usuario"}/>
            <input type={"text"}
                   onChange={(e) => setSobrenome(e.target.value)}
                   placeholder={"Sobrenome do usuario"}/>
            <input type={"number"}
                   onChange={(e) => setIdade(e.target.value)}
                   placeholder={"idade"} />

            <button onClick={(e) => postUser(e)}>Enviar</button>
        </form>
    </div>
  )
}

export default App
