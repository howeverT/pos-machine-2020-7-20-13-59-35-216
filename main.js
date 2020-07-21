function printReceipt(barcodes) {
    /*console.log(`
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
----------------------
Total: 23 (yuan)
**********************`)*/ 
    let itemNumList=getItemNum(barcodes);
    let itemList=getItemData(itemNumList);
    let itemReceiptList=caculLinePrice(itemList);
    let lineReceipt=createLineReceipt(itemReceiptList);
    console.log(createFullReceipt(lineReceipt));
}

function getItemNum(barcodes){
    let numMap=new Map();
    for(barcodesIndex = 0; barcodesIndex < barcodes.length; barcodesIndex++) {
        let numListKey=barcodes[barcodesIndex];
        if(numMap.get(numListKey)==null){
            numMap.set(numListKey,1);
        }
        else{
            numMap.set(numListKey,numMap.get(numListKey)+1);
        }
    }
    return numMap;
}

function getItemData(itemNumList){
    let itemArray=new Array();
    for(dataIndex = 0; dataIndex < database.length; dataIndex++){
        let dataKey=database[dataIndex].barcode;
        if(itemNumList.get(dataKey)!=null){
            lineItem={
                barcode: database[dataIndex].barcode,
                name: database[dataIndex].name,
                price: database[dataIndex].price,
                num: itemNumList.get(dataKey)
            };
            itemArray.push(lineItem);
        }
    }
    return itemArray;
}

function caculLinePrice(itemList){
    for(itemListIndex = 0; itemListIndex < itemList.length; itemListIndex++){
        let itemKey=itemList[itemListIndex];
        itemKey.total=itemKey.num*itemKey.price;
    }
    return itemList;

}

function createLineReceipt(itemReceiptList){
    let lineData=new Array();
    let totalPrice=0;
    for(lineIndex = 0; lineIndex < itemReceiptList.length; lineIndex++){
        let lineKey=itemReceiptList[lineIndex];
        let lineString="";
        totalPrice+=lineKey.total;
        lineString="Name: "+lineKey.name+", Quantity: "+lineKey.num+", Unit price: "+lineKey.price+" (yuan)"+", Subtotal: "+lineKey.total+" (yuan)"+"\n";
        lineData.push(lineString);
    }
    let totalString="Total: "+totalPrice+" (yuan)"+"\n";
    lineData.push(totalString);
    return lineData;
}

function createFullReceipt(lineReceipt){
    let receipt="\n***<store earning no money>Receipt ***\n";
    
    for(receiptIndex = 0; receiptIndex < lineReceipt.length; receiptIndex++){
        if(receiptIndex==lineReceipt.length-1)
            receipt+="----------------------"+"\n"+lineReceipt[receiptIndex]+"**********************";
        else
            receipt+=lineReceipt[receiptIndex];
    }
    return receipt;

}

const database=[
    {
       barcode: 'ITEM000000',
       name: 'Coca-Cola',
       price: 3
     },
     {
       barcode: 'ITEM000001',
       name: 'Sprite',
       price: 3
     },
     {
       barcode: 'ITEM000002',
       name: 'Apple',
       price: 5
     },
     {
       barcode: 'ITEM000003',
       name: 'Litchi',
       price: 15
     },
     {
       barcode: 'ITEM000004',
       name: 'Battery',
       price: 2
     },
     {
       barcode: 'ITEM000005',
       name: 'Instant Noodles',
       price: 4
     }
 ];
 
module.exports = {
    printReceipt
};