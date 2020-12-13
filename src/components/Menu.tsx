import React, { Fragment, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import Img from "gatsby-image"
import { FixedObject } from "../interface"

interface nodeprops {
  id: string
  name: string
  price: number
  description: {
    description: string
  }
  category: string
  image: {
    fixed: FixedObject | FixedObject[]
  }
  map:any;
  
  
}


// const getCategories = (items:nodeprops) =>{
//   let tempitems= items.map((items:nodeprops)=>{
//       return items.category
//   })
//   // Using set Method to take A single category from Multiple same category items
//   let tempcategories= new Set(tempitems);
//   let categories =  Array.from(tempcategories)

//   categories = ["all",...categories]
//     return categories;
// }


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
  
//   const categories = getCategories(data.Menu.nodes)
// console.log(categories)

  const [menuitems, setmenuitems] = useState(data.Menu.nodes);


 const handelcategory=(category:string)=>{
   let tempitem=data.Menu.nodes;
  if(category==="All"){
    return setmenuitems(data.Menu.nodes);
  }
      else{
            let item = tempitem.filter((node:nodeprops)=>
              node.category=== category
            )
            
            return setmenuitems(item);
      }


 }

    



  return (
    <section className="text-center py-5 menu">
      {data.Menu.nodes.length > 0 ? (
        <Container>
          <h1 className="display-4 font-weight-bold">
            Menu Items are Displayed Below
          </h1>
          <Row>
            <Col>
                  <Button  className="m-3 mb-5" onClick={() =>{handelcategory("All")}}>All</Button>
                  {
                    data.Menu.nodes.map((node: nodeprops)=>{
                          return(
                            
                            
                              <Button className="m-3 mb-5" key={node.id} onClick={() =>{handelcategory(node.category)}}>

                                {node.category}

                              </Button>
                              

                          )
                            
                          
                    })
                  }
            </Col>
          </Row>
          <Row>
            {menuitems.map((node: nodeprops) => {
              return (
                <Fragment key={node.id}>
                  <Col md={3}>
                    <Img fixed={node.image.fixed} />
                  </Col>
                  <Col md={3}>
                    <ListGroup variant="flush">
                      <ListGroupItem className="menu">
                        <div className="price_name ">
                          <h6 className="mx-auto">{node.name}</h6>

                          <h6 style={{color:"yellowgreen"}}>{`${node.price}$`}</h6>
                        </div>
                        <p className="text-muted">
                          {node.description.description}
                        </p>
                      </ListGroupItem >

                      
                    </ListGroup>
                  </Col>
                </Fragment>
              )
            })}
          </Row>
        </Container>
      ) : (
        <h1>No Items in Menu</h1>
      )}
    </section>
  )
}

export default Menu
