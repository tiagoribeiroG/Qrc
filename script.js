const container = document.querySelector('.container'),
Input = document.querySelector('.form input'),
btn = container.querySelector('.form button'),
img = container.querySelector('.qr-code img');

btn.addEventListener('click', ()=>{
    let qrValue = Input.value;
    if(!qrValue) return;
    btn.innertext = "Gerando.."
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=&{qrValue}`;
    img.addEventListener('load', ()=>{
        container.classList.add('active');
        btn.innertext="Gerar QRCode";
    })
})

Input.addEventListener('Keyup', ()=>{
    if(!Input.value){
        container.classList.remove('active');
    }
})