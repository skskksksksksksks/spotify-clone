// import {Router} from "express";

// const router = Router();
// router.get("/" , (req, res) => {
//     res.send("Song route from Get method");
// });

// export default router

import { Router } from "express";
import { getAlbumById, getAllAlbums } from "../controller/album.controller.js";

const router = Router();

router.get("/", getAllAlbums);
router.get("/:albumId", getAlbumById);

export default router;