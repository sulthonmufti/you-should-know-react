export const curriculum = [
  {
    moduleId: "module-0",
    moduleTitle: "FONDASI (Pra-React)",
    moduleDescription:
      "Konsep dasar web dan JavaScript yang wajib dikuasai sebelum menyentuh React.",
    topics: [
      {
        id: "project-anatomy",
        moduleId: "module-0",
        title: "0.1 Anatomi Struktur Project React",
        description:
          "Membedah Vite, node_modules, package.json, dan alur JSX ke Real DOM.",
        level: "Dasar",
        path: "/learn/module-0/project-anatomy",
        duration: "10 menit",
      },
      {
        id: "html-css",
        moduleId: "module-0",
        title: "0.2 HTML & CSS untuk React",
        description:
          "Semantic HTML, Flexbox, Grid, dan bedanya class vs className.",
        level: "Dasar",
        path: "/learn/module-0/html-css",
        duration: "8 menit",
      },
      {
        id: "modern-js",
        moduleId: "module-0",
        title: "0.3 Modern JavaScript ES6+",
        description:
          "Destructuring, spread operator, arrow function, dan asynchronus JS.",
        level: "Dasar",
        path: "/learn/module-0/modern-js",
        duration: "15 menit",
      },
      {
        id: "dom-event",
        moduleId: "module-0",
        title: "0.4 DOM & Event Handling",
        description:
          "Memahami DOM, Event Listener, dan pengenalan Synthetic Events di React.",
        level: "Dasar",
        path: "/learn/module-0/dom-event",
        duration: "12 menit",
      },
    ],
  },
  {
    moduleId: "module-1",
    moduleTitle: "REACT DASAR",
    moduleDescription:
      "Mempelajari inti dari React: Komponen, Props, dan State.",
    topics: [
      {
        id: "intro-react",
        moduleId: "module-1",
        title: "1.1 Pengenalan React & JSX",
        description: "Apa itu React, SPA vs MPA, dan aturan penulisan JSX.",
        level: "Dasar",
        path: "/learn/module-1/intro-react",
        duration: "8 menit",
      },
      {
        id: "component-props",
        moduleId: "module-1",
        title: "1.2 Component & Props",
        description:
          "Cara membuat komponen reusabel dan mengirim data antar komponen.",
        level: "Dasar",
        path: "/learn/module-1/component-props",
        duration: "12 menit",
      },
      {
        id: "usestate",
        moduleId: "module-1",
        title: "1.3 State dengan useState",
        description:
          "Membuat komponen interaktif yang bisa mengingat perubahan data.",
        level: "Menengah",
        path: "/learn/module-1/usestate",
        duration: "15 menit",
      },
      {
        id: "useeffect",
        moduleId: "module-1",
        title: "1.4 Efek Samping (useEffect)",
        description:
          "Mengelola siklus hidup komponen, fetch API, dan array dependensi.",
        level: "Menengah",
        path: "/learn/module-1/useeffect",
        duration: "18 menit",
      },
      {
        id: "list-keys",
        moduleId: "module-1",
        title: "1.5 List & Keys",
        description:
          "Merender daftar dari array dan memahami pentingnya prop key.",
        level: "Dasar",
        path: "/learn/module-1/list-keys",
        duration: "10 menit",
      },
    ],
  },
  {
    moduleId: "module-2",
    moduleTitle: "REACT MENENGAH",
    moduleDescription:
      "Menghubungkan React dengan ekosistem luar dan state global.",
    topics: [
      {
        id: "advanced-hooks",
        moduleId: "module-2",
        title: "2.1 Hooks Lanjutan (useRef)",
        description: "Memanipulasi DOM secara langsung tanpa memicu re-render.",
        level: "Menengah",
        path: "/learn/module-2/advanced-hooks",
        duration: "10 menit",
      },
      {
        id: "fetch-api",
        moduleId: "module-2",
        title: "2.2 Fetch API",
        description:
          "Mengambil data dari REST API sungguhan beserta error handling.",
        level: "Menengah",
        path: "/learn/module-2/fetch-api",
        duration: "15 menit",
      },
      {
        id: "form-handling",
        moduleId: "module-2",
        title: "2.3 Form Handling",
        description:
          "Mengelola input pengguna dengan teknik Controlled Components.",
        level: "Menengah",
        path: "/learn/module-2/form-handling",
        duration: "12 menit",
      },
      {
        id: "context-api",
        moduleId: "module-2",
        title: "2.4 Context API",
        description:
          "Mengatasi Prop Drilling dengan manajemen state skala global.",
        level: "Menengah",
        path: "/learn/module-2/context-api",
        duration: "15 menit",
      },
      {
        id: "react-router",
        moduleId: "module-2",
        title: "2.5 React Router",
        description:
          "Membangun navigasi SPA (Single Page Application) dan rute dinamis.",
        level: "Menengah",
        path: "/learn/module-2/react-router",
        duration: "12 menit",
      },
    ],
  },
  {
    moduleId: "module-3",
    moduleTitle: "BACKEND & DEPLOYMENT",
    moduleDescription:
      "Menghubungkan React dengan database cloud, optimasi performa, dan rilis ke publik.",
    topics: [
      {
        id: "firebase-auth",
        moduleId: "module-3",
        title: "3.1 Firebase Auth",
        description:
          "Integrasi sistem otentikasi login Google dan manajemen sesi.",
        level: "Lanjut",
        path: "/learn/module-3/firebase-auth",
        duration: "20 menit",
      },
      {
        id: "firestore",
        moduleId: "module-3",
        title: "3.2 Cloud Firestore",
        description:
          "Operasi CRUD pada database NoSQL dan sinkronisasi Real-Time.",
        level: "Lanjut",
        path: "/learn/module-3/firestore",
        duration: "25 menit",
      },
    ],
  },
];
