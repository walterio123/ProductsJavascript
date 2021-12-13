

//objetos para los objetos
class Product { //contructor necesario para crear cualquier producto
    constructor(name, price, year) { // caracteristicas necesarias que debe tener el producto
        this.name = name;
        this.price = price;
        this.year = year;
    }

}



//objeto para la interfaz esta interactua con el HTML
class UI {
    addProduct(product) { //necesario para crear un producto
        const productList = document.getElementById('product-list'); //guardando en product-list todo lo guardado en product
        const element = document.createElement('div'); //creando el elemento a mostrar en el html
        element.innerHTML = /*creando que va a aparecer en el html*/ `
            <div class ="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name </strong>: ${product.name}
                    <strong>Product Price </strong>: $ ${product.price}
                    <strong>Product Year </strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete </a>
                </div>
            </div>
            `;
        productList.appendChild(element) //agregando a product-list un hijo con los datos proporcionados

    }
    resetForm() {
        document.getElementById('product-form').reset(); //metodo para resetear o dejar en blanco el formulario(7)
    }
    deleteProduct(element) { //necesario para borrar un producto
        if (element.name === 'delete') { //si el elemento tiene el id delete es por que lo quiere eliminar
            element.parentElement.parentElement.parentElement.remove(); //elimina todos los padres del elemento
        }
    }

    //+++++++Prueba mensaje+++++



     displayMessage() {
        let html = document.querySelector('html');

        let panel = document.createElement('div');
        panel.setAttribute('class', 'msgBox bg-info rounded');
        html.appendChild(panel);

        let msg = document.createElement('p');
        msg.textContent = 'El producto fue agregado con exito';
        panel.appendChild(msg);

        let closeBtn = document.createElement('button');
        closeBtn.textContent = 'x';
        panel.appendChild(closeBtn);

        closeBtn.onclick = function () {
            panel.parentNode.removeChild(panel);

        }
    }


    displayMessage2() {
        let html = document.querySelector('html');

        let panel = document.createElement('div');
        panel.setAttribute('class', 'msgBox bg-info rounded');
        html.appendChild(panel);

        let msg = document.createElement('p');
        msg.textContent = 'El producto fue eliminado con exito';
        panel.appendChild(msg);

        let closeBtn = document.createElement('button');
        closeBtn.textContent = 'x';
        panel.appendChild(closeBtn);

        closeBtn.onclick = function () {
            panel.parentNode.removeChild(panel);

        }
    }
    elemnetoCreado(){
        document.getElementById("mensaje").innerHTML="<p>elemento Creado con exito</p>"
    }



}

//Eventos del DOM
document.getElementById('product-form') //seleccionando un elemento del Dom
    .addEventListener('submit', function (e) { //indicando que debe hacer cuando en el elemento seleccionado ocurra un evento
        const name = document.getElementById('name').value //obteniendo lo que hay dentro de name y guardando en la constante name
        const price = document.getElementById('price').value
        const year = document.getElementById('year').value

        const product = new Product(name, price, year) //Creando un producto con los datos capturados

        const ui = new UI; //creando el producto en la interfaz
        ui.addProduct(product); //agregando el producto a la pagina en HTML
        ui.resetForm(); //reseteando el formulaeio llamando el metodo(7)
        //ui.showMessage('Product added successfully','info');

        //ui.displayMessage();


        Swal.fire({
          icon: 'success',
          title: 'Articulo Creado',
          text: 'Algo hiciste bien!',
          footer: '<a href>Sigue trabajando</a>'
        })
        ui.elemnetoCreado();



        e.preventDefault(); //previene que se refresque la pagina por defecto

    });
//capturando el evento de la parte del dom donde fuen creado el boton de borrar
/*document.getElementById('product-list').addEventListener('click',function(e){
    console.log(e.target)
})-----buen metodo para ver donde esta haciendo click el usuario y ver cuando pide borrar*/
document.getElementById('product-list').addEventListener('click', function (e) {
    const ui = new UI(); //guardando en un elemento como si fueramos a crear un producto para que haya algo que borrar
    ui.deleteProduct(e.target); //comprobando si el usuario dio click en el boton
    //swal("Excelente","Product removed successfully","success");
    Swal.fire({
      icon: 'success',
      title: 'Articulo borrado',
      text: 'Excelente!',
      footer: '<a href>Sigue trabajando </a>'
    })


})

/*Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  });*/
