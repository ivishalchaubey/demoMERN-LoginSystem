import React, { useEffect, useState } from 'react'
import { allUsers } from '../api/api';

const Home = () => {
    const [alldata, setAllData] = useState([]);

    useEffect(() => {
        datas();
    }, [])


    const datas = async () => {
        try {
            let data = await allUsers()
            let response = data.data
            setAllData(response)
            console.log(alldata);
        } catch (error) {
            console.log("Some Problem Accured..");
        }
    }
    return (
        <div className='container my-4'>
            {
                alldata.map((item) => (<>
                    <div className="card my-3" key={item._id}>
                        <div className="card-header">
                            {item.username}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{item.fullName}</h5>
                            <p className="card-text">{item.email}</p>
                            <p className="card-text">DOB: - {item.dob}</p>
                            <p className="card-text">Gender: - {item.gender}</p>
                        </div>
                    </div>

                </>))
            }
        </div>
    )
}

export default Home