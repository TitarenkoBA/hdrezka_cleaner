let player = document.querySelector('#videoplayer iframe');
document.head.innerHTML = '';
document.body.innerHTML = '';
document.body.style.backgroundColor = 'grey';
document.body.style.textAlign = 'center';
player.style.border = '10px solid #0066ff';
player.style.borderRadius = '10px'; 
player.style.boxShadow = '7px 7px 7px rgba(0, 0, 0, 0.5)'; 
document.body.appendChild(player);
