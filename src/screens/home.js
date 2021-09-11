import React from 'react';
import Navbar from '../components/navbar'

class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         fullName: '',
         addressLine: '',
         city: '',
         state: '',
         postcode: '',
         email: '',
         phoneNumber: '',
         country: ''
      };
   }

   inputHandler = (e) => {
      const { Address } = this.state;
      console.log(e.target.name);
      this.setState({ ...Address, [e.target.name]: e.target.value })

   }


   submitHandler = async (e) => {
      e.preventDefault();
      
      console.log(this.state);
      const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(this.state)
     };
     fetch('http://18.233.10.228:45937/address',requestOptions)
        .then(response =>  response.text())
        .then(data => {
            console.log(data);
            if(data==="saved"){
               this.setState({
                  fullName: '',
                  addressLine: '',
                  city: '',
                  state: '',
                  postcode: '',
                  email: '',
                  phoneNumber: '',
                  country: ''
               })
               alert("address saved");
            } 
            // console.log(bool)

        })
        .catch(function (error) {
            console.log(error.response.data);
        });
      

   }
   render() {
      const user=JSON.parse(localStorage.getItem('user'));
      console.log(user);
      return (
         <div >
            <Navbar/>
            {/* <h1 style={{ color: "blue" }}>Welcome add your address to register</h1> */}

            <h1 style={{ color: "blue" }}>{`Welcome ${user.name},` || 'welcome, '} add your address to register</h1>
            <div className="container">
               <table className="table table-striped">
                  <tbody>
                     <tr>
                        <td colSpan="1">
                           <img src="https://www.getapkfile.com/wp-content/uploads/2018/06/My-Location-GPS-Maps-Share-location-Save-places-APK-Download-Android-APP.png" className="img-fluid" alt="location" width="500vw" height="500vh"></img>
                        </td>
                        <td colSpan="1" >
                           <form className="well form-horizontal" onSubmit={this.submitHandler} style={{ backgroundColor: "coral" }}>
                              <fieldset>
                                 <div className="form-group">
                                    <label className="col-md-4 control-label">Full Name</label>
                                    <div className="col-md-8 inputGroupContainer">
                                       <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span><input id="fullName" name="fullName" placeholder="Full Name" className="form-control" required value={this.state.fullName} type="text" onChange={this.inputHandler} /></div>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="col-md-4 control-label">Address Line </label>
                                    <div className="col-md-8 inputGroupContainer">
                                       <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span><input id="addressLine" name="addressLine" placeholder="Address Line " className="form-control" required value={this.state.addressLine} type="text" onChange={this.inputHandler} /></div>
                                    </div>
                                 </div>

                                 <div className="form-group">
                                    <label className="col-md-4 control-label">City</label>
                                    <div className="col-md-8 inputGroupContainer">
                                       <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span><input id="city" name="city" placeholder="City" className="form-control" required type="text" value={this.state.city} onChange={this.inputHandler} /></div>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="col-md-4 control-label">State/Province/Region</label>
                                    <div className="col-md-8 inputGroupContainer">
                                       <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span><input id="state" name="state" placeholder="State/Province/Region" className="form-control" required value={this.state.state} type="text" onChange={this.inputHandler} /></div>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="col-md-4 control-label">Postal Code/ZIP</label>
                                    <div className="col-md-8 inputGroupContainer">
                                       <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span><input id="postcode" name="postcode" placeholder="Postal Code/ZIP" className="form-control" required value={this.state.postcode} type="text" onChange={this.inputHandler} /></div>
                                    </div>
                                 </div>

                                 <div className="form-group">
                                    <label className="col-md-4 control-label">Country</label>
                                    <div className="col-md-8 inputGroupContainer">
                                       <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span><input id="country" name="country" placeholder="country" className="form-control" required type="text" value={this.state.country} onChange={this.inputHandler} /></div>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="col-md-4 control-label">Email</label>
                                    <div className="col-md-8 inputGroupContainer">
                                       <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span><input id="email" name="email" placeholder="Email" className="form-control" required value={this.state.email} type="email" onChange={this.inputHandler} /></div>
                                    </div>
                                 </div>
                                 <div className="form-group ">
                                    <label className="col-md-4 control-label">Phone Number</label>
                                    <div className="col-md-8 inputGroupContainer">
                                       <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span><input id="phoneNumber" name="phoneNumber" placeholder="Phone Number" className="form-control" required value={this.state.phoneNumber} type="text" onChange={this.inputHandler} /></div>
                                    </div>
                                 </div>
                                 <div className="form-group " >
                                    <div className="col-md-8 inputGroupContainer">
                                       <button type="submit" style={{ backgroundColor: "green", color: "white", marginLeft: "23vw", marginTop: "20px" }}>save</button>
                                    </div>
                                 </div>
                              </fieldset>
                           </form>
                        </td>+

                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

      );
   }
}

export default Home;