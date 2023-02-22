import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { BerandaComponent } from './beranda/beranda.component';
import { HalamanUtamaComponent } from './halaman-utama/halaman-utama.component';
import { JudulMateriComponent } from './judul-materi/judul-materi.component';
import { JudulMateriAdminComponent } from './judul-materi-admin/judul-materi-admin.component';
import { JudulSoalComponent } from './judul-soal/judul-soal.component';
import { JudulSoalAdminComponent } from './judul-soal-admin/judul-soal-admin.component';
import { LatihanSoalComponent } from './latihan-soal/latihan-soal.component';
import { LatihanSoalAdminComponent } from './latihan-soal-admin/latihan-soal-admin.component';
import { LatihanSoalSelesaiComponent } from './latihan-soal-selesai/latihan-soal-selesai.component';
import { LoginComponent } from './login/login.component';
import { MateriBelajarComponent } from './materi-belajar/materi-belajar.component';
import { MateriBelajarAdminComponent } from './materi-belajar-admin/materi-belajar-admin.component';
import { PendaftaranComponent } from './pendaftaran/pendaftaran.component';
import { SimpanMateriComponent } from './simpan-materi/simpan-materi.component';
import { TambahSoalComponent } from './tambah-soal/tambah-soal.component';
import { TampilanAwalComponent } from './tampilan-awal/tampilan-awal.component';
import { TentangKamiComponent } from './tentang-kami/tentang-kami.component';
import { TestimoniComponent } from './testimoni/testimoni.component';
import { TestimoniAdminComponent } from './testimoni-admin/testimoni-admin.component';
import { UbahMateriComponent } from './ubah-materi/ubah-materi.component';
import { UbahSoalComponent } from './ubah-soal/ubah-soal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    BerandaComponent,
    HalamanUtamaComponent,
    JudulMateriComponent,
    JudulMateriAdminComponent,
    JudulSoalComponent,
    JudulSoalAdminComponent,
    LatihanSoalComponent,
    LatihanSoalAdminComponent,
    LatihanSoalSelesaiComponent,
    LoginComponent,
    MateriBelajarComponent,
    MateriBelajarAdminComponent,
    PendaftaranComponent,
    SimpanMateriComponent,
    TambahSoalComponent,
    TampilanAwalComponent,
    TentangKamiComponent,
    TestimoniComponent,
    TestimoniAdminComponent,
    UbahMateriComponent,
    UbahSoalComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
