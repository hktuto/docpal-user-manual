---


description: '用户所有操作均围绕文件树'
category: 文档管理
newFile: encodeURI()
---
# 普通文件树管理
## 1 文件树功能分区与详解
文件树功能分区图

![docTreeFun](/images/docTreeFun.png)
- 选中文件夹后，`顶部操作栏`显示（1）。
- 右键点击或点击 `更多按钮` 显示 `右键操作栏` （2->3）

<table class="md-table br">
  <caption>文件树功能分区表</caption>
  <tr>
    <th></th>
    <th>文件夹</th>
    <th>文件</th>  
	</tr >
	<tr>
    <th rowspan="4" class="center br">顶部操作栏</th>
    <td>新增文件夹（权限控制）</td>
    <td></td>
	</tr>
  <tr>
    <td>上传文件（权限控制）</td>
    <td></td>
	</tr>
  <tr>
    <td>刷新文件夹</td>
    <td></td>
	</tr>
  <tr>
    <td>文件重命名（权限控制）</td>
    <td>文件重命名（权限控制）</td>
	</tr>
  <tr>
    <th rowspan="8" class="center br">右键操作栏</th>
    <td>新增文件夹（权限控制）</td>
    <td></td>
	</tr>
  <tr>
    <td>上传文件（权限控制）</td>
    <td></td>
	</tr>
  <tr>
    <td>复制</td>
    <td>复制</td>
	</tr>
  <tr>
    <td>剪切</td>
    <td>剪切</td>
	</tr>
  <tr>
    <td>粘贴（在文件已复制/剪切后出现）</td>
    <td></td>
	</tr>
  <tr>
    <td>重命名（权限控制）</td>
    <td>重命名（权限控制）</td>
	</tr>
  <tr>
    <td>删除（权限控制）</td>
    <td>删除（权限控制）</td>
	</tr>
  <tr>
    <td>刷新文件</td>
    <td></td>
	</tr>
</table>


### 1.1 新增文件夹
![newFolder](/images/newFolder.png)

输入文件夹名称 及文件夹类型，点击 OK。即可创建新文件夹到选中文件夹
### 1.2 上传文件
![newFile](/images/newFile.png)

1. 点击上传区域选择文件,点击OK进行上传（1 -> 6）。
1. 覆盖后点击 `删除按钮` 进行删除(2)。
1. 点击选择需批量修改文件类型的文件，选择文件类型，点击'apply'，批量修改文件类型（3 -> 4）。
1. 输入meta属性，点击sync，将meta同步到相同文件类型的文件（5）。

通常完成第一步即可上传新文件。

其余操作是给文件添加文件类型及文件属性以便后期快速搜索及审核文件。不添加也无大碍，后期在文件详情区 可以手动继续添加。

### 1.3 文档复制/剪切/粘贴
复制/剪切后可在文件夹类型的文档 点击右键进行粘贴。

剪切后，原文档会移动到所粘贴的文件夹中。
### 1.4 文件夹刷新
刷新文件夹，文件夹的文档将会获取最新数据。
### 1.5 文件重命名
![rename](/images/rename.png)

选择后对应文件夹会展示输入框。输入后按enter键或输入框失去焦点后会提交新文件名。
### 1.6 删除文件
删除文件后会刷新文件树
## 2 文件夹详情功能分区与详解
![folderFun](/images/folderFun.png)

![folderSelectedFun](/images/folderSelectedFun.png)

当有文件选中时，顶部操作栏改变。右侧按钮组变为 `分享按钮` 及 `删除按钮`。

`分享按钮` 点击会生成外部分享链接以分享选中的文件。

`删除按钮` 点击会删除当前选中的文件。

<table class="md-table br">
  <caption>选中文件后界面功能变更表</caption>
  <tr>
    <th>未选中顶部操作栏</th>
    <th>选中后顶部操作栏</th>  
	</tr >
	<tr>
    <td>文档属性修改(权限)</td>
    <td>选中文件的数量</td>
	</tr>
  <tr>
    <td>外部上传链接生成(权限)</td>
    <td>批量分享文件按钮</td>
	</tr>
  <tr>
    <td>当前路径复制</td>
    <td>批量下载</td>
	</tr>
  <tr>
    <td>删除文件夹(权限)</td>
    <td>批量删除文件按钮(权限)</td>
	</tr>
