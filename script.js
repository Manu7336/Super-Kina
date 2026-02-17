// Scroll reveal for sections
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 50) sec.classList.add('show');
    });
});

// Modal functionality
const modalBtns = document.querySelectorAll('.modal-btn');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.close');

modalBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        document.getElementById(btn.dataset.modal).style.display='block';
    });
});

closes.forEach(span=>{
    span.addEventListener('click', ()=>{
        span.parentElement.parentElement.style.display='none';
    });
});

window.addEventListener('click', e=>{
    modals.forEach(modal => {
        if(e.target === modal) modal.style.display='none';
    });
});

// Loan Calculator
const calcBtn = document.getElementById('calculateBtn');
const amount = document.getElementById('amount');
const rate = document.getElementById('rate');
const term = document.getElementById('term');
const calcResult = document.getElementById('calcResult');

calcBtn.addEventListener('click', ()=>{
    const P = parseFloat(amount.value);
    const r = parseFloat(rate.value)/100/12;
    const n = parseFloat(term.value);
    if(P && r && n){
        const M = (P*r)/(1 - Math.pow(1+r, -n));
        calcResult.textContent = `Monthly Payment: K${M.toFixed(2)}`;
    } else {
        calcResult.textContent = "Please fill in all fields correctly.";
    }
});

// Loan Application Form Submission
const loanForm = document.getElementById('loanForm');
loanForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = {
        name: loanForm.name.value,
        email: loanForm.email.value,
        phone: loanForm.phone.value,
        loanType: loanForm.loanType.value,
        amount: loanForm.amount.value,
        term: loanForm.term.value
    };
    alert(`Thank you ${formData.name}! Your ${formData.loanType} application has been received.`);
    loanForm.reset();
});
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// Hero Canvas animation
//const canvas = document.getElementById('heroCanvas');
//const ctx = canvas.getContext('2d');
//canvas.width = canvas.offsetWidth;
//canvas.height = canvas.offsetHeight;
//window.addEventListener('resize', ()=>{ canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; });

//class Money { constructor(){ this.x=Math.random()*canvas.width; this.y=Math.random()*canvas.height; this.size=Math.random()*20+10; this.speed=Math.random()*1+0.5; } draw(){ ctx.fillStyle="#facc15"; ctx.font=`${this.size}px Arial`; ctx.fillText("₭", this.x, this.y); } update(){ this.y -= this.speed; if(this.y<0) this.y=canvas.height; this.draw(); } }

//const monies=[];
//for(let i=0;i<50;i++) monies.push(new Money());

//function animate(){
    //ctx.clearRect(0,0,canvas.width,canvas.height);
    //monies.forEach(m=>m.update());
    //requestAnimationFrame(animate);
//}
//animate();
