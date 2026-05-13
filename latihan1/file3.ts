//sebuah fungsi decorator sederhana (Ini cara kerja @Controller atau @Injectable di NestJS)
function LogPesan(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    console.log(`--------- Seseorang Memanggil fungsi : ${propertyKey} ---------------- `);

}


class ServiceData {
    @LogPesan // Ini adalah decorator
    ambilData() {
        console.log("Menjalankan logika ambil data.... ");

    }
}

// Menjalankan


const service = new ServiceData();
service.ambilData();
