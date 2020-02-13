// config para los request, usa axios

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
          'Bearer XkB6Wvl_TsOy6cSM01L0yYofLr6cLN1_ln1V8jgs86bsmfs4e86g2FscIO4o4BdNuT-pN4zE6sBl6G8CPvDvGSB7g4Sz2O_QI2zc_DGlmcBZ3QKNT07-SBPiI79vXXYx'
    }
});
