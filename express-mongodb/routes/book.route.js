const router = require('express').Router();
const book = require('../controllers/book.controller'); //

router.get('/', book.getAllBooks);
router.get('/:id', book.getOneBook);
router.post('/', book.createBook);
router.put('/:id', book.updateBook);
router.delete('/:id', book.deleteBook);

// router.get("/", function getAllBooks(req, res) {
//   res.status(200).json({
//     message: "mendapatkan semua buku",
//   });
// });
// module.exports = router;

// router.get("/:id", function getOneBook(req, res) {
//   const id = req.params.id;
//   res.status(200).json({
//     message: "mendapatkan satu buku",
//     id,
//   });
// });

// router.post("/", function createBook(req, res) {
//   res.status(200).json({
//     message: "membuat buku baru",
//   });
// });

// router.put("/:id", function updateBook(req, res) {
//   const id = req.params.id;
//   res.status(200).json({
//     message: "memperbaharui satu buku",
//     id,
//   });
// });

// router.delete("/:id", function deleteBook(req, res) {
//   const id = req.params.id;
//   res.status(200).json({
//     message: "menghapus satu buku",
//     id,
//   });
// });

module.exports = router;
