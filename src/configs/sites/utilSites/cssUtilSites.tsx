import { Icon } from '@iconify-icon/react'
import { ATagSites } from '@/types'
import {
  accordionslider,
  animista,
  bennettfeely,
  css_easings,
  css_filter,
  css_inspiration,
  css_layoutit,
  css_layoutit2,
  css_tricks,
  cubic_bezier,
  defensivecss,
  fancy_border_radius,
  fancy_border_radius2,
  glassgenerator,
  neumorphism,
  scrollbar,
  shadows_brumm,
  svgbackgrounds,
  svgwave,
  tobiasahlin_loading,
  webgradients,
  websafecolors,
  you_need_to_know_css
} from '@/configs/sites'

export const cssUtilSites: ATagSites = {
  type: '工具-css',
  icon: (
    <Icon
      icon="ion:logo-css3"
      width={26}
      height={26}
    />
  ),
  sites: [
    websafecolors,
    svgbackgrounds,
    svgwave,
    css_inspiration,
    css_tricks,
    you_need_to_know_css,
    neumorphism,
    cubic_bezier,
    css_layoutit,
    css_layoutit2,
    accordionslider,
    bennettfeely,
    scrollbar,
    webgradients,
    glassgenerator,
    css_filter,
    shadows_brumm,
    animista,
    fancy_border_radius,
    fancy_border_radius2,
    tobiasahlin_loading,
    css_easings,
    defensivecss
  ]
}
