/*
urutkan data:
invoice_id, sku_no, total_price
total price = (base price - discon +tax + shipping cose) * qty
*/
const fs = require('fs'); 
const csv = require('csv-parser');
const stringify = require('csv-stringify');

var Invoice = function (_invoiceId, _skuNo, _totalPrice) {
    this.invoiceId = _invoiceId;
    this.skuNo = _skuNo;
    this.totalPrice = _totalPrice;
};

var invoiceData = [];


fs.createReadStream("Test Software Development Engineer - Invoice Data.csv")
.pipe(csv())
.on('data', function(data){
    try {
        invoiceId = data.invoices_id;
        console.log("Invoice Id" + invoiceId);
        skuNo = data.sku_no;
        console.log("sku no" + data.sku_no);
        basePrice = parseInt(data.base_price);
        discount = parseInt(data.discount);
        tax = parseInt(data.tax);
        shippingCost = parseInt(data.shipping_cost);
        qty = data.qty;
        totalPrice = ((basePrice - discount) + tax + shippingCost) * qty; 
        console.log((basePrice-discount)+tax+shippingCost);
        console.log("base price" + data.base_price);
        console.log("discount" + data.discount);
        console.log("tx" + data.tax);
        console.log("ship"  + data.shipping_cost);
        console.log("qty" + data.qty);
        console.log(totalPrice);
        invoiceData.push(new Invoice(invoiceId, skuNo, totalPrice));
    }
    catch(err) {
        //error handler
    }
})
.on('end',function(){
    //some final operation
    console.log("Invoice" + invoiceData);

    let data = [];
    let columns = {
	  invoice_id: 'invoice_id',
	  sku_no: 'sku_no',
	  total_price: 'total_price'
	};
	invoiceData.forEach(function(invoice){
         data.push([invoice.invoiceId, invoice.skuNo, invoice.totalPrice]);
	});
	stringify(data, { header: true, columns: columns }, (err, output) => {
	  if (err) throw err;
	  fs.writeFile('report_sku.csv', output, (err) => {
	    if (err) throw err;
	    console.log('report_sku.csv saved.');
	  });
	});
}); 