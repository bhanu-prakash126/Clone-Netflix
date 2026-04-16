const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const li = question.parentElement;
    
    
    document.querySelectorAll('.accordion li').forEach(item => {
      if (item !== li) item.classList.remove('active');
    });

    li.classList.toggle('active');
  });
});