import React from 'react';

const App = (props) => {
  const [fields,setFeilds]= React.useState({});
  const [errors,setErrors]= React.useState({});

  const validate = () =>{
    let is_error = false;
    let error_list = {};

    if(!fields.name){
      error_list.name = 'please enter the name';
      is_error = true;
    }
    if(!fields.age){
      error_list.age = 'please enter the age';
      is_error = true;
    }
    if(!fields.city){
      error_list.city = 'please select the city';
      is_error = true;
    }
    if(!fields.address){
      error_list.address = 'please enter the address';
      is_error = true;
    }

    if(is_error){
      setErrors(error_list);
      return true;
    }
    return false;
  }

  const handleChange = (event) =>{
    setFeilds({...fields,[event.target.name]:event.target.value});
    validate();
    //console.log(event.target.value);
  }

  const handleSubmit = (event)=>{
    event.preventDefault();

    if(validate()){
      console.log(errors);
    }else{
      console.log('submitted!');
    }


  }

  return (
    <div className="container" >
      <h1 >React Forms</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Name : <br /><input type="text" name="name" onChange={handleChange} />
        </p>
        {errors.name && (<p className="error">{errors.name}</p>)}
        <p>
          Age : <br /><input type="text" name="age" onChange={handleChange}/>
        </p>
        {errors.age && (<p className="error">{errors.age}</p>)}
        <p>
          Address : <br /><input type="text" name="address" onChange={handleChange}/>
        </p>
        {errors.address && (<p className="error">{errors.address}</p>)}
        <p>
          City :<br />
          <select name="city" onChange={handleChange}>
            <option></option>
            <option value="pkl">Panchkula</option>
            <option value="moh">Mohali</option>
            <option value="chd">Chandigarh</option>
          </select>
        </p>
        {errors.city && (<p className="error">{errors.city}</p>)}
        <p>
          Gender :<br />
          <input type="radio" id="male" name="gender" value="male"  onChange={handleChange}/>{" "}
          <label htmlFor="male">male</label>
          <input type="radio" id="female" name="gender" value="female" onChange={handleChange}/>{" "}
          <label htmlFor="female">female</label>
        </p>



        <p>
          Message:
          <br />
          <textarea name="about" onChange={handleChange} ></textarea>
        </p>
        <p>
          <input
            type="checkbox"
            name="confirm"
            id="confirm"
            onChange={handleChange}
          />{" "}
          <label htmlFor="confirm">please confirm </label>
        </p>
        <p>
          <input type="submit" name="save" value="save" />
        </p>
      </form>

      {JSON.stringify(fields)}
    </div >
  )
}

export default App;
