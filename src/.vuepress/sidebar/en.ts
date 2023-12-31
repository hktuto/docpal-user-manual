import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  // "/v1.0.0": 'structure',
  "/doc/": "structure",
  // "/v1.0.0": getV1_0_0(),
  // "/v1.1.0": getV1_1_0(),
});
function getV2_0_0() {
  return [
    { text: 'Update Log', link: '/v1.1.6/update-log' },
    { text: 'Outline', link: '/v1.1.6/outline' },
    {
      text: 'Document Management',
      collapsible: true,
      children: [
        { text: 'Common File Tree Management', link: '/v1.1.6/manage-doc-tree' },
        { text: 'Files Uploaded by Non-system Personnel', link: '/v1.1.6/manage-non-system-upload' },
        { text: 'Workflow Upload Document', link: '/v1.1.6/manage-workflow-upload' },
        { text: 'Bulk Upload Documents', link: '/v1.1.6/manage-batch-upload' },
        { text: 'Folder Cabinet Upload Documents', link: '/v1.1.6/manage-folder-cabinet' }
      ]
    },
    { text: 'Document Review', link: '/v1.1.6/file-audit' }, 
    { text: 'Document Query', link: '/v1.1.6/file-search' },
    { text: 'Document Hold Policy And Retention Policy (1.2.1)', link: '/v1.1.6/file-hold' },
    {
      text: 'Other',
      collapsible: true,
      children: [
        { text: 'Shared File Management', link: '/v1.1.6/o-share-file' },
        { text: 'Collection Management', link: '/v1.1.6/o-collection' },
        { text: 'Trash Management', link: '/v1.1.6/o-trash' },
      ],
    },
    {
      text: 'Admin',
      collapsible: true,
      children: [
        
        { text: 'File Permission Management', link: '/v1.1.6/admin-file-permission' },
        { text: 'Watermark', link: '/v1.1.6/admin-water-mark' },
        { text: 'Audit', link: '/v1.1.6/admin-audit' },
        { text: 'Document Hold Policy Manage And Retention Policy Manage (1.2.1)', link: '/v1.1.6/admin-hold-policy' },
        { text: 'Folder Cabinet Setting', link: '/v1.1.6/admin-folder-cabinet' },
        { text: 'User and Group Management', link: '/v1.1.6/admin-user' },
        { text: 'Document Type Management', link: '/v1.1.6/admin-document-type' },
        { text: 'Meta Management', link: '/v1.1.6/admin-meta' },
        { text: 'Glossary Management', link: '/v1.1.6/admin-vocabulary' },
        { text: 'Workflow Table Style Config', link: '/v1.1.6/admin-workflow-form-config' },
        { text: 'Workflow Management', link: '/v1.1.6/admin-workflow-manage' },
        { text: 'Smart Search Config', link: '/v1.1.6/admin-smart-folder-config' },
        { text: 'Bulk Upload Config', link: '/v1.1.6/admin-batch-upload-config' },
        // { text: 'Virtual Folder Config', link: '/v1.1.6/admin-virtual-folder-config' },
        { text: 'Log Management', link: '/v1.1.6/admin-log-manage' },
        { text: 'Template Management', link: '/v1.1.6/admin-template' },
        { text: 'Mail Config', link: '/v1.1.6/admin-mail-config' },
        // { text: 'Form Management', link: '/v1.1.6/admin-table-manage' },
      ],
    }
  ]
}
function getV1_0_0() {
  return [
    { text: 'Update Log', link: '/v1.0.0/update-log' },
    // { text: 'DocPal', link: '/v1.0.0' },
    {
      text: 'Document Management',
      collapsible: true,
      children: [
        { text: 'Common File Tree Management', link: '/v1.0.0/manage-doc-tree' },
        { text: 'Files Uploaded by Non-system Personnel', link: '/v1.0.0/manage-non-system-upload' },
        { text: 'Workflow Upload Document', link: '/v1.0.0/manage-workflow-upload' },
        { text: 'Bulk Upload Documents', link: '/v1.0.0/manage-batch-upload' },
      ]
    },
    { text: 'Document Review', link: '/v1.0.0/file-audit' },
    { text: 'Document Query', link: '/v1.0.0/file-search' },
    {
      text: 'Other',
      collapsible: true,
      children: [
        { text: 'Shared File Management', link: '/v1.0.0/o-share-file' },
        { text: 'Collection Management', link: '/v1.0.0/o-collection' },
        { text: 'Trash Management', link: '/v1.0.0/o-trash' },
      ],
    },
    {
      text: 'Admin',
      collapsible: true,
      children: [
        { text: 'Bulk Upload Config', link: '/v1.0.0/admin-batch-upload-config' },
        { text: 'Workflow Table Style Config', link: '/v1.0.0/admin-workflow-form-config' },
        { text: 'Smart Search Config', link: '/v1.0.0/admin-smart-folder-config' },
        { text: 'Virtual Folder Config', link: '/v1.0.0/admin-virtual-folder-config' },
        { text: 'File Permission Management', link: '/v1.0.0/admin-file-permission' },
        { text: 'User and Group Management', link: '/v1.0.0/admin-user' },
        { text: 'Document Type Management', link: '/v1.0.0/admin-document-type' },
        { text: 'Meta Management', link: '/v1.0.0/admin-meta' },
        { text: 'Glossary Management', link: '/v1.0.0/admin-vocabulary' },
        { text: 'Template Management', link: '/v1.0.0/admin-template' },
        { text: 'Workflow Management', link: '/v1.0.0/admin-workflow-manage' },
        { text: 'Form Management', link: '/v1.0.0/admin-table-manage' },
        { text: 'Log Management', link: '/v1.0.0/admin-log-manage' },
      ],
    }
  ]
}
function getV1_1_0() {
  return [
    { text: 'Update Log', link: '/v1.1.0/update-log' },
    // { text: 'DocPal', link: '/v1.1.0' },
    {
      text: 'Document Management',
      collapsible: true,
      children: [
        { text: 'Common File Tree Management', link: '/v1.1.0/manage-doc-tree' },
        { text: 'Files Uploaded by Non-system Personnel', link: '/v1.1.0/manage-non-system-upload' },
        { text: 'Workflow Upload Document', link: '/v1.1.0/manage-workflow-upload' },
        { text: 'Bulk Upload Documents', link: '/v1.1.0/manage-batch-upload' }
      ]
    },
    { text: 'Document Review', link: '/v1.1.0/file-audit' }, 
    { text: 'Document Query', link: '/v1.1.0/file-search' },
    {
      text: 'Other',
      collapsible: true,
      children: [
        { text: 'Shared File Management', link: '/v1.1.0/o-share-file' },
        { text: 'Collection Management', link: '/v1.1.0/o-collection' },
        { text: 'Trash Management', link: '/v1.1.0/o-trash' },
      ],
    },
    {
      text: 'Admin',
      collapsible: true,
      children: [
        { text: 'Bulk Upload Config', link: '/v1.1.0/admin-batch-upload-config' },
        { text: 'Workflow Table Style Config', link: '/v1.1.0/admin-workflow-form-config' },
        { text: 'Smart Search Config', link: '/v1.1.0/admin-smart-folder-config' },
        { text: 'Virtual Folder Config', link: '/v1.1.0/admin-virtual-folder-config' },
        { text: 'File Permission Management', link: '/v1.1.0/admin-file-permission' },
        { text: 'User and Group Management', link: '/v1.1.0/admin-user' },
        { text: 'Document Type Management', link: '/v1.1.0/admin-document-type' },
        { text: 'Meta Management', link: '/v1.1.0/admin-meta' },
        { text: 'Glossary Management', link: '/v1.1.0/admin-vocabulary' },
        { text: 'Template Management', link: '/v1.1.0/admin-template' },
        { text: 'Workflow Management', link: '/v1.1.0/admin-workflow-manage' },
        { text: 'Form Management', link: '/v1.1.0/admin-table-manage' },
        { text: 'Log Management', link: '/v1.1.0/admin-log-manage' },
      ],
    }
  ]
}
