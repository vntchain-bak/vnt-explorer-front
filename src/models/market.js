export default {
  state: {
    market: null
  },
  reducers: {
    setState: (state, { payload }) => {
      const { field, ...data } = payload
      return {
        ...state,
        [field]: data
      }
    },
    loadingStatus: (state, { payload }) => {
      const { field, ...data } = payload
      return {
        ...state,
        [field]: { ...state[field], ...data }
      }
    }
  }
}
