import React from 'react';
import ThemeContextProvider from './social-media-dashboard/components/theme-context';

import SocialMediaDashboadCollection from './social-media-dashboard/components/collection.component';

const App =()=>{
    return(
        <ThemeContextProvider> 
            <SocialMediaDashboadCollection/> 
        </ThemeContextProvider>
    )
}

export default App;
