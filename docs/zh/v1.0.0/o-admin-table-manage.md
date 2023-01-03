---
title: A-表格管理
position: 4008
category: 其他
---
# 表格管理
为便于管理各个表格的属性，可在此编辑表格信息,控制表格字段,列排序,列显隐,及样式。

切换页面到 `/tableColumnSetting`。找到需要调整的表格。
![tableColumnSetting](/images/tableColumnSetting.png)
- 点击 `Use Default` 按钮使用系统默认表格设置(1)
- 点击 `Add` 新增表格展示,必须确认 property 数据存在。(2)
  ![tableColumnSettingAdd](/images/tableColumnSettingAdd.png)
  + __property__: 展示的属性,必填
  + __label__: 标题展示的名称
  + __sortable__: 是否展示排序功能
  + __slot__: 使用插槽
  + __width__: 宽度
  + __headerAlign__: 标题对齐
  + __isFilter__: 是否展示过滤功能
  + __canNotDelete__: 
- 点击 `Reorder` , 拖动列表属性对表格进行排序。(3)
  ![tableColumnSettingOrder](/images/tableColumnSettingOrder.png)
- 点击 `Edit` 对表格列进行编辑
- 点击 `Delete` 删除表格列