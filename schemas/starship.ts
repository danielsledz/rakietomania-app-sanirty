export const checklistItem = {
  name: 'checklistItem',
  title: 'Checklist Item',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'completed',
      title: 'Completed',
      type: 'boolean',
    },
  ],
}

export default {
  name: 'starshipPage',
  title: 'Starship Page',
  type: 'document',
  fieldsets: [
    {name: 'overview', title: 'Starship Overview', options: {collapsible: true, collapsed: false}},
    {
      name: 'upcomingFlight',
      title: 'Upcoming Flight',
      options: {collapsible: true, collapsed: false},
    },
    {name: 'launchSet', title: 'Launch Set', options: {collapsible: true, collapsed: false}},
    {name: 'checklist', title: 'Checklist', options: {collapsible: true, collapsed: false}},

    {name: 'funFacts', title: 'Fun Facts', options: {collapsible: true, collapsed: false}},
  ],
  fields: [
    // Starship Overview Section
    {
      name: 'overviewTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'overview',
    },
    {
      name: 'introText',
      title: 'Introductory Text',
      type: 'text',
      fieldset: 'overview',
    },
    {
      name: 'missionID',
      title: 'MissionID',
      type: 'string',
      fieldset: 'overview',
    },
    {
      name: 'livestreamLink',
      title: 'Livestream Link',
      type: 'string',
      fieldset: 'overview',
    },

    // Upcoming Flight Section
    {
      name: 'flightPlanSubtitle',
      title: 'Plan Subtitle',
      type: 'string',
      fieldset: 'upcomingFlight',
    },
    {
      name: 'flightPlanTitle',
      title: 'Plan Title',
      type: 'string',
      fieldset: 'upcomingFlight',
    },
    {
      name: 'flightDescription',
      title: 'Description',
      type: 'text',
      fieldset: 'upcomingFlight',
    },
    {
      name: 'flightPlan',
      title: 'Flight Plan',
      type: 'array',
      of: [{type: 'string'}],
      fieldset: 'upcomingFlight',
    },

    // Launch Set Section
    {
      name: 'launchSetSubtitle',
      title: 'Subtitle',
      type: 'string',
      fieldset: 'launchSet',
    },
    {
      name: 'launchSetTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'launchSet',
    },
    {
      name: 'prototypes',
      title: 'Prototypes',
      type: 'array',
      of: [{type: 'prototype'}], // Reference the 'prototype' schema type here
      fieldset: 'launchSet',
    },

    // Checlist Section
    {
      name: 'checklistTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'checklist',
    },
    {
      name: 'checklistItems',
      title: 'Checklist Items',
      type: 'array',
      of: [{type: 'checklistItem'}], // Reference the custom checklist item type
      fieldset: 'checklist',
    },
    // Fun Facts Section
    {
      name: 'funFactsTitle',
      title: 'Facts Title',
      type: 'string',
      fieldset: 'funFacts',
    },
    {
      name: 'funFactsList',
      title: 'Fun Facts',
      type: 'array',
      of: [{type: 'string'}],
      fieldset: 'funFacts',
    },
  ],
}
