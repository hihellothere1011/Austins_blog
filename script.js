const question = document.getElementById('question');
const answer = document.getElementById('answer');
const toggle = document.getElementById('toggle');
const faq = document.getElementById("faq")

answer.style.display = "none"

faq.addEventListener('click', function() {
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        toggle.textContent = '(⁎⁍̴̛ᴗ⁍̴̛⁎)';
    } else {
        answer.style.display = 'none';
        toggle.textContent = '$$$';
    }
});