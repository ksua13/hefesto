import express, { Request, Response } from "express";
import Categoria from "../models/categoria";
import Producto from "../models/producto";

export const getCategories = async (req: Request, res: Response) => {
  const ListCategories = await Categoria.findAll();
  res.json(ListCategories);
};

export const getCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await Categoria.findByPk(id);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({
      msg: `no existe el id ${id} `,
    });
  }
};

export const deletecategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await Categoria.findByPk(id);

  if (!category) {
    res.status(404).json({
      msg: `no existe el id ${id} `,
    });
  } else {
    await category.destroy();
    res.json({
      msh: "El categoryo fue eliminado con exito",
    });
  }
};

export const postCategory = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    await Categoria.create(body);
    res.json({
      msg: "El categoryo fue creado con exito",
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: "ups",
    });
  }
};

export const updatecategory = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const category = await Categoria.findByPk(id);
    if (category) {
      category.update(body);
      res.json({
        msg: "el category fue actualizado con exito",
      });
    } else {
      res.status(404).json({
        msg: "no existe el category",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: "ups",
    });
  }
};

