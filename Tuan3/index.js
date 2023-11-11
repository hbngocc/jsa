const shoes = [
    {
        id: 1,
        name: 'New Balance',
        year: 1906,
      
    }, {
        id: 2,
        name: 'Nike',
        year: 1964,
       
    }, {
        id: 3,
        name: 'Converse',
        year: 1908,

    }
]

function getShoes(inputValue) {
    for (let i = 0; i < shoes.length; i++) {
        let nameShoes = shoes[i].name.toLowerCase()
        let newinputValue = inputValue.toLowerCase();
        if (nameShoes.includes(newinputValue)) {
            console.log(shoes[i])
        }
    }
}
getShoes('n');
