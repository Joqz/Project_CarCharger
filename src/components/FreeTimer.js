import React, {Component} from 'react';

class FreeTimer extends Component{
    state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0
    };
  
    startTimer = () => {
      this.setState({
        timerOn: true,
        timerTime: this.state.timerTime,
        timerStart: Date.now() - this.state.timerTime
      });

      this.timer = setInterval(() => {
        this.setState({
          timerTime: Date.now() - this.state.timerStart
        });
      }, 10);
    };
  
    stopTimer = () => {
      this.setState({ timerOn: false });
      clearInterval(this.timer);
    };  
  
    render() {
      const { timerTime } = this.state;
      let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
      let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
      let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
      let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
      let totalkWh = ((timerTime / 3600000) * 22).toFixed(4);
      return (
        <div>
            <div className="Timer">
                <div className="Timer-header">Total charging time in this session</div>
                
                <div className="Timer-display">
                    {hours} : {minutes} : {seconds} : {centiseconds}
                </div>

                {this.state.timerOn === false && this.state.timerTime === 0 && (
                    <button onClick={this.startTimer}>Start Charging</button>
                )}
                {this.state.timerOn === true && (
                    <button onClick={this.stopTimer}>Stop Charging</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button onClick={this.startTimer}>Resume Charging</button>
                )}
            </div>

            <div>
                Total amount charged : <div>{totalkWh}</div>
            </div>
        </div>
      );
    }
  }
  
  export default FreeTimer;