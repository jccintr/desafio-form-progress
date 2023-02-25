
import { useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState({
    fullName: '',
    email: '',
    maritalStatus: '',
    genre: ''
  });

  const handleChange = (event) => {
    const {name,value} = event.target;

   const newData = {...data,[name]:value};
   setData(newData);
   console.log(newData);
  }

  const calculateProgress = () => {
    let progresso = 0;
    let addAmount = 25
    if(data.fullName){
      const explodeString = data.fullName.split(' ');
      if(explodeString[1]){
        progresso += addAmount;
      }
      
    }
    if(data.email){
      let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if(pattern.test(data.email)){
        progresso += addAmount;
      }
      
    }
    if(data.maritalStatus){
      progresso += addAmount;
    }
    if(data.genre){
      progresso += addAmount;
    }
    
    return progresso;
  }

  calculateProgress();

  const onSendClick = ()=>{
    alert("Formulário enviado com sucesso.");
    setData({
      fullName: '',
      email: '',
      maritalStatus: '',
      genre: ''
    });
  }

  return (
    <div className='App'>
      <h3>desafio react</h3>
      <h1>progresso do formulário</h1>

      <main>
        {/* crie a barra de progresso aqui */}
        <div className='bar-container'>
          <div className="bar" style={{width:`${calculateProgress()}%`}}>

          </div>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Nome Completo</label>
          <input name="fullName" value={data.fullName} onChange={handleChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor=''>E-mail</label>
          <input name="email" value={data.email} onChange={handleChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Estado Civil</label>
          <select name="maritalStatus" value={data.maritalStatus} onChange={handleChange}>
            <option value=''>- selecione...</option>
            <option value='solteiro'>Solteiro</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Gênero</label>
          <div className='radios-container'>
            <span>
              <input type='radio' name="genre" value="masculino" onChange={handleChange} checked={data.genre === 'masculino'}/> Masculino
            </span>
            <span>
              <input type='radio' name="genre" value="feminino" onChange={handleChange} checked={data.genre === 'feminino'}/> Feminino
            </span>
          </div>
        </div>
        <button onClick={onSendClick} disabled={calculateProgress()!==100}>Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;
