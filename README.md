# YOU SHOULD KNOW REACT!

> **"Belajar React, Pakai React, Buktikan React"**

Selamat datang di **YOU SHOULD KNOW REACT!**, sebuah proyek pembelajaran interaktif berbasis web untuk menguasai React dari nol hingga siap masuk ke lingkungan production.

Proyek ini dirancang khusus untuk developer Indonesia yang ingin belajar React secara mendalam, praktis, dan gratis tanpa biaya bootcamp yang mahal.

---

## Nilai Utama Proyek (Core Values)

| Nilai Utama           | Deskripsi                                                                                                                                                                                                    |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ** Self-Referential** | _"Eat your own dog food"_ — Website pembelajaran ini dibangun menggunakan teknologi dan konsep React yang diajarkan di dalamnya. Codebase ini adalah contoh nyata (living proof) dari teori yang dipelajari. |
| **Progressive**       | Kurikulum dirancang secara runtut dan terstruktur mulai dari fondasi JavaScript/web modern hingga optimasi performa dan deployment.                                                                          |
| **Visual First**      | Belajar tidak hanya lewat teks. Setiap konsep dilengkapi dengan demo interaktif yang dapat dicoba langsung di browser untuk mempermudah pemahaman.                                                           |
| **Open & Free**       | 100% gratis, tanpa paywall, dan tidak mewajibkan login untuk mulai belajar.                                                                                                                                  |
| **Production-Ready**  | Fokus pada praktik standar industri, mencakup integrasi Firebase (Auth & Firestore), testing, dan deployment otomatis.                                                                                       |

---

## Struktur Materi & Kurikulum

Kurikulum di dalam proyek ini dibagi menjadi 4 modul utama yang dirancang secara progresif:

### Modul 0 — Fondasi (Pra-React)

Mempersiapkan pemahaman dasar web modern sebelum masuk ke library React.

- **0.1 Anatomi Struktur Proyek React** — Memahami Vite, `package.json`, alur JSX ke Babel, hingga proses rendering Virtual DOM ke Real DOM.
- **0.2 HTML & CSS untuk React** — Semantic HTML, Flexbox, Grid, CSS Variables, dan aturan styling di JSX (`className` vs inline styles).
- **0.3 Modern JavaScript (ES6+)** — Sintaksis wajib: Let/Const, Arrow Function, Destructuring, Spread Operator, Optional Chaining, Modules (import/export), dan Async/Await.
- **0.4 Manipulasi DOM & Event Handling** — Perbandingan manipulasi DOM manual dengan efisiensi React, serta cara kerja Event Object.

### Modul 1 — React Dasar

Memulai perjalanan inti pengembangan aplikasi dengan React.

- **1.1 Pengenalan React & JSX** — Konsep Single Page Application (SPA), aturan dasar JSX, fragments, dan conditional rendering.
- **1.2 Component & Props** — Pembuatan function component, parsing props, prop types, children props, dan reusability.
- **1.3 State dengan useState** — Perbedaan state vs props, pemicu re-render, mutasi state array/object secara immutable.
- **1.4 useEffect & Lifecycle** — Penanganan side effects, aturan dependency array, cleanup function, dan use case yang tepat.
- **1.5 Rendering List & Keys** — Melakukan looping data menggunakan `.map()` dan pentingnya atribut `key`.

### Modul 2 — React Menengah

Mulai membuat aplikasi dinamis dengan fitur-fitur lanjutan.

- **2.1 React Hooks Lanjutan** — Memahami `useRef`, optimasi dengan `useMemo` & `useCallback`, state kompleks dengan `useReducer`, dan pembuatan Custom Hooks.
- **2.2 Fetch API & Data Dinamis** — Integrasi REST API menggunakan `fetch()` & Axios, manajemen loading & error state.
- **2.3 Form Handling** — Perbedaan Controlled vs Uncontrolled inputs, validasi form manual, dan pengenalan `react-hook-form`.
- **2.4 Global State dengan Context API** — Penggunaan Context, Provider, `useContext`, serta kapan harus menggunakan global state vs local state.
- **2.5 React Router DOM** — Implementasi routing multi-halaman (`BrowserRouter`, `Routes`, `Link`, `NavLink`, dynamic routing `useParams`, dan penanganan halaman 404).

### Modul 3 — React Lanjutan & Production

Mempersiapkan aplikasi agar siap dideploy dan digunakan oleh pengguna nyata.

- **3.1 Autentikasi dengan Firebase** — Integrasi Firebase Auth (Email & Google Sign-In), pembuatan Protected Routes, dan persistensi login.
- **3.2 Firestore Database** — Implementasi operasi CRUD (Create, Read, Update, Delete) real-time menggunakan Firestore.
- **3.3 Performa & Best Practices** — Code splitting, lazy loading, optimasi dengan `React.memo`, struktur folder terbaik, dan konvensi penamaan standar industri.
- **3.4 Testing Dasar** — Pengenalan testing dengan Vitest dan React Testing Library untuk memastikan kualitas komponen.
- **3.5 Deploy ke Production** — Proses build aplikasi (`npm run build`), setup environment variables, dan deployment otomatis menggunakan Vercel.

---

## Informasi Pengembangan (Development Info)

> [!NOTE]
>
> - **Branch `main`** (branch ini) hanya digunakan sebagai landing page pengenalan proyek, dokumentasi, dan roadmap utama.
> - **Branch `dev`** digunakan untuk proses pengembangan aktif, penulisan kode, penambahan fitur, serta implementasi materi kurikulum.

Jika Anda ingin berkontribusi atau melihat kode implementasi aplikasi, silakan berpindah ke branch **`dev`**:

```bash
git checkout dev
```
