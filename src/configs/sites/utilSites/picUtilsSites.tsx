import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'
import { carbon, icones, ray_so, sprite_generator, iloveimg, tinypng } from '@/configs/sites'

export const picUtilsSites: ATagSites = {
  type: '工具-图片',
  icon: (
    <Icon
      icon="ic:baseline-image"
      width={26}
      height={26}
    />
  ),
  sites: [icones, sprite_generator, ray_so, carbon, iloveimg, tinypng]
}
