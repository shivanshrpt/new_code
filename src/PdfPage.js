import React from 'react'
import './pdfpage.css'
import jsPDF from "jspdf"
export default function PdfPage() {


  function generatePdf() {

    var doc = new jsPDF('p', 'pt', 'a4','compressed')

    doc.html(document.querySelector("#id"), {
      callback: function () {
        doc.save("download.pdf")
      }
    })

  }
  return (
    <>
      <div id='id'>
        <div className='heading'>
          <h3>SEKHAWATI ORGANIC PRIVATE LIMITED</h3>
          <h6 style={{ marginTop: "-8px" }}>F-132, MALVIYA NAGAR INDUSTRIAL AREA, MALVIYA NAGAR, JAIPUR, -302017</h6>
          <h3 style={{ marginTop: "0.5px" }}>Internal Inspection Check List-Crop Production </h3>
          <div>
          <h3> SEASON/YEAR………………NAME OF GROWER GROUP………………</h3>
        </div> 
       
        </div>
       

        <table>
          <tr>
            
            <th colspan="8">Genernal Information 
            
          
            <input style={{marginLeft:'100px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Low</p>
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Medium</p>
            <input style={{marginLeft:'50px'}}  type="checkbox"/>
            <p style={{display:'inline-block'}}>High</p>
           


            </th>
          </tr>
          <tr>
            <td colspan="3"> Farmer Name: shiavnsh rajput </td>
            <td colspan="5">Farmer ID : 0000000000</td>
          </tr>
          <tr>
            <td colspan="3">Village: {}</td>
            <td colspan="5">Phone No.:  709471704980</td>
          </tr>
          <tr>
            
            <td colspan="3">Name of Internal Inspector : Himanshu Kurmar Thakur</td>
            <td colspan="5">Date of Inspection : Smt. Madhuri Thakur</td>
          </tr>
          <tr>
            
            <td colspan="3">Total Land Holding (Ha.): </td>
            <td colspan="1">Land offered for Organic (Ha.):</td>
            <td colspan="4">Total Organic site : </td>
          </tr>
          <tr>
          
            
            <td colspan="3">Status of certification : </td>
            <td colspan="1"><input type="checkbox"/> Organic </td>
            <td><input type="checkbox"/> IC – 3</td>
            <td><input type="checkbox"/> IC – 2</td>
            <td><input type="checkbox"/>IC–1 </td>
            <td><input type="checkbox"/> Ragistered</td>
           

          </tr>
          <tr>
            <td  colspan="6">Farmer Trained in Organic Standards :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
          </tr>

          <tr>
            <td  colspan="6">Farmer Aware of Internal Organic Standard  :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
          </tr>
          <tr>
            
            <th colspan="8">Crop Production Detail: 
            
          
            <input style={{marginLeft:'100px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Low</p>
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Medium</p>
            <input style={{marginLeft:'50px'}}  type="checkbox"/>
            <p style={{display:'inline-block'}}>High</p>
           


            </th>
          </tr>
          
          <tr>
            <th>Name of Crop
            </th>
            <th>Type of Crop
            (Main/Intercrop)
        
           </th>
            <th>Plot No./ Name </th>
            <th>Type of Production (Irrigated/Urirrigated)
            </th>
            <th>Area (Ha.)</th>
            <th colspan="4">Estd. Yield (Qtl.)</th>
          </tr>

          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <th colspan="4"> </th>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <th colspan="4"> </th>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <th colspan="4"> </th>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <th colspan="4"> </th>
          </tr>
          <tr>
            <td  colspan="5">Is the farmer engaged in split/parallel production?   :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>

          </tr>

         
          <tr>
            
            <th colspan="8">Seeds, Propagation Materials and Crop Rotation : 
            
          
            <input style={{marginLeft:'100px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Low</p>
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Medium</p>
            <input style={{marginLeft:'50px'}}  type="checkbox"/>
            <p style={{display:'inline-block'}}>High</p>
           


            </th>
          </tr>
          
          <tr>
            <th>Name of Crop
            </th>
            <th>Source of seed 
        
           </th>
            <th colspan="4">Time of Sowing</th>
            <th  colspan="5">Seed Rate
            </th>
            
            
           </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td colspan="4"> </td>
            <td colspan="5"> </td>
            
            </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td colspan="4"> </td>
           
            <th colspan="5"> </th>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td colspan="4"> </td>
            <th colspan="5"> </th>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td colspan="4"> </td>
            <th colspan="5"> </th>
          </tr>
          <tr></tr>

          <tr>
            
            <th colspan="8">Soil Fertility Management  : 
            
          
            <input style={{marginLeft:'100px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Low</p>
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Medium</p>
            <input style={{marginLeft:'50px'}}  type="checkbox"/>
            <p style={{display:'inline-block'}}>High</p>
           


            </th>
          </tr>
          
          
          
          <tr>
            <th>Name of Crop
            </th>
            <th>Name of input 
        
           </th>
            <th colspan="4">Quantity Applied </th>
            <th  colspan="6">Time of Application
            </th>
            
            
           </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td colspan="4"> </td>
            <td colspan="5"> </td>
            
            </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td colspan="4"> </td>
           
            <th colspan="5"> </th>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td colspan="4"> </td>
            <th colspan="5"> </th>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td colspan="4"> </td>
            <th colspan="5"> </th>
          </tr>
          <tr></tr>

          <tr>
            
            <th colspan="8">Pest, Disease and Weed Management,Use of Growth Regulators : 
            
          
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Low</p>
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Medium</p>
            <input style={{marginLeft:'50px'}}  type="checkbox"/>
            <p style={{display:'inline-block'}}>High</p>
           


            </th>
            </tr>
            <th>Name of Crop
            </th>
            <th> Name of input </th>
            <th>Purpose of Application </th>
            <th>Application Rate 
            </th>
           
            <th colspan="4"> Time of Application</th>
          

          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <th colspan="4"> </th>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <th colspan="4"> </th>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <th colspan="4"> </th>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <th colspan="4"> </th>
          </tr>

          <tr>
          <th colspan="7">Animal Husbandary % : 
            
          
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Low</p>
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Medium</p>
            <input style={{marginLeft:'50px'}}  type="checkbox"/>
            <p style={{display:'inline-block'}}>High</p>
           


            </th>
          <th>
            Remark
          </th>
          </tr>
          <tr>
            <td  colspan="4">Animals fed with Organic Feed   :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>
          <tr>
            <td  colspan="4">Animals fed with Non-Organic Feed    :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>
          <tr>
            <td  colspan="4">No medication without Veterinary Prescription   :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>

          <tr>
          <th colspan="8">Farm and Farm Management : 
            
          
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Low</p>
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Medium</p>
            <input style={{marginLeft:'50px'}}  type="checkbox"/>
            <p style={{display:'inline-block'}}>High</p>
           


            </th>
          
          </tr>
          <tr>
            <td  colspan="4">General Assessment of the Farm with regard to Sustainability   :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>
          <tr>
            <td  colspan="4">Burning of Crop Residues    :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>
          <tr>
            <td  colspan="4">Border and Prevention of Drift   :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>
          <tr>
            <td  colspan="4">Prevention/Soil of Erosion    :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>
          <tr>
            <td  colspan="4">Cleanliness of the Farm    :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>
          <tr>
            <td  colspan="4">General Assessment of Crop    :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>

          <tr>
            <td  colspan="4">Implementation of All Required Activities     :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>

          <tr>
            <td  colspan="4">Water Conservation     :</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>

          <tr>
          <th colspan="8">Post Harvest Measures and Processing: 
            
          
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Low</p>
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Medium</p>
            <input style={{marginLeft:'50px'}}  type="checkbox"/>
            <p style={{display:'inline-block'}}>High</p>
           


            </th>
          
          </tr>
          
          <tr>
            <td  colspan="4">Harvesting chemicals used, no co-mingling of the final produce:</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>

          <tr>
            <td  colspan="4">Processing(only allowed ingredients used, no co-mingling/Contamination):</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>

          <tr>
            <td  colspan="4">Storage (no co-mingling /Contamination):</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>

          <tr>
            <td  colspan="4">Is there separate store for organic and conventional produce:</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>

          <tr>
            <td  colspan="4">Transportation(no co-mingling / Contamination):</td>
            <td ><input type="checkbox"/>Yes</td>
            <td><input type="checkbox"/>NO</td>
            <td><input type="checkbox"/>NA</td>
            <td></td>

          </tr>

          <tr>
          <th colspan="7">Risk Management : 
            
          
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Low</p>
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Medium</p>
            <input style={{marginLeft:'50px'}}  type="checkbox"/>
            <p style={{display:'inline-block'}}>High</p>
           


            </th>
          <th>
            Comments
          </th>
          </tr>
          <tr>
            <td  colspan="4">Neighbouring Non-Organic fields</td>
            <td ><input type="checkbox"/>Low</td>
            <td><input type="checkbox"/>Med</td>
            <td><input type="checkbox"/>High</td>
            <td></td>

          </tr>
          <tr>
            <td  colspan="4">Non-Organic activities of same Farm </td>
            <td ><input type="checkbox"/>Low</td>
            <td><input type="checkbox"/>Med</td>
            <td><input type="checkbox"/>High</td>
            <td></td>

          </tr>
          <tr>
            <td  colspan="4">Industry, Motorways, Wastewater, etc. </td>
            <td ><input type="checkbox"/>Low</td>
            <td><input type="checkbox"/>Med.</td>
            <td><input type="checkbox"/>High</td>
            <td></td>

          </tr>
          <tr>
            <td  colspan="4">Others (Specity) :</td>
            <td ><input type="checkbox"/>Low</td>
            <td><input type="checkbox"/>Med.</td>
            <td><input type="checkbox"/>High</td>
            <td></td>

          </tr>
          <tr>
            <td  colspan="8">Measure taken to minimise the risk:  </td>
            

          </tr>
          <tr>
            <td  colspan="8">Approval/Recommendations of the Internal Inspector(Whole Farm)  </td>
            

          </tr>
          
          <tr>
          <th colspan="8">Total Risk Severity : 
            
          
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Low no.</p>
            <input style={{marginLeft:'50px'}} type="checkbox"/>
            <p style={{display:'inline-block'}}>Medium no.</p>
            <input style={{marginLeft:'50px'}}  type="checkbox"/>
            <p style={{display:'inline-block'}}>High no.</p>
           


            </th>

          
          </tr>

          <tr>
            <td  colspan="4">Compliance with previous conditions:</td>
            
            <td ><input type="checkbox"/>Good</td>
            <td><input type="checkbox"/>Partialy</td>
            <td><input type="checkbox"/>Missing</td>
            <td> <input type="checkbox"/>Non Conditions Last Year </td>

          </tr>
          <tr>
            <td  colspan="5">Compliance this year: </td>
            
            <td ><input type="checkbox"/>To Approve without conditions</td>
            <td><input type="checkbox"/>To Approve with conditions</td>
            <td><input type="checkbox"/>Cannot be Approved</td>

          </tr>

          <tr>
            <td  colspan="8">Comments by Internal Inspector:</td>
          </tr>
          <tr>
            <td  colspan="8">Declaration: The farmer harewith confirms that he/she has complied with the internal
             organic standard and has declared all used inputs activities as stated in this form. 
             The farmer has noted the set conditions.  
             </td>
          </tr>

          <tr>
            <td  colspan="8">Date & Signature Farmer                                                                       
            <br></br>Date & Signature Internal Inspector   
             </td>
          </tr>
      
          <tr>
            <td  colspan="8">Approval Decision:</td>
          </tr>

          <tr>
            <td  colspan="5">Compliance this year: </td>
            
            <td ><input type="checkbox"/>To Approved without conditions</td>
            <td><input type="checkbox"/>To Approved with conditions</td>
            <td><input type="checkbox"/>Not Approved</td>

          </tr>

          <tr>
            <td  colspan="8">Additional conditions or sanctions: </td>
          </tr>

          <tr>
            <td  colspan="8">Date & Signature Approval Manager:</td>
          </tr>


         

        
        </table>
      </div>

      <button style={{marginTop:'10px' , width:'100px' , 
      backgroundColor:'yellowgreen',borderRadius:'5px'}} onClick={generatePdf}>generate pdf</button>

    </>
  )
}

