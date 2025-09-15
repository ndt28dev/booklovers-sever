import mysql from "mysql2/promise";
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

export default pool;

// import mysql from "mysql2/promise";
// require("dotenv").config();

// const pool = mysql.createPool({
//   host: process.env.MYSQLHOST,
//   user: process.env.MYSQLUSER,
//   password: process.env.MYSQLPASSWORD,
//   database: process.env.MYSQLDATABASE,
//   port: Number(process.env.MYSQLPORT), // nhớ ép kiểu nếu cần
// });

// export default pool;

// /* ===== Test kết nối ngay tại đây ===== */
// (async () => {
//   try {
//     const connection = await pool.getConnection();
//     console.log("✅ Kết nối MySQL thành công!");
//     // test query nhỏ
//     const [rows] = await connection.query("SELECT 1 + 1 AS result");
//     console.log("Test query:", rows);
//     connection.release();
//   } catch (err) {
//     console.error("❌ Lỗi kết nối MySQL:", err);
//   }
// })();
