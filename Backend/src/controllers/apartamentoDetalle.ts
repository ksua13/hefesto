import express, { Request, Response } from "express";
import ItemsZonas from "../models/itemsZona";
import Zonas from "../models/zona";
import Apartamentos from "../models/apartamento";
import ApartamentosDetalles from "../models/apartamentoDetalle";

export const getApartamentosDetalles = async (req: Request, res: Response) => {
    try {
      const detalles = await ApartamentosDetalles.findAll({
        include: [
          {
            model: Apartamentos,
            as: 'apartamento'
          },
          {
            model: ItemsZonas,
            as: 'itemZona'
          }
        ]
      });
      res.json(detalles);
    } catch (error) {
      console.error('Error al obtener detalles de apartamentos:', error);
      res.status(500).json({ message: 'Error al obtener detalles de apartamentos' });
    }
  };

  export const getItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    const item = await ItemsZonas.findAll(({
        where: { id: id },
        include: [{ model: Zonas, as: 'zonas' }]
      }));
  
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({
        msg: `no existe el id ${id} `,
      });
    }
  };

  export const postItems = async (req: Request, res: Response) => {
    const { body } = req;
  
    try {
      await ItemsZonas.create(body);
      res.json({
        msg: "El item fue creado con exito",
        body
      });
    } catch (error) {
      console.log(error);
      // res.json({
      //   msg: "ups",
      // });
    }
  };

  export const deletItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    const item = await ItemsZonas.findByPk(id);
  
    if (!item) {
      res.status(404).json({
        msg: `no existe el id ${id} `,
      });
    } else {
      await item.destroy();
      res.json({
        msh: "El Item fue eliminado con exito",
      });
    }
  };

  export const putItem = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
  
    try {
      const product = await ItemsZonas.findByPk(id);
      if (product) {
        product.update(body);
        res.json({
          msg: "el Item fue actualizado con exito",
        });
      } else {
        res.status(404).json({
          msg: "no existe el item",
        });
      }
    } catch (error) {
      console.log(error);
      // res.json({
      //   msg: "ups",
      // });
    }
  };

  export const getApartamentosDetallesByApartamento = async (req: Request, res: Response) => {
    try {
      const apartamentoId = parseInt(req.params.id, 10); // Obtener el ID de la categoría desde los parámetros de la URL
      if (isNaN(apartamentoId)) {
        return res.status(400).json({ message: 'ID de apartamento  inválido' });
      }
  
      const itemsZonas = await ApartamentosDetalles.findAll({
        where: { id_apartamento: apartamentoId },
        include: [
            {
              model: Apartamentos,
              as: 'apartamento'
            },
            {
              model: ItemsZonas,
              as: 'itemZona'
            }
          ]
      });
  
      if (itemsZonas.length > 0) {
        res.json(itemsZonas);
      } else {
        res.status(404).json({ message: 'No se encontraron items para esta zona' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las zonas', error });
    }
  }
  
  