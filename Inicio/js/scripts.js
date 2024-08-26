document.getElementById('reportButton').addEventListener('click', function() {
    document.getElementById('reportForm').style.display = 'flex';
});

document.getElementById('reportForm').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
