import express, { Request, Response } from "express";
import Producto from "../models/producto";

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
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: "ups",
    });
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
    res.json({
      msg: "ups",
    });
  }
};
