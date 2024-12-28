import { Router } from "express";
import { confirmTokenController, logInController, logOutController, recoverPasswordController, recoverPasswordMailingController, refreshTokenController, registerController, verificacionDeRegistroController } from "../controllers/auth_controller.js";


const router = Router();

//Rutas públicas
router.post("/auth/login", logInController);
router.post("/auth/register", registerController);
router.get("/auth/confirm/:token", verificacionDeRegistroController);
router.get("/auth/refresh", refreshTokenController);
router.get("/auth/logout", logOutController);

router.post("/auth/recovery-password-mailing", recoverPasswordMailingController);
router.get("/auth/recovery-password/:token", confirmTokenController);
router.post("/auth/recovery-password", recoverPasswordController);

export default router;