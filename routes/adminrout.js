var express = require('express');
var { adminmodel } = require('../models/adminmodel');
var { shopmodel } = require('../models/shopkeepers');
var { promodel } = require('../models/productmod')
const routers = express.Router();
routers.get('/', (req, res) => {
    res.send('Hai');
});
routers.post('/adminreg', async (req, res) => {
    try {
        var data = new adminmodel(req.body);
        var result = await data.save();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
routers.post('/adminlogin', (req, res) => {
    try {
        var searchuser = req.body.usern;
        var searchpassword = req.body.pass;
        adminmodel.find({
            $and: [
                {
                    "adminUsername": searchuser
                },
                {
                    "adminPassword": searchpassword
                }
            ]
        }, (error, data) => {
            if (error) {
                throw error;
            }
            if (data.length > 0) {
                res.json({ "status": "Success" });
            }
            else {
                res.json({ "status": "Failed" });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
routers.post('/shopkeeper', async (req, res) => {
    try {
        var data = new shopmodel(req.body);
        var result = await data.save();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
routers.post('/addpdt', async (req, res) => {
    try {
        var data = new promodel(req.body);
        var result = await data.save();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
routers.get('/view', async (req, res) => {
    try {
        var result = await promodel.find();
        res.send(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);

    }
});
routers.post('/search', async (req, res) => {
    try {
        promodel.find(req.body, (error, data) => {
            if (error) {
                throw error;
            }
            else {
                res.send(data);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
routers.post('/updatepro', (req, res) => {
    try {
        promodel.findOneAndUpdate({
            sellerName: req.body.sellerName
        },
            req.body,
            (error, data) => {
                if (error) {
                    res.json({
                        "status": "error"
                    });
                } else {
                    res.json({
                        "status": "Success"
                    });
                }
            })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
routers.post('/dltpro', (req, res) => {
    try {
        promodel.findByIdAndDelete(req.body._id, 
            (error, data) => {
                if (error) {
                    res.json({
                        "status": "error"
                    });
                } else {
                    res.json({
                        "status": "Successfully deleted"
                    });
                }
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})
module.exports = routers