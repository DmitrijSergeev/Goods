const GoodsList = {
    products: [
        {
            title: 'Resident Evil',
            img: './images/ResEvil.jpeg',
            id: 1,
            price: 200
        },
        {
            title: 'Matrix',
            img: './images/matrix.jpeg',
            id: 2,
            price: 300
        },
        {
            title: 'Men in black',
            img: './images/Men_in_black.jpeg',
            id: 3,
            price: 100
        },
        {
            title: 'Pulp Fiction',
            img: './images/pulpFiction.jpeg',
            id: 4,
            price: 150
        },
    ],

    render() {
        const parentNode = document.getElementById('products')

        for (const i of this.products) {
            let el = document.createElement('div');
            el.id = 'good' + i.id;
            el.className = 'container'

            let img = document.createElement('img');
            img.src = i.img;
            img.className = 'img'

            let title = document.createElement('div');
            title.textContent = i.title;
            title.className = 'title';

            let price = document.createElement('div');
            price.textContent = i.price + ' $';
            price.className = 'price';

            let button = document.createElement('div');
            button.textContent = 'Купить';
            button.className = 'button';

            el.appendChild(img);
            el.appendChild(title);
            el.appendChild(price);
            el.appendChild(button);

            parentNode.appendChild(el);
        }

    }
}

GoodsList.render();

/*
class GoodsList {

}

class GoodItem {
    // id = '';
    // title = 'default';
    // image = '';
    // price = 0;

    constructor(id, title, image, price) {
        this.id = '';
        this.title = title;
        this.image = image;
        this.price = price
    }
}

const good = new GoodItem(1, 'Res Evil', './images/ResEvil.jpeg', 200);

console.log(good);
*/


