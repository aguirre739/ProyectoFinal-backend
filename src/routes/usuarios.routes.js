import { Router } from "express";
import verifyToken from "../middlewares/verifytoken";
import userCtrl from "../controllers/user.controller";
import verifyRole from '../middlewares/verifyrole';


const { enviarRoles, autenticar, listarUsuarios, nuevoUsuario, cambiarEstado, editarUsuario, signUp } = userCtrl;
const { isAdmin, isEditor } = verifyRole;

const router = Router();


router.route("/")
    .get([verifyToken, isAdmin], listarUsuarios ); // verifica token antes de continuar

router.route("/me")
    .get(verifyToken, autenticar); // verifica token antes de continuar

// router.route("/me/roles")
//     .get([verifyToken], enviarRoles);

router.route("/nuevo")
    .post([verifyToken,isAdmin],nuevoUsuario);

router.route("/cambiar-estado/:id")
    .put(verifyToken,cambiarEstado);

router.route("/editar/:id")
    .put([verifyToken,isAdmin],editarUsuario)

// router.route("/signup")
//     .post(signUp);


export default router;