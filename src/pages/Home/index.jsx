import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get("/users");

    setUsers(usersFromApi.data);
  }

  async function createUsers() {
    await api.post("/users", {
      name: inputName.current.value,
      idade: parseInt(inputAge.current.value), // parseInt() para converter o valor string recebido do input para int
      email: inputEmail.current.value,
    });

    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`);

    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input type="text" placeholder="Nome" name="name" ref={inputName} />
        <input type="number" placeholder="Idade" name="age" ref={inputAge} />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          ref={inputEmail}
        />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.idade}</span>
            </p>
            <p>
              E-mail: <span>{user.email}</span>
            </p>
          </div>

          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="icone lixeira" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
