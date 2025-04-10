import {dataset, projectId} from '../sanity/env'

export const generalImageURL = (image: any) => {
  let imgId: string = image?.asset?._ref?.replace('image-', '')
  if (imgId) {
    imgId = imgId?.includes('-png')
      ? imgId?.replace('-png', '.png')
      : imgId?.includes('-jpg')
        ? imgId?.replace('-jpg', '.jpg')
        : imgId?.includes('-jpeg')
          ? imgId?.replace('-jpeg', '.jpeg')
          : imgId
  }

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${imgId}`
}
