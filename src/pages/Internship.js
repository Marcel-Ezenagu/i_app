import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCompanies } from '../actions/companyActions';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';

import Company from '../Company';
import './Internship.css';

export default function Internship() {
    
    const dispatch = useDispatch();
/* 
    const [ploading, setPLoading] = useState(false);
    const [perror, setPerror] = useState(false); */
    const companyList = useSelector((state) => state.companyList);
    const { loading, error, companies } = companyList;

    // useEffect(() => {
    //     dispatch(listCompanies());
    // }, [dispatch, listCompanies]); 
    
    return (

        <div className='internship' >  
            {loading ? (<LoadingBox />) 
                : error ? (<MessageBox>{error}</MessageBox>)
                    : (
               
                        <div>
                            {companies.map((company) => (     
                             <Company key={company.id}
                                id= {company.id}
                                title= {company.titleOfIntern}
                                price={company.stipend}
                                company={company.name}
                                location={company.location}
                    
                             />
                      ) )
                }
            </div> 


         
            )}

                               
        </div>
    )
}
