import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ dateTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };

    const formattedDateTime = this.state.dateTime.toLocaleString(
      undefined,
      options
    );

    return <div>{formattedDateTime}</div>;
  }
}

export default Clock;

