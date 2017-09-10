// @flow
import { connect } from "react-redux"
import Roulette from "../../components/Roulette"
import { start, stop, select } from "../modules/roulette"
import { shuffle, type Item } from "../modules/shuffle"
import type { State } from "../modules/roulette"

const mapStateToProps = (state: State) => ({
  status: state.Roulette.status,
  name: state.Roulette.name,
  items: state.Shuffle.items
})

const mapDispatchToProps = (dispatch: Function) => ({
  start: () => dispatch(start()),
  stop: () => dispatch(stop()),
  select: (name: string) => dispatch(select(name)),
  shuffle: (items: Array<Item>) => dispatch(shuffle(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(Roulette)
