const app = require("../app");
const PORT = 7500;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API 서버 가동 ${PORT}`);
});
