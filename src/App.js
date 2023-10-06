import { useState } from 'react';
import './App.scss';
import axios from 'axios';


function App() {

  const[nomeProduto, setNomeProduto] = useState('');
  const[tipo, setTipo] = useState('');
  const[valor, setValor] = useState('');
  const[estoque, setEstoque] = useState('');
  const[validade, setValidade] = useState('');
  const[codigo, setCodigo] = useState('');

 async function AdicionarProduto() {
    let produto = {
      nome:nomeProduto,
      tipo:tipo,
      preco:valor,
      codigo:codigo,
      estoque:estoque,
      validade:validade
    }

    let url = 'http://localhost:5000/produto';
    let r = await axios.post(url, produto);
  
    alert('Produto Cadastrado com sucesso!')
  }

  

  async function DeletarProduto(id) {

    confirmAlert({
      title: 'PRODUTOS',
      message: 'Tem certeza que quer remover este item?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            let r = await axios.delete('http://localhost:5000/' + id);
            alert('Produto Removido!');
            buscarProdutos();
          }
        },
        {
          label:'Não'
        }
      ]
    });
  }

  return (
    <div className="pagina-mercado">
      <header>
        <img src='./assets/images/OcaMarket.png'></img>
      </header>

      <main>
        <h1>ADICIONAR PRODUTO</h1>

        <div className='tela-cadastro'>
          <div>
            <h5>Nome do Produto:</h5>
            <input type='text' value={nomeProduto} onChange={e => setNomeProduto(e.target.value)}></input>
            <hr></hr>
          </div>

          <div>
            <h5>Tipo do Produto</h5>
            <input type='text' value={tipo} onChange={e => setTipo(e.target.value)}></input>
            <hr></hr>
          </div>

          <div>
            <h5>Preço</h5>
            <input type='text' value={valor} onChange={e => setValor(Number(e.target.value))}></input>
            <hr></hr>
          </div>

          <div>
            <h5>Código do Produto</h5>
            <input type='text' value={codigo} onChange={e => setCodigo(e.target.value)}></input>
            <hr></hr>
          </div>

          <div>
            <h5>Estoque</h5>
            <input type='text' value={estoque} onChange={e => setEstoque(Number(e.target.value))}></input>
            <hr></hr>
          </div>

          <div>
            <h5>Validade</h5>
            <input type='date' value={validade} onChange={e => setValidade(e.target.value)}></input>
            <hr></hr>
          </div>

          <div className='botao-adicionar'>
            <button onClick={AdicionarProduto}>ADICIONAR</button>
          </div>
        </div>
      </main>

      <table>
        <thead>
          <h2>TABELA DE PRODUTOS</h2>
        </thead>

        <tbody>
          
          <hr></hr>
        </tbody>
      </table>
    </div>
  );
}

export default App;