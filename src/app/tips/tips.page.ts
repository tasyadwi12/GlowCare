import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
  standalone: false,
})
export class TipsPage implements OnInit {
  // Variabel quote dan isLoading dihapus karena sudah tidak ambil data dari luar

  skincareTips = [
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

  constructor() {
    // HttpClient di constructor dihapus karena tidak digunakan lagi
  }

  ngOnInit() {
    // Fungsi getQuote dihapus dari sini
  }
}