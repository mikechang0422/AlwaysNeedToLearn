const loader1 = document.querySelector('.show_load_1')
const loader2 = document.querySelector('.show_load_2')
const loader3 = document.querySelector('.show_load_3')
const loader = document.querySelectorAll('.show_load')

loader.forEach(function(e){
    e.addEventListener('dblclick', function(){
        e.style.display = 'none'
    }) 
})


function showLoading1() {
    loader1.style.display = 'flex'
}

function showLoading2() {
    loader2.style.display = 'flex'
}

function showLoading3() {
    loader3.style.display = 'flex'
}
