import React, { useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import Header from "../components/Header";
import ProfileDetails from "../components/ProfileDetails";
import YourListings from "../components/YourListings";
import { getUserProducts } from '../actions/userProducts';

const LoggedIn = ({ logins, userProducts }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserProducts(logins?.data.token, logins?.data.data[0]?.accID));
    },[])
    return (
        <>
            <Header modal={() => { }} showButton={false} showUser={true} userInformations={logins?.data}/>
            <ProfileDetails userInformations={logins?.data} />
            <YourListings products={userProducts} />
        </>
    )

}

const mapStateToProps = state => ({
    logins: state.logins,
    userProducts: state.userProducts
})

export default connect(mapStateToProps, { getUserProducts })(LoggedIn)