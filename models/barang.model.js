module.exports = (sql, Sequelize) => {
    const Barang = sql.define('barang', {
        name: {
          type: Sequelize.STRING
        },
        qty: {
          type: Sequelize.INTEGER
        },
       
    },
    {
      timestamps: false
    });
    return Barang
  }