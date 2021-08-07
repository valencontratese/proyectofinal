import { useState, useEffect } from 'react';
import axios from 'axios';

const ScoresTable = props => {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    axios.get('/api/scores', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => setScores(res.data));
  }, []);
  // render
  return (
    <div className="ScoresTable">
      <h2>Puntajes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Trivia</th>
            <th>Usuario</th>
            <th>Puntaje</th>
            <th colspan="2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(score => (
            <tr key={score._id}>
              <td>{score._id}</td>
              <td>{score.quiz.title}</td>
              <td>{score.user.username}</td>
              <td>{score.score}</td>
              <td>
                <button>Editar</button>
              </td>
              <td>
                <button>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoresTable;
