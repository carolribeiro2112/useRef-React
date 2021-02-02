import React,{useRef} from 'react';
import axios from 'axios';

function App() {
  let inputName = useRef<HTMLInputElement>(null)
  let inputAge = useRef<HTMLInputElement>(null)
  let inputCompany = useRef<HTMLInputElement>(null)
  let inputPhone = useRef<HTMLInputElement>(null)

  const submitForm = () => {
    const nome = inputName.current?.value
    const idade = inputAge.current?.value
    const empresa = inputCompany.current?.value
    const telefone = inputPhone.current?.value
  

  let formData = {
    name: nome,
    age: idade,
    company: empresa,
    phone: telefone,
  }

  axios.post("http://localhost:4000/usuarios/",formData)
  
  }


  return (
    <div className="App"> 
      <h2>Usuários</h2>
      <input type="text" ref={inputName} placeholder="Digite o seu nome"/>
      <input type="text" ref={inputAge} placeholder="Digite a sua idade"/>
      <input type="text" ref={inputCompany} placeholder="Digite o nome da sua empresa"/>
      <input type="text" ref={inputPhone} placeholder="Digite o seu número de telefone"/>
      <button onClick={submitForm}>Enviar</button>
    </div>
  );
}

export default App;
