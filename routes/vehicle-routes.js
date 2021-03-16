const express = require('express');

const router = express.Router();

const VEHICLES = [
    {
        id: '1234',
        plate: '123abc',
        odometer: 123900,
        year: 2015,
        make: 'Chevrolet',
        model: 'Silverado'
    },
    {
        id: '5689',
        plate: 'av5y61',
        odometer: 455566,
        year: 2000,
        make: 'GMC',
        model: 'Sierra'
    }
];

router.get('/', (req, res, next) => {
    console.log('GET request in Main Routes');
    res.json(VEHICLES);
});

router.get('/:vid', (req, res, next) => {
    const vid = req.params.vid; // { id: '1234}
    console.log(vid);
    const vehicle = VEHICLES.find( v => {
        return v.id === vid
    });
    res.json({vehicle: vehicle});
});

module.exports = router;