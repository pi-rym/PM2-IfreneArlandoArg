
class CarritoCompra {
    constructor() {
      // Inicializa el carrito como un array vacío
      this.productos = [];
    }
  
    agregarProducto(producto) {
      // Recibe un objeto representando un producto y lo agrega al carrito
      this.productos.push(producto);
      console.log(`Producto "${producto.nombre}" agregado al carrito.`);
    }
  
    calcularTotal() {
      // Calcula el total de la compra sumando los precios de todos los productos en el carrito
      let total = 0;
      this.productos.forEach(producto => {
        total += producto.precio;
      });
      return total;
    }
  
    aplicarDescuento(porcentaje) {
      // Aplica un descuento al total de la compra según el porcentaje especificado
      const descuento = this.calcularTotal() * (porcentaje / 100);
      const totalConDescuento = this.calcularTotal() - descuento;
      console.log(`Se aplicó un descuento del ${porcentaje}%. Total con descuento: $${totalConDescuento.toFixed(2)}`);
      return totalConDescuento;
    }
  }
  

  module.exports = {CarritoCompra};
  