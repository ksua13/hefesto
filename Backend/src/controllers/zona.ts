import express, { Request, Response } from "express";
import Zonas from "../models/zona";


export const getZonas = async (req: Request, res: Response) => {
    const ListProductos = await Zonas.findAll();
    res.json(ListProductos);
  };

export const getZona = async (req: Request, res: Response) => {
const { id } = req.params;
    const product = await Zonas.findByPk(id);
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        msg: `no existe el id ${id} `,
      });
    }
  };

  
export const deleteZona = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Zonas.findByPk(id);
  
    if (!product) {
      res.status(404).json({
        msg: `no existe el id ${id} `,
      });
    } else {
      await product.destroy();
      res.json({
        msg: "La zona fue eliminada con exito",
      });
    }
  };
  
  export const postZona = async (req: Request, res: Response) => {
    const { body } = req;
  
    try {
      await Zonas.create(body);
      res.json({
        msg: "la Zona fue creada con exito",
        body
      });
    } catch (error) {
      console.log(error);
      // res.json({
      //   msg: "ups",
      // });
    }
  };
  
  export const updateZona = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
  
    try {
      const product = await Zonas.findByPk(id);
      if (product) {
        product.update(body);
        res.json({
          msg: "la Zona fue actualizaao con exito",
        });
      } else {
        res.status(404).json({
          msg: "no existe la Zona",
        });
      }
    } catch (error) {
      console.log(error);
      // res.json({
      //   msg: "ups",
      // });
    }
  };










