const QuizCard = props => {
  const { quiz, setPlaying } = props;
  const { title, subject, topic, questions } = quiz;
  // render
  return (
    <div className="QuizCard">
      <h3>{title}</h3>
      <p>Materia: {subject}</p>
      <p>Tema: {topic}</p>
      <p>Preguntas: {questions.length}</p>
      <button onClick={() => setPlaying(quiz)}>Jugar</button>
    </div>
  );
};

export default QuizCard;
