import { Router } from "express";
const router = Router();
router.get('/', (_, response) => {
    response.send('Get route');
});
export default router;
