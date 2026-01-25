import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botao from '../Botao'
import { useState } from 'react'
const Formulario = (props) => {

    const  [nome, setNome] = useState('')
    const  [cargo, setcargo] = useState('')
    const  [imagem, setimagem] = useState('')
    const  [time, setTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
            props.aoColaboradorCadastrado({ nome,
                 cargo,
                  imagem,
                  time

            })
            setNome('')
            setcargo('')
            setimagem('')
            setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setcargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite seu endereço da imagem" valor={imagem} aoAlterado={valor => setimagem(valor)}/>
                <ListaSuspensa label="Times" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao > 
                    Criar Card
                </Botao>

            </form>
        </section>
    )
}

export default Formulario