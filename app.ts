interface FormData {
    email: string | undefined;
    password: string | number| undefined;
}

async function validateForm(): Promise<void> {
    const emailElement : HTMLInputElement | null = <HTMLInputElement>document.getElementById("exampleInputEmail1");
    const passwordElement : HTMLInputElement | null = <HTMLInputElement>document.getElementById("exampleInputPassword1");
    const data : FormData = {email: emailElement?.value.trim(), password: passwordElement.value.trim()};
    return new Promise((resolve, reject) => {
            try{
                const result = performAsyncOperation();
                console.log(result);
                if (!data.email || !data.password) {
                    reject(new Error("Invalid"));

                } else {
                    resolve();
                }
            }
            catch(error){
                console.log(error)
            }
    });
}

async function performAsyncOperation(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Async operation completed');
            resolve('Async operation completed');
        }, 2000); // Simulating a 2-second delay
    });
}

validateForm();

async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched successfully!');
      }, 2000);
    });
  }

  //async-await function with loader
  async function fetchDataWithLoader(): Promise<void> {
    let loader:any 
    let content:any
    try {
      loader = document.getElementById('loader');
      content= document.getElementById('content');
      // Display loader while fetching data
      loader.style.display = 'flex';
  
      console.log('Fetching data...');
  
      // Simulate an asynchronous operation (e.g., API call)
      const result = await fetchData();
  
      // Hide loader when data is fetched
      loader.style.display = 'none';
  
      // Display the fetched data
      content.innerHTML = `<p>${result}</p>`;
    } catch (error) {
      const loader = document.getElementById('loader');
      console.error('Error fetching data:', error);
  
 
    }
  }
  
  // Call the async function with loader
  fetchDataWithLoader();
  
