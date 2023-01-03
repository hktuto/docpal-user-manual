export default {
  // '/api/': getApiSidebar(),
  '/v1.0.0/': getV1_0_0(),
  '/v1.1.0/': getV1_1_0()
}

function getV1_0_0() {
  return [
    { 
      items: [ 
        { text: 'Update Log', link: '/v1.0.0/update-log ', items: [] },
        { text: 'Introduce', link: '/v1.0.0/index', items: [] },
      ] 
    },
    {
      text: 'Document Management',
      collapsible: true,
      items: [
        { text: 'Common File Tree Management', link: '/v1.0.0/manage-doc-tree' },
        { text: 'Files Uploaded by Non-system Personnel', link: '/v1.0.0/manage-non-system-upload' },
        { text: 'Workflow Upload Document', link: '/v1.0.0/manage-workflow-upload' },
        { text: 'Bulk Upload Documents', link: '/v1.0.0/manage-batch-upload' },
        { text: 'A-Bulk Upload Config', link: '/v1.0.0/admin-batch-upload-config' },
        { text: 'A-Workflow Table Style Config', link: '/v1.0.0/admin-workflow-form-config' }
      ]
    },
    { 
      items: [ 
        { text: 'Document Review', link: '/v1.0.0/file-audit' } 
      ] 
    },
    {
      text: 'Document Query',
      collapsible: true,
      items: [
        { text: 'Document Query', link: '/v1.0.0/file-search' },
        { text: 'A-Smart Search Config', link: '/v1.0.0/admin-smart-folder-config' },
        { text: 'A-Virtual Folder Config', link: '/v1.0.0/admin-virtual-folder-config' },
      ],
    },
    {
      text: 'Other',
      collapsible: true,
      items: [
        { text: 'Shared File Management', link: '/v1.0.0/o-share-file' },
        { text: 'Collection Management', link: '/v1.0.0/o-collection' },
        { text: 'Trash Management', link: '/v1.0.0/o-trash' },
        { text: 'A-File Permission Management', link: '/v1.0.0/o-admin-file-permission' },
        { text: 'A-User and Group Management', link: '/v1.0.0/o-admin-user' },
        { text: 'A-Document Type Management', link: '/v1.0.0/o-admin-document-type' },
        { text: 'A-Meta Management', link: '/v1.0.0/o-admin-meta' },
        { text: 'A-Glossary Management', link: '/v1.0.0/o-admin-vocabulary' },
        { text: 'A-Template Management', link: '/v1.0.0/o-admin-template' },
        { text: 'A-Workflow Management', link: '/v1.0.0/o-admin-workflow-manage' },
        { text: 'A-Form Management', link: '/v1.0.0/o-admin-table-manage' },
        { text: 'A-Log Management', link: '/v1.0.0/o-admin-log-manage' },
      ],
    }
  ]
}
function getV1_1_0() {
  return [
    { 
      items: [ 
        { text: 'Update Log', link: '/v1.1.0/update-log ', items: [] },
        { text: 'Introduce', link: '/v1.1.0/index', items: [] },
      ] 
    },
    {
      text: 'Document Management',
      collapsible: true,
      items: [
        { text: 'Common File Tree Management', link: '/v1.1.0/manage-doc-tree' },
        { text: 'Files Uploaded by Non-system Personnel', link: '/v1.1.0/manage-non-system-upload' },
        { text: 'Workflow Upload Document', link: '/v1.1.0/manage-workflow-upload' },
        { text: 'Bulk Upload Documents', link: '/v1.1.0/manage-batch-upload' },
        { text: 'A-Bulk Upload Config', link: '/v1.1.0/admin-batch-upload-config' },
        { text: 'A-Workflow Table Style Config', link: '/v1.1.0/admin-workflow-form-config' }
      ]
    },
    { 
      items: [ 
        { text: 'Document Review', link: '/v1.1.0/file-audit' } 
      ] 
    },
    {
      text: 'Document Query',
      collapsible: true,
      items: [
        { text: 'Document Query', link: '/v1.1.0/file-search' },
        { text: 'A-Smart Search Config', link: '/v1.1.0/admin-smart-folder-config' },
        { text: 'A-Virtual Folder Config', link: '/v1.1.0/admin-virtual-folder-config' },
      ],
    },
    {
      text: 'Other',
    collapsible: true,
      items: [
        { text: 'Shared File Management', link: '/v1.1.0/o-share-file' },
        { text: 'Collection Management', link: '/v1.1.0/o-collection' },
        { text: 'Trash Management', link: '/v1.1.0/o-trash' },
        { text: 'A-File Permission Management', link: '/v1.1.0/o-admin-file-permission' },
        { text: 'A-User and Group Management', link: '/v1.1.0/o-admin-user' },
        { text: 'A-Document Type Management', link: '/v1.1.0/o-admin-document-type' },
        { text: 'A-Meta Management', link: '/v1.1.0/o-admin-meta' },
        { text: 'A-Glossary Management', link: '/v1.1.0/o-admin-vocabulary' },
        { text: 'A-Template Management', link: '/v1.1.0/o-admin-template' },
        { text: 'A-Workflow Management', link: '/v1.1.0/o-admin-workflow-manage' },
        { text: 'A-Form Management', link: '/v1.1.0/o-admin-table-manage' },
        { text: 'A-Log Management', link: '/v1.1.0/o-admin-log-manage' },
      ],
    }
  ]
}
