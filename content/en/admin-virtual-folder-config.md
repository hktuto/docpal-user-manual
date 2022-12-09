---
title: A-虚拟文件夹配置
position: 7
category: 文档查询
---
 在配置虚拟文件夹前，需要熟悉文件属性以及对目标虚拟文件夹有一定了解。
 虚拟文件夹可统筹文件树各文件夹中统一属性的文件。
配置虚拟文件夹可能需要同时配置文件树属性。
  
![virtualFolderConfig](/virtualFolderConfig.png)
![virtualFolderConfig2](/virtualFolderConfig2.png)
- 图示案例解析：
  1. 搜索文件树下所有文档类型为Case的文件（父级文件夹）
  2. 每个 __父级文件夹__ 设有四个关联文件夹（"Support file"、"Claims Form"、"Reimburasement"、"Cost Model"）
  3. 其中关联文件夹"Cost Model"取 __父级文件夹__ 的case:caseId搜索所有case:caseId与 __父级文件夹__ case:caseId一致的且文件的文档类型为"CostModelNewCase"的文件（6）

- 添加虚拟文件夹，可同时设置可见用户及可见分组（1）
  ![virtualFolderAdd](/virtualFolderAdd.png)
- 创建目录及文件，点击 `创建文件夹按钮` 创建文件夹，点击 `创建文件按钮` 创建文件（2）
- 配置虚拟文件夹搜索条件。（3）
    ```
    Label: 唯一标识
    Document Type：搜索条件
    Parent Key：父级关联数据
    Meta：额外搜索条件
    ```
    Document Type 与Meta配置时，需要参考文件树结构。
- 配置完成后点击 `保存按钮` 保存数据。（4）
- 当文件树配置完毕后，可以在右侧进行预览（5）

 