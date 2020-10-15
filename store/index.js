import { SET_SCROLLBAR_OPTION } from 'utils/types/mutation-types'

export const state = () => ({
  scrollBarOption: {}
})

export const getters = {}

export const mutations = {
  [SET_SCROLLBAR_OPTION](state, option) {
    state.scrollBarOption = option
  }
}

export const actions = {}
