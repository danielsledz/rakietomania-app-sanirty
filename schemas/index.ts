import {agency} from './agency'
import appVersion from './appVersion'
import {booster} from './booster'
import customImage from './customImage'
import {engine} from './engine'
import {boosterDetail, landingpad, mission} from './mission'
import {payload} from './payload'
import {CarryingCapacity, rocket} from './rocket'
import {stage} from './stage'
import starship, {checklistItem} from './starship'
import starshipPrototype from './starshipPrototype'

export const schemaTypes = [
  mission,
  rocket,
  payload,
  booster,
  engine,
  agency,
  stage,
  landingpad,
  CarryingCapacity,
  // gallery,
  // videos,
  starship,
  starshipPrototype,
  checklistItem,
  boosterDetail,
  customImage,
  appVersion,
]
