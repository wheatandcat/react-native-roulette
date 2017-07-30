// @flow
import { connect } from "react-redux"
import Roulette from "../../components/Roulette"
import { start, stop } from "../modules/roulette"
import type { State } from "../modules/roulette"

const mapStateToProps = (state: State) => ({
  status: state.Roulette.status
})

const mapDispatchToProps = (dispatch: Function) => ({
  start: () => dispatch(start()),
  stop: () => dispatch(stop())
})

export default connect(mapStateToProps, mapDispatchToProps)(Roulette)
