const button = document.querySelector('.arrow-all');
const ul = document.querySelector('ul');
const mapButton = document.querySelector('.map-all');
const buttonSumAll = document.querySelector('.sum-all');
const buttonFilterAll = document.querySelector('.filter-all');

const menuOptions = [

    { name: 'X-Salada', price: 30, vegan: false, src: './assets/x salada.jpg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './assets/xbacon.jpg' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './assets/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './assets/monstruoso.jpg' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './assets/big vegano.jpg' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './assets/x vegano.jpg' },

];


function formatCurrency(item) {
    const newValue = item.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return newValue;
}


function showAll(item) {
    let mylist = ''
    item.forEach(item => {
        mylist +=
            `<li>
                <img src='${item.src}' >
                <p>${item.name}</p>
                <p class="p-preco "> ${formatCurrency(item.price)}</p>
             </li>`
    })

    ul.innerHTML = mylist;
}



function mapAll() {
    const result = menuOptions.map((item) => ({
        ...item,
        price: item.price * 0.9,
    }
    ))

    showAll(result);
}


function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    ul.innerHTML =
        `<li>
            <p> O valor total dos itens R$ ${formatCurrency(totalValue)}</p>
        </li>`;
}


function FilterAllItems() {
    const filterJustVegan = menuOptions.filter((item) => item.vegan === true)

    showAll(filterJustVegan)
}


button.addEventListener('click', () => showAll(menuOptions))
mapButton.addEventListener('click', mapAll)
buttonSumAll.addEventListener('click', sumAllItems);
buttonFilterAll.addEventListener('click', FilterAllItems);