import React from 'react';
import classes from "./Home.module.css";

function deleteHandler() {
 alert("Button has been clicked")
}
class Home extends React.Component {
    render() {
      return (
      <div className={classes.content}>
        <h1 className={classes.header}>
          Welcome to NFT Wealth!!!
        </h1>
        <p className={classes.story}>Our app is the ultimate destination for NFT
         enthusiasts. Not only can you buy and sell your favorite NFTs, 
         but you can also earn rewards by staking your NFTs on our platform.you'll 
         have everything you need to grow your NFT collection and earn rewards at the same time. 
        </p>
        <p className={classes.paragraph}>
          So why wait? Support a NFT enthusiast Journey today! 
        </p>
        <button className={classes.button} onClick={deleteHandler}>Create Wallet</button>
      </div>
      )
    }
  }
export default Home;