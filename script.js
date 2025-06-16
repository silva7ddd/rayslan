function loadCourse(course) {
  const content = {
    html: {
      title: "HTML Básico",
      text: "Neste curso, você aprenderá as bases do HTML, como tags, atributos e estrutura de uma página web."
    },
    css: {
      title: "CSS Intermediário",
      text: "Aqui você verá como estilizar sua página com CSS, trabalhar com seletores, layouts e responsividade."
    },
    js: {
      title: "JavaScript Avançado",
      text: "Neste módulo, vamos abordar tópicos como funções, manipulação de DOM e eventos em JavaScript."
    }
  };

  const section = document.getElementById("courseContent");
  section.innerHTML = `<h2>${content[course].title}</h2><p>${content[course].text}</p>`;
}
