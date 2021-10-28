      /*<Container fluid>

        <Jumbotron>

          <h1>Results</h1>

        </Jumbotron>

         <Row>
            <Button variant="primary" onClick={() => setDataEntry(false)}>Enter values</Button>{' '}
            <Button variant="secondary" onClick={updateResults} >Save</Button>
          <Table hover variant="dark" size="sm">
            <thead>
              <tr>
                <th>Test/Parameters</th>
                <th>Value</th>
                <th>Units</th>
                <th>Range</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
                {tests.map(test => (
                  <>
                     <tr key={test._id}>
                        <td>{test.testCatalogueId.name}</td>                      
                     </tr>
                     
                     {test.results.map(result => (
                       <tr key={result._id}>
                        <td>{result.parameter.name}</td>
                        <td>
                        </td>
                        <td>{result.parameter.units}</td>
                        <td>{result.parameter.range}</td>
                        <td>{}</td>
                       </tr> 
                      ))}


                   </>
                  ))}

            </tbody>
          </Table>

        </Row>        

      </Container>*/


import React, { useState, useEffect, useContext } from "react";

/*import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Jumbotron from "../components/Jumbotron";*/

import API from "../../utils/API";

/*import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";*/
/*import {
  Input, TextArea, FormBtn
} from "../components/PatientForm";*/

import ResultsContext from "../../utils/ResultsContext"


function ResultsInput() {


  /*Setting our component's initial state*/


  const [order, setOrder] = useState([])
  const [tests, setTests] = useState([])
  const [dataEntry, setDataEntry] = useState([])
  const [resultsObject, setResultsObject] = useState({})

  const state = useContext(ResultsContext);

  
  //setState({changed:false})
  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // const {id} = useParams();
  
  
  const id = state.id
  console.log(id)

  useEffect(() => {

    setDataEntry(true);
    getOrder(id);

  }, [])


  function getOrder (id) {

    API.getOrder(id)
      .then(res => {

        setOrder(res.data);
        setTests(res.data.data.tests);

      })
      .catch(err => console.log(err));
  }




    function handleInputChange(event) {

    const { id, value } = event.target;
    console.log( id, value );
    console.log(tests);
    
    const newTests = tests.map((test)=>{

    return {...test, results: test.results.map(result=>{

        if(result._id === id) {

          return {...result,value}  

        }else{

          return result;
          
        }
      })}
    })
    console.log(newTests)
   setTests(newTests);

    };


  


  function updateResults () {
    
    setDataEntry(true);


    tests.forEach((test) => {

      test.results.forEach( (result) => {

        console.log(result);
        console.log(result._id);

        const input = document.getElementById(result._id);
        console.log(input);

        API.updateResults({

            "_id": result._id,

            "data": { 

              "value": input.value,
              
              "text": "this is text"

            }            

          })
        .then(res => {

            getOrder(id);

        })
        .catch(err => console.log(err));

        });

      });

  }


  
      
                        

    return (
      <>
      </>
    );
}
                
export default ResultsInput;

