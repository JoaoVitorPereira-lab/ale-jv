import './App.css';
import CardPessoa from './components/cardPessoa'

function App() {

  function usuarioClicou(){
    alert('usuário clicou')
  }

  function usuarioAlterou(event){
    alert('usuário alterou para ' + event.target.value)
  }

  function usuarioTeclou(event){
    alert('usuário teclou o' + event.key)
  }

  function usuarioMexeuMouse(event){
    alert('usuário mexeu o mouse em X:' + event.screenX + 'e Y ' + event.screenY)
  }

  let nome = "João";
  let idade = 16;

  let nome2 = "Ale";
  let idade2 = 17;

  return (
    <div className="App">
      <header className="App-header">
          <h1 onClick={usuarioClicou} onMouseMove={usuarioMexeuMouse}> Olá, seja bem-vindo! </h1>

          <input type="text" onChange={usuarioAlterou} onMouseDown={usuarioTeclou}/>

          <button onClick={usuarioClicou}> Clique aqui </button>
      
          <h1> Componentes </h1>

          <CardPessoa nome={nome} idade={idade} tema="escuro" alinhamento="box-column" avatar=""/>

          <CardPessoa nome={nome2} idade={idade2} tema="claro" alinhamento="box-column" avatar="https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg"/>

          <CardPessoa nome="Luís"/>

          <CardPessoa nome="Nathanael"/>
      </header>
    </div>
  );
}

export default App;
