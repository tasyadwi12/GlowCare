import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obat',
  templateUrl: './obat.page.html',
  styleUrls: ['./obat.page.scss'],
  standalone: false,
})
export class ObatPage implements OnInit {
  namaObat = '';
  dosisObat = '';
  waktuObat = '';

  daftarObat: any[] = [];

  constructor() {}

  ngOnInit() {
    const saved = localStorage.getItem('daftarObat');
    if (saved) this.daftarObat = JSON.parse(saved);
  }

  tambahObat() {
    if (this.namaObat && this.dosisObat && this.waktuObat) {
      this.daftarObat.push({
        nama: this.namaObat,
        dosis: this.dosisObat,
        waktu: this.waktuObat,
        done: false
      });
      localStorage.setItem('daftarObat', JSON.stringify(this.daftarObat));
      this.namaObat = '';
      this.dosisObat = '';
      this.waktuObat = '';
    }
  }

  hapusObat(index: number) {
    this.daftarObat.splice(index, 1);
    localStorage.setItem('daftarObat', JSON.stringify(this.daftarObat));
  }
}