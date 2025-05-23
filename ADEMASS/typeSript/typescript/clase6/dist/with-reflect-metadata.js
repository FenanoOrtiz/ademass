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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const titleCaseRX = /^\s*([A-Z]\W*\S*)*$/;
function Validate() {
    return function (target, key, descriptor) {
        let originalValue = descriptor.value;
        descriptor.value = (...args) => {
            const index = Reflect.getMetadata("validate:name", target);
            const value = args[index];
            if (!titleCaseRX.test(value)) {
                throw new Error("El nombre no es valido");
            }
            originalValue.apply(this, args);
        };
    };
}
function TitleCase() {
    return function (target, key, index) {
        Reflect.defineMetadata("validate:name", index, target);
    };
}
class User {
    myInfo(name, age) {
        console.log({
            name,
            age,
        });
    }
}
__decorate([
    Validate(),
    __param(0, TitleCase()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], User.prototype, "myInfo", null);
new User().myInfo('Rodrigo', 28); // se puede llamar el objeta asi solo
