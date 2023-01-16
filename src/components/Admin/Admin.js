import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';
import './Admin.css';
import axios from 'axios';

const Admin = () => {
    const [addService, setAddService] = useState(false);
    const [manageService, setManageService] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [service, setService] = useState({});
    const [showServices, setShowServices] = useState(null);
    const [imageURL, setImageURL] = useState(null);

    // useEffect is used to load from server side 
    useEffect(() => {
        fetch('http://localhost:5000/showServices')
            .then((response) => response.json())
            .then((data) => {
                setShowServices(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    // Here, react useForm is used to saved data into database
    const onSubmit = () => {
        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Data added successfully');
                    reset();
                }
            });
    }

    const handleOnBlur = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const newService = { ...service };
        newService[field] = value;
        setService(newService);
    }

    const handleManageService = () => {
        setManageService(true);
        setAddService(false);
        //setIsEditService(false);
    }

    const handleAddService = () => {
        setAddService(true);
        setManageService(false);
        //setIsEditService(false);
    }

    //Imagebb used to host image data and get the link
    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '2473d8a7f5f5ba28cf6657d5d572953f');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
        const field = event.target.name;
        const newService = { ...service };
        newService[field] = imageURL;
        setService(newService);
    }

    // Deleting data by authorized user 
    const handleDelete = (showService) => {
        const agree = window.confirm(`Are you sure to delete: ${showService.title}`);
        if (agree) {
            fetch(`http://localhost:5000/showServices/${showService._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Data deleted');
                        const remainingServices = showServices.filter(pd => pd._id !== showServices._id);
                        setShowServices(remainingServices);
                    }
                });
        }
    }

/*     const handleUpdate = (showService) => {
        setIsEditService(true);
        setAddService(false);
        setManageService(false);
        const findService = showServices.find(sd => sd._id === showService._id);
        setEditService(findService);
    } */
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 bg-secondary justify-content-center align-items-center'>
                    <div><h1 className='text-white'>SE Liimaus</h1></div><hr />
                    <div><Link onClick={() => handleManageService()} className='nav-link text-light'><DashboardIcon />Manage Product</Link></div><br />
                    <div><Link onClick={() => handleAddService()} className='nav-link text-light'><AddIcon />Add Product</Link></div><br />
                </div>
                <div className='col-md-9 bg-light mb-2'>
                    <h1>Dashboard for service management</h1><hr />
                    {
                        addService &&
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-row d-flex justify-content-around">
                                <div className="form-group col-md-5">
                                    <label>Service Title</label>
                                    <input {...register("title", { required: true })} onBlur={handleOnBlur} name='title' type="text" className="form-control" placeholder="Enter title" />
                                    {errors.title && <span className='error'>Title is required</span>}
                                </div>
                                <div className="form-group col-md-5">
                                    <label>Description</label>
                                    <input {...register("description", { required: true })} onBlur={handleOnBlur} name='description' type="text" className="form-control" placeholder="Enter description" />
                                    {errors.description && <span className='error'>Description is required</span>}
                                </div>
                            </div> <br />
                            <div className="form-row d-flex justify-content-around">
                                <div className="form-group col-md-5">
                                    <label>Price</label>
                                    <input {...register("price", { required: true })} onBlur={handleOnBlur} name='price' type="text" className="form-control" placeholder="Enter price" />
                                    {errors.price && <span className='error'>Price is required</span>}
                                </div>
                                <div className="form-group col-md-5">
                                    <label>Add Image</label>
                                    <input name='image' type="file" className="form-control" onChange={handleImageUpload} placeholder="Upload image" />
                                </div>
                            </div>
                            <br />
                            <div className="form-row d-flex justify-content-center">
                                <button className="btn btn-outline-info" type="submit">Save Item</button>
                            </div>
                        </form>
                    }
                    {
                        manageService &&
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col"> Weight</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    showServices && showServices.map(showService =>
                                        <tr key={showService._id}>
                                            <th scope="row">{showService._id}</th>
                                            <td>{showService.title}</td>
                                            <td>{showService.description}</td>
                                            <td>{showService.price}</td>
                                            <td><Link className='btn btn-danger'><DeleteIcon onClick={() => handleDelete(showService)} /></Link></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;