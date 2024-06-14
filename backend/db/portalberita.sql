-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 14, 2024 at 09:55 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portalberita`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `id_category` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`id_category`, `name`) VALUES
(7, 'Olahraga'),
(8, 'Politik'),
(10, 'Nasional'),
(11, 'Internasional'),
(12, 'Ekonomis');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comment`
--

CREATE TABLE `tbl_comment` (
  `id_comment` int(11) NOT NULL,
  `id_news` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `comment` text NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tbl_comment`
--

INSERT INTO `tbl_comment` (`id_comment`, `id_news`, `id_user`, `comment`, `created_at`) VALUES
(2, 22, 13, 'Ini adalah komentar baru', '2024-06-11 16:35:10'),
(3, 22, 14, 'Ini adalah komentar baru', '2024-06-12 01:53:23');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_favorite`
--

CREATE TABLE `tbl_favorite` (
  `id_favorite` int(11) NOT NULL,
  `id_news` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tbl_favorite`
--

INSERT INTO `tbl_favorite` (`id_favorite`, `id_news`, `id_user`, `created_at`) VALUES
(9, 22, 13, '2024-06-11 17:09:47'),
(14, 23, 13, '2024-06-11 19:30:13'),
(16, 22, 14, '2024-06-12 01:43:01');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_news`
--

CREATE TABLE `tbl_news` (
  `id_news` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `id_category` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `published_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tbl_news`
--

INSERT INTO `tbl_news` (`id_news`, `title`, `description`, `content`, `image`, `id_category`, `id_user`, `published_at`) VALUES
(22, 'Prediksi Indonesia Vs Filipina: Garuda Jinakkan The Azkal', 'Timnas Indonesia akan menjamu Timnas Filipina dalam lanjutan Kualifikasi Piala Dunia 2026. Skuad Garuda dijagokan bisa menjinakkan The Azkals.Indonesia vs Filipina akan berlangsung di Stadion Utama Gelora Bung Karno, Jakarta, Selasa (11/6/2024). Laga itu akan kickoff pada pukul 19.30 WIB.Menatap laga itu, Indonesia membutuhkan tambahan tiga poin untuk mengunci satu tiket ke babak ketiga Kualifikasi Piala Dunia 2024. Sementara itu, Filipina sudah dipastikan finis terbawah di klasemen Kualifikasi Piala Dunia 2026 Grup F', 'Filipina masih belum memetik kemenangan dalam lima pertandingan di Grup F Kualifikasi Piala Dunia 2026. Mereka mencatatkan satu hasil imbang dan empat kali menelan kekalahan.Filipina sudah kebobolan sebanyak 12 gol, menunjukkan pertahanan mereka rapuh. Untuk lini depan, tim asuhan Tom Saintfiet baru bisa mencetak tiga gol.Di laga lanjutan Kualifikasi Piala Dunia 2026, Filipina akan diperkuat oleh sebagian besar pemain naturalisasi. Oleh karena itu, ada potensi mereka akan mengejutkan', 'https://akcdn.detik.net.id/community/media/visual/2023/11/21/filipina-vs-indonesiatimnas-indonesiatimnas-filipinakualifikasi-piala-dunia-2026-zona-asia_169.jpeg?w=700&q=90', 7, 13, '2024-06-11 10:21:00'),
(23, 'Prediksi Indonesia Vs Filipina: Garuda Jinakkan The Azkal', 'Timnas Indonesia akan menjamu Timnas Filipina dalam lanjutan Kualifikasi Piala Dunia 2026. Skuad Garuda dijagokan bisa menjinakkan The Azkals.Indonesia vs Filipina akan berlangsung di Stadion Utama Gelora Bung Karno, Jakarta, Selasa (11/6/2024). Laga itu akan kickoff pada pukul 19.30 WIB.Menatap laga itu, Indonesia membutuhkan tambahan tiga poin untuk mengunci satu tiket ke babak ketiga Kualifikasi Piala Dunia 2024. Sementara itu, Filipina sudah dipastikan finis terbawah di klasemen Kualifikasi Piala Dunia 2026 Grup F', 'Filipina masih belum memetik kemenangan dalam lima pertandingan di Grup F Kualifikasi Piala Dunia 2026. Mereka mencatatkan satu hasil imbang dan empat kali menelan kekalahan.Filipina sudah kebobolan sebanyak 12 gol, menunjukkan pertahanan mereka rapuh. Untuk lini depan, tim asuhan Tom Saintfiet baru bisa mencetak tiga gol.Di laga lanjutan Kualifikasi Piala Dunia 2026, Filipina akan diperkuat oleh sebagian besar pemain naturalisasi. Oleh karena itu, ada potensi mereka akan mengejutkan', 'https://akcdn.detik.net.id/community/media/visual/2023/11/21/filipina-vs-indonesiatimnas-indonesiatimnas-filipinakualifikasi-piala-dunia-2026-zona-asia_169.jpeg?w=700&q=90', 7, 13, '2024-06-11 10:00:00'),
(24, 'Rupiah Terus Anjlok, Bakal Sampai Kapan?', 'Hal ini disampaikan oleh Deputi Gubernur Senior BI Destry Damayanti saat rapat kerja dengan Dewan Perwakilan Daerah (DPD), di Gedung DPR/MPR/DPD, Jakarta, Selasa (11/6/2024)Dengan ketahanan eksternal yang terjaga nilai tukar rupiah relatif stabil sejalan dengan bauran kebijakan moneter BI, ujarnya', 'Josua mengatakan kondisi perekonomian dalam negeri Indonesia sebenarnya sangat baik. Inflasi, kata dia, berhasil kembali di bawah 3% pada bulan Mei ini. Cadangan devisa Indonesia juga meningkat dengan aliran modal asing yang mulai masuk di bulan yang sama, terutama ke pasar surat utang dan Sekuritas Rupiah Bank Indonesia. Walaupun terjadi nett sell di pasar saham, kata dia.Josua menilai pelemahan Rupiah saat ini terjadi karena faktor musiman, yakni penyelenggaraan ibadah haji dan pembayaran bunga utang pemerintah dalam mata uang dolar. Selain itu, kata dia, pelemahan Rupiah ini juga terjadi karena pelaku pasar tengah menanti pengumuman data inflasi Amerika Serikat yang akan dilakukan pekan ini.Ini minggu penting, artinya market menanti rilis inflasi AS bulan Mei yang diperkirakan secara tahunan akan flat, tapi secara bulanan cenderung lebih rendah,katanya', 'https://awsimages.detik.net.id/visual/2018/02/19/f9296854-15c2-4523-83f3-ef006cfae123_169.jpeg?w=715&q=90', 12, 14, '2024-06-12 06:18:08'),
(25, 'Apa Dampak Pemilu Uni Eropa terhadap Asia Tenggara?', 'Hasil Pemilu Eropa 2024 akan terlihat dalam beberapa minggu mendatang. Banyak yang menduga-duga apakah Ursula von der Leyen, yang saat ini menjabat presiden Komisi Eropa, dapat mengamankan masa jabatan keduanya sebagai pimpinan badan eksekutif Uni Eropa.Hal ini akan berimplikasi pada Asia Tenggara, yang telah semakin selaras dengan Uni Eropa dan sekarang menganggap blok Eropa sebagai mitra strategis dari aliansi regionalnya.Menurut para analis, kerugian besar yang diakibatkan oleh kebijakan-kebijakan hijau dan liberal Eropa dapat melemahkan keterlibatan Eropa dalam inisiatif-inisiatif lingkungan hidup di Asia Tenggara dan menghambat perdagangan bebas.', 'Lebih dari 180 juta orang di seluruh Eropa memberikan suara dalam pemilu tanggal 6-9 Juni, untuk memilih 720 anggota baru Parlemen Eropa, majelis rendah Uni Eropa.Pemilu ini menghasilkan banyak kejutan, terutama karena faksi-faksi sayap kanan membuat keuntungan besar yang menjadi kekhawatiran bagi kelompok-kelompok sentris dan liberal', 'https://akcdn.detik.net.id/community/media/visual/2024/06/12/apa-dampak-pemilu-uni-eropa-terhadap-asia-tenggara.jpeg?w=700&q=90', 11, 14, '2024-06-12 06:27:29'),
(26, 'Deretan Sanksi Peringatan untuk KPU RI, Terkait Pencalonan Gibran sampai Kebocoran Data Pemilih\r\n', 'Dewan Kehormatan Penyelenggara Pemilu (DKPP) kembali menjatuhkan sanksi peringatan kepada Ketua dan Anggota Komisi Pemilihan Umum (KPU) RI karena dinilai melakukan pelanggaran etik dan pedoman pedoman penyelenggara pemilu. Dalam putusan yang dibacakan pada Selasa (14/5/2024), DKPP menyatakan Ketua KPU RI Hasyim Asy’ari dan enam komisioner KPU lainnya terbukti melanggar etik terkait dugaan kebocoran data pemilih pada Sidalih atau Sistem Informasi Data Pemilih KPU RI pada tahun 2023. ', 'Pada 26 Oktober 2023, DKPP menjatuhkan sanksi peringatan keras kepada Ketua KPU RI Hasyim Asy’ari karena melanggar etik. Sebab, menimbulkan ketidakpastian hukum terkait keterwakilan bakal calon anggota legislatif (caleg) perempuan agar mencapai 30 persen, sebagaimana diamanatkan Undang-Undang Nomor 7 Tahun 2017 tentang Pemilihan Umum (Pemilu). Sementara itu, enam komisioner lain KPU RI yang juga menjadi teradu, Idham Holik, Betty Epsilon Idroos, August Mellaz, Parsadaan Harahap, Yulianto Sudrajat, dan Mochamad Afifuddin dijatuhi sanksi peringatan.\r\n', 'https://asset.kompas.com/crops/1i7h8_KWFtOYqpJLsyueBcBvGcA=/83x57:981x656/750x500/data/photo/2024/02/20/65d3e2618e0bf.jpg', 8, 14, '2024-06-12 09:35:18'),
(27, 'Mantan Wartawan Ini Rintis Usaha Tas hingga Sukses Tembus AS\r\n\r\n', ' Tidak jarang, sebuah hobi yang ditekuni menjadikan seseorang beralih pekerjaan. Bagaimanapun, menjalankan pekerjaan karena kegemaran lebih menyenangkan ketimbang menjalankan rutinitas yang terkadang tidak didasari passion. Hal ini pula yang dialami oleh Presi Mandari (52), produsen tas dengan Sackai Bags. Dibawa oleh kegemarannya membuat tas dan kerajinan, dia berhasil menembus pasar di Amerika Serikat.\r\n ', 'Pernah Bekerja Sebagai Wartawan Sebelum mendirikan Sackai Bags pada tahun 2014, Presi adalah seorang wartawan kantor berita Prancis di Jakarta. Di sela-sela pekerjaan utama tersebut, dia memiliki hobi mengulik tas kanvas. Memang, sejak kecil dia sudah tertarik dengan berbagai produk yang berbahan kanvas, mulai dari sepatu hingga tas. Seiring dengan perjalanan waktu, Presi banyak memberikan perhatian pada produk-produk tas kanvas. Menurutnya, masih sulit menemukan tas kanvas berkualitas di Indonesia. Karena itu pula, ia dan Toto berniat untuk mendirikan bisnis tas kanvas lalu dengan terlebih dahulu melakukan riset.\r\n', 'https://asset.kompas.com/crops/M0nBL52EnNJUH1dkDXbcROIUHCc=/0x748:2574x2464/750x500/data/photo/2024/06/10/6666a931c2857.jpg', 10, 14, '2024-06-12 09:35:18');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id_user` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','superadmin','admin') NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id_user`, `name`, `username`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'Toni', 'Toni', 'toni@gmail.com', '$2b$10$h3LrXam0R3XocclXObNVe.gNSH9cEdUgb5T9kXECTJUaoKhkkTENG', 'user', '2024-06-10 14:57:26'),
(2, 'Mali', 'Mali02', 'mali@admin.com', '$2b$10$dpbDKmbARpKxf2ZeXYP7buTscrYnwtitfILIRh1RqqnsrVsioDWiW', 'admin', '2024-06-10 15:05:10'),
(4, 'Nani', 'Nani02', 'nani@superadmin.com', '$2b$10$EIL7xLcoO6KFFlRrdUKYJ.550AYyRxEZT4Ihr1OwfKiN0/fsPPXZ6', 'superadmin', '2024-06-10 19:04:42'),
(13, 'Dani', 'Dani23', 'dani@admin.com', '$2b$10$ddcKe0cSZSJZLmcl8fCFC.Vq54MXFtLEUgvObJRo1JLBPt2yq0cOy', 'admin', '2024-06-10 21:12:47'),
(14, 'Etroni', 'Etro321', 'ronihormat02@gmail.com', '$2b$10$JdupKIm6N8Zkm.ByUDmyFewVwVIxbceQaOhWtzolOawhbNeaTJWiq', 'user', '2024-06-11 23:11:07'),
(15, 'Sundew', 'sundew', 'sundew@superadmin.com', '$2b$10$7kZRkqDhGjwknkxWmBA3ouI7Ekm85ltx6xYzd8mPZNZEyoEyylyh.', 'superadmin', '2024-06-14 07:54:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `tbl_comment`
--
ALTER TABLE `tbl_comment`
  ADD PRIMARY KEY (`id_comment`),
  ADD KEY `id_news` (`id_news`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `tbl_favorite`
--
ALTER TABLE `tbl_favorite`
  ADD PRIMARY KEY (`id_favorite`),
  ADD KEY `id_news` (`id_news`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `tbl_news`
--
ALTER TABLE `tbl_news`
  ADD PRIMARY KEY (`id_news`),
  ADD KEY `id_category` (`id_category`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_comment`
--
ALTER TABLE `tbl_comment`
  MODIFY `id_comment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_favorite`
--
ALTER TABLE `tbl_favorite`
  MODIFY `id_favorite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_news`
--
ALTER TABLE `tbl_news`
  MODIFY `id_news` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_comment`
--
ALTER TABLE `tbl_comment`
  ADD CONSTRAINT `tbl_comment_ibfk_1` FOREIGN KEY (`id_news`) REFERENCES `tbl_news` (`id_news`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_comment_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `tbl_users` (`id_user`) ON DELETE CASCADE;

--
-- Constraints for table `tbl_favorite`
--
ALTER TABLE `tbl_favorite`
  ADD CONSTRAINT `tbl_favorite_ibfk_1` FOREIGN KEY (`id_news`) REFERENCES `tbl_news` (`id_news`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_favorite_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `tbl_users` (`id_user`) ON DELETE CASCADE;

--
-- Constraints for table `tbl_news`
--
ALTER TABLE `tbl_news`
  ADD CONSTRAINT `tbl_news_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `tbl_category` (`id_category`) ON DELETE SET NULL,
  ADD CONSTRAINT `tbl_news_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `tbl_users` (`id_user`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
