import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

// Mis componentes
import { ProductoService } from "../services/producto.service";
import { Producto } from "../models/producto";
import { GLOBAL } from "../services/global";

@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})

export class ProductoAddComponent{
    public titulo: string;
    public producto: Producto;

    public filesToUpload;
    public resultUpload;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo = 'Crear un nuevo producto';
        this.producto = new Producto( 0, '', '', 0, '');
        this.filesToUpload = <Array<File>>[];
    }
    
    ngOnInit(){
        console.log('producto-add.component cargado');
    }

    onSubmit(){
        console.log(this.producto);

        if (this.filesToUpload.length >= 1) {
            this._productoService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((result) => {
                console.log(result);
                this.producto.imagen = result['filename'];
                this.saveProducto();
            }, (error) => {
                console.log(error);
            });
        } else {
            this.saveProducto();
        }
    }

    saveProducto(){
        this._productoService.addProducto(this.producto).subscribe(
            response =>{
                if (response['code'] == 200) {
                    this._router.navigate(['/productos']);
                }else{
                    console.log(response);
                }
            }, 
            error =>{
                console.log(<any>error)
            }
        );
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }
}