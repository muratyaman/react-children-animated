import React, { Children, Component, PropsWithChildren } from 'react';

export interface ReactChildrenAnimatedPropsBase {
  delay?: number;
}

export type ReactChildrenAnimatedProps = PropsWithChildren<ReactChildrenAnimatedPropsBase>;

type IntervalIdType = ReturnType<typeof setInterval>;

export interface ReactChildrenAnimatedState {
  intervalId?: IntervalIdType;
  childIdx?: number;
}

export class ReactChildrenAnimated extends Component<ReactChildrenAnimatedProps, ReactChildrenAnimatedState> {
  
  state: ReactChildrenAnimatedState = {
    childIdx: 0,
  };

  componentDidMount() {
    let { delay = 5000 } = this.props;
    if (delay < 50) {
      console.warn('ReactChildrenAnimated: "delay" cannot be less than 50');
      delay = 50;
    }
    const intervalId = setInterval(this.changeChildIdx, delay);
    this.setState({ intervalId });
  }

  changeChildIdx = () => {
    let { childIdx = -1 } = this.state; // so that we start from 0
    childIdx += 1;
    const count = Children.count(this.props.children);
    if (childIdx === count) {
      childIdx = 0;
    }
    this.setState({ childIdx });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  render() {
    return (
      <span className="rca-container">
        {Children.map(this.props.children, (child, idx) => {
          const show = idx === this.state.childIdx;
          return (
            <span
              key={idx}
              className={`rca-child ${show ? '' : 'hidden' }`}
              style={show ? {} : { display: 'none' }}
            >{child}</span>
          );
        })}
      </span>
    );
  }
}

export default ReactChildrenAnimated;
