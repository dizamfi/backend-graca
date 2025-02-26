const { Router } = require('express')
const { getPC36Historial, getPS22AHistorial, getPS22BHistorial, getPS024Historial, getPS025Historial, getPS026Historial, getPS027Historial, getPS028Historial, getPS029Historial, getPS030Historial, getPS031Historial, getPS032Historial, getPS33AHistorial, getPS33BHistorial, getPS34BHistorial, getPS035Historial, getPS039Historial, getHistorialPiscinas } = require('../../controllers/graca/aireacion/history/historyps')
const router = Router();

router.post('/pc036/historial', getPC36Historial);
router.post('/ps22a/historial', getPS22AHistorial);
router.post('/ps22b/historial', getPS22BHistorial);
router.post('/ps024/historial', getPS024Historial);
router.post('/ps025/historial', getPS025Historial);
router.post('/ps026/historial', getPS026Historial);
router.post('/ps027/historial', getPS027Historial);
router.post('/ps028/historial', getPS028Historial);
router.post('/ps029/historial', getPS029Historial);
router.post('/ps030/historial', getPS030Historial);
router.post('/ps031/historial', getPS031Historial);
router.post('/ps032/historial', getPS032Historial);
router.post('/ps33a/historial', getPS33AHistorial);
router.post('/ps33b/historial', getPS33BHistorial);
router.post('/ps34b/historial', getPS34BHistorial);
router.post('/ps035/historial', getPS035Historial);
router.post('/ps039/historial', getPS039Historial);
router.post('/psGeneral/historial', getHistorialPiscinas);


module.exports = router;