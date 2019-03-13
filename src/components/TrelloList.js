import React from 'react'
import TrelloCard from './TrelloCard';

const TrelloList = (props) => {
  return (
    <div style={styles.container}>
      <h4>{props.title}</h4>
      <TrelloCard />
    </div>
  )
}

const styles ={
    container:{
        backgroundColor:'#ccc',
        borderRadius: 3,
        width: 300,
        padding:6
    }
}

export default TrelloList
