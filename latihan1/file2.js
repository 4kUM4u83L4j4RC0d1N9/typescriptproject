"use strict";
// Simulasi fungsi mengambil data dari Database Postgresql
function ambilDataDatabase(id) {
    return new Promise((resolve, reject) => {
        console.log("...Sedang Mengambil Data Dari Database...");
        setTimeout(() => {
            if (id === 1) {
                resolve("Data ditemukan: Roti Bakar");
            }
            else {
                reject("Data tidak ditemukan");
            }
        }, 2000); // Simulasi delay 2 detik
    });
}
// Menggunakan async/await untuk menangani Promise
async function prosesData() {
    try {
        console.log("Memulai proses ... ");
        // 'await' menunggu sampai Promise selesai
        const hasil = await ambilDataDatabase(1);
        console.log(hasil);
    }
    catch (error) {
        // 'catch' menangkap error jika promise 'reject'
        console.error("Error : ", error);
    }
    finally {
        console.log("Proses selesai.");
    }
}
prosesData();
