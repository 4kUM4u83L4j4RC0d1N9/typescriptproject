"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Class yang akan kita "injeksi" (alatnya)
class Logger {
    log(pesan) {
        console.log(`[LOG]: ${pesan}`);
    }
}
// 2. Class yang membutuhkan alat (ServiceUser)
class ServiceUser {
    logger;
    // Dependency Injection terjadi di sini: Kita meminta (injeksi) Logger lewat constructor
    constructor(logger) {
        this.logger = logger;
    }
    tambahUser(nama) {
        this.logger.log(`Menambahkan user baru: ${nama}`);
    }
}
// 3. cara menjalankannya
const loggerBaru = new Logger(); // Kita buat alatnya
const serviceUser = new ServiceUser(loggerBaru); // Kita suntikan (injeksi) alatnya.
serviceUser.tambahUser("Budi");
//# sourceMappingURL=file4.js.map