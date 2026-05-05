"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TipsPage = void 0;
var core_1 = require("@angular/core");
var TipsPage = /** @class */ (function () {
    function TipsPage(http) {
        this.http = http;
        this.quote = null;
        this.isLoading = false;
        this.skincareTips = [
            {
                icon: '☀️',
                judul: 'Pakai Sunscreen Setiap Hari',
                deskripsi: 'Gunakan sunscreen minimal SPF 30 setiap pagi untuk melindungi kulit dari UV.'
            },
            {
                icon: '💧',
                judul: 'Minum Air Putih yang Cukup',
                deskripsi: 'Minum minimal 8 gelas air putih per hari untuk menjaga kelembaban kulit dari dalam.'
            },
            {
                icon: '🌙',
                judul: 'Rutinitas Malam Itu Penting',
                deskripsi: 'Kulit beregenerasi saat tidur. Gunakan moisturizer dan serum malam untuk hasil maksimal.'
            },
            {
                icon: '🧴',
                judul: 'Urutan Skincare yang Benar',
                deskripsi: 'Gunakan produk dari tekstur paling tipis ke paling tebal: toner → serum → moisturizer → sunscreen.'
            },
            {
                icon: '😴',
                judul: 'Tidur Cukup untuk Kulit Sehat',
                deskripsi: 'Kurang tidur bisa menyebabkan kulit kusam. Tidur 7-8 jam per hari.'
            },
            {
                icon: '🥗',
                judul: 'Makan Bergizi untuk Kulit Glowing',
                deskripsi: 'Konsumsi makanan kaya antioksidan seperti buah dan sayuran untuk kulit sehat.'
            },
        ];
    }
    TipsPage.prototype.ngOnInit = function () {
        this.getQuote();
    };
    TipsPage.prototype.getQuote = function () {
        var _this = this;
        this.isLoading = true;
        this.quote = null;
        this.http.get('https://api.adviceslip.com/advice')
            .subscribe({
            next: function (data) {
                _this.quote = {
                    content: data.slip.advice,
                    author: 'GlowCare Tips'
                };
                _this.isLoading = false;
            },
            error: function () {
                _this.quote = {
                    content: 'Merawat diri sendiri bukan kemewahan, melainkan kebutuhan.',
                    author: 'GlowCare'
                };
                _this.isLoading = false;
            }
        });
    };
    TipsPage = __decorate([
        core_1.Component({
            selector: 'app-tips',
            templateUrl: './tips.page.html',
            styleUrls: ['./tips.page.scss'],
            standalone: false
        })
    ], TipsPage);
    return TipsPage;
}());
exports.TipsPage = TipsPage;
