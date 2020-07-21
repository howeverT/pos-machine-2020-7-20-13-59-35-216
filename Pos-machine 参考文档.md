# Pos-machine 参考文档

## 方法解释

### getItemNum

输入barcodes，从barcodes中统计每个条码的个数，输出一个包含每个条码出现次数的Map

### getItemData

输入条码出现次数的Map，从数据库database中取出在Map中的条码的具体信息，返回对象数组

### caculLinePrice

输入为条码的具体信息的数组，分别统计他们的总价格，并返回对象数组

### createLineReceipt

输入为所有具体信息的数组，将每个条码单独生成一条收据信息，并存放在数组中返回

### createFullReceipt

输入为每行的收据信息数组，将收据进行拼接

### printReceipt

输出整个收据

## PDCA

| 方法              | Plan | Do    | Check                          | Action                     |
| ----------------- | ---- | ----- | ------------------------------ | -------------------------- |
| getItemNum        | 5min | 10min | 对js中map的知识有些遗忘        | 通过网上查阅资料复习       |
| getItemData       | 4min | 5min  | 基本按时完成                   | 无                         |
| caculLinePrice    | 2min | 2min  | 按时完成                       | 无                         |
| createLineReceipt | 8min | 15min | 测试用例个别字符遗漏造成不通过 | 仔细阅读测试用例并满足要求 |
| createFullReceipt | 5min | 5min  | 按时完成                       | 无                         |
| printReceipt      | 3min | 3min  | 按时完成                       | 无                         |

## 上下文图

![context](.\context.png)