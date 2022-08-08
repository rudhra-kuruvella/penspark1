import React from 'react'
import './index.css'
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';



function Header() {
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-light  my-nav justify-content-center align-items-center">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1648550731/2_ydoaok.png" alt="" width="30" height="24" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex ">
                        <input className="form-control me-2 my-form" type="search" placeholder="Search Items" aria-label="Search" />
                        <i class="fa-solid fa-magnifying-glass"></i>

                    </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <div className='pl-40'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item my-nav-item active">
                                    <a className="nav-link " aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item dropdown my-nav-item">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu my-dropdown shadow" aria-labelledby="navbarDropdown">
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <div className=''>
                                                    <img src='https://res.cloudinary.com/dlxfoztlz/image/upload/v1656917203/guide-02_mhxxvd.jpg' className='img-fluid' width='100px' height='300px' />
                                                </div>
                                                <li className='dropdown-item'></li>
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>

                                                <li><a className="dropdown-item" href="#"></a></li>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className=''>
                                                    <img src='https://res.cloudinary.com/dlxfoztlz/image/upload/v1656917203/guide-02_mhxxvd.jpg' className='img-fluid' width='100px' height='300px' />
                                                </div>
                                                <li className='dropdown-item'></li>
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>

                                                <li><a className="dropdown-item" href="#"></a></li>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className=''>
                                                    <img src='https://res.cloudinary.com/dlxfoztlz/image/upload/v1656917203/guide-02_mhxxvd.jpg' className='img-fluid' width='100px' height='300px' />
                                                </div>
                                                <li className='dropdown-item'></li>
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>

                                                <li><a className="dropdown-item" href="#"></a></li>
                                            </div>
                                        </div>

                                    </ul>
                                </li>
                                {/* <li className="nav-item">
                                <a className="nav-link" href="#">About US</a>
                            </li> */}

                                <li className="nav-item my-nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                                <li className="nav-item my-nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="#">|</a>
                                </li>
                                <div className='my-bell '>
                                    <div className="dropdown my-bell">
                                        <div className="" type="" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 6.43994V9.76994" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M15.33 18.8201C15.33 20.6501 13.83 22.1501 12 22.1501C11.09 22.1501 10.25 21.7701 9.65004 21.1701C9.05004 20.5701 8.67004 19.7301 8.67004 18.8201" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path></svg>
                                        </div>
                                        <ul className="dropdown-menu shadow" aria-labelledby="dropdownMenu2">
                                            <li><button className="dropdown-item" type="button">Action</button></li>
                                            <li><button className="dropdown-item" type="button">Another action</button></li>
                                            <li><button className="dropdown-item" type="button">Something else here</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <li className="nav-item separate-button">
                                    <button className="btn my-btn text-white" type="submit">Create</button>
                                </li>
                                <div className="dropdown">
                                    <div className="ps-3" type="" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <Avatar alt="Remy Sharp " src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1655703261/gopi_rshxdp.png" />
                                    </div>
                                    <ul className="dropdown-menu my-avatar shadow" style={{ borderRadius: 10 }} aria-labelledby="dropdownMenu2">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1655703261/gopi_rshxdp.png" alt="..." width={50} className='img-fluid' />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h4 className='my-h4 justify-content-center align-content-center'>Gopal </h4>
                                                    <p>UI Developer</p>
                                                </div>
                                            </div>
                                            <hr />

                                        </li>
                                        <li className='profile-list'><div className='d-flex'><div className="flex d-inline items-center justify-center flex-shrink-0 "><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                                        </div>



                                        
                                            <div className="ms-2 d-inline justify-content-center align-content-center"><p className="text-sm font-medium ">My Profile</p></div></div></li>
                                        <li><div className='d-flex'><div className="flex d-inline items-center justify-center flex-shrink-0 "><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                                        </div>
                                            <div className="ms-2 d-inline"><p className="text-sm font-medium ">My Items</p></div></div></li>
                                        <li><div className='d-flex'><div className="flex d-inline items-center justify-center flex-shrink-0 "><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.2101 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.8201 15.13 19.2101 15.74Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.7001 16.25C19.0001 17.33 19.84 18.17 20.92 18.47" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15C13.0399 15 14.0399 15.15 14.9699 15.43" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                                        </div>
                                            <div className="ms-2 d-inline"><p className="text-sm font-medium ">Edit Profile</p></div></div></li><hr />
                                        <li><div className='d-flex'><div className="flex d-inline items-center justify-center flex-shrink-0 "><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.89999 4.92993L8.43999 8.45993" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.89999 19.07L8.43999 15.54" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.05 19.07L15.51 15.54" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.05 4.92993L15.51 8.45993" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                                        </div>
                                            <div className="ms-2 d-inline"><p className="text-sm font-medium ">Help</p></div></div></li>
                                        <li><div className='d-flex'><div className="flex d-inline items-center justify-center flex-shrink-0 "><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 12H3.62" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                                        </div>
                                            <div className="ms-2 d-inline"><p className="text-sm font-medium ">Log Out</p></div></div></li>

                                    </ul>
                                </div>
                                {/* <li className='separate-button' style={{ paddingLeft: 10 }}>
                                    <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1655703261/gopi_rshxdp.png" />
                                </li> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>






        </div>
    )
}

export default Header