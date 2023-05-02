function Projects() {
  return (
    <>
      <section className="grid-reverse" id="projects">
        <a
          className="img-container"
          href="https://github.com/harakeke-2023/sims-final-project"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/sims.png" alt="Sims Scrabble home page" />
        </a>
        <div className="center-text">
          <h2>Sims Scribble 98</h2>
          <p>
            Is a fun drawing game similar to Telephone where users take turns
            secretly writing captions for drawings from their friends and then
            drawing those captions in the end they are shown the results of the
            drawings and captions to see how wacky and weird it gets.
          </p>
        </div>
      </section>
      <section className="grid" id="projects">
        <div className="center-text">
          <h2>Todo List</h2>
          <p>Classic Todo list, Was one of the challenges from dev academy</p>
        </div>
        <a
          className="img-container"
          href="http://milo-todo.devacademy.nz/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/todo.png" alt="Todo home page" />
        </a>
      </section>
      <section className="grid-reverse" id="projects">
        <a
          className="img-container"
          href="https://github.com/harakeke-2023/Team-Misfit-Koalas"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/chat.png" alt="Chat API home page" />
        </a>
        <div className="center-text">
          <h2>Chat GPT pick your own Adventure</h2>
          <p>
            Using the chat GPT API we produced a detective story based on the
            bandersnatch type books where you can decided where to go and what
            to do. Chat GPT is intergrated to produce the directions of the
            story and can then go on infinetly and to crazy directions.
          </p>
        </div>
      </section>
    </>
  )
}

export default Projects
