// 1. Class yang akan kita "injeksi" (alatnya)
class Logger {
    log(pesan: string) {
        console.log(`[LOG]: ${pesan}`);
    }
}

// 2. Class yang membutuhkan alat (ServiceUser)

class ServiceUser {
    private logger: Logger;

    // Dependency Injection terjadi di sini: Kita meminta (injeksi) Logger lewat constructor

    constructor(logger: Logger) {

        this.logger = logger;

    }

    tambahUser(nama: string) {
        this.logger.log(`Menambahkan user baru: ${nama}`);
    }
}


// 3. cara menjalankannya
const loggerBaru = new Logger();    // Kita buat alatnya
const serviceUser = new ServiceUser(loggerBaru);    // Kita suntikan (injeksi) alatnya.
serviceUser.tambahUser("Budi");