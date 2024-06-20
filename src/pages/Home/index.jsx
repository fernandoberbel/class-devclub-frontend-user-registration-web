import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "00000000",
      name: "Fernando",
      age: 34,
      email: "fernando@email.com",
    },
    {
      id: "00000000",
      name: "Fernando",
      age: 34,
      email: "fernando@email.com",
    },
  ];

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input type="text" placeholder="Nome" name="name" />
        <input type="number" placeholder="Idade" name="age" />
        <input type="email" placeholder="E-mail" name="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              E-mail: <span>{user.email}</span>
            </p>
          </div>

          <button>
            <img src={Trash} alt="icone lixeira" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
