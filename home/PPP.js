const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

button.addEventListener('mousedown', function() {
    this.style.color = 'white';
});

button.addEventListener('mouseup', function() {
    this.style.color = '#f89f5b';
});

button2.addEventListener('mousedown', function() {
    this.style.color = 'white';
});

button2.addEventListener('mouseup', function() {
    this.style.color = '#f89f5b';
});

button3.addEventListener('mousedown', function() {
    this.style.color = 'white';
});

button3.addEventListener('mouseup', function() {
    this.style.color = '#f89f5b';
})
