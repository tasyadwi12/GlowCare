import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skincare',
  templateUrl: './skincare.page.html',
  styleUrls: ['./skincare.page.scss'],
  standalone: false,
})
export class SkincarePage implements OnInit {
  segment = 'pagi';
  namaSkincare = '';
  waktuSkincare = '';

  skincarePagi: any[] = [];
  skincareMalam: any[] = [];

  constructor() {}

  ngOnInit() {
    const pagi = localStorage.getItem('skincarePagi');
    const malam = localStorage.getItem('skincareMalam');
    if (pagi) this.skincarePagi = JSON.parse(pagi);
    if (malam) this.skincareMalam = JSON.parse(malam);
  }

  getList() {
    return this.segment === 'pagi' ? this.skincarePagi : this.skincareMalam;
  }

  tambahSkincare() {
    if (this.namaSkincare && this.waktuSkincare) {
      const item = { nama: this.namaSkincare, waktu: this.waktuSkincare, done: false };
      if (this.segment === 'pagi') {
        this.skincarePagi.push(item);
        localStorage.setItem('skincarePagi', JSON.stringify(this.skincarePagi));
      } else {
        this.skincareMalam.push(item);
        localStorage.setItem('skincareMalam', JSON.stringify(this.skincareMalam));
      }
      this.namaSkincare = '';
      this.waktuSkincare = '';
    }
  }

  hapusSkincare(index: number) {
    if (this.segment === 'pagi') {
      this.skincarePagi.splice(index, 1);
      localStorage.setItem('skincarePagi', JSON.stringify(this.skincarePagi));
    } else {
      this.skincareMalam.splice(index, 1);
      localStorage.setItem('skincareMalam', JSON.stringify(this.skincareMalam));
    }
  }
}