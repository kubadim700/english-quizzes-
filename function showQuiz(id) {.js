function showQuiz(id) {
  document.querySelector('.menu').style.display = 'none';
  document.querySelectorAll('.quiz').forEach(q => q.style.display = 'none');
  document.getElementById