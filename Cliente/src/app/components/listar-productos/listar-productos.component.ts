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

  listarProductos: Producto[]=[];

  constructor(private productoService: ProductoService, 
    private toastr: ToastrService){ }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productoService.getProductos().subscribe(data =>{
      console.log(data);
      this.listarProductos=data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarProducto(id: any){
    this.productoService.eliminarProducto(id).subscribe(data =>{
      this.toastr.error('El producto fue eliminado con exito','Producto eliminado');
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }
}
