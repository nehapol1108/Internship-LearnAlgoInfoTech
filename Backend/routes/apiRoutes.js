const express=require('express');
const router=express.Router();
const { addUser, getCustomerData,getCustomerById}=require('../controllers/userController');
const { addTransaction, transferData}=require('../controllers/transactionController');

router.post('/addcustomer',addUser);
router.get('/customersdata',getCustomerData);
router.get('/customer/:id',getCustomerById);


router.post('/transaction/new',addTransaction);
router.get('/transferdata',transferData);
module.exports=router;
