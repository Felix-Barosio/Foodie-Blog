import React from 'react'
import { Button } from './Button'
import png from '../images/img.png'

function Home() {
    return (
        <div>
            <div id='home' className="header">
                <div className="container homecontainer">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="header-content">
                                <h1 className="header-title">
                                    Share Recipes with Friend and Family.
                                </h1>
                                <p className="header-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.
                                </p>
                                <Button className="btn btn-outline-light btn-lg">Get Started</Button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="header-image">
                                <img src={png} alt="foodie" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

// import React from 'react'
// import { Button } from './Button'

// function Home() {
//     return (
//         <div>
//             <div className='home-container'>
//                 <h1>Recipes Blog</h1>
//                 <p>What are you looking for?</p>
//                 <div className='home-btns'>
//                     <Button
//                         className='btns btn btn-primary'
//                         buttonStyle='btn--outline'
//                         buttonSize='btn--large'
//                     >
//                         GET STARTED
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home;