</table>

### 2.1 文档属性修改(权限)
![metaUpdate](/images/metaUpdate.png)

(备注: 文档属性 的展示在管理员端进行配置)

修改文档名称 及文档属性，点击 Submit。即可修改文档名称 及文档属性

### 2.2 外部上传链接生成(权限)
![outsideLink](/images/outsideLink.png)

填写后会生成 外部上传链接并发送到 写入的邮箱。

完整流程:

![nonSystemUploadFile](/images/nonSystemUploadFile.png)

1. 填写后会生成 外部上传链接并发给写入的邮箱。
1. 收到邮箱的外部人员可在邮箱点击 外部上传链接填写密码后进行上传。
1. 外部人员上传后会发邮件给 生成外部链接的内部成员,以便审核。
1. 审核通过的文件将sss被放置在 申请外部上传的文件夹上。
7
(备注: 为安全考虑,系统将会自动过滤携带病毒的文件。如果出现文档异常提示,请谨慎处理。)
与<a href="/zh/v1.0.0/manage-non-system-upload.html">非系统人员上传文档</a>相关
### 2.3 当前路径复制
点击后,会自动复制当前打开文件的地址,用户只需粘贴并分享给同事,即可快速分享当前阅读的文件。

例如:

https:/app2.wclsolution.com/file/browse?path=/SAM/workspaces/new Folder1659316208042
### 2.4 删除文件夹(权限)
点击后会删除当前文件夹。

![deleteFolder](/images/deleteFolder.png)
### 2.5 其他信息查看
<a href="#_4-其他信息查看与管理">详情见4.其他信息查看与管理</a>

### 2.6 批量分享文件
![batchShare](/images/batchShare.png)

在 文件夹中选中文件, 顶部操作栏改变,点击右上侧的分享按钮 会出现 表单.      

填写后会生成 外部分享链接并发送到 填入的邮箱.同时内部人员可在<a href="/zh/v1.0.0/o-share-file.html">分享文件管理</a>中查看并管理正在分享中的所有文件.
### 2.7 批量删除文件
在 文件夹中选中文件, 顶部操作栏改变,点击右上侧的删除按钮 会批量删除选中的文件.   
## 3 文件详情功能分区与详解
![fileFun](/images/fileFun.png)
- 文档属性修改(1)，与文件夹的文档属性修改一致
- 右按钮组（2）
  + 复制链接
  + 分享文件到外部
  + 原格式文档编辑
  + 文件替换
  + 文件下载及转档
  + 删除
- 打印pdf（3）
- 点击tools后，可用画笔工具对pdf进行编辑（4）

### 3.1 文档属性修改(权限)
<a href="#_2-1-文档属性修改-权限">参考2.1</a>
### 3.2 当前路径复制
<a href="#_2-3-当前路径复制">参考2.3</a>
### 3.3 分享文件
<a href="#_2-6-批量分享文件">参考2.6</a>
### 3.4 原格式文档编辑(权限)
将会跳转到 office 编辑页面.编辑后文件版本改变.
### 3.5 文件替换(权限)
![replaceFile](/images/replaceFile.png)

点击 `替换按钮` 后,需要选择替换文件,选择后点击OK即可替换文件.并可设置当前文件用到的语言.
### 3.6 文件下载与转档
![fileDownloadAndConversion](/images/fileDownloadAndConversion.png)
- 文件下载
  * 下载原文件
  * 下载PDF文件
  * 下载带注释PDF文件
- 文件转档

由于文件转档需要一定时间(通常在几分钟内),所以转档后文件会显示在转档列表.当转档完成后,用户可在转档列表下载转档文件.
<a href="#_4-4-转档列表">转档列表见4.4.转档列表</a>

### 3.7 删除文件(权限)
<a href="#_2-7-批量删除文件">参考2.7.批量删除文件</a>

### 3.8 其他信息查看
<a href="#_4-其他信息查看与管理">详见4-其他信息查看与管理</a>
### 3.9 pdf 打印
点击后可打印pdf
### 3.10 pdf画图工具

![pdfTools](/images/pdfTools.png)
点击tool后进入pdf编辑界面
- 可使用画笔工具编辑pdf（1）
- 按钮组（2）
  + `退出编辑按钮`
  + `清空当前页面按钮`
  + `保存按钮`
