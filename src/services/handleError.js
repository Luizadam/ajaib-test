const handleError = async (status, message) => {
    if (status === 401) {
        //you can handle error 
    } else if (status === 400) {
        //you can handle error 
    } else if (status === 403) {
        //you can handle error 
    } else if (status === 404) {
        //you can handle error 
    } else if (status === 500) {
        //you can handle error 
    } else if (status !== 200) {
    }
  };

export default handleError