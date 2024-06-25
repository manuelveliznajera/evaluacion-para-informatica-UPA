import React from 'react'

export const convertAge = (date) => {

    let today = new Date();
    let year = today.getFullYear();
        if (date) {
            
        const yearUser = Number(year) - Number(date.split('-')[0]) ;
         return yearUser;
        }
        
        
}
