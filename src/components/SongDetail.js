import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  console.log(selectedSong);
  if (!selectedSong) {
    return <div>Select a song</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        {selectedSong.title}
        <br />
        {selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return (
    {
      selectedSong: state.selectedSong
    }
  );
};

export default connect(mapStateToProps)(SongDetail);