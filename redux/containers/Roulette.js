// @flow
import { connect } from "react-redux"
import Roulette from "../../components/Roulette"
import { start, stop, select } from "../modules/roulette"
import type { State } from "../modules/roulette"

const mapStateToProps = (state: State) => ({
  status: state.Roulette.status,
  name: state.Roulette.name
})

const mapDispatchToProps = (dispatch: Function) => ({
  start: () => dispatch(start()),
  stop: () => dispatch(stop()),
  select: () => dispatch(select())
})

export default connect(mapStateToProps, mapDispatchToProps)(Roulette)
