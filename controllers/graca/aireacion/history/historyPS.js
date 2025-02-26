const { response } = require('express');
const HistoryEstadoPS = require('../../../..//models/historyEstadoPS');

const getPC36Historial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PC036', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PC036',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS22AHistorial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS22A', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS22A',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS22BHistorial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS22B', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS22B',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS024Historial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS024', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS024',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS025Historial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS025', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS025',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS026Historial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS026', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS026',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS027Historial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS027', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS027',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS028Historial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS028', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS028',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS029Historial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS029', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS029',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS030Historial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS030', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS030',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS031Historial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS031', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS031',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS032Historial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS032', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS032',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS33AHistorial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS33A', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS33A',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS33BHistorial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS33B', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS33B',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS34BHistorial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS34B', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS34B',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS035Historial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS035', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS035',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getPS039Historial = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ piscina: 'PS039', date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const arregloHorasTrab = [];
        const arregloEstado = [];

        historial.forEach(element => {
            arregloHorasTrab.push(element['horasTrab']);
            arregloEstado.push(Math.round(element['estado']));
        });

        const horasTrabDia = (arregloHorasTrab.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloHorasTrab.length;
        const porcentajeTrabDia = (arregloEstado.reduce((acumulador, valor) => acumulador + valor, 0)) / arregloEstado.length;
        
        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
        res.status(200).json({
                ok: true,
                name: 'PS039',
                horasTrabajadasDia: horasTrabDia,
                porcentajeEncendido: porcentajeTrabDia,
                arregloPorcentajeEncendido: arregloEstado
            }
        );
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

const getHistorialPiscinas = async (req, res = response) => {
    try {
        const { fechaInicio, fechaFin } = req.body;
        const historial = await HistoryEstadoPS.find({ date: { $gte: fechaInicio, $lte: fechaFin }})
        
        const agrupado = historial.reduce((acc, item) => {
            const piscina = item.piscina;
            const estado = parseFloat(item.estado);  
            const horasTrab = item.horasTrab;        
            if (!acc[piscina]) {
                acc[piscina] = { totalEstado: 0, totalHoras: 0, count: 0 };
            }
        
            acc[piscina].totalEstado += estado;
            acc[piscina].totalHoras += horasTrab;
            acc[piscina].count += 1;
        
            return acc;
        }, {});

        const resultado = Object.keys(agrupado).reduce((acc, piscina) => {
            acc[piscina] = [{
                promedioEstado: Math.round(agrupado[piscina].totalEstado / agrupado[piscina].count),
                promedioHoras: Math.round(agrupado[piscina].totalHoras / agrupado[piscina].count)
            }];
            return acc;
        }, {});
    

        if(historial.length == 0) {
            return res.status(400).json({
                ok: false,
                message: 'No hay registros para esta fecha'
            });
        }
     
        res.status(200).json(resultado);

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
}

module.exports = {
    getPC36Historial,
    getPS22AHistorial,
    getPS22BHistorial,
    getPS024Historial,
    getPS025Historial,
    getPS026Historial,
    getPS027Historial,
    getPS028Historial,
    getPS029Historial,
    getPS030Historial,
    getPS031Historial,
    getPS032Historial,
    getPS33AHistorial,
    getPS33BHistorial,
    getPS34BHistorial,
    getPS035Historial,
    getPS039Historial,
    getHistorialPiscinas
}