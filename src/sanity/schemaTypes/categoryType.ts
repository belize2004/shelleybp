import {LayoutGrid} from 'lucide-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: LayoutGrid,
  fields: [
    defineField({
      name: 'name',
      type: 'string'
    }),
    defineField({
      name: 'blog',
      type: 'reference',
      to: {type: 'blog'}
    }),
    defineField({
      name: 'photos',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'photo',
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
              initialValue: '1'
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            })
          ]
        })
      ]
    }),
    defineField({
      title: 'Pricing Cards',
      name: 'pricing_cards',
      type: 'array',
      of: [{type: 'blockObject'}]
    })
  ]
})
