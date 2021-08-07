import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Quiz = props => {
  // props
  const { quiz } = props;
  const { title, questions } = quiz;
  // state
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  // handlers
  const handleClick = e => {
    const choice = parseInt(e.target.id);
    setNumber(prev => prev += 1);
    // update score
    if (choice === questions[number].correctAnswer)
      setScore(prev => prev += 1);
  };
  // post score when finished
  useEffect(() => {
    if (number === questions.length) {
      const data = {
        quiz: quiz._id,
        score
      };
      axios.post('/api/scores', data, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(res => null);
    }
  })
  // render
  // FIXME: No funciona el boton de jugar en la sidebar al terminar
  return (
    <div className="Quiz">
      <h3>Trivia: {title}</h3>
      {number < questions.length && <div className="QuizQuestion">
        <p>{questions[number].description}</p>
        <form>
          {questions[number].options.map(
            (answer, index) => (
              <button
                onClick={handleClick}
                type="button"
                id={index}
                key={index}
              >{answer}
              </button>
            ))}
          </form>
      </div>}
      {number === questions.length && <div className="QuizFinished">
        <p>Puntaje: {score}</p>
        <Link to="/dashboard">Volver</Link>
      </div>}
    </div>
  );

};

export default Quiz;
