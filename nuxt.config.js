module.exports = {
  axios: {
    baseURL: "http://localhost:3000",
    proxyHeaders: true,
    credentials: true
  },
  build: {
    optimizeCSS: true,
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  plugins: [
    "~/plugins/fontawesome.js"
  ],
  loading: { color: '#b56d82' },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Curator" },
      { hid: "identifier-url", name: "identifier-url", content: "https://curator.vohzd.com" },
      { hid: "title", name: "title", content: "Curator" },
      { hid: "abstract", name: "abstract", content: "Curator" },
      { hid: "description", name: "description", content: "Curator" },
      { hid: "keywords", name: "keywords", content: "Curator, vohzd, " },
      { hid: "author", name: "author", content: "vohzd" },
      { hid: "language", name: "language", content: "EN" },
      { hid: "robots", name: "robots", content: "All" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    "@nuxtjs/axios",
    "~/api/sockets/index.js"
  ],
  serverMiddleware: ["~/api/index.js" ],
  title: "Curator",
  watch: ["~api/*"]
}
