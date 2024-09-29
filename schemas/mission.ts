import {defineField, defineType} from 'sanity'

export const landingpad = {
  name: 'landing',
  title: 'landing',
  type: 'object',
  fields: [
    {
      name: 'boosterName',
      title: 'Booster Name',
      type: 'string',
    },
    {
      name: 'landingPad',
      title: 'Landing Pad',
      type: 'string',
    },
  ],
}

export const mission = defineType({
  name: 'mission',
  title: 'Mission',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the mission visible to users',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'apiMissionID',
      title: 'API mission ID',
      type: 'string',
      description: 'The ID of the mission in API',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'The date of launch the mission',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Success', value: 'Success'},
          {title: 'Partial Success', value: 'PartialSuccess'},
          {title: 'Failed', value: 'Failed'},
          {title: 'Partial Failed', value: 'PartialFailed'},
          {title: 'Confirmed', value: 'Confirmed'},
          {title: 'To Be Confirmed', value: 'ToBeConfirmed'},
          {
            title: 'To Be Determined',
            value: 'ToBeDetermined',
          },
          {title: 'Hold', value: 'Hold'},
          {title: 'Canceled', value: 'Canceled'},
          {title: 'Postponed', value: 'Postponed'},
          {title: 'In Flight', value: 'InFlight'},
        ],
      },
      description: 'The status of the rocket launch',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'patch',
      title: 'Patch',
      type: 'image',
      description: 'The patch of the mission',
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Caption for the image',
        },
      ],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The description of the mission',
    }),

    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          name: 'specification',
          title: 'Specification',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'windowStart',
      title: 'Window Start',
      type: 'datetime',
    }),

    defineField({
      name: 'windowEnd',
      title: 'Window End',
      type: 'datetime',
    }),

    defineField({
      name: 'probability',
      title: 'Probability',
      type: 'number',
      validation: (rule) => rule.min(1).max(100),
    }),

    defineField({
      name: 'livestream',
      title: 'Livestream',
      type: 'string',
    }),

    defineField({
      name: 'launchPad',
      title: 'Launch Pad',
      type: 'string',
    }),

    defineField({
      name: 'changeLogs',
      title: 'Change Logs',
      type: 'array',
      of: [
        {
          name: 'changeLog',
          title: 'Change Log',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'rocket',
      title: 'Rocket',
      type: 'reference',
      to: [{type: 'rocket'}],
      description: 'Related rocket',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'rocketType',
      title: 'Rocket Type (Crewed, Uncrewed, Cargo, Constellation)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Uncrewed',
      options: {
        list: [
          {title: 'Crewed', value: 'Crewed'},
          {title: 'Uncrewed', value: 'Uncrewed'},
          {title: 'Cargo', value: 'Cargo'},
          {title: 'Constellation (Starlink etc.)', value: 'Constellation'},
        ],
      },
    }),

    defineField({
      name: 'payload',
      title: 'Payload',
      type: 'array',
      description: 'The payloads associated with the mission',
      of: [
        {
          type: 'reference',
          to: [{type: 'payload'}],
        },
      ],
    }),
    defineField({
      name: 'boosters',
      title: 'Boosters (only Falcon 9 or Heavy)',
      type: 'array',
      of: [
        {
          type: 'boosterDetail',
        },
      ],
    }),

    defineField({
      name: 'environment',
      title: 'Environment',
      type: 'string',
      initialValue: 'development',
      options: {
        list: [
          {title: 'Production', value: 'production'},
          {title: 'Development', value: 'development'},
        ],
        layout: 'radio',
      },
      description: 'Select the environment for the mission',
    }),

    defineField({
      name: 'dateUpdateMethod',
      title: 'Date Update Method',
      type: 'string',
      initialValue: 'auto',
      options: {
        list: [
          {title: 'Automatically by bot', value: 'auto'},
          {title: 'Manually by user', value: 'manual'},
        ],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'archived',
      title: 'Archived',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})

export const boosterDetail = defineType({
  name: 'boosterDetail',
  title: 'Booster Detail',
  type: 'object',
  fields: [
    {
      name: 'boosterReference',
      title: 'Booster Reference',
      type: 'reference',
      to: [{type: 'booster'}],
    },
    {
      name: 'landingPad',
      title: 'Landing Pad',
      type: 'string',
    },
    {
      name: 'landingStatus',
      title: 'Landing Status',
      type: 'string',
      options: {
        list: [
          {title: 'Success', value: 'Success'},
          {title: 'Failure', value: 'Failure'},
          {title: 'No Attempt', value: 'NoAttempt'},
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'boosterReference.name', // assuming the booster document has a "name" field
      subtitle: 'landingPad',
    },
  },
})
