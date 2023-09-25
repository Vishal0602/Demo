import React from 'react'
import "./Main.css"
import logo from "./logo12.jpg"
function Main() {

    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    {/* <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="img" />
            <p>Say Hello To Always-On Marketing</p>
            <h1>hello</h1> */}
                    <div className='main-container'><br /> <br />
                        
                            <p className='per'>Say Hello To Always-On <span class="maincolor">Marketing!</span><br /><br />
                                <div className='bec'>
                                    Because Customers Shop When They Want To.<br />
                                    Not When You Want Them to.
                                </div>
                                   <div className="image" ><img src={logo}          alt=''></img> </div>
                            </p><div /> <br /><br />
                            
                            <div>
                            <p className="per1">Stop-Start Marketing Campaigns Lose You Customers Buying Right Now.</p></div> <br />
                        <div className='ver'><br />

                            <span className="ver1">Run a perpetual marketing campaign.</span>
                            <span className="ver2"> Reach Customers when they're most likely to buy from you.  </span>
                            <span className="ver3">Lock your competition out.</span></div>


                        {/* < div className='drive'>
                            <h2><ul><li>Drive high-quality traffic to your website.</li><br />
                                <li>Optimize for more conversions!</li><br />
                                <li>Leverage collaborations to transform your website sales funnel.</li></ul></h2>

                            <img className="image" src={logo} alt=''></img> </div>

                        <div className='per2'>
                            <span className='pv'>Partner with other Businesses</span> <br />
                            <span className='pv1'>Across Sectors, Online or Offline, Anywhere in the World. Instantly.</span><br />< br />
                            <span className='pv2'>Market Directly to their Customers</span><br />
                            <span className='pv3'>At the Moment of Transaction. Without Customer Data being shared.</span><br />< br />
                            <span className='pv4'>Retain Existing Customers</span><br />
                            <span className='pv5'>At Zero Cost, via Partner Rewards.</span>
                        </div> */}


                    </div>
                </div>
                <div class="carousel-item">
                    {/* <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="img" /> */}
                </div>
                <div class="carousel-item">
                    {/* <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="img" /> */}
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>
    )
}

export default Main