// Import Router
const VeteranRouter = require('express').Router();
const VetService = require("../services/Veteran.service")
const verifyToken = require("../verifyToken");
let verteranService = new VetService()


const jwt = require("jsonwebtoken");


VeteranRouter.route('/register').post(async (req,res) =>
{
    // Hashing of password will be implemented here
    let execStatus = await verteranService.registerVeteran(req.body);

    if (execStatus)
    {
        return res.status(409).send(execStatus);
    }
    return res.status(201).send("Registered Successfully"); // user successfully created
});

// Login Route
VeteranRouter.route('/login').post(async (req,res) =>
{
    console.log("Reaced at the point")
    let user = await verteranService.getUserByEmail(req.body);
    if (!user)
    {
        return res.status(401).send("Invalid Credentials");
    }
    // Otherwise Check password
    if (user.password != req.body.password)
    {
        return res.status(401).send("Invalid Credentials")
    }
    console.log("User Ready to be loged in : ",user);
    // Generate Token
    let token = jwt.sign({ id: user._id },"kashifkarman");
    return res.status(200).send({ token });

});
VeteranRouter.route('/get-profiledata').get(verifyToken,async (req,res) =>
{
    let veteran = await verteranService.getVeteranById(req.user_id.id);
    console.log("Veteran Data : ",veteran);
    return res.status(200).json(veteran);
});
VeteranRouter.route('/add-newhobby').post(verifyToken,async (req,res) =>
{
    let veteran = await verteranService.getVeteranById(req.user_id.id);
    veteran.hobbies.push(req.body.hobby);
    veteran.save();
    return res.status(200).json("New Hobby Added");
});
// Get All Veterans
VeteranRouter.route('/get-allVeterans').get(verifyToken,async (req,res) =>
{
    console.log("End Point Hit")
    let veterans = await verteranService.getAllVeterans();
    return res.status(200).json(veterans);
});

module.exports = VeteranRouter;