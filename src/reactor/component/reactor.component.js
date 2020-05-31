import { Component } from "react";
import { Obj } from "reinforcements";
class ReactorComponent extends Component {
  /**
   * triggered after the component is render
   * @alias componentDidMount
   * @memberof ReactorComponent
   */

  init() {}

  /**
   * {@inheritdoc}
   */

  constructor() {
    super();
    this.init();
  }
  ready() {}
  /**
   * {@inheritdoc}
   */
  componentDidMount() {
    this.ready();
  }

  /**
   * triggered befor the component is render again
   * @alias getSnapshotBeforeUpdate
   * @memberof ReactorComponent
   */

  beforeUpdateing(props, state) {}
  /**
   * {@inheritdoc}
   */

  getSnapshotBeforeUpdate(props, state) {
    let data = this.beforeUpdateing(props, state);
    return data || null;
  }

  /**
   * triggered after trhe component is rendered again
   * @param {object} props
   * @param {object} state
   * @param {any} snapshot
   * @alias componentDidUpdate
   * @memberof ReactorComponent
   */

  onUpdate(props, state, snapshot) {}
  /**
   * {@inheritdoc}
   */

  componentDidUpdate(props, state, snapshot) {
    this.onUpdate(props, state, snapshot);
  }

  /**
   * triggered befor the component is destroyed
   * @alias componentWillMount
   * @memberof ReactorComponent
   */

  destroy() {}
  /**
   * {@inheritdoc}
   */

  componentWillUnmount() {
    this.destroy();
  }

  /**
   *
   * set the gaiven value to its corresponding key
   * the key here is 'dot. notaion'
   * @param {string} key
   * @param {*} any
   * @memberof ReactorComponent
   *
   */
  set(key, value) {
    this.setState(Obj.set(this.state, key, value));
  }

  /**
   * Get component children
   * @param {array} args
   * @returns {array|null}
   */
  children() {
    return this.props.children;
  }
  /**
   *
   * Get the value of given'dot.notation' key from state
   * @param {string} key
   * @param {*} $defualt
   * @defalut {*}
   *
   */
  get(key, defalut = null) {
    return Obj.get(this.state, key, defalut);
  }
}
export default ReactorComponent;
