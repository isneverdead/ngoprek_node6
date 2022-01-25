import { barangModel } from "../../models";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require("../../models");
const sequelize = require('sequelize');
const BarangModel = db.barangModel;
export default async function handler(req, res) {

    if(req.method == "POST"){

      await barangModel.create({
          name: req.body.name,
          // qty: 1
          qty: req.body.qty
      }).then(result => {
        res.status(200).json({
          message: "Success",
          data: result
          })
          }).catch(err => {
              
              res.status(500).json({
                  message: "Failed",
                  data: err
                  })
                  });
    } else if (req.method == "GET") {
      await barangModel.findAll().then(result => {
        res.status(200).json({
          message: "Success",
          data: result
          })
          }).catch(err => {
              
              res.status(500).json({
                  message: "Failed",
                  data: err
                  })
                  });
    }

  // res.status(200).json({ name: 'John Doe' })
}
