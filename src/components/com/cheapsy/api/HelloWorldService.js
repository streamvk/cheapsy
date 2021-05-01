import axios from 'axios';


class HelloWorldService {

    executeHelloWorldService() {

        return axios.get("http://localhost:8765/say");
    };

    getProductById(id) {
        return axios.get(`http://localhost:8765/product/get/v2/${id}`);
    }

}

export default new HelloWorldService();