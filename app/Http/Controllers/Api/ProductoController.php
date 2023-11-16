<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\Storage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Producto;

class ProductoController extends Controller
{

    public function index()
    {
        $productos =  Producto::all();
        foreach ($productos as $producto) {
            $producto->urlfoto = asset('img/productos/' . $producto->urlfoto);
        }
        return $productos;
    }


    public function store(Request $request)
    {
        $producto = new Producto();
    $producto->nombre = $request->nombre;
    $producto->descripcion = $request->descripcion;
    $producto->resumen = $request->resumen;
    $producto->precio = $request->precio;

    if ($request->hasFile('urlfoto')) {
        $file = $request->file('urlfoto');

        // Generar un nombre único para el archivo
        $fileName = time() . '_' . $file->getClientOriginalName();

        // Almacenar el archivo en el disco 'productos'
        Storage::disk('productos')->put($fileName, file_get_contents($file));

        // Guardar el nombre del archivo en la base de datos
        $producto->urlfoto = $fileName;
    }

    $producto->save();
}


    public function show($id)
    {
        $producto = Producto::find($id);
        $producto->urlfoto = asset('img/productos/' . $producto->urlfoto);
        return $producto;
    }


    public function update(Request $request, $id)
    {
        $producto = Producto::findOrFail($id);
        $producto->nombre = $request->nombre;
        $producto->descripcion = $request->descripcion;
        $producto->resumen = $request->resumen;
        $producto->precio = $request->precio;
    
        
     // Verifica si se ha proporcionado una nueva imagen
    if ($request->hasFile('urlfoto')) {
        $file = $request->file('urlfoto');

        // Genera un nombre único para el archivo
        $fileName = time() . '_actualizada_' . $file->getClientOriginalName();
        
        // Mueve el archivo a la carpeta de almacenamiento deseada
        $file->move(public_path('img/productos'), $fileName);

        // Elimina la foto anterior si existe
        if (!empty($producto->urlfoto)) {
            $rutaAnterior = public_path('img/productos/' . $producto->urlfoto);
            if (file_exists($rutaAnterior)) {
                unlink(realpath($rutaAnterior));
            }
        }

        // Actualiza el nombre de la imagen en la base de datos
        $producto->urlfoto = $fileName;
    }
        $producto->save();
        return $producto;
    }


    public function destroy($id)
    {
        $producto = Producto::destroy($id);
        return $producto;
    }
}
