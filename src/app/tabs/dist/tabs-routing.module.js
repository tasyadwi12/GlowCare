"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TabsPageRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var tabs_page_1 = require("./tabs.page");
var routes = [
    {
        path: '',
        component: tabs_page_1.TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../home/home.module'); }).then(function (m) { return m.HomePageModule; }); }
            },
            {
                path: 'skincare',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../skincare/skincare.module'); }).then(function (m) { return m.SkincarePageModule; }); }
            },
            {
                path: 'obat',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../obat/obat.module'); }).then(function (m) { return m.ObatPageModule; }); }
            },
            {
                path: 'checklist',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../checklist/checklist.module'); }).then(function (m) { return m.ChecklistPageModule; }); }
            },
            {
                path: 'tips',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../tips/tips.module'); }).then(function (m) { return m.TipsPageModule; }); } // ✅ FIX
            },
            {
                path: 'profil',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../profil/profil.module'); }).then(function (m) { return m.ProfilPageModule; }); }
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
exports.TabsPageRoutingModule = TabsPageRoutingModule;
