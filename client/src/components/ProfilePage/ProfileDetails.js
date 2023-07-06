import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { accountUser } from '../../features/User/UserAction'
import EditProfile from './EditProfile'

const ProfileDetails = () => {
    const dispatch = useDispatch()
    const [userToggle, setUserToggle] = React.useState(false)
    const [mobileToggle, setMobileToggle] = React.useState(false)

    React.useEffect(() => {
        dispatch(accountUser())
    }, [])

    const user = useSelector((state) => {
        return state.user
    })

    const handleUserToggle = () => {
        setUserToggle(!userToggle)
    }

    const handleMobileToggle = () => {
        setMobileToggle(!mobileToggle)
    }

    console.log(user)

    return (
        <div className='grid grid-cols-1 gap-4 w-[1000px]'>
            <div className='flex items-center'>
                <h6 className='white-cl mr-2'>Name:</h6>
                {
                    !userToggle && (
                        <>
                            <p>{user.user && user.user.name}</p>
                            <p className='ml-6' onClick={handleUserToggle}>Edit</p>
                        </>
                    )
                }
                {
                    userToggle && <EditProfile
                        handleUserToggle={handleUserToggle}
                        userToggle={userToggle}
                        lable={"name"}
                        data={user.user.name}
                    />
                }
            </div>
            <div className='flex'>
                <h6 className='white-cl mr-2'>Email:</h6>
                <p>{user.user && user.user.email}</p>
            </div>
            <div className='flex'>
                <h6 className='white-cl mr-2'>Mobile:</h6>
                {
                    !mobileToggle && (
                        <>
                            <p>{user.user && user.user.mobile}</p>
                            <p className='ml-6'>Edit</p>
                        </>
                    )
                }
                {
                    mobileToggle && <EditProfile
                        handleMobileToggle={handleMobileToggle}
                        mobileToggle={mobileToggle}
                        lable={"mobile"}
                        data={user.user.mobile}
                    />
                }
            </div>
            <div className='flex'>
                <h6 className='white-cl mr-2'>Role:</h6>
                <p>{user.user && user.user.role}</p>
            </div>
        </div>
    )
}

export default ProfileDetails
