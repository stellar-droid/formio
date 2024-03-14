import React, { Component } from 'react';
import data from './data.json';
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  // Lifecycle method for static data loading
  componentDidMount() {
    // Static file path for demonstration
    const filePath = './data.json'; // Adjust the path accordingly

    this.fetchData(filePath);
  }

  // Function for fetching JSON data
  fetchData = async (filePath) => {
    try {
      const response = await fetch(filePath);
      const fetchedData = await response.json();
      this.setState({ data: fetchedData });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  

  // Optional: Lifecycle method for dynamic data loading (replace with your logic)
  // componentDidUpdate(prevProps) {
  //   if (this.props.filePath !== prevProps.filePath) {
  //     this.fetchData(this.props.filePath);
  //   }
  // }

  render() {
    const { data } = this.state;

    return (
      <div>
        {/* Display data here */}
        {data.length > 0 ? (
          // Example: Display data using a map function
          <ul>
            {data.map((item) => (
              <li key={item.id || item.key}> {item.name || item.label} </li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    );
  }
}

export default MyComponent;
