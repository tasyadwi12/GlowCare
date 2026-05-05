import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
  standalone: false,
})
export class ChecklistPage implements OnInit {
  namaKebiasaan = '';
  daftarKebiasaan: any[] = [];

  constructor() {}

  ngOnInit() {
    const saved = localStorage.getItem('daftarKebiasaan');
    if (saved) this.daftarKebiasaan = JSON.parse(saved);
  }

  tambah() {
    if (this.namaKebiasaan) {
      this.daftarKebiasaan.push({ nama: this.namaKebiasaan, done: false });
      localStorage.setItem('daftarKebiasaan', JSON.stringify(this.daftarKebiasaan));
      this.namaKebiasaan = '';
    }
  }

  hapus(index: number) {
    this.daftarKebiasaan.splice(index, 1);
    localStorage.setItem('daftarKebiasaan', JSON.stringify(this.daftarKebiasaan));
  }

  getDone() {
    return this.daftarKebiasaan.filter(i => i.done).length;
  }

  getProgress() {
    if (this.daftarKebiasaan.length === 0) return 0;
    return this.getDone() / this.daftarKebiasaan.length;
  }
}