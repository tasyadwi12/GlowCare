import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: false,
})
export class ProfilPage implements OnInit {
  userName = '';
  userEmail = '';
  totalSkincare = 0;
  totalObat = 0;
  totalChecklist = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadData();
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    this.userName = localStorage.getItem('userName') || 'User';
    this.userEmail = localStorage.getItem('userEmail') || 'user@email.com';

    const pagi = JSON.parse(localStorage.getItem('skincarePagi') || '[]');
    const malam = JSON.parse(localStorage.getItem('skincareMalam') || '[]');
    this.totalSkincare = pagi.length + malam.length;

    const obat = JSON.parse(localStorage.getItem('daftarObat') || '[]');
    this.totalObat = obat.length;

    const checklist = JSON.parse(localStorage.getItem('daftarKebiasaan') || '[]');
    this.totalChecklist = checklist.length;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}