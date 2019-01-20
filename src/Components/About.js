import React, { Component } from 'react';

class About extends Component {
  me() {
    return (
      <div>
      <p>Lorem ipsum dolor sit amet, omnis abhorreant persequeris sea ne, ut quo falli verear incorrupte. Clita accusamus usu an. Ex soluta argumentum mediocritatem pri, mel sonet iuvaret partiendo te. Eu his vidit ceteros. Vel dicam aliquid te. Mei velit vocent repudiare no, ex nec quis animal oporteat.</p>

<p>Has summo nonumes efficiendi no, ponderum salutatus corrumpit at mel. Sed et sint probo eleifend, harum vidisse detracto pro ut. Cu sit impetus bonorum vituperata, phaedrum suavitate eos ne, ea illud inciderint sed. His no atomorum sapientem patrioque, cu mea mucius mediocrem.</p>

In maluisset scriptorem est. Vel aliquip viderer intellegebat et. Duo no eros atqui putant. Vel utinam sententiae at. Sit at molestiae mediocritatem, nostro ceteros accommodare mea te. Vitae adolescens eloquentiam vix te, wisi impetus vix id. Te facer tamquam sapientem nec.

Usu eu aeterno sanctus, eum simul vocibus ei. Minimum reprehendunt an vix, ea eligendi patrioque referrentur mel, altera ridens et nam. Est rebum epicuri no, ne nec regione repudiandae. Solet facilis per et.

Pro cu eirmod ancillae sapientem, brute discere quo te, ea cibo laudem graece vix. An ius malis officiis, ut labore impedit periculis nec. Nam deserunt definiebas ex, perfecto percipitur ius te. Indoctum consetetur neglegentur his an. Mea id minimum accusam, at eam salutandi quaerendum.</div>
    )
  }

  experience() {
    return (
      <div></div>
    )
  }

  skills() {
    return (
      <div></div>
    )
  }

  render() {
    return(
        <div>
          <h3 className="page-title">About</h3>
          <div className="content-text">
          {this.me()}
          {this.experience()}
          {this.skills()}
          </div>
        </div>
    )
  }
}

export default About;
