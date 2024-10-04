// Data Mahasiswa
const dataMahasiswa = [
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Ilmu Komputer",
    programStudi: "Teknik Informatika",
    semester: 6,
    nilai: {
      algoritma: 85,
      basisData: 88,
      pemrogramanWeb: 90,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman", "dnnc", "doscom"],
  },
  {
    id: 2,
    nama: "Siti Aminah",
    tanggalLahir: "1999-05-10",
    fakultas: "Fakultas Ekonomi Bisnis",
    programStudi: "Manajemen",
    semester: 4,
    nilai: {
      manajemenKeuangan: 78,
      akuntansi: 82,
      pemasaran: 75,
    },
    aktif: true,
    organisasi: ["Koperasi Mahasiswa"],
  },
  {
    id: 3,
    nama: "Rudi Hartono",
    tanggalLahir: "1998-12-01",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Elektro",
    semester: 8,
    nilai: {
      mekanikaTanah: 85,
      strukturBangunan: 89,
    },
    aktif: false,
    organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
  },
];

// Masukan data json ke variabel. 1 arrray 3 objek
const mhs = dataMahasiswa;

//Ambil 1 objek dari array
const mhs_pertama = mhs[0];

//destruktif, ambil beberapa key dari 1 object
// const name = mhs_pertama.nama;
// const faculity = mhs_pertama.fakultas;
// Tampilkan Data Mahasiswa yang pertama Lakukan:
// 1.Destructuring seluruh field
const { id, nama, tanggalLahir, fakultas, programStudi, semester, nilai, aktif, organisasi} = mhs_pertama;
console.log(nama, fakultas, semester);

// 2. Destructuring pada field nilai
const { algoritma, basisData, pemrogramanWeb } = nilai;
console.log("Destructuring pada field nilai:", { algoritma, basisData, pemrogramanWeb });

// 3. Destructuring pada field organisasi
//destructuring dari array
const [orgPertama, orgKedua, ...orglainny] = organisasi;
console.log(orgPertama, orgKedua, orglainny);

// 4. Spread operator untuk field organisasi
//spread operator
const newOrganisasi = [...orglainny ,"futsal"];
console.log(newOrganisasi);

// 5. Update pada field fakultas dan field semester
const updatedMahasiswa = { ...mhs_pertama, fakultas: "Fakultas Teknik", semester: 6 };
console.log("Updated Mahasiswa:", updatedMahasiswa);

// 6. Split pada field tanggal lahir dan tampilkan tahun saja
//split string, bikin function
const getYear = (str) => str.split("-")[0];
console.log(getYear(tanggalLahir));

// 7. Conditional Operator ‘?’
//conditional ?
const statusMhs = aktif ? "masih aktif" : "Ijin Off";
console.log(statusMhs);

//old style
console.log("nama " + nama);

//ES6 Style
console.log(`nama: ${nama}, lahir: ${tanggalLahir}`);

// 8. Map untuk menampilkan semua nama mahasiswa
//Array map, mengumpulkan nilai tertentu
const namaAllMahasiswa = mhs.map((dataMahasiswa) => dataMahasiswa.nama);
console.log(namaAllMahasiswa);

const ttlAllMahasiswa = mhs.map((dataMahasiswa) => dataMahasiswa.tanggalLahir);
console.log(ttlAllMahasiswa);

const fakAllMahasiswa = mhs.map((dataMahasiswa) => dataMahasiswa.fakultas);
console.log(fakAllMahasiswa);

const progdiAllMahasiswa = mhs.map((dataMahasiswa) => dataMahasiswa.programStudi);
console.log(progdiAllMahasiswa);

// 9. Filtering mahasiswa yang aktif dan dari Fakultas Ilmu Komputer
const mahasiswaAktifFakultasIlkom = dataMahasiswa.filter(m => m.aktif && m.fakultas === "Fakultas Ilmu Komputer");
console.log("Mahasiswa aktif dari Fakultas Ilmu Komputer:", mahasiswaAktifFakultasIlkom);

//filtering
const mhsAllAktif = mhs.filter((mahasiswa) => mahasiswa.aktif);
console.log(mhsAllAktif);


// 10. Totalkan nilai seluruh mahasiswa
//Total Nilai Semua Mahasiswa
const totalNilaiSemuaMahasiswa = dataMahasiswa.reduce((sum, mhs) => {
  const totalNilai = Object.values(mhs.nilai).reduce((acc, nilai) => acc + nilai, 0);
  return sum + totalNilai;
}, 0);

console.log(totalNilaiSemuaMahasiswa);

//Total dan Rata-Rata setiap mahasiswa
const totalDanRataRataNilaiMahasiswa = dataMahasiswa.map((mahasiswa) => {
  const nilaiArray = Object.values(mahasiswa.nilai);
  const totalNilai = nilaiArray.reduce((acc, nilai) => acc + nilai, 0); //reduce digunakan untuk menjumlahkan nilai-nilai tersebut.
  const rataRataNilai = totalNilai / nilaiArray.length;
  
  return {
    nama: mahasiswa.nama,
    totalNilai,
    rataRataNilai: rataRataNilai.toFixed(2), // Membatasi angka desimal hingga 2 digit
  };
});

console.log(totalDanRataRataNilaiMahasiswa);

// 11. Sort seluruh mahasiswa berdasarkan semester
//Sort, mengurutkan semester
const sortBySemester = mhs.slice().sort((a,b) => a.semester - b.semester);
console.log(sortBySemester);

// 12. Menambahkan mahasiswa baru
//Add New MHS
const newMahasiswa = {
    id: 4,
    nama: "Andi Setiawan",
    tanggalLahir: "2001-04-12",
    fakultas: "Fakultas Ilmu Komputer",
    programStudi: "Sistem Informasi",
    semester: 2,
    nilai: {
        algoritma: 80,
        basisData: 82,
        pemrogramanWeb: 85,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa SI"],
};


// 13. Delete dan Update pada salah satu Mahasiswa
const dataMahasiswaUpdated = [...dataMahasiswa, newMahasiswa];
console.log(dataMahasiswaUpdated);

const dataMahasiswaAfterDelete = dataMahasiswaUpdated.filter((mhs) => mhs.id !== 2);
console.log(dataMahasiswaAfterDelete);

const dataMahasiswaAfterUpdate = dataMahasiswaAfterDelete.map((mhs) => mhs.id == 1 ? {...mhs, semester: 7} : mhs);
console.log(dataMahasiswaAfterUpdate);