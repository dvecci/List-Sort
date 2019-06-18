import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Photo from './Components/Photo/Photo';
import { filterResults as filterResultsAction, setPhotos, fetchFlickrImages } from './Actions/actions';

const getFilteredPhotos = state => (state || {}).filteredPhotos;

export class App extends React.Component {
  static defaultProps = {
    photos: []
  };

  static propTypes = {
    photos: PropTypes.array,
    filterResults: PropTypes.func,
    fetchImages: PropTypes.func
  }
  
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    return <div className="main">
      <header><h1 className="pageTitle">Flickr Photo Sort</h1></header>
      <section className="inputRow">
        <input ref="filterInput" type="text" onChange={evt => { this.props.filterResults(evt.target.value);}} />
      </section>
      <section className="photos">
        {this.props.photos.map(image => <Photo key={image.id} image={image} />)}
      </section>
    </div>
  }
}

const ConnectedApp = connect(
  (state) => ({
    photos: getFilteredPhotos(state)
  }),
  {
    filterResults: filterResultsAction,
    fetchImages: fetchFlickrImages
  }
)(App);

export default ConnectedApp;
