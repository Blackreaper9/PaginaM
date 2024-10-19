import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000; // Usa el puerto especificado en el entorno o 3000 por defecto

app.use(cors());

// Ruta de verificación del servicio
app.get("/", (req, res) => {
    res.status(200).json({ msg: "Service is running" });
});

// Ruta de verificación de funcionamiento
app.get("/working", (req, res) => {
    res.status(200).json({ msg: "All working" });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${4943}`);
});
