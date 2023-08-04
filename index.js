import express from "express";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import XLSX from "xlsx";
import client from "./database.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
const port = 3000;

app.get("/api/biodata", async (_req, res) => {
  const queryData = await client.query(`SELECT * FROM biodata`);
  res.json(queryData.rows);
});

app.get("/api/export-excel", async (_req, res) => {
  try {
    const queryData = await client.query(`SELECT * FROM biodata`);
    const buatlembarexcel = XLSX.utils.book_new();
    const lembarkerjaexcel = XLSX.utils.json_to_sheet(queryData.rows);

    XLSX.utils.book_append_sheet(buatlembarexcel, lembarkerjaexcel, "Sheet1");

    const hasil = XLSX.write(buatlembarexcel, {
      type: "buffer",
      bookType: "xlsx",
    });

    const namaFileExcel = "biodata.xlsx";
    const Path = join(dirname(fileURLToPath(import.meta.url)), namaFileExcel);
    writeFileSync(Path, hasil);

    res.download(Path, (err) => {
      if (!err) {
        console.log(`File ${namaFileExcel} telah dihapus`);
      }
    });

    await client.end();
    console.log("Terputus dari database");
  } catch (error) {
    console.error("Error export data:", error);
    res.status(500).json({ message: "gagal export data ke excel" });
  }
});

app.listen(port, () => {
  console.log(`Server sedang berjalan pada port ${port}`);
});
