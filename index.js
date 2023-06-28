let hitsCount = 0;


document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    hitsCount++;
    document.querySelector('.hits').textContent = hitsCount;
  }
});


document.querySelector('.tryagain').addEventListener('click', function() {
  hitsCount = 0;
  document.querySelector('.hits').textContent = hitsCount;
});
