import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Img from "gatsby-image" 
import {FixedObject} from '../interface'



interface nodeprops {
       id:string;
        name:string;
        price:number;
        description:{
          description:string;
        },
        category:string;
        image: {
          fixed: FixedObject | FixedObject[]
        }
  }

const Menu = () => {
    const data = useStaticQuery(
    graphql`
      query {
        Menu: allContentfulMenuItems {
      nodes {
        id
        name
        price
        description {
          description
        }
        category
        image {
          fixed(width: 100, height: 100) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
      }
    `
  )
        console.log(data.Menu.nodes);


    return (
        <section className="text-center py-5">
            {data.Menu.nodes.length>0?
            <Container>
            <h1 className="display-4 font-weight-bold">Menu Items are Displayed Below</h1>
            <Row>
                
                    {data.Menu.nodes.map((node:nodeprops)=>{
                        return(
                            <>
                            <Col md={3}>
                            {/* <div key={node.id} className="d-flex mx-auto my-3">
                                
                                <div><Img fixed={node.image.fixed}/></div>
                                
                                

                                <div className="flex-grow-1 px-3">
                                 <div className="d-flex justify-content-between">
                                    <h6 className="mb-0">{node.name}</h6>
                                    <h6 className="mb-0">{node.price}</h6>
                                 </div>
                                

                        <p className="text-muted">{node.description.description}</p>
                                </div>
                            </div> */}

                            <Img fixed={node.image.fixed}/>
                            </Col>
                            <Col md={3}>
                                <ListGroup variant='flush'>
                                        <ListGroupItem>
                                            <div className="price_name"><h6>{node.name}</h6>

                                            <h6>{`${node.price}$`}</h6></div>
                                            
                                        </ListGroupItem>
                                        
                                             
                                        
                                        <ListGroupItem><p className="text-muted">{node.description.description}</p></ListGroupItem>
                                </ListGroup>
                                    
                            </Col>
                            </>
                        );
                    })}

                
            </Row>
            </Container>
            
            
            
            
            
            
            
            
            
            
            
            
            :<h1>No Items in Menu</h1>}
            
        </section>
    )
}

export default Menu