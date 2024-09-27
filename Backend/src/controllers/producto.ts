import express, { Request, Response } from "express";
import Producto from "../models/producto";
import Categoria from "../models/categoria";




export const getProducts = async (req: Request, res: Response) => {
  const ListProductos = await Producto.findAll();
  res.json(ListProductos);
};



export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Producto.findByPk(id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      msg: `no existe el id ${id} `,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Producto.findByPk(id);

  if (!product) {
    res.status(404).json({
      msg: `no existe el id ${id} `,
    });
  } else {
    await product.destroy();
    res.json({
      msh: "El producto fue eliminado con exito",
    });
  }
};

export const postProduct = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    await Producto.create(body);
    res.json({
      msg: "El producto fue creado con exito",
      body
    });
  } catch (error) {
    console.log(error);
    // res.json({
    //   msg: "ups",
    // });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const product = await Producto.findByPk(id);
    if (product) {
      product.update(body);
      res.json({
        msg: "el producto fue actualizado con exito",
      });
    } else {
      res.status(404).json({
        msg: "no existe el producto",
      });
    }
  } catch (error) {
    console.log(error);
    // res.json({
    //   msg: "ups",
    // });
  }
};


export const getProductosByCategoria = async (req: Request, res: Response) => {
  try {
    const categoriaId = parseInt(req.params.id, 10); // Obtener el ID de la categoría desde los parámetros de la URL
    if (isNaN(categoriaId)) {
      return res.status(400).json({ message: 'ID de categoría inválido' });
    }

    const productos = await Producto.findAll({
      where: { idcategoria: categoriaId },
      include: [{ model: Categoria, as: 'categoria' }]
    });

    if (productos.length > 0) {
      res.json(productos);
    } else {
      res.status(404).json({ message: 'No se encontraron productos para esta categoría' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
}

