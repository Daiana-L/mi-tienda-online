const mongoose = require("mongoose");

const dbCon = async () => {
    console.log(dbCon)
try {
    await mongoose.connect("mongodb+srv://daianacelestelopez:hbhb05zDFn67NEAC@Tienda-online.bbuaupp.mongodb.net/tienda-online", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Conexión a la base de datos establecida correctamente");
} catch (error) {
    console.error("Error de conexión a la base de datos:", error);
}
};

module.exports = dbCon;
