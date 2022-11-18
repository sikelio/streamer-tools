const textArea = document.getElementById('twitterTemplate');
const submitButton = document.getElementById('addTwitterTemplate');

submitButton.addEventListener('click', () => {
    if (!textArea.value) {
        return;
    }

    window.apiStreamTools.sendTwitterTemplate(textArea.value);
})