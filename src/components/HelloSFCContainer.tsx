import HelloSFC from "../components/HelloSFC";
import * as actions from "../actions/";
import { IStoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";

/* 
If we recall, our application state consists of two properties:

languageName and enthusiasmLevel.

Our Hello component, on the other hand, expected a name and an enthusiasmLevel.

mapStateToProps will get the relevant data from the store, and adjust it if necessary,
for our component's props.

Note that mapStateToProps only creates 2 out of 4 of the properties a Hello component expects.
Namely, we still want to pass in the 'onIncrement' and 'onDecrement' callbacks.
mapDispatchToProps is a function that takes a dispatcher function. 
This dispatcher function can pass actions into our store to make updates,
so we can create a pair of callbacks that will call the dispatcher as necessary.

*/

export function mapStateToProps({
  enthusiasmLevel,
  languageName
}: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  };
}

/* 
Note that mapStateToProps only creates 2 out of 4 of the properties a Hello component expects.
Namely, we still want to pass in the 'onIncrement' and 'onDecrement' callbacks.
mapDispatchToProps is a function that takes a dispatcher function. 
This dispatcher function can pass actions into our store to make updates,
so we can create a pair of callbacks that will call the dispatcher as necessary.
*/

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>
) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloSFC);
