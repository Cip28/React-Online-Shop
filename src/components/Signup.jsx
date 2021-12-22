import React from 'react'

import Select from "react-select";
import {useForm,Controller} from 'react-hook-form';


export default function Signup() {    
 

    const {control, register,handleSubmit,formState: { errors }}=useForm();
   

    const onSubmit = (data,e) => {       
        e.preventDefault();
        alert('smt')
        window.location.href = '/final';           
    }
    const onError = (errors) => {       
        console.log('error',errors)
    }

    const methods = [
      {value: 'Easybox', label:'Courier'},
      {value: 'Courier', label:'Easybox'}]
    
        return (
            <div className='content'>
                <h1 className='text-center mt-5'>Shipping details</h1>
                <hr />
                <div className=' d-flex justify-content-center  '>
                    <form className=' bg-light p-5' onSubmit={handleSubmit(onSubmit,onError)}>
                        <h3>Get in touch</h3>
                        <br />
                        <input
                            placeholder='Your first name'
                            {...register('firstName', { required: true, minLength: 3 })} />
                            <br/>
                            {(errors.firstName && <div className='d-flex ' style={{color:'red'}}><i className="bi bi-x"></i><p>Insert more than 3 letters </p></div>) || <br/>} 

                            <input  placeholder='Your last name' {...register('lastName',{required:true,minLength:3})} />
                            <br />
                            {(errors.lastName && <div className='d-flex ' style={{color:'red'}}><i className="bi bi-x"></i><p>Insert more than 3 letters</p></div>) || <br/>} 
                        <input
                            placeholder='Your email'
                            {...register('email',
                                {
                                    required: true,
                                    minLength: 5,
                                    pattern:
                                        {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    }
                                })}
                        />
                            <br /> 
                            {(errors.email && <div className='d-flex ' style={{color:'red'}}><i className="bi bi-x"></i><p>Please enter a valid email</p></div>) || <br/>}

                            <input  placeholder='Your country'  {...register('country',{required:true,minLength:5})} />
                            <br />
                            {(errors.country && <div className='d-flex ' style={{color:'red'}}><i className="bi bi-x"></i><p>Insert more than 4 letters</p></div>) || <br/>}

                            <input  placeholder='Your complete address' {...register('address',{required:true,minLength:5})} />
                            <br />
                            {(errors.address && <div className='d-flex ' style={{ color: 'red' }}><i className="bi bi-x"></i><p>Insert a complete address</p></div>) || <br />}
                            
                        <Controller
                            control={control}
                            // rules={{ required: true }}
                            name="shippingMethod"
                            render={({field}) => (
                                <Select options={methods} />
                            )}
                        />
                            {/* {(!errors.shippingMethod && <div className='d-flex ' style={{ color: 'red' }}><i className="bi bi-x"></i><p>Select an option.</p></div>) || <br />} */}
                        <br />
                        <div className='btn-wrapper'>                           
                           <button className='btn btn-sign btn-primary mt-4' type='submit' onSubmit={handleSubmit(onSubmit,onError)} >Submit</button>
                        </div>
                    </form>
                    <div className='contact py-5 px-3' style={{ backgroundColor: '#0a4275', color: '#fff' }}>
                        <h3 className='mx-3'>Contact</h3>
                        <div className='d-flex m-3 pt-2'>
                            <i className="bi bi-geo-alt-fill mx-2"></i>
                            <p><b>Address: </b>198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                        <div className='d-flex m-3'>
                            <i className="bi bi-telephone-fill mx-2"></i>
                            <p><b>Phone: </b>+ 1235 2355 98</p>
                        </div>
                        <div className='d-flex m-3'>
                            <i className="bi bi-send-fill mx-2"></i>
                            <p><b>Email: </b>myemail@textme.com</p>
                        </div>
                        <div className='d-flex m-3'>
                            <i className="bi bi-globe mx-2"></i>
                            <p><b>Website: </b>LiquorStore.ro</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


