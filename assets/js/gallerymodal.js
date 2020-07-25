for (var i=1;i<19;i++){
let modalbtn = document.getElementById(`modalbutton${i}`);
let modal = document.getElementById(`modal${i}`);
let close = document.getElementById(`close${i}`);
  modalbtn.onclick = function(){
    modal.style.display = "block";
  }
  close.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
}