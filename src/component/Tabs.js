import React from 'react'

const Tabs = () =>{
    
    let tabsList = [
        {id : 1, tabName : "Animation"},
        {id : 2, tabName : "Layers"},
        {id : 3, tabName : "Settings"}
    ]
    
    let tabsListStr = tabsList.map(tab => {
        return <p key={tab.id}>{tab.tabName}</p>
    });

    return(
        <div className="tabslist">
            {tabsListStr}
        </div>
    )

    
}

export default Tabs