import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Untuk *ngIf, *ngFor, dll
import { FormsModule } from '@angular/forms'; // Untuk ngModel
import { IonicModule } from '@ionic/angular'; // WAJIB: Supaya ion-progress-bar dikenal

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true, // 1. Aktifkan mode standalone
  imports: [
    IonicModule,   // 2. Import IonicModule di sini supaya semua tag 'ion-' jalan
    CommonModule, 
    FormsModule
  ]
})
export class HomePage implements OnInit {

  namaUser: string = '';
  hari: string = '';
  tanggal: string = '';

  ngOnInit() {
    this.getUser();
    this.setTanggal();
  }

  getUser() {
    this.namaUser = localStorage.getItem('userName') || 'User';
  }

  setTanggal() {
    const now = new Date();

    const hariList = [
      'Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'
    ];

    const bulanList = [
      'Januari','Februari','Maret','April','Mei','Juni',
      'Juli','Agustus','September','Oktober','November','Desember'
    ];

    this.hari = hariList[now.getDay()];
    this.tanggal = `${now.getDate()} ${bulanList[now.getMonth()]} ${now.getFullYear()}`;
  }
}