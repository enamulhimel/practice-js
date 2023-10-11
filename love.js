const heading = document.getElementById('text');
const text1 = document.getElementById('only-yes');
text1.addEventListener('click', function () {
  heading.innerText = 'I will marry you too!!!';
});

function headingChange() {
  heading.innerText = 'I love you and i will marry you!!!';
}
