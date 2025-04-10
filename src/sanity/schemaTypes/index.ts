import {type SchemaTypeDefinition} from 'sanity'

import {homeType} from './homeType'
import {categoryType} from './categoryType'
import {blogType} from './blogType'
import {userType} from './userType'
import {blockContentType} from './blockContentType'
import {galleryItemType} from './galleryItem'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContentType, galleryItemType, homeType, categoryType, blogType, userType]
}
