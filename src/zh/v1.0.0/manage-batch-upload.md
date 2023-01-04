---


category: 文档管理
---
# 批量上传文档
## 客户端操作流程
(批量导入前需在管理员端配置相关设置)
1. 进入工作流程页面，点击右上角个人工作，点击批量导入，会显示批量导入弹框 ![bulkImport1](/images/bulkImport1.png)
2. 填写表单![bulkImport2](/images/bulkImport2.png)
   - 需要填写工作流名称，方便以后识别，可随意填写（1）
   - profiles在后台配置，用于为文档类型分配文件夹及自定义目录，根据csv配置选择，需对profiles配置有一定了解（2）
   - csv文件为导入文件的配置文件，右侧导入文件需与csv文件配置一一对应（3）
提交成功后将会把批量导入的文件一一放到已配置的目录。
## 例子
1. 配置profiles（管理员端配置，使用批量导入功能的用户需有一定了解）
   
   ![Country-Customer Name-Invoice Number](/images/Country-CustomerName-InvoiceNumber.png)
   - 将批量上传文件放置在目录 `Domain/Workspaces/testing`下
   - 同时根据csv文件的列标题按配置规则生成目录
  
2. 准备csv与导入的文件
   - app2FrompropertiesRelation.csv（列标题可多不可少）
   ![bulkImport3-example](/images/bulkImport3-example.png)
   
3. 打开批量上传弹框选择相应配置
   
   ![bulkImport-example](/images/bulkImport-example.png)

4. 批量上传结果
   
   ![bulkImport-result](/images/bulkImport-result.png)
   - 导入的文件均放置在目录 `Domain/Workspaces/testing`下
   - 并根据 Country - Customer Name - Invoice Number 的规则生成相应目录

