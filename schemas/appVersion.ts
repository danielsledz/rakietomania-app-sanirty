export default {
  name: 'appVersion',
  type: 'document',
  title: 'App Version',
  fields: [
    {
      name: 'version',
      type: 'string',
      title: 'Version',
    },
    {
      name: 'mandatoryUpdate',
      type: 'boolean',
      title: 'Mandatory Update',
    },
    {
      name: 'showWarning',
      type: 'boolean',
      title: 'Show Warning',
    },
  ],
}
