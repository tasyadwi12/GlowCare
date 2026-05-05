import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  username = ''; // Variabel baru untuk menampung nama
  nameError = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    this.nameError = '';

    // Validasi sederhana: Nama tidak boleh kosong dan minimal 3 karakter
    if (!this.username || this.username.trim() === '') {
      this.nameError = '⚠️ Nama tidak boleh kosong!';
      return;
    }
    
    if (this.username.length < 3) {
      this.nameError = '⚠️ Nama minimal 3 karakter!';
      return;
    }

    // SIMPAN KE DATABASE (Local & Logic Backend)
    // Untuk saat ini kita simpan ke LocalStorage agar login tersimpan di HP
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', this.username);

    // Redirect ke halaman Home (Tabs)
    this.router.navigate(['/tabs/home']);
  }
}