import { useState } from 'react';

const AddQuiz = props => {
  const { addQuiz } = props;
  // state
  const [quiz, setQuiz] = useState({
    title: '', subject: '', topic: '',
    questions: []
  });
  // temp state for question
  const [question, setQuestion] = useState({
    description: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  });

  const { title, subject, topic, questions } = quiz;
  const { description, options } = question;
  // handlers
  const handleSubmit = e => {
    e.preventDefault();
    addQuiz(quiz);
    setQuiz({
      title: '', subject: '', topic: '',
      questions: []
    });
  };

  const handleClick = e => {
    setQuiz({ ...quiz, questions: [...questions, question] });
    // blank form
    setQuestion({
      description: '',
      options: ['', '', '', ''],
      correctAnswer: 0
    });
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'title' || name === 'subject' || name === 'topic')
      setQuiz({ ...quiz, [name]: value });
    else if (name === 'description')
      setQuestion({ ...question, [name]: value });
    else if (name === 'correctAnswer')
      setQuestion({ ...question, [name]: parseInt(value) });
    else if (name === 'options') {
      const index = parseInt(e.target.id);
      const newOptions = [ ...options ];
      newOptions[index] = value;
      setQuestion({ ...question, options: newOptions });
    }
  };
  // render
  return (
    <div className="AddQuiz">
      <h2>Nueva trivia</h2>
      <form onSubmit={handleSubmit}>

        <label>Título</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />

        <label>Materia</label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={handleChange}
        />

        <label>Tema</label>
        <input
          type="text"
          name="topic"
          value={topic}
          onChange={handleChange}
        />

        <p>Preguntas: {questions.length}</p>
        <hr/>

        <div className="Question">

          <label>Pregunta</label>
          <textarea
            name="description"
            rows="6"
            value={description}
            onChange={handleChange}
          />

          <label>Opción A</label>
          <input
            type="text"
            name="options"
            id="0"
            value={options[0]}
            onChange={handleChange}
          />

          <label>Opción B</label>
          <input
            type="text"
            name="options"
            id="1"
            value={options[1]}
            onChange={handleChange}
          />

          <label>Opción C</label>
          <input
            type="text"
            name="options"
            id="2"
            value={options[2]}
            onChange={handleChange}
          />

          <label>Opción D</label>
          <input
            type="text"
            name="options"
            id="3"
            value={options[3]}
            onChange={handleChange}
          />

          <p>Respuesta correcta</p>

          <div className="Answers">
            <div>
              <input
                value={0}
                onChange={handleChange}
                type="radio"
                name="correctAnswer"
              />
              <label>A</label>
            </div>
            <div>
              <input
                value={1}
                onChange={handleChange}
                type="radio"
                name="correctAnswer"
              />
              <label>B</label>
            </div>
            <div>
              <input
                value={2}
                onChange={handleChange}
                type="radio"
                name="correctAnswer"
              />
              <label>C</label>
            </div>
            <div>
              <input
                value={3}
                onChange={handleChange}
                type="radio"
                name="correctAnswer"
              />
              <label>D</label>
            </div>
          </div>

        </div>

        <hr/>

        <button onClick={handleClick} type="button">Agregar pregunta</button>

        <button className="primary" type="submit">Guardar trivia</button>

      </form>
    </div>
  );
};

export default AddQuiz;
