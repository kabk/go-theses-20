document.addEventListener('DOMContentLoaded', ready);
function ready() {
  openInfo();
  openContent();
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
  const xBtn = document.getElementById('theses-info-x-button');
  const infoContent = document.getElementById('theses-info-content');
  const allContent = document.querySelectorAll('.person-thesis-content');

  xBtn.addEventListener('click', () => {
    infoContent.classList.toggle('visible');
  });

  infoBtn.addEventListener('click', e => {
    allContent.forEach(content => {
      content.style.display = 'none';
    });
    infoContent.classList.toggle('visible');
    infoBtn.classList.toggle('selected');
  });
}
