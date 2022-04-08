
//----selecting buttons---------------------
const favColBtn = document.getElementById('color')
const favPlcBtn = document.getElementById('place')
const favRitBtn = document.getElementById('ritual')
//----------------------------------------------


//------------adding event listeners---------------------------
favColBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    alert('my favorite color is blue!')
})

favPlcBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    alert('my favorite place is the mountains')
})

favRitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    alert("my favorite ritual is summoning eldritch beings from beyond the universe! Cthulu r'lyeh!")
})


