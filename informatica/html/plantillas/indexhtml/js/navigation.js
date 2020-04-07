	// openNav
  function openNav() {
    document.getElementById("menuNav").style.width = "750px";
    document.getElementById('closeNavBtn').classList.remove('hidden');
    /* setTimeout(() => {
      document.getElementById('closeNavBtn').classList.remove('hidden');
    }, 2400); */
  }

  function closeNav() {
    document.getElementById('closeNavBtn').classList.add('hidden');
    document.getElementById("menuNav").style.width = "0";
  }

  function showMenuArchivos() {
    // clean other showMenus
    document.getElementById('indiceDiv').classList.add('hidden');
    document.getElementById('indiceBtn').classList.remove('menuNavBtn2');
    document.getElementById('indiceBtn').classList.add('menuNavBtn');
    // play showMenuArchivos
    document.getElementById('archivosDiv').classList.toggle('hidden');
    document.getElementById('archivosBtn').classList.toggle('menuNavBtn');
    document.getElementById('archivosBtn').classList.toggle('menuNavBtn2');
  }

  function showMenuIndice() {
    // clean other showMenus
    document.getElementById('archivosDiv').classList.add('hidden');
    document.getElementById('archivosBtn').classList.remove('menuNavBtn2');
    document.getElementById('archivosBtn').classList.add('menuNavBtn');
    // play showMenuIndice
    document.getElementById('indiceDiv').classList.toggle('hidden');
    document.getElementById('indiceBtn').classList.toggle('menuNavBtn');
    document.getElementById('indiceBtn').classList.toggle('menuNavBtn2');
  }


  //document.getElementById('indiceDiv').classList.toggle('menuNavBtn');

//  document.getElementById('colorBtn').classList.toggle('colorBtn2');

// document.getElementById("menuNav").style.float = "right";