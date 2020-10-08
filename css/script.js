function mostra(id) {
    if (document.getElementById(id).style.display == 'block') {
        document.getElementById(id).style.display = 'none';
        document.getElementById('b' + id).value = "+";
    } else {
        document.getElementById(id).style.display = 'block';
        document.getElementById('b' + id).value = "-";
    }
}