## 4 其他信息查看与管理

<table class="md-table br">
  <caption>其他信息功能对比表</caption>
  <tr>
    <th>文件夹</th>
    <th>文件</th>  
	</tr >
	<tr>
    <td>信息</td>
    <td>信息</td>
	</tr>
  <tr>
    <td>日志</td>
    <td>日志</td>
	</tr>
  <tr>
    <td>评论</td>
    <td>评论</td>
	</tr>
  <tr>
    <td></td>
    <td>转档列表</td>
	</tr>
  <tr>
    <td></td>
    <td>文字识别</td>
	</tr>
</table>

### 4.1 信息
#### 4.1.1 基础信息
![basicInfo](/images/basicInfo.png)

1. version 项可查看并管理所有版本信息
1. workflow为审核模块

完整过程:

![processOn.worflowFile](/images/processOn.worflowFile.png)

#### 4.1.2 文档属性管理(权限)
![metaEdit](/images/metaEdit.png)

点击 `编辑按钮` 可编辑meta, <a href="#_2-1-文档属性修改-权限">参考2.1</a>

#### 4.1.3 文档标签管理(权限)
![metaManage](/images/metaManage.png)

点击 `添加按钮` , 输入标签名称,点击 `提交` 即可为文档 添加标签.
#### 4.1.4 文档收藏夹管理(权限)
![collectionManage](/images/collectionManage.png)

点击 `添加按钮`, 输入收藏夹名称,点击 `提交` 即可为文档 添加收藏夹.(详情见收藏夹管理)

#### 4.1.5 文档权限管理(权限)
![userGroup](/images/userGroup.png)

文档权限清单, 如果用户可操作文档权限清单,则可点击右上角按钮为文档设置读写权限.并对可操作 用户权限进行移除.

### 4.2 日志
![activities](/images/activities.png)

用户操作文档会保留操作记录.
### 4.3 评论
![comment](/images/comment.png)
- 点击 `评论按钮` 进入评论模块（1）
- 输入评论后点击传送或键入 `enter` 即可提交评论（2）
- 鼠标覆盖评论，点击 `回复按钮`，在评论框输入评论后点击 `传送` 或键入 `enter` 即可提交回复（3）
- 鼠标覆盖评论，点击 `删除按钮`，可删除自己的评论（4）
### 4.4 转档列表
![transferFile](/images/transferFile.png)
用户在<a href="#_3-6-文件下载与转档">3.6-文件下载与转档</a>提交转档请求后，转档列表会同步生成。
- 由于文件转档需要一定时间，所以用户如果看见转档列表未完成，可稍等几分钟再进入转档列表查看转档情况或可点击 `刷新按钮` 刷新转档列表。（1）
- 转档完成可下载转档文件（2）
- 转档未完成，需要等几分钟才可进行下载（3）
当转档文件在后台生成后,转档文件状态会变为 `下载按钮`. 用户可下载转档文件

### 4.5 文字识别
![ocr](/images/ocr.png)
ocr 需要一定时间才能识别，通常在几分钟内。
- 点击 `ocr按钮`进入ocr模块（1）
- ocr文字识别内容（2）
  + ocr文字识别仅支持以下文件格式
  ```
    [
      ".png",
      ".jpg",
      ".jpeg",
      ".jpe",
      ".jif",
      ".jfif",
      ".jfi",
      ".tiff",
      ".tif",
      ".jp2",
      ".j2k",
      ".jpf",
      ".jpm",
      ".jpg2",
      ".j2c",
      ".jpc",
      ".jpx",
      ".mj2",
      ".gif",
      ".webp",
      ".bmp",
      ".dib",
      ".pbm",
      ".pgm",
      ".ppm",
      ".pnm"
    ]
  ```
  + ocr文字识别仅识别以下语言
  ```
    [
      "chi_sim",
      "chi_tra",
      "eng",
      "vie",
      "tha",
      "ind",
      "jpn",
      "kor"
    ]
  ```
- ocr操作按钮（3）
  + `ocr编辑按钮`，点击后跳转编辑ocr
  + `ocr文件下载按钮`

![ocrEdit](/images/ocrEdit.png)
- 右侧进行编辑校对（1）
- 右侧编辑校对时，左侧同步展示文字位置（2）
