"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//sebuah fungsi decorator sederhana (Ini cara kerja @Controller atau @Injectable di NestJS)
function LogPesan(target, propertyKey, descriptor) {
    console.log(`--------- Seseorang Memanggil fungsi : ${propertyKey} ---------------- `);
}
class ServiceData {
    ambilData() {
        console.log("Menjalankan logika ambil data.... ");
    }
}
__decorate([
    LogPesan // Ini adalah decorator
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiceData.prototype, "ambilData", null);
// Menjalankan
const service = new ServiceData();
service.ambilData();
//# sourceMappingURL=file3.js.map