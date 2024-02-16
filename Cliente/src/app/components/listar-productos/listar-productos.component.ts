import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';


@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listarProductos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  terminoBusqueda: string = '';

  constructor(private productoService: ProductoService, 
    private toastr: ToastrService){ }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productoService.getProductos().subscribe(data =>{
      this.listarProductos = data;
      this.productosFiltrados = [...this.listarProductos];
    }, error =>{
      console.log(error);
    })
  }

  eliminarProducto(id: any){
    this.productoService.eliminarProducto(id).subscribe(data =>{
      this.toastr.error('El producto fue eliminado con éxito','Producto eliminado');
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }

  buscarProducto() {
    if (!this.terminoBusqueda || this.terminoBusqueda === '') {
      this.listarProductos = [...this.productosFiltrados];
      return;
    }
  
    this.listarProductos = this.productosFiltrados.filter(producto =>
      producto.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
      producto.ubicacion.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }
}
