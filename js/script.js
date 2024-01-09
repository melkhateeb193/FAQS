const faqItem = document.querySelectorAll('.faq-item');

faqItem.forEach(function(item) {
    const toggleContent = item.querySelector('.toggle-content');
    const plus = item.querySelector('.plus');
    const minus = item.querySelector('.minus');

plus.addEventListener('click',function(){
plus.classList.replace('d-block','d-none');
toggleContent.classList.replace('d-none', 'd-block')
minus.classList.replace ('d-none', 'd-block')
})

minus.addEventListener('click',function(){
plus.classList.replace('d-none', 'd-block');
toggleContent.classList.replace('d-block','d-none')
minus.classList.replace ('d-block','d-none')
})
})
    