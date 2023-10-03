import {agency} from './agency'
import {booster} from './booster'
import {engine} from './engine'
import {landingpad, mission} from './mission'
import {payload} from './payload'
import {gallery, prototype, videos} from './prototype'
import {CarryingCapacity, rocket} from './rocket'
import {stage} from './stage'

export const schemaTypes = [
  mission,
  rocket,
  payload,
  booster,
  engine,
  agency,
  stage,
  prototype,
  landingpad,
  CarryingCapacity,
  gallery,
  videos,
]
