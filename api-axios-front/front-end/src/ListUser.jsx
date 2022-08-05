import {useEffect, useState} from "react";
import {api} from "./service/api.js";

export const ListUser = () => {

    const [usuarios, setUsuarios] = useState([])
    const [load, setLoad] = useState(false)

    async function getUser(){
        setLoad(true)
        await api.get("/usuario")
            .then(res => setUsuarios(res.data))
            .catch(err => console.log(err))
        setLoad(false)
    }

    useEffect(() => {
        getUser();
    }, [])

    useEffect(() => {
        console.log("Load alterado:"+ load)
    }, [load])

    return(
        <>
            {load ? <img src={"https://www.cursoorion.com.br/wp-content/uploads/2019/11/aguarde.gif"} /> : usuarios.map((usuario, idx) => {
                    return(
                        <div key={idx}>
                            <h1>{usuario.nome +" "+ usuario.sobrenome}</h1>
                            <p>{usuario.idade}</p>
                            <button onClick={() => console.log(usuario.idade)}>AJSDHGF</button>
                        </div>
                    )
                })}
        </>
    )
}