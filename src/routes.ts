import { Router } from "express";

const router = Router()

router.get('/', (_, response) => {
  response.send({
    message: 'Bakareeeeee'
  })
})

export default router
