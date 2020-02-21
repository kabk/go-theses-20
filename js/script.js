document.addEventListener('DOMContentLoaded', ready);
function ready() {
  openContent();
  openInfo();
}

function openContent() {
  const links = document.querySelectorAll('.person');
  const allContent = document.querySelectorAll('.person-thesis-content');

  links.forEach(link => {
    const xBtn = link.querySelector('.x-button');
    xBtn.addEventListener('click', () => {
      allContent.forEach(content => {
        content.style.display = 'none';
      });
    });
    link.addEventListener('click', e => {
      let content = e.target.querySelector('.person-thesis-content');

      if (content.style.display == 'block') {
        allContent.forEach(content => {
          content.style.display = 'none';
        });
      } else {
        allContent.forEach(content => {
          content.style.display = 'none';
        });
        content.style.display = 'block';
      }
    });
  });
}

function openInfo() {
  const infoBtn = document.getElementById('theses-info');

  infoBtn.addEventListener('click', e => {
    let infoContent = document.getElementById('theses-info-content');
    infoContent.classList.toggle('visible');
    infoBtn.classList.toggle('selected');
  });
}
