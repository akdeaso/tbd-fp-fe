## Project My Desktop

Kami membuat suatu aplikasi seperti sosial media untuk membagikan setup dekstop kepada pengguna lain.
Jadi pengguna dapat membagikan post sesuai kategori yang digunakan kepada pengguna lain.
Dalam aplikasi ini pengguna dapat melakukan beberapa aktivitas seperti mulai dari login, menambahkan unggahan baru, mengupload unggahan tersebut, hingga melihat postingan yang diunggah oleh pengguna lain serta memberikan like.
Dalam aplikasi yang digunakan juga menggunakan beberapa database, membuat Tech Stack, dan dokumentasi API nya.
Kami juga membuat video penjelasan beserta demo dari aplikasi tersebut sesuai dengan link youtube yang sudah dikumpulkan melalui form.

## Instalasi:

`npm install`

## Demo:

```https
  https://my-desktop-tbd.netlify.app/
```

> ### Aplikasi ini sedang tahap pengembangan. Masih banyak terdapat bebrapa bug dan kekurangan yang akan dikembangan.

## Tech Stack

### Front-End:

**Reactjs**, Pustaka JavaScript yang deklaratif, efisien, dan fleksibel untuk membangun komponen UI yang dapat digunakan kembali.

### Back-End:

**Expressjs**, Framework aplikasi web node js yang menyediakan fitur luas untuk membangun aplikasi web dan seluler

### Database:

1. **Mongodb (document based)**, Database NoSQL berorientasi dokumen yang digunakan untuk penyimpanan data volume tinggi. MongoDB memanfaatkan collection dan document Alih-alih menggunakan tabel dan baris seperti pada database relasional tradisional.

2. **Redis (key-value based)**, Penyimpanan struktur data yang dapat digunakan sebagai database, cache, atau bahkan perantara pesan. Struktur penyimpanan bersifat open-source.

3. **Neo4j (graph based)**, Database NoSQL berorientasi graph yang dikembangkan dengnan JAva. Neo4j bersifat open source

4. **Postgresql (relational based)**, Database relasional open source yang mendukung kueri SQL (relasional) dan JSON (non-relasional)

### Layanan Cloud:

1. **Cyclic**, berfungsi sebagai tempat untuk mendeploy backend dari aplikasi

2. **Mongodb Atlas**, berfungsi sebagai tempat untuk mendeploy mendeploy basis data mongodb

3. **Redis Upstash**, berfungsi sebagai tempat untuk mendeploy basis data redish

4. **Azure**, berfungsi sebagai tempat untuk mendeploy basis data postgresql

5. **Github**, berfungsi Sebagai repository dari seluruh code yang telah dibuat

## API Reference

#### API Description

API dibuat menggunakan framework Express.js dan dideploy menggunakan cyclic. Aplikasi dikembangkan dengan menggunakan prinsip RESTful API sehingga auth bersifat stateless dimana komunikasi antara klien dan server tidak boleh menyimpan informasi apa pun di antara setiap permintaan, sehingga tidak perlu adanya penggunaan session.

#### API Back-End

```https
  https://tbd-fp-kelompok-3.cyclic.app/
```

#### List Method and EndPoints

| Task                               | Method   | EndPoint                                          |
| :--------------------------------- | :------- | :------------------------------------------------ |
| `Registrasi akun pengguna baru`    | `Post`   | `http://localhost:8000/api/v1/register`           |
| `Login akun pengguna`              | `Post`   | `http://localhost:8000/api/v1/login`              |
| `Menampilkan semua kategori`       | `Get`    | `http://localhost:8000/api/v1/all-kategori`       |
| `Menampilkan semua item`           | `Get`    | `http://localhost:8000/api/v1/all-item`           |
| `Menampilkan semua setup`          | `Get`    | `http://localhost:8000/api/v1/all-setup`          |
| `Menampilkan detail setup`         | `Get`    | `http://localhost:8000/api/v1/setup/:id`          |
| `Mengupload foto setup`            | `Get`    | `http://localhost:8000/api/v1/upload-setup-photo` |
| `Menghapus foto setup`             | `Delete` | `http://localhost:8000/api/v1/delete-setup-photo` |
| `Membuat atau menambah setup baru` | `Post`   | `http://localhost:8000/api/v1/create-setup`       |
| `Memberikan like pada setup`       | `Post`   | `http://localhost:8000/api/v1/like-setup`         |
| `Menyembunyikan setup`             | `Post`   | `http://localhost:8000/api/v1/hide-setup/:id`     |

#### Method Description

| Method   | Description                             |
| :------- | :-------------------------------------- |
| `GET`    | `Untuk mendapatkan data atau informasi` |
| `POST`   | `Membuat atau mengirimkan data baru`    |
| `DELETE` | `Menghapus data`                        |

## User Guide

Cara penggunaan MyDesktop

### Features

#### Akses MyDesktop

1. Buka browser, kemudian masukkan URL https://my-desktop-tbd.netlify.app/
2. Halaman login akan muncul.

![Halaman Login](https://drive.google.com/uc?export=view&id=1YUrPMUmMlp2MaPSen8JxBOeOCHipI7HO)

#### Register dan Login

1. Masukkan email dan password.
2. Klik LOG IN.
3. Setelah login, akan muncul halaman utama yang menampilkan katalog setup yang telah ditambahkan seluruh pengguna.
   ![Halaman Katalog](https://drive.google.com/uc?export=view&id=1ZuhzX8WV3iLhO0d2NVx9FCeVhsAgTahV)

#### Add New Setup

1. Klik button '+' untuk menambahkan setup desktop baru.
   ![Halaman Add New Setup](https://drive.google.com/uc?export=view&id=1XQ2uUU9XruXOdiuQbfW9icPw8Z12GwSO)

2. Masukkan data setup desktop yang akan diunggah. Data setup desktop mencakup:

• Kategori setup desktop, contohnya setup gaming, streaming, dan lain-lain.  
• Tipe item, contohnya monitor, mouse, speaker, dan lain-lain.  
• Merk  
• Harga item

Catatan: Pengguna bisa menambahkan jumlah jenis item dengan klik tombol ‘+’ di sebelah kanan baris field item.

3. Untuk mengunggah gambar setup desktop, Klik CHOOSE > Pilih foto > UPLOAD.
   Catatan: pengguna harus mengunggah 4 gambar, sehingga langkah ketiga diulangi sebanyak 4 kali.

4. Setelah semua field telah terisi, klik POST

#### Like

1. Pilih unggahan setup desktop.
   ![Halaman Detail](https://drive.google.com/uc?export=view&id=1zSk9fotWDZF18Su5mEmM7IBmNbi2t_aa)

2. Klik LIKE

#### Hide

1. Pilih unggahan setup desktop.
   ![Halaman Detail](https://drive.google.com/uc?export=view&id=13ZZ-LYFiGY_qcI1JItZocbFHDNjEhe1A)

2. Klik HIDE

#### Logout

1. Klik ikon Profil di sudut kanan atas.
   ![Log Out](https://drive.google.com/uc?export=view&id=1Mf1ZpXUgM_22x3bhYucRhf5uHvi7Zz_r)

2. Pilih Logout.
