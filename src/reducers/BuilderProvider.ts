import { Strategy, StrategyDirection } from "../components/Builder/types"
import { PnlChartPoint } from "../hooks/BuilderChart"
import { LyraBoard, LyraMarket, LyraStrike } from "../queries/lyra/useLyra"

export type BuilderProviderState = {
  showStrikesSelect: boolean,
  isPrebuilt: boolean
  markets: LyraMarket[] | null
  isMarketLoading: any | null | undefined
  currentPrice: number
  selectedMarket: LyraMarket | null
  selectedDirectionTypes: StrategyDirection[]
  selectedExpirationDate: LyraBoard | null
  selectedStrategy: any | null | undefined
  strikes: LyraStrike[]
  positionPnl: any | null | undefined // netcreditdebit max profit max loss
  isValid: boolean
  isBuildingNewStrategy: boolean
  generateURL: any | null | undefined  // probably move this to state component management
  handleSelectedMarket: (any: LyraMarket | null) => void
  handleSelectedDirectionTypes: (any: StrategyDirection[]) => void
  handleSelectedExpirationDate: (any: LyraBoard | null) => void
  handleSelectedStrategy: (any: Strategy | null) => void
  handleUpdateQuote: (any: any) => void
  handleToggleSelectedStrike: (strike: LyraStrike, selected: boolean) => void
  handleUpdatePrebuilt: (any: boolean) => void
  handleBuildNewStrategy: (any: boolean) => void
}


export const builderInitialState: BuilderProviderState = {
  showStrikesSelect: false,
  isPrebuilt: true,
  markets: [],
  isMarketLoading: false,
  currentPrice: 0,
  selectedMarket: null,
  selectedDirectionTypes: [],
  selectedExpirationDate: null,
  selectedStrategy: null,
  strikes: [],
  positionPnl: {
    netCreditDebit: 0,
    maxLoss: 0,
    maxPorfit: 0
  },
  isValid: false,
  isBuildingNewStrategy: false,
  generateURL: false,
  handleSelectedMarket: (any) => void any,
  handleSelectedDirectionTypes: (any) => void any,
  handleSelectedExpirationDate: (any) => void any,
  handleSelectedStrategy: (any) => void any,
  handleUpdateQuote: (any) => void any,
  handleToggleSelectedStrike: (any) => void any,
  handleUpdatePrebuilt: (any) => void any,
  handleBuildNewStrategy: (any) => void any
}

export type BuilderAction =
  | {
    type: 'SET_BUILD_NEW_STRATEGY',
    isBuildingNewStrategy: BuilderProviderState['isBuildingNewStrategy']
  }
  | {
    type: 'SET_STRIKES_SELECT_SHOW',
    showStrikesSelect: BuilderProviderState['showStrikesSelect']
  }
  | {
    type: 'SET_PREBUILT',
    isPrebuilt: BuilderProviderState['isPrebuilt']
  }
  | {
    type: 'SET_MARKETS_LOADING',
    isMarketLoading: BuilderProviderState['isMarketLoading'],
  }
  | {
    type: 'SET_MARKETS',
    markets: BuilderProviderState['markets'],
    isMarketLoading: BuilderProviderState['isMarketLoading'],
  }
  | {
    type: 'SET_MARKET',
    selectedMarket: BuilderProviderState['selectedMarket'],
    strikes: BuilderProviderState['strikes'],
    selectedExpirationDate: BuilderProviderState['selectedExpirationDate'],
    selectedStrategy: BuilderProviderState['selectedStrategy'],
  }
  | {
    type: 'SET_CURRENT_PRICE',
    currentPrice: BuilderProviderState['currentPrice']
  }
  | {
    type: 'SET_DIRECTION_TYPES',
    selectedDirectionTypes: BuilderProviderState['selectedDirectionTypes']
  }
  | {
    type: 'SET_EXPIRATION_DATE',
    selectedExpirationDate: BuilderProviderState['selectedExpirationDate'],
  }
  | {
    type: 'SET_STRATEGY',
    selectedStrategy: BuilderProviderState['selectedStrategy'],
    strikes: BuilderProviderState['strikes'],
    isBuildingNewStrategy: BuilderProviderState['isBuildingNewStrategy'],
  }
  | {
    type: 'SET_STRIKES',
    strikes: BuilderProviderState['strikes'],
    isValid: BuilderProviderState['isValid']
  }
  | {
    type: 'UPDATE_STRIKES',
    strikes: BuilderProviderState['strikes'],
  }
  | {
    type: 'RESET_MARKET',
    strikes: BuilderProviderState['strikes'],
    currentPrice: BuilderProviderState['currentPrice'],
    selectedExpirationDate: BuilderProviderState['selectedExpirationDate'],
    selectedStrategy: BuilderProviderState['selectedStrategy'],
  }
  | {
    type: 'SET_POSITION_PNL',
    positionPnl: BuilderProviderState['positionPnl']
  }
  | {
    type: 'RESET_BUILDER_PROVIDER',
  }

export function builderReducer(
  state: BuilderProviderState,
  action: BuilderAction
): BuilderProviderState {
  switch (action.type) {
    case 'SET_BUILD_NEW_STRATEGY':
      return { ...state, isBuildingNewStrategy: action.isBuildingNewStrategy }
    case 'SET_STRIKES_SELECT_SHOW':
      return { ...state, showStrikesSelect: action.showStrikesSelect }
    case 'SET_PREBUILT':
      return { ...state, isPrebuilt: action.isPrebuilt }
    case 'SET_MARKETS':
      return { ...state, markets: action.markets, isMarketLoading: action.isMarketLoading }
    case 'SET_MARKETS_LOADING':
      return { ...state, isMarketLoading: action.isMarketLoading }
    case 'SET_MARKET':
      return {
        ...state,
        selectedMarket: action.selectedMarket,
        strikes: action.strikes,
        selectedExpirationDate: action.selectedExpirationDate,
        selectedStrategy: action.selectedStrategy,
      }
    case 'SET_CURRENT_PRICE':
      return { ...state, currentPrice: action.currentPrice }
    case 'SET_DIRECTION_TYPES':
      return { ...state, selectedDirectionTypes: action.selectedDirectionTypes }
    case 'SET_EXPIRATION_DATE':
      return { ...state, selectedExpirationDate: action.selectedExpirationDate }
    case 'SET_STRATEGY':
      return {
        ...state,
        selectedStrategy: action.selectedStrategy,
        strikes: action.strikes,
        isBuildingNewStrategy: action.isBuildingNewStrategy,
      }
    case 'SET_STRIKES':
      return { ...state, strikes: action.strikes, isValid: action.isValid }
    case 'UPDATE_STRIKES':
      return { ...state, strikes: action.strikes }
    case 'RESET_MARKET':
      return {
        ...state,
        strikes: action.strikes,
        currentPrice: action.currentPrice,
        selectedExpirationDate: action.selectedExpirationDate,
        selectedStrategy: action.selectedStrategy,
      }
    case 'SET_POSITION_PNL':
      return { ...state, positionPnl: action.positionPnl }
    case 'RESET_BUILDER_PROVIDER':
      return builderInitialState
    default:
      throw new Error()
  }
}