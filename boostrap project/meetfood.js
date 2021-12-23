const buttons = document.querySelectorAll('.kiku');
const items = document.querySelectorAll('.items');

//lol//

buttons.forEach((button) => {
    button.addEventListener('click', e => {
        //jump top
        e.preventDefault()
        var filter = e.target.dataset.filter;

        items.forEach((item) => {
            if(filter === "all"){
                item.style.display = "block";
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = "block"
                }else{
                    item.style.display = "none"
                }
            }
        })
    })

})

const search = document.querySelector("#searchmo");

search.addEventListener("keyup", e => {
    const searchFilter = e.target.value.toLowerCase().trim();

    items.forEach((item) => {
        if(item.textContent.includes(searchFilter)){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        };
    });
})