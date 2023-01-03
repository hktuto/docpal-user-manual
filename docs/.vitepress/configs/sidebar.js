export default {
  // '/api/': getApiSidebar(),
  '/v1.0.0/': getV1_0_0(),
  '/v1.1.0/': getV1_1_0(),
  '/zh/v1.0.0/': getV1_0_0(),
  '/zh/v1.1.0/': getV1_0_0(),
}

function getV1_0_0() {
  return [
    { 
      items: [ 
        { text: '更新日志', link: '/v1.0.0/update-log ', items: [] },
        { text: '介绍', link: '/v1.0.0/index', items: [] },
      ] 
    },
    {
      text: '文档管理',
      collapsible: true,
      items: [
        { text: '普通文件树管理', link: '/v1.0.0/manage-doc-tree' },
        { text: '非系统人员上传文档', link: '/v1.0.0/manage-non-system-upload' },
        { text: '工作流程上传文档', link: '/v1.0.0/manage-workflow-upload' },
        { text: '批量上传文档', link: '/v1.0.0/manage-batch-upload' },
        { text: 'A-批量上传文档配置', link: '/v1.0.0/admin-batch-upload-config' },
        { text: 'A-工作流表格样式配置', link: '/v1.0.0/admin-workflow-form-config' }
      ]
    },
    { 
      items: [ 
        { text: '文档审核', link: '/v1.0.0/file-audit' } 
      ] 
    },
    {
      text: '文档查询',
      collapsible: true,
      items: [
        { text: '文档查询', link: '/v1.0.0/file-search' },
        { text: 'A-智能搜索配置', link: '/v1.0.0/admin-smart-folder-config' },
        { text: 'A-虚拟文件夹配置', link: '/v1.0.0/admin-virtual-folder-config' },
      ],
    },
    {
      text: '其他',
      collapsible: true,
      items: [
        { text: '分享文件管理', link: '/v1.0.0/o-share-file' },
        { text: '收藏夹管理', link: '/v1.0.0/o-collection' },
        { text: '垃圾桶管理', link: '/v1.0.0/o-trash' },
        { text: 'A-文件权限管理', link: '/v1.0.0/o-admin-file-permission' },
        { text: 'A-用户及分组管理', link: '/v1.0.0/o-admin-user' },
        { text: 'A-文档类型管理', link: '/v1.0.0/o-admin-document-type' },
        { text: 'A-基础属性管理', link: '/v1.0.0/o-admin-meta' },
        { text: 'A-词汇表管理', link: '/v1.0.0/o-admin-vocabulary' },
        { text: 'A-模板管理', link: '/v1.0.0/o-admin-template' },
        { text: 'A-工作流程管理', link: '/v1.0.0/o-admin-workflow-manage' },
        { text: 'A-表格管理', link: '/v1.0.0/o-admin-table-manage' },
        { text: 'A-日志管理', link: '/v1.0.0/o-admin-log-manage' },
      ],
    }
  ]
}
function getV1_1_0() {
  return [
    { 
      items: [ 
        { text: '更新日志', link: '/v1.1.0/update-log ', items: [] },
        { text: '介绍', link: '/v1.1.0/index', items: [] },
      ] 
    },
    {
      text: '文档管理',
      collapsible: true,
      items: [
        { text: '普通文件树管理', link: '/v1.1.0/manage-doc-tree' },
        { text: '非系统人员上传文档', link: '/v1.1.0/manage-non-system-upload' },
        { text: '工作流程上传文档', link: '/v1.1.0/manage-workflow-upload' },
        { text: '批量上传文档', link: '/v1.1.0/manage-batch-upload' },
        { text: 'A-批量上传文档配置', link: '/v1.1.0/admin-batch-upload-config' },
        { text: 'A-工作流表格样式配置', link: '/v1.1.0/admin-workflow-form-config' }
      ]
    },
    { 
      items: [ 
        { text: '文档审核', link: '/v1.1.0/file-audit' } 
      ] 
    },
    {
      text: '文档查询',
      collapsible: true,
      items: [
        { text: '文档查询', link: '/v1.1.0/file-search' },
        { text: 'A-智能搜索配置', link: '/v1.1.0/admin-smart-folder-config' },
        { text: 'A-虚拟文件夹配置', link: '/v1.1.0/admin-virtual-folder-config' },
      ],
    },
    {
      text: '其他',
    collapsible: true,
      items: [
        { text: '分享文件管理', link: '/v1.1.0/o-share-file' },
        { text: '收藏夹管理', link: '/v1.1.0/o-collection' },
        { text: '垃圾桶管理', link: '/v1.1.0/o-trash' },
        { text: 'A-文件权限管理', link: '/v1.1.0/o-admin-file-permission' },
        { text: 'A-用户及分组管理', link: '/v1.1.0/o-admin-user' },
        { text: 'A-文档类型管理', link: '/v1.1.0/o-admin-document-type' },
        { text: 'A-基础属性管理', link: '/v1.1.0/o-admin-meta' },
        { text: 'A-词汇表管理', link: '/v1.1.0/o-admin-vocabulary' },
        { text: 'A-模板管理', link: '/v1.1.0/o-admin-template' },
        { text: 'A-工作流程管理', link: '/v1.1.0/o-admin-workflow-manage' },
        { text: 'A-表格管理', link: '/v1.1.0/o-admin-table-manage' },
        { text: 'A-日志管理', link: '/v1.1.0/o-admin-log-manage' },
      ],
    }
  ]
}
