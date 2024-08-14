fetch('minu_list.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('included-mimu').innerHTML = data;
    });