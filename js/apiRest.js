const currencyList = document.getElementById('c-list');
const spinner = document.getElementById('sc');

spinner.style.display = 'flex'

const traer = async () => {
    let resp = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
    let response = await resp.json();
    console.log(response)
    
    spinner.style.display = 'none'
    response.forEach(item => {

        const { nombre, compra, venta } = item.casa

        const itemTitle = document.createElement('div');
        itemTitle.className = "item-title";
        itemTitle.innerHTML = nombre;

        const itemBPrice = document.createElement('div');
        itemBPrice.className = 'item-buy-price'
        itemBPrice.innerHTML = `<h5>Precio Compra $ ${compra}</h5>`

        const itemSPrice = document.createElement('div');
        itemSPrice.className = 'item-sell-price'
        itemSPrice.innerHTML = `<h5>Precio Venta: $ ${venta}</h5>`

        const currencyItem = document.createElement('div');
        currencyItem.className = 'currency-item'

        currencyItem.appendChild(itemTitle)
        currencyItem.appendChild(itemBPrice)
        currencyItem.appendChild(itemSPrice)

        currencyList.appendChild(currencyItem)
    });
}

traer()