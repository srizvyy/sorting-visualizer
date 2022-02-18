import React from 'react';
import {SortingAlgo} from './SortingAlgo';
import './sorting.css';



const ANIMATION_SPEED = 1

const NUM_OF_BARS_IN_ARRAY = 310

const PRIMARY_COLOR = "blue"

const SECONDARY_COLOR = "red"

 function randomBarArrayGenerator(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

class Sorting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {array: []}
    }
    
    componentDidMount() {
        this.resetArray()
    }

   

     resetArray() {
        const array = [] 
        for (let i = 0; i < NUM_OF_BARS_IN_ARRAY; i++) {
            array.push(randomBarArrayGenerator(5, 730))
        }
        this.setState({array})
    }

   

     mergeSort() {
    const animations = SortingAlgo(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
  }
  
  render() {
      const {array} = this.state
  return (
    <div className='array-container'>
        {array.map((value, idx) => (
            <div
                className='array-bar'
                key={idx}
                style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${value}px`
                }}></div>
        ))}
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
    </div>
  )
}

}

export default Sorting