import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // "/zh/v1.0.0": 'structure',
  "/zh/v1.1.6": getV2_0_0(),
  "/zh/v1.0.0": getV1_0_0(),
  "/zh/v1.1.0": getV1_1_0(),
});
function getV2_0_0() {
  return [
    { text: '更新日志', link: '/zh/v1.1.6/update-log' },
    // { text: 'DocPal', link: '/zh/v1.1.6'},
    { text: '概述', link: '/zh/v1.1.6/outline' },
    {
      text: '文档管理',
      collapsible: true,
      children: [
        { text: '普通文件树管理', link: '/zh/v1.1.6/manage-doc-tree' },
        { text: '非系统人员上传文档', link: '/zh/v1.1.6/manage-non-system-upload' },
        { text: '工作流程上传文档', link: '/zh/v1.1.6/manage-workflow-upload' },
        { text: '批量上传文档', link: '/zh/v1.1.6/manage-batch-upload' },
        { text: '文件树模板上传文档', link: '/zh/v1.1.6/manage-folder-cabinet' }
      ]
    },
    { text: '文档审核', link: '/zh/v1.1.6/file-audit' }, 
    { text: '文档查询', link: '/zh/v1.1.6/file-search' },
    {
      text: '其他',
      collapsible: true,
      children: [
        { text: '分享文件管理', link: '/zh/v1.1.6/o-share-file' },
        { text: '收藏夹管理', link: '/zh/v1.1.6/o-collection' },
        { text: '垃圾桶管理', link: '/zh/v1.1.6/o-trash' }
      ],
    },
    {
      text: '管理员',
      collapsible: true,
      children: [
        { text: '文件权限管理', link: '/zh/v1.1.6/admin-file-permission' },
        { text: '水印', link: '/zh/v1.1.6/admin-water-mark' },
        { text: '审计', link: '/zh/v1.1.6/admin-audit' },
        { text: '文件树模板配置', link: '/zh/v1.1.6/admin-folder-cabinet' },
        { text: '用户及分组管理', link: '/zh/v1.1.6/admin-user' },
        { text: '文档类型管理', link: '/zh/v1.1.6/admin-document-type' },
        { text: '基础属性管理', link: '/zh/v1.1.6/admin-meta' },
        { text: '词汇表管理', link: '/zh/v1.1.6/admin-vocabulary' },
        { text: '工作流表格样式配置', link: '/zh/v1.1.6/admin-workflow-form-config' },
        { text: '工作流程管理', link: '/zh/v1.1.6/admin-workflow-manage' },
        { text: '智能搜索配置', link: '/zh/v1.1.6/admin-smart-folder-config' },
        { text: '批量上传文档配置', link: '/zh/v1.1.6/admin-batch-upload-config' },
        // { text: '虚拟文件夹配置', link: '/zh/v1.1.6/admin-virtual-folder-config' },
        { text: '日志管理', link: '/zh/v1.1.6/admin-log-manage' },
        { text: '模板管理', link: '/zh/v1.1.6/admin-template' },
        { text: '邮箱设置', link: '/zh/v1.1.6/admin-mail-config' },
        // { text: '表格管理', link: '/zh/v1.1.6/admin-table-manage' },
      ],
    }
  ]
}
function getV1_0_0() {
  return [
    { text: '更新日志', link: '/zh/v1.0.0/update-log' },
    // { text: 'DocPal', link: '/zh/v1.0.0' },
    {
      text: '文档管理',
      collapsible: true,
      children: [
        { text: '普通文件树管理', link: '/zh/v1.0.0/manage-doc-tree' },
        { text: '非系统人员上传文档', link: '/zh/v1.0.0/manage-non-system-upload' },
        { text: '工作流程上传文档', link: '/zh/v1.0.0/manage-workflow-upload' },
        { text: '批量上传文档', link: '/zh/v1.0.0/manage-batch-upload' }
      ]
    },
    { text: '文档审核', link: '/zh/v1.0.0/file-audit' }, 
    { text: '文档查询', link: '/zh/v1.0.0/file-search' },
    {
      text: '其他',
      collapsible: true,
      children: [
        { text: '分享文件管理', link: '/zh/v1.0.0/o-share-file' },
        { text: '收藏夹管理', link: '/zh/v1.0.0/o-collection' },
        { text: '垃圾桶管理', link: '/zh/v1.0.0/o-trash' },
      ],
    },
    {
      text: '管理员',
      collapsible: true,
      children: [
        { text: '批量上传文档配置', link: '/zh/v1.0.0/admin-batch-upload-config' },
        { text: '工作流表格样式配置', link: '/zh/v1.0.0/admin-workflow-form-config' },
        { text: '智能搜索配置', link: '/zh/v1.0.0/admin-smart-folder-config' },
        { text: '虚拟文件夹配置', link: '/zh/v1.0.0/admin-virtual-folder-config' },
        { text: '文件权限管理', link: '/zh/v1.0.0/admin-file-permission' },
        { text: '用户及分组管理', link: '/zh/v1.0.0/admin-user' },
        { text: '文档类型管理', link: '/zh/v1.0.0/admin-document-type' },
        { text: '基础属性管理', link: '/zh/v1.0.0/admin-meta' },
        { text: '词汇表管理', link: '/zh/v1.0.0/admin-vocabulary' },
        { text: '模板管理', link: '/zh/v1.0.0/admin-template' },
        { text: '工作流程管理', link: '/zh/v1.0.0/admin-workflow-manage' },
        { text: '表格管理', link: '/zh/v1.0.0/admin-table-manage' },
        { text: '日志管理', link: '/zh/v1.0.0/admin-log-manage' },
      ],
    }
  ]
}
function getV1_1_0() {
  return [
    { text: '更新日志', link: '/zh/v1.1.0/update-log' },
    // { text: 'DocPal', link: '/zh/v1.1.0'},
    {
      text: '文档管理',
      collapsible: true,
      children: [
        { text: '普通文件树管理', link: '/zh/v1.1.0/manage-doc-tree' },
        { text: '非系统人员上传文档', link: '/zh/v1.1.0/manage-non-system-upload' },
        { text: '工作流程上传文档', link: '/zh/v1.1.0/manage-workflow-upload' },
        { text: '批量上传文档', link: '/zh/v1.1.0/manage-batch-upload' },
        
      ]
    },
    { text: '文档审核', link: '/zh/v1.1.0/file-audit' }, 
    { text: '文档查询', link: '/zh/v1.1.0/file-search' },
    {
      text: '其他',
      collapsible: true,
      children: [
        { text: '分享文件管理', link: '/zh/v1.1.0/o-share-file' },
        { text: '收藏夹管理', link: '/zh/v1.1.0/o-collection' },
        { text: '垃圾桶管理', link: '/zh/v1.1.0/o-trash' }
      ],
    },
    {
      text: '管理员',
      collapsible: true,
      children: [
        { text: '批量上传文档配置', link: '/zh/v1.1.0/admin-batch-upload-config' },
        { text: '工作流表格样式配置', link: '/zh/v1.1.0/admin-workflow-form-config' },
        { text: '智能搜索配置', link: '/zh/v1.1.0/admin-smart-folder-config' },
        { text: '虚拟文件夹配置', link: '/zh/v1.1.0/admin-virtual-folder-config' },
        { text: '文件权限管理', link: '/zh/v1.1.0/admin-file-permission' },
        { text: '用户及分组管理', link: '/zh/v1.1.0/admin-user' },
        { text: '文档类型管理', link: '/zh/v1.1.0/admin-document-type' },
        { text: '基础属性管理', link: '/zh/v1.1.0/admin-meta' },
        { text: '词汇表管理', link: '/zh/v1.1.0/admin-vocabulary' },
        { text: '模板管理', link: '/zh/v1.1.0/admin-template' },
        { text: '工作流程管理', link: '/zh/v1.1.0/admin-workflow-manage' },
        { text: '表格管理', link: '/zh/v1.1.0/admin-table-manage' },
        { text: '日志管理', link: '/zh/v1.1.0/admin-log-manage' },
      ],
    }
  ]
}



