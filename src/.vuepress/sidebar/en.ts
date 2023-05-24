import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  // "/v1.0.0": 'structure',
  "/v1.0.0": getV1_0_0(),
  "/v1.1.0": getV1_1_0(),
  "/v1.1.6": getV2_0_0()
});

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
        { text: 'Bulk Upload Documents', link: '/v1.1.6/manage-batch-upload' }
      ]
    },
    { text: 'Document Review', link: '/v1.1.6/file-audit' }, 
    { text: 'Document Query', link: '/v1.1.6/file-search' },
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
        { text: 'Bulk Upload Config', link: '/v1.1.6/admin-batch-upload-config' },
        { text: 'Workflow Table Style Config', link: '/v1.1.6/admin-workflow-form-config' },
        { text: 'Smart Search Config', link: '/v1.1.6/admin-smart-folder-config' },
        { text: 'Virtual Folder Config', link: '/v1.1.6/admin-virtual-folder-config' },
        { text: 'File Permission Management', link: '/v1.1.6/admin-file-permission' },
        { text: 'User and Group Management', link: '/v1.1.6/admin-user' },
        { text: 'Document Type Management', link: '/v1.1.6/admin-document-type' },
        { text: 'Meta Management', link: '/v1.1.6/admin-meta' },
        { text: 'Glossary Management', link: '/v1.1.6/admin-vocabulary' },
        { text: 'Template Management', link: '/v1.1.6/admin-template' },
        { text: 'Workflow Management', link: '/v1.1.6/admin-workflow-manage' },
        { text: 'Form Management', link: '/v1.1.6/admin-table-manage' },
        { text: 'Log Management', link: '/v1.1.6/admin-log-manage' },
      ],
    }
  ]
}