import React, { Component } from "react";
import wallet from "../data.json";
import classes from "./Marketplace.module.css";

class Marketplace extends Component {
  render() {
    return (
      <div className={classes.cards}>
        {wallet.map((record, i) => (
          <section class="tc pa3 pa5-ns mw7   ">
            <article class="hide-child relative ba b--black-20 mw5 center">
              <img
                src="https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-1/p320x320/10419949_10105372167674736_5929675618317299881_n.jpg?oh=fa3bbf4311e61e4637b67ef3be89479f&oe=58C28705"
                class="db"
                alt="Photo of Jesse Grant"
              />
              <div class="pa2 bt b--black-20">
                <a class="f6 db link dark-blue hover-blue" href="#">
                  {record.name}
                </a>
                <p class="f6 gray mv1">{record.details}</p>
                <a
                  class="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1"
                  href="#"
                >
                  Purchase
                </a>
              </div>
              <a
                class="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b"
                href="#"
              >
                ×
              </a>
            </article>
          </section>
        ))}
      </div>
    );
  }
}

export default Marketplace;
