import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-wrapper">
            <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contribute as Club</a></li>
                            <li><a href="#">Contribute as User</a></li>
                            <li><a href="#">What we do</a></li>
                            <li><a href="#">Contribute help</a></li>
                            <li><a href="#">Check our events</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="dark">
                <h1>Sahayog</h1>

                <div className="curve"></div>
            </section>
            <section className="white">
                <h1>Nice curves</h1>
                <p>Curves are like roads, the more the curves the more beautiful it is so yeah I like it like that</p>
            </section>

            <section>
                <h1>Nice curves</h1>
                <p>Curves are like roads, the more the curves the more beautiful it is so yeah I like it like that</p>
            </section>
        </div>
    )
}

export default Home;
