const fs = require('fs'); 
const csv = require('csv-parser');
const stringify = require('csv-stringify');

var Invoice = function (_invoiceId, _skuNo, _totalPrice) {
    this.invoiceId = _invoiceId;
    this.skuNo = _skuNo;
    this.totalPrice = _totalPrice;
};

var invoiceData = [];

function sortByCol(arr, colIndex){
    arr.sort(sortFunction)
    function sortFunction(a, b) {
        a = a[colIndex]
        b = b[colIndex]
        return (a === b) ? 0 : (a < b) ? -1 : 1
    }
}

fs.createReadStream("Test Software Development Engineer - Invoice Data.csv")
.pipe(csv())
.on('data', function(data){
    try {
        invoiceId = data.invoices_id;
        skuNo = data.sku_no;
        basePrice = parseInt(data.base_price);
        discount = parseInt(data.discount);
        tax = parseInt(data.tax);
        shippingCost = parseInt(data.shipping_cost);
        qty = data.qty;
        totalPrice = ((basePrice - discount) + tax + shippingCost) * qty; 
        invoiceData.push(new Invoice(invoiceId, skuNo, totalPrice));
    }
    catch(err) {
    }
})
.on('end',function(){
    let data = [];
    let columns = {
	  invoice_id: 'invoice_id',
	  sku_no: 'sku_no',
	  total_price: 'total_price'
	};
	invoiceData.forEach(function(invoice){
         data.push([invoice.invoiceId, invoice.skuNo, invoice.totalPrice]);
	});
    sortByCol(data, 1);
	stringify(data, { header: true, columns: columns }, (err, output) => {
	  if (err) throw err;
	  fs.writeFile('report_sku.csv', output, (err) => {
	    if (err) throw err;
	    console.log('report_sku.csv saved.');
	  });
	});
}); 